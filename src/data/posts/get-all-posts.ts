import { PostData } from "../../domain/posts/post";

export const getAllPosts = async (query= ""): Promise<PostData[]> => {
    const posts = await fetch(`https://arcane-cliffs-15437.herokuapp.com/api/posts/?populate=*${query}`);
    const jsonPosts = await posts.json();
  
    return jsonPosts.data;
  }