const { response } = require('express');
const informationModel = require('../models/informationModel');

exports.getPrevWorkByID = (req, res) => {
  informationModel.findById(req.params.ID, (err, data) => {
    if (err) {
      return res.send({ status: 500, error: err });
    }
    return res.send({ status: 200, data });
  });
};



exports.updatePrevWorkByID = async (req, res) => {

  try {
    // get info + update by id
    await informationModel.updateOne(req.params.id, {
      type: req.body.type,
      title: req.body.title,
      description: req.body.description,
      image: req.body.image,
      fullDescription: req.body.fullDescription
    });

    //return success
    res.json('Updated');

  } catch (err) {

    //return error
    res.json({ error: err.message });

  }
};

exports.deleteProvWorkByID = async (req, res) => {
  try {
    await informationModel.findByIdAndDelete(req.params.id);

    res.json('info is deleted');

  } catch (err) {

    res.json({ error: err.message });

  }
};


// exports.insertPrevWork = async (req, res) => {
//   try {
//   // insert prevWork
//     await informationModel.create({
//       type: req.body.type,
//       title: req.body.title,
//       description: req.body.description,
//       image: req.body.image,
//       fullDescription: req.body.fullDescription
//     });

//     res.send('info is added');

//   } catch (err) {

//     res.send({ error: err.message });
//   }
// };
