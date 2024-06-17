// creating schema

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        unique: true,
        required: true,
        min: 4,
        max: 20,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        max: 50
    },
    password: {type: String, required: true, min: 6},
    img: {type: String,},
    isAdmin: {type: Boolean, default: false},

}, {timestamps: true});


const postSchema = new mongoose.Schema({
    title: {type: String, required: true,},
    description: {type: String, required: true,},
    userId: {type: String, required: true},
    slug: {type: String, required: true, unique: true},

}, {timestamps: true});

export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Post = mongoose.models.Post || mongoose.model("Post", postSchema);