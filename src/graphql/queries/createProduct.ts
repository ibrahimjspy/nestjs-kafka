import { gql } from 'graphql-request';

export const createProductQuery = (productData) => {
  return gql`
    mutation{
  productCreate(
    input: {
      attributes: [
        id: A1
        values: ["${productData.color}"]
      ]
      category: ${productData.category}
      description: "${productData.description}"
      name: "${productData.name}"
      slug: "${productData.slug}"
      seo: {
        title: "${productData.seo_title}"
        description: "${productData.seo_description}"
      }
      weight: "${productData.weight}"
      rating: "${productData.rating}"
      productType: "$productType"
    }
  )
}
    `;
};
