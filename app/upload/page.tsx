'use client'
import { CldImage, CldUploadWidget } from 'next-cloudinary'
import React, { useState } from 'react'

interface CloudinaryResult {
    public_id: string;
}

const UploadPage = () => {
    const [productId, setProductId] = useState('');
    return (
        <>
            {
                productId &&
                <CldImage src={productId} alt='image alt' width={270} height={180} />
            }
            <CldUploadWidget
                options={{ sources: ['local'], multiple: false, maxFiles: 5 }}
                uploadPreset='tu21mkcz'
                onUpload={(result, widget) => {
                    if (result.event !== 'success') {
                        return;
                    }
                    const info = result.info as CloudinaryResult;
                    setProductId(info.public_id)
                }}
            >
                {({ open }) =>
                    <button
                        className='btn btn-primary'
                        onClick={() => open()}
                    >
                        upload
                    </button>
                }

            </CldUploadWidget>
        </>
    )
}

export default UploadPage