const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.resolve("db/contacts.json");

contacts = (async () => {
	try {
		const data = await fs.readFile(contactsPath, "utf8");
		return JSON.parse(data);
	} catch (err) {
		console.error(err);
	}
})();

// TODO: задокументировать каждую функцию
function listContacts(data) {
	return data;
}

function getContactById(contactId) {
	// ...твой код
}

function removeContact(contactId) {
	// ...твой код
}

function addContact(name, email, phone) {
	// ...твой код
}

module.exports = { contacts, listContacts, getContactById, removeContact, addContact };
