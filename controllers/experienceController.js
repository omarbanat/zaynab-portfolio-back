const express = require('express');
const experienceModel = require('../models/experienceModel');

exports.getAllExperiences = (req, res) => {
  experienceModel.find({}, (err, data) => {
    if (err) {
      return res.send({ status: 500, error: err });
    }
    return res.send({ status: 200, message: data });
  });
};
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
