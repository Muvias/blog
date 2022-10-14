import Date from "../Date";
import { Container } from "./styled";

export type PostDetailsProps = {
    date: string;
    author: string;
    category: string;
}

export default function PostDetails({ date, author, category }: PostDetailsProps) {
    return (
        <Container>
            Publicado em <Date date={date} /> por {author} | {category}
        </Container>
    );
} 