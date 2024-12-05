interface ProgressBarProps {
    progress: number; // Value between 0 and 100
    style?: React.CSSProperties;
}
export const ProgressBar: React.FC<ProgressBarProps> = ({ progress, style }) => (
    <div style={{ backgroundColor: 'gray', height: '10px', borderRadius: '4px', overflow: 'hidden', ...style }}>
        <div
            style={{ width: `${progress}%`, backgroundColor: 'blue', height: '100%' }}
        />
    </div>
);
