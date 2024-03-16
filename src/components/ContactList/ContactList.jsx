import Contact from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map((contact) => {
        return (
          <li className={css.item} key={contact.id}>
            <Contact name={contact.name} number={contact.number} id={contact.id} onDelete={onDelete}/>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
