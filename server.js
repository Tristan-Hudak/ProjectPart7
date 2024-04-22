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
    item_category: String,
    item_name: String,
    item_image: String,
    item_dice_amount: String,
    item_dice_type: String,
    item_damage_type: String,
    item_desc: String,
    item_properties: [String],
    item_conditions: [String]
});

const userSchema = new mongoose.Schema({
  user: String,
  pass: String
});

const Item = mongoose.model("Item", itemSchema);
const User = mongoose.model("User", userSchema);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/api/items", async (req, res) => {
    const items = await Item.find();
    res.send(items);
});

app.get("/api/users", async (req, res) => {
  const items = await Item.find();
  res.send(items);
});
  




app.get("/api/items/:id", async (req, res) => {
    const id = req.params.id;
    const item = await Item.findOne({_id:id});
    res.send(item);
});

app.get("/api/users/:id", async (req, res) => {
  const id = req.params.id;
  const item = await User.findOne({_id:id});
  res.send(item);
});





app.post("/api/items", upload.single("image"), async (req, res) => {
    const result = validateItem(req.body);
  
    if(result.error){
      res.status(400).send(result.error.details[0].message);
      return;
    }
  
    const item = new Item({
      item_name:req.body.item_name,
      item_category:req.body.item_category,
      item_dice_amount: req.body.item_dice_amount,
      item_dice_type:req.body.item_dice_type,
      item_damage_type:req.body.item_damage_type,
      item_desc:req.body.item_desc,
      item_image:req.body.item_image,
      item_properties:req.body.item_properties.split(","),
      item_conditions:req.body.item_conditions.split(",")
    });
  
    const saveResult = await item.save();
    res.send(item);
});

app.post("/api/users", upload.single("image"), async (req, res) => {
  const result = validateItem(req.body);

  if(result.error){
    res.status(400).send(result.error.details[0].message);
    return;
  }

  const user = new User({
    user:req.body.user,
    pass:req.body.pass
  });

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
      item_name:req.body.item_name,
      item_category:req.body.item_category,
      item_dice_amount: req.body.item_dice_amount,
      item_dice_type:req.body.item_dice_type,
      item_damage_type:req.body.item_damage_type,
      item_desc:req.body.item_desc,
      item_image:req.body.item_image,
      item_properties:req.body.item_properties.split(","),
      item_conditions:req.body.item_conditions.split(",")
    };
  
    /*if(req.file){
      fieldsToUpdate.image = "images/" + req.file.filename;
    }*/
  
    const id = req.params.id;
  
    const updateResult = await Item.updateOne({_id:id},fieldsToUpdate);
    res.send(updateResult);
});

app.put("/api/users/:id", upload.single("img"), async (req, res) => {
  const result = validateItem(req.body);

  if(result.error){
    res.status(400).send(result.error.details[0].message);
    return;
  }

  let fieldsToUpdate = {
    user:req.body.user,
    pass:req.body.pass
  };


  const id = req.params.id;

  const updateResult = await User.updateOne({_id:id},fieldsToUpdate);
  res.send(updateResult);
});




app.delete("/api/recipes/:id", async (req, res) => {
    const item = await Item.findByIdAndDelete(req.params.id)
    res.send(item);
});

app.delete("/api/users/:id", async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id)
  res.send(user);
});



function validateItem(item) {
    const schema = Joi.object({
      item_name: Joi.string().min(3).required(),
      item_category: Joi.string().valid("Weapon", "Spell", "Wonder", "Equipment").required(),
      item_dice_amount: Joi.allow(),
      item_dice_type: Joi.string().valid(),
      item_damage_type: Joi.string().valid("Acid", "Bludgeoning", "Cold", "Fire", "Force", "Lightning", "Necrotic", "Piercing", "Poision", "Psychic", "Radiant", "Slashing", "Thunder", "None").required(),
      item_desc: Joi.string().min(3).required(),
      item_image: Joi.allow(),
      item_properties: Joi.allow(""),
      item_conditions: Joi.allow(""),
      _id: Joi.allow(""),
    });
  
    return schema.validate(item);
}

function validateItem(user) {
  const schema = Joi.object({
    user: Joi.string().min(3).required(),
    pass: Joi.string().min(3).required()
  });

  return schema.validate(item);
}

app.listen(3000, () => {
    console.log("I'm listening");
  });