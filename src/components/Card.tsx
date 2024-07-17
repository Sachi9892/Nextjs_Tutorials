import React from 'react';

const Card = ({ children }: { children: React.ReactNode }) => {
    const cardStyle: React.CSSProperties = {
        padding: "100px", // Adjusted padding to a more typical value
        margin: "10px",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.4)", // Removed the extra comma
        border: "1px solid #ddd",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    return <div style={cardStyle}>{children}</div>;
};

export default Card;
