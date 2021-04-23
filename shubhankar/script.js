const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  "mongodb+srv://admin-shubhankar:shubhankar@cluster0.bvdhz.mongodb.net/trellpracDB?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let Btn=$('#Btn')

Btn.click(()=> {
    if(Btn.html()=="FOLLOW"){
        Btn.html('UNFOLLOW')
        const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  "mongodb+srv://admin-shubhankar:shubhankar@cluster0.bvdhz.mongodb.net/trellpracDB?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

        async function run() {
          try {
            
            await client.connect();
            let database = client.db('trellpracDB');
            let products = database.collection('Users');
            Users.updateOne({ID: {$eq : 1}},{$set: {Following: "[{3}]"}})
          
          } finally {
            // Ensures that the client will close when you finish/error
            await client.close();
          }
        }
        run().catch(console.dir);
    }
    
    else {
        Btn.html("FOLLOW") 
        const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  "mongodb+srv://admin-shubhankar:shubhankar@cluster0.bvdhz.mongodb.net/trellpracDB?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

        // CREATE LINK OF ACCOUNT FROM DATABASE
        async function run() {
          try {
            await client.connect();
            let database = client.db('trellpracDB');
            let products = database.collection('Users');
            Users.updateOne({ID: {$eq : 1}},{$set: {Following: "[]"}})
            
          } finally {
            // Ensures that the client will close when you finish/error
            await client.close();
          }
        }
        run().catch(console.dir);
    }
    
})

// const MongoClient = require('mongodb').MongoClient;
// const assert=require('assert');

// // const uri = "mongodb+srv://admin-shubhankar:opbbbharrt@5autobots@cluster0.bvdhz.mongodb.net/trellpracDB?retryWrites=true&w=majority";
// const uri='mongodb://localhost:27017';

// const dbName='trellpracDB';

// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// client.connect(function(err) {
//   assert.equal(null,err);
//   console.log("Connected successfully to the server.");

//   const db=client.db(dbName);

  
//     findDocuments(err,function(){
//       client.close();
//     });
    
  
// });



// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://admin-shubhankar:OPBBBHARRT@5AUTOBOTS@cluster0.bvdhz.mongodb.net/trellpracDB?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("trellprac").collection("products");
//   // perform actions on the collection object
//   console.log("Connected successfully to the server.");
//   client.close();
// });

// const { MongoClient } = require("mongodb");
// // Replace the uri string with your MongoDB deployment's connection string.
// const uri =
//   "mongodb+srv://admin-shubhankar:shubhankar@cluster0.bvdhz.mongodb.net/trellpracDB?retryWrites=true&w=majority";
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// async function run() {
//   try {
//     await client.connect();
//     const database = client.db('trellpracDB');
//     const products = database.collection('products');
    
//     const query = { name: 'Powder' };
//     products.insertOne(query)
//     const product = await products.findOne(query);
//     console.log(product);
    

    

//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);






