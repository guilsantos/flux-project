import React from 'react'
import './Sidebar.css'
import SidebarWrapper from './components/SidebarWrapper'

export interface ISidebar {}

const Sidebar: React.FC<ISidebar> = () =>{
    return (   
        <SidebarWrapper>
            <div>PRIMEIRO ITEM</div>
            <div>SEGUNDO ITEM</div>
        </SidebarWrapper>
    )
}

export default Sidebar
