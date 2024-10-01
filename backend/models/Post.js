const mongoose = require('mongoose');
const { model, Schema } = mongoose;


const PostSchema = new Schema({
    title: String,
    summary: String,
    content: String,
    cover: String,
}, {
    timestamps: true,
});


const PostModel = model('Post', PostSchema);


module.exports = PostModel;
