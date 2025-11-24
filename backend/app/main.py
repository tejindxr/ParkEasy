from fastapi import FastAPI
from .routers import auth 
from .database.connection import Base , engine
from .models import user

Base.metadata.create_all(bind = engine)

app = FastAPI()

app.include_router(auth.router)

@app.get("/")
def root():
    return {"message" : "Parkeasy backend is running"}
