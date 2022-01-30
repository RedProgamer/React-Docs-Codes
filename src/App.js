import SearchBar from "./components/SearchBar";
import ProductTable from "./components/ProductTable";
import "./App.css";
import { Fragment, useState } from "react";

const PRODUCTS = [
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

function App() {

    const [filterText, setFilterText] = useState('John');
    const [isStocked, setIsStocked] = useState(true);

    return (
        <Fragment>
            <SearchBar text={filterText} checked={isStocked} onFilterTextChange={setFilterText} onStockChange={setIsStocked}/>
            <ProductTable products={PRODUCTS} filteredText={filterText} isStocked={isStocked}/>
        </Fragment>
    );
}

export default App;