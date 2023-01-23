const informationModel = require('../models/informationModel');

exports.getPrevWorkByID = (req, res) => {
  informationModel.findById(req.params.ID, (err, data) => {
    if (err) {
      return res.send({ status: 500, error: err });
    }
    return res.send({ status: 200, data });
  });
};
