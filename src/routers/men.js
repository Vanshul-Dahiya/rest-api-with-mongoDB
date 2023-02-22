const express = require("express");
const router = new express.Router();
const MensRanking = require("../models/mens");

// handle post request => add new data
router.post("/mens", async (req, res) => {
  try {
    const { ranking, name, dob, country, score } = req.body;
    const addMensRecord = new MensRanking({
      ranking,
      name,
      dob,
      country,
      score,
    });

    console.log(req.body);
    const insertMens = await addMensRecord.save();
    res.status(201).json(insertMens);

    // * Alter version
    // const userData = req.body;
    // const newUser = MensRanking(userData);

    // await newUser.save(function (err) {
    //   if (err) {
    //     res.json({ success: false, error: err });
    //     return;
    //   }

    //   res.json({ success: true, data: newUser });
    // });
  } catch (error) {
    res.status(400).send(error);
  }
});
// read all
router.get("/mens", async (req, res) => {
  try {
    const getMens = await MensRanking.find({}).sort({ ranking: 1 });
    res.send(getMens);
  } catch (error) {
    res.status(400).send(error);
  }
});
// get individual data
router.get("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMen = await MensRanking.findById(_id);
    res.json(getMen);
  } catch (error) {
    res.status(400).send(error);
  }
});

// update individual
router.patch("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMen = await MensRanking.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.json(getMen);
  } catch (error) {
    res.status(500).send(error);
  }
});
// delete
router.delete("/mens/:id", async (req, res) => {
  try {
    const getMen = await MensRanking.findByIdAndDelete(req.params.id);
    res.json(getMen);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
