import { gql } from 'graphql-request';

export const updateProductQuery = (productData) => {
  return gql`
    mutation{
  productUpdate(
    id:${productData.product_id}
    input: {
      price: ${productData.product_catalog_price}
      name: "${productData.name}"
      slug: "${productData.slug}"
      weight: "${productData.weight}"
      rating: "${productData.rating}"
      productType: "$productType"
    }
  )
}
    `;
};
