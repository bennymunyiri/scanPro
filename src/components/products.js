import Product from "./product";
import { finnaly, product1, cards } from "../index";

export default function Products() {
    let products = [
        {
            image: finnaly,
            name: "C61 Mobile Computer (Android 11)",
            miniDescription: "Easy and Flexible Data Entry, Remarkable Data Capture Performance",
            Description: "C61 Mobile Computer, a rugged handheld with Android 11 and Qualcomm Octa-Core, offers optional 27/37/47 keypads, 6700mAh battery, quick charge, trigger handle with 5200mAh extension, various accessories, barcode scanning, RFID, NFC. With robust data collection and Wi-Fi 6, it suits logistics, warehousing, retail, and more"
        },
        {
            image: product1,
            name: "C66 UHF RFID Reader (Android 11 / 13)",
            miniDescription: "Larger Screen Display, Stronger UHF Performance for reading and writing.",
            Description: "C66 UHF is the ultimate RFID reader which is highly sensitive with a reading range up to 30m.The C66 UHF (Built-in) is a lightweight phone-size reader built for short-distance applications.Both of them feature Android 11/13, Qualcomm Octa-core processor, 5.5'' large screen, powerfulbattery, 13MP camera, and optional barcode scanning"
        },
        {
            image: cards,
            name: "RFID Cards (Unprinted)",
            miniDescription: "Access control systems",
            Description: "This RFID proximity ID cards are widely applied in access control systems and related applications. Each card has a unique Digit ID number and the card is a read only and not re-writabble It has been specially manufactured and packaged to be clean from dust."
        }
    ];

    return (
        <div className="products">
            <p className="applications_heading">Our Products</p>
            {
                products.map((product) => (
                    <Product

                        image={product.image}
                        name={product.name}
                        miniDescription={product.miniDescription}
                        Description={product.Description}
                    ></Product>
                ))}
        </div>
    );
}
