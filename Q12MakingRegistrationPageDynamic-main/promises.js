const posts=[
    {title:'Post One', body:'This is post one'},
    {title:'Post Two', body:'This is post two'},
];


function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const lastActivityTime = new Date().toLocaleTimeString();
            resolve(lastActivityTime);
        }, 1000);
    });
}

function getAllPostsAndUserActivity() {
    console.log('Posts:', posts);
    updateLastUserActivityTime()
        .then((lastActivityTime) => {
            console.log('Last Activity Time:', lastActivityTime);
            return deleteLastPost();
        })
        .then(() => {
            console.log('Posts after deletion:', posts);
        })
        .catch(console.log);
}

function deleteLastPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const deletedPost = posts.pop();
                resolve(deletedPost);
            } else {
                reject('ERROR: No posts available');
            }
        }, 1000);
    });
}

function getPosts(){
    // setTimeout(function(){  
    setTimeout(()=>{     //FatArrow Function ES6
        let output=''
        posts.forEach((post,index)=>{
            output+=`<li style="color:red; background-color:powderblue;">${post.title}</li>`;

        });
        document.body.innerHTML=output;

    },1000);
}

function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            
            const error=false;

            if(!error){
                resolve();
            }else{
                reject('Error: something went wrong');
            }
        },2000);

    });

}



createPost({title:'Post Three', body:'This is post three'})
.then(getPosts)
.then(updateLastUserActivityTime)
.then(getAllPostsAndUserActivity)
.catch((err)=>{
    console.log(err)
});

////Using Promise.all
// const Promise1= Promise.resolve('Hello world');
// const Promise2= 10;
// const Promise3= new Promise((resolve,reject)=>{
//     setTimeout(resolve,2000,'Goodbye')
// });


// Promise.all([Promise1,Promise2,Promise3])
// .then(values=>console.log(values))
// .catch((err)=>{
//     console.log(err)
// })