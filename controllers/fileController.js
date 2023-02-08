const informationModel = require('../models/informationModel');
const blogsModel = require('../models/blogsModel');

exports.uploadFile = (req, res) => {
  // get filename without extension
  // for example image of main section will be home
  // same for about
  // for project will be the project name or title
  // so when uploading the image
  // go to mongo --> find the document having the same title as the passed image name
  // update this document

  const image = req.file.filename;
  const title = image.split('.')[0];

  informationModel.findOneAndUpdate({ title }, { image }, (err, data) => {
    if (err) return res.send({ status: 500, error: err });
    data
      ? res.send({ status: 200, data })
      : blogsModel.findOneAndUpdate({ title }, { image }, (err, data) => {
          if (err) return res.send({ status: 500, error: err });
          data
            ? res.send({ status: 200, data })
            : res.send({
                status: 500,
                data: 'Uploaded file not related to any information... make sure the filename is same as image name',
              });
        });
  });
};
