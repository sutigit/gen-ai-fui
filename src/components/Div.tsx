interface DivProps {
    children: React.ReactNode; // Content to be rendered inside the div
    onClick?: () => void; // Optional click handler
    style?: React.CSSProperties; // Optional style
}

export const DivElement: React.FC<DivProps> = ({ children, onClick, style }) => (
    <div
        onClick={onClick}
        style={{
            padding: '10px',
            border: '1px solid gray',
            borderRadius: '5px',
            backgroundColor: '#f9f9f9',
            cursor: onClick ? 'pointer' : 'default',
            ...style,
        }}
    >
        {children}
    </div>
);
