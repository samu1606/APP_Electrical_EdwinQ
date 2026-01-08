from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional

class ContactMessageCreate(BaseModel):
    """Esquema para crear un mensaje de contacto"""
    nombre: str
    email: EmailStr  # Valida que sea email válido
    mensaje: str

    class Config:
        from_attributes = True

class ContactMessageResponse(BaseModel):
    """Esquema de respuesta (lo que retorna la API)"""
    id: int
    nombre: str
    email: str
    mensaje: str
    created_at: datetime

    class Config:
        from_attributes = True