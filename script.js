//Add Contacts Dynamically
const addContacts = `
    <div id="contactA" class="contacts">
        <div class="profile_pic_container ppc_contact">
            <img src="images/num1.png" class="profile_pic">
        </div>
        <div class="name_container">
            <p class="name_contacts">Test Contact 1</p>
        </div>
    </div>
    
    <div id="contactB" class="contacts">
        <div class="profile_pic_container ppc_contact">
            <img src="images/num2.png" class="profile_pic">
        </div>
        <div class="name_container">
            <p class="name_contacts">Test Contact 2</p>
        </div>
    </div>

    <div id="contact1" class="contacts">
        <div class="profile_pic_container ppc_contact">
            <img src="images/download(1).jpg" class="profile_pic">
        </div>
        <div class="name_container">
            <p class="name_contacts">Elon Musk</p>
        </div>
    </div>

    <div id="contact2" class="contacts">
        <div class="profile_pic_container ppc_contact">
            <img src="images/download(2).jpg" class="profile_pic">
        </div>
        <div class="name_container">
            <p class="name_contacts">Jeff Bezos</p>
        </div>
    </div>

    <div id="contact3" class="contacts">
        <div class="profile_pic_container ppc_contact">
            <img src="images/download(3).jpg" class="profile_pic">
        </div>
        <div class="name_container">
            <p class="name_contacts">Bill Gates</p>
        </div>
    </div>
`;
document.querySelector("#contacts").innerHTML = addContacts;

//Functions that button is clicked in the content section
function messageCSS(newMsg) {
    const messages = document.querySelector(".messages");
    messages.appendChild(newMsg);

    newMsg.style.backgroundColor = "red";
    newMsg.style.margin = "10px";
}


const msgLogsForAllContacts = []; 

function contentGenerate(contactID) {
document.querySelector(`#contact${contactID}`).onclick = function() {
    const dynContent=`
        <div id="dynContent">
            <div id="headline_content" class="headline">
                <div class="profile_pic_container ppc_content">
                    <img src="images/download(${contactID}).jpg" class="profile_pic">
                </div>
                <div class="name_container">
                    <p class="name_content"></p>
                </div>
            </div>

            <div id="msg_content">
                <button class="removeContact">remove</button>
                <div class="messages"></div>
                <input class="enterMsg" type="text">
                <button class="btn">B</button>
            </div>
        </div>
    `;
document.querySelector("#content").innerHTML = dynContent;
    
    for (let i = 0; i < msgLogsForAllContacts[contactID-1].messages.length; i++) { //Go through the messages in relavant contact
        const newMsg = document.createElement("p");
        newMsg.textContent = msgLogsForAllContacts[contactID-1].messages[i]; //Put the message to the p tag
        messageCSS(newMsg);
    }
    document.querySelector(".btn").onclick = function() {
        const enteredMsg = document.querySelector(".enterMsg").value;

        const newMsg = document.createElement("p");
        newMsg.textContent = enteredMsg; //Entered text in the textfield will bind with p tag. Like <p>(ENTERED TEXT)
        messageCSS(newMsg);

        msgLogsForAllContacts[contactID-1].messages.push(enteredMsg); //Push the message to the msgLogsForAllContacts array
    }
    document.querySelector(".removeContact").onclick = function() {
        const contactRemove = document.querySelector(`#contact${contactID}`);
        contactRemove.remove();

        const contentRemove = document.querySelector("#dynContent");                   
        contentRemove.remove();
    }

    //Display the name in the headline_content
    document.querySelector(".name_content").textContent = document.querySelector(`#contact${contactID} .name_contacts`).textContent;
}

    //Create an object to store the data for a contact
    const msgLogForContact = {
        index : contactID,
        messages : []
    };
    msgLogsForAllContacts.push(msgLogForContact);
}

//Iterate through the loop to run the contentGenerate method for every contact
for (let contactID = 1; contactID <= 3; contactID++) {
    contentGenerate(contactID);
}