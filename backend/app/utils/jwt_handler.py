
from datetime import datetime , timedelta 
from jose import JWTError , jwt 

SECRET_KEY = "supersecretkey"
ALGORITHM = "HS256"

def create_access_token(data : dict)-> str:

    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(hours = 24)
    to_encode.update({"exp" : expire})
    return jwt.encode(to_encode , SECRET_KEY , algorithm = ALGORITHM)

def verify_access_token(token : str)-> dict | None:
    try :
        payload = jwt.decode(token , SECRET_KEY , algorithms =[ALGORITHM])
        return payload
    except JWTError :
        return None