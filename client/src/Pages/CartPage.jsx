import { useParams, useNavigate, Link } from 'react-router-dom';
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import { seeCart, removeFromCart } from '../utilities/cart';
import { useGetProductsQuery } from '../utilities/productApiSlice';
import Message from '../componets/Message';

const CartScreen = () => {


  const { data, isLoading, error } = useGetProductsQuery();
  const cartItems = [];
  let cartTotal = 0;
  let itemsInCart = 0; 

  const pullCart = seeCart();
  let cart;
  if (pullCart != null) {
    cart = JSON.parse(pullCart)
    // console.log(data.products[0]._id)

    // slow search method, just want this done
    for (let i = 0; i < cart.length; i++) {
      const neededItem = cart[i].id
      itemsInCart += cart[i].qty
      // console.log(neededItem)
      for (let j = 0; j < data.products.length; j++) {
        if (data.products[j]._id === neededItem) {
          cartItems.push(data.products[j])
          cartTotal += data.products[j].price
        }
      }
    }
    
  }
  
  console.log(cartTotal)


  return (
    <Row>
      <Col md={8}>
        <h1 style={{ marginBottom: '20px' }}>Shopping Cart</h1>
        {pullCart === null ? (
          <Message>
            Your cart is empty <Link to='/'>Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant='flush'>
            {cartItems.map((item) => (
              <ListGroup.Item key={item._id}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item._id}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>${item.price}</Col>
                  <Col md={2}>
                    <Form.Control
                      as='select'
                      defaultValue={itemsInCart}
                      value={item.qty}
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button
                      type='button'
                      variant='light'
                    >
                      <FaTrash />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>
                Subtotal ({itemsInCart})
                items
              </h2>
              $
              {cartTotal}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type='button'
                className='btn-block'
                disabled={cartItems.length === 0}
              >
                Proceed To Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default CartScreen;