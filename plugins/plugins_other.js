(function (_0xdd5192, _0x3fd867) {
  const _0x4c5f22 = _0xdd5192();
  while (true) {
    try {
      const _0x2fe97d = -parseInt(_0x5d31(450, -0x28)) / 1 * (parseInt(_0x5d31(210, -0x254)) / 2) + parseInt(_0x5d31(506, -0x17a)) / 3 + parseInt(_0x5d31(685, "0x2a9")) / 4 * (parseInt(_0x5d31(781, "0x174")) / 5) + -parseInt(_0x5d31(920, 0x331)) / 6 + parseInt(_0x5d31(241, -623)) / 7 * (parseInt(_0x5d31(965, "0x253")) / 8) + -parseInt(_0x5d31(636, -0xc7)) / 9 + parseInt(_0x5d31(622, "0x394")) / 10 * (parseInt(_0x5d31(411, -0xdb)) / 11);
      if (_0x2fe97d === _0x3fd867) {
        break;
      } else {
        _0x4c5f22.push(_0x4c5f22.shift());
      }
    } catch (_0x58bf9d) {
      _0x4c5f22.push(_0x4c5f22.shift());
    }
  }
})(_0x2b60, 921495);
const _0x366cdd = function () {
  let _0x509d30 = true;
  return function (_0x2a4171, _0x12d922) {
    const _0x5ce331 = _0x509d30 ? function () {
      if (_0x12d922) {
        const _0x29c8dd = _0x12d922.apply(_0x2a4171, arguments);
        _0x12d922 = null;
        return _0x29c8dd;
      }
    } : function () {};
    _0x509d30 = false;
    return _0x5ce331;
  };
}();
const _0x1df452 = _0x366cdd(this, function () {
  return _0x1df452.toString().search("(((.+)+)+)+$").toString().constructor(_0x1df452).search("(((.+)+)+)+$");
});
_0x1df452();
const _0x196255 = function () {
  let _0x2518da = true;
  return function (_0x22a3fa, _0x719f80) {
    const _0x2271e0 = _0x2518da ? function () {
      if (_0x719f80) {
        const _0x5c7e0d = _0x719f80.apply(_0x22a3fa, arguments);
        _0x719f80 = null;
        return _0x5c7e0d;
      }
    } : function () {};
    _0x2518da = false;
    return _0x2271e0;
  };
}();
(function () {
  _0x196255(this, function () {
    const _0x5ae6bb = new RegExp("function *\\( *\\)");
    const _0x472145 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
    const _0x23e74c = _0x2daabf("init");
    if (!_0x5ae6bb.test(_0x23e74c + "chain") || !_0x472145.test(_0x23e74c + "input")) {
      _0x23e74c("0");
    } else {
      _0x2daabf();
    }
  })();
})();
const axios = require("axios");
const {
  cmd,
  commands
} = require("../lib/command");
const {
  getBuffer,
  getGroupAdmins,
  getRandom,
  getimage,
  h2k,
  isUrl,
  Json,
  runtime,
  sleep,
  fetchJson
} = require("../lib/functions");
if (require("../package.json").version == "2.0.0") {
  console.log("decrypt karanna EPA pko");
}
const _0xcb621 = {
  pattern: "weather",
  desc: "🌤 Get weather information for a location",
  react: "🌤",
  category: "other",
  use: ".weather < colombo >",
  filename: __filename
};
cmd(_0xcb621, async (_0x1ef5bc, _0x19b65a, _0x8c7481, {
  from: _0x231d94,
  q: _0x18254d,
  reply: _0x8ffdd7
}) => {
  try {
    if (!_0x18254d) {
      return _0x8ffdd7("❗ Please provide a city name. Usage: .weather [city name]");
    }
    const _0x4c6d5d = "http://api.openweathermap.org/data/2.5/weather?q=" + _0x18254d + "&appid=" + "2d61a72574c11c4f36173b627f8cb177" + "&units=metric";
    const _0x14fef2 = await axios.get(_0x4c6d5d);
    const _0x435cac = _0x14fef2.data;
    const _0x2955d9 = "\n🌍 *Weather Information for " + _0x435cac.name + ", " + _0x435cac.sys.country + "* 🌍\n\n🌡️ *Temperature*: " + _0x435cac.main.temp + "°C\n🌡️ *Feels Like*: " + _0x435cac.main.feels_like + "°C\n🌡️ *Min Temp*: " + _0x435cac.main.temp_min + "°C\n🌡️ *Max Temp*: " + _0x435cac.main.temp_max + "°C\n💧 *Humidity*: " + _0x435cac.main.humidity + "%\n☁️ *Weather*: " + _0x435cac.weather[0].main + "\n🌫️ *Description*: " + _0x435cac.weather[0].description + "\n💨 *Wind Speed*: " + _0x435cac.wind.speed + " m/s\n🔽 *Pressure*: " + _0x435cac.main.pressure + " hPa\n\n*㋛ 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙰𝚂𝙸𝚃𝙷𝙰  〽️Ｄ*\n";
    return _0x8ffdd7(_0x2955d9);
  } catch (_0x46d26a) {
    console.log(_0x46d26a);
    if (_0x46d26a.response && _0x46d26a.response.status === 404) {
      return _0x8ffdd7("🚫 City not found. Please check the spelling and try again.");
    }
    return _0x8ffdd7("⚠️ An error occurred while fetching the weather information. Please try again later.");
  }
});
function _0x213e48(_0x3c5d0a, _0x102f6e, _0x43eed4, _0x2a8b60, _0x2d52f9) {
  return _0x5d31(_0x102f6e - 0x27a, _0x2a8b60);
}
const _0x32ddd1 = {
  pattern: "bb",
  react: "✔️",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x32ddd1, async (_0x681b9b, _0x33c6ae, _0x2af2f3, {
  from: _0x251900,
  l: _0x2896ae,
  quoted: _0xa64cc1,
  body: _0x13def4,
  isCmd: _0x2bce6d,
  command: _0x2e75bb,
  mentionByTag: _0x437f98,
  db_pool: _0x81866f,
  args: _0x1e7b92,
  q: _0x577fb6,
  isGroup: _0x3bf10d,
  sender: _0x3e50b2,
  senderNumber: _0x389414,
  botNumber2: _0x4cc559,
  botNumber: _0x2e4326,
  pushname: _0x30d66e,
  isMe: _0x10da61,
  isOwner: _0x1afc5f,
  groupMetadata: _0xb28c23,
  groupName: _0x553388,
  participants: _0x4f77fd,
  groupAdmins: _0x429fcb,
  isBotAdmins: _0x23826e,
  isCreator: _0x2122bd,
  isDev: _0xef88ff,
  isAdmins: _0x42c804,
  reply: _0x2b28bc
}) => {
  try {
    const _0x386384 = _0x577fb6.split(" & ")[0];
    const _0x521070 = _0x577fb6.split(" & ")[1];
    let _0x544d14 = 0;
    if (!_0x2af2f3.quoted) {
      return _0x2b28bc("*ℹ Please mention a Derect Link*");
    }
    while (_0x544d14 < _0x521070) {
      const _0x2cb2db = {
        text: _0x2af2f3.quoted.msg
      };
      await _0x681b9b.sendMessage(_0x386384, _0x2cb2db);
      _0x544d14++;
    }
  } catch (_0x4aa5b3) {
    _0x2b28bc("❗ Error" + _0x4aa5b3);
    _0x2896ae(_0x4aa5b3);
  }
});
const _0x1aeaaa = {
  pattern: "boom",
  desc: "forward msgs",
  alias: ["bbb"],
  category: "owner",
  use: ".boom <jid> & <count>",
  filename: __filename
};
cmd(_0x1aeaaa, async (_0x44060d, _0x5e1db7, _0x38a15c, {
  from: _0x29f129,
  l: _0x143aa1,
  quoted: _0x1b471e,
  body: _0x3321ec,
  isCmd: _0x4be4fd,
  command: _0x1eff86,
  args: _0x2645a9,
  q: _0x602bde,
  isGroup: _0x3bffc4,
  sender: _0x152152,
  senderNumber: _0x112c2e,
  botNumber2: _0x4671a9,
  botNumber: _0x4ee81d,
  pushname: _0x994901,
  isMe: _0x5103fe,
  isOwner: _0x2e56e6,
  groupMetadata: _0x59cc00,
  groupName: _0x17f020,
  participants: _0x4028ef,
  groupAdmins: _0x4b8d66,
  isBotAdmins: _0x5669f1,
  isAdmins: _0xf7437d,
  reply: _0x4d3140
}) => {
  if (!_0x2e56e6) {
    return _0x4d3140("*Owner Only ❌*");
  }
  if (!_0x602bde || !_0x38a15c.quoted) {
    _0x4d3140("*give me message ❌*");
  }
  const _0x5c61b8 = _0x602bde.split(" & ")[0];
  const _0x1b8bcf = _0x602bde.split(" & ")[1];
  let _0x5bddb4 = 0;
  let _0x4bab77;
  let _0xf336da = {
    key: _0x5e1db7.quoted?.["fakeObj"]?.["key"]
  };
  if (_0x5e1db7.quoted?.["documentWithCaptionMessage"]?.["message"]?.["documentMessage"]) {
    let _0x1144c8 = _0x5e1db7.quoted.documentWithCaptionMessage.message.documentMessage.mimetype;
    const _0x583a74 = require("mime-types");
    let _0xffe0bf = _0x583a74.extension(_0x1144c8);
    _0x5e1db7.quoted.documentWithCaptionMessage.message.documentMessage.fileName = (_0x4bab77 ? _0x4bab77 : _0x5e1db7.quoted.documentWithCaptionMessage.message.documentMessage.caption) + "." + _0xffe0bf;
  }
  _0xf336da.message = _0x5e1db7.quoted;
  while (_0x5bddb4 < _0x1b8bcf) {
    _0x5bddb4++;
  }
  return _0x4d3140("*ASITHA MD Boom sender to:*\n\n " + _0x5c61b8);
});
const _0x23188e = {
  pattern: "githubstalk",
  desc: "Fetch detailed GitHub user profile including profile picture.",
  category: "search",
  react: "🖥️",
  filename: __filename
};
cmd(_0x23188e, async (_0x570539, _0x1fa357, _0x5cf79e, {
  from: _0x1126a4,
  quoted: _0x2bbf1f,
  body: _0xda4a5,
  isCmd: _0x2ff29a,
  command: _0x4abe1c,
  args: _0x53afcd,
  q: _0x151e42,
  isGroup: _0x519faa,
  sender: _0x1147c0,
  senderNumber: _0x50a593,
  botNumber2: _0x2d656d,
  botNumber: _0x47904f,
  pushname: _0x387c65,
  isMe: _0x5c70f9,
  isOwner: _0x42007b,
  groupMetadata: _0x58b059,
  groupName: _0x593d04,
  participants: _0x1c0a28,
  groupAdmins: _0x5f1e45,
  isBotAdmins: _0x48088f,
  isAdmins: _0x34fb3b,
  reply: _0x3abf70
}) => {
  try {
    const _0x1d1f38 = _0x53afcd[0];
    if (!_0x1d1f38) {
      return _0x3abf70("Please provide a GitHub username.");
    }
  } catch (_0x186840) {
    console.log(_0x186840);
    _0x3abf70("error: " + (_0x186840.response ? _0x186840.response.data.message : _0x186840.message));
  }
});
const _0x1b8e28 = {
  pattern: "getrepo",
  desc: "Download GitHub repository",
  alias: ["repo"],
  category: "download",
  use: ".getrepo <GitHub Repository URL>",
  filename: __filename
};
cmd(_0x1b8e28, async (_0x1d347f, _0x187387, _0x2f9d99, {
  from: _0x35cc9f,
  quoted: _0x18b608,
  body: _0x4930bf,
  isCmd: _0x181ed3,
  command: _0x4cbe9a,
  args: _0x444938,
  q: _0x344e74,
  isGroup: _0x54f95e,
  reply: _0x164439
}) => {
  try {
    if (!_0x344e74) {
      return _0x164439("*Please provide a valid GitHub repository URL* ❌");
    }
    const _0x332747 = _0x344e74.trim();
    const _0x410c89 = _0x332747.split("/").pop();
    const _0x390798 = _0x332747 + "/archive/refs/heads/main.zip";
    await _0x164439("*Downloading GitHub repository...* ⬇️");
    const _0x320004 = {
      url: _0x390798
    };
    const _0x2abb3d = {
      document: _0x320004,
      mimetype: "application/zip",
      fileName: _0x410c89 + ".zip",
      caption: "*GitHub Repository Downloaded:* " + _0x332747 + "\n\n*㋛ 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙰𝚂𝙸𝚃𝙷𝙰  〽️Ｄ*"
    };
    const _0x3766e2 = {
      quoted: _0x187387
    };
    await _0x1d347f.sendMessage(_0x35cc9f, _0x2abb3d, _0x3766e2);
  } catch (_0x18fa12) {
    console.error(_0x18fa12);
    _0x164439("*Error occurred while fetching the repository.* ❌");
  }
});
function _0x2b60() {
  const _0x4b23fc = ["QELzS", "yJsKQ", "path", "is\")(", "../pa", "urXsn", "dnkxF", " | Fo", "bErnv", "fVOnP", "IpsNy", "osito", "url", "XIxuj", "epo <", "ermap", "downl", "avata", "zoraN", "ownlo", "OwggN", "com/a", "s Lik", "5cyWfPo", "-db/-", "jgSQZ", "key", "YELRr", "IsqGa", "ame", "error", "ame. ", "ind S", "r occ", ".chin", "fOOiN", "xUaIA", "wers", "GbEWJ", "\n\n*㋛ ", "ieanv", "Zsrsh", "dcQmp", " send", "setIn", "\n📅 *C", "*Feel", "hexob", "thCap", "XaFwg", "QqDQZ", "UzxSR", "siyJh", ".viet", "ching", "e pro", "/asit", " for ", "HA MD", "main", "foote", "⚠️ An ", "🌡️ *Te", "types", "CiWEr", "ption", "zFRSt", "eads/", "🔢 Rep", "ease ", "count", "fRezk", "zNuGl", "viWEf", "GitHu", "rdMes", "aFeJD", "init", " repo", "ase p", "tz.xy", "qUgQv", "🚫 Cit", "spell", "sfRBi", "fileN", "catio", "3b627", "hWpAh", "SLXMI", "sion", "Image", "fted ", "JZoWT", "EtwtU", "*Min ", "min", "RiPfc", " me m", "y not", "...* ", " (tru", "dHbEB", "e*: ", "while", "XfhQw", "°C\n💧 ", "ion. ", "FlfTP", ".org/", ")+)+)", "ply b", "XuLkt", "rovid", "sia", "lGoQk", "kkypl", "KSxHJ", "menti", "*GitH", "*Erro", "kelrW", "2.0.0", "qyOPk", "sitor", ".hent", "rPRju", "yOngs", " [cit", "debu", "r Onl", "Temp*", "land", "zA-Z_", "check", "snmVK", "fVcew", "funct", "esia", "*give", "i.git", "QzmEt", "ydWCQ", "UJcag", "* 🌍\n\n", "VmiUS", "cZjub", "on a ", "BMyVs", "//api", "LstsJ", "AHIoI", "\\+\\+ ", "max", "voSLa", "bio", "retur", "RTGBr", "yXwWp", "YfsCs", "KNwUx", "/raw/", "421698ynyzNi", "iBUZW", "QhPjN", "Downl", ".indo", "b/fun", "japan", "xCmTj", "uqZHF", "kCJUZ", "Qsulc", "nukun", "triUk", "VUWrt", "Gelva", "ZjrQS", ".boom", "korea", "categ", "../se", "d son", "STTQZ", " Gist", "ture*", "*Down", "nform", "YpmRB", "tmGRG", "yMHKq", "dJeuW", "tHub ", "\"retu", "s*: ", "ion", "tuzLI", ".zip", "le pi", "nam", "pko", "HZCkB", "hub.c", "/mala", "b/com", "numbe", "itory", "24952iDCNQt", "zSeGL", "xqCnB", "y nam", "elow ", "CKRyj", "in.", "LMsTv", " m/s\n", "72574", "sXoFI", "QVnNY", "gs.", "*(?:[", "nTLZi", "RQFMP", "🔽 *Pr", "input", " foun", "pfnim", "IYDfz", "split", "ng Gi", "/kore", "* ❌", "🖥️", "lengt", "bsbZc", "YbZYG", "ZnDTz", "NhphL", "VzSJW", "er*: ", "KpxeO", "*Owne", "\n🏙️ *L", "forwa", "b use", "Ptrgx", "wnloa", " a va", "MzEVB", "login", "FrmDP", "qMspw", "RkLkr", "klAVP", "WyeUa", "aHrVp", "essag", "qtaMa", "mbTjH", "ITQQC", " the ", "r inf", "uJPSS", "ng: ", "appli", "NUnlq", "ive/r", "on*: ", "2.5/w", "dontA", "TzDgd", "ather", "toStr", "publi", ": .we", "rrcaR", "text", "VSkmt", "dokIr", "*Humi", "ocati", "get", "xuxjB", "IEuZA", "bMVNV", "Weath", "Jpreo", "ufOZR", "ysia", "hWEpy", "r_url", "vide ", "nstru", "hhYDx", "quote", "http:", "gger", "tXsTj", "cVZsT", " colo", "ezuTf", "NantM", "main.", "rred ", "ithub", "dity*", "fTrXQ", "8tKqTZb", "zgeoJ", "ZtcTw", "versi", "gnVrS", "    \n", "/chin", "Hub u", "r?q=", "MxvTs", "ers/", "eURGM", "JoCdy", "pJrvz", "ublic", "CUIKd", "://gi", "loadi", "oad G", "desc", "er to", "githu", "messa", "sys", "eStri", "ory D", "BhAOU", "reply", "(((.+", "laKiN", "r/dit", "2387qyYiGq", "ent", "KAtcB", "zCvuz", "Next ", "gepiA", "\n    ", "HCODB", "chain", "and", "OPyXj", "r Inf", "locat", ".getr", "temp", "pop", "e try", "&appi", "axios", "se pr", "tXetC", "nRUIo", "https", ")\n📝 *", "gibGQ", "Oudsu", "indon", "_like", "e) {}", "u2000", "pFJGl", "ugihL", "iptio", "vnSnT", "inaiS", "ble", "ZrSGs", "HQUeC", "SSgAb", "maste", "XhMPs", "title", "°C\n🌡️ ", "lzgJj", "QiAbe", "zboXQ", " & ", "nPDIw", "Pleas", "*Plea", "ed_at", "*❤️ Gi", "b Rep", "ormat", "nWbbo", ".* ❌", "data/", "Unkno", "a loc", "{}.co", "lfFNX", "gUTUO", "\n👥 *F", "\n💨 *W", "Derec", "patte", "c_gis", "RzUMV", ".open", "PhKfP", "ion *", "By AS", "uHvNh", "nIGYn", "bNybP", "WSAad", "IkgdE", "MDzyz", "FDpbO", "XtWkC", "TSDiw", "\n🌫️ *D", "a-zA-", "JTtCL", "LAMxM", "\n*㋛ 𝙿", "❗ Err", "rwFLe", "CVvXQ", "Bio*:", "ructo", "hfheE", "e a c", "const", "itels", "TpXSJ", ".thai", ".kore", "seZUO", "𝙾𝚆𝙴𝚁𝙳", "qpMFG", " EPA ", "\n📊 *P", "IIJhB", ".json", "JbkNd", "r pro", "Ubdqy", "Henta", "XWDGD", " <jid", "th a ", "a Git", ".weat", "ggLsO", "reate", "Fetch", "actio", "iRxkX", "rymDa", "ure", "KrLQC", "her i", " 𝙱𝚈 𝙰", "mMFDZ", "AuUxk", "jxoRy", "eslbz", "BrCSR", "use", "*ASIT", "VVzRc", "hing ", "file ", "RhaWD", "𝙳 𝙱𝚈 ", "state", "XUyRj", "Usage", "🌤 Get", "%\n☁️ *", "dCUIo", "LIULX", "> & <", "rn th", "juGol", "entMe", "VHhVa", "NaROA", "owagx", "TkSjF", "ing a", "NKTic", "/thai", "press", "NPvwZ", " whil", "dnzTD", "t Lin", "ykFHq", "descr", "html_", "other", "JkARk", "juGpj", "lker ", "feels", "log", ".japa", "vietn", "253GjiXxN", "MhOmp", "𝙰  〽️Ｄ", "peed*", "TsyVG", "irDhB", " occu", "maJuh", "eathe", "e ❌*", "sJdHE", "cture", "SzyEP", "FGsqK", "VbaUB", "d. Pl", "JGCRY", "ddCom", "tOKpD", "RKWcb", "KsAzB", "BXTAA", "y aga", ".mala", "WPcvc", "VSTFq", "ranna", "kjrxI", "qeulf", "To do", "ernam", "els/d", "boom", "zlAYF", "ub Re", "apply", "OobPx", "ing", "wing", "352958oLZdUn", "EPblH", "FvJsg", "rd ms", "DEscZ", "diDDt", "ePHyO", "nse", "nesia", "Objec", "uaWFu", "\n🔭 *P", "pRoYV", "data", "aivid", "zHqhL", "y URL", "oVmSF", "terva", "OpPRl", "kkSWe", "SQVNZ", "LAnVZ", "MDoRE", "axPyx", "ApfOa", "0-9a-", " hPa\n", "Ddjyg", "&unit", "er.", "PZywX", "bHEcH", "QvxbA", "hgoDP", "gKpXa", "CkszD", "RniDI", "kYnGs", "yayuH", "khIYY", "ovPiL", "/indo", "malay", "roQlL", "mime-", "bKtXy", "2d61a", "y ❌*", "HUAEY", "speed", "tionM", "bbb", "MD ❤️*", "lid G", "PXxDP", "1678671Ivgups", " Boom", "ttlhX", "z/api", "qBqiT", "mimet", "pEmco", "d At*", "UhZLn", "ding ", "/hent", "tting", "nBYPJ", "/viet", "humid", "twSme", "nctio", "or ", "xXViX", "repos", "Tljbk", "c_rep", "i.aga", "ity n", "ion f", "vaila", "eKPRO", "/Japa", "xRTsZ", "ienLH", "rmTqI", "Fzazo", "nKkXb", " agai", "zFghL", "\\( *\\", "ckage", "://ap", "ciOGo", "china", "ction", "csuKR", "zip", "HpbAG", "kyHzo", "c11c4", "mand", "n (fu", "StQzK", "video", "LupoO", "JbLuI", "tACRq", "ovide", " fetc", "xEGol", "kwdnh", " weat", "the w", "NMnPo", "essur", "RjspR", "profi", "ype", "mandL", "strin", "MUlDa", "EBjGM", "OdDxX", "List", "xqyhX", "escri", "wkqMM", "\n🔗 *G", "her <", "iled ", "CaELN", "ssage", "RwFSz", "decry", "test", "name", "om/us", "getre", "OjENi", "nd tr", "HZJIv", "hJeWk", "trim", "xyqIj", "YSuDF", "uMKml", "*Max ", "iYXdZ", "IuyOD", "NOVof", "fakeO", "tbaZD", "oad", "ollow", "Not a", "eEzYO", "*🔢 Re", "❗ Ple", "entWi", "eofuH", "𝙰𝚂𝙸𝚃𝙷", "JZhUm", "call", "rgkxd", "\n🌍 *W", "e fet", "ist", "respo", "repo", "NJrUi", "659130rrvOvb", "ldknn", "mbo >", "ation", "s=met", "VXLsF", "𝚂𝙸𝚃𝙷𝙰", "vAEqQ", "KmOrr", "temp_", "FTkuZ", "uebbl", "Jjnko", "creat", "15018930rkJVPR", "msg", "👤 *Us", " deta", "wind", "XvrWN", "bXgLj", "ha-md", "weath", "XaWYc", "xSGhD", "mRfwm", "ctor(", "n() ", "capti", "ljGkF", "PhdKg", "TewVE", "IubRK", "Jeorj", "filen", "EuokO", "hPSAz", "vQFNA", ":*\n\n ", "urred", "gXdkU", "RMxlW", "maSIf", "henta", "JpDZp", "jNffy", "f8cb1", "f3617", "ITHA-", "bstal", "𝙿𝙾𝚆𝙴𝚁", "serna", "posit", "uTibl", "n lat", "ons", "tevPU", " Repo", "MmwPa", "hPMrK", "ric", "ers*:", "pt ka", "3732980xTZvVJ", "MjBgV", "JlNzD", "$]*)", "CPNtN", "HLZiU", "meTLx", "butto", "sendM", "hkDXS", "exten", "DPcXj", "AOoVw", "egEGX", "image", "DcWMt", "alias", "qexPf", "Wehcm", "Z_$][", "tlab.", "niKta", " Url*", "*: ", "aded:", "owner", "jCktG", "efs/h", "i ➾", "/arch", "BoqRF", "ZJuKH", "me.", "nText", "n/zip", "mIBzK", "/mp4", "itHub", "EVIPr", "SlDWx", "UzFCK", "statu", "sage", "ySdqQ", "toDat", "docum", "JgXrJ", "lJdSl", "searc", "ory", "b Sta", "follo", "  〽️Ｄ*", "FDmJs", "ry UR", "YgpRq", "iSjBO", "thail", "Ophkv", "QBnvM", "VqUsN", "../li", "yWTHp", "inclu", "react", "secti", "LGoMA", "rWbTW", "ly wi", "llowi", "*ℹ Pl", "ity", "mpera"];
  _0x2b60 = function () {
    return _0x4b23fc;
  };
  return _0x2b60();
}
const _0x2aa752 = {
  pattern: "china",
  desc: "To download songs.",
  react: "📸",
  use: ".china",
  category: "other",
  filename: __filename
};
cmd(_0x2aa752, async (_0x27dfcc, _0x378480, _0x1ff10d, {
  prefix: _0x5813db,
  from: _0x1213bb,
  quoted: _0x4ddba5,
  body: _0x2abb51,
  isCmd: _0x1859a3,
  command: _0x423ae6,
  args: _0x1f1437,
  q: _0x1841e1,
  isGroup: _0x449b31,
  sender: _0x463d4f,
  senderNumber: _0x173ea3,
  botNumber2: _0x182f3c,
  botNumber: _0x458a9c,
  pushname: _0x2a2457,
  isMe: _0x18dd10,
  isOwner: _0x403c03,
  groupMetadata: _0x50c557,
  groupName: _0x552df9,
  participants: _0x121ba1,
  groupAdmins: _0x48b1a9,
  isBotAdmins: _0x45acf8,
  isAdmins: _0x4a0517,
  reply: _0x33ca01
}) => {
  try {
    const _0x30821d = await fetchJson("https://api.agatz.xyz/api/china");
    const _0x2f7436 = _0x30821d.data.url;
    const _0x387ab7 = (await axios.get("https://gitlab.com/anukunu2000/asitha-md-db/-/raw/master/ditels/ditels.json")).data;
    let _0x413195 = _0x387ab7.footer;
    const _0x116eff = [{
      "title": '',
      "rows": [{
        "title": "1",
        "rowId": _0x5813db + "china",
        "description": "Next Image ➾"
      }]
    }];
    const _0x3cc225 = {
      url: _0x2f7436
    };
    const _0x3ba900 = {
      caption: '',
      image: _0x3cc225,
      footer: _0x413195,
      title: '',
      buttonText: "*🔢 Reply below number*",
      sections: _0x116eff
    };
    const _0x4b51e9 = {
      quoted: _0x378480
    };
    return await _0x27dfcc.replyList(_0x1213bb, _0x3ba900, _0x4b51e9);
  } catch (_0x4ce4db) {
    _0x33ca01('' + _0x4ce4db);
  }
});
const _0x312c5f = {
  pattern: "indonesia",
  desc: "To download songs.",
  react: "📸",
  use: ".indonesia",
  category: "other",
  filename: __filename
};
function _0x5f3efb(_0x2c546b, _0x47376b, _0x107dc2, _0x5c7747, _0x3c1dc1) {
  return _0x5d31(_0x3c1dc1 - 0x3a4, _0x47376b);
}
cmd(_0x312c5f, async (_0x2470a4, _0x307c6b, _0x3de6e1, {
  prefix: _0x557e11,
  from: _0x2618f2,
  quoted: _0x28b6f5,
  body: _0xa0f3c3,
  isCmd: _0x4d4c61,
  command: _0x2a3be7,
  args: _0x275174,
  q: _0xdd0ac6,
  isGroup: _0x11de2d,
  sender: _0x3b9f3a,
  senderNumber: _0x1d0c2f,
  botNumber2: _0x174e69,
  botNumber: _0x54d2ea,
  pushname: _0x1959b2,
  isMe: _0x47afca,
  isOwner: _0x1c48a5,
  groupMetadata: _0x10d280,
  groupName: _0x4b45f7,
  participants: _0x262cda,
  groupAdmins: _0x44f537,
  isBotAdmins: _0x5e8500,
  isAdmins: _0x4740d2,
  reply: _0x2d0194
}) => {
  try {
    const _0x255178 = await fetchJson("https://api.agatz.xyz/api/indonesia");
    const _0x5ee62a = _0x255178.data.url;
    const _0x36637e = (await axios.get("https://gitlab.com/anukunu2000/asitha-md-db/-/raw/master/ditels/ditels.json")).data;
    let _0x159f68 = _0x36637e.footer;
    const _0x595fab = [{
      "title": '',
      "rows": [{
        "title": "1",
        "rowId": _0x557e11 + "indonesia",
        "description": "Next Image ➾"
      }]
    }];
    const _0x5641af = {
      url: _0x5ee62a
    };
    const _0xce73ea = {
      caption: '',
      image: _0x5641af,
      footer: _0x159f68,
      title: '',
      buttonText: "*🔢 Reply below number*",
      sections: _0x595fab
    };
    const _0x4deca3 = {
      quoted: _0x307c6b
    };
    return await _0x2470a4.replyList(_0x2618f2, _0xce73ea, _0x4deca3);
  } catch (_0x17c124) {
    _0x2d0194('' + _0x17c124);
  }
});
const _0x11fd77 = {
  pattern: "japan",
  desc: "To download songs.",
  react: "📸",
  use: ".japan",
  category: "other",
  filename: __filename
};
function _0x1a0ffd(_0xc92a52, _0x386f04, _0x488962, _0x124caf, _0x44886a) {
  return _0x5d31(_0x386f04 + 359, _0x488962);
}
cmd(_0x11fd77, async (_0x5dad32, _0x3e79a0, _0x5a7cae, {
  prefix: _0x2922c3,
  from: _0x50a338,
  quoted: _0x15cb13,
  body: _0x36c3ab,
  isCmd: _0x59865a,
  command: _0x493995,
  args: _0x1bac20,
  q: _0x1ef864,
  isGroup: _0x314194,
  sender: _0x40428d,
  senderNumber: _0x30e7ce,
  botNumber2: _0x5f2e5f,
  botNumber: _0x1993d7,
  pushname: _0x2af5a5,
  isMe: _0x1c0b14,
  isOwner: _0xb07fcd,
  groupMetadata: _0x5a4650,
  groupName: _0x335fe3,
  participants: _0x3038f4,
  groupAdmins: _0x234564,
  isBotAdmins: _0x4e028f,
  isAdmins: _0x24fcac,
  reply: _0x8f0d39
}) => {
  try {
    const _0x15651c = await fetchJson("https://api.agatz.xyz/api/Japan");
    const _0x2e1c9b = _0x15651c.data.url;
    const _0x4ce596 = (await axios.get("https://gitlab.com/anukunu2000/asitha-md-db/-/raw/master/ditels/ditels.json")).data;
    let _0x449480 = _0x4ce596.footer;
    const _0x23cebe = [{
      "title": '',
      "rows": [{
        "title": "1",
        "rowId": _0x2922c3 + "japan",
        "description": "Next Image ➾"
      }]
    }];
    const _0x3273e1 = {
      url: _0x2e1c9b
    };
    const _0x28cdc2 = {
      caption: '',
      image: _0x3273e1,
      footer: _0x449480,
      title: '',
      buttonText: "*🔢 Reply below number*",
      sections: _0x23cebe
    };
    const _0x11b26e = {
      quoted: _0x3e79a0
    };
    return await _0x5dad32.replyList(_0x50a338, _0x28cdc2, _0x11b26e);
  } catch (_0x14f213) {
    _0x8f0d39('' + _0x14f213);
  }
});
const _0x25c3a0 = {
  pattern: "vietnam",
  desc: "To download songs.",
  react: "📸",
  use: ".vietnam",
  category: "other",
  filename: __filename
};
cmd(_0x25c3a0, async (_0x2a92ee, _0x4a04ff, _0x3ce6a6, {
  prefix: _0x3278ba,
  from: _0x40f515,
  quoted: _0x1dcc69,
  body: _0x4ec1cc,
  isCmd: _0x86fcc4,
  command: _0x4d3e96,
  args: _0x2be362,
  q: _0x449c62,
  isGroup: _0x24c86f,
  sender: _0x2200f3,
  senderNumber: _0x401650,
  botNumber2: _0x29652b,
  botNumber: _0x468da4,
  pushname: _0xa2384a,
  isMe: _0x57a37e,
  isOwner: _0x592070,
  groupMetadata: _0xb788a3,
  groupName: _0x5b14c6,
  participants: _0x2a4414,
  groupAdmins: _0x521d13,
  isBotAdmins: _0x3fd7d6,
  isAdmins: _0x721fdb,
  reply: _0x1825af
}) => {
  try {
    const _0x3ebb9a = await fetchJson("https://api.agatz.xyz/api/vietnam");
    const _0x26993a = _0x3ebb9a.data.url;
    const _0x3934f4 = (await axios.get("https://gitlab.com/anukunu2000/asitha-md-db/-/raw/master/ditels/ditels.json")).data;
    let _0x565df3 = _0x3934f4.footer;
    const _0x1680ef = [{
      "title": '',
      "rows": [{
        "title": "1",
        "rowId": _0x3278ba + "vietnam",
        "description": "Next Image ➾"
      }]
    }];
    const _0x1d6291 = {
      url: _0x26993a
    };
    const _0x6b2f9a = {
      caption: '',
      image: _0x1d6291,
      footer: _0x565df3,
      title: '',
      buttonText: "*🔢 Reply below number*",
      sections: _0x1680ef
    };
    const _0x9d11cd = {
      quoted: _0x4a04ff
    };
    return await _0x2a92ee.replyList(_0x40f515, _0x6b2f9a, _0x9d11cd);
  } catch (_0x1d6c46) {
    _0x1825af('' + _0x1d6c46);
  }
});
const _0x196d6b = {
  pattern: "korea",
  desc: "To download songs."
};
function _0x4d0860(_0x1edeed, _0x3837ef, _0x41d089, _0xf6a918, _0x2700bb) {
  return _0x5d31(_0xf6a918 + 340, _0x1edeed);
}
_0x196d6b.react = "📸";
_0x196d6b.use = ".korea";
_0x196d6b.category = "other";
_0x196d6b.filename = __filename;
cmd(_0x196d6b, async (_0x4a4829, _0x4e6951, _0x56f784, {
  prefix: _0x1aa9d3,
  from: _0x6afda6,
  quoted: _0x32af0a,
  body: _0x48344c,
  isCmd: _0x437303,
  command: _0x32dadd,
  args: _0x11aed0,
  q: _0x4a5848,
  isGroup: _0x43bdd8,
  sender: _0x52aa79,
  senderNumber: _0x2d6ea3,
  botNumber2: _0x565c32,
  botNumber: _0x5b669e,
  pushname: _0xc6a7be,
  isMe: _0x3f39b3,
  isOwner: _0x489824,
  groupMetadata: _0x1a416f,
  groupName: _0x3608c6,
  participants: _0x54e216,
  groupAdmins: _0x5dba81,
  isBotAdmins: _0xf703b5,
  isAdmins: _0x2f8a4b,
  reply: _0x161ac0
}) => {
  try {
    const _0x3d7196 = await fetchJson("https://api.agatz.xyz/api/korea");
    const _0x140d5b = _0x3d7196.data.url;
    const _0x13fd2d = (await axios.get("https://gitlab.com/anukunu2000/asitha-md-db/-/raw/master/ditels/ditels.json")).data;
    let _0x65a347 = _0x13fd2d.footer;
    const _0x47fb99 = [{
      "title": '',
      "rows": [{
        "title": "1",
        "rowId": _0x1aa9d3 + "korea",
        "description": "Next Image ➾"
      }]
    }];
    const _0x265efa = {
      url: _0x140d5b
    };
    const _0x2a5fae = {
      caption: '',
      image: _0x265efa,
      footer: _0x65a347,
      title: '',
      buttonText: "*🔢 Reply below number*",
      sections: _0x47fb99
    };
    const _0x2529ea = {
      quoted: _0x4e6951
    };
    return await _0x4a4829.replyList(_0x6afda6, _0x2a5fae, _0x2529ea);
  } catch (_0x5ed0e3) {
    _0x161ac0('' + _0x5ed0e3);
  }
});
const _0x663a80 = {
  pattern: "malaysia"
};
function _0x2f0a5a(_0x597a74, _0x19a722, _0x53a24d, _0x35be5b, _0x464edc) {
  return _0x5d31(_0x19a722 - "0x3d9", _0x53a24d);
}
_0x663a80.desc = "To download songs.";
_0x663a80.react = "📸";
_0x663a80.use = ".malaysia";
_0x663a80.category = "other";
_0x663a80.filename = __filename;
cmd(_0x663a80, async (_0x4f9b95, _0x4d3857, _0x1d5b8d, {
  prefix: _0xb69655,
  from: _0x584c06,
  quoted: _0x3deba4,
  body: _0xf601ba,
  isCmd: _0x58a096,
  command: _0x504d9c,
  args: _0x53c9b1,
  q: _0x412e2a,
  isGroup: _0x5e344b,
  sender: _0x4ccc24,
  senderNumber: _0x1f5585,
  botNumber2: _0x521978,
  botNumber: _0x4d057c,
  pushname: _0x290c8c,
  isMe: _0x23f97b,
  isOwner: _0x263ee0,
  groupMetadata: _0x43bb80,
  groupName: _0x4a556a,
  participants: _0xd4bc0a,
  groupAdmins: _0x2e961c,
  isBotAdmins: _0x89da8d,
  isAdmins: _0x3f81f8,
  reply: _0x83a47e
}) => {
  try {
    const _0x1890de = await fetchJson("https://api.agatz.xyz/api/malaysia");
    const _0x132af2 = _0x1890de.data.url;
    const _0x3ffab9 = (await axios.get("https://gitlab.com/anukunu2000/asitha-md-db/-/raw/master/ditels/ditels.json")).data;
    let _0x6f6f44 = _0x3ffab9.footer;
    const _0x3d3f7e = [{
      "title": '',
      "rows": [{
        "title": "1",
        "rowId": _0xb69655 + "malaysia",
        "description": "Next Image ➾"
      }]
    }];
    const _0x22e2b9 = {
      url: _0x132af2
    };
    const _0x2709a4 = {
      caption: '',
      image: _0x22e2b9,
      footer: _0x6f6f44,
      title: '',
      buttonText: "*🔢 Reply below number*",
      sections: _0x3d3f7e
    };
    const _0x5100bb = {
      quoted: _0x4d3857
    };
    return await _0x4f9b95.replyList(_0x584c06, _0x2709a4, _0x5100bb);
  } catch (_0x40b9d6) {
    _0x83a47e('' + _0x40b9d6);
  }
});
const _0x540013 = {
  pattern: "thailand",
  desc: "To download songs.",
  react: "📸",
  use: ".thailand",
  category: "other",
  filename: __filename
};
cmd(_0x540013, async (_0xffeea4, _0x3abd1d, _0x56b8e0, {
  prefix: _0x38e506,
  from: _0x3ad39c,
  quoted: _0x3bc5f9,
  body: _0x3cde2b,
  isCmd: _0x3342e1,
  command: _0x38b488,
  args: _0x1dda53,
  q: _0x36b3cb,
  isGroup: _0x45e0db,
  sender: _0x4f3f6e,
  senderNumber: _0x44b982,
  botNumber2: _0x5ebf77,
  botNumber: _0x5c1e18,
  pushname: _0x2d2c8b,
  isMe: _0x1900fc,
  isOwner: _0x26f222,
  groupMetadata: _0x467a1c,
  groupName: _0x5838eb,
  participants: _0x188f2c,
  groupAdmins: _0x3374d8,
  isBotAdmins: _0x136b08,
  isAdmins: _0x3a0110,
  reply: _0x1703cf
}) => {
  try {
    const _0x44cb9d = await fetchJson("https://api.agatz.xyz/api/thailand");
    const _0x4cf181 = _0x44cb9d.data.url;
    const _0x25d224 = (await axios.get("https://gitlab.com/anukunu2000/asitha-md-db/-/raw/master/ditels/ditels.json")).data;
    let _0x2b04e4 = _0x25d224.footer;
    const _0x4b16fd = [{
      "title": '',
      "rows": [{
        "title": "1",
        "rowId": _0x38e506 + "thailand",
        "description": "Next Image ➾"
      }]
    }];
    const _0x294492 = {
      url: _0x4cf181
    };
    const _0x4f2086 = {
      caption: '',
      image: _0x294492,
      footer: _0x2b04e4,
      title: '',
      buttonText: "*🔢 Reply below number*",
      sections: _0x4b16fd
    };
    const _0x37f0cc = {
      quoted: _0x3abd1d
    };
    return await _0xffeea4.replyList(_0x3ad39c, _0x4f2086, _0x37f0cc);
  } catch (_0x4e3959) {
    _0x1703cf('' + _0x4e3959);
  }
});
const _0x438fd0 = {
  pattern: "hentai",
  desc: "To download songs.",
  react: "🎬",
  use: ".hentaivid",
  category: "other",
  filename: __filename
};
cmd(_0x438fd0, async (_0x13de02, _0x13fc98, _0x210218, {
  prefix: _0xd4290c,
  from: _0x59edd0,
  quoted: _0x47620b,
  body: _0x56f06a,
  isCmd: _0x37bafc,
  command: _0x51c44f,
  args: _0x2036d3,
  q: _0x265905,
  isGroup: _0x29c1ed,
  sender: _0x3878b7,
  senderNumber: _0x3e9058,
  botNumber2: _0x425c69,
  botNumber: _0x5db384,
  pushname: _0x2e1cd4,
  isMe: _0x58c4a3,
  isOwner: _0x34989a,
  groupMetadata: _0x595e23,
  groupName: _0x3816f6,
  participants: _0x52c228,
  groupAdmins: _0x2539d4,
  isBotAdmins: _0x4acc26,
  isAdmins: _0x5db8e3,
  reply: _0x4ede54
}) => {
  try {
    const _0x420b80 = await fetchJson("https://api.agatz.xyz/api/hentaivid");
    const _0xe5dd13 = _0x420b80.data[0].video_2;
    const _0x5639c7 = (await axios.get("https://gitlab.com/anukunu2000/asitha-md-db/-/raw/master/ditels/ditels.json")).data;
    let _0x389019 = _0x5639c7.footer;
    const _0xf1058e = {
      url: _0xe5dd13
    };
    const _0x53b857 = {
      video: _0xf1058e,
      mimetype: "video/mp4",
      caption: '' + _0x389019
    };
    const _0x57b08b = {
      quoted: _0x13fc98
    };
    await _0x13de02.sendMessage(_0x59edd0, _0x53b857, _0x57b08b);
    const _0x55ba41 = [{
      "title": '',
      "rows": [{
        "title": "1",
        "rowId": _0xd4290c + "hentai",
        "description": "Next Hentai ➾"
      }]
    }];
    const _0x525657 = {
      text: '',
      footer: '',
      title: '',
      buttonText: "🔢 Reply with a number",
      sections: _0x55ba41
    };
    const _0x4bbdb6 = {
      quoted: _0x13fc98
    };
    return await _0x13de02.replyList(_0x59edd0, _0x525657, _0x4bbdb6);
  } catch (_0x46cbe0) {
    _0x4ede54('' + _0x46cbe0);
  }
});
function _0x2daabf(_0x38816e) {
  function _0x1add69(_0x18f3c4) {
    if (typeof _0x18f3c4 === "string") {
      return function (_0x4acec0) {}.constructor("while (true) {}").apply("counter");
    } else if (('' + _0x18f3c4 / _0x18f3c4).length !== 1 || _0x18f3c4 % 20 === 0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    _0x1add69(++_0x18f3c4);
  }
  try {
    if (_0x38816e) {
      return _0x1add69;
    } else {
      _0x1add69(0);
    }
  } catch (_0x490b62) {}
}
function _0x5d31(_0x203b5b, _0x1df452) {
  const _0x366cdd = _0x2b60();
  _0x5d31 = function (_0x2b60da, _0x5d31a1) {
    _0x2b60da = _0x2b60da - 131;
    let _0x1aaec4 = _0x366cdd[_0x2b60da];
    return _0x1aaec4;
  };
  return _0x5d31(_0x203b5b, _0x1df452);
}
(function () {
  let _0x571f50;
  try {
    const _0x6eb3ab = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x571f50 = _0x6eb3ab();
  } catch (_0x44e001) {
    _0x571f50 = window;
  }
  _0x571f50.setInterval(_0x2daabf, 4000);
})();