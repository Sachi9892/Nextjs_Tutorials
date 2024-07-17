import Card from "@/components/Card";
import Link from "next/link";

/**
 * @Remember = once the user navigate through parallel routing and ( here : default - Archived )
 * page , revenue and user will render data us usual but once the user willl
 * refresh the archived page next will try to find DEFAULT.TSX file ohterwise it will return 404.
 * 
 */

export default function ArchivedNotification() {
    return (
        <Card>
            <div>Archived Notification</div>
            <Link href="/complex-dashboard"> Default Dashboard</Link>
        </Card>
    )
}