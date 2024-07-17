import "./styles.css"

export default function DashboardFunction({ children, user, revenue, notification, login }:
    {
        children: React.ReactNode,
        user: React.ReactNode,
        revenue: React.ReactNode,
        notification: React.ReactNode,
        login: React.ReactNode

    }) {

    //Conditional rendering
    const isLoggedIn = false;

    return isLoggedIn ? (
        <>
            <div> {children} </div>
            <div className="dashboard-container">
                <div className="dashboard-column">
                    <div> {user} </div>
                    <div> {revenue} </div>
                </div>
                <div className="notification"> {notification}</div>
            </div>
        </>
    ) : (
         login 
    );
}