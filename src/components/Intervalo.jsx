import './Intervalo.css'
import React from 'react'
import { connect, Connect } from 'react-redux'

import Card from './Card'
import {alterarNumeroMinimo, alterarNumeroMaximo} from '../store/actions/numeros'

function Intervalo(props) {
    const {min, max } = props;
   
    return (
        <Card title="Intervalo de Números" red>
            <div className='Intervalo'>
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number" value={min} 
                        onChange={e => props.alterarNumeroMinimo(+e.target.value)}/>
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={max}
                    onChange={e => props.alterarNumeroMaximo(+e.target.value)}/>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max,
    }
}

function mapDispatchToProp(dispatch) {
    return {
        alterarMinimo(novoNumero) {
            const action = alterarNumeroMinimo(novoNumero);
            dispatch(action);
        },
        alterarNumeroMaximo(novoNumero) {
            const action = alterarNumeroMaximo(novoNumero);
            dispatch(action);
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProp)(Intervalo);