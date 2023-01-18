import React, { Component } from 'react';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import contacts from 'data/contacts.json';
import { nanoid } from 'nanoid';
import { Container, Title, Subtitle, P } from './App.styled';

export class App extends Component {
  state = {
    contacts,
    filter: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const { contacts } = this.state;

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
      return;
    }
    if (contacts.find(contact => contact.number === number)) {
      alert(`${number} is already in contacts.`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const visibelContacts = this.getVisibleContacts();

    return (
      <Container>
        <Title>Phonebook</Title>

        <ContactForm onSubmit={this.addContact} />

        <Subtitle>Contacts</Subtitle>

        {contacts.length > 1 && (
          <Filter value={filter} onChange={this.changeFilter} />
        )}
        {contacts.length > 0 ? (
          <ContactList
            contacts={visibelContacts}
            onDeleteContact={this.deleteContact}
          />
        ) : (
          <P>Your phonebook is empty. Please add contact.</P>
        )}
      </Container>
    );
  }
}
