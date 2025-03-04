import fetch from "node-fetch";
import { Post } from "./post";


//return a Promise
export const getPostList = async (): Promise<Post[]> =>{
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


