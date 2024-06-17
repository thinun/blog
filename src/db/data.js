import imgPost from '../../public/f1.jpg';

const users = [
    {id: 1, userName: 'thin', email: "thinuntharushika@gmail.com"},
    {id: 2, userName: 'Fury', email: "thinunt1997@gmail.com"}
];

const posts = [
    {id: 3, title: 'Post 1', description: "hello world", userID: 1, slug: 'sl-1', img: imgPost},
    {id: 4, title: 'Post 2', description: "hello world", userID: 1, slug: 'sl-2', img: imgPost},
    {id: 5, title: 'Post 3', description: "hello world", userID: 1, slug: 'sl-3', img: imgPost},
    {id: 6, title: 'Post 4', description: "hello world", userID: 1, slug: 'sl-4', img: imgPost},
    {id: 7, title: 'Post 5', description: "hello world", userID: 1, slug: 'sl-5', img: imgPost},
    {id: 8, title: 'Post 6', description: "hello world", userID: 1, slug: 'sl-6', img: imgPost},
];

export const getPosts = () => {
    return posts;
};

export const getPost = (id) => {
    return posts.find((post) => post.id === id);
};

export const getUser = (id) => {
    return users.find((user) => user.id === id);
};
