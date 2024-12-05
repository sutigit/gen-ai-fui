interface ImageProps {
    src: string;
    alt: string;
    style?: React.CSSProperties;
}
export const Image: React.FC<ImageProps> = ({ src, alt, style }) => (
    <img
        src={src}
        alt={alt}
        style={{ maxWidth: '100%', height: 'auto', borderRadius: '4px', ...style }}
    />
);
