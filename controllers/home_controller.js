const Safar = require("../models/safarSchema");

function home(req, res) {
    return res.render('home');
}

async function explore(req, res) {
    const reviews = await Safar.find().sort('_id').exec();
    if (reviews) {
        return res.render('explore', { reviews });
    }
}

function about(req, res) {
    return res.render('about');
}

function review(req, res) {
    return res.render('review');
}

async function addReview(req, res) {
    const create = await Safar.create(req.body);
    if (create) {
        console.log('New Review Added', create);
        return res.redirect('/explore');
    }
}

async function delReview(req, res) {
    let id = req.query.id;

    const del = await Safar.findByIdAndDelete(id).exec();
    if (del) {
        console.log("Review deleted");
        return res.redirect('/explore');
    }
}

module.exports.home = home;
module.exports.explore = explore;
module.exports.about = about;
module.exports.review = review;
module.exports.addReview = addReview;
module.exports.delReview = delReview;