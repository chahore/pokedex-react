import "./SearchInput.css";

function SearchInput({ searchTerm, onSearchChange }) {
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
