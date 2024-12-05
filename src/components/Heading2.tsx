interface Heading2Props {
    text: string;
    style?: React.CSSProperties;
}
export const Heading2: React.FC<Heading2Props> = ({ text, style }) => (
    <h2 style={{ fontSize: '28px', fontWeight: 'bold', ...style }}>{text}</h2>
);
