import React from 'react'

interface Props {
    params: { id: number, photoId: number };
}

const photoPage = ({ params: { id, photoId } }: Props) => {
    return (
        <div className='text-black'>photoPage {id} {photoId}</div>
    )
}

export default photoPage