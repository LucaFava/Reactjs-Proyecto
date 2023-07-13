import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';




export const Item = ({producto}) => {
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={producto.imagen} />
        <Card.Body>
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Text>
            ${producto.precio}
            <br/>
            {producto.marca}
          </Card.Text>
          <Button variant="primary"><Link to={`/item/${producto.id}`}>Ver más</Link></Button>
        </Card.Body>
      </Card>
    )
}