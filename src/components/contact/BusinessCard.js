import CardTop from './CardTop';
import CardAbout from './CardAbout'
import CardInterests from './CardInterests';
import CardBottom from './CardBottom';
import './business_card.css';


function BusinessCard() {
  return (
    <div className="business-card">
      <CardTop />
      <div className="card-info">
        <CardAbout />
        <CardInterests />
      </div>
      <CardBottom />
    </div>
  )
}

export default BusinessCard;
