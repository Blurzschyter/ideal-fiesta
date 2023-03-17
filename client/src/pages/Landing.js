import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt='jobify' className='logo' />
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Literally neutral milk hotel tacos blog, solarpunk butcher fanny
            pack dreamcatcher iceland prism organic godard shoreditch yuccie
            church-key. Jianbing pabst lumbersexual keytar distillery.
            Thundercats austin poutine trust fund migas, selfies bicycle rights
            before they sold out banh mi gluten-free occupy craft beer. Keytar
            wolf shaman authentic, salvia praxis blue bottle.
          </p>
          <button className='btn btn-hero'>Login/Register</button>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
