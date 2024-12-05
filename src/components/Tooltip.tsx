interface TooltipProps {
    text: string;
    children: React.ReactNode;
    style?: React.CSSProperties;
}
export const Tooltip: React.FC<TooltipProps> = ({ text, children, style }) => (
    <div style={{ position: 'relative', display: 'inline-block' }}>
        {children}
        <div
            style={{
                visibility: 'hidden',
                position: 'absolute',
                backgroundColor: 'black',
                color: 'white',
                fontSize: '12px',
                padding: '5px',
                borderRadius: '4px',
                bottom: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
                whiteSpace: 'nowrap',
                ...style
            }}
        >
            {text}
        </div>
    </div>
);
