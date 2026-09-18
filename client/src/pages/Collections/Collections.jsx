import { Link } from "react-router-dom";
import "./Collections.css";


function Collections() {
    return (
        <section className="collections-page">
            <div className="collections-header">
                <div className="bredcrumb">
                   <Link to="/">Home</Link>
                   <span> / </span>
                   <span>Collections</span>
                </div>
                <h1>Collections</h1>
                <p>Discover DOGO collections</p>
            </div>

            <p className="no-collections">
                Collections coming soon.
            </p>
        </section>
    )
}

export default Collections;