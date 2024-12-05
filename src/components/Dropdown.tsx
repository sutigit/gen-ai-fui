interface DropdownProps {
    options: string[];
    onChange: (value: string) => void;
    style?: React.CSSProperties;
}
export const Dropdown: React.FC<DropdownProps> = ({ options, onChange, style }) => (
    <select
        onChange={(e) => onChange(e.target.value)}
        style={{ padding: '10px', borderRadius: '4px', ...style }}
    >
        {options.map((option, index) => (
            <option key={index} value={option}>
                {option}
            </option>
        ))}
    </select>
);
