interface SearchInputProps {
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    style?: React.CSSProperties;
}
export const SearchInput: React.FC<SearchInputProps> = ({ placeholder, value, onChange, style }) => (
    <input
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{ border: '1px solid gray', padding: '8px', borderRadius: '4px', ...style }}
    />
);
