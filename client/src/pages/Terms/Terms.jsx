import { useTranslation } from "react-i18next";
import "./Terms.css";

function Terms() {
    const { t } = useTranslation();

    return (
        <section className="terms-page">
            <div className="terms-hero">
                <p className="terms-label">{t("terms.label")}</p>
                <h1>{t("terms.title")}</h1>
                <p className="terms-intro">{t("terms.intro")}</p>
            </div>

            <div className="terms-content">
                <article className="terms-section">
                    <h2>{t("terms.merchantTitle")}</h2>
                    <p>{t("terms.merchantText")}</p>
                </article>

                <article className="terms-section">
                    <h2>{t("terms.productsTitle")}</h2>
                    <p>{t("terms.productsText")}</p>
                </article>

                <article className="terms-section">
                    <h2>{t("terms.paymentTitle")}</h2>
                    <p>{t("terms.paymentText")}</p>
                </article>

                <article className="terms-section">
                    <h2>{t("terms.deliveryTitle")}</h2>
                    <p>{t("terms.deliveryText")}</p>
                </article>

                <article className="terms-section">
                    <h2>{t("terms.withdrawalTitle")}</h2>
                    <p>{t("terms.withdrawalText")}</p>
                </article>

                <article className="terms-section">
                    <h2>{t("terms.guaranteeTitle")}</h2>
                    <p>{t("terms.guaranteeText")}</p>
                </article>

                <article className="terms-section">
                    <h2>{t("terms.disputesTitle")}</h2>
                    <p>{t("terms.disputesText")}</p>
                </article>
            </div>
        </section>
    );
}

export default Terms;
