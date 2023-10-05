//Function that add CCS styles for text messages
function messageCSSCommon(newMsgTag, newMsg) {
    newMsgTag.appendChild(newMsg); //This will append newMsg element(mark tag) to the newMsgTag element(p tag)
    const messages = document.querySelector(".messages");
    messages.appendChild(newMsgTag);

    newMsg.style.cssText = `
        color: white;
        font-family: 'Ubuntu', sans-serif;        
        font-size: 14px;
        background-color: #005c4b;
        border-radius: 8px;
        margin: 0px 10px 3px 10px;
        padding: 8px;
        max-width: 60%;
        white-space: pre-wrap;
        word-wrap: break-word;
    `; //break-word allows to wrap up to next line if too long to fit on one line

    /*newMsg.addEventListener("mouseover", function() {
        newMsg.style.backgroundColor = "#004739";
        newMsg.style.cursor = "pointer";
    });
    newMsg.addEventListener("mouseout", function() {
        newMsg.style.backgroundColor = "#005c4b";
    });

    newMsg.addEventListener("click", function() {
        const deletedMessage = "This message was deleted";
        const clickedMessageIndex = getMessageIndex(newMsg);
        newMsg.textContent = deletedMessage;
    
        console.log("Clicked Message Index:", clickedMessageIndex);
    
        // Assuming contactID and msgLogsForAllContacts are defined somewhere
        const contactIndex = contactID - 1;
    
        if (msgLogsForAllContacts[contactIndex].messages.length > clickedMessageIndex) {
            msgLogsForAllContacts[contactIndex].messages[clickedMessageIndex] = deletedMessage;
        }
    });
    
    // Function to get the index of the clicked message within its parent
    function getMessageIndex(messageElement) {
        const parent = messageElement.parentNode;
        return Array.from(parent.children).indexOf(messageElement);
    }*/
}

function messageCSS(newMsgTag, newMsg) {
    messageCSSCommon(newMsgTag, newMsg);
    newMsg.style.float = "right";
    newMsg.style.clear = "right"; //Clear property makes elements line by line(As float property doesn't do it)
}
function messageCSSForLeft(newMsgTag, newMsg) {
    messageCSSCommon(newMsgTag, newMsg);
    newMsg.style.float = "left";
    newMsg.style.clear = "left";
}

//Function that add the popup content on content headline
function popupContent() {
    const popup_content = document.querySelector("#popup_con_contacts");
    let count_popup = 0;

    document.querySelector("#popup_i_contacts").onclick = function() {
        if (count_popup % 2 == 0) {
            popup_content.style.display = "block";
            count_popup++;
        }
        else {
            popup_content.style.display = "none";
            count_popup++;
        }
    }
}

//Function that add the message content on content
function messageContent() {
    const msgContent = `
        <div id="msg_content">
            <div id="msg_container" class="messages"></div>
                
            <div class="enterMsg_container">
                <div id="icons_msgs">
                    <span class="material-icons"> emoji_emotions </span>
                    <span class="material-icons"> add </span>
                </div>
                <textarea class="enterMsg" type="text" placeholder="Type a message"></textarea>
                <span class="material-icons msg_send_btn"> send </span>
            </div>
        </div>
    `;
    document.querySelector("#content").innerHTML += msgContent;
    document.querySelector("#content").style.backgroundColor = "#0b141a";
    document.querySelector(".enterMsg").style.color = "white";
    popupContent();
}
