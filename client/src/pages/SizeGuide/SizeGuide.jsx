import { useTranslation } from "react-i18next";
import './SizeGuide.css';

function SizeGuide() {
    const { t } = useTranslation();

    const sneackerSizes = [
        { eu: 36, cm: "23.50" },
        { eu: 37, cm: "24.00" },
        { eu: 38, cm: "24.50" },
        { eu: 39, cm: "25.00" },
        { eu: 40, cm: "26.00" },
        { eu: 41, cm: "27.00" },
    ];

    const bootSize = [
        { eu: 36, cm: "24.00" },
        { eu: 37, cm: "24.50" },
        { eu: 38, cm: "25.00" },
        { eu: 39, cm: "25.50" },
        { eu: 40, cm: "26.50" },
        { eu: 41, cm: "27.50" },
    ];

    return (
        <section className="size-guide-page">
            <div className="size-guide-hero">
                <p className="size-guide-label">
                    {t("sizeGuide.label")}
                </p>

                <h1>{t("sizeGuide.title")}</h1>
                <p className="size-guide-intro">
                    {t("sizeGuide.intro")}
                </p>
            </div>

            <div className="size-guide-content">

                <article className="size-guide-section">
                    <h2>{t("sizeGuide.sneakersTitle")}</h2>

                    <SizeTable sizes={sneackerSizes} t={t}/>

                </article>

                <article className="size-guide-section">

                    <h2>{t("sizeGuide.bootsTitle")}</h2>
                    <SizeTable sizes={bootSize} t={t} />
                </article>

                <article className="size-guide-section">
                    <h2>📏 {t("sizeGuide.measureTitle")}</h2>

                    <p>{t("sizeGuide.measureText")}</p>

                    <ul>
                        <li>{t("sizeGuide.measureStandard")}</li>
                        <li>{t("sizeGuide.measureBallerinas")}</li>
                        <li>{t("sizeGuide.measureHeels")}</li>
                    </ul>
                </article>

                <article className="size-guide-section">
                    <h2>🧼 {t("sizeGuide.careTitle")}</h2>

                    <p>{t("sizeGuide.careIntro")}</p>

                    <ul>
                        <li>{t("sizeGuide.dampCloth")}</li>
                        <li>{t("sizeGuide.noChemicals")}</li>
                        <li>{t("sizeGuide.noWashing")}</li>
                    </ul>
                </article>

                <article className="size-guide-section">
                    <h2>☀️ {t("sizeGuide.dryingTitle")}</h2>

                    <ul>
                        <li>{t("sizeGuide.roomTemperature")}</li>
                        <li>{t("sizeGuide.noHeat")}</li>
                    </ul>
                </article>

                <article className="size-guide-section">
                    <h2>🧪 {t("sizeGuide.cosmeticsTitle")}</h2>
                     <p>{t("sizeGuide.cosmeticsText")}</p>
                </article>
            </div>
        </section>
    );
}

function SizeTable({ sizes, t }){
    return(
        <div className="size-table-wrapper">
            <table className="size-table">
                <thead>
                    <tr>
                        <th>{t("sizeGuide.euSize")}</th>
                        <th>{t("sizeGuide.length")}</th>
                    </tr>
                </thead>

                <tbody>
                    {sizes.map((size) => (
                        <tr key={size.eu}>
                            <td>{size.eu}</td>
                            <td>{size.cm} cm</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default SizeGuide;
