from flask import Blueprint
from app.controllers import curso_controller

curso_bp = Blueprint('curso', __name__, url_prefix='/cursos')

curso_bp.get('/')(curso_controller.get_all)
curso_bp.get('/<int:id>')(curso_controller.get_by_id)
curso_bp.post('/')(curso_controller.create)
curso_bp.put('/<int:id>')(curso_controller.update)
curso_bp.delete('/<int:id>')(curso_controller.delete)
