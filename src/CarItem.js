import React,{useContext} from 'react';
import {CarContext} from './App';

export default props => {
    const context = useContext(CarContext);
    return (
        <li>
            {`id: ${props.id} --- Model: ${props.model} --- Manufc: ${props.manufc} ---`} 
            <button onClick={() => context.rm(props.id)}>remove</button>
        </li>
    );
}