const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
const informationRoute = require('./routes/informationRoute');
const fileRoute = require('./routes/fileRoute');
const adminRoute = require('./routes/adminRoute');
const cors = require('cors');

const PORT = process.env.PORT || 3000;

const connectDB = require('./config/db');

// To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }));
// To parse json data
app.use(bodyParser.json());
//CORS
app.use(cors());

app.use(cors());
// ... Configurations
app.use(morgan('common'));
// app.use(Router);
app.use(express.json());

app.use('/',(req,res)=>{
  res.download('./assets/ZaynabAbdElNabi_CV.pdf')

})
app.use('/admin', adminRoute);

app.use('/infos', informationRoute);
app.use('/file', fileRoute);
app.use('/experience', require('./routes/experienceRoute'));
app.use('/blogs', require('./routes/blogsRoute'));

app.use('/',(req,res)=>{
  res.download('./assets/ZaynabAbdAlNbi.pdf')
})

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port : ${PORT}`);
});
