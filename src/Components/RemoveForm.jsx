import { useEffect } from 'react';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { userContext } from '../App';
import { useNavigate } from 'react-router-dom';
import { Container,Form,Row,Col,Button ,Card} from 'react-bootstrap';

export const RemoveForm = () => {
    const { setNo, no, products, setProducts } = useContext(userContext)
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [arr, setArr] = useState([])
    const navigate=useNavigate()
    const onSubmit = data => {

    
        let name, code, qty, pro
        let chec = products
        for (let i = 0; i < no; i++) {
            code = data[`ProductCode ${i}`]
            qty = data[`Quantity ${i}`]
            pro = {'procode': code, 'qty': qty }
            if (chec.length>0) {
                let obj = chec.find(o => o.procode === code);
                if (obj !== undefined && parseInt(obj.qty)>0) {
                    let qtyres = parseInt(obj.qty) - parseInt(pro.qty)
                    if(qtyres<0){
                        qtyres=0
                    }
                    obj.qty = qtyres.toString();
                 
                }
            }
            

        }
        console.log(chec);
        setProducts(chec)
        setNo(0)
navigate('/')
    }


    useEffect(()=>{
        setArr(Array.apply(null, {length: no}).map(Number.call, Number)        )
    }, [])



    return (
        <Container>
        <div className='mt-3 text-center'>
        <h1>Remove Products</h1>
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
                                                    required
                                                    />
                                                <Form.Text className="text-muted">
                                               
                                                </Form.Text>
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Product Quantity</Form.Label>
                                                <Form.Control
                                                    {...register(`Quantity ${index}`, { required: true })}
                                                    type="text"
                                                    placeholder="Enter Product quantity" 
                                                    required
                                                    />
                                                <Form.Text className="text-muted">
                                                   
                                                </Form.Text>
                                            </Form.Group>
                                       

                                        </Card.Body>
                                    </Card>
                                    </Col>


                   
                           
                        </>


                    )
                })
            }
               <hr className='mt-3'/>
                    <Button className='mt-2 mb-5' type="submit" >Submit</Button>

                    </Row>

</Form>
</Container>
        
    
    );
}