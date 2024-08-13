from typing import List, Optional
from pydantic import BaseModel

class Event(BaseModel):
     id: str
     title: str
     start: str
     end: str
     resourceId: str
     bgColor: Optional[str] = "#f759ab"
     group: Optional[str] = ''
     name: Optional[str] = ''
     note: Optional[str] = ''
     rrule: Optional[str] = ''
     resizable: Optional[bool] = False
     movable: Optional[bool] = False