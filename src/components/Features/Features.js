import useTitle from '../../hooks/useTitle';
import building from '../../assets/images/building.png'
import './feature.css';

const Features = () => {
  useTitle('Features');

  return (
    <div className='xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md w-full mx-auto py-10 p-4'>
      <div className='text-center pb-12'>
        <p className='uppercase text-2xl font-semibold title'>Who We Are?</p>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 items-center justify-between lg:px-32">
        <div className=''>
          <h2 className='text-xl font-bold'>WE BUILD STRONG BRANDS AND GROW YOUR
            BUSINESSES THROUGH EXCELLENT <span className='text-primary'>MANPOWER</span>
            SERVICES</h2>
          <p className='mt-6'>
            <span className='text-primary font-medium'>Wathin Company Ltd.</span> is one of the leading and reputed
            construction manpower company in Riyadh, KSA. The
            company committed to ensuring first class skilled manpower services to their clients The Company has 06
            years of experience into a professional construction
            team that specializes in Foundations, heavy civil
            construction, Roads, Railway Tracks, and other related
            infrastructures. Since its inception, the company has
            completed a good number of remarkable projects of
            various authorities in Saudi Arabia. The company is
            providing manpower in more than 10 locations across
            the country such as MACC, ICAD, MBL, AL BAWANI, FIRST FIX
            AND SUDI UJAR.
          </p>
        </div>
        <div>
          <img className='w-full' src={building} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Features;