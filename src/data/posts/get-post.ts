import { PostData } from "../../domain/posts/post";
import markdownToHtml from "../../utils/markdownToHtml";

export const getOnePost = async (slug: string | string[]): Promise<PostData[]> => {
    const slugString = Array.isArray(slug) ? slug[0] : slug;
    const posts = await fetch(`https://arcane-cliffs-15437.herokuapp.com/api/posts/?populate=*&filters[slug][$eq]=${slugString}`);
    const jsonPosts = await posts.json();
    const htmlContent = await markdownToHtml(jsonPosts.data[0].attributes.content)
    const content = { ...jsonPosts.data[0], htmlContent};
    
  
    return [content];
  }