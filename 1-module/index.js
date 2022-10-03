const contacts = require('./contacts')

async function invokeAction({ action, id, name, email, phone }) {
    switch (action) {
      case "list":
       const contactsList = contacts.listContacts()
        break;
  
      case "get":
        const contact = await contacts.getContactById(id)
        break;
  
      case "add":
        const newContacts = await contacts.addContact(name, email, phone)
        
        break;
  
      case "remove":
        const removedContact = await contacts.removeContact(id)
        break;
  
      default:
        console.warn("\x1B[31m Unknown action type!");
    }
  }

  invokeAction({action: 'remove', id: 1})