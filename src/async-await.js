const posts = [
  {
    title: 'Post One',
    body: 'This is post one',
  },
  {
    title: 'Post Two',
    body: 'This is post two',
  },
];

const getPosts = () => {
  setTimeout(() => {
    let output = '';
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });

    document.body.innerHTML = output;
  }, 1000);
};

const createPost = (post) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      posts.push(post);

      const err = false;
      !err ? res() : rej('Error: Something went wrong...');
    }, 2000);
  });
};

// Async await
const init = async () => {
  await createPost({ title: 'Post Three', body: 'This is post three' });

  getPosts();
};

init();

// Async Await with fetch
const getTodos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/comments');
  const data = await res.json();

  console.log(data);
};

getTodos();
