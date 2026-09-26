const SHOPIFY_DOMAIN = import.meta.env.VITE_SHOPIFY_STORE_DOMAIN;
const STOREFRONT_ACCESS_TOKEN =
    import.meta.env.VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

const API_VERSION = '2026-07';

const SHOPIFY_STOREFRONT_API_URL =
    `https://${SHOPIFY_DOMAIN}/api/${API_VERSION}/graphql.json`;

export async function shopifyFetch(query, variables = {}) {
    const response = await fetch(SHOPIFY_STOREFRONT_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Storefront-Access-Token': STOREFRONT_ACCESS_TOKEN,
        },
        body: JSON.stringify({
            query,
            variables,
        }),
    });

    const result = await response.json();

    if (!response.ok || result.errors) {
        console.error('Shopify API error:', result.errors || result);
        throw new Error('Shopify API request failed');
    }

    return result.data;
}

export async function getProducts() {
    const query = `
        query GetProducts {
            products(first: 10) {
                nodes {
                    id
                    title
                    handle
                    description
                    availableForSale
                    images(first: 2) {
                        nodes {
                            url
                            altText
                        }
                }
                    priceRange {
                        minVariantPrice {
                            amount
                            currencyCode
                        }
                    }
                    variants(first: 20) {
                        nodes {
                            id
                            title
                            availableForSale
                        }
                    }
                }
            }
        }
    `;

    return shopifyFetch(query);
}

export async function getProductByHandle(handle) {
    const query = `
    query GetProductByHandle($handle: String!) {
      productByHandle(handle: $handle) {
        id
        title
        handle
        description
        availableForSale

        images(first: 10) {
          nodes {
            url
            altText
          }
        }

        variants(first: 20) {
          nodes {
            id
            title
            availableForSale
            price {
              amount
              currencyCode
            }
          }
        }
      }
    }
  `;

    const data = await shopifyFetch(query, {
        handle,
    });

    return data.productByHandle;   

}

export async function getCollectionByHandle(handle) {
    const query = `
        query GetCollection($handle: String!) {
            collection(handle: $handle) {
                id
                title
                handle
                products(first: 20) {
                    nodes {
                        id
                        title
                        handle
                        description
                        availableForSale
                        images(first: 2) {
                            nodes {
                                url
                                altText
                            }
                        }
                        priceRange {
                            minVariantPrice {
                                amount
                                currencyCode
                            }
                        }
                        variants(first: 20) {
                            nodes {
                                id
                                title
                                availableForSale
                            }
                        }
                    }
                }
            }
        }
    `;

    const data = await shopifyFetch(query, {
        handle,
    });

    return data.collection;
}

export async function createCart(variantId) {
    const query = `
        mutation CreateCart($input: CartInput) {
            cartCreate(input: $input) {
                cart {
                    id
                    checkoutUrl
                    totalQuantity
                }
                userErrors {
                    field
                    message
                }
            }
        }
    `;

    const data = await shopifyFetch(query, {
        input: {
            lines: [
                {
                    merchandiseId: variantId,
                    quantity: 1,
                },
            ],
        },
    });

    if (data.cartCreate.userErrors.length > 0) {
        console.error("Cart errors:", data.cartCreate.userErrors);
        throw new Error(data.cartCreate.userErrors[0].message);
    }

    return data.cartCreate.cart;
}

export async function addToCart(cartId, variantId) {
    const query = `
        mutation AddToCart($cartId: ID!, $lines: [CartLineInput!]!) {
            cartLinesAdd(cartId: $cartId, lines: $lines) {
                cart {
                    id
                    checkoutUrl
                    totalQuantity
                }
                userErrors {
                    field
                    message
                }
            }
        }
    `;

    const data = await shopifyFetch(query, {
        cartId,
        lines: [
            {
                merchandiseId: variantId,
                quantity: 1,
            },
        ],
    });

    if (data.cartLinesAdd.userErrors.length > 0) {
        console.error("Add to cart errors:", data.cartLinesAdd.userErrors);
        throw new Error(data.cartLinesAdd.userErrors[0].message);
    }

    return data.cartLinesAdd.cart;
}

export async function getCart(cartId) {
    const query = `
        query GetCart($cartId: ID!) {
            cart(id: $cartId) {
                id
                checkoutUrl
                totalQuantity
                cost {
                    subtotalAmount {
                        amount
                        currencyCode
                    }
                    totalAmount {
                        amount
                        currencyCode
                    }
                }
                lines(first: 50) {
                    nodes {
                        id
                        quantity
                        merchandise {
                            ... on ProductVariant {
                                id
                                title
                                price {
                                    amount
                                    currencyCode
                                }
                                product {
                                    id
                                    title
                                    handle
                                    featuredImage {
                                        url
                                        altText
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `;

    const data = await shopifyFetch(query, {
        cartId,
    });

    return data.cart;
}
