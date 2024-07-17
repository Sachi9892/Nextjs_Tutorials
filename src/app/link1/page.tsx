//exmaple for the intercepting routing
import Link from "next/link"

export default function Intercepting() {
    return (
        <div>
            <h1>Link 1 : route</h1>
            <Link href="link1/link2">Link 2</Link>
        </div>
    )
}