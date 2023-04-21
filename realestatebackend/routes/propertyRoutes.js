const Property = require("../models/propertySchema");
const multer = require("multer");
const propertyRoutes = require("express").Router();
propertyRoutes.get("/", async (req, res) => {
  res.send(req.user);
});
const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `${file.fieldname}-${Date.now()}.${ext}`);
  },
});
const upload = multer({
  storage: multerStorage,
});

propertyRoutes.post("/add", async (req, res) => {
  //   const value = await Property.find().sort({ _id: -1 }).limit(1);
  //   let ppd_id = "PPD";
  //   if (value.length != 0) {
  //     ppd_id = ppd_id + value.ppdId.split("D")[1];
  //   } else {
  //     ppd_id = ppd_id + 1301;
  //   }
  //   const views = parseInt(Math.random() * 30);
  //   const daysLeft = parseInt(Math.random() * 50);
  //   const newProperty = await Property.create({
  //     ppdId: ppd_id,
  //     image: req.files,
  //     views: views,
  //     status: "Unsold",
  //     daysLeft: daysLeft,
  //     property: req.body.property,
  //     length: req.body.length,
  //     breadth: req.body.breadth,
  //     area: parseInt(req.body.length) * parseInt(req.body.breadth),
  //     mobile: req.body.mobile,
  //     negotiable: req.body.negotiable,
  //     price: req.body.price,
  //     ownership: req.body.ownership,
  //     propertyAge: req.body.propertyAge,
  //     propApproved: req.body.propApproved,
  //     propDescription: req.body.propDescription,
  //     bankLoan: req.body.bankLoan,
  //     areaUnit: req.body.areaUnit,
  //     bhk: req.body.bhk,
  //     floorNum: req.body.floorNum,
  //     attached: req.body.attached,
  //     westToilet: req.body.westToilet,
  //     furnished: req.body.furnished,
  //     parking: req.body.parking,
  //     lift: req.body.lift,
  //     electricity: req.body.electricity,
  //     facing: req.body.facing,
  //     name: req.body.name,
  //     postedBy: req.body.postedBy,
  //     saleType: req.body.saleType,
  //     package: req.body.package,
  //     ppdPackage: req.body.ppdPackage,
  //     email: req.body.email,
  //     city: req.body.city,
  //     addArea: req.body.addArea,
  //     pincode: req.body.pincode,
  //     address: req.body.address,
  //     landmark: req.body.landmark,
  //     latitude: req.body.latitude,
  //     longitude: req.body.longitude,
  //     userid: req.user,
  //   });
  res.send(req.body);
});
module.exports = propertyRoutes;
