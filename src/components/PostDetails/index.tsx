import Link from "next/link";
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
            Publicado em <Date date={date} /> por {author} | <Link href={`/post/page/1/${category}`}>{category}</Link>
        </Container>
    );
} 