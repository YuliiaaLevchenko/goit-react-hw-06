
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css";

const ContactList = () => {

  const contacts = useSelector((state) => state.contacts.items);
  const dispatch = useDispatch();

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {contacts.map((contact) => {
        return (
          <li className={css.item} key={contact.id}>
            <Contact name={contact.name} number={contact.number} id={contact.id} onDelete={() => handleDeleteContact(contact.id)}/>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;



