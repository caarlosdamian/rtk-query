import React from "react";
import {
    useAddContactMutation,
    useContactsQuery,
    useDeleteContactMutation,
    useUpdateContactMutation,
} from "../services/api";

export const AddContact = () => {
    const [addContact] = useAddContactMutation();
    const [deleteContact] = useDeleteContactMutation();
    const [updateContact] = useUpdateContactMutation();
    const { refetch } = useContactsQuery();

    const contact = {
        id: "6",
        name: "PRUEBA",
        email: "Erik@gmail.com",
    };
    const addHandler = async () => {
        await addContact(contact);
    };
    const editHandler = async () => {
        await updateContact(contact);
    };
    const deleteHandler = async () => {
        await deleteContact(contact.id);
    };
    return (
        <>
            <button onClick={addHandler}>Add Contact</button>
            <button onClick={deleteHandler}>Delete Contact</button>
            <button onClick={editHandler}>Update Contact</button>
        </>
    );
};
