import { useEffect, useState } from "react";
import { getCollections } from "../../services/shopify";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Collections.css";


function Collections() {
    const { t } = useTranslation();
    const [collections, setCollections] = useState([]);

    useEffect(() => {
        async function loadCollections() {
            try {
                const collections = await getCollections();

                const thematicCollections = collections.filter(
                    (collection) =>
                        ![
                            "women",
                            "men",
                            "kids",
                            "shoes",
                            "bags",
                            "accessories",
                            "frontpage"
                        ].includes(collection.handle)
                );

                setCollections(thematicCollections);
            } catch (error) {
                console.error("Error loading collections:", error);
            }
        }

        loadCollections();
    }, []);

    return (
        <section className="collections-page">
            <div className="collections-header">
                <div className="breadcrumb">
                    <Link to="/">{t("categories.home")}</Link>
                    <span> / </span>
                    <span>{t("collections.title")}</span>
                </div>
                <h1>{t("collections.title")}</h1>
                <p>{t("collections.description")}</p>
            </div>

            {collections.length > 0 ? (
                <div className="collections-grid">
                    {collections.map((collection) => {
                        const image =
                            collection.image?.url ||
                            collection.products?.nodes?.[0]?.images?.nodes?.[0]?.url ||
                            "";

                        return (
                            <Link
                                key={collection.id}
                                to={`/collections/${collection.handle}`}
                                className="collection-card"
                            >
                                {image && (
                                    <img
                                        src={image}
                                        alt={collection.title}
                                    />
                                )}

                                <h2>{collection.title}</h2>

                                <p>
                                    {collection.products?.nodes?.length || 0} продукта
                                </p>
                            </Link>
                        );
                    })}
                </div>
            ) : (
                <p className="no-collections">
                    {t("collections.comingSoon")}
                </p>
            )}
        </section>
    )
}

export default Collections;