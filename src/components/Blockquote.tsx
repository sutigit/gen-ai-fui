interface BlockquoteProps {
    text: string;
    style?: React.CSSProperties;
}
export const Blockquote: React.FC<BlockquoteProps> = ({ text, style }) => (
    <blockquote
        style={{ fontStyle: 'italic', borderLeft: '4px solid gray', padding: '10px', ...style }}
    >
        {text}
    </blockquote>
);
