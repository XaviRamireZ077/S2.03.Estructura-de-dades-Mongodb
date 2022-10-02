
db.createCollection( 'Clients', {validator: {$jsonSchema: {bsonType: 'object',title:'Clients',required: [         'Nom',          'Adreça_postal',          'Telèfon',          'Correu_electrònic',          'Data_de_registre',          'Ates_per',          'Recomanat_per'],properties: {Nom: {bsonType: 'string'},Adreça_postal: {bsonType: 'string'},Telèfon: {bsonType: 'string'},Correu_electrònic: {bsonType: 'string'},Data_de_registre: {bsonType: 'string'},Ates_per: {bsonType: 'object',
title:'Empleados',required: [         'id',          'Nombre'],properties: {id: {bsonType: 'objectId'},Nombre: {bsonType: 'string'}}},Recomanat_per: {bsonType: 'string'}}         }      }});  
 db.Clients.createIndex(
{
  "_id": 1
})

