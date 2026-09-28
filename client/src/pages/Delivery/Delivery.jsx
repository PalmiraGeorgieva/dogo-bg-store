import { useTranslation } from "react-i18next";
import "./Delivery.css";

function Delivery(){
    const { t } = useTranslation();

    return (
        <section className="delivery-page">
            <div className="delivery-hero">
                <p className="delivery-label">{t("delivery.label")}</p>
                <h1>{t("delivery.title")}</h1>
                <p className="delivery-intro">{t("delivery.intro")}</p>
            </div>
            <div className="delivery-content">
                <article className="delivery-section">
                    <h2>🚚 {t("delivery.conditionsTitle")}</h2>
                    <div className="delivery-item">
                        <h3>{t("delivery.courierTitle")}</h3>
                        <p>{t("delivery.courierText")}</p>
                    </div>
                    <div className="delivery-item">
                        <h3>{t("delivery.timeTitle")}</h3>
                        <p>{t("delivery.timeText")}</p>
                    </div>
                    <div className="delivery-item">
                        <h3>
                           {t("delivery.testTitle")}
                        </h3>
                         <p>{t("delivery.testText")}</p>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Delivery;
