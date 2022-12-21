import React, { useState } from "react";

export enum CardVariant {
    outlined = "outlined",
    primary = "primary"
}

interface CardProps {
    width: string;
    height: string
    variant: CardVariant
    children: React.ReactNode
    onClick: (num: number) => void
}

const Card: React.FunctionComponent<CardProps> = ({ variant, width, height, children, onClick }) => {
    const [state, setState] = useState(0)

    return (
        <div style={{
            width, height,
            border: variant === CardVariant.outlined ? "1px solid gray" : "none",
            background: variant === CardVariant.primary ? "lightgray" : "none"
        }}
            onClick={() => onClick(state)}>
            {children}
        </div >
    )
}

export default Card