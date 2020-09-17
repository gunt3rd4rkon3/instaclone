import * as React from 'react'
import {Link} from 'react-router-dom'
import {reduxForm, InjectedFormProps, Field} from 'redux-form'

import Center from './Center'
import Input from './input'
import Button from './Button'
import { ILogin } from '../ducks/Users'
class RegisterForm extends React.Component<InjectedFormProps<ILogin>>{
    public render(){
        const { handleSubmit } = this.props
        return(
            <form onSubmit={handleSubmit}>
                <Field label='correo' placeholder='correo' name='email' type='email' component={Input}/>
                <Field label='password' placeholder='password' name='password' type='password' component={Input}/>
                <Button block={true}>Enviar</Button>
                <Center>
                    <Link  to='/'>Iniciar Sesión</Link>
                </Center>
            </form>
        )
    }
}
export default reduxForm<ILogin>({
    form: 'register',
})(RegisterForm)