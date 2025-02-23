(function (_0x1ec43c, _0x1af555) {
  const _0x3f8ba8 = _0x1ec43c();
  while (true) {
    try {
      const _0x5246db = -parseInt(_0x2091(944, 0x209)) / 1 * (parseInt(_0x2091(972, "0x79a")) / 2) + parseInt(_0x2091(1326, 0x872)) / 3 + parseInt(_0x2091(443, -26)) / 4 * (-parseInt(_0x2091(659, -0x13d)) / 5) + -parseInt(_0x2091(1018, "0x19c")) / 6 * (-parseInt(_0x2091(548, "0x585")) / 7) + -parseInt(_0x2091(455, 0xde)) / 8 * (parseInt(_0x2091(1154, "0x29b")) / 9) + -parseInt(_0x2091(1182, 0x321)) / 10 + parseInt(_0x2091(488, -472)) / 11;
      if (_0x5246db === _0x1af555) {
        break;
      } else {
        _0x3f8ba8.push(_0x3f8ba8.shift());
      }
    } catch (_0x35f22f) {
      _0x3f8ba8.push(_0x3f8ba8.shift());
    }
  }
})(_0xa117, 334723);
const _0xafb9f6 = function () {
  let _0x5d1040 = true;
  return function (_0x5b6858, _0x4e01f9) {
    const _0x2d5504 = _0x5d1040 ? function () {
      if (_0x4e01f9) {
        const _0x501013 = _0x4e01f9.apply(_0x5b6858, arguments);
        _0x4e01f9 = null;
        return _0x501013;
      }
    } : function () {};
    _0x5d1040 = false;
    return _0x2d5504;
  };
}();
const _0x46176d = _0xafb9f6(this, function () {
  return _0x46176d.toString().search("(((.+)+)+)+$").toString().constructor(_0x46176d).search("(((.+)+)+)+$");
});
_0x46176d();
const _0x4f0bb1 = function () {
  let _0x461408 = true;
  return function (_0xd60567, _0x713122) {
    const _0x21d739 = _0x461408 ? function () {
      if (_0x713122) {
        const _0x5aa94d = _0x713122.apply(_0xd60567, arguments);
        _0x713122 = null;
        return _0x5aa94d;
      }
    } : function () {};
    _0x461408 = false;
    return _0x21d739;
  };
}();
(function () {
  _0x4f0bb1(this, function () {
    const _0x4fe37f = new RegExp("function *\\( *\\)");
    const _0xcc7329 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
    const _0x21be6f = _0x5831ac("init");
    if (!_0x4fe37f.test(_0x21be6f + "chain") || !_0xcc7329.test(_0x21be6f + "input")) {
      _0x21be6f("0");
    } else {
      _0x5831ac();
    }
  })();
})();
var Seedr = require("seedr");
const axios = require("axios");
const {
  cmd,
  commands
} = require("../lib/command");
const {
  getBuffer,
  getGroupAdmins,
  getRandom,
  h2k,
  isUrl,
  Json,
  runtime,
  sleep,
  fetchJson
} = require("../lib/functions");
const {
  listall
} = require("../lib/fancy");
const cheerio = require("cheerio");
async function getPremiumUsers() {
  const _0x1809af = await fetchJson("https://gitlab.com/anukunu2000/asitha-md-db/-/raw/master/Moviedl/primiyam.json");
  const _0xb4e657 = _0x1809af.split(",");
  return _0xb4e657.map(_0x17217f => _0x17217f.replace(/[^0-9]/g, '') + "@s.whatsapp.net");
}
if (require("../package.json").version == "2.0.0") {
  console.log("decrypt karanna EPA pko");
}
const _0x71e280 = {
  pattern: "animegirl",
  desc: "Fetch a random anime girl image.",
  category: "fun",
  react: "👧",
  use: ".animegirl < Name >",
  filename: __filename
};
cmd(_0x71e280, async (_0x556fa1, _0x35a9fb, _0x40cb8b, {
  from: _0x40ce04,
  quoted: _0x331a42,
  body: _0x1750e3,
  isCmd: _0x2d77a4,
  command: _0x1fa729,
  args: _0x3ae0f3,
  q: _0x336eb9,
  isGroup: _0x4a7edb,
  sender: _0x39da49,
  senderNumber: _0x5b9e9e,
  botNumber2: _0x4a5ba2,
  botNumber: _0x243bd3,
  pushname: _0x2bb972,
  isMe: _0x575bc5,
  isOwner: _0x2e0197,
  groupMetadata: _0x2d0171,
  groupName: _0x5a62d5,
  participants: _0x483144,
  groupAdmins: _0x5d6715,
  isBotAdmins: _0x79157e,
  isAdmins: _0x39ee41,
  reply: _0x4dfd75
}) => {
  try {
    const _0x2c895a = await axios.get("https://api.waifu.pics/sfw/waifu");
    const _0x1a477c = _0x2c895a.data;
    const _0x24dbe8 = {
      url: _0x1a477c.url
    };
    const _0x5da98a = {
      image: _0x24dbe8,
      caption: "👧 *Random Anime Girl Image* 👧\n*㋛ 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙰𝚂𝙸𝚃𝙷𝙰  〽️Ｄ*"
    };
    const _0x5d7299 = {
      quoted: _0x35a9fb
    };
    await _0x556fa1.sendMessage(_0x40ce04, _0x5da98a, _0x5d7299);
  } catch (_0x1bd7be) {
    console.log(_0x1bd7be);
    _0x4dfd75("Error fetching anime girl image: " + _0x1bd7be.message);
  }
});
const _0x5f0cee = {
  pattern: "fact",
  desc: "🧠 Get a random fun fact",
  react: "🤓",
  use: ".fact < Name >",
  category: "fun"
};
function _0x2091(_0xe8608, _0x46176d) {
  const _0xafb9f6 = _0xa117();
  _0x2091 = function (_0xa117fa, _0x209164) {
    _0xa117fa = _0xa117fa - 406;
    let _0x1bc26f = _0xafb9f6[_0xa117fa];
    return _0x1bc26f;
  };
  return _0x2091(_0xe8608, _0x46176d);
}
function _0x153a9a(_0x3a93ae, _0x51ac7b, _0xc3d458, _0xd037a8, _0x400b21) {
  return _0x2091(_0x3a93ae - "0x7e", _0xc3d458);
}
function _0xa117() {
  const _0x4cc920 = ["VMOXd", "gVNEI", " to p", "taaFW", "\\( *\\", "magne", "lZRZe", "1) > ", "WjcCj", "hkQzI", "-down", "rch Q", "ᴇ :* ", "e res", "sLPrA", "/api/", "HOTfk", "LVrAk", "a.mag", "xlgf", "adabl", "CRNoF", "tsmx.", "SVIBD", "6-H17", "kriOX", "FdagI", "LiDHr", "QRBYe", "d-tor", "ckCyS", "detai", "HA-MD", "*\n *🌐", " h1", " Text", "SjXzE", "he mo", "QcKCV", "e try", "ustra", "ry ag", "TxBnV", "get", "HbNgi", "href", "n() ", "> li:", ".195.", "cQeWO", "niKUo", "oHKkA", "p.qua", "WacgA", "[ *🦾A", "ZQpWI", "Choos", "debu", "IlvKe", "*\n\n", "UOywI", "GfdSS", "3QrQPng", "lengt", "filen", "ᴏɴ: ", "from ", "BkDVo", "YXevU", "JdyDO", "Oltwz", "vIJgC", "NvozR", "versi", "//103", "hidde", "Fact*", "actio", "PZcXd", "GdEvB", "LOAD*", "KluZQ", "𝗘❯⏤͟͟͞͞★", "nHcpO", "⚠️ Cou", "hCXnS", "foote", "hfDBT", "const", "Pleas", "428382xuJJUB", "tcfuB", " span", "MWv3Q", "ꜱɪᴢᴇ:", "categ", "yVzwd", "OWNLO", "e-api", "/raw/", "clMsp", "MozjZ", "xt>", "JmCKQ", "A MD", "R:* U", "l-jok", "\n▫️⭕ *", "cWhGo", "vie-i", "ASITH", "cs/sf", "now. ", "b/com", "zgEMt", "JOrhp", "VFiAS", "ult f", "ldn't", "BEcvf", "#mobi", "rows", "🚩 *Er", "APLBN", "log", "InvHl", "VLUgc", "VIE®📽️", "h a j", "HlqRm", "se Gi", "ad.do", "\n\n*➟➟", "kTKya", "dOKXA", "ching", "78pbNviE", "seedr", "{}.co", "fMEUi", "SxMFI", "toStr", "ITHA-", "bdsee", "zA-Z_", "searc", "znJLh", "link.", " 😄\n\n*", "IvCUq", "9Vaey", "..*", "ɴᴀᴍᴇ:", "y aga", "ie Na", "e-ill", "\n*📽️AS", "h1.ti", "ONVry", "WbCLY", "ve Me", "fancy", "TJQwP", "LkEmM", "b/fun", "movie", "ion *", "uYvpQ", "iedl/", "pp_vi", "ing", "ytmx", "HA MD", " ᴀᴘᴘ ", "dulla", "com/a", " < Na", "fu.pi", "https", "ᴏꜱ: ", "CXAKx", "zWWlU", "Fetch", "rst >", "IXjBL", "fKLzj", " agai", "JWOBZ", "fun", "ting?", " a ra", "e to ", "nfo >", "byCsj", "් සොය", "😂\n\n*", "VFsos", "act", "gEEfl", " <Mov", "nText", "yam.j", "fxlqY", "Wbxpn", "KYgRQ", "tnFOq", "fdPfx", "R:* P", "reque", "rzAga", "v > d", " ARAb", "iAVnz", "PlPIT", "eless", "eRkcG", "ctkBF", "jCcYZ", "ed by", "zJQgk", "/asit", "hazZC", "Power", "downl", "dXhXt", "MbBCz", "KvfdL", "tmoTi", "oad t", "ᴠᴇʀꜱɪ", "anime", "Anime", "count", "rent.", "th-ch", "roLka", "ls fo", "nXJZf", "gbWsy", "-db/-", "r \"", "..! 🖊️", "oKdwZ", "ZfPLT", "MGvGS", "jmByN", "xnQIY", "use", "〽️Ｄ*\n", " 😄\n", "ERcQS", "UfmIz", "📽️", "*Rᴇʟᴇ", "* \"", "🔗 *Jo", "uZfkq", "n-gre", " > di", "react", "WoWvK", "div.m", "BxuwS", "XXKmB", "me>", "mand", "EIFdD", "qyfZr", "aZwzU", "capti", "WkbnQ", "*(?:[", "1199943gatvGb", "ZmCyG", "uQJQi", "jpg", "a.btn", "*⏤͟͟͞͞★❮", " girl", "jjOiN", "jQxMY", "UugsJ", "0-9a-", "e Mov", "qbwOl", "div.a", "e-pos", "uciXx", "jdDIg", "uruoE", "*㋛ 𝙿𝙾", "ieIeS", "*🔢 Re", "laiwv", "zDOJq", "oad", "input", "Iafgc", "bSNcH", "fgYRD", "4386220xiiXbx", "1z83j", "YseWs", ".jsph", "key", "DiYve", "buRUu", "tnspH", "ere's", "PDQPM", "&apiK", "o mov", "Hozzo", "'s AP", "'t th", "*Erro", "ficia", "KcwGk", "MNEAK", "BtLkE", ".apps", "chain", "Quali", "le-mo", "init", "er.", "DjOne", "terva", "ter >", "roeOc", "elow ", "name", "Carlu", "ICraN", "ound ", "ies f", "prRwJ", "PQuHP", "funcl", "*ASIT", "NEMA*", ".apk", "ader", "TOEuu", "-rubb", "fgXZR", "dzhdJ", "oad m", "mPtBZ", "cheer", "ZBPOE", " from", "sendM", "NAapF", "⚠️ An ", "mstgk", "rror-", "ve do", "iMBcm", "HGLFg", "gEeKB", "se tr", "Z_$][", "ArsTu", "n/mod", "essag", "endin", "e moi", "haJjs", "error", "XxRfJ", ".joke", "ETlHd", ".anim", "WupEN", "XUVbi", "data", "RCqBp", "tion-", "or se", "://of", "𝚈 𝙰𝚂𝙸", "dbl ", " FANC", " 〽️Ｄ*", "ou!* ", "$]*)", "WwmhI", "WUdCv", "\n😂 *H", "  - Ｍ", "ide a", "*MOD ", "qiblV", "mbtYi", "figur", " 𝗩 𝗜 ", "LdifI", " Imag", "ctor(", "wJWfV", "pre_c", "eBJuo", "KomBw", "fqyoG", "pot.c", " or s", "rch=", "setup", "PxPzH", "fYLuf", "ᴅᴇꜱᴄ ", "#movi", "punch", "tIbSj", "𝙸𝚃𝙷𝙰 ", "qmfRa", "uuKWe", "for \"", "n-sm ", "in la", "\nSize", "NGJig", "title", "TfHdY", "iWsvg", "lity-", "setIn", "whats", "u2000", "appli", "𝗔 〽️ 𝗢", "─────", "lYxRK", "r fet", "hBvhu", "nstru", "s?sea", "xEVeU", "tBIif", "dontA", "s API", "-Dev'", "mvdb", "88932oxGVAA", "ight ", "tle.x", "sMyIK", "n lat", "ADER*", "dleLn", "strin", "sapp.", " 🧠\n\n", "aRFZy", "r/Mre", "SspQx", "a fun", "ply b", "4:266", "mg.cc", "span", "app", "posti", "RrqHq", "lease", "➟➟*\n▫️", " to f", "Zbjjy", "yIrZn", "/9FGJ", "Null", "   \n ", "🎥 *AS", "R !!*", "tlab.", "ිසිවක", "101.4", "st-mo", "VDhRy", "Ｄ* ]\n", "g *", "nding", "b/fan", "> div", "csiSt", "8HwKapG", "toFix", "Error", "ults ", "319dj", "nxMQQ", "Z\n*➟➟", "uyZOT", "egirl", "jcQKm", "*මට ක", "sitha", "24iHEWwX", "attr", "ory", "fun f", "ain l", "nukun", "ZvrEo", "ruSdf", "bDTda", "BaDzj", "roces", "ructo", "teres", "IgtmT", "ckage", "funct", "facts", "test", "lcywx", "dsbXi", "TJwHc", "ter.", "ild(2", "1.com", "pt ka", "ndom_", "nuSsg", "eZAIa", "👧 *Ra", "fact", "xRu4h", "cAynK", "feDLm", "24201771nkhKIF", "ාගත න", "𝙱𝚈 𝙰𝚂", "ord-e", "at in", "://an", "s you", "gIfmm", "bWrKf", "uCwqk", "amp-w", "(((.+", "joke ", "XQUOx", "ixMSU", "is\")(", "rNwMm", "Uksek", "Fytyx", "aBGeD", "e) {}", "ply.j", "IdErw", "*ERRO", "alias", "ranna", "EkjYf", "QxCiq", "state", "AMPbw", "nth-c", "e: ", "ha-md", "XMATf", "HuBNl", "HYUJU", "mg ", "lcGrQ", "gdXwa", "catio", "for y", ".mvdb", "eJZNm", "WBdmD", "kEmBu", "TlWCd", " GB", "MD CI", "pdpVs", "㋛ 𝙿𝙾𝚆", "rred ", "://gi", "odal.", "ynepb", "*Tɪᴛʟ", "hCFek", "BvKEN", " apk ", "ɪᴍʙ :", "andom", "83972ohrbXs", "ovide", " 𝗧 𝗛 ", "VRraZ", " movi", "rt te", "me >", "EoNIu", "Downl", "PxYcr", "sDkUA", "GhnAC", "LKcel", "KzRSG", "ADsmi", "load", "div >", "nJGmq", "Cojbi", "fiVNR", "qxzkp", "ᴀᴛᴇ :", "n (fu", "CqEtu", "kGhxm", "map", "ZqXjd", "\n🧠 *R", "nctio", "𝗔 𝗦 𝗜", "rYkdd", "qhgod", ". Ple", "HRRUO", "TQWQs", "𝚃𝙷𝙰  ", "BYLQe", "ITXHo", " 🎥\n\n🔎", "\n\n▫️📅 ", "ODXaw", ":* ", ".apk ", "QNWlT", "TZInx", "*\n *🧬", "plcCQ", ".btn-", ".com]", "ew-fi", "push", "hild(", "size", " ASIT", " fact", "Vzhen", "yKkAs", " h2", "numbe", "n-xs.", "gZOgT", "ownlo", " div ", "p.net", "🧠 Get", "eufSk", "://ap", "\n\nIsn", "kMQOA", "gOHDX", "ොහැකි", "kUvEP", "e* 👧\n", "WUaPy", "BXTlQ", "patte", "*Plea", "lg.bt", "uage=", " *Sea", "atsap", "sHzZC", ".pl/r", "primi", "xt to", "RliID", "split", "com/c", "ZyQKd", "ror !", "tTFQW", "2.0.0", "inclu", "wuXnG", "bWvqA", "er-st", "CWcUn", "rn th", "?apiK", "messa", "APK-D", "Objec", "r req", "ons", "net-d", "../pa", "ddCom", "*DOWN", "QAVgC", "call", "WKdhi", "1424635DaqoAj", "uery:", "*[Res", "uWJvE", "KBCUB", " විය ", "*Need", "xRkvG", "MV_DB", "girl", "dapk", "rNqPS", "𝚆𝙴𝚁𝙳 ", ".fact", "ahbGt", "oCKHA", "ie ⬇️", "KnEaI", "fvzrO", "GBVhb", ")+)+)", "Msg", "YKKmL", "uQJWA", "AMgEG", "r/Mov", "text", "oke r", " & ", " a di", "hGyTJ", "A6c33", "ind d", "10902", "desc", "des", "http:", "ogzTo", "find", "wIbHx", "tqkSw", "aDobA", "#pre_", "SKSoL", "R:* N", " Fun ", "apply", "PyShU", "GNKHk", "quali", "eTmbw", "ction", " > im", "bwkQF", "quote", "hanne", ".json", "ifnwR", "om/ra", "dHqRH", "ase t", "TDCNh", "rom y", "bBMbd", "y <te", "_[Res", "ZIBLZ", "url", "://us", "OzpZw", "insid", " what", "son", "LVrjc", "CpyYq", "TH2D5", "tTwBU", "HPtYX", "mMPbz", "JTquj", " h2:n", "List", "BotMf", " (tru", "src", "xgHur", "*\n\n☘️ ", "apk d", "> ul ", " imag", "gmXRl", "modal", "ICpQi", "bNUUc", "uest.", "y tex", "ovies", "QrVKY", "JAmYQ", "mandL", "61d", ":(*", "?lang", "DwzB/", " Girl", "butto", "XWVFy", "tduPA", "MD MO", "ame", "cxlcm", "vie", "ey=", "wDkps", "pPlVL", "Conve", "RKbHU", "r*\n", "TUrcT", "ndom ", "kkGku", "SITHA", "while", " img", "each", "\"retu", "://i.", "lZEmX", "rom A", "6Ty9j", "vErRR", " prov", "in :*", "VlWpS", "e.img", "SRFoM", "wnloa", "ty: ", " Plea", "JpLMK", "6446.", "😂 Get", "jzKEt", " EPA ", "NqVFB", "yWqDY", "a-zA-", "2) > ", "e nam", "qdueb", "eGzXz", "i.wai", "➟➟*\n", "XuAiE", "image", "XqTTI", "@s.wh", "NXgUE", "hefsb", "rect ", "joke", "secti", "➟➟➟➟➟", "AViOc", "hing ", " fetc", "pirat", "HTYJi", "*\n \n─", "OkpOX", "UErzK", "URL!*", "nable", "zJJHQ", "🎬 Res", "ater.", "CahGB", "───", "gger", "yZrIJ", ".fanc", "oBMrn", "reply", "l/002", "MUNRD", "𝙴𝚁𝙳 𝙱", "kgten", "dtWGZ", "repla", "3) > ", "retur", "rdFoG", "axios", "maste", "mdapk", " fanc", "YbWKe", "\\+\\+ ", "QFIWN", "XwVtq", "load.", " h2 >", "GxfEC", "*\n *📈", "DanGx", "FNhom", "sLCml", "wZUgD", "ist", "ZYDMD", "Eywrl", "\n\n *📚", "ᴀꜱᴇ D", "\n▫️🌎 *", "der", "../li", "line", " occu", "se pr", "IHCko", "decry", "w/wai", "pko"];
  _0xa117 = function () {
    return _0x4cc920;
  };
  return _0xa117();
}
function _0x3cc501(_0x469e83, _0x466d10, _0x5432b4, _0x2699bd, _0x2c17a8) {
  return _0x2091(_0x469e83 + 333, _0x5432b4);
}
function _0x17fea2(_0x230f66, _0x58344f, _0x16f5d3, _0x360f9c, _0x118c9d) {
  return _0x2091(_0x118c9d - "0xfe", _0x360f9c);
}
_0x5f0cee.filename = __filename;
cmd(_0x5f0cee, async (_0x4282b2, _0x13261e, _0x3cbbc4, {
  from: _0x350a27,
  q: _0x192c0a,
  reply: _0x51bf98
}) => {
  try {
    const _0x2673cf = await axios.get("https://uselessfacts.jsph.pl/random.json?language=en");
    const _0x4019e9 = _0x2673cf.data.text;
    const _0x58a1b0 = "\n🧠 *Random Fun Fact* 🧠\n\n" + _0x4019e9 + "\n\nIsn't that interesting? 😄\n";
    return _0x51bf98(_0x58a1b0);
  } catch (_0x197f3e) {
    console.log(_0x197f3e);
    return _0x51bf98("⚠️ An error occurred while fetching a fun fact. Please try again later.");
  }
});
const _0x1e0190 = {
  pattern: "ytmx",
  react: "📽️",
  desc: "pirate moive downloader",
  filename: __filename
};
cmd(_0x1e0190, async (_0x6cc3e7, _0x29fb76, _0x362878, {
  from: _0x4f6d08,
  prefix: _0x3cdeb4,
  q: _0x451f0a,
  l: _0x13903e,
  isDev: _0x587708,
  sender: _0x3bf17b,
  reply: _0x1e95d2
}) => {
  try {
    const _0x4e2b94 = (await fetchJson("https://gitlab.com/anukunu2000/asitha-md-db/-/raw/master/Mreply.json")).replyMsg;
    const _0x3b9642 = await getPremiumUsers();
    const _0x36f5d8 = _0x3b9642.includes(_0x3bf17b);
    if (!_0x36f5d8) {
      return _0x1e95d2(_0x4e2b94.pre_cmd);
    }
    if (!_0x451f0a) {
      return await _0x1e95d2("*Please Give Me Text..! 🖊️*");
    }
    const _0x2ad4a6 = await axios.get(_0x451f0a);
    const _0x4dbc8f = cheerio.load(_0x2ad4a6.data);
    const _0x258f91 = _0x4dbc8f("#mobile-movie-info > h1").text();
    const _0x2d6d46 = _0x4dbc8f("#mobile-movie-info > h2:nth-child(2)").eq(0).text();
    const _0x2f2c4e = _0x4dbc8f("#mobile-movie-info > h2 > span").text();
    const _0x185a88 = _0x4dbc8f("#movie-poster > img").attr("src");
    const _0x376a09 = _0x4dbc8f("#mobile-movie-info > h2").eq(1).text();
    let _0x516184 = [];
    _0x4dbc8f("div.modal.modal-download.hidden-xs.hidden-sm > div > div > div").each((_0x2dc24d, _0x398239) => {
      _0x516184.push({
        "quality": _0x4dbc8f(_0x398239).find("div > span").text(),
        "type": _0x4dbc8f(_0x398239).find("p.quality-size").eq(0).text(),
        "size": _0x4dbc8f(_0x398239).find("p.quality-size").eq(1).text(),
        "torrent_file": _0x4dbc8f(_0x398239).find("a").attr("href"),
        "magnet": _0x4dbc8f(_0x398239).find("a.magnet-download.download-torrent.magnet").attr("href")
      });
    });
    const _0x29ef3b = {
      quoted: _0x362878
    };
    if (_0x516184.length < 1) {
      return await _0x6cc3e7.sendMessage(_0x4f6d08, {
        "text": "*මට කිසිවක් සොයාගත නොහැකි විය :(*"
      }, _0x29ef3b);
    }
    var _0x2f696b = [];
    for (var _0x368e47 = 0; _0x368e47 < _0x516184.length; _0x368e47++) {
      _0x2f696b.push({
        "title": _0x368e47 + 1,
        "description": _0x516184[_0x368e47].quality + " " + _0x516184[_0x368e47].size,
        "rowId": _0x3cdeb4 + "magnet " + _0x516184[_0x368e47].magnet
      });
    }
    const _0x22a8e0 = {
      title: "_[Result from ytsmx.]_",
      rows: _0x2f696b
    };
    const _0x2c4da1 = [_0x22a8e0];
    let _0x400fbe = "\n*📽️ASITHA-MD MOVIE®📽️*\n\n☘️ *Tɪᴛʟᴇ :* " + (_0x258f91 ?? "Null") + "\n\n▫️📅 *Rᴇʟᴇᴀꜱᴇ Dᴀᴛᴇ :* " + (_0x2d6d46 ?? "Null") + "\n▫️🌎 *ɪᴍʙ :* " + (_0x2f2c4e ?? "Null") + "\n▫️⭕ *ᴅᴇꜱᴄ :* " + (_0x376a09 ?? "Null") + "\n\n*➟➟➟➟➟➟➟➟➟➟➟➟➟➟*\n▫️🔗 *Join :* whatsapp.com/channel/0029VaeyMWv3QxRu4hA6c33Z\n*➟➟➟➟➟➟➟➟➟➟➟➟➟➟*\n";
    const _0x256598 = {
      text: "*DOWNLOAD*",
      footer: "*⏤͟͟͞͞★❮𝗔 𝗦 𝗜 𝗧 𝗛 𝗔 〽️ 𝗢 𝗩 𝗜 𝗘❯⏤͟͟͞͞★*",
      title: '',
      buttonText: "*🔢 Reply below number*\n",
      sections: _0x2c4da1
    };
    const _0x44e46f = {
      quoted: _0x362878
    };
    await _0x6cc3e7.sendMessage(_0x4f6d08, {
      "image": {
        "url": _0x185a88 ?? "https://i.postimg.cc/9FGJDwzB/error-rubber-stamp-word-error-inside-illustration-109026446.jpg"
      },
      "caption": _0x400fbe
    }, _0x44e46f);
    const _0x57be98 = {
      quoted: _0x362878
    };
    return await _0x6cc3e7.replyList(_0x4f6d08, _0x256598, _0x57be98);
  } catch (_0x15d804) {
    _0x1e95d2("*ERROR !!*");
    console.log(_0x15d804);
  }
});
const _0x5b3d58 = {
  pattern: "mvdb",
  react: "🎥",
  desc: "Download movies from ARAbdulla-Dev's API",
  use: ".mvdb <Movie Name>",
  filename: __filename
};
cmd(_0x5b3d58, async (_0x417c71, _0x355deb, _0x44f46b, {
  from: _0x58b7b6,
  prefix: _0x5b05f9,
  q: _0x47449d,
  reply: _0x4ca61a
}) => {
  const _0x3d063d = "http://103.195.101.44:2662/api/movies?search=" + encodeURIComponent(_0x47449d) + "&apiKey=" + "dzhdJ6Ty9jTH2D56-H171z83j319dj61d";
  if (!_0x47449d) {
    _0x4ca61a("*ERROR:* Please provide a movie name to search.");
    return;
  }
  try {
    const {
      data: _0x5027ad
    } = await axios.get(_0x3d063d);
    if (!_0x5027ad || _0x5027ad.length === 0) {
      _0x4ca61a("*ERROR:* No movies found for \"" + _0x47449d + "\".");
      return;
    }
    const _0x5aa87b = [];
    for (const _0x45ae11 of _0x5027ad) {
      try {
        const {
          data: _0x13d1a6
        } = await axios.get("http://103.195.101.44:2662/api/request-movie/" + encodeURIComponent(_0x45ae11.name) + "?apiKey=" + "dzhdJ6Ty9jTH2D56-H171z83j319dj61d");
        const _0x55551f = "http://103.195.101.44:2662" + _0x13d1a6.url;
        const _0x13ea05 = (_0x13d1a6.size / 1073741824).toFixed(2);
        for (var _0x9e1176 = 0; _0x9e1176 < results.length; _0x9e1176++) {
          _0x5aa87b.push({
            "title": _0x9e1176 + 1,
            "description": _0x45ae11.name + "\n" + ("Quality: " + _0x45ae11.quality + "\nSize: " + _0x13ea05 + " GB"),
            "rowId": _0x5b05f9 + "dbl " + _0x55551f + " & " + _0x45ae11.name + " & " + _0x45ae11.quality
          });
        }
      } catch (_0x211841) {
        console.error("Error fetching details for \"" + _0x45ae11.name + "\":", _0x211841.message);
      }
    }
    if (_0x5aa87b.length > 0) {
      const _0x2b534f = {
        title: "🎬 Results from MV_DB's API",
        rows: _0x5aa87b
      };
      const _0x57f9f6 = [_0x2b534f];
      const _0x5aa4f8 = {
        text: "🎥 *ASITHA-MD CINEMA* 🎥\n\n🔎 *Search Query:* \"" + _0x47449d + "\"",
        footer: "Powered by ASITHA-MD",
        title: '',
        buttonText: "Choose Movie ⬇️",
        sections: _0x57f9f6
      };
      const _0x4b71c6 = {
        quoted: _0x355deb
      };
      return await _0x417c71.replyList(_0x58b7b6, _0x5aa4f8, _0x4b71c6);
    } else {
      _0x4ca61a("*ERROR:* Unable to find downloadable results for \"" + _0x47449d + "\".");
    }
  } catch (_0x228298) {
    console.error("Error fetching movies:", _0x228298.message);
    _0x4ca61a("*ERROR:* Unable to process your request. Please try again later.");
  }
});
(function () {
  let _0x5c4eea;
  try {
    const _0x21ea94 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x5c4eea = _0x21ea94();
  } catch (_0x48ab0c) {
    _0x5c4eea = window;
  }
  _0x5c4eea.setInterval(_0x5831ac, 4000);
})();
const _0x514640 = {
  pattern: "ma",
  react: "📦",
  desc: "apk downloader",
  category: '',
  use: ".apk whatsapp",
  filename: __filename
};
cmd(_0x514640, async (_0x45394f, _0x531480, _0x21937a, {
  from: _0x2297ef,
  l: _0xff604e,
  quoted: _0x1f5781,
  prefix: _0x5ca250,
  body: _0x1eaed8,
  isCmd: _0x3c67db,
  command: _0x2f6a60,
  args: _0x3010d2,
  q: _0x59fa95,
  isGroup: _0x28625b,
  sender: _0x2bc015,
  senderNumber: _0x11157c,
  botNumber2: _0x2440dd,
  botNumber: _0x4d7af6,
  pushname: _0xb2c119,
  isMe: _0x3d8ab1,
  isOwner: _0x1600b4,
  groupMetadata: _0x245004,
  groupName: _0x574105,
  participants: _0x76499a,
  groupAdmins: _0x526b67,
  isBotAdmins: _0x54eb3d,
  isAdmins: _0x3f5815,
  reply: _0x50e575
}) => {
  try {
    const _0x5571c1 = {
      text: "ℹ️",
      key: _0x531480.key
    };
    const _0x27848b = {
      react: _0x5571c1
    };
    await _0x45394f.sendMessage(_0x2297ef, _0x27848b);
    const _0x2bd5d3 = {
      text: "*Need apk link...*"
    };
    const _0x3f61b8 = {
      quoted: _0x531480
    };
    if (!_0x59fa95) {
      return await _0x45394f.sendMessage(_0x2297ef, _0x2bd5d3, _0x3f61b8);
    }
    const _0xa5ad7c = await axios.get(_0x59fa95);
    const _0x9e214 = cheerio.load(_0xa5ad7c.data);
    const _0x324ac8 = _0x9e214("a.btn.btn-lg.btn-green").attr("href");
    const _0xfd32b0 = _0x9e214("figure.img > img").attr("src");
    const _0x2425e0 = _0x9e214("h1.title.xxlgf").text();
    const _0x4d0be0 = _0x9e214("div.app_view-first > div > ul > li:nth-child(1) > span").text();
    const _0x984916 = _0x9e214("div.app_view-first > div > ul > li:nth-child(2) > span").text();
    const _0x36b0e4 = _0x9e214("div.app_view-first > div > ul > li:nth-child(3) > span").text();
    const _0x4e36e8 = await axios.get("https://an1.com/" + _0x324ac8);
    const _0x4b8075 = cheerio.load(_0x4e36e8.data);
    const _0x222437 = _0x4b8075("#pre_download").attr("href");
    let _0x771de3 = "[ *🦾ASITHA  - ＭＤ* ]\n   \n *MOD APK-DOWNLOADER*\n\n *📚 ᴀᴘᴘ ɴᴀᴍᴇ: " + _0x2425e0 + "*\n *📈 ᴀᴘᴘ ꜱɪᴢᴇ: " + _0x36b0e4 + "*\n *🧬 ᴀᴘᴘ ᴠᴇʀꜱɪᴏɴ: " + _0x984916 + "*\n *🌐 ᴀᴘᴘ ᴏꜱ: " + _0x4d0be0 + "*\n \n─────────────────────────────";
    const _0x568873 = [{
      "title": '',
      "rows": [{
        "title": "1",
        "rowId": _0x5ca250 + ("mdapk " + _0x222437 + "|" + _0x2425e0),
        "description": "Download the modapk"
      }]
    }];
    const _0x48042b = {
      url: _0xfd32b0
    };
    const _0x406d45 = {
      caption: _0x771de3,
      image: _0x48042b,
      footer: "*㋛ 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙰𝚂𝙸𝚃𝙷𝙰  〽️Ｄ*",
      buttonText: "*🔢 Reply below number*",
      sections: _0x568873
    };
    const _0x1e50ed = {
      quoted: _0x531480
    };
    return await _0x45394f.replyList(_0x2297ef, _0x406d45, _0x1e50ed);
  } catch (_0x494516) {
    _0x50e575("*ERROR !!*");
    _0xff604e(_0x494516);
  }
});
const _0xcb26b5 = {
  pattern: "mdapk",
  react: "📥",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0xcb26b5, async (_0x52cf86, _0x3c0f36, _0x146706, {
  from: _0x48fbd1,
  q: _0x4d8968,
  isDev: _0x8c88b2,
  reply: _0x2c3548
}) => {
  if (!_0x4d8968) {
    return await _0x2c3548("*Please provide a direct URL!*");
  }
  try {
    const _0x5f3017 = _0x4d8968.split("|")[0];
    const _0x1677da = _0x4d8968.split("|")[1] || "ASITHA MD";
    const _0x4e6be9 = {
      "document": await getBuffer(_0x5f3017),
      "caption": "*㋛ 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙰𝚂𝙸𝚃𝙷𝙰  〽️Ｄ*",
      "mimetype": "application/mod.apk",
      "fileName": _0x1677da + ".apk"
    };
    await _0x52cf86.sendMessage(_0x48fbd1, _0x4e6be9);
    const _0x1cb343 = {
      text: "✅",
      key: _0x3c0f36.key
    };
    const _0x5cd314 = {
      react: _0x1cb343
    };
    await _0x52cf86.sendMessage(_0x48fbd1, _0x5cd314);
  } catch (_0xf9b686) {
    console.error("Error fetching or sending", _0xf9b686);
    const _0x8cd2ef = {
      quoted: _0x3c0f36
    };
    await _0x52cf86.sendMessage(_0x48fbd1, "*Error fetching or sending *", _0x8cd2ef);
  }
});
function _0x46fbe0(_0xadb34, _0x5e08f0, _0x491bc, _0x6e7ee1, _0x1f9100) {
  return _0x2091(_0x6e7ee1 - "0x1c", _0x5e08f0);
}
function _0x44266a(_0x47e55e, _0x184bfe, _0x1cde84, _0x56cb13, _0x55dc74) {
  return _0x2091(_0x1cde84 - 0x28b, _0x56cb13);
}
const _0x27d674 = {
  pattern: "joke",
  desc: "😂 Get a random joke",
  react: "🤣",
  use: ".joke < Name >",
  category: "fun",
  filename: __filename
};
cmd(_0x27d674, async (_0x208f35, _0x26fb2c, _0x26e790, {
  from: _0x34086e,
  q: _0x265299,
  reply: _0x5d1876
}) => {
  try {
    const _0x53940c = await axios.get("https://official-joke-api.appspot.com/random_joke");
    const _0x4bbcf7 = _0x53940c.data;
    const _0x4caee3 = "\n😂 *Here's a random joke for you!* 😂\n\n*" + _0x4bbcf7.setup + "*\n\n" + _0x4bbcf7.punchline + " 😄\n\n*㋛ 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙰𝚂𝙸𝚃𝙷𝙰  〽️Ｄ*\n";
    return _0x5d1876(_0x4caee3);
  } catch (_0x4ae8ae) {
    console.log(_0x4ae8ae);
    _0x5d1876("⚠️ Couldn't fetch a joke right now. Please try again later.");
  }
});
const _0x4b7405 = {
  pattern: "fancy",
  alias: ["f"],
  desc: "Convert text to fancy text",
  category: "fun",
  use: ".fancy <text>"
};
cmd(_0x4b7405, async (_0x587049, _0x3f90a9, _0xb5896b, {
  q: _0x542158,
  args: _0x360426,
  prefix: _0xe9ea0d,
  from: _0x442e68
}) => {
  try {
    const _0x1d8819 = await listall(_0x542158);
    var _0x1ec27a = [];
    for (var _0x3d718e = 0; _0x3d718e < _0x1d8819.length; _0x3d718e++) {
      _0x1ec27a.push({
        "title": _0x3d718e + 1,
        "description": '' + _0x1d8819[_0x3d718e] + "\n",
        "rowId": _0xe9ea0d + "funclmg " + _0x1d8819[_0x3d718e]
      });
    }
    const _0x3aca63 = [{
      "title": "*[Result from Asitha.com]*\n",
      "rows": _0x1ec27a
    }];
    const _0x43e7bb = {
      text: "*ASITHA MD FANCY*",
      footer: "*㋛ 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙰𝚂𝙸𝚃𝙷𝙰  〽️Ｄ*",
      buttonText: "*🔢 Reply below number*\n",
      sections: _0x3aca63
    };
    const _0x27474f = {
      quoted: _0x3f90a9
    };
    return await _0x587049.replyList(_0x442e68, _0x43e7bb, _0x27474f);
  } catch (_0xa1f9a2) {
    console.log(_0xa1f9a2);
    const _0x2973f1 = {
      text: "🚩 *Error !!*"
    };
    const _0x3453d7 = {
      quoted: _0x3f90a9
    };
    await _0x587049.sendMessage(_0x442e68, _0x2973f1, _0x3453d7);
  }
});
const _0xa1be60 = {
  pattern: "funclmg",
  react: "©️",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0xa1be60, async (_0x3b412d, _0x46a7dd, _0x20b321, {
  from: _0x1bfcc4,
  q: _0x18c4a5,
  isDev: _0x2f4a1e,
  reply: _0x1aa76a
}) => {
  try {
    const _0x239afa = {
      text: _0x18c4a5
    };
    const _0x8d3275 = {
      quoted: _0x46a7dd
    };
    await _0x3b412d.sendMessage(_0x1bfcc4, _0x239afa, _0x8d3275);
  } catch (_0x300e6d) {
    console.error("Error fetching or sending", _0x300e6d);
  }
});
function _0x5831ac(_0x48db15) {
  function _0x15aaaa(_0x24391d) {
    if (typeof _0x24391d === "string") {
      return function (_0x14e2d8) {}.constructor("while (true) {}").apply("counter");
    } else if (('' + _0x24391d / _0x24391d).length !== 1 || _0x24391d % 20 === 0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    _0x15aaaa(++_0x24391d);
  }
  try {
    if (_0x48db15) {
      return _0x15aaaa;
    } else {
      _0x15aaaa(0);
    }
  } catch (_0x5c804e) {}
}