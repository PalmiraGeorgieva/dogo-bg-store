Product
- id
- name
- description
- category
- price
- image
- brand

ProductVariant
- id
- productId
- size
- color
- stock

Order
- id
- customerName
- phone
- email
- address
- status
- createdAt

OrderItem
- id
- orderId
- productVariantId
- quantity
- price