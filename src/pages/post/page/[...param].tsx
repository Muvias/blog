import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from "next"

import { getAllPosts } from "../../../data/posts/get-all-posts";
import { countAllCategoryPosts } from "../../../data/posts/count-all-posts";
import { PostData } from "../../../domain/posts/post";
import { PaginationData } from "../../../domain/posts/paginations";

import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import HomePage from "../../../containers/HomePage";

export type ParamProps = {
  posts: PostData[];
  category?: string;
  pagination: PaginationData;
}

export default function Param({ posts, category, pagination }: ParamProps) {
  const router = useRouter();

  if(router.isFallback) return <div>Carregando...</div>;
  if(!posts.length) return <div>Página não encontrada.</div>;

  return (
    <>
      <Header />
      <HomePage posts={posts} category={category} pagination={pagination} />
      <Footer />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const page = Number(context.params.param[0]);

  const category = context.params.param[1] || '';

  const postsPerPage = 6;
  const startFrom = (page - 1) * postsPerPage;
  const nextPage = page + 1;
  const previousPage = page - 1;

  const categoryQuery = category ? `&filters[category][name]=${category}` : '';

  const posts = await getAllPosts(`&sort=id:desc&pagination[start]=${startFrom}&pagination[limit]=${postsPerPage}${categoryQuery}`);
  
  const numberOfPosts = Number(await countAllCategoryPosts(categoryQuery))
  const pagination: PaginationData = {
    nextPage,
    previousPage,
    numberOfPosts,
    postsPerPage,
    category,
  }

  return {
    props: { posts, pagination, category },
  }
};
