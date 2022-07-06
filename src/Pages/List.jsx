import { useEffect } from 'react';
import { useContext, useState } from 'react';
import { Container, Table } from 'react-bootstrap'
import { userContext } from '../App'

export const List = () => {

    const { products } = useContext(userContext)
   
    return (
        <Container>
            <div className='mt-3 text-center'>
                <h1>All Products</h1>
            </div>
        <div className='mt-5'>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Product Code</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {products && products.map((elemen, index) => 
                        <tr>
                            <td>{index + 1}</td>
                            <td>{elemen.procode}</td>
                            <td>{elemen.proname}</td>
                            <td>{elemen.qty}</td>
                        </tr>
                    )}


                </tbody>
            </Table>

        </div>
        </Container>
    )
}
