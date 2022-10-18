import { GetServerSideProps } from "next";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HomePage from "../../containers/HomePage";

import { getAllPosts } from "../../data/posts/get-all-posts";
import { PostData } from "../../domain/posts/post";

export type CategoryProps = {
  posts: PostData[];
  category: string;
}

export default function Category({ posts, category }: CategoryProps) {
  return (
    <>
      <Header />
      <HomePage posts={posts} category={category} />
      <Footer />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const posts = await getAllPosts(`&filters[category][name]=${ctx.query.category}`);

  return {
    props: { posts, category: ctx.query.category },
  }
};
