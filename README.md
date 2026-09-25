# DOGO Bulgaria Store

DOGO Bulgaria Store is a React-based e-commerce website created for the Bulgarian representation of DOGO.

The project follows the visual identity of the official DOGO Store while providing a localized experience for customers in Bulgaria.

---

## 🎯 Project Goal

The goal of the project is to create a modern and responsive Bulgarian online store for DOGO products.

The website allows customers to:

- Browse DOGO products by category
- View detailed product information
- Select product sizes and variants
- Access delivery, return and size information
- Use the website in Bulgarian or English
- Create or access a customer account

Product, cart and checkout functionality is planned to be connected with Shopify.

---

## 🛠 Technologies

### Frontend

- React
- Vite
- React Router
- JavaScript
- CSS
- Context API
- i18next
- react-i18next
- React Icons

### E-commerce Integration

- Shopify — product, cart and checkout integration

### Backend / Development

- Node.js
- Express.js
- PostgreSQL / Prisma — explored during the initial backend development

### Version Control

- Git
- GitHub

---

## 🌍 Internationalization

The website supports:

- 🇧🇬 Bulgarian
- 🇬🇧 English

Language switching is implemented with `i18next` and `react-i18next`.

The selected language is stored locally so the user's preference is preserved.

---

## 📄 Pages

### Store

- Home
- Women
- Men
- Kids
- Deals
- Collections
- Product Details
- Order

### Customer

- Login
- Register

### Information

- About Us
- Delivery
- Returns & Exchanges
- FAQ
- Size & Care Guide

### Other

- Custom 404 / Not Found page

---

## ✨ Current Features

- Responsive navigation
- Mobile menu
- Bulgarian / English language switcher
- Product cards and product grids
- Category navigation
- Product details interface
- Order interface
- Login and registration interfaces
- FAQ accordion
- Delivery information
- Returns and exchange information
- Size tables
- Product care instructions
- Social media links
- Responsive layout
- Custom 404 page

---

## 🔎 Planned / In Progress

The following functionality is still being developed or depends on the Shopify integration:

- Shopify product catalog
- Dynamic product details
- Product search
- Shopping cart
- Checkout
- Customer account integration
- Live product availability / stock
- Final hero/banner imagery

---

## 👟 Product Structure

Products may include:

- Name
- Description
- Category
- Price
- Images
- Color
- Available sizes
- Stock / availability
- Product code / SKU

Product information is expected to be supplied through the e-commerce integration rather than maintained as static frontend data.

---

## 🛒 Shopping Flow

```text
Customer
   ↓
Browse Products
   ↓
Select Product
   ↓
Select Size / Variant
   ↓
Add to Cart / Buy
   ↓
Checkout
   ↓
Order Processing
```

The final shopping and checkout flow will depend on the Shopify integration.

---

## 🎨 Design

The visual direction is based on the official DOGO Store brand identity and adapted for the Bulgarian website.

Main design elements include:

- Header and navigation
- Hero sections
- Category sections
- Product cards
- Product grids
- Product details
- Responsive typography and spacing
- Footer
- Mobile responsive design

---

## 📱 Responsive Design

The website is designed to work across:

- Desktop
- Tablet
- Mobile devices

Individual components and informational pages include responsive layouts and mobile-specific styling.

---

## 📌 Development Status

### Core UI

- [x] Project setup
- [x] React routing
- [x] Header
- [x] Footer
- [x] Home page
- [x] Category pages
- [x] Product cards
- [x] Product grid
- [x] Product details UI
- [x] Responsive layout

### Localization

- [x] Bulgarian translation
- [x] English translation
- [x] Language switcher

### Customer UI

- [x] Login interface
- [x] Registration interface
- [ ] Customer account integration

### Information Pages

- [x] About Us
- [x] Delivery
- [x] Returns & Exchanges
- [x] FAQ
- [x] Size & Care Guide
- [x] Custom 404 page

### E-commerce

- [ ] Shopify product integration
- [ ] Dynamic search
- [ ] Cart integration
- [ ] Checkout integration
- [ ] Live stock / availability

### Final

- [ ] Final banner imagery
- [ ] Full mobile testing
- [ ] Final validation
- [ ] Error handling review
- [ ] Deployment

---

## 👥 Team Responsibilities

### Palmira

- Project structure
- React architecture
- Routing
- State management
- Internationalization
- Application pages and functionality
- E-commerce integration support
- Order flow
- Git / GitHub integration

### Rosen

- Shopify integration
- UI development
- Responsive styling
- Visual matching with DOGO Store
- Static UI sections
- Asset preparation
- UI testing

---

## 🚧 Project Status

The main frontend structure and informational content are implemented.

Current development is focused on integrating the store with Shopify and completing the remaining e-commerce functionality.
