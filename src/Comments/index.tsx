import { DiscussionEmbed } from "disqus-react";
import { Container } from "./styled";

export type CommentsProps = {
    slug: string;
    title: string;
}

export default function Comments({ slug, title }: CommentsProps) {
    return (
        <Container>
           <DiscussionEmbed
            shortname="meublog-18"
            config={{
                url: `https://genuine-dasik-a20021.netlify.app/post/${slug}`,
                identifier: slug,
                title: title,
                language: 'pt-BR',
            }}
           />
        </Container>
    );
}