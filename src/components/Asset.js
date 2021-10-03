import React from 'react';
import { Card, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img_iconEth from '../static/images/eth_logo.svg';
import img_iconDol from '../static/images/dollar.svg';

function Asset({ asset }) {
    return (
        <Card className="my-3 p-3 rounded">

            <Link className="stretched-link text-dark" to={`/asset/${asset.id}`}>
                <div className="square" style={{ backgroundImage: `url(${asset.fileimage})`}} />
            </Link>

            <Card.Body className="px-0">
            <Row>

                <div className="col-6">
                    <div className="fw-bold">{asset.title}</div>
                    <small>{asset.artistFirstName} {asset.artistLastName}</small>
                </div>

                <div className="col-6 text-end">
                    {asset.sold === true
                        ? <h6 class="text-danger">SOLD</h6>
                        :

                        <div className="mb-0 ">
                            <div>Price</div>
                            <div className="h6">
                                {asset.fiat === 0 ?
                                    (
                                        <div>
                                            <img className="me-2" src={img_iconEth} height="20px"/> {asset.price}
                                        </div>
                                    ) : (
                                        <div>
                                            <img className="me-2" src={img_iconDol} width="20px"/> {asset.price}
                                        </div>
                                    )}
                            </div>
                        </div>
                    }
                </div>

            </Row>
            </Card.Body>

        </Card>
    )
}

export default Asset
