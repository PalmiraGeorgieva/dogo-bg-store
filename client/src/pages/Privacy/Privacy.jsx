import { useTranslation } from "react-i18next";
import "./Privacy.css";

function Privacy() {
    const { t } = useTranslation();

    return (
        <section className="privacy-page">
            <div className="privacy-hero">
                <p className="privacy-label">
                    {t("privacy.label")}
                </p>

                <h1>{t("privacy.title")}</h1>

                <p className="privacy-intro">
                    {t("privacy.intro")}
                </p>
            </div>

            <div className="privacy-content">

                <article className="privacy-section">
                    <h2>{t("privacy.administratorTitle")}</h2>
                    <p>{t("privacy.administratorText")}</p>
                </article>

                <article className="privacy-section">
                    <h2>{t("privacy.dataTitle")}</h2>
                    <p>{t("privacy.dataIntro")}</p>

                    <ul>
                        <li>{t("privacy.dataIdentity")}</li>
                        <li>{t("privacy.dataContact")}</li>
                        <li>{t("privacy.dataOrder")}</li>
                        <li>{t("privacy.dataTechnical")}</li>
                    </ul>
                </article>

                <article className="privacy-section">
                    <h2>{t("privacy.purposeTitle")}</h2>

                    <ul>
                        <li>{t("privacy.purposeOrders")}</li>
                        <li>{t("privacy.purposeDelivery")}</li>
                        <li>{t("privacy.purposeCommunication")}</li>
                        <li>{t("privacy.purposeLegal")}</li>
                        <li>{t("privacy.purposeMarketing")}</li>
                    </ul>
                </article>

                <article className="privacy-section">
                    <h2>{t("privacy.paymentTitle")}</h2>
                    <p>{t("privacy.paymentText")}</p>
                </article>

                <article className="privacy-section">
                    <h2>{t("privacy.recipientsTitle")}</h2>
                    <p>{t("privacy.recipientsIntro")}</p>

                    <ul>
                        <li>{t("privacy.recipientCourier")}</li>
                        <li>{t("privacy.recipientPayment")}</li>
                        <li>{t("privacy.recipientIT")}</li>
                        <li>{t("privacy.recipientAuthorities")}</li>
                    </ul>
                </article>

                <article className="privacy-section">
                    <h2>{t("privacy.rightsTitle")}</h2>

                    <ul>
                        <li>{t("privacy.rightAccess")}</li>
                        <li>{t("privacy.rightCorrection")}</li>
                        <li>{t("privacy.rightDeletion")}</li>
                        <li>{t("privacy.rightRestriction")}</li>
                        <li>{t("privacy.rightObjection")}</li>
                        <li>{t("privacy.rightPortability")}</li>
                    </ul>
                </article>

                <article className="privacy-section">
                    <h2>{t("privacy.complaintTitle")}</h2>
                    <p>{t("privacy.complaintText")}</p>
                </article>

            </div>
        </section>
    );
}

export default Privacy;