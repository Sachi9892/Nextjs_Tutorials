/**
 * 
 *  @description = @Folder/Paths will be process parallely so in this case ,
 *  notification , revenue ,   will process simultanesoly.
 */

import Card from "@/components/Card"
import Link from "next/link"

export default function Notification() {
    return (
        <Card>
            <div>Notification   </div>
            <Link href={"/complex-dashboard/archived"}>Archived</Link>
        </Card>
    )
}