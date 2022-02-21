import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { categories } from '../data/Data';
import useSelect from '../hooks/useSelect';

const Formulario = ( {setCategory} ) => {

  const [category, SelectCategory] = useSelect( "general" , categories, "Seleccionar categoria");

  const handleSubmit = (e)=>{
      e.preventDefault();
      setCategory(category);
  };

  return (
    <>
      <Form className='mt-2' onSubmit={handleSubmit}>
        <Form.Group>
          <SelectCategory />
        </Form.Group>
        <Button variant="primary" type="submit" className='mt-2'>
          Buscar
        </Button>
      </Form>
    </>
  );
}  

export default Formulario