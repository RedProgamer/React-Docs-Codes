function SearchBar({ text, checked, onFilterTextChange, onStockChange }) {
    return (
        <form>
            <div>
                <label htmlFor="filter">Input : </label>
                <input value={text} onChange={(event) => onFilterTextChange(event.target.value)} name="filter" placeholder="Search..."/>
            </div>
            
            <div>
                <input checked={checked} onChange={(event) => onStockChange(event.target.checked)} type="checkbox" />Only show products in stock
            </div>
        </form>
    );
}

export default SearchBar;