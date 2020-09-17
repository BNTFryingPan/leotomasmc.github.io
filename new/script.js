var ibr = {
    "header": "Idle Battle Royale",
    "desc": "A Multiplayer Idle game with lootboxes",
    "url": "https://leotomasmc.github.io/ibr"
}

var ibr_beta = {
    "header": "Idle Battle Royale",
    "desc": "Beta- IBR Test branch, currently more stable than normal",
    "url": "https://leotomasmc.github.io/ibr-beta"
}

var bcdm = {
    "header": "Bongo.cat Dark Mode",
    "desc": "Fork of bongo.cat but with a dark theme",
    "url": "https://leotomasmc.github.io/bongo-cat/index.html"
}

var brigadierjs = {
    "header": "Brigadier.js",
    "desc": "A JavaScript implementation of Mojang's Brigader command parser and dispatcher",
    "url": "https://github.com/LeotomasMC/brigadier-js"
}

var ssbump = {
    "header": "SSBU Music Player",
    "desc": "A Music Player in node.js that is designed to have a lot of functionality, and looks like the music player in Smash Ultimate",
    "url": "https://github.com/LeotomasMC/ssbu-music-player"
}

var twitchgolf = {
    "header": "Twitch Golf",
    "desc": "A Twitch interactive game where the streamer is trying to play golf, but chat cant allow that to happen",
    "url": "https://github.com/thederpymemesquad/twitch-golf"
}

var tdmb = {
    "header": "TheDerpyMemeBot",
    "desc": "A discord and twitch chat bot",
    "url": "https://leotomasmc.github.io/tdmb"
}

var pycc = {
    "header": "Click Clicker",
    "desc": "A not at all complete and abandoned idle game in python",
    "url": "https://leotomasmc.github.io/clickclicker"
}

var ttvcolor = {
    "header": "Twitch Random Color Bot",
    "desc": "Changes your name color on Twitch when you send a message",
    "url": "https://github.com/LeotomasMC/Twitch-Color-SelfBot"
}

var rlbmscript = {
    "header": "Rocket League Bakkes Mod Launch script",
    "desc": "A batch script to launch Bakkes Mod and Rocket League at the same time",
    "url": "https://gist.github.com/LeotomasMC/e335632e21739bfcc8e383d62f3c7975"
}

var coasbot = {
    "header": "Twitch Plays Car On A Stick",
    "desc": "exactly what it sounds like",
    "url": "https://gist.github.com/LeotomasMC/f78d791978222bf00db0815609f1d278"
}

var projects = [ibr, ibr_beta, bcdm, brigadierjs, ssbump, twitchgolf, tdmb, pycc, ttvcolor, rlbmscript, coasbot]

function gotoUrl(url) {
    window.location.href = url;
}

window.onload = function() {
    var titles = new Array(
        'idk',
        'memes are great',
        'why are you reading this?');
    
    var title = titles[parseInt(Math.random() * titles.length)];
    document.getElementById('page-title').innerHTML = title;

    Math.random()
    document.documentElement.style.setProperty("--color-text", "rgb(" + (Math.floor(Math.random()*200)+55) + ", " + (Math.floor(Math.random()*255)+55) + ", " + (Math.floor(Math.random()*255)+55) + ")")

    projList = document.getElementById('project-list')
    //var pdiv,phead,pbody,pclick;
    var inhtml = ""
    console.log('row start')
    for (prj in projects) {
        tp = projects[prj];

        /*pdiv,phead,pbody,pclick = null;
        pdiv = document.createElement('div');
        phead = document.createElement('span');
        pbody = document.createElement('div');
        
        phead.innerHTML = tp["header"];
        phead.classList.add('project-header')
        console.log(tp['header'])
        pbody.innerHTML = tp['desc'];
        pbody.classList.add('project-details')
        pclick = new Function('gotoUrl("' + tp['url'] + '")')
        pdiv.onclick = pclick
        //console.log(pdiv.onclick)
        pdiv.classList.add('project')

        pdiv.appendChild(phead);
        pdiv.appendChild(document.createElement("hr"));
        pdiv.appendChild(pbody);

        projList.appendChild(pdiv);*/
        if (prj % 4 == 0) {
            inhtml += "</div><div class='project-list-row'>"
        }
        inhtml += "<div class='project' onclick='gotoUrl(\"" + tp['url'] + "\")'><span class='project-header'>" + tp['header'] + "</span><hr><div class='project-details'>" + tp['desc'] + "</div></div>"
        
    }
    projList.innerHTML = inhtml;
}