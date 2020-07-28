import * as React from 'react'
import {WrappedFieldProps} from 'redux-form'

const style = {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '4px',
    marginBottom: '10px',
    padding: '10px 15px',
    width: 'calc(100% - 30px)',
}
const spanStyle = {
    color: '#777',
    fontSize: '10px',
    textTransform: 'uppercase',
} as React.CSSProperties

interface IInputProps {
    placeholder?: string,
    label: string
}
//componente sin estado no puede acceder a los ciclos de vida
const Input: React.StatelessComponent<WrappedFieldProps & IInputProps> = props => {
    const {label, input} = props
    return (
        <div>
            <span style={spanStyle}>{label}</span>
            <input{...input} {...props} style={style}/>
        </div>
    )
}
export default Input