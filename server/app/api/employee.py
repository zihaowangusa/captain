import json
import dateutil.parser
from fastapi import APIRouter, Request, Depends
from fastapi.responses import JSONResponse
from bson.objectid import ObjectId
from db import get_db
from bson import json_util
from utils import parser

router = APIRouter()

@router.get("/info", summary="Get Employee Info")
async def get_employee(db=Depends(get_db)):
    employee_collection = db.get_collection("employee")
    employee_list = []
    async for employee in employee_collection.find():
        employee_list.append(parser.parse_json(employee))

    return JSONResponse({"code": 200, "data": employee_list})
