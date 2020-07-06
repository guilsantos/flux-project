import React, { useState } from 'react'
import './SidebarWrapper.css'

export interface ISidebarWrapper {}

const SidebarWrapper: React.FC<ISidebarWrapper> = ({ children }) =>{
    const [closed, setClosed] = useState(false)

    return (   
        <aside className={`Sidebar-wrapper ${closed && 'closed'}`}>
            <button onClick={() => setClosed(!closed)}>{closed ? 'Exibir' : 'Ocultar'}</button>
            <nav>{children}</nav>
        </aside>
    )
}

export default SidebarWrapper
