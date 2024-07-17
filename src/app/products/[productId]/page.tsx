import { Metadata } from 'next';
import { title } from 'process';
import React from 'react'

type Props = {
    params: {
        productId: string;
    }
}

export const generateMetadata = ({ params }: Props): Metadata => {
    return {
        title: `product id : ${params.productId}`,
    };
};


export default function products({ params, }: Props) {

    return (
        <div>
            <h1>Products details with id : {params.productId} </h1>
        </div>
    )

}
