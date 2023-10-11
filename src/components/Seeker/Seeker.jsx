import InputSeeker from './Input';
import './Seeker.css'

function Seeker() {
    return ( 
        <div className='main-image'>
        <img
          src="https://images.pexels.com/photos/375889/pexels-photo-375889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt='main'
        />
        <InputSeeker/>
      </div>
     );
}

export default Seeker;