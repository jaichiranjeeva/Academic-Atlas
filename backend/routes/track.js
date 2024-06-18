const express = require('express');
const User = require('../models/user');
const trackRoute = express.Router();
const Track = require('../models/track');

trackRoute.post('/addBranch',async(req,res)=>{
    try{
        const {branch} = req.body;
        const track = await Track.findOne({branch: branch});
        if(!track){
            const newTrack = new Track({
                branch: branch
            })
            newTrack.save()
            return res.status(200).json({
                success: true,
                message: 'Branch added successfully'
            })
        }
    }catch(err){
        return res.status(400).json({
            success: false,
            message: 'Branch already exists'
        })
    }
});

trackRoute.post('/addCourse',async(req,res)=>{
    try{
        const {course} = req.body;
        const track = await Track.findOne({course: course});
        if(!track){
            const newTrack = new Track({
                course: course
            })
            newTrack.save()
            return res.status(200).json({
                success: true,
                message: 'Course added successfully'
            })
        }
    }catch(err){
        return res.status(400).json({
            success: false,
            message: 'Course already exists'
        })
    }
});


module.exports = trackRoute;