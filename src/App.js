import './App.css';
import { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import CertificationForm from "./certificationForm"

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SubmitTable from './submitTable';
function App() {

  const [students, setStudents] =  useState([]);


  return (
    <div className = "App">
      <h1>
      Créditos a estudiantes desde Fundapec hacia Unapec
      </h1>
      <Row>
        <Col md="6">
        <CertificationForm setStudents = {setStudents} students = {students}/>

        </Col>
        <Col md="6">
        <SubmitTable students = {students} setStudents = {setStudents}/>
        </Col>
      </Row>

 </div>
   
  );
}

export default App;
