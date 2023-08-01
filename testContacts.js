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
        const newMsgTag = document.createElement("p");
        const newMsg = document.createElement("mark");

        newMsg.textContent = contactA_msgs[i];
        messageCSS(newMsgTag, newMsg);
    }
    document.querySelector(".btn").onclick = function() {
        const enteredMsg = document.querySelector(".enterMsg").value;
        const newMsgTag = document.createElement("p");
        const newMsg = document.createElement("mark");

        newMsg.textContent = enteredMsg;
        messageCSS(newMsgTag, newMsg);
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
        const newMsgTag = document.createElement("p");
        const newMsg = document.createElement("mark");

        newMsg.textContent = contactB_msgs[i];
        messageCSS(newMsgTag, newMsg);
    }
    document.querySelector(".btn").onclick = function() {
        const enteredMsg = document.querySelector(".enterMsg").value;
        const newMsgTag = document.createElement("p");
        const newMsg = document.createElement("mark");

        newMsg.textContent = enteredMsg;
        messageCSS(newMsgTag, newMsg);
        contactB_msgs.push(enteredMsg);
    }

    document.querySelector(".name_content").innerHTML = "Test Contact 2";
}  