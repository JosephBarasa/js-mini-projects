//CONTACT MANAGEMENT SYSTEM

const prompt = require('prompt-sync')();

function getInfo() {
    console.log('------------------------------------------');
    console.log('********CONTACT MANAGEMENT SYSTEM********');
    console.log('------------------------------------------');
    console.log('1. Add Contact');
    console.log('2. Delete Contact');
    console.log('3. View Contacts');
    console.log('4. Search Contacts');
    console.log('5. Exit');
}

const contacts = [];

function addContact() {
    console.log('-----------');
    console.log('Add Contact');
    console.log('-----------');
    let name = prompt("Enter Name : ");
    let phone = prompt("Enter Phone Number : ");
    const contactInfo = {name: name, phone: phone};
    contacts.push(contactInfo);
    console.log('***ADDED***')
}

function deleteContact() {
    console.log('-----------');
    console.log('Delete Contact');
    console.log('-----------');
    for (let i = 0; i < contacts.length; i++) {
        const contact = contacts[i];
        console.log(`${i + 1}. ${contact.name}`);
    }
    const number = prompt("SELECT THE NUMBER OF THE CONTACT TO BE DELETED : ");
    if (isNaN(number) || number > contacts.length) {
        console.log(`PLEASE ENTER A VALID NUMBER : (1 - ${contacts.length})`);
        return;
    }
    contacts.splice(number - 1);
    console.log("CONTACT DELETED");
}

function viewContact(contacts) {
    console.log('-----------');
    console.log('Contacts');
    console.log('-----------');
    for(let contact of contacts) {
        console.log("###");
        console.log("Name : " , contact.name);
        console.log("Phone : " , contact.phone);
    }
}

function searchContact() {
    console.log('-----------');
    console.log('Search Contact');
    console.log('-----------');

    const searchResults = [];

    const searchedItem = prompt("SEARCH CONTACT : ");
    for(let contact of contacts) {
        if (contact.name.includes(searchedItem)) searchResults.push(contact);
    }
    viewContact(searchResults);
}

getInfo();

let continueToApp = true;
while(continueToApp) {
    const number = prompt("SELECT A NUMBER TO PERFORM OPERATION : ");

    switch(number) {
        case '1':
            addContact();
            break;
        case '2':
            deleteContact();
            break;
        case '3':
            viewContact(contacts);
            break;
        case '4':
            searchContact();
            break
        case "5":
            continueToApp = false;
            break;
        default:
            console.log('Invalid Input !');
            break;
    }
}