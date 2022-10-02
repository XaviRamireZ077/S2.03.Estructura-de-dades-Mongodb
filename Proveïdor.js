
db.createCollection( 'Proveïdor', {validator: {$jsonSchema: {bsonType: 'object',title:'Proveïdor',required: [         'Nom',          'Adreça',          'Telèfon',          'Fax',          'Nif'],properties: {Nom: {bsonType: 'string'},Adreça: {bsonType: 'string'},Telèfon: {bsonType: 'string'},Fax: {bsonType: 'string'},Nif: {bsonType: 'string'}}         }      }});  
 db.Proveïdor.createIndex(
{
  "_id": 1
})

