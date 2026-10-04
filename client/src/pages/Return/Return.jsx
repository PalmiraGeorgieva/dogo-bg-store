import { useTranslation } from "react-i18next";
import "./Return.css";

function Return() {
    const { t } = useTranslation();

    return (
        <section className="return-page">
            <div className="return-hero">
                <p className="return-label">
                    {t("return.label")}
                </p>

                <h1>{t("return.title")}</h1>

                <p className="return-intro">
                    {t("return.intro")}
                </p>
            </div>

            <div className="return-content">
                <article className="return-section">
                    <h2>🔁 {t("return.exchangeTitle")}</h2>

                    <p>{t("return.exchangeText")}</p>

                    <h3>{t("return.exchangeConditions")}</h3>

                    <ul>
                        <li>{t("return.conditionProduct")}</li>
                        <li>{t("return.conditionBox")}</li>
                        <li>{t("return.conditionLabels")}</li>
                        <li>{t("return.exchangeShipping")}</li>
                    </ul>
                    <h3>{t("return.exchangeProcessTitle")}</h3>

                    <ol>
                        <li>{t("return.exchangeRequest")}</li>
                        <li>{t("return.exchangeSend")}</li>
                        <li>{t("return.exchangeConfirmation")}</li>
                    </ol>
                   
                </article>

                <article className="return-section">
                    <h2>🛍️ {t("return.returnTitle")}</h2>

                    <p>{t("return.returnText")}</p>

                    <h3>{t("return.howToReturn")}</h3>

                    <ol>
                        <li>{t("return.returnCondition")}</li>
                        <li>{t("return.contactUs")}</li>
                        <li>{t("return.sendBack")}</li>
                    </ol>
                     <h3>{t("return.requiredDocumentsTitle")}</h3>

                     <p>{t("return.requiredDocumentsText")}</p>
                </article>

                <article className="return-section">
                    <h2>{t("return.refundTitle")}</h2>

                    <p>{t("return.refundText")}</p>
                </article>

                <p className="return-closing">
                    {t("return.closing")}
                </p>
            </div>
        </section>
    );
}

export default Return;