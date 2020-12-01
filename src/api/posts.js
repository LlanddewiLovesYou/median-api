const PostFactory = (props) => {
  const defaultPost = {
    id: "post-title-here",
    title: "Post Title Here",
    subtitle: "Subtitle Here",
    body: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis lectus at sapien rhoncus, eu sagittis elit luctus. Fusce luctus fringilla risus nec eleifend. Aenean vitae tellus non lectus consectetur laoreet. Nam pharetra felis eu magna blandit placerat eu nec odio. Mauris posuere pretium odio, eu blandit lacus posuere sit amet. Curabitur quis mattis tortor. Sed risus elit, tempor eget purus sed, luctus mattis sapien. Morbi nisi nunc, molestie vel neque aliquet, eleifend dictum nibh. Ut ligula erat, sollicitudin a egestas et, scelerisque eget ipsum. Donec sed tortor sit amet lorem gravida tempus dapibus id urna.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis lectus at sapien rhoncus, eu sagittis elit luctus. Fusce luctus fringilla risus nec eleifend. Aenean vitae tellus non lectus consectetur laoreet. Nam pharetra felis eu magna blandit placerat eu nec odio. Mauris posuere pretium odio, eu blandit lacus posuere sit amet. Curabitur quis mattis tortor. Sed risus elit, tempor eget purus sed, luctus mattis sapien. Morbi nisi nunc, molestie vel neque aliquet, eleifend dictum nibh. Ut ligula erat, sollicitudin a egestas et, scelerisque eget ipsum. Donec sed tortor sit amet lorem gravida tempus dapibus id urna.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis lectus at sapien rhoncus, eu sagittis elit luctus. Fusce luctus fringilla risus nec eleifend. Aenean vitae tellus non lectus consectetur laoreet. Nam pharetra felis eu magna blandit placerat eu nec odio. Mauris posuere pretium odio, eu blandit lacus posuere sit amet. Curabitur quis mattis tortor. Sed risus elit, tempor eget purus sed, luctus mattis sapien. Morbi nisi nunc, molestie vel neque aliquet, eleifend dictum nibh. Ut ligula erat, sollicitudin a egestas et, scelerisque eget ipsum. Donec sed tortor sit amet lorem gravida tempus dapibus id urna.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis lectus at sapien rhoncus, eu sagittis elit luctus. Fusce luctus fringilla risus nec eleifend. Aenean vitae tellus non lectus consectetur laoreet. Nam pharetra felis eu magna blandit placerat eu nec odio. Mauris posuere pretium odio, eu blandit lacus posuere sit amet. Curabitur quis mattis tortor. Sed risus elit, tempor eget purus sed, luctus mattis sapien. Morbi nisi nunc, molestie vel neque aliquet, eleifend dictum nibh. Ut ligula erat, sollicitudin a egestas et, scelerisque eget ipsum. Donec sed tortor sit amet lorem gravida tempus dapibus id urna.</p>
      `,
    claps: 1979,
    createdAt: new Date(Date.now()),
    updatedAt: new Date(Date.now()),
    readTime: 5,
    author: "Ian Del Duca",
    imageUrl:
      "https://image.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-260nw-1037719192.jpg",
  };
  return {
    ...defaultPost,
    ...props,
  };
};

const post1 = PostFactory({
  imageUrl: "https://photolemur.com/uploads/blog/unnamed.jpg",
  id: "this-article-has-a-title-1",
  title: "This article has a title.",
  subtitle:
    "This is a subititle or sometimes a short summary that gives you a preview of the article",
});
const post2 = PostFactory({
  imageUrl:
    "https://thehappypuppysite.com/wp-content/uploads/2019/03/Corgi-Temperament-long.jpg",
  id: "Corgos-the-bestest-goodest-bois",
  title: "Corgos: The bestest, goodest bois.",
  subtitle: "Are corgos the best? Yes. Why would you even have to ask?",
});
const post3 = PostFactory({
  id: "this-article-has-a-title-3",
  title: "This article has a title.",
  subtitle:
    "This is a subititle or sometimes a short summary that gives you a preview of the article",
});
const post4 = PostFactory({
  id: "this-article-has-a-title-4",
  title: "This article has a title.",
  subtitle:
    "This is a subititle or sometimes a short summary that gives you a preview of the article",
});
const post5 = PostFactory({
  id: "this-article-has-a-title-5",
  title: "This article has a title.",
  subtitle:
    "This is a subititle or sometimes a short summary that gives you a preview of the article",
});
const post6 = PostFactory({
  id: "this-article-has-a-title-6",
  title: "This article has a title.",
  subtitle:
    "This is a subititle or sometimes a short summary that gives you a preview of the article",
});
const posts = [post2, post1, post3, post4, post5, post6];

const getPosts = (req, res, next) => {
  res.send(posts);
};

const createPost = (req, res, next) => {
  const data = req.body;
};

module.exports = { getPosts };
