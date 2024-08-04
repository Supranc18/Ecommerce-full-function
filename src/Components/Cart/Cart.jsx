import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeQuantity, setLocalCart } from '../../redux/slices/cartSlice';
import { Link } from 'react-router-dom';


export default function Cart() {
    const dispatch = useDispatch();

    const reduxCart = useSelector((store) => store.cart.value);

    const [quantity, setQuantity] = useState([]);

    useEffect(() => {
        setQuantity(reduxCart.map((item) => item.quantity));
    }, [reduxCart]);
    

    // function changeHandler(e, index) {
    //     const value = parseInt(e.target.value);
    //     setQuantity((prevQuantities) =>
    //         prevQuantities.map((q, i) => (i === index ? value : q))
    //     );
    // }
    

    function clearCart() {
        localStorage.removeItem('cart');
        dispatch(setLocalCart([]))
    }

    return (
        <>
            <div className='bg-[#F6F5FF] py-[70px]'>
                <div className='container'>
                    <h1 className='text-primary-dark text-[2rem] font-[700]'>Shopping Cart</h1>
                    <div className='flex gap-1'>
                        <p>Home .</p>
                        <p>Pages .</p>
                        <p className='text-secondary'>Shopping Cart</p>
                    </div>
                </div>
            </div>
            {reduxCart.length === 0 ? (
                <div className='container px-[auto] my-5 flex justify-center'>
                    <p className='p-5 text-[2.5rem]'>Your cart is empty</p>
                </div>
            ) : (
                <>
                    <table className='container my-8'>
                        <thead className='border border-black'>
                            <tr>
                                <th className='border border-black'>Products</th>
                                <th className='border border-black'>Products name</th>
                                <th className='border border-black'>Price</th>
                                <th className='border border-black'>Quantity</th>
                                <th className='border border-black'>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reduxCart.map((el, index) => (
                                <tr key={index}>
                                    <td className='border border-black flex justify-center'>
                                        <img src={el.image} alt={el.name} className='w-28 h-28' />
                                    </td>
                                    <td className='border border-black text-center'>{el.name}</td>
                                    <td className='border border-black text-center'>{el.price}</td>
                                    <td className='border border-black text-center'>
                                        <button
                                            type='button'
                                            className='border border-black px-2 mx-1'
                                            onClick={()=>{
                                                dispatch(
                                                    changeQuantity({
                                                        _id:el._id,
                                                        type:"decrement"
                                                    })
                                                )
                                            }}
                                        >
                                            -
                                        </button>
                                        
                                        {quantity[index]}
                                        <button
                                            type='button'
                                            className='border border-black px-2 mx-1'
                                            onClick={()=>{
                                                dispatch(
                                                    changeQuantity({
                                                        _id:el._id,
                                                        type:"increment"
                                                    })
                                                )
                                            }}
                                        >
                                            +
                                        </button>
                                    </td>
                                    <td className='border border-black text-center'>
                                        {el.price * quantity[index]}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className='container flex flex-col items-start justify-start'>
                        <hr className='border text-black' />
                        <div className='flex justify-between w-[100%] my-5'>
                            <button className='bg-[#FB2E86] text-[white] px-[16px]'>
                              <Link to={'/products'}> Update cart</Link> 
                            </button>
                            <button onClick={clearCart} className='bg-[#FB2E86] text-[white] px-[16px] py-1'>
                                Clear Cart
                            </button>
                        </div>
                    </div>
                </>
            )}
            <div className='w-[300px] flex justify-center'>
                <p>Cart Totals</p>
                <div></div>
            </div>
        </>
    );
}
