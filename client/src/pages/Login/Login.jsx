import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Login.css";



function Login() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [error, setError] = useState("")
    
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        setError("") 
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        if (!formData.email.trim() || !formData.password) {
            setError(t("account.errors.required"));
            return;
        }

        if (!formData.email.includes("@")) {
            setError(t("account.errors.invalidEmail"));
            return;
        }

        if (formData.password.length < 6) {
            setError(t("account.errors.shortPassword"));
            return;
        }

        console.log("Login:", formData);
        navigate("/");
    };

    return (
        <section className="login-page">
            <div className="login-container">
                <p className="login-label">{t("account.label")}</p>
                <h1>{t("account.welcomeBack")}</h1>
                <p className="login-description">
                    {t("account.loginDescription")}
                </p>
                <form className="login-form" onSubmit={handleSubmit}>
                       {error && (
                           <p className="form-error">{error}</p>
                        )}

                     <div className="form-group">
                        <label htmlFor="email">{t("account.email")}</label>
                        <input type="email" id="email" name="email" 
                           value={formData.email} 
                           onChange={handleChange} 
                           placeholder={t("account.emailPlaceholder")} required 
                        />
                     </div>
                     <div className="form-group">
                        <label htmlFor="password">{t("account.password")}</label>
                        <input type="password"
                               id="password"
                               name="password"
                               value={formData.password}
                               onChange={handleChange}
                               placeholder={t("account.passwordPlaceholder")}
                               required 
                        />
                     </div>
                     <button type="submit" className="login-button">{t("account.signIn")}</button>
                </form>
                <div className="login-footer">
                    <p>{t("account.noAccount")}{" "}
                        <Link to="/register">{t("account.createAccount")}</Link>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Login;
