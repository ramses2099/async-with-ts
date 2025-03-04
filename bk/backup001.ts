import fetch from "node-fetch";
import { Post } from "./post";


// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(res => res.json())
// .then((data: Post[]) => console.log(data[0]))
// .catch((err) => console.log(err));

//return a Promise
const getPostList = async (): Promise<Post[]> =>{
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    }catch(err: Error | any){
        throw new Error(`Error fetching posts: ${err.message}`);
    }
}

(async function(){
    try{
        const posts = await getPostList();
        console.log(posts[0]);
    }catch(err: Error | any){
        console.error(err.message);
    } 
})();


const getFirstPost = async (): Promise<Post> {
    return  new Promise((resolve, reject)=>{
        try {
            const posts = await getPostList();
            const data: Post = posts[0];
            resolve(data);
        } catch (error: Error | any) {
            reject(new Error(`Error fetching posts: ${error.message}`));
        }
    });
}


// (async function(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//         if(!response.ok){
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data: Post[] = await response.json();
//         console.log(data[0]);
//     }catch(err){
//         console.error(err);
//     }
// })();

