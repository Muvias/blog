import Head from "next/head";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Heading from "../../components/Heading";
import MainContainer from "../../components/MainContainer";
import PostContainer from "../../components/PostContainer";
import PostCover from "../../components/PostCover";
import PostDetails from "../../components/PostDetails";

import Comments from "../../Comments";

import { PostData } from "../../domain/posts/post"
import { removeHtml } from "../../utils/remove-html";

export type PostProps = {
    post: PostData;
}

export default function Post({ post }: PostProps) {
    return (
        <>
            <Head>
                <title>{post.attributes.title} - Vinicius Perazza</title>
                <meta name="description" content={removeHtml(post.htmlContent).slice(0, 150)} />
            </Head>
            <Header />
            {console.log(post.attributes.title)}
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