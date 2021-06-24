const input = document.getElementById("cmd");
input.addEventListener("keyup", event => {
  if (event.keyCode === 13) {
    event.preventDefault();
    let value = input.value;
    let splitValue = value.split(" ")
    let cmd = splitValue.shift();
    input.value = "";
    if (cmd.length !== 0) {
        commandModule.callCmd(cmd, splitValue);
    }
  }
});

/**
 * @param {string} cmd 
 * @param {array} args 
 * @param {string} text 
 * @param {string|null} user 
 * @param {string|null} terminal 
 * @param {string|null} namespace 
 * @param {string|null} branch 
 */
function printResult(cmd, args, text, user = `eaqz@DESKTOP-CONTROL`, terminal = 'MINGW64', namespace = `>~/Desktop/Control/darknet`, branch = '(master)') {
    if (!getTitleState()) {
        user = '';
        terminal = '';
        namespace = '';
        branch = '';
    }
    let argsList;
    if (args) {
        argsList = args.join(' ');
    } else {
        argsList = "";
    }
    let container = document.getElementById('message-container');
    let content = document.createElement('div');
    content.className = "message";
    content.innerHTML = `
    <p class="green">${user} </p>
    <p class="pink">${terminal}</p>
    <p class="yellow"${namespace}</p>
    <p class="blue">${branch}</p>
    <span>$ ${cmd} ${argsList}</span>
    <span>${text}</span>
    `;
    container.append(content);
    const megaContainer = document.getElementById('test');
    megaContainer.scrollTop = megaContainer.scrollHeight - megaContainer.clientHeight;
}

function getTitleState() {
    let inputTitle = document.getElementById('inputtitle');
    if (inputTitle.style.display == "none") {
        return false;
    } else {
        return true;
    }
}

/**
 * @param {bool} state 
 */
function hideTitle(state) {
    let inputTitle = document.getElementById('inputtitle');
    if (state) {
        inputTitle.style.display = "none";
    } else {
        inputTitle.style.display = "inline-block";
    }
}