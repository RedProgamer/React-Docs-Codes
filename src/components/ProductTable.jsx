import ProductCategory from "./ProductCategory";
import ProductRow from "./ProductRow";

function ProductTable({ products, filteredText, isStocked }) {
    
    const rows = [];
    let lastCategory = null;

    products.forEach((product) => {
        if(product.name.toLowerCase().indexOf(filteredText.toLowerCase()) === -1)
            return -1;

        if(isStocked && !product.stocked)
            return;
        
        if(product.category !== lastCategory) {
            rows.push(
                <ProductCategory category={product.category} key={product.category} />
            );
        }
        rows.push(
            <ProductRow key={product.name} product={product} />
        );

        lastCategory = product.category;
    });


    return (
        <table>
            <thead>
                <tr>
                <th>Name</th>
                <th>Price</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

export default ProductTable;