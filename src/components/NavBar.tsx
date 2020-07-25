import * as React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faNewspaper } from '@fortawesome/free-solid-svg-icons'
const style = {
    navbar:{
        borderBottom: 'solid 1px #aaa',
        padding: '10px',
    },
    link: { 
        color: '#555',
        textDecoration: 'none'
    }
}
export default class NavBar extends React.Component{
    public render(){
        return(
            <div style={style.navbar}>
                <Link to='/app/newsfeed' style={style.link}><FontAwesomeIcon icon={faNewspaper}/> Instaclone</Link>
                <div style={{float: 'right'}}>
                    <Link to='/app/profile' style={style.link}><FontAwesomeIcon icon={faUser}/> Perfil</Link>
                </div>
            </div>
        )
    }
}