const test_contact_1_msgs = [];
const test_contact_2_msgs = [];

document.querySelector("#test_contact_1").onclick = function() {
    //Add the message content for Test Contact 1 dynamically
    const dynCon = `
        <div id="dynContent">
            <div id="headline_content" class="headline">
                <div class="profile_pic_container ppc_content">
                    <img src="images/num1.png" class="profile_pic">
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

    document.querySelector(".name_content").innerHTML = "Test Contact 1";
    popupContent();

    //Go through the messages in Test Contact 1
    for (let i = 0; i < test_contact_1_msgs.length; i++) {
        const newMsgTag = document.createElement("p");
        const newMsg = document.createElement("mark");

        newMsg.textContent = test_contact_1_msgs[i];
        messageCSS(newMsgTag, newMsg);
    }
    
    //Happens after click the msg_send_btn in Test Contact 1
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
            test_contact_1_msgs.push(enteredMsgValue);
            enteredMsg.value = "";
        }
    }
}


document.querySelector("#test_contact_2").onclick = function() {
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
    for (let i = 0; i < test_contact_2_msgs.length; i++) {
        const newMsgTag = document.createElement("p");
        const newMsg = document.createElement("mark");

        newMsg.textContent = test_contact_2_msgs[i];
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
            test_contact_2_msgs.push(enteredMsgValue);
            enteredMsg.value = "";
        }
    }
}  