import Filip from '../../images/filip.webp';

function CardTop() {
  return (
    <div className="card-top">
      <img src={Filip} alt="filip profile"></img>
      <div className="card-top-info">
        <h3>Filip Persson</h3>
        <p className="green-subtitle">React Developer</p>
        <a className="github-subtitle" href="https://github.com/FilleTP" target="_blank">Github Profile</a>
        <div className='social-buttons'>
          <a className="social-button email" href="mailto:filip.tillberg.persson@gmail.com" target="_blank">
            <i className="fas fa-envelope"></i>Email
          </a>
          <a className="social-button linkedin" href="https://www.linkedin.com/in/perssonfilip/" target="_blank">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>
      </div>
    </div>
  )
}

export default CardTop;
