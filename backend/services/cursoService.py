from app.models.curso import Curso
from database import SessionLocal

def get_all_cursos():
    with SessionLocal() as db:
        return db.query(Curso).all()

def get_curso_by_id(curso_id):
    with SessionLocal() as db:
        return db.query(Curso).get(curso_id)

def create_curso(data):
    with SessionLocal() as db:
        novo = Curso(**data)
        db.add(novo)
        db.commit()
        db.refresh(novo)
        return novo

def update_curso(curso_id, data):
    with SessionLocal() as db:
        curso = db.query(Curso).get(curso_id)
        for key, value in data.items():
            setattr(curso, key, value)
        db.commit()
        return curso

def delete_curso(curso_id):
    with SessionLocal() as db:
        curso = db.query(Curso).get(curso_id)
        db.delete(curso)
        db.commit()
