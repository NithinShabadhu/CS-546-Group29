require('./models/DBConnection');
const Blogs = require('./models/Blogs');
const Users = require('./models/Users');

const main = async () =>{
    


const newBlog = new Blogs({
    userid:"newuser@gmail.com",
    author: "newuser",
    title: "Test title",
    body: "blog description",
    picture: "./public/img/Female.jpg",
    dateCreated:"16/12/2022",
    commentId:[],
    likes_count : 0,
    
  });

  await newBlog.save();

  const newBlog1 = new Blogs({
    userid:"newuse1r@gmail.com",
    author: "newuser1",
    title: "Test title1",
    body: "blog description1",
    picture: "./public/img/Female.jpg",
    dateCreated:"16/12/2022",
    commentId:[],
    likes_count : 0,
    
  });

  await newBlog1.save();


}

main()
