//Function that add CCS styles for text messages
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