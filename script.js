//Add Test Contacts Dynamically
const testContacts = `
    <div id="test_contact_1" class="contacts">
        <div id="contacts_list_img" class="profile_pic_container">
            <img src="images/num1.png" class="profile_pic_contacts">
        </div>
        <div class="name_container">
            <span class="name_contacts"> Test Contact 1 </span>
            <span class="last_msg"> This is a sample text. </span>
        </div>
        <hr>
    </div>
    
    <div id="test_contact_2" class="contacts">
        <div id="contacts_list_img" class="profile_pic_container">
            <img src="images/num2.png" class="profile_pic_contacts">
        </div>
        <div class="name_container">
            <span class="name_contacts"> Test Contact 2 </span>
            <span class="last_msg"> This is a sample text. </span>
        </div>
        <hr>
    </div>
`;
document.querySelector("#contacts_section").innerHTML = testContacts;

//Add Contacts Dynamically
const names = ["James", "Liam", "Ashraf", "Emma", "Olivia", "Benjamin", "Diana", "Kabir", "Isabella", "Christiana"];

for (let i = 1; i <= names.length; i++) {
    const addContacts = `
    <div id="contact${i}" class="contacts">
        <div id="contacts_list_img" class="profile_pic_container">
            <img src="images/download(${i}).jpg" class="profile_pic_contacts">
        </div>
        <div class="name_container">
            <span class="name_contacts"> ${names[i-1]} </span>
            <span class="last_msg"> This is a sample text. </span>
        </div>
        <hr>
    </div>
    `;
    document.querySelector("#contacts_section").innerHTML += addContacts;
}

//Happens after click the popup icon on contacts headline
const popup_content = document.querySelector("#popup_con_headline");
let count_popup = 0;

document.querySelector("#popup_i_headline").onclick = function() {
    if (count_popup % 2 == 0) {
        popup_content.style.display = "block";
        count_popup++;
    }
    else {
        popup_content.style.display = "none";
        count_popup++;
    }
}


const msgLogsForAllContacts = [];

function contentGenerate(contactID) {
    document.querySelector(`#contact${contactID}`).style.cursor = "pointer";

    document.querySelector(`#contact${contactID}`).onclick = function() {
    //Add the message content for the contact dynamically
    const headlineContent = `
        <div id="headline_content" class="headline">
            <div id="contacts_header_img" class="profile_pic_container">
                <img src="images/download(${contactID}).jpg" class="profile_pic_headline">
            </div>
            <div class="name_container">
                <p class="name_content"></p>
            </div>

            <div id="icons_content">
                <span class="material-icons"> search </span>
                <span class="material-icons" id="popup_i_contacts"> more_vert </span>
            </div>

            <div id="popup_con_contacts" class="popup_content">
                <span id="delete_contact"> Delete Chat </span>
                <span> Report </span>
                <span> Block </span>
            </div>
        </div>
    `;
    document.querySelector("#content").innerHTML = headlineContent;  
    document.querySelector(".name_content").textContent = document.querySelector(`#contact${contactID} .name_contacts`).textContent;
    messageContent();

    //Go through the messages in relavant contact
    for (let i = 0; i < msgLogsForAllContacts[contactID-1].messages.length; i++) {
        const newMsgTag = document.createElement("p");
        const newMsg = document.createElement("mark");

        newMsg.textContent = msgLogsForAllContacts[contactID-1].messages[i]; //Put the message to the mark tag
        messageCSS(newMsgTag, newMsg);
    }
    
    //Happens after click the deleteContact
    document.querySelector("#delete_contact").onclick = function() {
        const contactRemove = document.querySelector(`#contact${contactID}`);
        contactRemove.remove();

        const welcomeContent = `
            <div id="welcome_content">
                <img src="images/whatsapp_home.png">
                <span id="span1"> Download Whatsapp for Windows </span>
                <span id="span2"> Make calls, share your screen and get a faster experience when you download the Windows app. </span>
                <button> Get the app </button>
            </div>
        `;
        document.querySelector("#content").innerHTML = welcomeContent;
    }

    //Happens after click the msg_send_btn
    document.querySelector(".msg_send_btn").onclick = sendMessage; //User can send message using msg_send_btn
    document.querySelector(".enterMsg").addEventListener("keydown", function(event) { //User can send message using enter key

        if (event.keyCode == 13 && !event.shiftKey) { //When pressing enter key without pressing the shift key
            event.preventDefault(); //Preventing the default behaviour of enter key on textarea, which start on a new line
            sendMessage();
        } //When pressing both enter keys and shift keys simultaneously, dafault behaviour on textarea will happen(start on a new line)
    }
    );

    function sendMessage() {
        const enteredMsg = document.querySelector(".enterMsg");
        const enteredMsgValue = enteredMsg.value.trim(); //User can't send empty messages when using trim method

        if (enteredMsgValue != "") {
            const newMsgTag = document.createElement("p");
            const newMsg = document.createElement("mark");
            newMsg.style.whiteSpace = "pre-wrap"; //pre-wrap value allows to add multiple spaces between words

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
for (let contactID = 1; contactID <= names.length; contactID++) {
    contentGenerate(contactID);
}
