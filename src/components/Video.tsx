interface VideoProps {
    src: string;
    controls?: boolean;
    style?: React.CSSProperties;
}
export const Video: React.FC<VideoProps> = ({ src, controls = true, style }) => (
    <video
        src={src}
        controls={controls}
        style={{ width: '100%', height: 'auto', ...style }}
    />
);
