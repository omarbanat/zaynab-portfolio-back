const express = require('express');
const blogsModel = require('../models/blogsModel')

exports.updateBlogsID = async (req, res) => {

    try {
        //update by id
        await blogsModel.updateOne(req.params.id, {
            title: req.body.title,
            content: req.body.content,
            image: req.body.image,
            publishedDate: req.body.publishedDate

        });

        //return success
        res.json('Updated');

    } catch (err) {

        //return error
        res.json({ error: err.message });

    }
};


