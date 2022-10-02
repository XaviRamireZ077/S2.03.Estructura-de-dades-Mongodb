
db.createCollection( 'Empleat', {validator: {$jsonSchema: {bsonType: 'object',title:'Empleat',required: [         'Nom',          'Cognoms',          'Nif',          'Telefon',          'Delivery'],properties: {Nom: {bsonType: 'string'},Cognoms: {bsonType: 'string'},Nif: {bsonType: 'string'},Telefon: {bsonType: 'string'},Delivery: {bsonType: 'string'}}         }      }});  
 db.Empleat.createIndex(
{
  "_id": 1
})

