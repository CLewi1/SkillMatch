from fastapi import FastAPI, UploadFile, File, Response
import os
from database import Resume, SessionLocal
from fastapi.middleware.cors import CORSMiddleware
from docx import Document


app = FastAPI()

# CORS configuration
origins = [
    "https://turbo-engine-rx4vqr94j4r3xp5q-5173.app.github.dev",  # CodeSpaces development domain
    #"https://domain.com"  # Allows Production domain
]

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

print("CORS middleware added successfully")  # Debug line

@app.get("/")
def read_root(response: Response):
    # Manually add CORS headers

    return {"msg": "SkillMatch API is live"}

@app.post("/upload")
async def upload_file(file: UploadFile = File(...), response: Response = None):
    # Validation checks
    if file.content_type != "application/pdf" and file.content_type != "application/vnd.openxmlformats-officedocument.wordprocessingml.document" and file.content_type != "application/msword":
        return {"error": "Not a supported file type!"}
    if file.size > 5 * 1024 * 1024:  # 5 MB limit
        return {"error": "File too large!"}

    # Save file
    result = await save_file(file)

    if file.content_type == "application/pdf":
        # Extract text from PDF
        text = await extract_from_pdf(result["saved_to"])
    elif file.content_type == "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        # Extract text from DOCX
        text = await extract_from_docx(result["saved_to"])
    else:
        return {"error": "Unsupported file type for extraction"}

    result["extracted_text"] = text

    return result

async def save_file(file: UploadFile):
    # Read file content
    content = await file.read()

    # Ensure uploads directory exists
    os.makedirs("uploads", exist_ok=True)
    file_path = os.path.join("uploads", file.filename)

    # Save file
    with open(file_path, "wb") as f:
        f.write(content)

    print(f"File saved to: {file_path}")

    # Get file size
    size = len(content)

    session = SessionLocal()
    try:
        # Create Resume Object
        resume = Resume(
            filename=file.filename,
            size=size,
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

    # Return metadata
    return {
        "file_name": file.filename,
        "size": size,
        "content_type": file.content_type,
        "saved_to": file_path
    }

async def extract_from_pdf(file_path: str):
    pass

async def extract_from_docx(file_path: str):
    doc = Document(file_path)
    text = []
    for para in doc.paragraphs:
        text.append(para.text)
    
    return text
