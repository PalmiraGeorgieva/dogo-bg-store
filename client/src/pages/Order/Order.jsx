import { useLocation, Link } from "react-router-dom";
import { useState } from "react";
import "./Order.css";

function Order() {
    const location = useLocation();
    const { product, selectedSize } = location.state || {};

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.targer;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log({
            product,
            selectedSize,
            customer: formData,
        });
    };

    if (!product) {
        return (
            <section className="order-page">
                <h1>Няма избран продукт.</h1>
            </section>
        )
    }

    return (
        <section className="order-page">
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span> / </span>
              <Link to={`/products/${product.id}`}>
                  {product.name}
              </Link>
              <span> / </span>
              <span>Order</span>
            </div>
            <h1>Заявка за продукт</h1>
            <div className="order-container">
                <div className="order-summary">
                    <img 
                       src={product.image} 
                       alt={product.name} 
                       className="order-product-image"
                    />
                    <h2>{product.name}</h2>
                    <p>
                        <strong>Код:</strong> {product.id}
                    </p>
                    <p>
                        <strong>Размер:</strong> {selectedSize}
                    </p>
                    <p>
                        <strong>Цена:</strong> {product.price.toFixed(2)} USD 
                    </p>
                </div>
                <form className="order-form" onSubmit={handleSubmit}>
                   <h2>Вашите данни</h2>

                   <input
                     type="text"
                     name="firstName"
                     placeholder="Име"
                     value={formData.firstName}
                     onChange={handleChange}
                     required
                    />

                    <input 
                       type="text"
                     name="lasttName"
                     placeholder="Фамилия"
                     value={formData.lastName}
                     onChange={handleChange}
                     required
                     />

                    <input type="tel"
                        name="phone"
                        placeholder="Телефон"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                     <input type="email" 
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                     />
                     <button type="submit">Изпрати заявка</button>
                </form>
            </div>
        </section>
    );

}

export default Order;
