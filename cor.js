//exports.run = (client, message, args) => {

let cores = {
    black : '403662081762656257', // : Preto
    blue : '403662254224179200', // : Azul
    pink : '403661565766664195', // : Rosa
    red : '403662715253555201', // : Vermelho
    cyano : '403661849989742592', // : Ciano
    purple : '403661662659280896', // : Roxo
    green : '403661728099074063', // : Verde
    yellow : '403262655067979783', // : Amarelo
    orange : '403662329000230922' // : laranja
},
    raised = true, //(message.channel.id == client.guilds.get("399756948951662592").channels.get("403664026703233024").id)
    content = 'black'; // message.content

    console.log(cores[content])

/*
    if (cores.includes(content) && raised) {
        message.member.addRole(content);
        message.member.removeRoles(content.map((role) => {
            if (role.name == content) return;
            return role;
        }))
        message.reply("**Cor setada! :star2:**")
    }
*/

//}
