from supabase import create_client, Client
import os
from models.admModel import Admin

SUPABASE_URL = " "
SUPABASE_KEY = " "

supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

class AdminService:
    @staticmethod
    def get_all_admins():
        response = supabase.table("admins").select("*").execute()
        return response.data

    @staticmethod
    def get_admin_by_id(admin_id: int) -> dict | None:
        response = supabase.table("admins").select("*").eq("id", admin_id).single().execute()
        return response.data

    @staticmethod
    def create_admin(admin_data: dict) -> list[dict]:
        response = supabase.table("admins").insert(admin_data).execute()
        return response.data
