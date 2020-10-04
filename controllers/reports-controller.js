const Report = require('../models/Report');

const reportsController = {};

reportsController.index = (req, res) => {
    Report.getAll()
        .then((reports) => {
            res.json({
                message: 'ok',
                data: { reports },
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ err, message: err.message });
        });
};

reportsController.create = (req, res) => {
    new Report({
        category: req.body.category,
        title: req.body.title,
        description: req.body.description,
        error_log: req.body.error_log,
        solution: req.body.solution,
    })
        .save()
        .then((report) => {
            res.json({
                message: 'ok',
                data: { report },
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ err, message: err.message });
        });
};

reportsController.update = (req, res) => {
    Report.getById(req.params.id)
    .then((report) => {
        return report.udpate(req.body);
    })
    .then((updatedRport) => {
        res.json({
            message: 'ok',
            data: { report: updatedReport },
        });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({ err, message: err.message });
    });
};

reportsController.delete = (req, res) => {
    Report.getById(req.params.id)
        .then((report) => {
            return report.delete();
        })
        .then(() => {
            res.json({
                message: 'Deleted successfully',
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ err, message: err.message});
        });
};

module.exports = reportsController;