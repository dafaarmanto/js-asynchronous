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

createPost({ title: 'Post three', body: 'This is post three' })
  .then(getPosts)
  .catch((err) => console.log(err));

// Promise.all
const promiseOne = Promise.resolve('Hello World');
const promiseTwo = 'This is promise number two';
const promiseThree = new Promise((res, rej) =>
  setTimeout(res, 2000, 'And... this is promise number three!')
);
const promiseFour = fetch('https://jsonplaceholder.typicode.com/todos/1').then(
  (res) => res.json()
);

Promise.all([promiseOne, promiseTwo, promiseThree, promiseFour]).then((val) =>
  console.log(val)
);
