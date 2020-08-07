import React, {useEffect} from 'react'
import {useDispatch, useSelector } from 'react-redux'
import {getContacts} from '../../actions/UserActions'
import {SELECT_CONTACT} from '../../constants/userConstants'


const Contacts = () => {

    const dispatch = useDispatch();
    const contacts = useSelector(store => store.usuario.contacts);
    const userSelected = useSelector(store => store.usuario.contactSelected)

    useEffect(()=>dispatch(getContacts(2)), []);


    const selectedUser = email => {
        dispatch({type: SELECT_CONTACT, payload: email})
    }


    const deleteHandler = email => {

    }

    
    return (
        
        <div>
            
        
        {contacts.map( contact => (
                <div onClick={()=>selectedUser(contact.email)}>
                    {contact.email}
                </div>
                
            ))}
        
            <div>
                { userSelected != '' ? (
                    <div>
                        
                        <button>Eliminar</button>
                        <button>Modificar</button>
                    </div>
                ) : (
                    <div>
                        <button type="button" disabled>Eliminar</button>
                        <button type="button" disabled>Modificar</button>
                    </div>
                )
                    
                }
                
            </div>

            

        </div>
    )




}

export default Contacts