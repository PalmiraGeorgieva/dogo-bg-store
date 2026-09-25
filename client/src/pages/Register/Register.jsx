import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Register.css";

function Register(){
    const { t } = useTranslation();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        
        setError("")

    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !formData.firstName.trim() ||
            !formData.lastName.trim() ||
            !formData.email.trim() ||
            !formData.password ||
            !formData.confirmPassword
        ) {
            setError(t("account.errors.required"));
            return;
        }

        if (!formData.email.includes("@")) {
            setError(t("account.errors.invalidEmail"));
            return;
        }

        if(formData.password.length < 6) {
            setError(t("account.errors.shortPassword"));
            return;
        }

        if(formData.password !== formData.confirmPassword) {
            setError(t("account.errors.passwordMismatch"));
            return;
        }

        console.log("Register:", formData);

        navigate("/login")

    };

    return (
        <section className="register-page">
            <div className="register-container">
              <p className="register-label">
                {t("account.label")}
              </p>
              <h1>{t("account.createAccount")}</h1>
              <p className="register-description">
                {t("account.registerDescription")}
              </p>
              <form className="register-form" onSubmit={handleSubmit}>
                 {error && (
                    <p className="form-error">{error}</p>
                 )}
                 <div className="form-group">
                    <label htmlFor="firstName">
                        {t("account.firstName")}
                    </label>
                    <input type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        placeholder={t("account.firstNamePlaceholder")} />
                 </div>
                 <div className="form-group">
                    <label htmlFor="lastName">{t("account.lastName")}</label>
                    <input type="text"
                         id="lastName"
                         name="lastName"
                         value={formData.lastName}
                         onChange={handleChange}
                         placeholder={t("account.lastNamePlaceholder")} />
                 </div>
                 <div className="form-group">
                    <label htmlFor="email">
                        {t("account.email")}
                    </label>
                    <input type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t("account.emailPlaceholder")} />
                 </div>
                 <div className="form-group">
                    <label htmlFor="password">{t("account.password")}</label>
                    <input type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder={t("account.passwordPlaceholder")}
                         />
                 </div>
                 <div className="form-group">
                    <label htmlFor="confirmPassword">{t("account.confirmPassword")}</label>
                    <input type="password"
                          id="confirmPassword"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          placeholder={t("account.confirmPasswordPlaceholder")} />
                 </div>
                 <button type="submit" className="register-button">
                    {t("account.register")}
                 </button>
              </form>
              <div className="register-footer">
                <p>
                    {t("account.haveAccount")}{" "}
                    <Link to="/login">
                      {t("account.signIn")}
                    </Link>
                </p>
              </div>
            </div>
        </section>
    )

}

export default Register;
