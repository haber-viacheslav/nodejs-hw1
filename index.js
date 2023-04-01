const { listContacts, addContact, getContactById, removeContact } = require("./contacts");
const { Command } = require("commander");
const program = new Command();
program
	.option("-a, --action <type>", "choose action")
	.option("-i, --id <type>", "user id")
	.option("-n, --name <type>", "user name")
	.option("-e, --email <type>", "user email")
	.option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const options = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
	switch (action) {
		case "list":
			const allContacts = await listContacts();
			console.log(allContacts);
			break;

		case "get":
			const contact = await getContactById(id);
			console.log(contact);

			break;

		case "add":
			const newContact = await addContact(name, email, phone);
			console.log(newContact);
			break;

		case "remove":
			const newContacts = await removeContact(id);
			console.log(newContacts);
			break;

		default:
			console.warn("\x1B[31m Unknown action type!");
	}
}

invokeAction(options);
