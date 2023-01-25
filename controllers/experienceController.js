const express = require('express');
const experienceModel = require('../models/experienceModel')

exports.updateExperienceID = async (req, res) => {

    try {
        //update by id
        await experienceModel.updateOne(req.params.ID, {
            position: req.body.position,
            companyName: req.body.companyName,
            city: req.body.city,
            country: req.body.country,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            tasks: req.body.tasks,
            skills: req.body.skills,
        });

        //return success
        res.json('Updated');

    } catch (err) {

        //return error
        res.json({ error: err.message });

    }
};