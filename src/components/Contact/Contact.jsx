import css from './Contact.module.css'
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";


const Contact = ({ id, name, number , onDelete }) => {
    return (
        <div className={css.container}>
        <div className={css.title}>
            <p className={css.name}><FaUser /> {name}</p>
            <p className={css.number}><FaPhoneAlt /> {number}</p>
            </div>
            <button className={css.button} type='button' onClick={() => onDelete(id)}>Delete</button>
        </div>
    )
}

export default Contact