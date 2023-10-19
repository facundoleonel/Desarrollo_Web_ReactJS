import Card from "react-bootstrap/Card";

function Articulo({ imagen, titulo, contenido }) {
  return (
    <Card style={{marginBottom: '10px'}}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>{contenido}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Articulo;
