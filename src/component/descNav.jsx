import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import './descNav.scss'

function UnderlineExample() {
  const [selectedOption, setSelectedOption] = useState(''); // State to store the selected option

  const handleOptionClick = (eventKey) => {
    setSelectedOption(eventKey);
  };

  const description = 'Kotak Kue/Dus Packaging/Kotak Kado/Box Hampers Uk.36x20.5x6.5 \nGRATIS STICKER THANK YOU EXCLUSIVE UNTUK SETIAP KOTAK \nBarang selalu READY STOCK.';
  const details = '  Keterangan Bahan : E Fluted | Single Wall | Corrugated Box | 2mm | Duplex 310/M125/K150 \n  B10-01-02\n  Panjang : 30.5 cm\n  Lebar :20.5 cm\n';


  return (
    <div className='nav'>
      <Nav variant="underline" defaultActiveKey="/home">
        {/* <Nav.Item className='nav'>
            <Nav.Link eventKey="link-1" onClick={() => handleOptionClick('link-1')}>
            Description
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className='nav'>
          <Nav.Link eventKey="link-2" onClick={() => handleOptionClick('link-2')}>
            Details
          </Nav.Link>
        </Nav.Item> */}
      </Nav>
      <h1 className='judul'>Deskripsi</h1>
      <p className='desc'>{selectedOption === 'link-1' ? description : details}</p>
    </div>
  );
}

export default UnderlineExample;
