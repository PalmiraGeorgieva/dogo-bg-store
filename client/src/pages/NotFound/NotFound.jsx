import { Link } from "react-router-dom";
import errorImg from "../../assets/dogo404.png";
import "./NotFound.css";

function NotFound(){
    return (
        <section className="not-found">
            <img src={errorImg} alt="404 Page Not Found" className="not-found-image" />
           <Link to="/" className="home-button">Back to Home</Link>
        </section>
    );

}

export default NotFound;
