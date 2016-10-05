from flask import Flask
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)

class Species(Resource):
    def get(self,species_id):
        return {'hello': str(species_id)}

api.add_resource(Species, '/species/<int:species_id>')

if __name__ == '__main__':
    app.run(debug=True)