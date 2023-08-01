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
function messageCSS(newMsgTag, newMsg) {
    newMsgTag.appendChild(newMsg); //This will append newMsg element(mark tag) to the newMsgTag element(p tag)
    const messages = document.querySelector(".messages");
    messages.appendChild(newMsgTag);

    newMsg.style.backgroundColor = "red";
    newMsg.style.borderRadius = "8px";
    newMsg.style.margin = "0px 10px 2px 10px";
    newMsg.style.padding = "8px";
    newMsg.style.maxWidth = "60%";
    newMsg.style.float = "right";
    newMsg.style.clear = "right"; //Clear property makes elements line by line(As float property doesn't do it)
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
                <button class="removeContact">remove</button>
            </div>

            <div id="msg_content">
                <div class="messages"></div>
                <input class="enterMsg" type="text">
                <button class="btn">B</button>
            </div>
        </div>
    `;
document.querySelector("#content").innerHTML = dynContent;
    
    for (let i = 0; i < msgLogsForAllContacts[contactID-1].messages.length; i++) { //Go through the messages in relavant contact
        const newMsgTag = document.createElement("p");
        const newMsg = document.createElement("mark");

        newMsg.textContent = msgLogsForAllContacts[contactID-1].messages[i]; //Put the message to the mark tag
        messageCSS(newMsgTag, newMsg);
    }
    document.querySelector(".btn").onclick = function() {
        const enteredMsg = document.querySelector(".enterMsg").value;
        const newMsgTag = document.createElement("p");
        const newMsg = document.createElement("mark");

        newMsg.textContent = enteredMsg; //Entered text in the textfield(enteredMsg) will bind with newMsg(mark tag)
        messageCSS(newMsgTag, newMsg);
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