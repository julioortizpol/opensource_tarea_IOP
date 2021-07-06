import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';
import axios from 'axios'

function SubmitTable(props) {

    function sendToUnapec(students){
        const apiUrl = 'http://localhost:4040/credito/';

        students.forEach((student)=>{
            axios.post(apiUrl, {
                "no_matricula": student.no_matricula,
                "monto": student.monto,
                "carrera": student.carrera,
                "no_certificacion": student.no_certificacion
            });
        })
       
        props.setStudents([])
    }

  return (
    <div >
        <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>no_certificacion</th>
      <th>cedula</th>
      <th>no_matricula</th>
      <th>centro_estudio</th>
      <th>carrera</th>
      <th>monto</th>
    </tr>
  </thead>
  <tbody>
    {props.students.map(element => 
             <tr>
                <td>{element.no_certificacion}</td>
                <td>{element.cedula}</td>
                <td>{element.no_matricula}</td>
                <td>{element.centro_estudio}</td>
                <td>{element.carrera}</td>
                <td>{element.monto}</td>
              </tr>
        )}
  </tbody>
    </Table>
<Button  onClick = {()=>{sendToUnapec(props.students)}}>Enviar a UNAPEC</Button>
 </div>
   
  );
}

export default SubmitTable;
