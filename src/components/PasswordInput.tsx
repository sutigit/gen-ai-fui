interface PasswordInputProps {
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    style?: React.CSSProperties;
}
export const PasswordInput: React.FC<PasswordInputProps> = ({ placeholder, value, onChange, style }) => (
    <input
        type="password"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{ border: '1px solid gray', padding: '8px', borderRadius: '4px', ...style }}
    />
);
