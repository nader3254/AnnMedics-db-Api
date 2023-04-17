/**
 *
const express = require('express')
const app = express()

//myURl=mongodb+srv://nader:aabbccdd@cluster0.miyrein.mongodb.net/test
mongodb+srv://nader:aabbccdd@cluster0.miyrein.mongodb.net/?retryWrites=true&w=majority
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
 */

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://nader:aabbccdd@cluster0.miyrein.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function dbConnect() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
dbConnect().catch(console.dir);
