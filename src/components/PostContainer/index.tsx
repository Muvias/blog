import { Container } from "./styled";

export type PostContainerProps = {
    content: string;
}

export default function PostContainer({ content }: PostContainerProps) {
    return (
        <Container>
            <div dangerouslySetInnerHTML={{ __html: content }}/>
        </Container>
    );
} 