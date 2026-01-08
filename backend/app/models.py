from sqlalchemy import Column, Integer, String, Text, DateTime, func
from .database import Base
from datetime import datetime

class ContactMessage(Base):
    """Modelo para guardar mensajes de contacto"""
    __tablename__ = "contact_messages"

    id = Column(Integer, primary_key=True, index=True)
    nombre = Column(String(100), nullable=False)
    email = Column(String(100), nullable=False)
    mensaje = Column(Text, nullable=False)
    created_at = Column(DateTime, server_default=func.now())

    def __repr__(self):
        return f"<ContactMessage {self.id} - {self.nombre}>"