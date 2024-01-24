// application.js
export default function Application(props) {
    return (
        <div className="understood">
            <p className="applications_heading">Applications</p>
            <div className="application">

                {props.applications.map((application) => (
                    <div key={application.label} className="image-container">
                        <img className="image" src={application.imgUrl} alt={application.alt} />
                        <p className="on-top">{application.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
