const informationModel = require('../models/informationModel');


//class InfoController {
// getAll = async (req, res) => {
//   let infoRecords = await informationModel.find();
//   res.status(200).json(infoRecords)
// }
// getOne = async (req,res)=>{
//   let record = await 
// }
//}

exports.getPrevWorkByID = (req, res) => {
  informationModel.findById(req.params.ID, (err, data) => {
    if (err) {
      return res.send({ status: 500, error: err });
    }
    return res.send({ status: 200, data });
  });
};

exports.getAllInformation = (req, res) => {

}

