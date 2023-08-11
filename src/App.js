import logo from './logo.svg';
import './App.scss';
import BarNavigasi from './component/barNavigasi';
import CarouselGambar from './component/carouselProduct'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  NavBar from './component/pageNav'
import DetailProduct from './component/detailProduct';

function App() {
  return (

    // <div className='full'>
    // <BarNavigasi/>
    //   <div className="gambar" >
    //     <CarouselGambar />
    //     <NavBar/>
    //     <p></p>
    //   </div>
    // </div>
    <div>
    <BarNavigasi/>
    <DetailProduct/>
    </div>

    

  );
}

export default App;
