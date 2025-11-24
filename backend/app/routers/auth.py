
from fastapi import Depends , APIRouter
from sqlalchemy.orm import Session 
from ..database.connection import SessionLocal 
from .. import schemas , models
from ..utils.hashing import hash_password , verify_password 
from ..utils.jwt_handler import create_access_token
from ..schemas.user import UserCreate, UserLogin


router = APIRouter(prefix = "/auth" , tags= ["Auth"])

def get_db():
    db = SessionLocal()
    try :
        yield db 
    finally : 
        db.close();

@router.post("/register")
def signup(user: UserCreate, db: Session = Depends(get_db)):
    existing = db.query(models.User).filter(models.User.email == user.email).first()
    if existing:
        return {"error": "email already exists"}    

    hashed = hash_password(user.password)
    new_user = models.User(email = user.email , password = hashed , role = user.role)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return {"msg" : "User created successfully" }


@router.post("/login")
def login(user: UserLogin, db: Session = Depends(get_db)):
    db_user = db.query(models.User).filter(models.User.email == user.email).first()
    if not db_user or not verify_password(user.password , db_user.password):
        return {"error":"sahi dalo bahi"}

    token = create_access_token({"id" : db_user.id , "email" : db_user.email} )
    return {"access_token" : token , "role" : db_user.role}




