interface Author {
  name: string;
  avatar: string;
}

const author1: Author = {
  name: "Boly",
  avatar: "img",
};

interface Post {
  title: string;
  body: string;
  tags: string[];
  created: Date;
  author: Author;
}

const newPost: Post = {
  title: "New post",
  body: "post body",
  tags: ["dh"],
  created: new Date(),
  author: author1,
};

console.log(newPost);
