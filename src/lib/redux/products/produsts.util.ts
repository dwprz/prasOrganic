export const mergeProducts = (
    existingProducts: Product[],
    newProducts: Product[]
  ): Product[] => {
    const newProductIds = newProducts.map((product) => product.id);
    return [
      ...existingProducts.filter(
        (product) => !newProductIds.includes(product.id)
      ),
      ...newProducts,
    ];
  };