import { useState } from "react";

import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';

function CertificationForm(props) {

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    
    

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      event.preventDefault();
    }else{
        let student = {no_certificacion:event.target[0].value, cedula:event.target[1].value,no_matricula:event.target[2].value,
            centro_estudio:event.target[3].value,carrera:event.target[4].value,monto:event.target[5].value}
    
       
       let newStudentArray = [...props.students, student];
       props.setStudents(newStudentArray);
        event.preventDefault();
        clearForm(event)
    }

    setValidated(true);
  };

  function clearForm(event){
      for(let i=0; i<7; i++){
        event.target[i].value = ""
      }
  }

  

  return (
    <div >
 <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>no_certificacion</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="no_certificacion"
          />
          <Form.Control.Feedback>Todo Correcto</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>cedula</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="cedula"
          />
          <Form.Control.Feedback>Todo Correcto</Form.Control.Feedback>
        </Form.Group>
        
      </Row>
      <Row className="mb-3">
      <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>no_matricula</Form.Label>
            <Form.Control
              type="text"
              placeholder="no_matricula"
              required
            />
            <Form.Control.Feedback>Todo Correcto</Form.Control.Feedback>

        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>centro_estudio</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="centro_estudio"
          />
          <Form.Control.Feedback>Todo Correcto</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>carrera</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="carrera"
          />
          <Form.Control.Feedback>Todo Correcto</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>monto</Form.Label>
            <Form.Control
              type="text"
              placeholder="monto"
              required
            />
            <Form.Control.Feedback>Todo Correcto</Form.Control.Feedback>

        </Form.Group>
      </Row>
      
      <Button type="submit" >Agregar</Button>
    </Form>
    </div>
  );
}

export default CertificationForm;
