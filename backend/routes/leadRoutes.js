const router =
require("express")
.Router();

const Lead =
require("../models/Lead");

const auth =
require("../middleware/authMiddleware");

router.get(
"/",
auth,

async(req,res)=>{

const leads =
await Lead.find()
.populate(
"assignedTo"
);

res.json(leads);

});

router.post(
"/",
auth,

async(req,res)=>{

const lead =
await Lead.create(
req.body
);

res.json(lead);

});

router.get(
"/stats",
auth,

async(req,res)=>{

const total =
await Lead.countDocuments();

const won =
await Lead.countDocuments({
status:"Won"
});

const lost =
await Lead.countDocuments({
status:"Lost"
});

res.json({

total,
won,
lost

});

});

module.exports=
router;