const exp = require("express");

let posts = [{id: 1, name: "name1"},{id: 2, name: "name2"},{id: 3, name: "name3"}];

const GET_Crud = (req, res)=>{
    // Haces la peticion a la base de datos
    res.status(200).json(
        posts
    );
}
const GET_Crud_id = (req = exp.request,res)=>{
    // Haces la peticion a la base de datos
    const { id } = req.params;
    const post = posts.find( e => parseInt(e.id) === parseInt(id) )
    res.status(200).json(
        post
    );
}
const POST_Crud = (req,res)=>{
    // Haces la peticion a la base de datos
    const lastPost = posts[posts.length - 1];
    const newPost = {
        id: lastPost.id + 1,
        name: `name${lastPost.id}` 
    }
    // Haces la peticion a la base de datos para guardar
    posts.push(newPost);

    res.status(200).json(
        posts
    );
}
const DELETE_Crud_id = (req,res)=>{
    // Haces la peticion a la base de datos
    const { id } = req.params;
    const filterPosts = posts.filter(e => parseInt(e.id) !== parseInt(id))
    posts = filterPosts;

    res.status(200).json(
        posts
    );
}

module.exports = {
    GET_Crud,
    GET_Crud_id,
    POST_Crud,
    DELETE_Crud_id,
}