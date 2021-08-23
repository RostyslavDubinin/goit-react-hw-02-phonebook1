import React, { Component } from "react";

import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";
import shortid from "shortid";

class PhoneBook extends Component {
  static defaultProps = {
    //
  };

  static propTypes = {
    //
  };

  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };

  addContact = (name) => {
    const contact = {
      id: shortid.generate(),
      name: this.state.name,
      number: this.state.number,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));

    this.setState({
      name: "",
      number: "",
    });
  };

  handleChangeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleChangeNumber = (e) => {
    this.setState({ number: e.target.value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(`Signed up as: ${this.state.name}`);
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContacts = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  render() {
    const { filter, name, number } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.handleSubmit}
          valueName={
            this.state.contacts.find((o) => o.name === name)
              ? alert(`${name}is already in contacts`)
              : name
          }
          valueNumber={number}
          onChangeName={this.handleChangeName}
          onChangeNumber={this.handleChangeNumber}
          onClick={this.addContact}
        />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          friends={visibleContacts}
          onDeleteContact={this.deleteContacts}
        />
      </div>
    );
  }
}

export default PhoneBook;
