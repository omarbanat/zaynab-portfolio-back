const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const blogsSchema = new Schema({
     title:{type:string,required: true },
     content:{type:string,required: true },
     image:{url},
     publishedDate:{type:Date, required:true}
})

const Blogs=mongoose.model('Blogs',blogsSchema);
module.exports=Blogs;