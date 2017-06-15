var express = require("express");
var studentRoutes = express.Router();
var student = require("../models/studentSchema");

studentRoutes.route("/")
    .get(function (req, res) {
        var query = req.query;
        if (req.query.stdNumber) {

            student.find({
                ID: req.query.stdNumber
            }, function (err, student) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.send(student);
                }
            });

        } else {

            student.find(function (err, student) {
                if (err) {
                    res.status(500).send(err);
                } else {

                    res.send(student);
                }
            });
        }

    })
    .post(function (req, res) {
        var newstudent = new student(req.body);
        newstudent.save(function (err, newstudentObj) {
            if (err) {
                res.stauts(500).send(err);
            } else {
                res.send(newstudentObj);
            }
        });

    });
studentRoutes.route("/:id")
    .get(function (req, res) {
        student.findById(req.params.id, function (err, studentObj) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(studentObj);

            }
        });
    })
    .put(function (req, res) {
        student.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        }, function (err, updatedstudent) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(updatedstudent);

            }

        });
    })

.delete(function (req, res) {
    student.findByIdAndRemove(req.params.id, function (err, deletedstudent) {
        if (err) {
            res.status(500).send(err);
        } else {
            //            var responseObj={
            //                success: true,
            //                message: "successfully deleted the student"
            //                deletedstudent : deletedstudent  
            //            };
            res.send(deletedstudent);

        }

    });
});


module.exports = studentRoutes;