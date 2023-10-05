//const test_contact_1_msgs = [];
//const test_contact_2_msgs = [];
const test_contact_msgs   = [];
let messageID = 0;

function contentGenerateForTest(messageID,testContactID) {
    document.querySelector(`#test_contact_${testContactID}`).style.cursor = "pointer";

    document.querySelector(`#test_contact_${testContactID}`).onclick = function() {
    //Add the message content for Test Contacts dynamically
    const headlineContent = `
        <div id="headline_content" class="headline">
            <div id="contacts_header_img" class="profile_pic_container">
            <img src="images/num${testContactID}.png" class="profile_pic_headline"></img>
            </div>
            <div class="name_container">
                <p class="name_content"></p>
            </div>

            <div id="icons_content">
                <span class="material-icons"> search </span>
                <span class="material-icons" id="popup_i_contacts"> more_vert </span>
            </div>

            <div id="popup_con_contacts" class="popup_content">
                <span> Delete Chat </span>
                <span> Report </span>
                <span> Block </span>
            </div>
        </div>
    `;
    document.querySelector("#content").innerHTML = headlineContent;  
    document.querySelector(".name_content").textContent = document.querySelector(`#test_contact_${testContactID} .name_contacts`).textContent;
    messageContent();

    //Go through the messages in Test Contacts
    for (let testContactID = 1; testContactID <= 2; testContactID++) {
        for (let i = 0; i < test_contact_msgs[testContactID-1].messages.length; i++) {
            const newMsgTag = document.createElement("p");
            const newMsg = document.createElement("mark");
            newMsg.textContent = test_contact_msgs[testContactID - 1].messages[i];

            if (testContactID == 1) {
                messageCSS(newMsgTag, newMsg);
            }
            else {
                messageCSSForLeft(newMsgTag, newMsg);
            }
        }
    }
    
    //Happens after click the msg_send_btn in Test Contacts
    document.querySelector(".msg_send_btn").onclick = sendMessage;
    document.querySelector(".enterMsg").addEventListener("keydown", function(event) {
        
        if (event.keyCode == 13 && !event.shiftKey) {
            event.preventDefault();
            sendMessage();
        }
    }
    );

    function sendMessage() {
        const enteredMsg = document.querySelector(".enterMsg");
        const enteredMsgValue = enteredMsg.value.trim();

        if (enteredMsgValue != "") {
            const newMsgTag = document.createElement("p");
            const newMsg = document.createElement("mark");
            newMsg.style.whiteSpace = "pre-wrap";

            newMsg.textContent = enteredMsgValue;
            messageCSS(newMsgTag, newMsg);
            test_contact_msgs[testContactID-1].messages.push(enteredMsgValue);
            enteredMsg.value = "";
        }
    }
    }

    //Create an object to store data for Test Contacts
    const msgLogForTestContacts = {
        contactIndex : testContactID,
        msgIndex : messageID,
        messages : []
    };
    test_contact_msgs.push(msgLogForTestContacts);
}

//Iterate through the loop to run the contentGenerateForTest method for Test Contacts
for (let testContactID = 1; testContactID <= 2; testContactID++) {
    contentGenerateForTest(messageID,testContactID);
}
