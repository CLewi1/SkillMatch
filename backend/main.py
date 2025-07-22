from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"msg": "SkillMatch API is live"}
