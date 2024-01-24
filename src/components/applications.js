// applications.js
import Application from "./application";

export default function Applications() {
    let applications = [
        {
            imgUrl: "https://www.chainway.net/upload/config/fabbe166-6a5e-43da-ae37-1c1190721a9d.jpg",
            alt: "logistics",
            label: "Onloading & Offloading"
        },
        {
            imgUrl: "https://www.chainway.net/upload/config/d16ff3f2-80da-456c-8051-3b05bcdfaacf.jpg",
            alt: "logistics",
            label: "Warehouse management"
        },
        {
            imgUrl: "https://www.chainway.net/upload/config/3e723437-6b72-4d6a-966e-85acb71c1765.jpg",
            alt: "logistics",
            label: "Retail"
        },
        // @chatgpt this is the code you will include, on for phone
        {
            imgUrl: "https://www.chainway.net/upload/config/45b2b675-13f7-467d-a673-746a44a1bd5d.jpg",
            alt: "logistics",
            label: "Inventory Tracking"
        },
    ];

    return (
        <div className="applications">

            <Application applications={applications} />
        </div>
    );
}
