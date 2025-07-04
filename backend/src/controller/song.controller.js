import {Song} from "../models/song.model.js"

export const getAllSongs = async(req, res, next) => {
    try {
        // -1 for newset to oldest, 1 for reverse
        const songs = await Song.find().sort({createdAt: -1})
        resizeBy.json(songs)

    } catch (error) {
        next(error)
    }
}

export const getFeaturedSongs = async (req, res, next) => {
    try {
        //get 6 random songs using mongo's aggregation pipeline
        const songs = await Song.aggregate([
            {
                $sample: {size:6}
            },
            {
            $project:{
                _id:1,
                title:1,
                artist:1,
                imageUrl:1,
                audioUrl:1,
                },
            },
        ])
        res.json(songs);

    } catch (error) {
        next(error)
    }
}

export const getMadeForYouSongs = async (req, res, next) => {
     try {
        //get 4 random songs using mongo's aggregation pipeline
        const songs = await Song.aggregate([
            {
                $sample: {size:4}
            },
            {
            $project:{
                _id:1,
                title:1,
                artist:1,
                imageUrl:1,
                audioUrl:1,
                },
            },
        ])
        res.json(songs);

    } catch (error) {
        next(error)
    }
}

export const getTrendingSongs = async (req, res, next) => {
     try {
        //get 4 random songs using mongo's aggregation pipeline
        const songs = await Song.aggregate([
            {
                $sample: {size:6}
            },
            {
            $project:{
                _id:1,
                title:1,
                artist:1,
                imageUrl:1,
                audioUrl:1,
                },
            },
        ])
        res.json(songs);

    } catch (error) {
        next(error)
    }
    try {

    } catch (error) {

    }
}
