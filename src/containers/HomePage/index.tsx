import MainContainer from "../../components/MainContainer";
import PostCard from "../../components/PostCard";
import { PostData } from "../../domain/posts/post";
import { Container } from "./styles";

export type HomePageProps = {
    posts: PostData[];
  }

export default function HomePage({ posts }: HomePageProps) {
    return (
      <>
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
        </MainContainer>
      </>
      )
}