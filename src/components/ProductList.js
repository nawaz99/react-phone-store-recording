import React, { Fragment } from 'react'
import Product from './Product';
import Title from './Title';
import { Consumer } from '../context';



export default function ProductList(){
    

    return (
        <Fragment>
<div className='py-5'>
    <div className='container'>
<Title name='our' title='products'/>
<div className='row'>
<Consumer>
    {value =>value.products.map(product =>{
        
        return <Product key={product.id} product={product}/>
    })}
</Consumer>
 </div>
</div>
</div>
</Fragment>
        )
    }

