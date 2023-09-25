import React from 'react'

interface Props {
    params: { slug: string[] };
    searchParams: { sortOrder: string };
}

const ProductPage = ({ params: { slug }, searchParams: { sortOrder } }: Props) => {
    return (

        <div className='text-black'>ProductPage {slug} {sortOrder}</div>
    )
}


export default ProductPage