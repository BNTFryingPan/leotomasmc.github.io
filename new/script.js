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

var projects = [ibr, ibr_beta, bcdm, tdmb, pycc, ttvcolor]

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