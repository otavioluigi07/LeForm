from flask import request, jsonify
from services.cursoService import curso_service

def get_all():
    cursos = curso_service.get_all_cursos()
    return jsonify([curso.__dict__ for curso in cursos])

def get_by_id(id):
    curso = curso_service.get_curso_by_id(id)
    return jsonify(curso.__dict__) if curso else ('', 404)

def create():
    data = request.json
    novo = curso_service.create_curso(data)
    return jsonify(novo.__dict__), 201

def update(id):
    data = request.json
    atualizado = curso_service.update_curso(id, data)
    return jsonify(atualizado.__dict__)

def delete(id):
    curso_service.delete_curso(id)
    return '', 204
