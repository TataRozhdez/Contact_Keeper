import React, { useReducer } from 'rect'
import uuid from 'uuid'
import ContactContext from './contactContext'
import contactReducer from './contactReducer'
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_ALERT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types'

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Harry White',
        email: 'harry@gmail.com',
        phone: '111-111-1111',
        type: 'professional'
      }
    ]
  }

  const [state, dispatch] = useReducer(contactReducer)

  // Add Contact

  // Delete Contact

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contacts
  
  // Clear Filter 

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts
      }}
    >
      { props.children }
    </ContactContext.Provider>
  )
}

export default ContactState