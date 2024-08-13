from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from api.router import register_router
import uvicorn

def create_app() -> FastAPI:
    server = FastAPI()
    server.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=False,
        allow_methods=["*"],
        allow_headers=["*"],
    )
    register_router(server)
    return server

app = create_app()

if __name__ == '__main__':
    uvicorn.run(app, host="127.0.0.1", port=9688)