import Modal from '@/components/Modal'
import React, { useRef, useState } from 'react'
import { LiaTimesSolid } from 'react-icons/lia'
import Button from '@mui/material/Button'
import { toast } from 'react-toastify';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import Upload from '@/components/UploadEdit';
import EditInput from '@/components/EditInput';
const EditStore = ({ isOpenModal, setIsOpenModal }) => {
    const { Details } = useSelector((state) => state.rootReducers)
    const [loading, setLoading] = useState()

    const vendordetails = Details?.Details
    const NameRef = useRef(null)
    const descriptionRef = useRef(null)
    const storeImage = useRef(null)
    const addressRef = useRef(null)

    const editMart = async (e) => {
        setLoading(true)
        e.preventDefault()
        const formData = new FormData()
        formData.append('description', descriptionRef?.current?.value)
        formData.append('mealImage', storeImage.current.files[0]) // Assuming mealImage is a File object
        formData.append('name', NameRef?.current?.value)
        formData.append('address', addressRef.current?.value)
        await axios
            .post(
                `https://cafeteria-ekep.onrender.com/api/marts/${vendordetails?.mart?._id}`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/formData',
                        Accept: 'Application/json',
                        Authorization: `Bearer ${auth.token}`,
                    },
                }
            )
            .then((response) => {
                setLoading(false)
                toast.success(response.data.message)
                // console.log(response)
            })
            .catch((err) => {
                setLoading(false)
                toast.error(err?.response?.data?.message || err.error);
                // console.error(error)
            })
    }
    return (
        <div >
            <Modal isOpen={isOpenModal} height='400px' close={() => setIsOpenModal(false)}>
                <div className="flex justify-center flex-col items-center w-full gap-y-6 p-8 relative h-full">
                    <span className='bg-[black] p-2 h-8 justify-center flex items-center rounded-md absolute top-0 right-0 text-white cursor-pointer'
                        onClick={() => setIsOpenModal(false)}>
                        <LiaTimesSolid />
                    </span>
                </div>
                <div className="flex justify-center items-center gap-2 flex-col">
                    <h1 className='text-lg text-[#218B07] font-semibold'>Edit Store</h1>
                    <div className='flex justify-center flex-col items-center width'>
                        <form action="" onSubmit={editMart} className='w-full flex justify-center item gap-y-3 flex-col'>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                                <Upload reff={storeImage} defaultValue={vendordetails?.mart?.image} />
                                <div className='flex flex-col gap-y-3'>
                                    <EditInput
                                        title={'Mart Name'}
                                        type={'text'}
                                        reff={NameRef}
                                        defaultValue={vendordetails?.mart?.name} />
                                    <EditInput
                                        title={'Mart description'}
                                        type={'text'}
                                        reff={descriptionRef}
                                        defaultValue={vendordetails?.mart?.description} />
                                    <EditInput
                                        title={'Mart Address'}
                                        type={'text'}
                                        reff={addressRef}
                                        defaultValue={vendordetails?.mart?.address} />
                                </div>
                            </div>
                            <div className=' flex justify-end w-full'>
                                <Button
                                    sx={{
                                        backgroundColor: '#218B07',
                                        color: '#ffffff',
                                        fontSize: '.8rem',
                                        padding: '.5rem',
                                        '&:hover': {
                                            backgroundColor: '#218B07',
                                        },
                                    }}
                                    type='submit'
                                >
                                    {loading ? 'Loading' : 'Edit Store'}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default EditStore