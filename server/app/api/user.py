from fastapi import APIRouter, Request, Depends
from fastapi.responses import JSONResponse
from db import get_db
from utils import parser
from schema.user import Employee
from pydantic import BaseModel

router = APIRouter()

class EmployeeInfo(BaseModel):
    employee: Employee

class EmployeeId(BaseModel):
    uid: str


@router.get("/employee", summary="Get Employee Info")
async def get_employee(request: Request, db=Depends(get_db)):
    employee_collection = db.get_collection("employee")
    if(request.query_params.get("uid", None)):
        employee = await employee_collection.find_one({"uid": request.query_params.get("uid")})
        return JSONResponse({"code": 200, "data": parser.parse_json(employee)})
    else:
        employee_list = []
        async for employee in employee_collection.find():
            employee_list.append(parser.parse_json(employee))

        return JSONResponse({"code": 200, "data": employee_list})


@router.post("/employee", summary="Create New Employee")
async def create_employee(data: EmployeeInfo, db=Depends(get_db)):
    employee_collection = db.get_collection("employee")
    await employee_collection.insert_one(data.employee.model_dump())
    return JSONResponse({"code": 200, "message": "Successfully Created New Employee", "data": []})


@router.put("/employee", summary="Update Employee Info")
async def update_employee(data: EmployeeInfo, db=Depends(get_db)):
    employee_collection = db.get_collection("employee")
    await employee_collection.update_one({"uid": data.employee.uid }, {"$set": data.employee.model_dump()})
    return JSONResponse({"code": 200, "message": "Successfully Updated Employee Info", "data": []})


@router.delete("/employee", summary="Delete Employee")
async def delete_employee(data: EmployeeId, db=Depends(get_db)):
    employee_collection = db.get_collection("employee")

    if data.uid:
        await employee_collection.delete_one({"uid": data.uid})
        return JSONResponse({"code": 200, "message": "Successfully Deleted Employee", "data": []})
    else:
        return JSONResponse({"code": 404, "message": "Employee Not Found", "data": []})