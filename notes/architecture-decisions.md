# Architecture Decisions - SkillMatch AI

## Backend Stack Decisions

### FastAPI Framework ✅
**Decision**: Use FastAPI for the REST API
**Reasoning**: 
- Automatic API documentation (Swagger)
- Built-in async support for ML workloads
- Excellent type hints and validation
- Modern Python patterns

**Alternatives Considered**: Flask, Django REST Framework
**Date**: July 22, 2025

### ASGI Server: uvicorn ✅
**Decision**: Use uvicorn as the ASGI server
**Reasoning**:
- Recommended by FastAPI docs
- Excellent development experience with --reload
- High performance for production
- Easy transition to Gunicorn + uvicorn workers later

**Date**: July 22, 2025

### Virtual Environment Strategy ✅
**Decision**: Use Python's built-in venv in .venv/ folder
**Reasoning**:
- Standardized approach
- Works well with VS Code Python extension
- Gitignored by default
- No additional tools required

**Date**: July 22, 2025

### Development Workflow ✅
**Decision**: uvicorn with --reload for development
**Reasoning**:
- Immediate feedback on code changes
- Standard FastAPI development pattern
- Easy debugging and testing
- Automatic API docs refresh

**Date**: July 22, 2025

### File Upload Strategy ✅
**Decision**: Use FastAPI's UploadFile with python-multipart for file handling
**Reasoning**:
- Built-in validation and metadata extraction
- Async file reading for performance
- Integrates seamlessly with FastAPI's dependency injection
- Handles multipart/form-data parsing automatically

**Alternatives Considered**: Raw request parsing, external file upload services
**Date**: July 22, 2025

### File Storage Location ✅
**Decision**: Save uploaded files to local `uploads/` directory in backend folder
**Reasoning**:
- Simple for development and testing
- Direct file system access for ML processing
- Easy to implement and debug
- Clear separation from code files

**Production Considerations**: Will migrate to cloud storage (S3, etc.) in Phase 12
**Date**: July 22, 2025

### File Validation Strategy ✅
**Decision**: Validate file type via MIME type and enforce 5MB size limit
**Reasoning**:
- `application/pdf` ensures only PDF resumes
- 5MB limit prevents abuse and server overload
- Early validation provides fast feedback to users
- Content-type checking prevents malicious uploads

**Date**: July 22, 2025

### API Response Format ✅
**Decision**: Return JSON with file metadata (filename, size, content_type, saved_to)
**Reasoning**:
- Consistent with REST API patterns
- Provides client with upload confirmation
- Includes metadata needed for frontend display
- Enables tracking and debugging

**Date**: July 22, 2025

### Database Choice ✅
**Decision**: Start with SQLite for local development and prototyping. Plan to migrate to PostgreSQL (local or Supabase) for production.
**Reasoning**:
- SQLite is simple, requires no setup, and is ideal for prototyping and single-user development.
- PostgreSQL is robust, scalable, and widely used in production environments.
- SQLAlchemy supports both, making migration straightforward.
- Supabase offers managed PostgreSQL with additional features for scaling.

**Date**: July 22, 2025


## Future Decisions Needed

### ML Model Storage
**Options**: Local pickle files vs cloud storage vs model registry
**Timeline**: Phase 6

### Frontend Framework
**Options**: React (planned) vs alternatives
**Timeline**: Phase 4

### Deployment Strategy
**Options**: Docker + cloud vs traditional hosting
**Timeline**: Phase 12

## Development Patterns Established

### Error Handling Pattern ✅
**Decision**: Return descriptive error objects for validation failures
**Example**: `{"error": "Not a PDF File!"}` for invalid file types
**Reasoning**:
- Clear user feedback
- Consistent error format
- Easy for frontend to parse and display

**Date**: July 22, 2025
