import React from 'react'
import { MdOutlineLocationOn, MdDelete } from 'react-icons/md'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { FaGreaterThan } from 'react-icons/fa6'
import { AllResturants } from '@/components/Utilis/Dummy'
import Link from 'next/link'
import CustomButton from '@/components/CustomButton'
const EachRest = ({ restuarantsDetails, open }) => {
    return (
        <div className='w-full flex justify-center items-center flex-col'>
            <div className="w-full eachrest flex justify-center items-center"
            //  style={{
            //     // backgroundImage: `url(${restuarantsDetails.image})`,
            //     // backgroundImage: 'url(./Images/Rectangle 86(1).png)',
            //     backgroundSize: 'cover', // Optional: Adjust the background image size
            //     backgroundPosition: 'center center',
            //     backgroundRepeat: 'no-repeat'
            // }}
            >
                <div className="width flex justify-between items-center border gap-x-4 ">
                    <div className="w-[70%] shadow-md bg-[white] rounded-md flex flex-col p-4 gap-y-4 ">
                        <h1>{restuarantsDetails.name}</h1>
                        <p>{restuarantsDetails.description}</p>
                        <div className='flex gap-x-2 items-center'>
                            <span className='text-[#5f8357]'>{restuarantsDetails.ratings}</span>
                            <span>{restuarantsDetails.Reviews}</span>
                        </div>
                        <div className="">
                            <span><MdOutlineLocationOn /></span>
                            {restuarantsDetails.location}
                        </div>
                    </div>
                    <div className="w-[30%] bg-[white] shadow-md rounded-md flex flex-col p-4 gap-y-6">
                        <div className="flex justify-between items-center">
                            <CustomButton
                                title='Cart'
                                containerStyles='text-[white] flex justify-center items-center py-2 px-8 rounded-[18px] gap-x-4 border bg-[#218B07]'
                                Icon={<AiOutlineShoppingCart />}

                            />
                            <div className="flex justify-center items-center">
                                <p className='text-2xl'>view all</p>
                                <span><FaGreaterThan /></span>
                            </div>
                        </div>
                        <div className="flex justify-between ">
                            <div className="flex w-[70%] gap-x-3">
                                <div className="w-[50%]">
                                    <img src="/Images/Rectangle 84.png" alt="" className='' />
                                </div>
                                <div className=" flex flex-col">
                                    <span className='text-[#000000BA] text-xl'>Amala Sky</span>
                                    <span className='text-[black] font-semibold'>Jollof rice</span>
                                    <span className='text-base text-[#000000BA] '>Takeaway</span>
                                </div>
                            </div>
                            <p>3,500</p>
                        </div>
                        <div className="flex justify-end items-center gap-x-6">
                            <span className='text-3xl'><MdDelete /></span>
                            <CustomButton
                                title='Check Out'
                                containerStyles='text-[white] flex justify-center items-center py-2 px-8 rounded-[18px] gap-x-4 border bg-[#218B07]'

                            />
                        </div>
                    </div>

                </div>
            </div>

            <div className="width">
                <div className='flex flex-col gap-y-4 w-[100%]'>
                    <div className=" flex gap-x-4 ">
                        <h1 className='font-[700] text-3xl'>All Delicacies</h1>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">

                        <div className="border flex justify-between items-center gap-x-8 w-full px-6 py-8">
                            <div className="flex-col flex gap-y-16 w-[60%]">
                                <h1 className='font-[600] text-xl'>Jollof rice & Chicken</h1>
                                <div className="">
                                    <p>Initial Menu: <span className='text-[#218B07]'> #3500</span></p>
                                    <CustomButton
                                        title='Buy menu'
                                        containerStyles='text-[white] flex justify-center items-center py-2 px-8 rounded-[8px] gap-x-4 border bg-[#218B07]'
                                        handleClick={open}
                                    />
                                </div>
                            </div>
                            <div className="w-[40%] flex justify-center items-center h-[100%]">
                                <img src="/Images/Rectangle 84.png" alt="" srcset="" className='w-[100%] h-[100%]' />
                            </div>
                        </div>
                        <div className="border flex justify-between items-center gap-x-8 w-full px-6 py-8">
                            <div className="flex-col flex gap-y-16 w-[60%]">
                                <h1 className='font-[600] text-xl'>Jollof rice & Chicken</h1>
                                <div className="">
                                    <p>Initial Menu: <span className='text-[#218B07]'> #3500</span></p>
                                    <CustomButton
                                        title='Buy menu'
                                        containerStyles='text-[white] flex justify-center items-center py-2 px-8 rounded-[8px] gap-x-4 border bg-[#218B07]'
                                        handleClick={open}

                                    />
                                </div>
                            </div>
                            <div className="w-[40%] flex justify-center items-center h-[100%]">
                                <img src="/Images/Rectangle 84.png" alt="" srcset="" className='w-[100%] h-[100%]' />
                            </div>
                        </div>
                        <div className="border flex justify-between items-center gap-x-8 w-full px-6 py-8">
                            <div className="flex-col flex gap-y-16 w-[60%]">
                                <h1 className='font-[600] text-xl'>Jollof rice & Chicken</h1>
                                <div className="">
                                    <p>Initial Menu: <span className='text-[#218B07]'> #3500</span></p>
                                    <CustomButton
                                        title='Buy menu'
                                        containerStyles='text-[white] flex justify-center items-center py-2 px-8 rounded-[8px] gap-x-4 border bg-[#218B07]'
                                        handleClick={open}

                                    />
                                </div>
                            </div>
                            <div className="w-[40%] flex justify-center items-center h-[100%]">
                                <img src="/Images/Rectangle 84.png" alt="" srcset="" className='w-[100%] h-[100%]' />
                            </div>
                        </div>
                        <div className="border flex justify-between items-center gap-x-8 w-full px-6 py-8">
                            <div className="flex-col flex gap-y-16 w-[60%]">
                                <h1 className='font-[600] text-xl'>Jollof rice & Chicken</h1>
                                <div className="">
                                    <p>Initial Menu: <span className='text-[#218B07]'> #3500</span></p>
                                    <CustomButton
                                        title='Buy menu'
                                        containerStyles='text-[white] flex justify-center items-center py-2 px-8 rounded-[8px] gap-x-4 border bg-[#218B07]'
                                        handleClick={open}

                                    />
                                </div>
                            </div>
                            <div className="w-[40%] flex justify-center items-center h-[100%]">
                                <img src="/Images/Rectangle 84.png" alt="" srcset="" className='w-[100%] h-[100%]' />
                            </div>
                        </div>
                        <div className="border flex justify-between items-center gap-x-8 w-full px-6 py-8">
                            <div className="flex-col flex gap-y-16 w-[60%]">
                                <h1 className='font-[600] text-xl'>Jollof rice & Chicken</h1>
                                <div className="">
                                    <p>Initial Menu: <span className='text-[#218B07]'> #3500</span></p>
                                    <CustomButton
                                        title='Buy menu'
                                        containerStyles='text-[white] flex justify-center items-center py-2 px-8 rounded-[8px] gap-x-4 border bg-[#218B07]'
                                        handleClick={open}

                                    />
                                </div>
                            </div>
                            <div className="w-[40%] flex justify-center items-center h-[100%]">
                                <img src="/Images/Rectangle 84.png" alt="" srcset="" className='w-[100%] h-[100%]' />
                            </div>
                        </div>
                        <div className="border flex justify-between items-center gap-x-8 w-full px-6 py-8">
                            <div className="flex-col flex gap-y-16 w-[60%]">
                                <h1 className='font-[600] text-xl'>Jollof rice & Chicken</h1>
                                <div className="">
                                    <p>Initial Menu: <span className='text-[#218B07]'> #3500</span></p>
                                    <CustomButton
                                        title='Buy menu'
                                        containerStyles='text-[white] flex justify-center items-center py-2 px-8 rounded-[8px] gap-x-4 border bg-[#218B07]'
                                        handleClick={open}

                                    />
                                </div>
                            </div>
                            <div className="w-[40%] flex justify-center items-center h-[100%]">
                                <img src="/Images/Rectangle 84.png" alt="" srcset="" className='w-[100%] h-[100%]' />
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default EachRest