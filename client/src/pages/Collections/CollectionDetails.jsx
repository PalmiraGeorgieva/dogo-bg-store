import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCollectionByHandle } from "../../services/shopify";
import "./Collections.css";

function CollectionDetails() {
    const { handle } = useParams();

    const [collection, setCollection] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadCollection() {
            try {
                setLoading(true);

                const data = await getCollectionByHandle(handle);

                setCollection(data);
            } catch (error) {
                console.error("Error loading collection:", error);
            } finally {
                setLoading(false);
            }
        }

        loadCollection();
    }, [handle]);

    if (loading) {
        return <p>Зареждане на колекцията...</p>;
    }

    if (!collection) {
        return <p>Колекцията не е намерена.</p>;
    }

    return (
        <section className="collection-details">

            <h1>{collection.title}</h1>

            <div className="collections-grid">
                {collection.products.nodes.map((product) => (
                    <Link
                        key={product.id}
                        to={`/products/${product.handle}`}
                        className="collection-card"
                    >
                        <img
                            src={product.images?.nodes?.[0]?.url}
                            alt={product.title}
                        />

                        <h2>{product.title}</h2>
                    </Link>
                ))}
            </div>

        </section>
    );
}

export default CollectionDetails;