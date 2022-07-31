// The below is an example of why we have to always use to callback. The createPost function was called only after two seconds therefore the gestposts function has already been has already appended the post.body the DOM.

const posts = [
    { title: "Post One", body: "This is post one" },
    { title: "Post Two", body: "This is post two" },
];

const divone = document.querySelector(".one");

function getPosts() {
    setTimeout(() => {
        let postBody = "";
        posts.forEach((post) => {
            postBody += `<li>${post.body}</li>`;
        });
        divone.innerHTML = postBody;
    }, 1000);
}

function createPost(post) {
    setTimeout(() => {
        posts.push(post);
    }, 2000);
}

createPost({ title: "Post Three", body: "This is post Three" });

// So a callback is created so that the one function is called immediately after another function has been called to ensure that functions are called in the right order.

callbacks;

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

createPost({ title: "Post Three", body: "This is post Three" }, getPosts);

// Promises

const posts = [
    { title: "Post One", body: "This is post one" },
    { title: "Post Two", body: "This is post two" },
];

const divone = document.querySelector(".one");

function getPosts() {
    setTimeout(() => {
        let postBody = "";
        posts.forEach((post) => {
            postBody += `<li>${post.body}</li>`;
        });
        divone.innerHTML = postBody;
    }, 1000);
}

createPost({ title: "Post Three", body: "This is post Three" }, getPosts);

function createPost(post) {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            resolve("Yes it is resolved");

            reject("Something went wrong");
        }, 2000);
    })
        .then(getPosts)
        .catch(() => {
            console.log("error!!!!!!!");
        });
}

createPost({ title: "Post Three", body: "This is post Three" });

// Async Await

const posts = [
    { title: "Post One", body: "This is post one" },
    { title: "Post Two", body: "This is post two" },
];

const divone = document.querySelector(".one");

function getPosts() {
    setTimeout(() => {
        let postBody = "";
        posts.forEach((post) => {
            postBody += `<li>${post.body}</li>`;
        });
        divone.innerHTML = postBody;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            resolve("Yes it is resolved");

            reject("Something went wrong");
        }, 2000);
    });
}

// createPost({ title: "Post Three", body: "This is post Three" })
//     .then(getPosts)
//     .catch(() => {
//         console.log("error!!!!!!!");
//     });

async function init() {
    await createPost({ title: "Post Three", body: "This is post Three" });
    getPosts();
}

init();
