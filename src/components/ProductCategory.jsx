function ProductCategory({ category }) {
    return (
        <tr>
            <th colSpan="2">
                {category}
            </th>
        </tr>
    );
}

export default ProductCategory;