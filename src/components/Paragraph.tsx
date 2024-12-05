interface ParagraphProps {
    text: string;
    style?: React.CSSProperties;
}
export const Paragraph: React.FC<ParagraphProps> = ({ text, style }) => (
    <p style={{ fontSize: '16px', lineHeight: '1.5', ...style }}>{text}</p>
);
