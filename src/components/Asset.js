import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img_iconEth from '../static/images/eth_logo.svg';
import img_iconDol from '../static/images/dollar.svg';

function Asset({ asset }) {
    return (
        <Card className="my-3 p-3 rounded">
            <Link to={`/asset/${asset.id}`}>
                <Card.Img src={asset.fileimage}/>
            </Link>

            <Card.Body>
                <Link to={`/asset/${asset.id}`}>
                    <Card.Title as="div" class="fw-bold col-6">
                        <strong>{asset.title}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as="div">
                    <div class="col-6">
                        {asset.artistFirstName} {asset.artistLastName}
                    </div>
                </Card.Text>

                <Card.Text as="div">
                    <div className="my-3">
                        {asset.sold === true
                        ? <h6 class="text-danger">SOLD</h6>
                        : asset.fiat === 0
                            ? <text><img src={img_iconEth} width={10} />{asset.price}</text>
                            : <text><img src={img_iconDol} width={15} />{asset.price}</text>
                        }
                    </div>
                </Card.Text>

            </Card.Body>
        </Card>
    )
}

export default Asset
