function changeBackground() {
    const selectedBackground = document.getElementById("backgroundChanger").value;
    document.body.style.backgroundImage = `url('img/skinsweb/${selectedBackground}')`;
}

function toggleSkinsBar() {
    const skinsBar = document.getElementById("skinsBar");
    if (skinsBar.style.display === "none" || skinsBar.style.display === "") {
        skinsBar.style.display = "flex";
    } else {
        skinsBar.style.display = "none";
    }
}

window.onload = function() {
    document.getElementById("skinsBar").style.display = "none";
};

const app = document.getElementById("app");
const webamp = new Webamp({
    initialTracks: [
        {
            metaData: {
                artist: "HOT GAYS LISTEN TO RADIO",
                title: "ÑAUUU",
                artwork: [
                    {
                        src: "img/hot.jpeg",
                        sizes: "96x96",
                        type: "image/jpeg"
                    }
                ]
            },
            url: "https://stream.zeno.fm/wlxnjivwlexvv", 
            duration: null
        }
    ],
    availableSkins: [
        { 
            url: "https://r2.webampskins.org/skins/eef71a7eb717f28ad837783708093064.wsz", 
            name: "Vocaloid - Hatsune Miku00"
        },
        { 
            url: "https://cdn.webampskins.org/skins/1ca6ac0acbc8b6e31faf3a8b3149c2ae.wsz", 
            name: "hellokitty"
        },
        { 
            url: "https://r2.webampskins.org/skins/e0426e1c5e3044dabfd0e83d6939b843.wsz", 
            name: "Spirit Designs - If I Had A Wish"
        },
        { 
            url: "https://cdn.webampskins.org/skins/deafde589b4ed3722205a76d8a9ab200.wsz", 
            name: "Jane Amp"
        },
        { 
            url: "https://cdn.webampskins.org/skins/983c4dbd8a0f0a7e339733f890fae0f4.wsz", 
            name: "Daria Amp.wsz"
        },
        { 
            url: "https://cdn.webampskins.org/skins/2a0453c5c41414a4e359f0797f47a830.wsz", 
            name: "cuteamp"
        },
        { 
            url: "https://cdn.webampskins.org/skins/d770a634cc1ab252cfb16c64f4f5f616.wsz", 
            name: "Zelda_Amp_3"
        },
        { 
            url: "https://cdn.webampskins.org/skins/16007b9bfd53ab4dd1f155dff0f204ca.wsz", 
            name: "Game_and_Watch_amp"
        },
        { 
            url: "https://cdn.webampskins.org/skins/c73114a3c7e71d9eb5d3f40e63aa237d.wsz", 
            name: "GIR_AMP"
        },
        { 
            url: "https://cdn.webampskins.org/skins/39718bb73b7dacd733784d6626927fdc.wsz", 
            name: "Yufo04"
        },
        { 
            url: "https://cdn.webampskins.org/skins/29fa893ddd16de01debad4061d57b0db.wsz", 
            name: "hellokitty2"
        },
        { 
            url: "https://cdn.webampskins.org/skins/4efb838c8460ba74925785cd3ffa31d6.wsz", 
            name: "weed"
        },
        { 
            url: "https://cdn.webampskins.org/skins/580ed76ffaa20948b39d6d9dca060655.wsz", 
            name: "evangelion"
        },
        { 
            url: "https://cdn.webampskins.org/skins/36ab6bc015487b7fc0239a02eb8a359b.wsz", 
            name: "Pip Girl"
        },
        
        { 
            url: "https://cdn.webampskins.org/skins/055e68f22dec7351f361ffef541ae293.wsz", 
            name: "PochaccoAmp"
        },
        { 
            url: "https://cdn.webampskins.org/skins/9eb612632a6cfb218b64e7ca15621faa.wsz", 
            name: "Pochacco - Purple skin"
        },
        { 
            url: "https://cdn.webampskins.org/skins/4786cdb7a5a0ae041b7147c9f8ea9ef0.wsz", 
            name: "sanrio"
        }
        ,
        { 
            url: "https://cdn.webampskins.org/skins/4786cdb7a5a0ae041b7147c9f8ea9ef0.wsz", 
            name: "sanrio"
        }
    ],
});

webamp.renderWhenReady(app).then(() => {
    if ('mediaSession' in navigator) {
        navigator.mediaSession.metadata = new MediaMetadata({
            title: 'HOT PEOPLE LISTEN TO',
            artist: 'HOT GAYS LISTEN TO RADIO',
            album: 'ÑAUUU',
            artwork: [
                { src: 'img/hot.jpeg', sizes: '96x96', type: 'image/jpeg' },
                { src: 'img/hot.jpeg', sizes: '128x128', type: 'image/jpeg' },
                { src: 'img/hot.jpeg', sizes: '192x192', type: 'image/jpeg' },
                { src: 'img/hot.jpeg', sizes: '256x256', type: 'image/jpeg' },
                { src: 'img/hot.jpeg', sizes: '384x384', type: 'image/jpeg' },
                { src: 'img/hot.jpeg', sizes: '512x512', type: 'image/jpeg' }
            ]
        });
    }
});

webamp.onClose(() => {
    webamp.play();
});

function deleteCookiesFromPage() {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=benjamingajardoro.github.io";
    }
}

function setupHammer() {
    const hammer = new Hammer(app);
    hammer.on("pan", function(event) {
        const winampWindow = document.querySelector(".webamp-window");
        if (winampWindow) {
            winampWindow.style.transform = `translate(${event.deltaX}px, ${event.deltaY}px)`;
        }
    });
}

setupHammer();

function centerWinamp() {
    const winampWindow = document.querySelector(".webamp-window");
    if (winampWindow) {
        winampWindow.style.transform = 'translate(-50%, -50%)';
        winampWindow.style.position = 'absolute';
        winampWindow.style.left = '50%';
        winampWindow.style.top = '50%';
    }
}

window.addEventListener("orientationchange", function() {
    centerWinamp();
});
