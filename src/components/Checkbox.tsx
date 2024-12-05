interface CheckboxProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    style?: React.CSSProperties;
}
export const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, style }) => (
    <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        style={{ width: '20px', height: '20px', border: '1px solid black', ...style }}
    />
);
