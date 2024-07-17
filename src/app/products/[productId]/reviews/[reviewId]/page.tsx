import { notFound } from "next/navigation"

export default function productReview({ params }: {
    params: {
        productId: string,
        reviewId: string
    }
}) {

    if (parseInt(params.reviewId) > 400) {
        notFound();
    }

    return (
        <>
            <h1> Review id : {params.reviewId} for Product id : {params.productId}  </h1>
        </>
    )
}