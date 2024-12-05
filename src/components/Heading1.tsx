interface Heading1Props {
    text: string;
    style?: React.CSSProperties;
}
export const Heading1: React.FC<Heading1Props> = ({ text, style }) => (
    <h1 style={{ fontSize: '32px', fontWeight: 'bold', ...style }}>{text}</h1>
);
