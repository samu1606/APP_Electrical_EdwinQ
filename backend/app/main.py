from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .database import Base, engine
from .routes.contacts import router as contacts_router

# Crear tabla en BD si no existe
Base.metadata.create_all(bind=engine)

# Crear app FastAPI
app = FastAPI(
    title="Mi API",
    description="API para servicios de IA y electricidad",
    version="1.0.0",
    docs_url="/api/docs",
    redoc_url="/api/redoc",
    openapi_url="/api/openapi.json"
)

# CORS: Permitir que Next.js (localhost:3000) pueda hacer requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",                  # Frontend local
        "http://localhost:3001",                  # Frontend alternativo
        "https://elingesmartgrids.cloud",         # Producción (HTTPS)
        "https://www.elingesmartgrids.cloud",     # Producción (www)
        "http://148.230.90.171",                  # Fallback IP
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Incluir rutas
app.include_router(contacts_router)

# Endpoint de prueba
@app.get("/api/")
def read_root():
    """Endpoint de bienvenida"""
    return {
        "mensaje": "Bienvenido a MI API",
        "docs": "/api/docs"
    }

@app.get("/api/health")
def health_check():
    """Verificar que el servidor está vivo"""
    return {"status": "ok"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=True  # Recarga cuando cambias código
    )