import { useTranslation } from "react-i18next";
import "./About.css";

function About() {
    const { t } = useTranslation();

    return (
        <section className="about-page">
            <div className="about-hero">
                <p className="about-label">{t("about.label")}</p>
                <h1>{t("about.title")}</h1>
                <p className="about-intro">{t("about.intro")}</p>
            </div>
            <div className="about-content">
                <article className="about-section">
                    <h2>🎨 {t("about.storyTitle")}</h2>
                    <p>{t("about.storyOne")}</p>
                    <p>{t("about.storyTwo")}</p>
                </article>
                <article className="about-section">
                    <h2>🌱 {t("about.veganTitle")}</h2>
                    <p>{t("about.veganIntro")}</p>
                    <ul>
                        <li>{t("about.veganProducts")}</li>
                        <li>{t("about.sustainability")}</li>
                        <li>{t("about.safeColors")}</li>
                    </ul>
                </article>
                <article className="about-section">
                <h2>✨ {t("about.styleTitle")}</h2>
                <p>{t("about.styleText")}</p>
                </article>
                <article className="about-section">
                 <h2>🤝 {t("about.whyTitle")}</h2>
                 <ul>
                    <li>{t("about.originalProducts")}</li>
                    <li>{t("about.collections")}</li>
                    <li>{t("about.fastDelivery")}</li>
                    <li>{t("about.customerService")}</li>
                 </ul>
                </article>
                <p className="about-closing">{t("about.closing")}</p>
            </div>
        </section>
    );
}

export default About;
