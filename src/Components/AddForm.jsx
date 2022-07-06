import { useEffect } from 'react';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { userContext } from '../App';
import { Container, Row, Form, Card, Col, Button } from 'react-bootstrap';

export const AddForm = () => {
    const { setNo, no, products, setProducts } = useContext(userContext)
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [arr, setArr] = useState([])
    const navigate = useNavigate()

    const onSubmit = data => {
        console.log(data,"onSubmit")

        let name, code, qty, pro
        let chec = products
        for (let i = 0; i < no; i++) {
            name = data[`ProductName ${i}`]
            console.log(name,"name...")
            code = data[`ProductCode ${i}`]
            qty =parseInt( data[`Quantity ${i}`])
            console.log(qty,"qty...")
            pro = { 'proname': name, 'procode': code, 'qty': qty }
        
                console.log(chec,"check.....")
                let obj = chec.find(o => o.procode === code);
                if (obj !== undefined) {
                    let qty_sum =(obj.qty) + (pro.qty)
                    console.log(qty_sum,"qty sum")
              
                   obj.qty=qty_sum

                }
                else {
                    chec.push(pro);
                }
        
         

        }

        setProducts(chec)
        setNo(0)
        navigate('/')

    }


    useEffect(() => {
        let a = []
        
        for (let index = 0; index < no; index++) {
            a.push(0)
        }
        setArr(a)
    }, [])



    return (
        <Container>
            <div className='mt-3 text-center'>
                <h1>Add Products</h1>
            </div>


            <Form id="form1" onSubmit={handleSubmit(onSubmit)}>
                <Row className='mt-5'>
                    {
                        arr.map((data, index) => {
                            return (
                                <>


                                    <Col sm={4} className='mt-3'>
                                        <Card >
                                            <Card.Body>

                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Product Code</Form.Label>
                                                    <Form.Control
                                                        {...register(`ProductCode ${index}`, { required: true })}
                                               
                                                        type="text"
                                                        placeholder="Enter Product code"
                                                      
                                                    />
                                                    <Form.Text className="text-muted">
                                                        {/* We'll never share your email with anyone else. */}
                                                    </Form.Text>
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Product Name</Form.Label>
                                                    <Form.Control
                                                        {...register(`ProductName ${index}`, { required: true })}
                                                        type="text"
                                                        placeholder="Enter Product name"
                                                        required
                                                    />
                                                    <Form.Text className="text-muted">
                                                        {/* We'll never share your email with anyone else. */}
                                                    </Form.Text>
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Product Quantity</Form.Label>
                                                    <Form.Control
                                                        {...register(`Quantity ${index}`, { required: true })}
                                                        type="number" 
                                                        placeholder="Enter Product quantity.."
                                                        required
                                                    />
                                                    <Form.Text className="text-muted">
                                                        {/* We'll never share your email with anyone else. */}
                                                    </Form.Text>
                                                </Form.Group>

                                            </Card.Body>
                                        </Card>
                                    </Col>


                                </>



                            )
                        })
                    }
                    <hr className='mt-3' />
                    <Button className='mt-2 mb-5' type="submit" >Submit</Button>


                </Row>

            </Form>

        </Container>
    );
}