//Add Contacts Dynamically
const addContacts = `
    <div id="test_contact_1" class="contacts">
        <div class="profile_pic_container ppc_contact">
            <img src="images/num1.png" class="profile_pic">
        </div>
        <div class="name_container">
            <p class="name_contacts">Test Contact 1</p>
        </div>
    </div>
    
    <div id="test_contact_2" class="contacts">
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
    newMsg.style.whiteSpace = "pre-wrap"; //pre-wrap value allows to add multiple spaces between words
}


const msgLogsForAllContacts = []; 

function contentGenerate(contactID) {
document.querySelector(`#contact${contactID}`).onclick = function() {
    //Add the message content dynamically
    const dynContent=`
        <div id="dynContent">
            <div id="headline_content" class="headline">
                <div class="profile_pic_container ppc_content">
                    <img src="images/download(${contactID}).jpg" class="profile_pic">
                </div>
                <div class="name_container">
                    <p class="name_content"></p>
                </div>

                <i class="fas fa-ellipsis-v popup_icon"></i>
                <div class="popup_content">
                    <p id="delete_contact" class="popup_list">Delete Chat</p>
                    <p class="popup_list">Report</p>
                    <p class="popup_list">Block</p>
                </div>
            </div>

            <div id="msg_content">
                <div class="messages"></div>
                <input class="enterMsg" type="text">
                <button class="msg_send_btn"><i class="fas fa-arrow-right"></i></button>
            </div>
        </div>
    `;
    document.querySelector("#content").innerHTML = dynContent;

    //Display the name in the headline_content
    document.querySelector(".name_content").textContent = document.querySelector(`#contact${contactID} .name_contacts`).textContent;

    //Happens after click the popup_icon
    const popup_content = document.querySelector(".popup_content");
    let count_popup = 0;

    document.querySelector(".popup_icon").onclick = function() {
        if (count_popup % 2 == 0) {
            popup_content.style.display = "block";
            count_popup++;
        }
        else {
            popup_content.style.display = "none";
            count_popup++;
        }
    }

    //Happens after click the deleteContact
    document.querySelector("#delete_contact").onclick = function() {
        const contactRemove = document.querySelector(`#contact${contactID}`);
        contactRemove.remove();

        const contentRemove = document.querySelector("#dynContent");                   
        contentRemove.remove();
    }
    //Go through the messages in relavant contact
    for (let i = 0; i < msgLogsForAllContacts[contactID-1].messages.length; i++) {
        const newMsgTag = document.createElement("p");
        const newMsg = document.createElement("mark");

        newMsg.textContent = msgLogsForAllContacts[contactID-1].messages[i]; //Put the message to the mark tag
        messageCSS(newMsgTag, newMsg);
    }

    //Happens after click the msg_send_btn
    document.querySelector(".msg_send_btn").onclick = sendMessage; //User can send message using msg_send_btn
    document.querySelector(".enterMsg").addEventListener("keydown", function(event) { //User can send message using enter key
        if (event.keyCode == 13) {
            sendMessage();
        }
    }
    );

    function sendMessage() {
        const enteredMsg = document.querySelector(".enterMsg");
        const enteredMsgValue = enteredMsg.value.trim(); //User can't send empty messages when using trim method

        if (enteredMsgValue != "") {
            const newMsgTag = document.createElement("p");
            const newMsg = document.createElement("mark");
            newMsg.style.whiteSpace = "pre-wrap";

            newMsg.textContent = enteredMsgValue; //Entered text in the textfield(enteredMsg) will bind with newMsg(mark tag)
            messageCSS(newMsgTag, newMsg);
            msgLogsForAllContacts[contactID-1].messages.push(enteredMsgValue); //Push the message to the msgLogsForAllContacts array
            enteredMsg.value = ""; //Clear the textfield after send the message
        }
    }
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