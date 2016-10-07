from flask import Flask
from flask_restful import Api, Resource
from flask_sqlalchemy import SQLAlchemy 
import json
import os

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres@localhost:5401/orgid'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
api = Api(app)

class MetaTableMixin(object):

    @property
    def as_dict(self):
       return {c.name: getattr(self, c.name) for c in self.__table__.columns}

    @property
    def __repr__(self):
        '<species_relationships:%i>' % (self.__tablename__,self.id)

class Species (db.Model,MetaTableMixin):
    __tablename__ = "species"
    id = db.Column('id', db.Integer, primary_key=True)
    common = db.Column(db.String())
    binomial = db.Column(db.String())
    edible = db.Column(db.String())
    warnings = db.Column(db.String())
    impact = db.Column(db.String())

class SpeciesContent(db.Model,MetaTableMixin):
    __tablename__ = "species_content"
    id = db.Column('id', db.BigInteger, primary_key=True)
    species_fk = db.Column(db.Integer)
    title = db.Column(db.String())
    sp_order = db.Column(db.Integer)
    sp_content = db.Column(db.String())
    impact = db.Column(db.String())

class SpeciesRelationships(db.Model,MetaTableMixin):
    __tablename__ = "species_relationships"
    id = db.Column('id', db.BigInteger, primary_key=True)
    parent_id = db.Column(db.BigInteger)
    child_id = db.Column(db.BigInteger)

class SpeciesImage(db.Model,MetaTableMixin):
    __tablename__ = "species_image"
    id = db.Column('id', db.BigInteger, primary_key=True)
    species_fk = db.Column(db.BigInteger)
    file_path = db.Column(db.String())
    image_caption = db.Column(db.String())
    height = db.Column(db.Integer)
    width = db.Column(db.Integer)

class Animal(Resource):
    def get(self,species_id):
        json_response = {'specie': record.as_dict for record in Species.query.filter_by(id=species_id)}
        json_response['content'] = {record.title : record.as_dict for record in SpeciesContent.query.filter_by(id=species_id)}
        json_response['images'] = [record.as_dict for record in SpeciesImage.query.filter_by(id=species_id)]
        json_response['rels'] = [record.as_dict for record in SpeciesRelationships.query.filter_by(id=species_id)]
        return json_response

class AnimalImages(Resource):
    def get(self,species_id):
        json_response = {'specie': record.as_dict for record in Species.query.filter_by(id=species_id)}
        json_response['images'] = [record.as_dict for record in SpeciesImage.query.filter_by(id=species_id)]
        return json_response


api.add_resource(Animal, '/species/<int:species_id>')
api.add_resource(AnimalImages, '/species/<int:species_id>/images')

if __name__ == '__main__':
    app.run(debug=True)
