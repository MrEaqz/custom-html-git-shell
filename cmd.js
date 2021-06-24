let commandModule = {};
let commandCallBack = new Map();

/**
 * @param {string} cmd 
 * @param  {...any} args 
 */
 commandModule.registerCmd = (cmd, callback) => {
    let command = commandCallBack.get(cmd);
    if (command) {
        console.log("Already register")
    } else {
        commandCallBack.set(cmd, callback)
    }
}

/**
 * @param {string} cmd 
 * @param  {...any} args 
 */
commandModule.callCmd = (cmd, ...args) => {
    let command = commandCallBack.get(cmd);
    if (command) {
        command(cmd, ...args);
    } else {
        printResult(cmd, args, `MINGW64 : La commande '${cmd}'  n'est pas reconnue, tapez 'help' pour voir la liste des commandes disponibles.`);
    }
}

commandModule.getCommandList = () => {
    let commandArr = [];
    for (let key of commandCallBack.keys()) {
        commandArr.push(key);
    }
    return commandArr;
}

commandModule.registerCmd('market', (cmd, ...args) => {
    args = args[0];
    if (args.length == 0) {
        printResult(cmd, args, `~Market: Il manques des arguments.`);
    }
    switch (args[0]) {
        case "connect":
            if (args[1] == "test") {
                printResult(cmd, args, `~Market: Connexion sécurisé établie.`);
                hideTitle(true);
            } else {
            printResult(cmd, args, `~Market: Echec de la connexion sécurisé.`);
            }
            break;
        case "buy":
            printResult(cmd, args, `~Market: Achat d'une ${args[1]} réussi.`);
            break;
        case "close":
            printResult(cmd, args, `~Market: Fermeture de la session sécurisé.`);
            hideTitle(false);
            break;
    }
});

commandModule.registerCmd('cat', (cmd, ...args) => {
    args = args[0];
    if (args.length == 0) {
        printResult(cmd, args, `MINGW64 : Il manques des arguments.`);
    }
    switch (args[0]) {
        case "session.dat":
            printResult(cmd, args, `MINGW64 : Ceci est un session.dat`);
            break;
        case "paquet.txt":
            printResult(cmd, args, `MINGW64 : Ceci est un paquet.txt`);
            break;
        case "eaqz.txt":
            printResult(cmd, args, `MINGW64 : Ceci est un eaqz.txt`);
            break;
        case "malware.bat":
            printResult(cmd, args, `MINGW64 : Ceci est un malware.bat`);
            break;
    }
});

commandModule.registerCmd('exit', (cmd) => {
    hideTitle(false);
    printResult(cmd, '', `MINGW64 : Fermeture du/des processus`);
});

commandModule.registerCmd('ls', (cmd) => {
    printResult(cmd, '', `> session.dat | paquet.txt | eaqz.txt | malware.bat`);
});

commandModule.registerCmd('bones', (cmd) => {
    printResult(cmd, '', `> PTDR T KI`);
});

commandModule.registerCmd('help', (cmd) => {
    let cmds = commandModule.getCommandList();
    printResult(cmd, '', `MINGW64 : Voici la liste des commandes disponible : ${cmds.join(', ')}`);
});

commandModule.registerCmd('clear', (cmd) => {
    let container = document.getElementById('message-container');
    container.innerHTML= '';
});

commandModule.registerCmd('control', (cmd) => {
    printResult(cmd, '', `<code><span class="ascii" style="
    display:inline-block;
    white-space:pre;
    letter-spacing:0;
    line-height:1.4;
    "><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>@</span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span>
    <span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span>
    <span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>#</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span>
    <span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span>
    <span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span>
    <span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span> </span><span> </span><span> </span><span> </span><span> </span>
    <span> </span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span> </span><span> </span><span> </span><span> </span><span> </span><span>@</span><span>@</span><span>@</span><span>@</span><span> </span><span> </span><span> </span><span> </span><span> </span>
    <span> </span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>@</span><span>@</span><span>@</span><span>@</span><span> </span><span> </span><span> </span><span> </span><span> </span><span>@</span><span>@</span><span>@</span><span>@</span><span> </span><span> </span><span> </span><span> </span>
    <span> </span><span> </span><span> </span><span> </span><span> </span><span>@</span><span>@</span><span>@</span><span>@</span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>@</span><span>@</span><span>@</span><span>@</span><span> </span><span> </span><span> </span><span> </span>
    <span> </span><span> </span><span> </span><span> </span><span> </span><span>@</span><span>@</span><span>@</span><span>@</span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span> </span><span> </span><span> </span><span> </span><span> </span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span>
    <span> </span><span> </span><span> </span><span> </span><span> </span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span> </span><span> </span><span> </span><span> </span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span>
    <span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>@</span><span>@</span><span>@</span><span>@</span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span>
    <span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span>
    <span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>@</span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span>
    <span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span>
    <span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span>
    <span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span>@</span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span><span> </span>
    </span></code>`);
});