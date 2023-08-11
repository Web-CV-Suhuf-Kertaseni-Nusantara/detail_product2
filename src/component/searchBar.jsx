import Form from 'react-bootstrap/Form';

function FormTextExample() {
  return (
    <div className='full'>
      <Form.Control 
        placeholder='Cari Produk Disini'
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
    </div>
  );
}

export default FormTextExample;