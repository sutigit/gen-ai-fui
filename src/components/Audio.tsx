interface AudioProps {
    src: string;
    controls?: boolean;
    style?: React.CSSProperties;
}
export const Audio: React.FC<AudioProps> = ({ src, controls = true, style }) => (
    <audio
        src={src}
        controls={controls}
        style={{ width: '100%', ...style }}
    />
);
