const express = require("express");
const app = express();
const Joi = require("joi");
const multer = require("multer");
app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));
app.use(express.json());
const cors = require("cors");
app.use(cors());
const mongoose = require("mongoose");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

mongoose
  .connect("mongodb+srv://tristanjhudak:NUIXDUFLE14twm5o@tristanhudak.b2kcxhg.mongodb.net/?retryWrites=true&w=majority&appName=TristanHudak")
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((error) => {
    console.log("couldn't connect to mongodb", error);
  });
const itemSchema = new mongoose.Schema({
    category: String,
    name: String,
    image: String,
    amount: String,
    dice: String,
    type: String,
    properties: [String]
});

const Item = mongoose.model("Item", itemSchema);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/api/items", async (req, res) => {
    const items = await Item.find();
    res.send(items);
});
  
app.get("/api/items/:id", async (req, res) => {
    const id = req.params.id;
    const item = await Item.findOne({_id:id});
    res.send(item);
});

app.post("/api/items", upload.single("img"), async (req, res) => {
    const result = validateItem(req.body);
  
    if(result.error){
      res.status(400).send(result.error.details[0].message);
      return;
    }
  
    const item = new Item({
      name:req.body.name,
      category:req.body.category,
      amount: req.body.amount,
      dice:req.body.dice,
      type:req.body.type,
      properties:req.body.properties.split(",")
    });
  
    if(req.file){
      recipe.img = "images/" + req.file.filename;
    }
  
    const saveResult = await item.save();
    res.send(item);
});

app.put("/api/items/:id", upload.single("img"), async (req, res) => {
    const result = validateItem(req.body);
  
    if(result.error){
      res.status(400).send(result.error.details[0].message);
      return;
    }
  
    let fieldsToUpdate = {
        name:req.body.name,
        category:req.body.category,
        amount: req.body.category,
        dice:req.body.dice,
        type:req.body.type,
        properties:req.body.properties.split(",")
    };
  
    if(req.file){
      fieldsToUpdate.img = "images/" + req.file.filename;
    }
  
    const id = req.params.id;
  
    const updateResult = await Item.updateOne({_id:id},fieldsToUpdate);
    res.send(updateResult);
});

app.delete("/api/recipes/:id", async (req, res) => {
    const item = await Item.findByIdAndDelete(req.params.id)
    res.send(item);
});

function validateItem(item) {
    const schema = Joi.object({
      name: Joi.string().min(3).required(),
      category: Joi.string().valid("Weapon", "Spell", "Wonder", "Equipment").required(),
      amount: Joi.string().required(),
      dice: Joi.string().valid().required(),
      type: Joi.string().valid("Acid", "Bludgeoning", "Cold", "Fire", "Force", "Lightning", "Necrotic", "Piercing", "Poision", "Psychic", "Radiant", "Slashing", "Thunder").required(),
      properties: Joi.allow(""),
      _id: Joi.allow(""),
    });
  
    return schema.validate(item);
}

app.listen(3000, () => {
    console.log("I'm listening");
  });