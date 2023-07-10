const db = require('../models');

const index = (req, res) => {
    db.Fit.find({}, (err, allFits) => {
        if (err) return console.log(err);
        res.json(allFits);
    });
};

const show = (req, res) => {
    db.Fit.findById(req.params.id, (err, foundFit) => {
        if (err) return console.log(err);
        res.json(
            foundFit
        );
    });
};

const create = (req, res) => {
    db.Fit.create(req.body, (err, newFit) => {
        if (err) return console.log(err);
        res.json(newFit);
    });
};

const update = (req, res) => {
    db.Fit.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (err, updatedFit) => {
            if (err) return console.log(err);
            res.json(updatedFit);
        }
    );
};

const destroy = (req, res) => {
    db.Fit.findByIdAndDelete(
        req.params.id,
        (err, deletedFit) => {
            if (err) return console.log(err);
            res.json(deletedFit);
        }
    );
};

module.exports = {
    index,
    show,
    create,
    update,
    destroy,
};
