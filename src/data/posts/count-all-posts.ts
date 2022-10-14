import { PostData } from "../../domain/posts/post";

export const countAllPosts = async (query= ""): Promise<string> => {
    const posts = await fetch(`https://arcane-cliffs-15437.herokuapp.com/api/posts/count?${query}`);
    const numberOfPosts = await posts.json();
  
    return numberOfPosts.data;
  }