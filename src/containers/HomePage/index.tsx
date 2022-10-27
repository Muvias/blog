import Head from "next/head";
import MainContainer from "../../components/MainContainer";
import Pagination from "../../components/Pagination";
import PostCard from "../../components/PostCard";
import { PaginationData } from "../../domain/posts/paginations";
import { PostData } from "../../domain/posts/post";
import { Category, Container } from "./styles";

export type HomePageProps = {
  posts: PostData[];
  category?: string;
  pagination?: PaginationData;
}

export default function HomePage({ posts, category, pagination }: HomePageProps) {
    return (
      <>
        <Head>
          <title>{category  && `${category} - `}Vinicius Perazza</title>
          <meta name="description" content="Este é meu blog de tecnologia." />
        </Head>
        {category && <Category>Categoria: {category}</Category>}
        <MainContainer>
          <Container>
            {posts.map((post) => (
            <PostCard
              key={post.id}
              coverUrl={post.attributes.cover.data.attributes.formats.small.url} 
              slug={post.attributes.slug}
              title={post.attributes.title}
            />
            ))}
          </Container>
          <Pagination {...pagination} />
        </MainContainer>
      </>
      )
}