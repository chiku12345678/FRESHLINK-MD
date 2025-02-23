(function (_0x5f3c49, _0x2ad059) {
  const _0x2191ac = _0x5f3c49();
  while (true) {
    try {
      const _0x454433 = -parseInt(_0x40a5(704, 0x13)) / 1 + -parseInt(_0x40a5(1011, 0x2d9)) / 2 + -parseInt(_0x40a5(1029, "0x9c1")) / 3 * (parseInt(_0x40a5(1527, "0x6a6")) / 4) + parseInt(_0x40a5(1287, 0x39a)) / 5 * (-parseInt(_0x40a5(487, -0x2f5)) / 6) + -parseInt(_0x40a5(1649, "0x909")) / 7 + -parseInt(_0x40a5(905, 0x6ea)) / 8 + parseInt(_0x40a5(722, "0x37c")) / 9;
      if (_0x454433 === _0x2ad059) {
        break;
      } else {
        _0x2191ac.push(_0x2191ac.shift());
      }
    } catch (_0x316f9c) {
      _0x2191ac.push(_0x2191ac.shift());
    }
  }
})(_0x184e, 557229);
const _0x4bc44e = function () {
  let _0x457dcd = true;
  return function (_0x25f837, _0x3dfa0b) {
    const _0x4e38bd = _0x457dcd ? function () {
      if (_0x3dfa0b) {
        const _0x28babd = _0x3dfa0b.apply(_0x25f837, arguments);
        _0x3dfa0b = null;
        return _0x28babd;
      }
    } : function () {};
    _0x457dcd = false;
    return _0x4e38bd;
  };
}();
const _0x5c98ad = _0x4bc44e(this, function () {
  return _0x5c98ad.toString().search("(((.+)+)+)+$").toString().constructor(_0x5c98ad).search("(((.+)+)+)+$");
});
_0x5c98ad();
const _0x484ee9 = function () {
  let _0x547478 = true;
  return function (_0x418c65, _0x40bb06) {
    const _0x45a774 = _0x547478 ? function () {
      if (_0x40bb06) {
        const _0x6bd304 = _0x40bb06.apply(_0x418c65, arguments);
        _0x40bb06 = null;
        return _0x6bd304;
      }
    } : function () {};
    _0x547478 = false;
    return _0x45a774;
  };
}();
(function () {
  _0x484ee9(this, function () {
    const _0x1ae9c8 = new RegExp("function *\\( *\\)");
    const _0xe854d0 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
    const _0xf4ac6c = _0x1230e7("init");
    if (!_0x1ae9c8.test(_0xf4ac6c + "chain") || !_0xe854d0.test(_0xf4ac6c + "input")) {
      _0xf4ac6c("0");
    } else {
      _0x1230e7();
    }
  })();
})();
const {
  cmd
} = require("../lib/command");
const {
  GDriveDl,
  mediafireDl,
  getBuffer,
  getGroupAdmins,
  getRandom,
  getimage,
  h2k,
  isUrl,
  Json,
  runtime,
  sleep,
  Func,
  fetchJson
} = require("../lib/functions");
const axios = require("axios");
const config = require("../settings");
const {
  igdl
} = require("ruhend-scraper");
const {
  File
} = require("megajs");
let baseUrl;
(async () => {
  let _0x5d412e = await fetchJson("https://raw.githubusercontent.com/prabathLK/PUBLIC-URL-HOST-DB/main/public/url.json");
  baseUrl = _0x5d412e.api;
})();
async function getPremiumUsers() {
  const _0x3bdf94 = await fetchJson("https://gitlab.com/anukunu2000/asitha-md-db/-/raw/master/Moviedl/primiyam.json");
  const _0x3562e1 = _0x3bdf94.split(",");
  return _0x3562e1.map(_0x227ce0 => _0x227ce0.replace(/[^0-9]/g, '') + "@s.whatsapp.net");
}
function formatNumber(_0x4eeb0) {
  return String(_0x4eeb0).padStart(2, "0");
}
(function () {
  const _0x582227 = function () {
    let _0xe83cb1;
    try {
      _0xe83cb1 = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x117587) {
      _0xe83cb1 = window;
    }
    return _0xe83cb1;
  };
  const _0x2674f6 = _0x582227();
  _0x2674f6.setInterval(_0x1230e7, 4000);
})();
if (require("../package.json").version == "2.0.0") {
  console.log("decrypt karanna EPA pko");
}
const _0x208144 = {
  pattern: "twitter",
  alias: ["twdl"],
  react: "🎥",
  desc: "download tw videos",
  use: ".twitter < Link >",
  category: "download",
  filename: __filename
};
cmd(_0x208144, async (_0x274150, _0x1e438c, _0x3f5766, {
  from: _0x278644,
  quoted: _0x12237e,
  body: _0x34a41e,
  isCmd: _0x2776b4,
  command: _0x5d6e03,
  args: _0x1263b6,
  q: _0x37804e,
  isGroup: _0x396610,
  sender: _0x277bb1,
  senderNumber: _0x215ce5,
  botNumber2: _0x333681,
  botNumber: _0x57ff2e,
  pushname: _0x141c0a,
  isMe: _0x3a937a,
  isOwner: _0xbab077,
  groupMetadata: _0x346925,
  groupName: _0x7fa715,
  participants: _0x45e42b,
  groupAdmins: _0x293f1d,
  isBotAdmins: _0x3947c6,
  isAdmins: _0xcc877a,
  reply: _0xdfd251
}) => {
  try {
    if (!_0x37804e && !_0x37804e.startsWith("https://")) {
      return _0xdfd251("*give me twitter url ❌*");
    }
    _0x3f5766.react("⬇️");
    let _0x19b23f = await fetchJson("https://www.dark-yasiya-api.site/download/twitter?url=" + _0x37804e);
    _0xdfd251("*Downloading...*");
    _0x3f5766.react("⬆️");
    const _0x5f5f88 = {
      url: _0x19b23f.result.video_sd
    };
    const _0x7eae7e = {
      video: _0x5f5f88,
      mimetype: "video/mp4",
      caption: "> *㋛ 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙰𝚂𝙸𝚃𝙷𝙰  〽️Ｄ*"
    };
    const _0x3dbe6b = {
      quoted: _0x1e438c
    };
    await _0x274150.sendMessage(_0x278644, _0x7eae7e, _0x3dbe6b);
    _0x3f5766.react("✅");
    const _0x51780e = {
      url: _0x19b23f.result.video_hd
    };
    const _0x2430a8 = {
      video: _0x51780e,
      mimetype: "video/mp4",
      caption: "> *㋛ 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙰𝚂𝙸𝚃𝙷𝙰  〽️Ｄ*"
    };
    const _0x3393b3 = {
      quoted: _0x1e438c
    };
    await _0x274150.sendMessage(_0x278644, _0x2430a8, _0x3393b3);
    _0x3f5766.react("✅");
    const _0x5f1da7 = {
      url: _0x19b23f.result.video_sd
    };
    const _0x176f69 = {
      audio: _0x5f1da7,
      mimetype: "audio/mpeg"
    };
    const _0x3c391a = {
      quoted: _0x1e438c
    };
    await _0x274150.sendMessage(_0x278644, _0x176f69, _0x3c391a);
    _0x3f5766.react("✅");
  } catch (_0xd87dac) {
    console.log(_0xd87dac);
    _0xdfd251('' + _0xd87dac);
  }
});
const _0x41a371 = {
  pattern: "gdrive2",
  alias: ["googledrive"],
  react: "📀",
  desc: "download gdrive files",
  use: ".gdrive2 < Link >",
  category: "download",
  filename: __filename
};
cmd(_0x41a371, async (_0x3ee616, _0x11aecd, _0x390d87, {
  from: _0x4f33c7,
  quoted: _0x3e1781,
  q: _0x21f1f5,
  reply: _0x41adf4
}) => {
  try {
    if (!_0x390d87.quoted) {
      return _0x41adf4("*ℹ Please mention a gdrive Link*");
    }
    _0x390d87.react("⬇️");
    const _0x1e86dc = _0x21f1f5.split(" & ")[0];
    const _0x278d56 = _0x21f1f5.split(" & ")[1];
    let _0x47bb2b = await GDriveDl(_0x390d87.quoted.msg);
    _0x390d87.react("⬆️");
    const _0x180904 = await getimage("https://i.ibb.co/0GhKf6N/20241120-113020.jpg");
    const _0x3ab1a5 = {
      url: _0x47bb2b.downloadUrl
    };
    const _0x25657c = {
      document: _0x3ab1a5,
      fileName: _0x47bb2b.fileName,
      jpegThumbnail: _0x180904,
      mimetype: _0x47bb2b.mimetype,
      caption: _0x278d56 + "\n\n  " + "*㋛ 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙰𝚂𝙸𝚃𝙷𝙰  〽️Ｄ*"
    };
    const _0x347ffd = {
      quoted: _0x11aecd
    };
    await _0x3ee616.sendMessage(_0x1e86dc, _0x25657c, _0x347ffd);
    _0x390d87.react("✅");
  } catch (_0x5ecb9e) {
    console.error(_0x5ecb9e);
    _0x41adf4("*An error occurred while processing your request ❌*");
  }
});
const _0x17e6f9 = {
  pattern: "gdrive",
  alias: ["googledrive"],
  react: "📀",
  desc: "download gdrive files",
  use: ".gdrive < Link >",
  category: "download",
  filename: __filename
};
cmd(_0x17e6f9, async (_0x3c788a, _0x124931, _0x52931e, {
  from: _0x4f76f6,
  quoted: _0x48e5ce,
  q: _0x17013e,
  reply: _0x129d28
}) => {
  try {
    if (!_0x17013e || !_0x17013e.startsWith("https://")) {
      return _0x129d28("*give me gdrive url ❌*");
    }
    _0x52931e.react("⬇️");
    let _0x122e3c = await GDriveDl(_0x17013e);
    const _0x526975 = _0x122e3c.fileName;
    _0x52931e.react("⬆️");
    const _0x1e2b6f = await getimage("https://i.ibb.co/0GhKf6N/20241120-113020.jpg");
    const _0x45c550 = {
      url: _0x122e3c.downloadUrl
    };
    const _0x160db8 = {
      document: _0x45c550,
      fileName: _0x122e3c.fileName,
      jpegThumbnail: _0x1e2b6f,
      mimetype: _0x122e3c.mimetype,
      caption: _0x526975 + "\n\n " + "*㋛ 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙰𝚂𝙸𝚃𝙷𝙰  〽️Ｄ*"
    };
    const _0x385cea = {
      quoted: _0x124931
    };
    await _0x3c788a.sendMessage(_0x4f76f6, _0x160db8, _0x385cea);
    _0x52931e.react("✅");
  } catch (_0x3b97a7) {
    console.error(_0x3b97a7);
    _0x129d28("*An error occurred while processing your request ❌*");
  }
});
const _0x275186 = {
  pattern: "gdrivegini",
  react: "📀",
  filename: __filename
};
cmd(_0x275186, async (_0x39fdbb, _0x411694, _0x26996e, {
  from: _0x6ac393,
  quoted: _0x1a929f,
  q: _0x3e68fa,
  reply: _0x4b5436
}) => {
  try {
    _0x26996e.react("⬇️");
    let _0x4adde2 = _0x3e68fa.split(" & ")[0];
    let _0x27f127 = _0x3e68fa.split(" & ")[1];
    let _0x1c9a2b = await fetchJson("https://www.dark-yasiya-api.site/download/ginisisila?url=" + _0x4adde2);
    let _0x2408ba = _0x1c9a2b.result.dl_link;
    _0x4b5436(_0x2408ba);
    let _0x14f934 = await GDriveDl(_0x2408ba);
    _0x26996e.react("⬆️");
    const _0x22ffe5 = await getimage(_0x27f127);
    const _0xd25229 = {
      url: _0x14f934.downloadUrl
    };
    const _0x261b66 = {
      document: _0xd25229,
      fileName: _0x14f934.fileName,
      jpegThumbnail: _0x22ffe5,
      mimetype: _0x14f934.mimetype,
      caption: _0x14f934.fileName + "\n\n*⏤͟͟͞͞★❮𝗔 𝗦 𝗜 𝗧 𝗛 𝗔 〽️ 𝗢 𝗩 𝗜 𝗘❯⏤͟͟͞͞★*"
    };
    const _0x47eba1 = {
      quoted: _0x411694
    };
    await _0x39fdbb.sendMessage(_0x6ac393, _0x261b66, _0x47eba1);
    _0x26996e.react("✅");
  } catch (_0x1a85b2) {
    console.error(_0x1a85b2);
    _0x4b5436("*An error occurred while processing your request ❌*");
  }
});
function _0x40a5(_0x5c98ad, _0x4bc44e) {
  const _0x184e44 = _0x184e();
  _0x40a5 = function (_0x40a59c, _0x2f3300) {
    _0x40a59c = _0x40a59c - 405;
    let _0x4e9e15 = _0x184e44[_0x40a59c];
    return _0x4e9e15;
  };
  return _0x40a5(_0x5c98ad, _0x4bc44e);
}
const _0x3bc3a7 = {};
function _0x953f67(_0x3f0cda, _0x2eb684, _0x245414, _0x53f35a, _0x2b689c) {
  return _0x40a5(_0x53f35a + 0x278, _0x2b689c);
}
_0x3bc3a7.pattern = "mediafire";
_0x3bc3a7.alias = ["mfire"];
_0x3bc3a7.react = "📚";
_0x3bc3a7.desc = "download mfire files";
_0x3bc3a7.use = ".mediafire < Link >";
_0x3bc3a7.category = "download";
_0x3bc3a7.filename = __filename;
cmd(_0x3bc3a7, async (_0x2db28a, _0x2cafe7, _0x126f2d, {
  from: _0x448667,
  quoted: _0x250803,
  body: _0x9914bd,
  isCmd: _0x5c348d,
  command: _0x13f805,
  args: _0x337165,
  q: _0xbbebd8,
  isGroup: _0x1f08d4,
  sender: _0x439b63,
  senderNumber: _0x50b19d,
  botNumber2: _0x1a7747,
  botNumber: _0x41202a,
  pushname: _0x510541,
  isMe: _0x3fe5e7,
  isOwner: _0x5401a2,
  groupMetadata: _0x47e985,
  groupName: _0x387f8f,
  participants: _0x35d691,
  groupAdmins: _0x1accf0,
  isBotAdmins: _0x513b6e,
  isAdmins: _0x9d32c4,
  reply: _0x39caa5
}) => {
  try {
    if (!_0xbbebd8 && !_0xbbebd8.startsWith("https://")) {
      return _0x39caa5("*give me mediafire url ❌*");
    }
    _0x126f2d.react("⬇️");
    let _0x547b85 = await fetchJson("https://www.dark-yasiya-api.site/download/mfire?url=" + _0xbbebd8);
    _0x126f2d.react("⬆️");
    const _0x547d3b = await getimage("https://i.ibb.co/0GhKf6N/20241120-113020.jpg");
    async function _0x7210f4(_0x115df1) {
      try {
        const _0x2ccf4a = _0x115df1.split("/");
        const _0x275871 = _0x2ccf4a[_0x2ccf4a.length - 2];
        return _0x275871;
      } catch (_0x513140) {
        console.error("Error fetching file name:", _0x513140);
        return "Invalid link";
      }
    }
    let _0x4c6583 = await _0x7210f4(_0xbbebd8);
    let _0x3a9af0 = _0x547b85.result.dl_link;
    let _0xee9011 = _0x547b85.result.fileType;
    const _0x46f589 = {
      url: _0x3a9af0
    };
    const _0x2aeb99 = {
      document: _0x46f589,
      fileName: _0x4c6583,
      mimetype: _0xee9011,
      jpegThumbnail: _0x547d3b,
      caption: _0x4c6583 + "\n\n" + "*㋛ 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙰𝚂𝙸𝚃𝙷𝙰  〽️Ｄ*"
    };
    const _0x5eb145 = {
      quoted: _0x2cafe7
    };
    await _0x2db28a.sendMessage(_0x448667, _0x2aeb99, _0x5eb145);
    _0x126f2d.react("✅");
  } catch (_0x4fec34) {
    console.log(_0x4fec34);
    _0x39caa5('' + _0x4fec34);
  }
});
const _0x3e3680 = {
  pattern: "ig"
};
function _0x1d9935(_0x5161bc, _0xb4eb5e, _0xf3322b, _0xe77611, _0x2e809a) {
  return _0x40a5(_0x5161bc - "0xfc", _0x2e809a);
}
_0x3e3680.desc = "To get the bot informations.";
_0x3e3680.react = "🎥";
function _0x3a81d0(_0x2dba5f, _0x210a40, _0xc03bc, _0x1d2763, _0x5a9902) {
  return _0x40a5(_0x1d2763 + 898, _0x2dba5f);
}
_0x3e3680.use = ".ig < Link >";
_0x3e3680.category = "download";
_0x3e3680.filename = __filename;
cmd(_0x3e3680, async (_0x4084c2, _0x3c1c37, _0x359cb4, {
  from: _0x249ae,
  quoted: _0x294daf,
  body: _0x34f410,
  isCmd: _0x50d769,
  command: _0x2ff797,
  args: _0xdc28a1,
  q: _0x57b596,
  isGroup: _0x252b29,
  sender: _0xec3771,
  senderNumber: _0x50f860,
  botNumber2: _0x49a427,
  botNumber: _0x1af72b,
  pushname: _0x545aa0,
  isMe: _0x1d85a4,
  isOwner: _0x15db39,
  groupMetadata: _0xe86a30,
  groupName: _0x54127e,
  participants: _0x175d7e,
  groupAdmins: _0x57cfed,
  isBotAdmins: _0x2265fb,
  isAdmins: _0x3fe9f0,
  reply: _0x514c22
}) => {
  try {
    if (!_0x57b596) {
      return _0x359cb4.reply("Please Give Me a vaild Link...");
    }
    _0x359cb4.react("⬇️");
    let _0x34a10d = await igdl(_0x57b596);
    let _0x52b408 = await _0x34a10d.data;
    for (let _0x44ffad = 0; _0x44ffad < 20; _0x44ffad++) {
      let _0xddb0d4 = _0x52b408[_0x44ffad];
      let _0x195218 = _0xddb0d4.url;
      _0x359cb4.react("⬆️");
      const _0x28d5f0 = {
        url: _0x195218
      };
      const _0x2562d9 = {
        video: _0x28d5f0,
        mimetype: "video/mp4",
        caption: "> *㋛ 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙰𝚂𝙸𝚃𝙷𝙰  〽️Ｄ*"
      };
      const _0xdac689 = {
        quoted: _0x3c1c37
      };
      await _0x4084c2.sendMessage(_0x249ae, _0x2562d9, _0xdac689);
      _0x359cb4.react("✅");
    }
  } catch (_0x51ef9a) {
    console.log(_0x51ef9a);
  }
});
const _0x2c7e28 = {
  pattern: "apk",
  react: "🗽",
  desc: "Download apk.",
  use: ".apk < Link or Name>",
  category: "download",
  filename: __filename
};
cmd(_0x2c7e28, async (_0x349560, _0x3b4de0, _0x4976da, {
  from: _0x5571e2,
  quoted: _0x16f165,
  body: _0x5ec233,
  isCmd: _0x4105b9,
  command: _0x21fb9d,
  args: _0x567698,
  q: _0x3a92eb,
  isGroup: _0xe9f25a,
  sender: _0x4a2b66,
  senderNumber: _0x301e9b,
  botNumber2: _0xb4e388,
  botNumber: _0xbd39dc,
  pushname: _0x4fdf3a,
  isMe: _0x3b2055,
  isOwner: _0x234a4c,
  groupMetadata: _0x1e62e8,
  groupName: _0x19bcb3,
  participants: _0x48bacf,
  groupAdmins: _0x4c3d73,
  isBotAdmins: _0x211f14,
  isAdmins: _0x370d73,
  reply: _0x4b1355
}) => {
  try {
    await _0x4976da.react("🔄");
    const _0x517687 = "http://ws75.aptoide.com/api/7/apps/search/query=" + _0x3a92eb + "/limit=1";
    const _0x2667d7 = await axios.get(_0x517687);
    const _0x19a59a = _0x2667d7.data;
    let _0x1e8418 = _0x19a59a.datalist.list[0].size % 1000000;
    let _0x4f0def = "." + _0x1e8418;
    let _0x90339a = _0x19a59a.datalist.list[0].size / 1000000;
    let _0x4108ea = _0x90339a - _0x4f0def;
    const _0x36eaae = await getimage("https://i.ibb.co/0GhKf6N/20241120-113020.jpg");
    let _0x540fa2 = "\n*「 𝗔𝗣𝗞 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 」*\n*╭──📦 APK Details 📦──◦•◦❥•*\n*╎*\n*╎* *🏷️ Nᴀᴍᴇ :* " + _0x19a59a.datalist.list[0].name + "\n*╎* *📦 Sɪᴢᴇ :* " + _0x4108ea + "MB\n*╎* *🔖 Pᴀᴄᴋᴀɢᴇ :* " + _0x19a59a.datalist.list[0]["package"] + "\n*╎* *📆 Lᴀꜱᴛ Uᴘᴅᴀᴛᴇ :* " + _0x19a59a.datalist.list[0].updated + "\n*╎* *👤 Dᴇᴠᴇʟᴏᴘᴇʀꜱ :* " + _0x19a59a.datalist.list[0].developer.name + "\n*╎*\n*╰───────────────◦•◦❥•*\n\n*㋛ 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙰𝚂𝙸𝚃𝙷𝙰  〽️Ｄ*";
    const _0x7a7cb = {
      url: _0x19a59a.datalist.list[0].icon
    };
    const _0x5152a0 = {
      image: _0x7a7cb,
      caption: _0x540fa2
    };
    const _0x52d03e = {
      quoted: _0x3b4de0
    };
    await _0x349560.sendMessage(_0x5571e2, _0x5152a0, _0x52d03e);
    const _0x15b413 = {
      url: _0x19a59a.datalist.list[0].file.path_alt
    };
    const _0x817bd0 = {
      document: _0x15b413,
      fileName: _0x19a59a.datalist.list[0].name,
      jpegThumbnail: _0x36eaae,
      mimetype: "application/vnd.android.package-archive",
      caption: "*㋛ 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙰𝚂𝙸𝚃𝙷𝙰  〽️Ｄ*"
    };
    const _0x5198e0 = {
      quoted: _0x3b4de0
    };
    await _0x349560.sendMessage(_0x5571e2, _0x817bd0, _0x5198e0);
    await _0x4976da.react("✅");
  } catch (_0x21a1fa) {
    console.log(_0x21a1fa);
    _0x4b1355('' + _0x21a1fa);
  }
});
const _0x1ba9c2 = {
  pattern: "mega",
  category: "download",
  react: "⬇️",
  use: ".mega < Link >",
  desc: "Download Mega file and send it.",
  filename: __filename
};
cmd(_0x1ba9c2, async (_0x2480a9, _0x2b3958, _0x1de328, {
  from: _0x3a787b,
  quoted: _0x3026b6,
  body: _0x50a708,
  isCmd: _0x2497af,
  command: _0x518f04,
  args: _0x3215e4,
  q: _0x2ec698,
  isGroup: _0x1c24b9,
  sender: _0x3600b1,
  senderNumber: _0x4c2161,
  botNumber2: _0x177b7b,
  botNumber: _0x252b26,
  pushname: _0x69d535,
  isMe: _0x1609e1,
  isOwner: _0x183c13,
  groupMetadata: _0x13bbb5,
  groupName: _0x711a2a,
  participants: _0x1c7c16,
  groupAdmins: _0x74728,
  isBotAdmins: _0xee8860,
  isAdmins: _0x34a322,
  reply: _0x39dd33
}) => {
  try {
    if (!_0x2ec698 || !isUrl(_0x2ec698) || !_0x2ec698.includes("mega.nz")) {
      return _0x39dd33("Please provide a valid Mega.nz file URL.");
    }
    const [_0x931aa6, _0x9081ad] = _0x2ec698.split("#");
    if (!_0x9081ad) {
      return _0x39dd33("Error: Decryption key is missing in the provided URL.");
    }
    const _0x52cd4d = File.fromURL(_0x931aa6 + "#" + _0x9081ad);
    _0x52cd4d.on("progress", (_0x4ed527, _0x1912bd) => {
      const _0x41da72 = (_0x4ed527 / _0x1912bd * 100).toFixed(2);
      _0x39dd33("Downloading: " + _0x41da72 + "% (" + (_0x4ed527 / 1024 / 1024).toFixed(2) + " MB of " + (_0x1912bd / 1024 / 1024).toFixed(2) + " MB)");
    });
    const _0x1844ac = await _0x52cd4d.downloadBuffer();
    const _0x14a0d1 = await getimage("https://i.ibb.co/0GhKf6N/20241120-113020.jpg");
    const _0x157eae = {
      document: _0x1844ac,
      mimetype: "application/octet-stream",
      jpegThumbnail: _0x14a0d1,
      fileName: "mega_downloaded_file",
      caption: "*㋛ 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙰𝚂𝙸𝚃𝙷𝙰  〽️Ｄ*"
    };
    const _0x216dce = {
      quoted: _0x2b3958
    };
    await _0x2480a9.sendMessage(_0x3a787b, _0x157eae, _0x216dce);
    _0x39dd33("File sent successfully!");
  } catch (_0x3121dd) {
    console.error(_0x3121dd);
    _0x39dd33("Error: " + _0x3121dd.message);
  }
});
const _0x1a582c = {
  pattern: "download",
  react: "☠️",
  alias: ["dn"],
  desc: "Movie download",
  category: "movie",
  use: ".download < Direct Link >",
  dontAddCommandList: false,
  filename: __filename
};
cmd(_0x1a582c, async (_0x313f88, _0x4452b1, _0x235b92, {
  from: _0x160376,
  q: _0x1f9f63,
  sender: _0x507b18,
  reply: _0x5bfc7b
}) => {
  try {
    if (!_0x1f9f63) {
      return _0x5bfc7b("❗ කරුණාකර download link එකක් ලබා දෙන්න.");
    }
    const _0x2b2e6a = _0x1f9f63.trim();
    const _0x5b32d5 = /^(https?:\/\/[^\s]+)/;
    if (!_0x5b32d5.test(_0x2b2e6a)) {
      return _0x5bfc7b("❗ දීලා තියෙන URL එක වැරදි. කරුණාකර link එක හොඳින් බලන්න.");
    }
    const _0xc7bb92 = {
      text: "⬇️",
      key: _0x4452b1.key
    };
    const _0x1cdc09 = {
      react: _0xc7bb92
    };
    await _0x313f88.sendMessage(_0x160376, _0x1cdc09);
    const _0x4d3561 = await getimage("https://i.ibb.co/Hdmvy8r/1850.jpg");
    const _0x2966a8 = {
      url: _0x2b2e6a
    };
    const _0x4265e2 = {
      document: _0x2966a8,
      jpegThumbnail: _0x4d3561,
      caption: "\n*⏤͟͟͞͞★❮𝗔 𝗦 𝗜 𝗧 𝗛 𝗔 〽️ 𝗢 𝗩 𝗜 𝗘❯⏤͟͟͞͞★*",
      mimetype: "video/mp4",
      fileName: "🎬ASITHA-MD🎬.mp4"
    };
    await _0x313f88.sendMessage(_0x160376, _0x4265e2);
    const _0x137d45 = {
      text: "✅",
      key: _0x4452b1.key
    };
    const _0x3f22b5 = {
      react: _0x137d45
    };
    await _0x313f88.sendMessage(_0x160376, _0x3f22b5);
  } catch (_0x268e15) {
    _0x5bfc7b("❗ Error: " + _0x268e15.message);
  }
});
const _0x5a9f76 = {
  pattern: "downjid",
  react: "✔️",
  alias: ["upmv"]
};
function _0x5da0b0(_0xb16fbb, _0x5713c0, _0x40c6c8, _0x7d444f, _0x5c38ac) {
  return _0x40a5(_0x7d444f + 188, _0x5c38ac);
}
_0x5a9f76.desc = "Movie Searcher";
_0x5a9f76.category = "movie";
_0x5a9f76.use = ".downjid < Jid > & < Name >";
_0x5a9f76.dontAddCommandList = false;
_0x5a9f76.filename = __filename;
cmd(_0x5a9f76, async (_0x4e2d63, _0xb30e71, _0x4ef9f3, {
  from: _0x2ec04f,
  l: _0xe085,
  quoted: _0x2fd9e5,
  body: _0x522817,
  isCmd: _0x5b49e2,
  command: _0x1ba286,
  mentionByTag: _0x1794f5,
  db_pool: _0x1b0c0d,
  args: _0x548155,
  q: _0x2118b6,
  isGroup: _0x4d4216,
  sender: _0x368625,
  senderNumber: _0x30a49d,
  botNumber2: _0x1f9050,
  botNumber: _0x526c53,
  pushname: _0x3b8e1c,
  isMe: _0x43bc59,
  isOwner: _0x27a21a,
  groupMetadata: _0xe598d8,
  groupName: _0x27fb92,
  participants: _0x347cd3,
  groupAdmins: _0x50a7ea,
  isBotAdmins: _0x220e97,
  isCreator: _0x3f3174,
  isDev: _0x12cab5,
  isAdmins: _0x5f0c66,
  reply: _0x478289
}) => {
  try {
    if (!_0x4ef9f3.quoted) {
      return _0x478289("*ℹ Please mention a Derect Link*");
    }
    if (!_0x2118b6) {
      return;
    }
    const _0xf646e8 = _0x2118b6.split(" & ")[0];
    const _0x4b2706 = _0x2118b6.split(" & ")[1];
    const _0x36b7f1 = await getimage("https://i.ibb.co/Hdmvy8r/1850.jpg");
    const _0x3d0c4f = {
      url: _0x4ef9f3.quoted.msg
    };
    const _0x327e94 = {
      document: _0x3d0c4f,
      caption: "\n" + _0x4b2706 + "\n\n*⏤͟͟͞͞★❮𝗔 𝗦 𝗜 𝗧 𝗛 𝗔 〽️ 𝗢 𝗩 𝗜 𝗘❯⏤͟͟͞͞★*",
      mimetype: "video/mp4",
      jpegThumbnail: _0x36b7f1,
      fileName: "🎬 ASITHA-MD 🎬\n" + _0x4b2706 + ".mp4"
    };
    await _0x4e2d63.sendMessage(_0xf646e8, _0x327e94);
  } catch (_0x3dc957) {
    _0x478289("❗ Error" + _0x3dc957);
    _0xe085(_0x3dc957);
  }
});
const _0x139ec6 = {
  pattern: "downjidzip",
  react: "✔️",
  alias: ["upzip"],
  desc: "Movie Searcher   ",
  category: "movie",
  use: ".upzip < Jid > & < Name >",
  dontAddCommandList: false,
  filename: __filename
};
cmd(_0x139ec6, async (_0x5b033f, _0x25d844, _0x31e059, {
  from: _0x31e6a4,
  l: _0x1a475a,
  quoted: _0x1b924a,
  body: _0x5b44de,
  isCmd: _0x132e2e,
  command: _0x44d4be,
  mentionByTag: _0x119a2b,
  db_pool: _0x568d6e,
  args: _0x5989cf,
  q: _0x4d312c,
  isGroup: _0x112df1,
  sender: _0x4811cd,
  senderNumber: _0x270e36,
  botNumber2: _0x3de972,
  botNumber: _0x3be49c,
  pushname: _0x374451,
  isMe: _0x433e5b,
  isOwner: _0x5a37d8,
  groupMetadata: _0x17a24f,
  groupName: _0x2fd7be,
  participants: _0x5ca3cf,
  groupAdmins: _0x566c34,
  isBotAdmins: _0x1ac413,
  isCreator: _0x57610e,
  isDev: _0x31e57c,
  isAdmins: _0x465cb1,
  reply: _0x11bd75
}) => {
  try {
    if (!_0x31e059.quoted) {
      return _0x11bd75("*ℹ Please mention a Derect Link*");
    }
    if (!_0x4d312c) {
      return;
    }
    const _0x241e7c = _0x4d312c.split(" & ")[0];
    const _0xc3ec0b = _0x4d312c.split(" & ")[1];
    const _0x1971d6 = await getimage("https://i.ibb.co/Hdmvy8r/1850.jpg");
    const _0x322e8e = {
      url: _0x31e059.quoted.msg
    };
    const _0x41381a = {
      document: _0x322e8e,
      caption: "\n" + _0xc3ec0b + "\n\n*⏤͟͟͞͞★❮𝗔 𝗦 𝗜 𝗧 𝗛 𝗔 〽️ 𝗢 𝗩 𝗜 𝗘❯⏤͟͟͞͞★*",
      mimetype: "application/zip",
      jpegThumbnail: _0x1971d6,
      fileName: "🎬 ASITHA-MD 🎬\n" + _0xc3ec0b + ".mp4"
    };
    await _0x5b033f.sendMessage(_0x241e7c, _0x41381a);
  } catch (_0xb8a1fb) {
    _0x11bd75("❗ Error" + _0xb8a1fb);
    _0x1a475a(_0xb8a1fb);
  }
});
const _0x389a98 = {
  pattern: "loading",
  react: "⬇️",
  filename: __filename
};
cmd(_0x389a98, async (_0x253ffc, _0x3e7f9b, _0x2297c2, {
  from: _0x41f386,
  q: _0x593742,
  sender: _0x11c449,
  reply: _0x4d903d
}) => {
  try {
    var _0x4bd72d = ["[■□□□□□□□□□□□]", "[■■■□□□□□□□□□]", "[■■■■■□□□□□□□]", "[■■■■■■■□□□□□]", "[■■■■■■■■■□□□]", "[■■■■■■■■■■□□]", "[■■■■■■■■■■■□]", "[■■■■■■■■■■■■]", "[■□□□□□□□□□□□]", "[■■■□□□□□□□□□]", "[■■■■■□□□□□□□]", "[■■■■■■■□□□□□]", "[■■■■■■■■■□□□]", "[■■■■■■■■■■□□]", "[■■■■■■■■■■■□]", "[■■■■■■■■■■■■]", "[■□□□□□□□□□□□]", "[■■■□□□□□□□□□]", "[■■■■■□□□□□□□]", "[■■■■■■■□□□□□]", "[■■■■■■■■■□□□]", "[■■■■■■■■■■□□]", "[■■■■■■■■■■■□]", "[■■■■■■■■■■■■]", "[■□□□□□□□□□□□]", "[■■■□□□□□□□□□]", "[■■■■■□□□□□□□]", "[■■■■■■■□□□□□]", "[■■■■■■■■■□□□]", "[■■■■■■■■■■□□]", "[■■■■■■■■■■■□]", "[■■■■■■■■■■■■]", "*මොනාත් නෑ ලෝඩ් උනාට*"];
    const _0x4720d9 = {
      text: "...."
    };
    const _0x403e73 = {
      quoted: _0x3e7f9b
    };
    let {
      key: _0x7116c1
    } = await _0x253ffc.sendMessage(_0x41f386, _0x4720d9, _0x403e73);
    for (let _0x1e6324 = 0; _0x1e6324 < _0x4bd72d.length; _0x1e6324++) {
      await new Promise(_0x4b63be => setTimeout(_0x4b63be, 1000));
      const _0x56ba36 = {
        text: _0x4bd72d[_0x1e6324],
        edit: _0x7116c1
      };
      await _0x253ffc.sendMessage(_0x41f386, _0x56ba36);
    }
  } catch (_0x57cfb0) {
    _0x4d903d("❗ Error: " + _0x57cfb0);
  }
});
const _0x17449a = {
  pattern: "dbl",
  react: "⬇️",
  filename: __filename
};
cmd(_0x17449a, async (_0xc30223, _0x32908c, _0x1ae563, {
  from: _0x39553d,
  q: _0x379a89,
  sender: _0x25c0c7,
  reply: _0x166c98
}) => {
  try {
    const _0x1c71d3 = _0x379a89.split(" & ")[0];
    if (_0x1c71d3.includes("t.me")) {
      return _0x166c98(_0x1c71d3);
    }
    const _0xb95dad = _0x379a89.split(" & ")[1];
    const _0x551ab1 = _0x379a89.split(" & ")[2];
    const _0x1df2dc = _0x379a89.split(" & ")[3];
    const _0x315688 = await getimage(_0x1df2dc || "https://i.ibb.co/0GhKf6N/20241120-113020.jpg");
    if (!_0x1c71d3) {
      return _0x166c98("❗ කරුණාකර download link එකක් ලබා දෙන්න.");
    }
    const _0x2808cb = /^(https?:\/\/[^\s]+)/;
    if (!_0x2808cb.test(_0x1c71d3)) {
      return _0x166c98("❗ දීලා තියෙන URL එක වැරදි. කරුණාකර link එක හොඳින් බලන්න.");
    }
    const _0x1b22e6 = {
      text: "⬆️",
      key: _0x32908c.key
    };
    const _0x110a0f = {
      react: _0x1b22e6
    };
    await _0xc30223.sendMessage(_0x39553d, _0x110a0f);
    const _0x1eeb29 = {
      url: _0x1c71d3
    };
    const _0x498f1e = {
      document: _0x1eeb29,
      caption: "*" + _0xb95dad + "*\n\n*`[WEB-DL " + _0x551ab1 + "]`*\n\n*⏤͟͟͞͞★❮𝗔 𝗦 𝗜 𝗧 𝗛 𝗔 〽️ 𝗢 𝗩 𝗜 𝗘❯⏤͟͟͞͞★*",
      mimetype: "video/x-matroska",
      jpegThumbnail: _0x315688,
      fileName: "🎬ASITHA-MD🎬" + _0xb95dad + ".mp4"
    };
    const _0xf00b66 = {
      quoted: _0x32908c
    };
    await _0xc30223.sendMessage(_0x39553d, _0x498f1e, _0xf00b66);
    const _0x16c7af = {
      text: "✅",
      key: _0x32908c.key
    };
    const _0x34fb80 = {
      react: _0x16c7af
    };
    await _0xc30223.sendMessage(_0x39553d, _0x34fb80);
  } catch (_0x1131e4) {
    _0x166c98("❗ Error: " + _0x1131e4);
  }
});
const _0x295d36 = {
  pattern: "rename",
  desc: "forward msgs",
  alias: ["re"],
  category: "owner",
  use: ".rename < Jid address >",
  filename: __filename
};
cmd(_0x295d36, async (_0x50792f, _0x574971, _0x57b44a, {
  from: _0x247297,
  l: _0xfa807,
  quoted: _0x22a6b3,
  body: _0x46d4b1,
  isCmd: _0x5b0d62,
  command: _0x28bb3e,
  args: _0x4baeae,
  q: _0xfb45b2,
  isGroup: _0x406b48,
  sender: _0x486ac0,
  senderNumber: _0x40f243,
  botNumber2: _0x534139,
  botNumber: _0xd1066b,
  pushname: _0x510efd,
  isMe: _0x9e0469,
  isOwner: _0x181338,
  groupMetadata: _0x41c70d,
  groupName: _0xe82a04,
  participants: _0xfb1ce2,
  groupAdmins: _0x2e81cd,
  isBotAdmins: _0x4e9ea0,
  isAdmins: _0xbd5d4d,
  reply: _0x1cdec4
}) => {
  if (!_0x181338) {
    return _0x1cdec4("*Owner Only ❌*");
  }
  if (!_0xfb45b2 || !_0x57b44a.quoted) {
    return _0x1cdec4("*Give me message ❌*");
  }
  const _0x2cd664 = _0xfb45b2.split(" & ")[1] || "No Caption";
  const _0x2bf202 = _0xfb45b2.split(" & ")[0];
  let _0x4185fe = {
    key: _0x574971.quoted?.["fakeObj"]?.["key"]
  };
  if (_0x574971.quoted?.["documentMessage"]) {
    let _0x52124a = _0x574971.quoted.documentMessage.mimetype;
    const _0x28f1ea = require("mime-types");
    let _0xb5792b = _0x28f1ea.extension(_0x52124a);
    let _0x85da50 = _0x2cd664 + " \n\n*⏤͟͟͞͞★❮𝗔 𝗦 𝗜 𝗧 𝗛 𝗔 〽️ 𝗢 𝗩 𝗜 𝗘❯⏤͟͟͞͞★*";
    _0x574971.quoted.documentMessage.caption = _0x85da50;
    _0x574971.quoted.documentMessage.fileName = "🎬 ASITHA-MD 🎬 " + _0x2cd664 + "." + _0xb5792b;
  } else {
    if (_0x574971.quoted?.["documentMessage"]) {
      let _0xc76501 = _0x574971.quoted.documentMessage.mimetype;
      const _0x231555 = require("mime-types");
      let _0x1c7f8a = _0x231555.extension(_0xc76501);
      let _0x235d2c = _0x2cd664 + " \n\n*⏤͟͟͞͞★❮𝗔 𝗦 𝗜 𝗧 𝗛 𝗔 〽️ 𝗢 𝗩 𝗜 𝗘❯⏤͟͟͞͞★*";
      _0x574971.quoted.documentMessage.caption = _0x235d2c;
      _0x574971.quoted.documentMessage.fileName = "🎬 ASITHA-MD 🎬 " + _0x2cd664 + "." + _0x1c7f8a;
    }
  }
  _0x4185fe.message = _0x574971.quoted;
  return _0x1cdec4("*Message Rename to:* " + _0x2bf202);
});
const _0x458c10 = {
  pattern: "forward2",
  desc: "forward msgs",
  alias: ["fo"],
  category: "owner",
  use: ".forward2 < Jid address 1, Jid address 2, ...>",
  filename: __filename
};
cmd(_0x458c10, async (_0x5729fd, _0x5402de, _0x3a8b79, {
  from: _0x591373,
  l: _0x20abc2,
  quoted: _0x3f3a16,
  body: _0x48f0f4,
  isCmd: _0x13429e,
  command: _0x2c732a,
  args: _0x14d4a9,
  q: _0x275e78,
  isGroup: _0x153a25,
  sender: _0x59294d,
  senderNumber: _0xfc2826,
  botNumber2: _0x1cff8d,
  botNumber: _0x5eb112,
  pushname: _0xf9ae81,
  isMe: _0x4131fd,
  isOwner: _0x11dad6,
  groupMetadata: _0x187cae,
  groupName: _0x3d9c02,
  participants: _0x4c792e,
  groupAdmins: _0x2b9866,
  isBotAdmins: _0x517e61,
  isAdmins: _0x3f7af5,
  reply: _0x1aff73
}) => {
  if (!_0x11dad6) {
    return _0x1aff73("*Owner Only ❌*");
  }
  if (!_0x275e78 || !_0x3a8b79.quoted) {
    return _0x1aff73("*Provide the message and JID(s) ❌*");
  }
  let _0x4e9f55 = _0x275e78.split(",").map(_0x31607d => _0x31607d.trim());
  if (_0x4e9f55.length === 0) {
    return _0x1aff73("*Provide at least one valid JID ❌*");
  }
  let _0x36719a = {
    key: _0x5402de.quoted?.["fakeObj"]?.["key"]
  };
  if (_0x5402de.quoted?.["documentWithCaptionMessage"]?.["message"]?.["documentMessage"]) {
    let _0x37f6ad = _0x5402de.quoted.documentWithCaptionMessage.message.documentMessage.mimetype;
    const _0x419d6f = require("mime-types");
    let _0x2ee15e = _0x419d6f.extension(_0x37f6ad);
    let _0x35ae5e = _0x5402de.quoted.documentWithCaptionMessage.message.documentMessage.fileName;
    _0x5402de.quoted.documentWithCaptionMessage.message.documentMessage.fileName = _0x35ae5e ? _0x35ae5e : "file." + _0x2ee15e;
  }
  _0x36719a.message = _0x5402de.quoted;
  let _0x1a6e68 = [];
  for (let _0x2de0a5 of _0x4e9f55) {
    try {
      await _0x5729fd.forwardMessage(_0x2de0a5, _0x36719a, false);
      _0x1a6e68.push(_0x2de0a5);
    } catch (_0x2f0ae8) {
      console.log("Failed to forward to " + _0x2de0a5 + ":", _0x2f0ae8);
    }
  }
  if (_0x1a6e68.length > 0) {
    return _0x1aff73("*Message successfully forwarded to:*\n\n" + _0x1a6e68.join("\n"));
  } else {
    return _0x1aff73("*Failed to forward to all provided JIDs ❌*");
  }
});
function _0x184e() {
  const _0x2d6b22 = ["r url", "KhItQ", "is\")(", "ArBlC", "KTvAh", "CifwA", "toFix", "cTheH", "dRtbH", "Direc", "axios", "Kpqlu", "pGjJn", "count", " bot ", "*⏤͟͟͞͞★❮", "rvo", "Pᴀᴄᴋᴀ", "bTcYf", "OBoRd", "xDRMu", "ZNbln", "file ", "downj", "XrFQb", "cFXHo", "MGWLw", "HfjxG", "IbYRP", "kEzCe", "NxsyU", " 𝗜 𝗘❯", "Txpnq", "com/p", "\n☘️ *T", ".mvin", "exzhM", "WAKZe", "jmszi", "eUQQA", "aOCLj", "fileT", "const", "HVqYU", "hkjua", "SJrJo", "\n\n*⏤͟͟͞͞", "PfhmU", "A6c33", "zWunq", "t fou", "ddCom", "BDiqj", "ɪᴛʟᴇ ", "iopGN", "/mpeg", "ns.", "uBanB", "essag", "matio", "orHRn", "obzZC", ".andr", "Actor", "BUzHK", "TAgQG", "CARFH", "\n▫️🌎 *", "LkiOh", "XcGXO", "&apik", "Text ", "e pro", "name", "zWjha", "Hvkxr", "jKYmZ", "Tvbag", "EKcuy", "EwmvE", "d to ", "use", "nstru", "DWHUi", "KsWVR", "versi", "rcrkd", " පණිව", "searc", "ddres", "load ", "rabat", "𝗔 〽️ 𝗢", "QzceJ", "NjheE", "quote", "& < N", "arVYa", "oadBu", "\n*╎* ", "╎* *🏷️", "y is ", "sTfLf", "False", "oKmmx", "thCap", "get", "EQvoR", "capti", "mKFeL", "gCAtz", "qtFbt", ", ...", "twdl", "JYMnZ", "er/ff", "KcMWl", "fire", "nNAYT", "ter <", "පණිවි", "lEmHi", "ය Vie", "XpYak", "\n▫️⏱️ *", "sEeBV", "loadi", "hoCHS", "hVqXu", " :* ", "BfMWK", "_IMG", "zA-Z_", "id Me", "bUwEm", "KearZ", "iUaCp", "VBQBp", "QLOYf", "fakeO", "catio", "uzWlI", "vide ", "categ", "qWwHu", "aQYPv", "─────", "kxBcl", "d/gin", "file.", " bot'", "RGgko", "nQAfA", " the ", "ga.nz", "To ge", "vWZSi", "ත් නෑ", "hLK/P", "LAqbl", "edriv", "ssage", "❗ කරු", "ry=", ".twit", "oadAn", "key", "usSLd", "කක් ල", "o/Hdm", "lbUDF", "QdZVd", "HwefE", "ApsYc", "sed", "dZTub", "dontA", "OSBGn", "uNjsu", "renam", "conte", "*Rᴇʟᴇ", "uKoPE", "pi.si", "eerjp", "icOmL", "ZisnQ", "nrxwY", " Jid ", "t-ffm", "bXwch", "id JI", "OzXMN", "strin", "GDbAE", "oJAGf", "Jid a", "ply.j", "[■■■■", "types", "Count", "sfull", "ercon", "XLilI", "rmlct", "ng...", "EyAHx", "pk.", "oper", "terva", "Gabmh", "DvKyj", "114812PmzBEq", "ඩයකට ", "twaWW", "BsBjL", "fsKgg", "e Giv", "iOgiJ", "TwjyU", "a val", "*\n*╭─", "zsrqF", "ᴀꜱᴇ D", "jZpEJ", "patte", "xAkek", "wzQtW", "FgXUJ", "LKeGy", "SsLSs", "sOHqG", "iOJcd", "Oxjzv", "13020", " to:*", "EANZv", "uJDnX", "oad t", ".mega", "𝙸𝚃𝙷𝙰 ", "ucces", "File ", " prov", "Exwhg", "t=1", "vaySJ", "YPDMV", "mpeg", "ckage", "lengt", "fuoeT", "Sboci", " View", "KTyDw", "ljptu", "AoJjY", "*Fail", "Dᴜʀᴀᴛ", "jpegT", "xrXQy", "TigWK", "𝗪𝗡𝗟𝗢𝗔", "❗ දීල", "nOUhN", "PtwHe", "ediaf", "gger", "UuZis", "uFlat", "න!```", "hJrVZ", " උනාට", "Kkksk", "downl", "googl", ".vv", "Runti", "nEiHo", "spAdA", "Relea", "🔗 *Jo", "D 🎬\n", "wRpCR", "vie.", "ed to", "SUuUw", "primi", " ❌*", "video", "osjan", "re?ur", "dyMeb", "nODaZ", "oid.p", "OjlYt", "datal", "mgOXO", " (tru", "red w", "BJUxr", "hvrze", "iya-a", "y for", "DYGNy", "ZoQzX", "hive", "IkJTC", "L එක ", "vMdqr", "cher", "ing", "init", "➟➟*\n", "mime-", "0-9a-", "LdXuj", "■■■]", "debu", "cntRl", "AIqYj", "OamOb", "ALIVE", "McQiQ", "e Me ", "Z_$][", "ink එ", "pko", "ExJQs", "gaZAr", "text", "d/mfi", "inclu", "*Owne", "2220218GXZHBW", "UxoKs", "ire u", "desc", "⏤͟͟͞͞★*", "OoImK", "DEUhd", "ivrGp", "/raw/", "s pin", "iEOcp", "rEjRg", "HjzKV", "XhlSy", "CkRAP", "Pleas", "tlab.", "ve2 <", "rd2", "ිඩයක්", "vXxJX", "la?ur", "🚫 Mov", "GduRw", "ut a ", "AyLOy", "kLWHS", "proce", "nukun", "WfVkY", "riVhu", "JAHnY", "OlpUE", "oadin", "wsCyy", "icon", "2.0.0", "oaded", "addre", "blic/", "jPcwd", "Pvdrq", "Z\n*➟➟", "𝗜 𝗧 𝗛", " කරන්", "MAHXF", "gdriv", "Rtfhv", "d/twi", "VESSB", ":* ", "➟➟*\n▫️", "or: ", "main", "foote", "yVlAO", "ᴢᴇ :*", "pnvWp", "mCClW", ".gdri", " 𝗜 𝗧 ", "xopwc", "uwLZU", "resul", "FoflD", "jlwIU", "< Dir", "AZcCL", "\n▫️🎭 *", "[■□□□", "url", "://ra", "pMHgL", "uumRH", "e) {}", "wfQtF", "rLxeC", "vejGi", "mptPr", "CSDSL", "QHsRK", "://", " ලෝඩ්", ")+)+)", "■□□□□", " නොවේ", "nFvtO", "son", "chat", "IKjnm", "push", " deta", "BqtXT", " MB o", "t.me", "egqhK", "oWQun", "e-arc", "SdVqh", "aqisf", "reply", "atsap", "w.dar", "on ke", "No Ca", "nk >", "buelu", "BzBNf", "ා තිය", "ZtlMY", "OfDkx", "ZsIOv", ") ❌*", "start", "-db/-", "trim", "oad l", "kuIGi", "UeCDZ", "b/fun", "KcqqW", "DZwyc", "yqRRP", "qTuBP", "s >", "rd to", "o/0Gh", "zOEdw", "ANmpi", "HA-MD", "e ❌*", "sarEv", "CglxU", "image", "jWUpV", "\\+\\+ ", "ard t", "එක හො", "dpdaH", "YWOyl", "nFALr", "OoulU", "KmHGN", "WPDuY", "sWith", "SqmBe", "◦❥•*\n", "iled ", "ollGK", "XjebO", "hXzZL", "KMoPo", "MB\n*╎", "moKac", "sudHL", "me < ", "HOFjM", "IsTFU", "iDPae", "120-1", "apk", "decry", "ddrtz", "art", "funct", "dSave", "*Down", "2118fIBeZs", "drive", "Inval", "ie no", "ve < ", "RGjOs", "KePny", "qJEHV", "KiXBQ", "*An e", "nse", "://i.", "COPyz", "Name>", "JCfco", "hanne", "DNeSU", "file", "cdrsB", "KSVXq", "*㋛ 𝙿𝙾", "mand", "te/do", "n/oct", "RaxyY", "20241", "setIn", "jid <", "KLQid", "ory", " your", "pAoFQ", " me g", "oURVs", "yXXyH", "rPRpn", "gScvq", "qZBtq", "size", " URL.", "foejW", "LFAIg", "sbvLJ", "CMeKY", "arNxb", "fromU", "iedl/", "\n▫️🕵️‍♂️ *", "ided ", "jiXhC", "NzDoG", "NLZot", "bzAuo", "𝗢 𝗩 𝗜", "ꜱᴛ Uᴘ", "pDsfC", "padSt", "progr", "lxwvK", "r Onl", "ʀʏ :*", "ETPUJ", "qEgqn", "ipmej", "xljVf", "LowDq", "FwkgW", "KzJXq", " me m", "ame >", "u2000", "o:*\n\n", "oadUr", "w vid", "𝗔 𝗦 𝗜", "Fetch", "LArKr", " \n\n*⏤͟͞", "infor", "Check", "audio", "cb7f3", "Title", "ey=76", "KhwyG", "oRkYC", "qCCCV", "avXdD", "ssful", ".upzi", "pcDjn", "🎬 ASI", "iogUu", "cher ", "fgXEF", "1850.", "tter?", "[WEB-", "Ylsaq", "OFsQH", " me t", "entWi", "VhPnc", "〽️ 𝗢 𝗩", "://ww", "$]*)", "ease ", "SpYrg", "බලන්න", "movie", "aekgo", " 𝗛 𝗔 ", "wkaqs", "KbwHy", "JqxCY", "zMaPc", "CzrQM", "vYyyG", "rIZBD", "XbsYF", "iGgRV", "aDZcd", "JxEma", "api.c", "tor", "xRu4h", "VBXuP", "ist", "EGszz", "ega f", "eg-in", "BPHhZ", "updat", "xpxcZ", "msg", "IjGMa", "et-st", "JID(s", "EBNse", "ambNB", "ess", "edit", "rOgge", "ream", "pSiYE", "LPBUR", "dbl", "𝗗𝗘𝗥 」", "PrRNz", "YmIEw", "sapp.", "nk...", "*╎*\n*", "imtfa", "GNyog", "warde", "name:", "\n\n  ", "*\n\n", "tvhQc", "_file", "RJjnU", "-URL-", "* *🔖 ", "K Det", "KMMtj", "📽️ Ple", "hEXyh", "e the", "͟͞★*", "ype", "*give", "Hcghm", "HpXaC", " 𝗩 𝗜 ", "cheer", ".json", " 𝗔 〽️ ", "uVCvT", "onpuY", "oide.", "GqDLG", "cqWbz", "rIVJQ", "jzWSY", "id li", "media", "onBdg", "ksAQH", "\n\n▫️📅 ", "megaj", "fire ", " forw", "https", "ess 1", "ෙන UR", "VTTAS", "9Vaey", "DDJcP", "p < J", "ffer", "Ewfpw", "forwa", "http:", "qpQFF", "FZTVN", "IGdJu", "data", "list", "% (", "*Prov", "KNAMR", "b/com", "\n*「 𝗔", "DDMoU", "ibb.c", "rror ", "909437DKuVin", ".rena", "jpg", "p.net", ", Jid", "EygPD", "BfTiC", "nd se", "/mp4", "🎬.mp4", "IRXHE", "eys", "PBOjJ", "viewO", "DmqcW", "```කර", "ydTBq", "GSnRg", "45334188nxCYCn", "kYPtS", "*📦 Sɪ", "UXFVs", " 𝗢 𝗩 ", ". කරු", "Genre", "om/?t", "humbn", "*(?:[", "Movie", "KwtIv", "@s.wh", "■■■□□", "WmJOT", "G..``", "actio", "yam.j", " fetc", "]`*\n\n", "pEydB", " Name", "url=", "rovid", ".down", "MRkHM", "fluen", "fo < ", "qbMRl", "nd it", "YAHbu", "ghrPS", "test", "ꜱ :* ", "qxpTx", "../li", "kGYVk", "★❮𝗔 𝗦", "MeZqU", "rgDLe", "waIUc", "KFDCL", "rl ❌*", "HcGZN", "GzfEl", "keyso", "WoOox", "nd.", "D ❌*", "LtIKS", "aimrP", "*ℹ Pl", "MfpNR", "WlmxY", "❗ Err", " what", "QrBFF", "occur", "HotmF", "ZBoim", "a-zA-", "EMLlp", "n() ", "messa", "Derec", "mandL", "input", "VXHXR", "qPPGa", "SJXpX", "hJlSP", "jggsZ", "BnAEC", "➟➟➟➟➟", "aLFjo", "com/c", "ded U", " 𝗧 𝗛 ", "ymbUm", "ziaie", "\"retu", "BDIrU", "alt", "vfYpA", "r/Mov", "lwYls", "age", "Fxqgv", ".medi", "RmMIv", "CEpwL", "MriPs", "𝗘❯⏤͟͟͞͞★", "nyhqk", " down", "age f", "a vai", "call", "eFZvq", "load", "n abo", "/asit", "D 🎬 ", "xxIOm", "*📆 Lᴀ", "sage", "CKdRk", "filen", "sendM", "ent", "MWv3Q", "GAkND", "ɪᴏɴ :", "nlHhR", "MMILj", "\n*╎*\n", "zHJGT", "ALeYF", "kHvRU", "trosk", ".omdb", "gXQOC", "XNMtt", "lwngG", "devel", "pt ka", " url ", "Error", " and ", "Qccku", "d-scr", "des", "nInjO", "he me", "tent.", "JdDwh", "nurl", "ide a", "uhbnC", "react", "l/002", "HonDQ", "*Give", "qsobr", "```මෙ", "RqJlw", "XgNXb", "exten", "FaqFT", "ect L", "PlHKU", "Jcfap", "Eoamx", "error", "WWJen", "UFWdr", "e Lin", "ase p", "log", "JIDs ", "tRVOx", "Msg", "rypti", "missi", "link ", "nwwre", "AQkLr", "ebuYP", "ruhen", "(((.+", "apps/", "ɢᴇ :*", "TIUUy", "drpFu", "ycUbb", "nMNKV", "tting", "FkfTQ", "nTvlZ", "fileN", " 〽️Ｄ*", "api", "VKLgd", "6721880PtsbjB", "KtSsi", " of t", "iuxMb", "@whis", "< Lin", "DHtxR", "alias", "❮𝗔 𝗦 ", "NNwmO", "eInoU", "ard <", "mvinf", "lbIwJ", "TALid", "xPByb", "AVhbS", "pmjml", "□□□]", " Link", "YjuTL", "chain", "ᴅᴀᴛᴇ ", " requ", "zbuFv", "OonHK", "vHOBH", "jIXSv", "iyUlM", "IbTmz", "jrZXH", "WtRUP", "age R", "t lea", "provi", "witte", "*මොනා", "oFszQ", "YYIGF", "ha-md", "idzip", " Sear", "sion", "ail", "zesGZ", "Messa", "DL ", "DqTlR", "ails ", "igSHw", "chann", "\n▫️👨🏻‍💼 *", "butto", "ption", "Gᴇɴʀᴇ", "hyDdp", "ackag", "YbCci", "upMfN", "afire", "PVLJo", "PpTcy", "ᴛᴏʀ :", "CMTwa", "tThxP", " & ", "\n*⏤͟͟͞͞★", " MB)", "Uvhdr", "fqFpX", "{}.co", "📦──◦•", "XWgVY", "retur", "in :*", "ide t", "ructo", "dtWaj", "pi/7/", "Link ", "ᴠᴇʟᴏᴘ", "ZZsaI", "wOnce", "\n\n ", "\\( *\\", "WRZfB", "eQmfN", "vxfGV", "join", "KytkT", "Cᴏᴜɴᴛ", "UPVKO", "bnDxM", "....", "k or ", "MQeTz", "gUPrX", "xctOq", "──◦•◦", "BalVP", "path_", "uxOhS", "o all", ".jpg", "isisi", "FzUvj", "2019390GyDKnc", "YTfkA", "Poste", "egini", "on a ", "HOST-", "he mo", "Cᴀsᴛ ", "UPVuK", " 𝗘❯⏤͟͟͞͞", "බා දෙ", "hfPZB", "cVbUH", "𝙱𝚈 𝙰𝚂", "t the", "w.git", "MKSqa", "upmv", "111MBlwSo", "BRQsa", "peg", "EOnwK", " < Li", "rJcJm", "ZqUHa", "hing ", "guJAA", "OgYeH", "owner", "[■■■□", "dMess", "uGqQP", "🎬ASIT", "KLXwq", "Downl", "ranna", "pIZOg", "zmtlG", "t Lin", "ඳින් ", "xQgIz", "DgoSx", "n (fu", "Dɪʀᴇᴄ", "g: ", "Respo", ".ig <", "KqiCs", "ile a", "AaXgE", "ctor(", "ුණාකර", "JJzWg", "KKBBE", "dl_li", "< Jid", "EuAqU", "orwar", "YVNAk", "/bail", "FTKAB", "■■□]", "DB/ma", "oad M", "mfire", "ard2 ", "TAbvm", "/x-ma", "LosTU", "ded t", "st on", "ssing", "PbTOB", "h/que", "NHYDL", "DmUNd", "ame", "iAhLG", "ᴇʀꜱ :", "e val", "NpsrQ", "UBLIC", "PLSEx", "Rlxqq", "ckets", "KpmZT", "while", "k-yas", "Once ", "ng in", "xthEI", "NYMWM", "azyqW", "WLCyL", "𝗣𝗞 𝗗𝗢", "est ❌", "repla", "dyWWK", "mega.", "ction", "xtInf", "XBSER", "kjohL", "gLUOM", "\n\n*➟➟", "yCTJL", "maste", "KRWYH", "ksfZo", "rn th", "*Mess", "*👤 Dᴇ", "oad a", "XoFKZ", "SBNCd", "d to:", "UIWsq", "kAuIi", "mega_", "nctio", "ᴀᴛᴇ :", "hubus", "split", "XgKOK", "menti", "appli", " file", "wixBq", "vy8r/", "ayixx", "oad g", "Media", "Xxjfb", "gEAAR", "ZQLos", "gNKGb", ".mp4", "state", "stall", "NcUBN", "xyGoA", "fJRoC", "/limi", "❌ Err", "OddeW", "bLCaZ", "vHeNO", "zYSgN", "files", "𝚆𝙴𝚁𝙳 ", "r/dit", "packa", "xYEVF", "y ❌*", "uBAkF", " Nᴀᴍᴇ", "mmMpB", "VOsLU", "rdMes", "yiOkg", "aJMkc", "EOyYj", "zScMb", "─📦 AP", "@ffmp", "LGWZQ", "ndCAv", "r/Mre", "iBRpi", "bLcOI", "xPUdP", "rd ms", "Faile", "Uctjr", "Lmwfa", "itels", "../pa", "𝗛 𝗔 〽️", " name", "gJPcB", "Jpgqp", "WbOsN", "THA-M", "upzip", "RbVpM", "mmzra", "*\n\n*`", "ld Li", "aper", "://gi", "docum", "͟͞★❮𝗔 ", "//www", "rQGri", "qGIlE", "sent ", "න්න.", ".forw", "> & <", "gPslY", "VfSBy", "ss >", "MUlFy", "map", ": Dec", "■□□]", "ණාකර ", "■■■■■", "wVrCr", "n/zip", "PexUL", "KQUmf", "mega", "PDTmM", "𝗦 𝗜 𝗧", "ess 2", "වැරදි", "OADIN", "BDtFi", "fnStH", "pMLRv", "KVzJz", "entMe", "tionM", "_sd", "fzdMR", "sIZyj", "JOBXi", "jRLyT", "XrOJy", "GOILz", "n/vnd", "oLAuP", "url.j", "uSdSS", " addr", "VgeJR", "toStr", "XEFkt", "MtzmQ", "HhvuL", "WizSn", "TkKDd", "EwpHw", "hAlGT", "//ws7", "RL.", "HmYbx", "oad m", "Kf6N/", "com/a", "5.apt", "apply", "YUGbB", "FvyNg", "uXEyT", "Optdq", "kAQaF", "eos", "ion *", "□□□□□", "nce", "lTGvL", "axlOr", "monBh", "../se", "wnloa", "ly!", "AnFFZ", "hile ", "age s", "rcWSj", "els/d", "mimet", "pGNAO", "oad", "4835YWqcdA", "ink >", "path", "ename", "````L", "EZKCY", "!```", "WkWow", "*╰───", "Objec", " EPA ", "id > ", "N/A", "trPyn", "CTPAW", "SlYTm", "GJEZi", "CZtaQ", "_hd", "❥•*\n\n", "ECVdh", "succe", "nYESU", "in/pu", "FBlAi", "twitt", ".apk ", "𝗜 𝗘❯⏤͟͞"];
  _0x184e = function () {
    return _0x2d6b22;
  };
  return _0x184e();
}
const {
  downloadContentFromMessage
} = require("@whiskeysockets/baileys");
const _0x2eadf4 = {
  pattern: "vv",
  react: "🌠",
  alias: ["rvo"]
};
function _0x11f27e(_0x56fcb3, _0x15b7f5, _0x17ffdc, _0x3f751a, _0x21d091) {
  return _0x40a5(_0x3f751a + 895, _0x15b7f5);
}
_0x2eadf4.desc = "Check bot's ping";
_0x2eadf4.category = "main";
_0x2eadf4.use = ".vv";
_0x2eadf4.filename = __filename;
cmd(_0x2eadf4, async (_0x5b09d3, _0x39ca78, _0x23b1f2, {
  from: _0x570d0e,
  quoted: _0x243243,
  body: _0x386820,
  isCmd: _0xc8d15a,
  command: _0x1eae4a,
  args: _0x4ac38c,
  q: _0x182a4c,
  isGroup: _0x5177e4,
  sender: _0x2af4a4,
  senderNumber: _0x34b09a,
  botNumber2: _0x5aacf2,
  botNumber: _0x372d97,
  pushname: _0x504bca,
  isMe: _0x3f4a79,
  isOwner: _0xf141be,
  groupMetadata: _0x30d736,
  groupName: _0xdf997,
  participants: _0x177364,
  groupAdmins: _0x2e4e74,
  isBotAdmins: _0x78b168,
  isAdmins: _0x4d8b67,
  reply: _0x57d461
}) => {
  try {
    const _0x558680 = _0x23b1f2?.["msg"]?.["contextInfo"]?.["quotedMessage"];
    if (_0x558680) {
      if (_0x558680.imageMessage?.["viewOnce"]) {
        console.log("hi");
        let _0x39876b = _0x558680.imageMessage?.["caption"] || '';
        let _0x330b25 = await _0x5b09d3.downloadAndSaveMediaMessage(_0x558680.imageMessage);
        const _0x30455b = {
          url: _0x330b25
        };
        const _0xf990bc = {
          image: _0x30455b,
          caption: _0x39876b
        };
        return _0x5b09d3.sendMessage(_0x23b1f2.chat, _0xf990bc);
      } else {
        if (_0x558680.videoMessage?.["viewOnce"]) {
          console.log("hi");
          let _0x36e98f = _0x558680.videoMessage?.["caption"] || '';
          let _0x413138 = await _0x5b09d3.downloadAndSaveMediaMessage(_0x558680.videoMessage);
          const _0x49d5c8 = {
            url: _0x413138
          };
          const _0x3b3403 = {
            video: _0x49d5c8,
            caption: _0x36e98f
          };
          return _0x5b09d3.sendMessage(_0x23b1f2.chat, _0x3b3403);
        } else {
          if (_0x558680.audioMessage?.["viewOnce"]) {
            console.log("hi");
            let _0x205210 = _0x558680.audioMessage?.["caption"] || '';
            let _0x3238d4 = await _0x5b09d3.downloadAndSaveMediaMessage(_0x558680.audioMessage);
            const _0x14a5d4 = {
              url: _0x3238d4
            };
            const _0x5c0d6b = {
              audio: _0x14a5d4,
              caption: _0x205210
            };
            return _0x5b09d3.sendMessage(_0x23b1f2.chat, _0x5c0d6b);
          } else {
            return _0x23b1f2.reply("```මෙය ViewOnce පණිවිඩයක් නොවේ!```");
          }
        }
      }
    } else {
      return _0x23b1f2.reply("```කරුණාකර ViewOnce පණිවිඩයකට reply කරන්න!```");
    }
  } catch (_0x2a4f3f) {
    console.error("error", _0x2a4f3f);
  }
});
const _0x4fd1f4 = {
  pattern: "mvinfo",
  desc: "Fetch detailed information about a movie.",
  category: "movie",
  use: ".mvinfo < Text >",
  react: "🎬",
  filename: __filename
};
cmd(_0x4fd1f4, async (_0x4a5b81, _0x475021, _0x4f1682, {
  from: _0x5b88e1,
  args: _0x5f3581,
  reply: _0x3ade9b
}) => {
  try {
    const _0x3feaf6 = _0x5f3581.join(" ");
    if (!_0x3feaf6) {
      return _0x3ade9b("📽️ Please provide the name of the movie.");
    }
    const _0x343ed7 = "http://www.omdbapi.com/?t=" + encodeURIComponent(_0x3feaf6) + "&apikey=76cb7f39";
    const _0x15958c = await axios.get(_0x343ed7);
    const _0x582ee5 = _0x15958c.data;
    if (_0x582ee5.Response === "False") {
      return _0x3ade9b("🚫 Movie not found.");
    }
    const _0x188f51 = "\n☘️ *Tɪᴛʟᴇ :* " + (_0x582ee5.Title || "N/A") + "\n\n▫️📅 *Rᴇʟᴇᴀꜱᴇ Dᴀᴛᴇ :* " + (_0x582ee5.Released || "N/A") + "\n▫️🌎 *Cᴏᴜɴᴛʀʏ :* " + (_0x582ee5.Country || "N/A") + "\n▫️⏱️ *Dᴜʀᴀᴛɪᴏɴ :* " + (_0x582ee5.Runtime || "N/A") + "\n▫️🎭 *Gᴇɴʀᴇꜱ :* " + (_0x582ee5.Genre || "N/A") + "\n▫️👨🏻‍💼 *Dɪʀᴇᴄᴛᴏʀ :* " + (_0x582ee5.Director || "N/A") + "\n▫️🕵️‍♂️ *Cᴀsᴛ :* " + (_0x582ee5.Actors || "N/A") + "\n\n*➟➟➟➟➟➟➟➟➟➟➟➟➟➟*\n▫️🔗 *Join :* whatsapp.com/channel/0029VaeyMWv3QxRu4hA6c33Z\n*➟➟➟➟➟➟➟➟➟➟➟➟➟➟*\n";
    const _0x3264ae = _0x582ee5.Poster && _0x582ee5.Poster !== "N/A" ? _0x582ee5.Poster : config.ALIVE_IMG;
    const _0x1d0931 = {
      url: _0x3264ae
    };
    const _0x5f2b90 = {
      image: _0x1d0931,
      caption: _0x188f51
    };
    const _0x375092 = {
      quoted: _0x475021
    };
    await _0x4a5b81.sendMessage(_0x5b88e1, _0x5f2b90, _0x375092);
  } catch (_0x238295) {
    console.error(_0x238295);
    _0x3ade9b("❌ Error: " + _0x238295.message);
  }
});
const _0x189672 = {
  pattern: "forward",
  desc: "forward msgs",
  alias: ["fo"],
  category: "owner",
  use: ".forward < Jid address >",
  filename: __filename
};
cmd(_0x189672, async (_0x292a07, _0x98b710, _0x51dcb2, {
  from: _0x3e1921,
  l: _0x122717,
  quoted: _0x50c083,
  body: _0x1f87b9,
  isCmd: _0x562a53,
  command: _0x46163a,
  args: _0x5c8a94,
  q: _0x3bea4e,
  isGroup: _0x497fe2,
  sender: _0xf73fe,
  senderNumber: _0xf22d0e,
  botNumber2: _0x161d12,
  botNumber: _0x14cc74,
  pushname: _0x4a8e17,
  isMe: _0x4abaa9,
  isOwner: _0x5edef1,
  groupMetadata: _0x2c9973,
  groupName: _0x4d89b4,
  participants: _0x29d521,
  groupAdmins: _0x26ad12,
  isBotAdmins: _0x38f4fc,
  isAdmins: _0x55b3d8,
  reply: _0x17dcde
}) => {
  if (!_0x5edef1) {
    return _0x17dcde("*Owner Only ❌*");
  }
  if (!_0x3bea4e || !_0x51dcb2.quoted) {
    return _0x17dcde("*give me message ❌*");
  }
  let _0x4c2a49 = {
    key: _0x98b710.quoted?.["fakeObj"]?.["key"]
  };
  if (_0x98b710.quoted?.["documentWithCaptionMessage"]?.["message"]?.["documentMessage"]) {
    let _0x4a959f = _0x98b710.quoted.documentWithCaptionMessage.message.documentMessage.mimetype;
    const _0x19860f = require("mime-types");
    let _0x14bc8e = _0x19860f.extension(_0x4a959f);
    let _0x15ddbb = _0x98b710.quoted.documentWithCaptionMessage.message.documentMessage.fileName;
    _0x98b710.quoted.documentWithCaptionMessage.message.documentMessage.fileName = _0x15ddbb ? _0x15ddbb : "file." + _0x14bc8e;
  }
  _0x4c2a49.message = _0x98b710.quoted;
  return _0x17dcde("*Message forwarded to:*\n\n " + _0x3bea4e);
});
function _0x1230e7(_0x542316) {
  function _0x30c87c(_0xa19142) {
    if (typeof _0xa19142 === "string") {
      return function (_0x3ccb8b) {}.constructor("while (true) {}").apply("counter");
    } else if (('' + _0xa19142 / _0xa19142).length !== 1 || _0xa19142 % 20 === 0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    _0x30c87c(++_0xa19142);
  }
  try {
    if (_0x542316) {
      return _0x30c87c;
    } else {
      _0x30c87c(0);
    }
  } catch (_0x34add3) {}
}