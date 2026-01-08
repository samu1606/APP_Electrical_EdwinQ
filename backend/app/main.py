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
    version="1.0.0"
)

# CORS: Permitir que Next.js (localhost:3000) pueda hacer requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",      # Frontend local
        "http://localhost:3001",      # Frontend (puerto alternativo)
        "https://tudominio.com",      # Tu dominio en producción
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Incluir rutas
app.include_router(contacts_router)

# Endpoint de prueba
@app.get("/")
def read_root():
    """Endpoint de bienvenida"""
    return {
        "mensaje": "Bienvenido a MI API",
        "docs": "http://localhost:8000/docs"
    }

@app.get("/health")
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