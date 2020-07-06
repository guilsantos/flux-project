import React from 'react'

export interface ILinkItem {}

const LinkItem: React.FC<ILinkItem> = ({ children }) => { 
    console.log('children', children)
    return (
    <h1>
        {children}
    </h1>
)
}

export default LinkItem
