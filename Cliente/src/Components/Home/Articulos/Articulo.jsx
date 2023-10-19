import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";

function Articulo({ imagen = "", titulo, contenido, permalink = "none" }) {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    if (permalink !== "none") {
      navigate(permalink);
    }
  };
  const styleComponent = {
    marginBottom: "10px",
  };
  if (permalink !== "none") {
    styleComponent.cursor = 'pointer';
  }
  return (
    <Card style={styleComponent} onClick={handleClick}>
      {imagen !== "" && <Card.Img variant="top" src={imagen} />}
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>{contenido}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Articulo;
