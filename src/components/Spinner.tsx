interface SpinnerProps {
    size?: string;
    style?: React.CSSProperties;
}
export const Spinner: React.FC<SpinnerProps> = ({ size = '40px', style }) => (
    <div
        style={{
            width: size,
            height: size,
            border: '4px solid gray',
            borderTop: '4px solid blue',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            ...style
        }}
    />
);
