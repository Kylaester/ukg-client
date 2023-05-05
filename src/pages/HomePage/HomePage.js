import './HomePage.scss';
import homeImage from '../../asset/images/icons/homepage-image.png';
import UKG from '../../asset/images/icons/UKGlogo.png';

function HomePage(){

  return(

    <>

    <section className='image'>
      <img className='image__homeImage' src={homeImage} />
    </section>
    
    <div className='employee-header'>
    <h2 className='employee-header__info'>
      Monthly Employee Survey
    </h2>
    </div>

    <div className='details'>
      <p className='details__info'>Your feedback is important to us and 
        it will help us improve our workplace!
      </p>
    </div>

    <button className='survey-button'>Start Survey</button>

    <footer className='footer'>
      <div className='footer__container'>
      <p className='footer__text'>
        powered by
      </p>
      <div className='footer__logo-image'>
      <img className='footer__logo' src={UKG}></img>

      </div>
      </div>

    </footer>
    </>
  );
  
}

export default HomePage;
