import { useContext, useState } from 'react'
import { Button, Container, Form, Modal, Row,Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { userContext } from '../App'


export const Home = () => {

  const [show, setShow] = useState(false);
  const [showRemove, setShowRemove] = useState(false);
  const { setNo, no, products } = useContext(userContext)
  const [err,setErr]=useState()
  const [nullValue,setNullValue]=useState()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  //modal


  //remove modal

  const handleCloseRemove = () => setShowRemove(false);
  const handleShowRemove = () => setShowRemove(true);
  const navigate = useNavigate()

  const handleAdd = () => {
    if (no !== 0) {
      navigate("/add")
    }
    else {
      setErr("Number Required")
    }

  }
  const handleRemove = () => {
    if (no !== 0 && products.length > 0) {
      navigate("/remove")
    }
    else if (!no) {
      setNullValue("Number Required ")
    }
    else {
      setNo(0)
      alert('No products')
    }

  }

  return (
    <Container>
      <Row className='m-5 text-center'>

        <h1>Product Management</h1>
        <div className='mt-5' style={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* <Button variant="primary" onClick={handleShow}>Add Products</Button>
          <Button variant="primary" onClick={handleShowRemove}>Remove Products</Button>
          <Button variant="primary" onClick={() => navigate("/list")}>List Products</Button> */}
          <Card style={{ width: '18rem',height:"12rem",backgroundColor:'' }} className='shadow-lg text-center'>
  <Card.Body>
    <Card.Title>Add Products</Card.Title>
    <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
    <Card.Text className='mt-5'>
      Click Here To Add Products
    </Card.Text>
    {/* <div className='mt-4'> */}
    <Button onClick={handleShow} className='mt-3'>Add Products</Button>
    {/* </div> */}
   
  </Card.Body>
</Card>


<Card style={{ width: '18rem',height:"12rem",backgroundColor:'' }} className='shadow-lg text-center'>
  <Card.Body>
    <Card.Title>Remove Products</Card.Title>
    <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
    <Card.Text className='mt-5'>
      Click Here To Remove Products
    </Card.Text>
    {/* <div className='mt-4'> */}
    <Button onClick={handleShowRemove} className='mt-3'>Remove Products</Button>
    {/* </div> */}
   
  </Card.Body>
</Card>

<Card style={{ width: '18rem',height:"12rem",backgroundColor:'' }} className='shadow-lg text-center'>
  <Card.Body>
    <Card.Title>List Products</Card.Title>
    <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
    <Card.Text className='mt-5'>
      Click Here To List Products
    </Card.Text>
    {/* <div className='mt-4'> */}
    <Button onClick={() => navigate("/list")} className='mt-3'>List Products</Button>
    {/* </div> */}
   
  </Card.Body>
</Card>




          {/* Add product        */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>No of Items going to Add</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* <input type='text'  onChange={(e) => setNo(e.target.value)} ></input> */}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enter Number</Form.Label>
                <Form.Control 
                required
                onChange={(e) => setNo(e.target.value)}
                type="number" 
                placeholder="Enter number" />
                <Form.Text>
                  {err && <span className='text-danger'>{err}</span>}
                </Form.Text>
             
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleAdd}>
                Save
              </Button>
            </Modal.Footer>
          </Modal>
          {/* Remove Product        */}
          <Modal show={showRemove} onHide={handleCloseRemove}>
            <Modal.Header closeButton>
              <Modal.Title> No of Items going to Remove</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* <input type='text' onChange={(e) => setNo(e.target.value)}></input> */}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enter Number</Form.Label>
                <Form.Control 
                required
                onChange={(e) => setNo(e.target.value)}
                type="number" 
                placeholder="Enter number" />
               { nullValue && <Form.Text><span className='text-danger'>{nullValue} </span></Form.Text>}
             
              </Form.Group>
              </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseRemove}>
                Close
              </Button>
              <Button variant="primary" onClick={handleRemove}>
                Save
              </Button>
            </Modal.Footer>
          </Modal>

        </div>
      </Row>
    </Container>
  )
}
