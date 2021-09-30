import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap';
import assets from '../apiArray/assets';
import img_iconEth from '../static/images/eth_logo.svg';
import img_iconDol from '../static/images/dollar.svg';

function AssetScreen({ match }) {
    const asset = assets.find((a) => a.id == match.params.id)
    return (
        <div>
            <Link to='/' className='btn btn-light my-3'>Go Back</Link>
            <Row>
                <Col md={6}>
                    <Image src={asset.fileimage} alt={asset.title} fluid/>
                </Col>

                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{asset.title}</h3>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h4>{asset.artistFirstName} {asset.artistLastName}</h4>
                            <h6>Gallery: {asset.gallery === 1
                                            ? <text>Starship</text>
                                            : asset.gallery === 2
                                                ? <text>Louvre</text>
                                                : asset.gallery === 3
                                                    ? <text>Penguin</text>
                                                    : asset.gallery === 4
                                                        ? <text>The Art Institute of Chicago</text>
                                                        : ''
                            }</h6>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Description: {asset.description}
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h5>Price: {asset.sold === true
                                ? <h6 class="text-danger">SOLD</h6>
                                : asset.fiat === 0
                                    ? <text><img src={img_iconEth} width={10}/>{asset.price}</text>
                                    : <text><img src={img_iconDol} width={10}/>{asset.price}</text>
                            }</h5>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Button className='btn btn-warning text-dark fw-bold mt-2 mt-xl-0' disabled={asset.sold === true} type='button'><img alt='' src='https://artyste-demo.s3.amazonaws.com/images/metamask.svg?AWSAccessKeyId=AKIAQJ4TKPUZGUAQXN5D&amp;Signature=ldhccsNchFy%2BnZaJH8pLrXo842A%3D&amp;Expires=1632902645' width='20px' class='me-2'></img>Buy with Metamask</Button>
                            <Button className='btn btn-warning text-dark fw-bold mt-2 mt-xl-0' disabled={asset.sold === true} type='button'><img alt='' src='https://artyste-demo.s3.amazonaws.com/images/circle.svg?AWSAccessKeyId=AKIAQJ4TKPUZGUAQXN5D&amp;Signature=GI54SgeihnR1UVBKO6VR%2BENzzM8%3D&amp;Expires=1632902645' width='20px' class='me-2'></img>Buy with Credit Card</Button>
                        </ListGroup.Item>

                    </ListGroup>
                </Col>

                <Col md={3}>

                </Col>
            </Row>
        </div>
    );
}

export default AssetScreen;

