import { Link } from "react-router-dom";
export default function Product(props) {
    return (
        <div>
            <div className="product">
                <div className="items">
                    <div className="imageItem">
                        <img className="img" src={props.image} alt="product"></img>
                    </div>
                    <div className="description">
                        <h3 className="nameProduct">{props.name}</h3>
                        <p className="mini">{props.miniDescription}</p>
                        <p className="mini">{props.Description}</p>
                        <div className="contact_us">
                            <Link to="/contact">
                                <button className="bttns">
                                    Get Enquiry
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
