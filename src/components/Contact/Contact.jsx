import PropTypes from "prop-types";
import { deleteContact } from "redux/actions";
import { useDispatch } from "react-redux";
import css from "./Contact.module.css";


const Contact = ({contact}) => {

    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(contact.id));

    return(
        <li className={css.contact}>
                {contact.name} {contact.number}
                <button className={css.deleteBtn} onClick={handleDelete}>
                Delete
                </button>
            
        </li>
    )
};

Contact.propTypes = {
    contact : PropTypes.shape({
        id : PropTypes.string.isRequired,
        name : PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired,
};

export default Contact;