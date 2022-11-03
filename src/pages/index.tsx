import { GetStaticProps } from "next"

import { getAllPosts } from "../data/posts/get-all-posts";

import { PostData } from "../domain/posts/post";

import Footer from "../components/Footer";
import Header from "../components/Header";
import HomePage from "../containers/HomePage";


export type HomeProps = {
  posts: PostData[];
}

export default function Home({ posts }: HomeProps) {
  return (
    <>
      <Header />
      <HomePage posts={posts} />
      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const posts = await getAllPosts("&sort=id:desc&pagination[start]=0&pagination[limit]=6");

  return {
    props: { posts },
  }
};
