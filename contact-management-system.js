//CONTACT MANAGEMENT SYSTEM

const prompt = require('prompt-sync')();

function getInfo() {
    console.log('--------------------------');
    console.log('CONTACT MANAGEMENT SYSTEM');
    console.log('--------------------------');
    console.log('1. Add Contact');
    console.log('2. Delete Contact');
    console.log('3. View Contacts');
    console.log('4. Search Contacts');
    console.log('5. Exit');
}

const contacts = [];

function addContact() {
    let name = prompt("Enter Name : ");
    let phone = prompt("Enter Phone Number : ");
    const contactInfo = {name: name, phone: phone};
    contacts.push(contactInfo);
    console.log('Added')
}

function deleteContact() {}

function viewContact(contacts) {
    for(let contact of contacts) {
        console.log("############");
        console.log("Name : " , contact.name);
        console.log("Phone : " , contact.phone);
    }
}

function searchContact() {}

getInfo();

let continueToApp = true;
while(continueToApp) {
    console.log("############");
    const number = prompt("Select a number to perform operation : ");

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