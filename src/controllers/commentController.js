const Comment = require('../models/commentModel');

exports.listenAllComments = async (req, res) => {

    try {
        const comments = await Comment.find({});
        res.status(200);
        res.json(comments);
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({message : "Erreur serveur."});
    }
}

exports.createAComment = async (req, res) => {
    const newComment = new Comment(req.body);

    try {
        const comment = await newComment.save();
        res.status(201)
        res.json(comment);
    } catch (error) {
        res.status(500)
        console.log(error);
        res.json({message : "Erreur serveur."});

    }
}

exports.getAComment = async (req, res) => {

    try {
        const comment = await Comment.findById(req.params.id_comment, req.body, {});
        res.status(200);
        res.json(comment);
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({message : "Erreur serveur."});
    }
}


exports.updateAComment = async (req, res) => {
    try  {
        const comment = await Comment.findByIdAndUpdate(req.params.id_comment, req.body, {new:true});
        res.status(200)
        res.json(comment);

    } catch (error) {
        res.status(500)
        console.log(error);
        res.json({message : "Erreur serveur."});

    }
}

exports.deleteAComment = async (req, res) => {
    try  {
        await Comment.findByIdAndDelete(req.params.id_comment);
        res.status(200);
        res.json({message: 'Commentaire supprimé'});
    } catch (error) {
        res.status(500)
        console.log(error);
        res.json({message : "Erreur serveur."});
    }
}