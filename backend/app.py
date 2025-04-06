from flask import Flask
from app.routes.curso_routes import curso_bp
from app.routes.clinica_routes import clinica_bp
from app.database import Base, engine

def create_app():
    app = Flask(__name__)
    Base.metadata.create_all(bind=engine)

    app.register_blueprint(curso_bp)
    app.register_blueprint(clinica_bp)

    return app

app = create_app()

if __name__ == '__main__':
    app.run(debug=True)
