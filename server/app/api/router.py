from fastapi import FastAPI, APIRouter, Request,Header
from fastapi.staticfiles import StaticFiles
from starlette.exceptions import HTTPException 
from fastapi.responses import JSONResponse
from api import schedule
from api import employee

router = APIRouter()

@router.get("/health")
async def health() -> str:
    return "OK"

def register_router(app: FastAPI): 
    app.include_router(router, prefix="/api",  tags=['Base'])
    app.include_router(schedule.router, prefix="/api/schedule",  tags=['Base'])
    app.include_router(employee.router, prefix="/api/employee",  tags=['Base'])
    app.mount("/", StaticFiles(directory="../", html=True, check_dir=False), name="html")

    @app.exception_handler(HTTPException)
    async def http_exception_handler(request, exc):
        return JSONResponse(
            status_code=exc.status_code, content={"message": exc.detail}
        )

    @app.exception_handler(Exception)
    async def http_exception_handler(request, ex:Exception):
        return JSONResponse(status_code=400, content={"message": str(ex)})