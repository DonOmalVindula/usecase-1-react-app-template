import React, { useEffect } from 'react';
// import { Container, Grid.Row, Grid.Column, Form, label, Button } from 'react-bootstrap';
import { Container, Form, Table, Button, Grid } from 'semantic-ui-react';
import '../../App.js';
// import '../../index.css';
import { InputNumber, InputGroup } from 'rsuite';
import './inputnumber.less'

export default function MyCart() {
    debugger;
    useEffect(() => {
        document.title = 'My Cart';
    }, []);

    // State to keep track of the number of items in the cart
    const [value, setValue] = React.useState(0);
    const handleMinus = () => {
        setValue(parseInt(value, 10) - 1);
    };
    const handlePlus = () => {
        setValue(parseInt(value, 10) + 1);
    };

    // Number of items in the cart
    let numItems = 6;
    return (
        <>
            <Container className="mt-5">
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <p>Checking out items - You have {numItems} items in your cart</p>
                        <Table className='table align-middle'>
                            <Table.Header>
                                <Table.Row className="text-center">
                                   <Table.HeaderCell scope="Grid.Column"></Table.HeaderCell>
                                   <Table.HeaderCell scope="Grid.Column">QTY</Table.HeaderCell>
                                   <Table.HeaderCell scope="Grid.Column" >Unit</Table.HeaderCell>
                                   <Table.HeaderCell scope="Grid.Column">Total</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>Top Paw® Valentine's Day Single Dog Sweater</Table.Cell>
                                    <Table.Cell width="120px"><InputGroup>
                                        <InputGroup.Button onClick={handleMinus}>-</InputGroup.Button>
                                        <InputNumber className="custom-input-number" value={3} onChange={setValue} />
                                        <InputGroup.Button onClick={handlePlus}>+</InputGroup.Button>
                                    </InputGroup></Table.Cell>
                                    <Table.Cell width="120px" className="text-center">$ 14.99</Table.Cell>
                                    <Table.Cell width="120px" className="text-center">$ 44.97</Table.Cell>
                                </Table.Row>

                                <Table.Row>
                                    <Table.Cell>Arcadia Trail™ Dog Windbreaker</Table.Cell>
                                    <Table.Cell width="120px"><InputGroup>
                                        <InputGroup.Button onClick={handleMinus}>-</InputGroup.Button>
                                        <InputNumber className="custom-input-number" value={3} onChange={setValue} />
                                        <InputGroup.Button onClick={handlePlus}>+</InputGroup.Button>
                                    </InputGroup></Table.Cell>
                                    <Table.Cell width="120px" className="text-center">$ 29.99</Table.Cell>
                                    <Table.Cell width="120px" className="text-center">$ 89.97</Table.Cell>
                                </Table.Row>

                            </Table.Body>
                        </Table>
                    </Grid.Column>
                    <Grid.Column className="Grid.Column-4 bg-primary p-4 text-white rounded-3"><h2>Card Details</h2>
                        <Form>
                            <Grid.Row>
                                <Form.Field className="mb-3" controlId="formNameOnCard">
                                    <label>Name on Card</label>
                                    <input type="text" placeholder="Enter full name" />
                                </Form.Field>
                                <Form.Field className="mb-3" controlId="formCardNumber">
                                    <label>Card Number</label>
                                    <input type="text" placeholder="Enter card number" />
                                </Form.Field>
                            </Grid.Row>
                            <Grid.Row><Grid.Column>
                                <Form.Field className="mb-3" controlId="formExpirationDate">
                                    <label>Expiration Date</label>
                                    <input type="text" placeholder="Expiration Date" />
                                </Form.Field></Grid.Column>
                                <Grid.Column>
                                    <Form.Field className="mb-3" controlId="formCVV">
                                        <label>CVV</label>
                                        <input type="text" placeholder="CVV" />
                                    </Form.Field></Grid.Column>
                            </Grid.Row>
                            <Grid.Row className="p-2">
                                <Grid.Column>Subtotal</Grid.Column>
                                <Grid.Column className="Grid.Column-2 d-flex justify-content-right">$134.97</Grid.Column>
                            </Grid.Row>
                            <Grid.Row className="p-2">
                                <Grid.Column>Shipping</Grid.Column>
                                <Grid.Column className="Grid.Column-2 d-flex justify-content-right">$20</Grid.Column>
                            </Grid.Row>
                            <Grid.Row className="p-2">
                                <Grid.Column c>Tax</Grid.Column>
                                <Grid.Column className="Grid.Column-2 d-flex justify-content-right">$10.34</Grid.Column>
                            </Grid.Row>

                            <Grid.Row className="p-2">
                                <Grid.Column>Total (inc. tax)</Grid.Column>
                                <Grid.Column className="Grid.Column-2 d-flex justify-content-right">$165.31</Grid.Column>
                            </Grid.Row>
                            <Grid.Row className="d-flex justify-content-center p-3">
                                <Button variant="warning" type="submit" size="lg">
                                    Place Order
                                </Button>
                            </Grid.Row>
                        </Form>
                    </Grid.Column>
                </Grid.Row>
                </Grid>
            </Container>
        </>
        // <h1>WElcome to My Cart</h1>
    );
}