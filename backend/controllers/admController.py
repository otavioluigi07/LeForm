from flask import Blueprint, request, jsonify
from services.admService import AdminService

admin_bp = Blueprint("admin", __name__)

@admin_bp.route("/admins", methods=["GET"])
def get_admins():
    return jsonify(AdminService.get_all_admins())

@admin_bp.route("/admin/<int:admin_id>", methods=["GET"])
def get_admin(admin_id):
    admin = AdminService.get_admin_by_id(admin_id)
    if admin:
        return jsonify(admin)
    return jsonify({"message": "Admin not found"}), 404

@admin_bp.route("/admin", methods=["POST"])
def create_admin():
    data = request.json
    new_admin = AdminService.create_admin(data)
    return jsonify(new_admin), 201
