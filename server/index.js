const express = require('express')
const app = express()
const port = process.env.PORT||5000;
const cors = require('cors')

// middleware

app.use(cors());
app.use(express.json()); 

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// mongodb config


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri  = 'mongodb+srv://64zoro:aTTogpc26Pcstjqz@node1.mq9f9d6.mongodb.net/inventory?retryWrites=true&w=majority&appName=node1';


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const collections = client.db("kirana").collection("goods");

    // insert a good to database: using post method

    app.post("/upload-good" , async(req,res) => {
        const data = req.body;
        const result = await collections.insertOne(data);
        res.send(result)
    })

    // get all the items in the inventory

    app.get("/all-items" ,async(req,res) =>{
        let query = {};
        if(req.query?.category){
            query = {category:req.query.category}
        }
        const result = await collections.find(query).toArray();
        res.send(result);
    })

    // update a good

    app.patch("/good/:id" , async(req,res) =>{
        const id = req.params.id;
        const updategood = req.body;
        const filter ={_id : new ObjectId(id)};

        const updateDoc = {
            $set:{...updategood}
        }
        const options = {upsert:true};

        const result = await collections.updateOne(filter , updateDoc,options);
        res.send(result);
    })

    // delete a item 

    app.delete("/good/:id", async(req,res) => {
        const id = req.params.id;
        const filter = { _id: new ObjectId(id) };
        const result = await collections.deleteOne(filter);
        res.send(result);
    })

    // get a single good data
    app.get("/good/:id" , async(req,res) => {
        const id = req.params.id;
        const result = await collections.findOne(filter)
        res.send(result)
    })

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})