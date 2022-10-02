
db.createCollection( 'Producte', {validator: {$jsonSchema: {bsonType: 'object',title:'Producte',required: [         'id',          'Pizza',          'Hamburguesa',          'Beguda',          'Empleat'],properties: {id: {bsonType: 'objectId'},Pizza: {bsonType: 'object',
title:'Producte.pizza',required: [         'Categoria'],properties: {Categoria: {bsonType: 'object',
title:'Categoria.pizza',required: [         'id pizza',          'Nom',          'Descripcio',          'Imatge',          'Preu'],properties: {id pizza: {bsonType: 'int'},Nom: {bsonType: 'string'},Descripcio: {bsonType: 'string'},Imatge: {bsonType: 'string'},Preu: {bsonType: 'double'}}}}},Hamburguesa: {bsonType: 'object',
title:'Producte.Hamburguesa',required: [         'id Hamburguesa',          'Nom',          'Descripcio',          'Imatge',          'Preu'],properties: {id Hamburguesa: {bsonType: 'int'},Nom: {bsonType: 'string'},Descripcio: {bsonType: 'string'},Imatge: {bsonType: 'string'},Preu: {bsonType: 'double'}}},Beguda: {bsonType: 'object',
title:'Producte.Beguda',required: [         'id Hamburguesa',          'Nom',          'Descripcio',          'Imatge',          'Preu'],properties: {id Hamburguesa: {bsonType: 'int'},Nom: {bsonType: 'string'},Descripcio: {bsonType: 'string'},Imatge: {bsonType: 'string'},Preu: {bsonType: 'double'}}},Empleat: {bsonType: 'objectId'}}         }      }});  
 db.Producte.createIndex(
{
  "_id": 1
})

