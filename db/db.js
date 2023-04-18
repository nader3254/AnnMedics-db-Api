
const mongoose = require('mongoose');


/**
 * you can change the database URL to your cloud or localhost database
 */
const url = "mongodb+srv://nader:aabbccdd@cluster0.miyrein.mongodb.net/annMedics?retryWrites=true&w=majority";
 console.log("connecting to AnnMedics DataBase.......\n");
    mongoose.connect(url/*, { useNewUrlParser: true  ,useUnifiedTopology: true}*/).then(
        () => {
            console.log("connected to AnnMedics DataBase successfully.......\n");
        }
    ).catch(() => {
    console.log("failed to connect to AnnMedics DataBase ,try again later .......\n");
    }
    );


module.exports = mongoose;








// function checkDBConnection()
// {
//     return ((conn_status === 0) ? true : false); 
// }
// /**
//  * 
//  * @returns the database object to be used in the Model
//  */
// function init()
// {
//     if (!checkDBConnection())
//         return;
        
//     console.log("connecting to AnnMedics DataBase.......\n");
//     mongoose.connect(url).then(
//         (result) => {
//             _db = result;
//             console.log("connected to AnnMedics DataBase successfully.......\n");
//            // console.log(MyDB.);
//             conn_status++;
//     }
//     ).catch(() => {
//     console.log("failed to connect to AnnMedics DataBase ,try again later .......\n");
//     }
//     );
//     return mongoose;
// }

// /**
//  * 
//  * @returns return the database object
//  */
// function get()
// {    
//     return mongoose;
// }
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://nader:aabbccdd@cluster0.miyrein.mongodb.net/?retryWrites=true&w=majority";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function dbConnect() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// dbConnect().catch(console.dir);