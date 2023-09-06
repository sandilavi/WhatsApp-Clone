//const test_contact_1_msgs = [];
//const test_contact_2_msgs = [];
const test_contact_msgs   = [];
let messageID = 0;

function contentGenerateForTest(messageID,testContactID) {
document.querySelector(`#test_contact_${testContactID}`).onclick = function() {

    //Add the message content for Test Contacts dynamically
    const dynCon = `
        <div id="dynContent">
            <div id="headline_content" class="headline">
                <div class="profile_pic_container ppc_content">
                    <img src="images/num${testContactID}.png" class="profile_pic">
                </div>
                <div class="name_container">
                    <p class="name_content"></p>
                </div>
            </div>

            <i id="popup_i_contacts" class="fas fa-ellipsis-v popup_icon"></i>
            <div id="popup_con_contacts" class="popup_content">
                <p id="delete_contact" class="popup_list">Delete Chat</p>
                <p class="popup_list">Report</p>
                <p class="popup_list">Block</p>
            </div>

            <div id="msg_content">
                <div class="messages"></div>
                <input class="enterMsg" type="text">
                <button class="msg_send_btn"><i class="fas fa-arrow-right"></i></button>
            </div>
        </div>    
    `;
    document.querySelector("#content").innerHTML = dynCon;

    document.querySelector(".name_content").textContent = document.querySelector(`#test_contact_${testContactID} .name_contacts`).textContent;
    popupContent();

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
        if (event.keyCode == 13) {
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

            //test_contact_msgs[testContactID-1].msgIndex.push(messageID);
            //test_contact_msgs[testContactID-1].contactIndex.push(testContactID);
            test_contact_msgs[testContactID-1].messages.push(enteredMsgValue);
            messageID++;

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


/*document.querySelector("#test_contact_2").onclick = function() {
    //Add the message content for Test Contact 2 dynamically
    const dynCon = `
        <div id="dynContent">
            <div id="headline_content" class="headline">
                <div class="profile_pic_container ppc_content">
                    <img src="images/num2.png" class="profile_pic">
                </div>
                <div class="name_container">
                    <p class="name_content"></p>
                </div>
            </div>

            <i id="popup_i_contacts" class="fas fa-ellipsis-v popup_icon"></i>
            <div id="popup_con_contacts" class="popup_content">
                <p id="delete_contact" class="popup_list">Delete Chat</p>
                <p class="popup_list">Report</p>
                <p class="popup_list">Block</p>
            </div>

            <div id="msg_content">
                <div class="messages"></div>
                <input class="enterMsg" type="text">
                <button class="msg_send_btn"><i class="fas fa-arrow-right"></i></button>
            </div>
        </div>    
    `;
    document.querySelector("#content").innerHTML = dynCon;

    document.querySelector(".name_content").innerHTML = "Test Contact 2";
    popupContent();

    //Go through the messages in Test Contact 2
    for (let i = 0; i < test_contact_msgs.length; i++) {
        const newMsgTag = document.createElement("p");
        const newMsg = document.createElement("mark");

        newMsg.textContent = test_contact_msgs[i];
        messageCSS(newMsgTag, newMsg);
    }

    //Happens after click the msg_send_btn in Test Contact 2
    document.querySelector(".msg_send_btn").onclick = sendMessage;
    document.querySelector(".enterMsg").addEventListener("keydown", function(event) {
        if (event.keyCode == 13) {
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
            test_contact_msgs.push(enteredMsgValue);
            enteredMsg.value = "";
        }
    }
}*/  