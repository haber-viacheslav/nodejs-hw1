const fs = require("fs").promises;
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.resolve("db/contacts.json");

const readContacts = async () => {
	try {
		const data = await fs.readFile(contactsPath, "utf8");
		return JSON.parse(data);
	} catch (err) {
		console.error(err);
	}
};

const updateContacts = (contacts) => {
	return fs.writeFile(contactsPath, JSON.stringify(contacts), "utf8");
};

// TODO: задокументировать каждую функцию
function listContacts() {
	return readContacts();
}

async function getContactById(contactId) {
	try {
		const contacts = await readContacts();
		const contact = contacts.find((contact) => contact.id === contactId);
		return contact;
	} catch (err) {
		console.error(err);
	}
}

async function removeContact(contactId) {
	try {
		const contacts = await readContacts();
		const newContacts = contacts.filter((contact) => contact.id !== contactId);
		await updateContacts(newContacts);
		return newContacts;
	} catch (err) {
		console.error(err);
	}
}

async function addContact(name, email, phone) {
	try {
		const contacts = await readContacts();
		const newContact = { name, email, phone, id: nanoid(8) };
		contacts.push(newContact);
		await updateContacts(contacts);
		return newContact;
	} catch (err) {
		console.error(err);
	}
}

module.exports = { listContacts, getContactById, removeContact, addContact };
