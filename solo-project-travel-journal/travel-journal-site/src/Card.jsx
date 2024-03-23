

export default function Card(props) {
    return(
        <div className="card">
            <img 
                src={props.imageUrl} 
                alt="Travel card image.">
            </img>
            <div className="card-info">
                <div className="card-info-first-row">
                    <i className="nav-icon fa fa-map-marker fa-2x" aria-hidden="true" ></i>
                    <h2 className="card-location">{props.location}</h2>
                    <a className="card-location-url" href={props.googleMapsUrl}>
                    View on Google Maps
                    </a>
                </div>
                

                <h3 className="card-title"><b>{props.title}</b></h3>
                <p className="card-date">
                {props.startDate} - {props.endDate}
                </p>
                <p className="card-description">{props.description}</p>
             </div>
            
        </div>


    )
}