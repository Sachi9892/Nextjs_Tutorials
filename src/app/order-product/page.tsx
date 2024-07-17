"use client"
import { useRouter } from "next/navigation";

export default function orderProduct() {
    const redirect = useRouter();
    const handleClick = () => {
        console.log("Order placed successfully !");
        redirect.push("/");
    }

    return (
        <>
            <h1>Place Order</h1>
            <button onClick={handleClick}>Place Order</button>
        </>
    )
}