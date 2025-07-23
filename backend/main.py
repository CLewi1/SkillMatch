from fastapi import FastAPI, UploadFile, File
import os
from database import Resume, SessionLocal

app = FastAPI()

@app.get("/")
def read_root():
    return {"msg": "SkillMatch API is live"}

@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    # Validation checks
    if file.content_type != "application/pdf":
        return {"error": "Not a PDF File!"}
    if file.size > 5 * 1024 * 1024:  # 5 MB limit
        return {"error": "File too large!"}

    # Read file content
    content = await file.read()

    # Create file path
    file_path = os.path.join("uploads", file.filename)

    # Save file
    with open(file_path, "wb") as f:
        f.write(content)

    print(f"File saved to: {file_path}")

    session = SessionLocal()
    try:
        #Create Resume Object
        resume = Resume(
            filename=file.filename,
            size=file.size,
            user_id=None  # Optional until user management is implemented
        )

        # Add to session
        session.add(resume)
        # Commit
        session.commit()
    except Exception as e:
        session.rollback()
        return {"error": str(e)}
    finally:
        # Close session
        session.close()


    # return metadata
    return {
        "file_name": file.filename,
        "size": file.size,
        "content_type": file.content_type,
        "saved_to": file_path
    }

