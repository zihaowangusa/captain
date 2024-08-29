from typing import Optional, Literal
from pydantic import BaseModel
from datetime import datetime

class Employee(BaseModel):
    uid: str
    name: str
    email: Optional[str] = ''
    phone: Optional[str] = ''
    department: Literal['Doctor', 'Assistant', 'Hygienist', 'Support']
    clinic: Literal['San Jose', 'Santa Clara', 'Redwood City']
    created_time: Optional[datetime] = ''
    updated_time: Optional[datetime] = ''