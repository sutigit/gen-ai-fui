interface RadioButtonProps {
    name: string;
    value: string;
    checked: boolean;
    onChange: (value: string) => void;
    style?: React.CSSProperties;
}
export const RadioButton: React.FC<RadioButtonProps> = ({ name, value, checked, onChange, style }) => (
    <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        style={{ width: '20px', height: '20px', borderRadius: '50%', ...style }}
    />
);
