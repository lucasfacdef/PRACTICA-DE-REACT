import { Input } from "antd";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <Input
      placeholder="Buscar una película..."
      value={value}
      onChange={(event) => onChange(event.target.value)}
      size="large"
    />
  );
}

export default SearchBar;