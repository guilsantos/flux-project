import React from 'react'

export interface ITitle {}

const Title: React.FC<ITitle> = ({ children }) => <h1>{children}</h1>

export default Title
