# backend/main.py

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.controllers import register_routers

app = FastAPI(
    title="MELI Product Detail API",
    description="Backend API for managing product details in a file-based marketplace system.",
    version="1.0.0"
)

# Optional: enable CORS if frontend will consume this locally
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust as needed
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register all API routers
register_routers(app)

# Optional root
@app.get("/")
def read_root():
    return {"message": "MELI Product Detail API is running"}
