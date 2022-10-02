
db.createCollection( 'Client', {validator: {$jsonSchema: {bsonType: 'object',title:'Client',required: [         'Nom',          'Cognoms',          'Adreça',          'Codi postal',          'Localitat',          'Provincia',          'Telèfon'],properties: {Nom: {bsonType: 'string'},Cognoms: {bsonType: 'string'},Adreça: {bsonType: 'string'},Codi postal: {bsonType: 'string'},Localitat: {bsonType: 'string'},Provincia: {bsonType: 'object',
title:'Provincies',required: [         'id',          'Nom',          'Localitat'],properties: {id: {bsonType: 'objectId'},Nom: {bsonType: 'string'},Localitat: {bsonType: 'object',
title:'Localitats',required: [         'id',          'Nom'],properties: {id: {bsonType: 'objectId'},Nom: {bsonType: 'string'}}}}},Telèfon: {bsonType: 'string'}}         }      }});  
 db.Client.createIndex(
{
  "_id": 1
})

