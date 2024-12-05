interface IconButtonProps {
    icon: string;
    onClick: () => void;
    style?: React.CSSProperties;
}
export const IconButton: React.FC<IconButtonProps> = ({ icon, onClick, style }) => (
    <button
        style={{ width: '40px', height: '40px', borderRadius: '50%', ...style }}
        onClick={onClick}
    >
        <img src={icon} alt="icon" style={{ width: '100%', height: '100%' }} />
    </button>
);
