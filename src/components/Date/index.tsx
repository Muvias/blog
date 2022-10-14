import formatDate from "../../utils/formatDate";

import { Container } from "./styled";

export type DateProps = {
    date: string;
}

export default function Date({ date }: DateProps) {
    return (
        <Container>{formatDate(date)}</Container>
    );
} 