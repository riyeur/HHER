import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pastEvents from '../data/PastEvents.js';
import './ourpasteventsyles.css';

const PastEvents = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className='past-events'>
        <div className="past-events-container">
            <div className="past-events-title">
                <h5>Our Past Events</h5>
            </div>
            <div className="past-events-box">
                <Slider {...settings}>
                {pastEvents.map((event, idx) => (
                    <div key={idx} className="event-card">
                    <img
                        className="event-image"
                        src={event.image_path}
                        alt={event.title}
                    />
                    <h3 className='event-title'>{event.title}</h3>
                    <p className='event-description'>{event.description}</p>
                    </div>
                ))}
                </Slider>
            </div>
        </div>
    </div>
  );
}

export default PastEvents;
