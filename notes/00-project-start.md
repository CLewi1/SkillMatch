# Project Start - SkillMatch AI

## Overview
Building an AI-powered resume analyzer that extracts skills, classifies job roles, and matches candidates to relevant job opportunities.

## Architecture Decision
- **Backend**: Python FastAPI + ML models
- **Frontend**: React
- **Database**: Will decide between SQLite/PostgreSQL 
- **ML**: Start with simple models (TF-IDF + LogisticRegression)

## Current Status
- ✅ Root folder created
- ✅ Notes folder established  
- ✅ Backend/, frontend/, ml_models/ folders created
- ✅ Comprehensive .gitignore added (Python + Node + VSCode)
- ✅ README.md updated with project description
- ✅ Git repository initialized and tracked
- ✅ **Phase 0 Complete!**
- ✅ Virtual environment created (Python 3.12.1)
- ✅ FastAPI + uvicorn + python-multipart installed
- ✅ Basic FastAPI app created and tested
- ✅ Development server working with auto-reload
- ✅ **Phase 1 Complete!**
- ✅ POST /upload endpoint created
- ✅ PDF validation and file size limits
- ✅ File saving to uploads/ directory
- ✅ Metadata response with file details
- ✅ **Phase 2 Complete!**

## Next Steps
Ready to move to **Phase 3 - PostgreSQL Integration**:
1. Choose database (SQLite vs PostgreSQL)
2. Create Resume model with SQLAlchemy
3. Save file metadata to database
4. Track upload history

## Notes Structure Plan
- `00-project-start.md` - This file
- `01-phase-notes/` - Folder for each phase documentation
- `architecture-decisions.md` - Key technical decisions