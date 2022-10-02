
db.createCollection( 'Botiga', {validator: {$jsonSchema: {bsonType: 'object',title:'Botiga',required: [         'Adreça',          'Codi postal',          'Localitat',          'Provincia'],properties: {Adreça: {bsonType: 'string'},Codi postal: {bsonType: 'string'},Localitat: {bsonType: 'string'},Provincia: {bsonType: 'string'}}         }      }});  
 db.Botiga.createIndex(
{
  "_id": 1
})

