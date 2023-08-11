import Button from 'react-bootstrap/Button';
import tokpedIcon from '../gambar/tokopedia.png'
import shopeeIcon from '../gambar/shopee.png'
import './buttonCommerce.scss';


function TypesExample() {
  return (
    <>
      <Button variant="light" className='button' style={{backgroundColor: "#F3F3F3"}}> 
        <img className='buttonImage' src={tokpedIcon}/> 
      </Button>{' '}

      <Button variant="light" className='button' style={{backgroundColor: "#F3F3F3"}}> 
        <img className='buttonImage' src={shopeeIcon}/> 
      </Button>{' '}
    </>
  );
}

export default TypesExample;