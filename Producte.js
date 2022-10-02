
db.createCollection( 'Producte', {validator: {$jsonSchema: {bsonType: 'object',title:'Producte',required: [         'Marca',          'Graduació_Vidres',          'Muntura',          'Color_Muntura',          'Color_vidre',          'Preu'],properties: {Marca: {bsonType: 'object',
title:'Marcas',required: [         'id',          'Nombre',          'Producte',          'Proveïdor'],properties: {id: {bsonType: 'objectId'},Nombre: {bsonType: 'string'},Producte: {bsonType: 'objectId'},Proveïdor: {bsonType: 'objectId'}}},Graduació_Vidres: {bsonType: 'string'},Muntura: {bsonType: 'string'},Color_Muntura: {bsonType: 'string'},Color_vidre: {bsonType: 'string'},Preu: {bsonType: 'string'}}         }      }});  
 db.Producte.createIndex(
{
  "_id": 1
})

