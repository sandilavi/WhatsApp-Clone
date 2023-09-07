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
        margin: 0px 10px 2px 10px;
        padding: 8px;
        max-width: 60%;
        white-space: pre-wrap;
    `;
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