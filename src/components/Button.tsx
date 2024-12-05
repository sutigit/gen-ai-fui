interface ButtonProps {
    text: string;
    onClick: () => void;
    style?: React.CSSProperties;
}
export const Button: React.FC<ButtonProps> = ({ text, onClick, style }) => (
    <button
        style={{ padding: '10px 20px', fontSize: '16px', borderRadius: '4px', ...style }}
        onClick={onClick}
    >
        {text}
    </button>
);
