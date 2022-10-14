import { Container } from "./style";


export type HeadingProps = {
    children: React.ReactNode;
}

export default function Heading({ children }: HeadingProps) {
    return (
        <Container>
            {children}
        </Container>
    )
}