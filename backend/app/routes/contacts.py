from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from ..schemas import ContactMessageCreate, ContactMessageResponse
from ..models import ContactMessage
from ..database import get_db

router = APIRouter(prefix="/contacts", tags=["contacts"])

@router.post("/", response_model=ContactMessageResponse)
def create_contact(
    contact: ContactMessageCreate,
    db: Session = Depends(get_db)
):
    """
    Crear un nuevo mensaje de contacto
    
    Ejemplo de uso:
    POST http://localhost:8000/api/contacts/
    Body: {
        "nombre": "Juan",
        "email": "juan@ejemplo.com",
        "mensaje": "Hola, me interesa tu servicio"
    }
    """
    # Crear nueva fila en BD
    db_contact = ContactMessage(
        nombre=contact.nombre,
        email=contact.email,
        mensaje=contact.mensaje
    )
    
    # Guardar en BD
    db.add(db_contact)
    db.commit()
    db.refresh(db_contact)
    
    return db_contact

@router.get("/", response_model=list[ContactMessageResponse])
def get_contacts(db: Session = Depends(get_db)):
    """
    Obtener todos los mensajes de contacto
    
    GET http://localhost:8000/api/contacts/
    """
    messages = db.query(ContactMessage).all()
    return messages

@router.get("/{contact_id}", response_model=ContactMessageResponse)
def get_contact(contact_id: int, db: Session = Depends(get_db)):
    """
    Obtener un mensaje específico
    
    GET http://localhost:8000/api/contacts/1
    """
    contact = db.query(ContactMessage).filter(
        ContactMessage.id == contact_id
    ).first()
    
    if not contact:
        raise HTTPException(status_code=404, detail="Mensaje no encontrado")
    
    return contact