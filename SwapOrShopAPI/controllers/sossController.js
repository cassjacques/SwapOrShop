const db = require('../models');

const index = (req, res) => {
    db.SOS.find({}, (err, allSOSs) => {
        if (err) return console.log(err);
        res.json(allSOSs);
    });
};

const show = (req, res) => {
    db.SOS.findById(req.params.id, (err, foundSOS) => {
        if (err) return console.log(err);
        res.json(
            foundSOS
        );
    });
};

const create = (req, res) => {
    db.SOS.create(req.body, (err, newSOS) => {
        if (err) return console.log(err);
        res.json(newSOS);
    });
};

const update = (req, res) => {
    db.SOS.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (err, updatedSOS) => {
            if (err) return console.log(err);
            res.json(updatedSOS);
        }
    );
};

const destroy = (req, res) => {
    db.SOS.findByIdAndDelete(
        req.params.id,
        (err, deletedSOS) => {
            if (err) return console.log(err);
            res.json(deletedSOS);
        }
    );
};

const photo = (req, res) => {
    res.sendFile(`/uploads/${req.params.id}`)
};


module.exports = {
    index,
    show,
    create,
    update,
    destroy,
    photo,
};