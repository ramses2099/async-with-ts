import { getPostList } from "./src/functions";


(async function(){
    try{
        const posts = await getPostList();
        console.log(posts[0]);
    }catch(err: Error | any){
        console.error(err.message);
    } 
})();




