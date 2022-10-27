import Link from "next/link";
import { PaginationData } from "../../domain/posts/paginations";
import { Container, NextLink, PreviousLink } from "./styled";

export type PaginationProps = PaginationData;

export default function Pagination({ nextPage, numberOfPosts, postsPerPage, previousPage, category }: PaginationProps) {
    const categoryName= category || '';
    const nextLink= `/post/page/${nextPage}/${categoryName}`;
    const previousLink= `/post/page/${previousPage}/${categoryName}`;
    const hasNextPage = nextPage * postsPerPage < postsPerPage + numberOfPosts;
    const hasPreviousPage = previousPage >= 1;
    
    return (
        <Container>
            {hasPreviousPage && (
                <PreviousLink>
                    <Link href={previousLink}>Voltar</Link>
                </PreviousLink>
            )}

            {hasNextPage && (
                <NextLink>
                    <Link href={nextLink}>Próximo</Link>
                </NextLink>
            )}
        </Container>
    )
}