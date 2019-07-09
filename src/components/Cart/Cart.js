import React,{ Fragment } from 'react'
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import { Consumer } from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals';

export default function Cart() {
    return (
        <section>
            <Consumer >
{(value) =>{
const  {cart} = value;
return (cart.length>0)?(<Fragment>
                <Title name='your' title='cart'/>
                <CartColumns />
                <CartList value={value}/>
                <CartTotals value={value}/>
                </Fragment>):<EmptyCart />
                }}
            
    </Consumer>
        </section>
    )
}
