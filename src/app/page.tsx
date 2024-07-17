/**
 *  @description = Link is same as the a tag
 */

import Link from "next/link"
import blog from "./blog/page"

export default function App() {
    return (
        <div>
            <h2>Home page</h2>
            <Link href="/blog" > Blog Page</Link>
            <Link href="/products" className="mt-5"> products Page</Link>
        </div>
    )
}
