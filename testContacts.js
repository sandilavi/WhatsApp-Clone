//Functions that button is clicked in the content section for A and B contacts
function messageCSSForAandB(newMsg) {
    const messages = document.querySelector(".messages");
    messages.appendChild(newMsg);

    newMsg.style.backgroundColor = "red";
    newMsg.style.margin = "10px";
}


const contactA_msgs = [];
const contactB_msgs = [];

document.querySelector("#contactA").onclick = function() {
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

            <div id="msg_content">
                <div class="messages"></div>
                <input class="enterMsg" type="text">
                <button class="btn">B</button>
            </div>
        </div>    
    `;
    document.querySelector("#content").innerHTML = dynCon;

    for (let i = 0; i < contactA_msgs.length; i++) { //Go through the messages in contactA
        const newMsg = document.createElement("p");
        newMsg.textContent = contactA_msgs[i];
        messageCSSForAandB(newMsg);
    }
    document.querySelector(".btn").onclick = function() {
        const enteredMsg = document.querySelector(".enterMsg").value;

        const newMsg = document.createElement("p");
        newMsg.textContent = enteredMsg;
        messageCSSForAandB(newMsg);

        contactA_msgs.push(enteredMsg);
    }

    document.querySelector(".name_content").innerHTML = "Test Contact 1";
}

document.querySelector("#contactB").onclick = function() {
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

            <div id="msg_content">
                <div class="messages"></div>
                <input class="enterMsg" type="text">
                <button class="btn">B</button>
            </div>
        </div>    
    `;
    document.querySelector("#content").innerHTML = dynCon;

    for (let i = 0; i < contactB_msgs.length; i++) { //Go through the messages in contactB
        const newMsg = document.createElement("p");
        newMsg.textContent = contactB_msgs[i];
        messageCSSForAandB(newMsg);
    }
    document.querySelector(".btn").onclick = function() {
        const enteredMsg = document.querySelector(".enterMsg").value;

        const newMsg = document.createElement("p");
        newMsg.textContent = enteredMsg;
        messageCSSForAandB(newMsg);

        contactB_msgs.push(enteredMsg);
    }

    document.querySelector(".name_content").innerHTML = "Test Contact 2";
}  