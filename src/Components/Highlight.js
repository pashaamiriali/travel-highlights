import locationLogo from "../assets/images/location-icon.png";
export default function Highlight(props) {
  const { country, location, mapLink, picture, dateFrom, dateTo, about } =
    props;
  return (
    <div className="highlight-container">
      <img src={picture} alt={location} className="highlight-picture" />
     <div className="sized-box-20px"></div>
      <div className="highlight-info">
        <div className="location-details">
          <img src={locationLogo} alt="location" className="location-logo" />
          <p className="country">{country}</p>
          <a href={mapLink} className="maps-link" target="blank">
            View on Google Maps
          </a>
        </div>
        <h1 className="highlight-location-title">{location}</h1>
        <div className="date-row">
          {dateFrom} - {dateTo}
        </div>
        <p className="about">{about}</p>
      </div>
    </div>
  );
}
