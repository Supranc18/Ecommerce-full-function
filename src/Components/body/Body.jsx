import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios';




export default function () {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetchProducts();
    }, [])

    function fetchProducts() {
        axios.get('https://ecommerce-sagartmg2.vercel.app/api/products/trending')
            .then((response) => {
                setProducts(response.data.data)
            })
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
            <section >
                <Slider {...settings} style={{ backgroundImage: "url('/promotion bg.png')" }}>
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

                    <div >
                        <div className='flex flex-col px-[55px] md:flex md:flex-row' >
                            <div className='max-w-[380px]'>
                                <img src="/image 32.png" alt="lamp" />
                            </div>
                            <div className='md:py-[130px] max-w-[480px]'>
                                <p className='text-[#FB2E86]'>Best Furniture For Your Castle....</p>
                                <p className='text-[2rem]  font-[680]'>New Furniture Collection
                                    Trends in 2020</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea corrupti rem eum voluptates fuga! Deserunt maiores mollitia temporibus voluptate voluptatibus commodi molestiae ab odio nihil?</p>
                                <button>Shop Now</button>
                            </div>
                            <div className='max-w-[700px] py-[35px]'>
                                <img src="/sofa promotional header.png" alt="Shofa" />
                            </div>
                        </div>
                    </div>


                </Slider>

                <div className='container my-[60px] grid-cols-custom'>
                    <div className=' w-[100%] flex flex-col gap-[10px] items-center bg-[#f0f0f0] p-[20px] rounded-[6px]'>
                        <div className='bg-[#F6F7FB] w-[200px] h-[200px] flex items-center justify-center'>
                            <img className='max-w-[150px]' src="/image 1168.png" alt="chair" />
                        </div>
                        <div>
                            <p>Chair</p>
                        </div>
                    </div>

                    <div className=' w-[100%] flex flex-col gap-[10px] items-center bg-[#f0f0f0] p-[20px] rounded-[6px]'>
                        <div className='bg-[#F6F7FB] w-[200px] h-[200px] flex items-center justify-center'>
                            <img className='max-w-[150px]' src="/image 1168.png" alt="chair" />
                        </div>
                        <div>
                            <p>Chair</p>
                        </div>
                    </div>


                    <div className=' w-[100%] flex flex-col gap-[10px] items-center bg-[#f0f0f0] p-[20px] rounded-[6px]'>
                        <div className='bg-[#F6F7FB] w-[200px] h-[200px] flex items-center justify-center'>
                            <img className='max-w-[150px]' src="/image 1168.png" alt="chair" />
                        </div>
                        <div>
                            <p>Chair</p>
                        </div>
                    </div>


                    <div className=' w-[100%] flex flex-col gap-[10px] items-center bg-[#f0f0f0] p-[20px] rounded-[6px]'>
                        <div className='bg-[#F6F7FB] w-[200px] h-[200px] flex items-center justify-center'>
                            <img className='max-w-[150px]' src="/image 1168.png" alt="chair" />
                        </div>
                        <div>
                            <p>Chair</p>
                        </div>
                    </div>

                </div>

                <div>
                    <div>
                        <h1>Leatest Products</h1>
                    </div>
                    {products.map((el) => {
                        return <><li key={el.id}>{el.name}</li>
                        <img src={el.image} alt="" />

                        </>
                    })}
                </div>
            </section>
        </>
    )
}
