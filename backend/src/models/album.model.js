import mongoose, { mongo } from 'mongoose'

const albumSchema = new mongo.Schema({
    title: {type: String, required: true},
    artist: {type: String, required: true},
    imageUrl: {type: String, required: true},
    releaseYear: {type: String, required: true},
    songs: [
        {type: mongoose.Schema.Types.ObjectId, ref: "Song"},
    ]

}, {timestamps: true } );