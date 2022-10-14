import Link from "next/link";
import * as styles from "./styled";

export type PostCardProps = {
    slug: string;
    title: string;
    coverUrl: string;
}

export default function PostCard({ slug, title, coverUrl }: PostCardProps) {
    return (
        <styles.Container>

            <styles.PostCardCover>
                <Link href="/post/[slug]" as={`/post/${slug}`}>
                    <img src={coverUrl} alt={title} />
                </Link>
            </styles.PostCardCover>

            <styles.PostCardHeading>
                <Link href="/post/[slug]" as={`/post/${slug}`}>
                    {title}
                </Link>
            </styles.PostCardHeading>

        </styles.Container>
    )
};