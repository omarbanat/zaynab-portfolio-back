const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const experienceSchema = new Schema({
    position: { type: string ,required: true },
    companyName: { type: string,required: true  },
    city: { type: string ,required: true },
    country: { type: string,required: true  },
    startDate: { type: date,required: true  },
    endDate: { type: date,required: true  },
    tasks: { type: string,required: true  },
    skills: { type: string ,required: true }


})

const Experience = mongoose.model('Experience', experienceSchema);
module.exports = Experience;


