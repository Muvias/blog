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
                url: `http://vcap.me:3000/post/${slug}`,
                identifier: slug,
                title: title,
                language: 'pt-BR',
            }}
           />
        </Container>
    );
}