import React, { Component } from 'react';
import {
    Col,
    Row,
    Card
} from 'reactstrap';
import _ from 'lodash';

function MadlipInput(props) {
    return (
        <Col md="3" className="input-wrapper">
            <Row>
                <Col md="2">
                    <label className="green-label">1</label>
                </Col>
                <Col md="10">
                    <input placeholder={props.placeholder} type='text' onChange={props.handleChange} />
                </Col>
            </Row>
            <Row>
                <Col md="2"></Col>
                <Col md="10">
                    <div className="input-description">{props.placeholder}</div>
                </Col>
            </Row>
        </Col>
    );
}

class MadlibForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            color: '',
            pluralNoun: '',
            adjectiveOne: '',
            celebrityOne: ''
        }


    }

    handleChange = function(props) {
        return function(event) {
            //console.log(`value for input ${props.inputTitle} is: ${event.target.value}`)
            this.setState({[props.inputTitle]: event.target.value});
            console.log(`value for state ${props.inputTitle} is: ${this.state[props.inputTitle]}`);
        }.bind(this);
        
    }
    render() {

        this.inputData = [
            {placeholder: 'Color', prop: 'color'},
            {placeholder: 'Noun (Plural)', prop: 'pluralNoun'},
            {placeholder: 'Adjective', prop: 'adjectiveOne'},
            {placeholder: 'Celebrity', prop: 'celebrityOne'}
        ]

        return (
            <div className="card-wrapper">
                <Card>

                    <Row style={{textAlign: 'center', color: 'white'}}>
                        {
                            _.map(this.inputData, (data, indexKey) => {
                                console.log(data);
                                console.log('this is our indexKey: ${indexKey}');
                            })
                        }
                        
                        
                    </Row>
                </Card>
            </div>
            
        );
    }
}

export default MadlibForm;