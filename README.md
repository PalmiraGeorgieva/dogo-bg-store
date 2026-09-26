# DOGO Bulgaria Store

Web application inspired by the official DOGO Store website.

## 🎯 Project Goal

Създаване на български сайт за продуктите на DOGO, визуално максимално
близък до оригиналния DOGO Store.

Сайтът ще позволява на клиентите да разглеждат продукти, да избират
размер/вариант и да правят директна заявка/покупка.

Заявките ще се обработват от склада, а наличностите в сайта ще се
актуализират според обработените поръчки.

---

## 🛠 Technologies

### Frontend
- React
- React Router
- CSS
- Context API

### Backend
- Node.js
- Express.js
- Prisma ORM
- PostgreSQL

---

## 📄 Main Pages

### Public
- Home
- Women
- Men
- Kids
- Product Catalog
- Product Details
- Search
- Order / Buy Now
- Login / Register
- 404

### Administration / Warehouse
- Admin Dashboard
- Products
- Add Product
- Edit Product
- Stock Management
- Orders
- Order Details

---

## 👟 Products

Всеки продукт трябва да съдържа:

- Name
- Description
- Category
- Price
- Images
- Color
- Available sizes
- Stock for each size
- Product code / SKU

---

## 📦 Stock System

Наличността трябва да се следи по вариант.

Example:

DOGO Boots
- Size 36 → 3
- Size 37 → 5
- Size 38 → 2
- Size 39 → Out of stock

При обработване/изпращане на поръчка наличността трябва да се
актуализира автоматично.

---

## 🧾 Order Flow

Customer
↓
Select Product
↓
Select Size / Variant
↓
Buy Now / Order
↓
Enter Customer & Delivery Information
↓
Order Created
↓
Warehouse Receives Order
↓
Warehouse Confirms / Ships
↓
Stock Updated

### Order Statuses

- Pending
- Confirmed
- Processing
- Shipped
- Completed
- Cancelled

---

## 🗄 Database Models

- User
- Product
- ProductVariant
- Category
- Order
- OrderItem

---

## 🎨 Design

Reference:
Official DOGO Store

The Bulgarian version should follow the original brand identity as
closely as possible.

Important elements:
- Header/navigation
- Hero banners
- Category sections
- Product cards
- Product grid
- Product details layout
- Typography
- Spacing
- Mobile responsive design
- Footer

---

## 📌 Development Plan

### Phase 1 — Project Setup
- [ ] Create React project
- [ ] Create server
- [ ] Configure PostgreSQL
- [ ] Configure Prisma
- [ ] Create Git repository
- [ ] Create basic folder structure

### Phase 2 — UI
- [ ] Header
- [ ] Footer
- [ ] Home
- [ ] Categories
- [ ] Product Card
- [ ] Product Catalog
- [ ] Product Details
- [ ] Responsive design

### Phase 3 — Backend
- [ ] Product API
- [ ] Category API
- [ ] Authentication
- [ ] Orders API
- [ ] Stock management

### Phase 4 — Orders
- [ ] Buy Now / Request form
- [ ] Create order
- [ ] Warehouse order view
- [ ] Order statuses
- [ ] Stock update

### Phase 5 — Admin / Warehouse
- [ ] Dashboard
- [ ] Add products
- [ ] Edit products
- [ ] Delete/archive products
- [ ] Manage stock
- [ ] Manage orders

### Phase 6 — Final
- [ ] Validation
- [ ] Error handling
- [ ] Mobile testing
- [ ] Security checks
- [ ] Deployment

## Team Responsibilities

### Palmira
- Project structure
- React architecture
- Routing
- State management
- Backend with Node.js / Express
- Prisma / PostgreSQL
- API integration
- Order logic
- Stock management
- Authentication

### Rosen
- HTML/CSS structure
- Responsive styling
- Visual matching with DOGO Store
- Static UI sections
- Simple React components
- Asset preparation
- Testing UI on different screen sizes