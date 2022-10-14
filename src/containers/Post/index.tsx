import Comments from "../../Comments";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Heading from "../../components/Heading";
import MainContainer from "../../components/MainContainer";
import PostContainer from "../../components/PostContainer";
import PostCover from "../../components/PostCover";
import PostDetails from "../../components/PostDetails";
import { PostData } from "../../domain/posts/post"

export type PostProps = {
    post: PostData;
}

export default function Post({ post }: PostProps) {
    return (
        <>
            <Header />

            <MainContainer>
                <Heading>{post.attributes.title}</Heading>
                <PostCover coverUrl={post.attributes.cover.data.attributes.url} alt={post.attributes.title} />
                <PostDetails date={post.attributes.publishedAt} author={post.attributes.author.data.attributes.name} category={post.attributes.category.data.attributes.name} />

                <PostContainer content={post.htmlContent} />
                <Comments title={post.attributes.title} slug={post.attributes.slug} />
            </MainContainer>
            <Footer />
        </>
    )
}