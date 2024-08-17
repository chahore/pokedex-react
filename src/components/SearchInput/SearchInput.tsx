import "./SearchInput.css";

interface SearchInputProps {
  searchTerm: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchInput({ searchTerm, onSearchChange }: SearchInputProps) {
  return (
    <input
      className="search-pokedex"
      type="text"
      placeholder="Search by name, type, or ID"
      value={searchTerm}
      onChange={onSearchChange}
    />
  );
}

export default SearchInput;
