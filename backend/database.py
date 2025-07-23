from sqlalchemy import create_engine, Column, Integer, String, DateTime
from datetime import datetime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

DATABASE_URL = "sqlite:///./data/skillmatch.db"

engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()
Base.metadata.create_all(engine)

class Resume(Base):
    __tablename__ = "resumes"

    id = Column(Integer, primary_key=True, autoincrement=True)
    filename = Column(String(32), nullable=False)
    upload_time = Column(DateTime, default=datetime.now, nullable=False)
    size = Column(Integer, nullable=False)
    user_id = Column(Integer, nullable=True) # Optional until user management is implemented


