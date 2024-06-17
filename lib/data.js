import {Post, User} from "./models";
import connectToDb from "./connectToDb";


export const getPosts= async()=>{
    try {
        await connectToDb()
        const posts = await Post.find()
        return posts
        }
    catch (error){
        console.log(error)
        throw new Error("Failed to fetch Posts!!");
    }
}

export const getPost= async(slug)=>{
    try {
        await connectToDb()
        const post = await Post.find(slug)
        return post
    }
    catch (error){
        console.log(error)
        throw new Error("Failed to fetch post!!");
    }
}

export const getUser= async(id)=>{
    try {
        await connectToDb()
        const user = await User.find(id)
        return user
    }
    catch (error){
        console.log(error)
        throw new Error("Failed to fetch User!!");
    }
}

export const getUsers= async()=>{
    try {
        await connectToDb()
        const users = await User.find()
        return users
    }
    catch (error){
        console.log(error)
        throw new Error("Failed to fetch Users!!");
    }
}