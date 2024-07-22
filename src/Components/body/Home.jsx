import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { space } from 'postcss/lib/list';
import { IoCartOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { setcart } from '../../redux/slices/cartSlice';







export default function () {
    const [products, setProducts] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        fetchProducts();
    }, [])

    function fetchProducts() {
        axios.get('https://ecommerce-sagartmg2.vercel.app/api/products/trending')
            .then((response) => {
                setProducts(response.data.data)
            })
    }

    const addToCart = (el) => {
       let cartItem= localStorage.setItem('cart',(JSON.stringify(el)))
    //    cartItem.push(el)
       console.log(cartItem);
        dispatch(setcart(el))
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        customPaging: i => (
            <div className="custom-dot">
            </div>
        ),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]


    };
    return (
        <>

            <section >
                <div style={{ backgroundImage: "url('/promotion bg.png')" }}>
                    <div className='flex flex-col px-[55px] md:flex md:flex-row' >
                        <div className='max-w-[380px]'>
                            <img src="/image 32.png" alt="lamp" />
                        </div>
                        <div className='md:py-[130px] max-w-[480px]'>
                            <p className='text-[#FB2E86]'>Best Furniture For Your Castle....</p>
                            <p className='text-[2rem] lg:text-[2.5rem]  font-[700]'>New Furniture Collection
                                Trends in 2020</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea corrupti rem eum voluptates fuga! Deserunt maiores mollitia temporibus voluptate voluptatibus commodi molestiae ab odio nihil?</p>
                            <button>Shop Now</button>
                        </div>
                        <div className='max-w-[700px] py-[35px]'>
                            <img src="/sofa promotional header.png" alt="Shofa" />
                        </div>
                    </div>
                </div>
                <div className='container my-20 flex flex-col gap-2'>
                    <Slider {...settings}  >
                        {products.map((el) => (
                            <div key={el._id} className=' w-[300px] h-[300px] bg-[#f3f3f3]  cursor-pointer'>
                                <div className='overflow-hidden w-[100%] h-[200px]'>
                                    <img src={el.image} alt={el.name} className='w-[100%] h-[100%]' />
                                </div>
                                <div className='my-3 px-4'>
                                    <p className='text-secondary py-2'>{el.name}</p>
                                    <div className='flex justify-between items-center'>
                                        <p>Rs.{el.price}</p>
                                        <IoCartOutline onClick={()=>{addToCart(el)}} className=' border bg-[green] rounded-[50%] text-white w-7 h-7 p-1 ' />
                                    </div>
                                </div>

                            </div>

                        ))}
                    </Slider>

                </div>




                <div className='container flex flex-col  justify-center'>

                    <h1 className='text-primary-dark font-[700] text-[2rem] mx-auto'>Leatest Products</h1>
                    <div className='flex gap-8 justify-center text-[#151875] '>
                        <p className='cursor-pointer hover:text-secondary'>New Arrival</p>
                        <p className='cursor-pointer hover:text-secondary'>Best Seller</p>
                        <p className='cursor-pointer hover:text-secondary'>Featured</p>
                        <p className='cursor-pointer hover:text-secondary '>Special Offer</p>
                    </div>
                    <div className='my-[60px] grid-cols-custom '>
                        {products.map((el) => (
                            <div key={el._id} className='w-[100%] flex flex-col gap-[10px] items-center bg-[#f0f0f0] p-[20px] rounded-[6px]'>
                                <div className='bg-[#F6F7FB] w-[200px] h-[200px] flex items-center justify-center'>
                                    <img src={el.image} alt={el.name} className='w-[100%]' />
                                </div>
                                <div className='flex justify-between w-[200px] '>
                                    <p>{el.name}</p>
                                    <p>{el.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </section>
        </>
    )
}
