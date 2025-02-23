(function (_0x2a5918, _0x2e0981) {
  const _0x472b93 = _0x2a5918();
  while (true) {
    try {
      const _0x4ec831 = -parseInt(_0x109b(4508, 0xdc9)) / 1 * (parseInt(_0x109b(7899, 0x1910)) / 2) + parseInt(_0x109b(882, "0xb8c")) / 3 * (-parseInt(_0x109b(2079, -0x58d)) / 4) + parseInt(_0x109b(2795, 0xcb2)) / 5 + -parseInt(_0x109b(6263, "0xf18")) / 6 * (-parseInt(_0x109b(7488, "0x150e")) / 7) + -parseInt(_0x109b(3869, "0x19c5")) / 8 * (parseInt(_0x109b(7785, "0x21eb")) / 9) + parseInt(_0x109b(2281, "0xd22")) / 10 + -parseInt(_0x109b(6131, "0x1c99")) / 11 * (parseInt(_0x109b(1637, "0x15")) / 12);
      if (_0x4ec831 === _0x2e0981) {
        break;
      } else {
        _0x472b93.push(_0x472b93.shift());
      }
    } catch (_0x33c0d2) {
      _0x472b93.push(_0x472b93.shift());
    }
  }
})(_0x3867, 703061);
const _0x10ec50 = function () {
  let _0x249d83 = true;
  return function (_0x550313, _0x461ea7) {
    const _0x34605d = _0x249d83 ? function () {
      if (_0x461ea7) {
        const _0x961df6 = _0x461ea7.apply(_0x550313, arguments);
        _0x461ea7 = null;
        return _0x961df6;
      }
    } : function () {};
    _0x249d83 = false;
    return _0x34605d;
  };
}();
const _0x2334bb = _0x10ec50(this, function () {
  return _0x2334bb.toString().search("(((.+)+)+)+$").toString().constructor(_0x2334bb).search("(((.+)+)+)+$");
});
_0x2334bb();
const _0x1db4ee = function () {
  let _0x2cb1d1 = true;
  return function (_0x383f35, _0x3e23c7) {
    const _0x5995b7 = _0x2cb1d1 ? function () {
      if (_0x3e23c7) {
        const _0x54bac7 = _0x3e23c7.apply(_0x383f35, arguments);
        _0x3e23c7 = null;
        return _0x54bac7;
      }
    } : function () {};
    _0x2cb1d1 = false;
    return _0x5995b7;
  };
}();
(function () {
  _0x1db4ee(this, function () {
    const _0x21311c = new RegExp("function *\\( *\\)");
    const _0x4a0adf = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
    const _0x448859 = _0x2582ba("init");
    if (!_0x21311c.test(_0x448859 + "chain") || !_0x4a0adf.test(_0x448859 + "input")) {
      _0x448859("0");
    } else {
      _0x2582ba();
    }
  })();
})();
const axios = require("axios");
const {
  fetchJson,
  getBuffer,
  getimage
} = require("../lib/functions");
const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
const ffmpeg = require("fluent-ffmpeg");
const cheerio = require("cheerio");
const {
  igdl,
  fbdl
} = require("ruhend-scraper");
const {
  cmd,
  commands
} = require("../lib/command");
var {
  subsearch,
  subdl
} = require("@sl-code-lords/si-subdl");
const {
  facebook
} = require("@mrnima/facebook-downloader");
const {
  downloadTiktok
} = require("@mrnima/tiktok-downloader");
const {
  parseStringPromise
} = require("xml2js");
function formatNumber(_0x18ebec) {
  return String(_0x18ebec).padStart(2, "0");
}
ffmpeg.setFfmpegPath(ffmpegPath);
async function videoToWebp(_0x34d29e) {
  const _0xa94ccc = path.join(tmpdir(), Crypto.randomBytes(6).readUIntLE(0, 6).toString(36) + ".webp");
  const _0x26f5f0 = path.join(tmpdir(), Crypto.randomBytes(6).readUIntLE(0, 6).toString(36) + ".mp4");
  fs.writeFileSync(_0x26f5f0, _0x34d29e);
  await new Promise((_0x3527dc, _0x30ff3a) => {
    ffmpeg(_0x26f5f0).on("error", _0x30ff3a).on("end", () => _0x3527dc(true)).addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse", "-loop", "0", "-ss", "00:00:00", "-t", "00:00:05", "-preset", "default", "-an", "-vsync", "0"]).toFormat("webp").save(_0xa94ccc);
  });
  const _0x378264 = fs.readFileSync(_0xa94ccc);
  fs.unlinkSync(_0xa94ccc);
  fs.unlinkSync(_0x26f5f0);
  return _0x378264;
}
let baseUrl;
(async () => {
  try {
    let _0x1fc329 = await fetchJson("https://gitlab.com/anukunu2000/asitha-md-db/-/raw/master/pire.json");
    baseUrl = _0x1fc329.api;
  } catch (_0x27b59e) {
    console.error("Error fetching base URL:", _0x27b59e);
  }
})();
async function getPremiumUsers() {
  const _0x4057b4 = await fetchJson("https://gitlab.com/anukunu2000/asitha-md-db/-/raw/master/Premium/premium.json");
  const _0x5d08d1 = _0x4057b4.split(",");
  return _0x5d08d1.map(_0x89035b => _0x89035b.replace(/[^0-9]/g, '') + "@s.whatsapp.net");
}
if (require("../package.json").version == "2.0.0") {
  console.log("decrypt karanna EPA pko");
}
const _0x35c432 = {
  pattern: "pair",
  alias: ["pp"],
  react: "🔢",
  desc: "Download TikTok videos",
  use: ".pire <phone_number>",
  category: "main",
  filename: __filename
};
cmd(_0x35c432, async (_0x14bb01, _0xdf003c, _0xc73267, {
  from: _0xd2b08e,
  q: _0x37b405,
  reply: _0x473901,
  l: _0x29f82d
}) => {
  try {
    if (!_0x37b405) {
      return _0x473901("*Please provide a phone number. Usage: `.pire phone_number`*");
    }
    const _0x53afc8 = /^(\+?\d{1,3})?\d{9,}$/;
    if (!_0x53afc8.test(_0x37b405)) {
      return _0x473901("*Please provide a valid phone number with the country code. Example: 94789123880*");
    }
    const _0xc393a6 = await fetchJson('' + baseUrl + _0x37b405);
    const _0xe55877 = _0xc393a6?.["code"];
    if (_0xe55877) {
      const _0x5b6ac1 = {
        text: _0xe55877
      };
      const _0x37c035 = {
        quoted: _0xdf003c
      };
      await _0x14bb01.sendMessage(_0xd2b08e, _0x5b6ac1, _0x37c035);
      const _0x5b14c6 = {
        text: "*Please connect the phone number " + _0x37b405 + " within 1 minute.*"
      };
      const _0x453664 = {
        quoted: _0xdf003c
      };
      await _0x14bb01.sendMessage(_0xd2b08e, _0x5b14c6, _0x453664);
    } else {
      _0x473901("*No results found for the provided phone number.*");
    }
    _0xc73267.react("✔");
  } catch (_0x2e2ae0) {
    _0x473901("*An error occurred! Please try again.*");
    _0x29f82d(_0x2e2ae0);
  }
});
const _0x9fb074 = {
  pattern: "tiktok",
  alias: ["tt"],
  react: "🎥",
  desc: "download tt videos",
  use: ".tiktok < Link >",
  category: "download",
  filename: __filename
};
cmd(_0x9fb074, async (_0x557002, _0x40b6bb, _0x2b2edd, {
  from: _0x4cf428,
  l: _0x5e57ab,
  prefix: _0x13f4eb,
  quoted: _0x2babc9,
  body: _0x1851df,
  isCmd: _0x48683c,
  command: _0x3f058,
  args: _0x46e95f,
  q: _0x221468,
  isGroup: _0xd39877,
  sender: _0x574d8b,
  senderNumber: _0x5b0d9a,
  botNumber2: _0x428e23,
  botNumber: _0x3e853a,
  pushname: _0x30a0d4,
  isMe: _0x5b7e0e,
  isOwner: _0x24a9a6,
  groupMetadata: _0x229ba4,
  groupName: _0x32809c,
  participants: _0x1a46d5,
  groupAdmins: _0xa3fca6,
  isBotAdmins: _0x2faae4,
  isAdmins: _0x3d19cc,
  reply: _0x47f002
}) => {
  try {
    if (!_0x221468 && !_0x221468.startsWith("https://")) {
      return _0x47f002("*give me tiktok url ❌*");
    }
    _0x2b2edd.react("⬇️");
    let _0x48ca4d = await fetchJson("https://api.tiklydown.eu.org/api/download/v5?url=" + _0x221468);
    const _0x4c1381 = (await axios.get("https://gitlab.com/anukunu2000/asitha-md-db/-/raw/master/ditels/ditels.json")).data;
    let _0x2a5387 = _0x4c1381.footer;
    const _0x535f63 = [{
      "title": '',
      "rows": [{
        "title": "1",
        "rowId": _0x13f4eb + "tn1 " + _0x221468,
        "description": "📼 No-Watermark"
      }, {
        "title": "2",
        "rowId": _0x13f4eb + "tn2 " + _0x221468,
        "description": "🎟️ With-Watermark"
      }, {
        "title": "3",
        "rowId": _0x13f4eb + "thd " + _0x221468,
        "description": "🎫 No-Watermark-HD"
      }, {
        "title": "4",
        "rowId": _0x13f4eb + "ta " + _0x221468,
        "description": "🎶 Audio file"
      }]
    }];
    let _0x4d7a2a = "\n   `◈ 𝐓𝐈𝐊𝐓𝐎𝐊 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑`\n\n◈=======================◈\n╭──────────────╮\n┃ 📝 `𝙏𝙞𝙩𝙡𝙚` : " + (_0x48ca4d.result.title || "null") + "\n┃\n┃ ❄️ `𝙍𝙚𝙜𝙞𝙤𝙣` : " + (_0x48ca4d.result.region || "null") + "\n┃\n┃ ❄️ `𝘿𝙪𝙧𝙖𝙩𝙞𝙤𝙣` : " + (_0x48ca4d.result.duration || "null") + "\n┃\n┃ 🔗 `𝗨𝗿𝗹` : " + _0x221468 + "\n╰──────────────╯\n\n⦁⦂⦁*━┉━┉━┉━┉━┉━┉━┉━⦁⦂⦁";
    const _0x5e4b08 = {
      url: _0x48ca4d.result.cover
    };
    const _0x7aa2ce = {
      caption: _0x4d7a2a,
      image: _0x5e4b08,
      footer: _0x2a5387,
      title: '',
      buttonText: "*🔢 Reply below number*",
      sections: _0x535f63
    };
    const _0x212621 = {
      quoted: _0x40b6bb
    };
    return await _0x557002.replyList(_0x4cf428, _0x7aa2ce, _0x212621);
  } catch (_0x130dae) {
    _0x47f002("*ERROR !!*");
    _0x5e57ab(_0x130dae);
  }
});
const _0x1c94a4 = {
  pattern: "thd",
  react: "⬇",
  filename: __filename
};
cmd(_0x1c94a4, async (_0x2fcf60, _0x52e26b, _0x1da0d2, {
  from: _0x51de57,
  quoted: _0x4514f2,
  body: _0xfe2df7,
  isCmd: _0x44240e,
  command: _0x52133e,
  args: _0x56c527,
  q: _0xa361e4,
  isGroup: _0x58f446,
  sender: _0x2f2fdd,
  senderNumber: _0xa91c30,
  botNumber2: _0x49fb9e,
  botNumber: _0x4a919e,
  pushname: _0xf5bba7,
  isMe: _0x20444e,
  isOwner: _0x2be8bd,
  groupMetadata: _0x199ed4,
  groupName: _0x173d66,
  participants: _0x116b42,
  groupAdmins: _0x593ea3,
  isBotAdmins: _0xbf27b4,
  isAdmins: _0x14e510,
  reply: _0x2113da
}) => {
  try {
    const _0x5f9220 = (await fetchJson("https://gitlab.com/anukunu2000/asitha-md-db/-/raw/master/Mreply.json")).replyMsg;
    if (!_0xa361e4) {
      return _0x2113da(_0x5f9220.url);
    }
    if (!_0xa361e4.includes("https://")) {
      return await _0x2113da(_0x5f9220.not_fo);
    }
    let _0x494695 = await fetchJson("https://api.tiklydown.eu.org/api/download/v5?url=" + _0xa361e4);
    const _0x4b7641 = {
      text: "⬆",
      key: _0x52e26b.key
    };
    const _0x507f2e = {
      react: _0x4b7641
    };
    await _0x2fcf60.sendMessage(_0x51de57, _0x507f2e);
    const _0x5c1c23 = {
      url: _0x494695.result.hdplay
    };
    const _0x58c9ed = {
      video: _0x5c1c23,
      mimetype: "video/mp4",
      caption: "*㋛ 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙰𝚂𝙸𝚃𝙷𝙰  〽️Ｄ*"
    };
    const _0x5402ed = {
      quoted: _0x52e26b
    };
    await _0x2fcf60.sendMessage(_0x51de57, _0x58c9ed, _0x5402ed);
    const _0x3d5444 = {
      text: "✔",
      key: _0x52e26b.key
    };
    const _0x551ec4 = {
      react: _0x3d5444
    };
    await _0x2fcf60.sendMessage(_0x51de57, _0x551ec4);
  } catch (_0x4247c8) {
    const _0x26dd71 = {
      text: "❌",
      key: _0x52e26b.key
    };
    const _0x35d64a = {
      react: _0x26dd71
    };
    await _0x2fcf60.sendMessage(_0x51de57, _0x35d64a);
    console.log(_0x4247c8);
    _0x2113da("Error !!\n\n*" + _0x4247c8 + "*");
  }
});
const _0x2141c5 = {
  pattern: "tn2",
  react: "⬇",
  filename: __filename
};
cmd(_0x2141c5, async (_0x372835, _0x384ca0, _0x55ad9a, {
  from: _0x469b35,
  quoted: _0x3458a0,
  body: _0x51f5af,
  isCmd: _0x47fa17,
  command: _0x2fdaa5,
  args: _0x8e1141,
  q: _0xa767be,
  isGroup: _0x3da3c8,
  sender: _0x266050,
  senderNumber: _0x5d15e2,
  botNumber2: _0x4f627b,
  botNumber: _0x4439d4,
  pushname: _0x3935e0,
  isMe: _0x357ec9,
  isOwner: _0x3b26e1,
  groupMetadata: _0x456a8f,
  groupName: _0x209310,
  participants: _0x59191b,
  groupAdmins: _0x41d246,
  isBotAdmins: _0x267630,
  isAdmins: _0x168433,
  reply: _0x47bb17
}) => {
  try {
    const _0x51bc8b = (await fetchJson("https://gitlab.com/anukunu2000/asitha-md-db/-/raw/master/Mreply.json")).replyMsg;
    if (!_0xa767be) {
      return _0x47bb17(_0x51bc8b.url);
    }
    if (!_0xa767be.includes("https://")) {
      return await _0x47bb17(_0x51bc8b.not_fo);
    }
    let _0x120bfc = await fetchJson("https://api.tiklydown.eu.org/api/download/v5?url=" + _0xa767be);
    const _0x130c3d = {
      text: "⬆",
      key: _0x384ca0.key
    };
    const _0x27a5cc = {
      react: _0x130c3d
    };
    await _0x372835.sendMessage(_0x469b35, _0x27a5cc);
    const _0x3939d1 = {
      url: _0x120bfc.result.wmplay
    };
    const _0x11a257 = {
      video: _0x3939d1,
      mimetype: "video/mp4",
      caption: "*㋛ 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙰𝚂𝙸𝚃𝙷𝙰  〽️Ｄ*"
    };
    const _0x16c997 = {
      quoted: _0x384ca0
    };
    await _0x372835.sendMessage(_0x469b35, _0x11a257, _0x16c997);
    const _0x1e5cd4 = {
      text: "✔",
      key: _0x384ca0.key
    };
    const _0xaaea7 = {
      react: _0x1e5cd4
    };
    await _0x372835.sendMessage(_0x469b35, _0xaaea7);
  } catch (_0x140de3) {
    const _0x41f5c4 = {
      text: "❌",
      key: _0x384ca0.key
    };
    const _0xfbf5d7 = {
      react: _0x41f5c4
    };
    await _0x372835.sendMessage(_0x469b35, _0xfbf5d7);
    console.log(_0x140de3);
    _0x47bb17("Error !!\n\n*" + _0x140de3 + "*");
  }
});
const _0x13a46d = {
  pattern: "tn1",
  react: "⬇",
  filename: __filename
};
cmd(_0x13a46d, async (_0x5e27f2, _0x285a9e, _0x21f244, {
  from: _0x41050a,
  quoted: _0x1ab1f9,
  body: _0x46060f,
  isCmd: _0x20c657,
  command: _0x105a20,
  args: _0x1a984e,
  q: _0xed8a89,
  isGroup: _0xd52422,
  sender: _0x57f925,
  senderNumber: _0x1ed53e,
  botNumber2: _0xaef411,
  botNumber: _0x2fa979,
  pushname: _0x3d2048,
  isMe: _0x2edbcf,
  isOwner: _0x26df4c,
  groupMetadata: _0x48b826,
  groupName: _0x40e68a,
  participants: _0x565028,
  groupAdmins: _0x506e48,
  isBotAdmins: _0x8c6029,
  isAdmins: _0x30eb0d,
  reply: _0x3a1fcd
}) => {
  try {
    const _0x52232d = (await fetchJson("https://gitlab.com/anukunu2000/asitha-md-db/-/raw/master/ditels/ditels.json")).replyMsg;
    if (!_0xed8a89) {
      return _0x3a1fcd(_0x52232d.url);
    }
    if (!_0xed8a89.includes("https://")) {
      return await _0x3a1fcd(_0x52232d.not_fo);
    }
    let _0x12854f = await fetchJson("https://api.tiklydown.eu.org/api/download/v5?url=" + _0xed8a89);
    const _0x36b795 = {
      text: "⬆",
      key: _0x285a9e.key
    };
    const _0x4ff6fd = {
      react: _0x36b795
    };
    await _0x5e27f2.sendMessage(_0x41050a, _0x4ff6fd);
    const _0x3f600e = {
      url: _0x12854f.result.play
    };
    const _0x2230e4 = {
      video: _0x3f600e,
      mimetype: "video/mp4",
      caption: "*㋛ 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙰𝚂𝙸𝚃𝙷𝙰  〽️Ｄ*"
    };
    const _0x15dfa8 = {
      quoted: _0x285a9e
    };
    await _0x5e27f2.sendMessage(_0x41050a, _0x2230e4, _0x15dfa8);
    const _0x41a755 = {
      text: "✔",
      key: _0x285a9e.key
    };
    const _0x59ca4b = {
      react: _0x41a755
    };
    await _0x5e27f2.sendMessage(_0x41050a, _0x59ca4b);
  } catch (_0x49b25d) {
    const _0x9dc29e = {
      text: "❌",
      key: _0x285a9e.key
    };
    const _0x1c6633 = {
      react: _0x9dc29e
    };
    await _0x5e27f2.sendMessage(_0x41050a, _0x1c6633);
    console.log(_0x49b25d);
    _0x3a1fcd("Error !!\n\n*" + _0x49b25d + "*");
  }
});
const _0x9e027b = {
  pattern: "ta",
  react: "⬇",
  filename: __filename
};
cmd(_0x9e027b, async (_0x13bf54, _0x5c7b9d, _0x730889, {
  from: _0x3ea659,
  quoted: _0x8c86f6,
  body: _0x5a82d5,
  isCmd: _0x52e7fe,
  command: _0x578e2b,
  args: _0xdbf248,
  q: _0x5e47ac,
  isGroup: _0xc362ea,
  sender: _0x225e93,
  senderNumber: _0x150678,
  botNumber2: _0x3ac924,
  botNumber: _0x5ea962,
  pushname: _0x2203be,
  isMe: _0x415fb3,
  isOwner: _0xd153a4,
  groupMetadata: _0x4e825e,
  groupName: _0x3e03ba,
  participants: _0x5a6982,
  groupAdmins: _0x3420f5,
  isBotAdmins: _0xca2138,
  isAdmins: _0x5915c2,
  reply: _0x12f01d
}) => {
  try {
    const _0x37feac = (await fetchJson("https://gitlab.com/anukunu2000/asitha-md-db/-/raw/master/Mreply.json")).replyMsg;
    if (!_0x5e47ac) {
      return _0x12f01d(_0x37feac.url);
    }
    if (!_0x5e47ac.includes("https://")) {
      return await _0x12f01d(_0x37feac.not_fo);
    }
    let _0x1834cf = await fetchJson("https://api.tiklydown.eu.org/api/download/v5?url=" + _0x5e47ac);
    const _0x1764ad = {
      text: "⬆",
      key: _0x5c7b9d.key
    };
    const _0x5629d5 = {
      react: _0x1764ad
    };
    await _0x13bf54.sendMessage(_0x3ea659, _0x5629d5);
    const _0x1334eb = {
      url: _0x1834cf.result.play
    };
    const _0x51134b = {
      audio: _0x1334eb,
      mimetype: "audio/mpeg"
    };
    const _0x2a3796 = {
      quoted: _0x5c7b9d
    };
    await _0x13bf54.sendMessage(_0x3ea659, _0x51134b, _0x2a3796);
    const _0x491cc9 = {
      text: "✔",
      key: _0x5c7b9d.key
    };
    const _0x5d9227 = {
      react: _0x491cc9
    };
    await _0x13bf54.sendMessage(_0x3ea659, _0x5d9227);
  } catch (_0x5561a2) {
    const _0x3f5839 = {
      text: "❌",
      key: _0x5c7b9d.key
    };
    const _0x4fb368 = {
      react: _0x3f5839
    };
    await _0x13bf54.sendMessage(_0x3ea659, _0x4fb368);
    console.log(_0x5561a2);
    _0x12f01d("Error !!\n\n*" + _0x5561a2 + "*");
  }
});
const _0x195284 = {
  pattern: "fb",
  alias: ["facebook"],
  desc: "Download Facebook videos",
  use: ".fb < Link >",
  category: "download",
  filename: __filename
};
cmd(_0x195284, async (_0x98f3a4, _0x3731aa, _0x29c1c8, {
  from: _0x480e31,
  l: _0x5621ec,
  prefix: _0x3b6560,
  quoted: _0x79abf3,
  body: _0x16027f,
  isCmd: _0x1f1a05,
  command: _0x30da88,
  args: _0x8b5cb3,
  q: _0x494089,
  isGroup: _0x8188d8,
  sender: _0x5118cd,
  senderNumber: _0x11b684,
  botNumber2: _0xa7ab46,
  botNumber: _0x1e4cfb,
  pushname: _0x3ef0c2,
  isMe: _0x58e3b2,
  isOwner: _0x2c7556,
  groupMetadata: _0x6951f3,
  groupName: _0x577d9d,
  participants: _0x28f7f1,
  groupAdmins: _0x4e5f21,
  isBotAdmins: _0x433a7a,
  isAdmins: _0x4dfdb9,
  reply: _0x5d6606
}) => {
  try {
    if (!_0x494089 || !_0x494089.startsWith("https://")) {
      const _0x5d1706 = {
        text: "*❌ Please provide a valid URL.*"
      };
      const _0x1d794a = {
        quoted: _0x3731aa
      };
      return _0x98f3a4.sendMessage(_0x480e31, _0x5d1706, _0x1d794a);
    }
    let _0x29861f = await fbdl(_0x494089);
    let _0x975c21 = _0x29861f.data;
    data = _0x975c21.find(_0x421a46 => _0x421a46.resolution === "720p (HD)");
    data2 = _0x975c21.find(_0xdeb8a0 => _0xdeb8a0.resolution === "360p (SD)");
    image3 = _0x975c21.find(_0xad557d => _0xad557d.resolution === "360p (SD)");
    const _0x5bd514 = {
      text: "🎥",
      key: _0x3731aa.key
    };
    const _0x3fcf3d = {
      react: _0x5bd514
    };
    await _0x98f3a4.sendMessage(_0x480e31, _0x3fcf3d);
    const _0x2ffa9d = (await axios.get("https://gitlab.com/anukunu2000/asitha-md-db/-/raw/master/ditels/ditels.json")).data;
    let _0x2087c4 = _0x2ffa9d.footer;
    const _0x4d15cc = [{
      "title": '',
      "rows": [{
        "title": "1",
        "rowId": _0x3b6560 + "fbhd " + _0x494089,
        "description": "🔋 `HD` QUALITY"
      }, {
        "title": "2",
        "rowId": _0x3b6560 + "fbsd " + _0x494089,
        "description": "🪫 `SD` QUALITY"
      }, {
        "title": "3",
        "rowId": _0x3b6560 + "fba " + _0x494089,
        "description": "🎶 Audio file"
      }]
    }];
    const _0x441315 = "\n`◈ 𝐅𝐁 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑`\n\n◈=======================◈\n╭──────────────╮\n┃ ⏱️ `𝗧𝗜𝗧𝗟𝗘` : \n┃\n┃ 🔗 `𝗨𝗥𝗟` : " + _0x494089 + "\n╰──────────────╯\n\n⦁⦂⦁*━┉━┉━┉━┉━┉┉━┉━⦁⦂⦁\n";
    const _0x58076f = {
      url: image3.thumbnail
    };
    const _0x534ca6 = {
      caption: _0x441315,
      image: _0x58076f,
      footer: _0x2087c4,
      title: '',
      buttonText: "*🔢 Reply below number*",
      sections: _0x4d15cc
    };
    const _0x1a9b24 = {
      quoted: _0x3731aa
    };
    return await _0x98f3a4.replyList(_0x480e31, _0x534ca6, _0x1a9b24);
  } catch (_0x135f22) {
    _0x5d6606("*ERROR !!*");
    _0x5621ec(_0x135f22);
  }
});
const _0x386cf1 = {
  pattern: "fbsd",
  react: "⬇",
  filename: __filename
};
cmd(_0x386cf1, async (_0x39b1b5, _0x4446a0, _0x2057db, {
  from: _0x14ad63,
  quoted: _0xdc3b2,
  body: _0x36b26c,
  isCmd: _0xd7a9aa,
  command: _0x578392,
  args: _0x49ac01,
  q: _0x4bd81c,
  isGroup: _0x4a0d0a,
  sender: _0x50d6b9,
  senderNumber: _0x2377e4,
  botNumber2: _0x4b7eb3,
  botNumber: _0x160495,
  pushname: _0x4f29e6,
  isMe: _0x227863,
  isOwner: _0x54092a,
  groupMetadata: _0x4fd560,
  groupName: _0x5b3f36,
  participants: _0x3862e4,
  groupAdmins: _0x31446c,
  isBotAdmins: _0x591a63,
  isAdmins: _0x8be659,
  reply: _0x46b125
}) => {
  try {
    const _0x5d5396 = (await fetchJson("https://gitlab.com/anukunu2000/asitha-md-db/-/raw/master/Mreply.json")).replyMsg;
    if (!_0x4bd81c) {
      return _0x46b125(_0x5d5396.url);
    }
    if (!_0x4bd81c.includes("https://")) {
      return await _0x46b125(_0x5d5396.not_fo);
    }
    let _0x29003b = await fbdl(_0x4bd81c);
    let _0x3a0fbd = _0x29003b.data;
    data = _0x3a0fbd.find(_0x54db8a => _0x54db8a.resolution === "720p (HD)");
    data2 = _0x3a0fbd.find(_0x5386e4 => _0x5386e4.resolution === "360p (SD)");
    image3 = _0x3a0fbd.find(_0x30c67d => _0x30c67d.resolution === "360p (SD)");
    const _0x2838f3 = {
      text: "⬆",
      key: _0x4446a0.key
    };
    const _0x5bfddc = {
      react: _0x2838f3
    };
    await _0x39b1b5.sendMessage(_0x14ad63, _0x5bfddc);
    const _0x2ec11b = {
      url: data2.url
    };
    const _0x2af495 = {
      video: _0x2ec11b,
      mimetype: "video/mp4",
      caption: "*㋛ 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙰𝚂𝙸𝚃𝙷𝙰  〽️Ｄ*"
    };
    const _0x557834 = {
      quoted: _0x4446a0
    };
    await _0x39b1b5.sendMessage(_0x14ad63, _0x2af495, _0x557834);
    const _0x3f34e1 = {
      text: "✔",
      key: _0x4446a0.key
    };
    const _0xe4bd40 = {
      react: _0x3f34e1
    };
    await _0x39b1b5.sendMessage(_0x14ad63, _0xe4bd40);
  } catch (_0x1450b6) {
    const _0x62f80f = {
      text: "❌",
      key: _0x4446a0.key
    };
    const _0x2927db = {
      react: _0x62f80f
    };
    await _0x39b1b5.sendMessage(_0x14ad63, _0x2927db);
    console.log(_0x1450b6);
    _0x46b125("Error !!\n\n*" + _0x1450b6 + "*");
  }
});
const _0x2c6aea = {
  pattern: "fbhd",
  react: "⬇",
  filename: __filename
};
cmd(_0x2c6aea, async (_0x37bbe8, _0x24dfd6, _0x4647cc, {
  from: _0x20a567,
  quoted: _0x38676a,
  body: _0x248d87,
  isCmd: _0x1f2a6a,
  command: _0x14ceeb,
  args: _0x20d71f,
  q: _0x347f1b,
  isGroup: _0xe6cc04,
  sender: _0x150ddf,
  senderNumber: _0x5d6779,
  botNumber2: _0x4ebf5b,
  botNumber: _0x208e5c,
  pushname: _0x3e5b0a,
  isMe: _0x5e8628,
  isOwner: _0x381d5d,
  groupMetadata: _0x327be8,
  groupName: _0x49e705,
  participants: _0x5bb74a,
  groupAdmins: _0x1cee9b,
  isBotAdmins: _0x23a7e1,
  isAdmins: _0x826d65,
  reply: _0x4d14f8
}) => {
  try {
    const _0x4c2e40 = (await fetchJson("https://gitlab.com/anukunu2000/asitha-md-db/-/raw/master/Mreply.json")).replyMsg;
    if (!_0x347f1b) {
      return _0x4d14f8(_0x4c2e40.url);
    }
    if (!_0x347f1b.includes("https://")) {
      return await _0x4d14f8(_0x4c2e40.not_fo);
    }
    let _0x3002aa = await fbdl(_0x347f1b);
    let _0x2a0a5c = _0x3002aa.data;
    data = _0x2a0a5c.find(_0x552b60 => _0x552b60.resolution === "720p (HD)");
    data2 = _0x2a0a5c.find(_0x2ce35d => _0x2ce35d.resolution === "360p (SD)");
    image3 = _0x2a0a5c.find(_0xb266c2 => _0xb266c2.resolution === "360p (SD)");
    const _0x47a20a = {
      text: "⬆",
      key: _0x24dfd6.key
    };
    const _0x2d323b = {
      react: _0x47a20a
    };
    await _0x37bbe8.sendMessage(_0x20a567, _0x2d323b);
    const _0x2ce5b0 = {
      url: data.url
    };
    const _0x49efab = {
      video: _0x2ce5b0,
      mimetype: "video/mp4",
      caption: "*㋛ 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙰𝚂𝙸𝚃𝙷𝙰  〽️Ｄ*"
    };
    const _0x5d37f3 = {
      quoted: _0x24dfd6
    };
    await _0x37bbe8.sendMessage(_0x20a567, _0x49efab, _0x5d37f3);
    const _0x1c38c4 = {
      text: "✔",
      key: _0x24dfd6.key
    };
    const _0x3a8c75 = {
      react: _0x1c38c4
    };
    await _0x37bbe8.sendMessage(_0x20a567, _0x3a8c75);
  } catch (_0x5226a1) {
    const _0x2a037a = {
      text: "❌",
      key: _0x24dfd6.key
    };
    const _0x3aec00 = {
      react: _0x2a037a
    };
    await _0x37bbe8.sendMessage(_0x20a567, _0x3aec00);
    console.log(_0x5226a1);
    _0x4d14f8("Error !!\n\n*" + _0x5226a1 + "*");
  }
});
const _0x4a5771 = {
  pattern: "modapk",
  react: "📑",
  category: "download",
  desc: "modapk downloader",
  filename: __filename
};
cmd(_0x4a5771, async (_0x3400ea, _0x14630e, _0x16e004, {
  from: _0x5967b4,
  prefix: _0x35b27f,
  q: _0x257935,
  l: _0x363d06,
  isDev: _0x2f5aff,
  reply: _0x2b4503
}) => {
  try {
    if (!_0x257935) {
      return await _0x2b4503("*Please Give Me Text..! 🖊️*");
    }
    const _0x48d34b = "https://an1.com/?story=" + _0x257935 + "&do=search&subaction=search";
    const _0x284cac = await axios.get(_0x48d34b);
    const _0x32ed98 = cheerio.load(_0x284cac.data);
    const _0x28d2dd = [];
    _0x32ed98("div.item").each((_0x21b1e3, _0x490d40) => {
      _0x28d2dd.push({
        "link": _0x32ed98(_0x490d40).find("a").attr("href"),
        "title": _0x32ed98(_0x490d40).find("div.name > a > span").text()
      });
    });
    const _0x3ae3c2 = {
      quoted: _0x16e004
    };
    if (_0x28d2dd.length < 1) {
      return await _0x3400ea.sendMessage(_0x5967b4, {
        "text": "*මට කිසිවක් සොයාගත නොහැකි විය :(*"
      }, _0x3ae3c2);
    }
    var _0x1cf7a8 = [];
    for (var _0x458a41 = 0; _0x458a41 < _0x28d2dd.length; _0x458a41++) {
      _0x1cf7a8.push({
        "title": _0x458a41 + 1,
        "description": _0x28d2dd[_0x458a41].title + "\n",
        "rowId": _0x35b27f + "ma " + _0x28d2dd[_0x458a41].link
      });
    }
    const _0x4122bd = [{
      "title": "_[Result from an1.com]_\n",
      "rows": _0x1cf7a8
    }];
    const _0x2be4d0 = {
      text: "\n*ASITHA MD MOD-APK*\n\n👽 *Entered Name ||* " + _0x257935 + "  ",
      footer: "*㋛ 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙰𝚂𝙸𝚃𝙷𝙰  〽️Ｄ*",
      title: '',
      buttonText: "*🔢 Reply below number*\n",
      sections: _0x4122bd
    };
    const _0x12c0b7 = {
      quoted: _0x16e004
    };
    return await _0x3400ea.replyList(_0x5967b4, _0x2be4d0, _0x12c0b7);
  } catch (_0x4ff7b4) {
    _0x2b4503("*ERROR !!*");
    _0x363d06(_0x4ff7b4);
  }
});
const _0x303daa = {
  pattern: "fba",
  react: "⬇",
  filename: __filename
};
cmd(_0x303daa, async (_0x2c7547, _0x270e86, _0x45d131, {
  from: _0x5b0aa3,
  quoted: _0x31f7bf,
  body: _0x5537ce,
  isCmd: _0x1354d7,
  command: _0x509e31,
  args: _0x82cd5c,
  q: _0x40680b,
  isGroup: _0x301c58,
  sender: _0x48aace,
  senderNumber: _0x4beff1,
  botNumber2: _0x5148ae,
  botNumber: _0x128867,
  pushname: _0x4dcef8,
  isMe: _0x55d50d,
  isOwner: _0x530b1c,
  groupMetadata: _0x3904fb,
  groupName: _0x14f479,
  participants: _0x3b9e7e,
  groupAdmins: _0x42a831,
  isBotAdmins: _0x5be117,
  isAdmins: _0x5f3470,
  reply: _0x15e7f0
}) => {
  try {
    const _0x63225c = (await fetchJson("https://gitlab.com/anukunu2000/asitha-md-db/-/raw/master/Mreply.json")).replyMsg;
    if (!_0x40680b) {
      return _0x15e7f0(_0x63225c.url);
    }
    if (!_0x40680b.includes("https://")) {
      return await _0x15e7f0(_0x63225c.not_fo);
    }
    let _0x114610 = await fbdl(_0x40680b);
    let _0x573dff = _0x114610.data;
    data = _0x573dff.find(_0x22c24c => _0x22c24c.resolution === "720p (HD)");
    data2 = _0x573dff.find(_0x1571e4 => _0x1571e4.resolution === "360p (SD)");
    const _0x1db668 = {
      text: "⬆",
      key: _0x270e86.key
    };
    const _0x30d669 = {
      react: _0x1db668
    };
    await _0x2c7547.sendMessage(_0x5b0aa3, _0x30d669);
    const _0x21e585 = {
      url: data2.url
    };
    const _0x108a8f = {
      audio: _0x21e585,
      mimetype: "audio/mpeg"
    };
    const _0x3e7d97 = {
      quoted: _0x270e86
    };
    await _0x2c7547.sendMessage(_0x5b0aa3, _0x108a8f, _0x3e7d97);
    const _0x2051ca = {
      text: "✔",
      key: _0x270e86.key
    };
    const _0x1c0e53 = {
      react: _0x2051ca
    };
    await _0x2c7547.sendMessage(_0x5b0aa3, _0x1c0e53);
  } catch (_0x31e60b) {
    const _0x547496 = {
      text: "❌",
      key: _0x270e86.key
    };
    const _0x237cae = {
      react: _0x547496
    };
    await _0x2c7547.sendMessage(_0x5b0aa3, _0x237cae);
    console.log(_0x31e60b);
    _0x15e7f0("Error !!\n\n*" + _0x31e60b + "*");
  }
});
async function xnxxs(_0x24824f) {
  return new Promise((_0x2c6ded, _0x541f6b) => {
    fetch("https://www.xnxx.com/search/" + _0x24824f + "/" + (Math.floor(Math.random() * 3) + 1), {
      "method": "get"
    }).then(_0x3ae94a => _0x3ae94a.text()).then(_0x5ca834 => {
      const _0xb2e12b = {
        xmlMode: false
      };
      const _0x33c961 = cheerio.load(_0x5ca834, _0xb2e12b);
      const _0x2aa1a8 = [];
      const _0x59dd11 = [];
      const _0x271b91 = [];
      const _0x35e0bf = [];
      _0x33c961("div.mozaique").each(function (_0x4f1fee, _0x50de66) {
        _0x33c961(_0x50de66).find("div.thumb").each(function (_0x39c24e, _0x590506) {
          _0x59dd11.push("https://www.xnxx.com" + _0x33c961(_0x590506).find("a").attr("href").replace("/THUMBNUM/", "/"));
        });
      });
      _0x33c961("div.mozaique").each(function (_0x49601a, _0x4eefeb) {
        _0x33c961(_0x4eefeb).find("div.thumb-under").each(function (_0x262a92, _0x290ebc) {
          _0x271b91.push(_0x33c961(_0x290ebc).find("p.metadata").text());
          _0x33c961(_0x290ebc).find("a").each(function (_0x23b2c6, _0x59bb4c) {
            _0x2aa1a8.push(_0x33c961(_0x59bb4c).attr("title"));
          });
        });
      });
      for (let _0x412eef = 0; _0x412eef < _0x2aa1a8.length; _0x412eef++) {
        const _0xbcb49f = {
          title: _0x2aa1a8[_0x412eef],
          info: _0x271b91[_0x412eef],
          link: _0x59dd11[_0x412eef]
        };
        _0x35e0bf.push(_0xbcb49f);
      }
      const _0x39886f = {
        status: true,
        result: _0x35e0bf
      };
      _0x2c6ded(_0x39886f);
    })["catch"](_0x94fa76 => _0x541f6b({
      "status": false,
      "result": _0x94fa76
    }));
  });
}
const _0x597939 = {
  pattern: "xnxxdown",
  react: "🫣",
  alias: ["xnxxsearch"],
  desc: "Search and get details from xnxx.",
  category: "download",
  use: ".xnxxdown <query>",
  filename: __filename
};
cmd(_0x597939, async (_0x4317a1, _0x23de7a, _0x4cb8a1, {
  from: _0x1206bc,
  q: _0xd9f59,
  prefix: _0x58936d,
  sender: _0x460292,
  reply: _0x1241b2
}) => {
  try {
    if (!_0xd9f59) {
      return _0x1241b2("Please provide a search term!");
    }
    const _0x231491 = await xnxxs(_0xd9f59);
    const _0x3a2e3f = _0x231491.result.slice(0, 5);
    if (!_0x3a2e3f.length) {
      return _0x1241b2("No results found.");
    }
    var _0x4eb47d = [];
    for (var _0x368b1c = 0; _0x368b1c < _0x231491.result.length; _0x368b1c++) {
      _0x4eb47d.push({
        "title": _0x368b1c + 1,
        "description": _0x231491.result[_0x368b1c].title + "\n",
        "rowId": _0x58936d + "xnxxdl " + _0x231491.result[_0x368b1c].link
      });
    }
    const _0x3bfeff = [{
      "title": "*[Result from xnxx.com]*\n",
      "rows": _0x4eb47d
    }];
    const _0x4d8c17 = {
      text: "\n*ASITHA-MD XNXX DOWNLOADER*\n\n🫣 *XNXX Search Results* for: *" + _0xd9f59 + "*",
      footer: "*㋛ 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙰𝚂𝙸𝚃𝙷𝙰  〽️Ｄ*",
      title: '',
      buttonText: "*🔢 Reply below number*\n",
      sections: _0x3bfeff
    };
    const _0xf18c1c = {
      quoted: _0x23de7a
    };
    return await _0x4317a1.replyList(_0x1206bc, _0x4d8c17, _0xf18c1c);
  } catch (_0x3751e1) {
    console.log(_0x3751e1);
    _0x1241b2("*ERROR !!*");
  }
});
async function xdl(_0x4d0826) {
  return new Promise((_0x178b27, _0x494a93) => {
    fetch('' + _0x4d0826, {
      "method": "get"
    }).then(_0x3d2ef5 => _0x3d2ef5.text()).then(_0x36dd11 => {
      const _0x5aa9f1 = {
        xmlMode: false
      };
      const _0x459679 = cheerio.load(_0x36dd11, _0x5aa9f1);
      const _0x21c169 = _0x459679("meta[property=\"og:title\"]").attr("content");
      const _0x5ec4a = _0x459679("meta[property=\"og:duration\"]").attr("content");
      const _0x2f72a4 = _0x459679("meta[property=\"og:image\"]").attr("content");
      const _0x29dc6b = _0x459679("meta[property=\"og:video:type\"]").attr("content");
      const _0xbd1949 = _0x459679("meta[property=\"og:video:width\"]").attr("content");
      const _0x5d515f = _0x459679("meta[property=\"og:video:height\"]").attr("content");
      const _0x143a37 = _0x459679("span.metadata").text();
      const _0x319438 = _0x459679("#video-player-bg > script:nth-child(6)").html();
      const _0x1441b4 = {
        "low": (_0x319438.match("html5player.setVideoUrlLow\\('(.*?)'\\);") || [])[1],
        "high": _0x319438.match("html5player.setVideoUrlHigh\\('(.*?)'\\);" || [])[1],
        "HLS": _0x319438.match("html5player.setVideoHLS\\('(.*?)'\\);" || [])[1],
        "thumb": _0x319438.match("html5player.setThumbUrl\\('(.*?)'\\);" || [])[1],
        "thumb69": _0x319438.match("html5player.setThumbUrl169\\('(.*?)'\\);" || [])[1],
        "thumbSlide": _0x319438.match("html5player.setThumbSlide\\('(.*?)'\\);" || [])[1],
        "thumbSlideBig": _0x319438.match("html5player.setThumbSlideBig\\('(.*?)'\\);" || [])[1]
      };
      const _0xa3961b = {
        title: _0x21c169,
        URL: _0x4d0826,
        duration: _0x5ec4a,
        image: _0x2f72a4,
        videoType: _0x29dc6b,
        videoWidth: _0xbd1949,
        videoHeight: _0x5d515f,
        info: _0x143a37,
        files: _0x1441b4
      };
      const _0x3b692d = {
        status: true,
        result: _0xa3961b
      };
      _0x178b27(_0x3b692d);
    })["catch"](_0x48bc05 => _0x494a93({
      "status": false,
      "result": _0x48bc05
    }));
  });
}
const _0x2a4d9d = {};
function _0x4d98fc(_0x84365e, _0x2a48fb, _0x5998a0, _0x3fa18d, _0x2f32a8) {
  return _0x109b(_0x84365e + 0x282, _0x2f32a8);
}
_0x2a4d9d.pattern = "xnxxdl";
_0x2a4d9d.alias = ["dlxnxx"];
_0x2a4d9d.react = "🫣";
_0x2a4d9d.desc = "Download xnxx videos";
_0x2a4d9d.use = ".xnxxdown <xnxx link>";
_0x2a4d9d.filename = __filename;
cmd(_0x2a4d9d, async (_0x99ef0f, _0x49c469, _0x5790f3, {
  from: _0x393dd6,
  l: _0x56aa1c,
  quoted: _0x42467d,
  body: _0x41de2e,
  isCmd: _0x431c1b,
  command: _0x325db2,
  args: _0x2c8889,
  q: _0x35eef7,
  isGroup: _0x3871b2,
  sender: _0x14ad75,
  senderNumber: _0x1d1f3c,
  botNumber2: _0x2f1c6a,
  botNumber: _0x1fb94e,
  pushname: _0x3af640,
  isMe: _0x57b72e,
  isOwner: _0x218f9d,
  groupMetadata: _0x5ae353,
  groupName: _0x848d30,
  participants: _0x5cafbc,
  groupAdmins: _0x2d5030,
  isBotAdmins: _0xe7feb4,
  isAdmins: _0x5b7100,
  reply: _0x32786e
}) => {
  try {
    if (!_0x35eef7) {
      return _0x32786e("*Please give me url !!*");
    }
    let _0x2e3958 = await xdl(_0x35eef7);
    let _0x4d03e7 = _0x2e3958.result.title;
    const _0x5a2f73 = {
      url: _0x2e3958.result.files.high
    };
    const _0x5d48ee = {
      video: _0x5a2f73,
      caption: _0x4d03e7 + "\n\n*㋛ 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙰𝚂𝙸𝚃𝙷𝙰  〽️Ｄ*"
    };
    const _0x13b049 = {
      quoted: _0x49c469
    };
    await _0x99ef0f.sendMessage(_0x393dd6, _0x5d48ee, _0x13b049);
  } catch (_0x1576ed) {
    _0x32786e("*Error !!*");
    console.log(_0x1576ed);
  }
});
function _0x3867() {
  const _0x413fad = ["rnail", "t_ear", "_rati", "portr", "CVYHD", "r_3:_", "self_", "curly", "n_(fi", "xt ef", "ng-on", "ts-on", "stic", "fLbbC", "e-797", "trap", "EJkxt", "offee", "am-lo", "bound", "deare", "APcyT", "els/d", "ny-wa", "itels", "* for", "pia", "guage", "iti T", "e_pub", "corse", "masca", "107.h", "tumn-", "-sign", "ct-70", "ogo-a", "IyYxG", "spike", "cot-s", "-of-g", "hose", "JQISO", " star", "ogo2.", "me-on", ".nsfw", "MnJav", "steve", "nsent", "olf", "abstr", "ibles", "hyFsS", "RYhIE", "ese9", "BDxyQ", "dent", "two_t", "vil_8", "XMILG", "parte", "ucnxO", "┃ 📝 `", "atch", "hLoSE", "xy on", "resid", "\n┃\n┃ ", "cande", "nXfIL", "Agent", "ult f", "_open", "path", "-wing", "ossib", "e_fur", "membr", "arch", "Noel ", "-nigh", "lette", "text-", "deept", "ick_t", "tGKeI", "rom x", "-tita", "asser", "s_bra", "eneck", "grope", "GGSSf", "weapo", "ese13", "eBaYy", "aphy ", "ok < ", "14.ht", "brawl", "mand", "ple_s", "clima", "ng :(", "BKWzx", "ailab", "_body", "uNnFs", "write", "en_ju", "DqdOV", " bulb", "eting", "o-sty", "strai", "der", "glitt", "toena", "Qjfvh", "jCEHk", "le-gr", "ct cl", "and-s", "e_eja", "on on", "gray_", "w tex", "ght", "s-hac", "9.htm", "ellat", "late_", "nter", "e ano", "ciri", "rso", "messa", "e-wor", "smoot", "mzXhB", "_bear", "ess", "smug3", "tar-o", "photo", "fCyPB", "e_lad", "al_fl", "ale", "riot_", "xy-ba", "music", "lepor", "ve_as", "crack", "s-tex", "use", "𝗧𝗟𝗘` ", "e-wit", "ri_le", "teena", "@s.wh", "on_ba", "NUtbQ", "e-col", "357.h", "-ligh", "803.h", "struc", "n_bod", "ace", "fathe", "d_sen", "en ca", "3d_an", "les_o", "rpZMz", "t Nam", "being", " rain", "t_of_", "tom", "r_bro", "e_eye", "t_suc", "del", "fw-pi", "sus_(", "vehic", "cheek", "nkin_", "join", "h)':f", "_coup", "hed", "bwqKD", "ntPxA", "japan", "gon B", "2017", "_wing", "WbCKh", "dog_t", "s_biz", "org/a", "ckPET", "on pa", "tMuzu", "off_s", "ro_ac", "ties", "ron", "D XNX", "trice", "er ", "LCmFE", "rom_b", "sure", "-ange", "amphi", "ss_ma", "fit", "uqGSA", "\\);", "react", "t sty", "maker", "pKReZ", "dres", "immin", "doubl", "quali", "bite2", "ink-s", "itali", "qONQe", "loud ", "ob_fa", "ct-67", "eenag", "avian", "iti-c", "ng-ch", "dontA", "tist", "PvsFN", "er te", "tTIoG", "720p ", "air-b", "mpres", "hPUrA", "k-on!", "_geni", "dGPsH", "y_bre", "ow_pi", "xbbb", "n_thi", "on_kn", "RoLyQ", "antie", "nronp", "ssive", "h Onl", "ood", "semen", "K sty", "compu", "Fabri", "n sty", "zryPp", "s-591", "fart_", "_cuff", "ch_bu", "MKTvm", "s tex", "with-", "126FEUuSn", "[a][b", "_scal", "on_pe", "onsen", "ng_ey", "aper-", "ees", "e tel", "mxOku", "per-m", "gloss", "retro", "731.h", "e) {}", "PREFI", "es)", "Like*", "d-sil", "avata", "or_mo", "ee-56", "MYlcY", "on_fu", "_(gen", "machi", ";q=0.", "rwIAO", "/132.", "xZQXT", "eques", "hy, s", "FnKmv", "NwHgp", "on_ma", "pop", "windo", "gnati", "e-jok", "ion *", " Free", "gefmk", "c_sex", "31.ht", "ZguNt", "e pro", "_slay", "humb", "NyraE", " 𝙰𝚂𝙸𝚃", "n() ", "rkmfL", "ht - ", "Z_$][", "ur na", "_pant", "ween_", "frill", "qhEgy", "tagme", "xwane", "now-3", "ed_br", "\n🔞 *`", ".json", "page_", "uous_", "AFyxZ", "LlgYl", "asy_x", "ountr", "𝐄𝐑`\n\n", "umsho", "brida", "tCEtB", "chbsm", "hy-st", "Cover", "FileS", "QxFHZ", "armba", "rm2", "://an", "tic", "pPLxZ", "rd av", "embro", "URL", "malay", "WCJDK", "Beaut", "nsfor", "e Lig", "nail_", "e_thr", "sex4", "_4_po", "ASVsF", "ct-cl", "advan", "_bed", "tiple", "pillo", "HLS\\(", "herdi", "copyr", "URL:", "he_ki", "IXaFu", "harne", "ruto_", "l.app", "3D sa", "pick", "67308tljntz", "al_sl", "ghts", "n_hot", "_unde", "wJZNN", "draen", "bare_", "osali", "on-te", "ent_o", "or: *", "tria_", "y_edi", "butt_", "le_co", "LAvgQ", "older", "NARwh", "ine-1", "gynou", "tn2 ", "xy ef", "yzrEl", "one_t", "ScPDp", "d-5-2", "arm_b", "spott", "yaoi", "eXusU", "minis", " : ", "ENaqW", "Njwov", "el  t", "stic-", "yFjkB", "ealis", "acter", "pony", "fangs", "ple_v", "qVTGc", "CXnil", "NJbbK", "hiran", "ER*\n\n", "one_p", "futan", "_(fri", "ighs", "ed_sk", "ect-n", "flare", "vrcha", "isibl", "PrDQz", "retur", "3_fin", "r fre", ":tran", "rREVK", "fEZrh", "Embro", "latio", "figur", "ful-p", "print", "ed_pe", "TtDZV", "d.va", "api", "curta", "ksURt", "hellu", "me ||", "medie", "ts_ap", "_symb", "asari", "voyeu", "ool", "editi", "uuQcu", "dCgDf", "9:16", "753.h", "ve-ne", "devan", "anda", "cle_r", "List", "winki", "1futa", "WGbZf", "VYyHs", "simpl", "QkMPz", "e Typ", "fnaf", "hsCkQ", "honey", "penil", "minec", "nvzAk", "iStju", "ching", "on_to", "FAypU", "nari", "llism", "k-ven", "VBUZA", "w_wai", "ine-6", "ation", "wolf", "cock-", "d&cat", "anine", "nnect", "qlWYB", "perso", "woode", "thing", "talon", "sling", "c tex", "hes", "chest", "ess_r", "bowti", "wet_c", "d-scr", "inkli", "d 4", "d_anu", "tail2", "nose_", "IsXab", "tailw", "mai_s", "sideb", "ImWHx", "er_ma", "lar_l", "s-93.", "allst", "pig)", "ette", "pGIUH", " pape", "ame", "taker", "jUsyp", "cheer", "2011", "g_wor", "IAZEW", "dripp", "div.t", "dary_", "y_vis", "gkwYk", "n ste", "e fon", "DTWfj", "tan_f", "naugh", "dia_(", "contr", "smell", "Niger", "repla", "EjQKV", "basta", "Neon ", "alfun", "ter t", "_myth", "KrKkl", "nd_dr", "no_so", "texpr", "alogu", "titan", "njMCb", "eHdbz", "gpDaU", "80.ht", "tion ", "cave", "SGpoc", "evKtL", "fucke", "eyesh", "Gccwh", "red_n", "nkin", "lara_", "HeVFm", "GARhY", "ick_e", "three", "nlbnr", "_tied", "-62.h", "_afte", "easts", "jumbl", "/api/", "_man_", "maid3", "ful G", "or ho", "etter", "creat", "d_fem", "t-onl", "d_arm", "big_a", "HxIOh", "d_sil", "graff", "ng-te", "anten", "pace ", "-683.", "boob_", "modap", "gamin", "digit", "nuCyP", "muscu", "uncen", "vest", "quart", "half-", "_arms", "elda", "d_by_", "en_br", "down_", "dJJAt", "choki", "CXsOa", "KnUDV", "beret", "passi", "Lovel", "wyUNT", "dock", "Examp", "Qasbu", "o:_na", "olden", "silve", "head_", "t onl", "axy w", "e imp", "mass_", "warne", "essag", "blue_", "/mp4", "LFlQT", "egend", "4) > ", "the_e", "seasi", "tuous", "offsc", "dust", "ose", "OLRfQ", " - ", "iner", "yqAYF", "ted", "-on", "rom n", "15, p", "busty", "rican", "r's_b", "netra", "r_hai", "gUbjN", "VJYfI", "turba", "sty", "alia", "ne_ze", "s-nig", "fuku_", "uFMyr", "lets", "_clot", "ect-o", "ossea", "HWNkA", "highr", "VPNuo", "n_bet", "_seco", "Galax", "3d-si", "url=", "costu", "akura", "belt", "eAUkX", "YVWiL", "new y", "e Ava", "saiya", "gyaru", "ays", "top", "sTtbl", "rbone", "e_uni", "ples", "oid", "BrzBT", "ision", "🎫 No-", "ed/nu", "maske", "wFDAs", "spani", "mYgkQ", "pic", "enorm", "ar_ra", "WNFdz", "140.h", "ext-2", "colou", "ct on", "moder", "t_nam", "ata", "t eff", "filen", "plant", "pSHXE", "rumi_", "viewe", "'(.*?", "oad F", "er_pe", "bvBQm", "enf", "hyper", "reola", "wet2", "nd te", "_chan", "TVGOR", "lsnZz", "(((.+", "bear-", "ated_", "uWxbi", "brown", "ng_le", "rusad", "DsiIB", "WlEjD", "outfi", "VYXdV", "AMBWJ", "twork", "ng_in", "EnjDm", "a_isl", "_bra", "prXaD", "1.htm", "rever", "ot-lo", "QNbig", "IPZQH", "DokjT", "kUsxg", "beddi", "male", "starf", "spira", "ect-f", "plTIJ", "bulge", "taint", "Ctdlf", "othin", "hWDMr", "gZZRq", "tFEpl", "koopa", "only", "g_dow", "is_ev", "shiny", "t-by-", "RTgdo", "d_col", "evice", "-APK*", "sakur", "cloak", "ess_f", " Gree", "Candy", "ter-m", "full-", "UrlLo", "battl", "TRgKK", "bodys", "PSzRi", "NsTsm", "kenin", "bethe", "qnpAb", " vide", "lockh", "FDACO", "Yubpl", "scars", "fart", "coupl", "_1_po", "glory", "leopa", "ral_h", "3d-fo", "speci", "ess_z", "yObNv", "_hair", "YVzWh", "saggy", "slim_", "Boom ", "daugh", "jGzvk", "er_co", "expre", "ity_c", "leg", "chiro", "n Onl", "m]_", "atsap", "sRUNV", "g log", "oBbmJ", "GjAoK", "d_ora", "e fun", "compl", "makin", "s-74.", " a > ", "e_com", "UShXI", "GkKrS", "nbiYo", "lggsL", "Link ", "ht Ef", "BKtlU", "harem", "pYLQe", "ith i", "Idgqw", "yle-3", "JVOYb", "AKIWY", "font_", "/fema", "Logo ", " Leaf", "rint", "ree_h", "eskin", "anon", "JEkSp", "de_fe", "splQr", "ed_se", "cum_b", "_deep", "ykmay", "wn <x", "zodia", "sole_", "desk", "zThcB", "jDlrK", "RaSpb", "o-mak", "ed_na", "play", "/sear", "bag", "-spla", " (tru", " gene", "ZLllw", "ma/fa", "backb", "human", "ual", "monoc", "ursin", "𝙧𝙖𝙩𝙞𝙤", "ng_an", "leg_l", "WVqSj", "Oyyge", "320,i", "bXzwy", "xvEid", "onlin", "celet", "lage", "init", "-natu", "VFKES", "5_toe", "gzHSd", "phrod", "cup", "thong", "iqDYG", "D tex", "KJxSp", "d_org", "OEcgI", "money", "arkin", "Heigh", "chari", "Wvmhj", "ord g", "top_h", "Spuse", "trace", "mario", "🫣 *XN", "Thumb", "rouge", "free_", "impli", "sh_di", "story", "Impre", "_fell", " 〽️Ｄ*", "NGtXm", "emble", "aid", "sanda", "whole", "e-foo", "sailo", "leash", "e-sta", "ormtw", "cute_", "kVmmY", "ve-le", "nting", "sex_f", "y_fem", "xIVxD", "setIn", "lEqjK", "h-onl", "r_mal", "find", "pic3", "zeit", "burst", "ogo A", "4_fin", "Naywl", " equa", "1anim", "logod", "e in ", "CifBP", "ne-61", "uGjtK", "ries)", "   \n•", "rch R", "AThLU", "❄️ `𝘿𝙪", "aethe", "l_cro", "ages ", "grind", "_auto", "one_l", "y_(ml", "ache", "oid2", "pVczg", ".webp", "KvQLG", "jhyLG", "ffect", "ad_da", "elly", "(SD)", "ensor", "tmSam", "agsHU", "EHhfm", "homes", "banda", "DEO D", "div.m", "hday", "sex_m", "eight", "hter", "UCwaH", "frott", "oll", "LweAp", "NNThe", "essiv", "ework", "Diamo", "danci", "pigta", "y_hat", "xJLrN", "'s_bl", "er.*", "seaso", "Codua", "again", "_vagi", "artis", "e_pin", "proje", "lHwyh", "duo", "2021", "dtmJT", "slim", "82.ht", "tits_", "on_bu", "in th", "RClVn", "down", "ng-yo", "🎶 Aud", "_horn", "ker-a", "zSjIf", "suit", "asses", "mwpTP", "rIFxC", "xnxxs", "DVBmD", "ate_c", "orgy", "zukpq", "blunt", "MvacK", "shoes", "ge  C", "vDukw", "s hac", "nth-c", "iti-l", "tn1", "cyber", "bic-t", "ass_f", "al_cr", "izMeL", "pko", "zgKfW", "ent_s", "ugh_c", ".cont", "-to-y", "ips", "shirt", "fruit", "chris", "red", "ht-le", "ors", "iend", "taper", "eYjHg", "qQIun", " Fire", "_cind", "scree", "xDyYp", "JbKHp", "ass_g", "Msg", "-pres", "onid", "Qvqbc", "me on", "𝚁𝙳 𝙱𝚈", "le-27", "e bro", "id_18", "rHLgc", "caugh", "480p", "zenle", "glist", "WuEKp", "PIukC", "bever", "e era", "v > d", "all-s", "TMVeI", "rs on", "e-a-b", "reen-", "VwEMo", "ark", "CqHlf", "IntLE", "g_pus", "RCSZF", "biped", "al_sc", "dism", "harle", "ct fu", "bird", "type", "rals", "lIkFe", "dery-", "ese7", "tlVbj", "tagon", "ng_dr", " 3D p", "VwjQe", "` : ", "runny", "vore", "tanuk", "471.h", "\n\n👽 *", "legen", "ercel", "bed", "big_s", "n-506", "spiky", "ed_co", "g_bik", "floor", "stard", "HXReT", "1459473SgjdiN", "shing", "autof", "VoOkJ", "footj", "┃ 🔗 `", "*\n  ", "bent_", "e-era", "behin", "ine-t", "e-347", "v_sig", "e san", "◈====", "irt", "riend", "aqzgl", "_anus", "mobia", "atIvs", "pain", "cts o", "c_dom", "c vin", "_trai", "fcdyT", "ect", "UVEXl", "nieNv", "no_sh", "ng_ob", "xiati", "BanXu", "SFTnt", "on_av", "fat_b", "GIZTq", "ect-t", "ree", "e-dou", "jfEOf", "\n╭───", " Blue", "<3_ey", "n_(se", "one_f", "CmbYS", "h pig", "cter", "theme", "red_e", "ean_m", "luva_", "insec", "AnnYQ", "boner", "o_bro", "axios", "ficti", "oth e", "us_co", ".fb <", "om-le", "anato", "aTzZx", "720p", "ese10", "-gold", "y-752", "RsvdG", "h_bal", "wink2", "egypt", "tuck", "enus", "://gi", "oy_in", "HCcrz", "ne-88", "Natio", "goat", "actio", "iw)':", "ves", "uno", "brows", "🔋 `HD", "HtMYP", "odia", "hwoPH", "lWRsl", "asts", "bokeh", "5_fin", "e-fun", "cum_c", "jxSYC", "HA MD", "enise", "on_fr", "18.ht", "e mas", "lacta", "90.ht", "on_us", "super", "capco", "and s", "ous_b", "dick", "big_h", "GIYll", "ptLAK", "oppai", "kinne", "peg", "smirk", "numbe", "e_don", "e_fil", "div >", "pumpk", " to y", "3D cu", "handc", "yordl", "r*\n", "SpWDv", "yshXk", "split", "smili", "ans", "ese3", "gobli", "bfUvE", "t Eff", "day", "twerk", "spire", "245.h", "n_clo", "CdTnH", "*㋛ 𝙿𝙾", "girly", "ngdom", "apan", "paint", "lopun", "ive_f", "attoo", "Toakj", "ikTok", "oni", "neckl", "fox_g", "n-onl", "ered_", "oes", "_lick", "UiFEx", "FErwp", "0.htm", "exhib", "low", "LltVN", "r_tra", "c Tex", "r-man", "re_em", "cupca", "drQLF", "ome", "href", "ends", "anid", "9\\('(", "ons_a", "footw", "manoi", "cub", "pale_", "-mess", "asuka", "what", "_in_m", "blueg", " mess", "wn_br", "yt-se", "ng_on", "bed2", "t_hol", "pi/do", "o_pen", "eleti", "fEHIK", "favxB", " styl", "twink", "pole", "OlwkJ", "ect N", ".36 (", "hyaen", "'s_he", "g_wit", "y-cut", "e-767", "high", "legs_", "oral2", "assas", "ble", " spla", "hing ", "make-", "rence", "unch_", "ne-12", "yle-5", "Ligat", "Vhfxh", "omina", "racte", "ud-te", "gropi", "neon ", "n_lin", "mosai", "ional", "creen", "=====", "ition", "_huma", "miruk", "WeWdX", "kes", "l_sca", "10s", "olor ", "evisi", "escov", "rimmi", "_watc", "g_pen", "NKStP", "_behi", "rewar", "rope_", "hips", "raise", "half_", "tim", "537.3", "TBAWp", "sendM", "h_eye", "tfeed", "oo-ef", "xx.", "onary", "g > s", "rpowe", "poLMO", "snow-", "r_(se", "r-fac", "lynx", "shi", "nd_an", "pleas", "ahega", "wgirl", "other", "ary", "etric", "RpGQx", "wnhfM", "au_ra", "e col", "one-p", "baref", "tIRMl", "ese_c", "yumHL", "break", "aqua_", "raint", "uteru", "_thro", "ass", "ire", "jsIrM", "size", "grDNK", "OwcQg", "vRuEz", "team-", "kkZTy", "e gir", "fores", "n_blu", "nordi", "aphy-", "fur_t", "claws", "line ", "bMvVT", "tan", "vemen", "Pleas", "ter", "ts2", "r Onl", "nd-fo", "ogoHN", "girl_", "n_che", "ng yo", "sorin", "g Nam", "jdMBa", "nier", "bylet", "ndic", "oader", "is_bi", "meme2", "cybor", "ficat", "on_at", "jxOiV", "ot lo", "n_uni", "Paint", "ii_re", "='min", "YIZMH", "thai3", "ing o", "epic_", "artho", "fectt", "oom", "sega", "groun", "rch*", "kJFbO", "ful b", "UB DO", "ent-t", "_user", "486.h", "elden", "aYbFe", "kryst", "┉━┉┉━", "depth", "jajgv", "trate", "vel", "oSyWM", "e-sky", "evxxg", "mVQqn", "reast", "QipXv", "://pi", "IFHgu", "qvMQB", "edran", "pJiEZ", "sheet", "VsXEw", "tle\"]", "embra", "artoo", "aper", "eevee", "eikat", "nFPFe", "logo ", " > li", "lue_f", "tKSjg", "_leot", "gravi", "JSoJp", "fembo", "l_hum", "ohhai", "precu", "oNhkB", "nflat", "hanna", "sea", "-711.", "_styl", "lRjpe", "ingto", "e-you", "ner", "𝐓𝐎𝐊 𝐃", "thai4", "aint", "THA-M", "um.js", "empty", "181.h", "alie", "sing", "furni", "tars-", "YcaQo", "d_fro", "t tex", "on-th", "dog_e", "irls", "naked", "-logo", "XRnfO", ".ring", "_impa", "City ", "FdZNL", "ng_pl", "ronhu", "i_ten", "time", "712.h", "arkni", "_of_v", "155.h", "gh_wa", "e typ", "PuTWw", "hairl", "mostl", "tkpVA", "ZmOzO", "o_ura", "*give", "ts-10", "t-in-", "e_bra", "ansio", "e_fem", "_on_b", "cowbe", "tive_", "hero", "kitch", "bLSrL", "yello", "#0000", "ody", "-amaz", " coun", "eZvKT", "e-art", "fanar", "dutch", "beer", "RrMLF", "owtxt", "DXdio", "warha", "ffhAI", "ext E", "ow_ha", "wtnsD", "treet", "bodil", "big_n", "oNYxN", "go-ma", "skirt", "dark_", "toget", "ic_ha", "kabot", "-part", "Apple", "adven", "ha-md", "oto36", "ouple", "dZtOL", "re2", "speec", "upils", "tekke", "facia", "perky", "Dark ", "is\")(", "hro", "d_dog", "vapor", "main ", "e art", "vocal", "ukRtP", "NHRdD", "gapin", "watch", "erine", "ne fr", "m_awa", "VtdUX", "rking", "ple", "finge", "chi", "ars", "VilbJ", "dPOpZ", "ough_", "gwear", "t-sty", "e_han", "fiauu", "Date*", "_bell", "d-onl", "canis", "l_dxd", "UdXIB", "-with", "forma", "chise", "NXahl", "r/dit", "ken g", "old_m", "ley_s", "guMEK", "cucko", "bbmbb", "NgLvT", "eLllJ", "cot-l", "aints", "CwTQg", "y Sty", "_6_po", "ct-44", "_smas", "rope", "pasto", "JpnOj", "WoXjB", "e.*", "ve_pe", "brune", "4_arm", "tiara", "hirt", "dJaCW", "air b", "for w", "ZjlXJ", "patte", "─╮\n┃ ", "sueki", "tMflY", "y_nud", "lish", "_virt", "lube", "XopDZ", "tage-", "irrum", "text3", "ouds-", "go-fr", "rier_", "bar_c", "piTCL", "jill_", "loone", "ghFEk", "vivie", "Width", "e_dri", "may_(", "ghost", "2013", "l_hai", "NHCKh", "rs-si", "eet", "Pyrbk", "pvfDP", "kFJjH", "l_rin", "X DOW", "ntlin", "RKfuG", "equid", "e_(ge", "EJKnh", "e wor", "open", "3d-wo", "e_pro", "playe", "xplos", "tails", "oon", "o tea", "e a c", "yGXnR", "orger", "Plasm", "e-typ", "PbfMf", "xml2j", "YVdRI", "y-sty", "tick", "d-gre", "tmas", "_shir", "PdsId", "d_wif", "t_fet", "TONE*", "e_roy", "arche", "fan_c", "nae_(", "r-451", "_on_a", "aterc", "ass_j", "IfwPp", "blem)", "hair_", "iti c", "male/", "#__ne", "lar_f", "bing_", "on_fe", "y_tai", "a-zA-", "qzrhy", "above", "bigge", "lade_", "37.ht", "🫣 *XV", "setFf", "one n", "arre_", "o=dec", "thund", "Ggyrt", "pvDao", "on_le", "tar-w", "the s", "glowt", "gamep", "gon", "cales", "hqePj", "RONHU", "jujut", "ashi'", "highl", "regio", "per m", "rl_po", "guilt", "ick_m", "hment", "n_but", "*ASIT", "cum_p", "iece", "r_bel", "wall ", "cts-6", "jAhBk", "topwe", "pt ka", "_club", "OBfIU", "EYvgI", "erson", "uQjpj", "TlURN", "ZkvEm", "femal", "Downl", "t vid", "nBKOh", "hild(", "tic_d", "-648.", "bathr", "felid", "otoko", "ng_to", "ral_p", "jotar", "thoug", "bHAyH", "xvdow", "orm_h", "qhkAY", "EPJSh", "kings", "-546.", " on c", "resul", "_sitt", "huge_", "ure_f", "osed", ".com/", "magic", "spitr", "KmMWd", "Host", "l_z", "achin", "]; [a", "y-doo", "r Fac", "d_stu", "g_lip", " nigh", "paren", "d-tex", "-345.", "*Plea", "llic-", "XrvNq", "SrOHQ", "o onl", "be2", "mByte", "GcGHa", "arch ", "_futa", "://", "unico", "on_(s", "n_fem", "_betw", "12QsgyKr", "vCgLP", "gvjBe", "d-157", "olQyU", "m_str", "zpzPU", "MgRFt", "hallo", "hed_c", "twili", "NWCgP", "final", "ay-fo", "sony_", "out_o", "NEfyy", "mSixU", "derwe", "98.ht", "and", "'t_bu", "rbati", "erect", "rmati", "ringd", "lgirl", "pbAXC", "DAMAe", "egg", "MHyvg", "swear", "RBput", "jIXRD", "NmvmL", "tail_", "mpegP", "2boys", "MTCzR", "oed_a", "c_cur", "nk-ve", "ken-g", "reach", "gende", "_than", "twin_", "kUKfg", "-on-h", "ngus", "FsNxr", "KTsTe", "se_co", "surpr", "ant_b", "tCoBq", "lid", "se co", "shes", "clera", "glove", "lar", "test", "que w", "quFgN", "eye_r", "villa", "e_bul", "BVIVf", "d_pus", "band", "54.ht", "gWkKh", "c_exp", "tic_f", "pecs", "qAvpQ", "octol", "robe", "KTONU", "VXodX", "ssdl", "hazbi", "cutie", "igrad", "lave", "capri", "-179.", "o_onl", "kin", "FBErW", "ng_yo", "egEOA", "ing_c", " *Tit", "dubio", "t_ins", "AKufI", "freak", "hpBQo", "jack_", "Glitt", " birt", "furre", "ator", "mach", "pWNrY", "red_r", "  Onl", "om_pe", "  onl", "d_hea", "y-tre", "tatsu", "2009", "  3D", "ed_ex", "yqiTq", "ceous", "uKfgZ", "erenc", "captu", "Mxrwh", "Link*", "EvCCi", "ing_g", "ble E", "dnEAh", "noid", "l_pen", "cDYAE", "sneak", "ed_pu", "xt Ef", "url", "ed_po", "utt", "art", "WNLOA", "bing", "GnANQ", "e-mul", "-equa", "itche", "es_li", "_girl", "elow ", "ry=", "kim_p", "gon-b", " RING", "SIZE ", "vxTsb", "_no_k", "squir", "mouse", "singl", "eye_c", "e_hum", "effec", "milit", "titjo", "1girl", "nEUIh", "e glo", "the_s", "VmpWu", "lhDFe", "rear_", "t_exp", "ture", "gvbCp", "our c", "es_on", "ane_(", "moani", "ade", "nal_a", "zooto", "locke", "real_", "YXbXc", "ht_bu", "ape", "throa", "mercy", "elf_e", "raka", "ass3", "map", "_arm", "ple_f", "y-san", "ahri", "scoob", "NOUNO", "e-a-l", "inver", "e Dou", "marsu", "germa", "_lips", "gnatu", "CHYfk", "McohE", "anima", "_wris", "WWucC", "n-fir", "orra", "name ", "apex_", "1boy1", "VnPsJ", "nd Te", "rarit", "w_bod", "_only", "*Inpu", "ial_a", "cale", "d_eye", "xpans", "imp", "ini", "vvVjW", "muste", "torn_", "seraf", "could", "aper ", "ock", "rom a", "y_gea", "ngle_", "Gflux", "ing_a", "slime", "ehind", "tople", "d Tex", "NNEhn", "ilabl", "ctor(", "MqPRI", ", lik", "rZEed", "e_wom", "fortr", "No re", "shave", "zGmcB", "lar_m", "62.ht", "laven", "Metal", "cript", "scent", "D com", "spect", "ng_br", "k log", "_glov", "in-st", "milk", "granb", "kip", "pose", "dl <p", "tamil", "blank", "fileN", "feren", "GyGAy", "WMryS", "sDNPC", "w-eff", "demon", "y_on_", "hebre", "e-ame", "pivot", "Milk ", "fba ", "uncir", "/mpeg", "nes", "skind", "reali", "_angl", "c-onl", "LhBOA", "asian", "smart", "galax", "UNldE", "> sec", "qyIYP", "froze", "intag", "_dres", "lug", "vivor", "alter", "ad=32", "xkSmG", "skimp", "BtIAF", "riar", "selfi", " a ph", "talli", "ter_p", "-685.", "voice", "cross", "\n╰───", "lostt", "tar o", "cqFmd", "wardr", "r: *", "anous", "furry", "rAjgK", "KzVan", "FGhtm", "dwCvP", "ology", "cuffs", "3D un", "betwe", "DSwoc", "izuku", "detac", "rJEHe", "hellh", "t-pro", "mandL", "ght-b", "neon_", "al_me", "d Pur", "ywxmu", "fect ", "ircle", "ct-94", "ices", "TnPWh", "ge2", "Moder", "ibran", "ZnZTt", "e-688", " EPA ", "NHUB ", "netor", "oGpGT", "@mrni", "omimi", "netic", "chubb", "era", "_biki", "otzhx", "_the_", "s wit", "paizu", "leaki", "_butt", "e rea", "de a ", "Text ", "e_lip", "dcau", "n_one", "𝐁 𝐃𝐎𝐖", "troni", "late-", "asy", "round", "ADUGW", "_face", "t-tex", "on cl", "ss_le", "thigh", "fWFut", "jrYFL", "ge_gi", "OWNLO", "rror ", "jteyC", "uReIi", "your_", "st_su", "gangr", "sidel", "h_bro", "e_fet", "Shado", "y-onl", "iUIsx", "D Hol", "iggle", "NLqpW", "big_d", "re In", "UauvV", "wet_s", "tmas-", "'\\);", "ound", "young", "com]*", "cleft", "AfYZM", "- New", "ass_e", "lic2", "_shou", "yours", "hJYuZ", "wild_", "nders", "pokem", "e-a-r", "pawpa", "ing_f", "l_mar", "sexua", "phone", "ind a", "HZiVY", "sex_t", "tic_c", "no_ni", "h_ski", "start", "orph/", "a-oya", "lar_b", "4tFgXkG", "muscl", "1917 ", "hLYUN", "accur", "ming ", "hoove", "ssion", "il ba", "lovel", "IkAhe", "rder-", "phaLA", "beach", "bjOPe", "Advan", "\n\n*㋛ ", "_oral", "ideos", "ricbl", "arm_t", "ate", "S fro", "lika", "fang", "king", "an_10", "47891", "erse", "cJVMm", "irl", "e-glo", " arro", "o_kyo", "digim", "lge", "_airb", "kIYjS", "cum_l", " masc", "leg_m", "OmZQr", "web_a", "l-gam", "maled", "er ma", "er-ef", "ject", "firew", "face_", "urina", "sitti", "mommy", "grey_", "le-52", "_stoc", "YpcfO", "y Tex", "RaDls", "t-143", "_lang", "clito", "w/hen", "pQFXN", "D PRO", "fiti", "ZgefE", "tars", "  Tex", "i_(po", "yZeir", "y Chr", " fetc", "Error", "ganyu", "snow", "on_gs", "vAfwo", "sleev", "lip_p", "ssndK", "l_med", "cuntb", "skinn", "ng_do", "cours", "ser d", "zippe", "div.i", "rn_dr", "disem", "c_hai", "ginge", "_inse", "ption", "YuceG", "one", "aming", "eqBxW", "wrist", "ject_", "cakes", "ted_g", "veryw", "azur_", "addOu", "xvs", "fiti ", "flat_", "ng_ov", "Matri", "games", "n the", "res-8", "tilt", "ive_e", "ts* f", "-text", "equin", "ttle_", "ver-2", "hboob", "iDkGN", "ollyw", "!!*", "*මට ක", "our", "e cut", "st_gl", "wolf_", "DDQRQ", "fire", "boobs", "-typo", "qkBJz", "QrpHZ", "tsuna", "FtEnL", "heavy", "-an", "ang", "fame", "DAdBf", "diva", "ised", "stret", "yDQEW", "stoma", "-on-w", "0.com", "ecum", "all s", "body", "ursid", "lipst", "the b", "exces", "mgwil", "ars c", "armle", "TkHUj", "_limb", "BNgtS", "l-win", "r the", "eDKsi", "apron", "Typog", "ield", "cum_w", "eavy", "ins", "e Ame", "mihoy", "aUuag", "OaZPN", "fsFBr", "_male", "asymm", "ect-6", "hless", "val", "ple-1", "asphy", "$]*)", "okKpU", "kanga", "-180.", "est", "75.ht", "ormat", "verfl", "e_req", "cle", "sHjDO", "werew", "ple_b", "ese5", "shark", "d_leg", "ating", "e-nsf", "10838080yFqrPR", "plump", "HpCGj", "tiona", "szIwe", "irthd", "metal", "n Lig", "title", "kuXws", "baseb", "ails2", "by-st", "front", "ese11", "shant", "ceHhv", "RoPVa", "adow", "agon", "sex/m", "secur", "d-4-2", "ssy", "ext", "qhRUx", "ZttnS", "ears", "subme", "240p", "_wais", "LAFaS", "n Neo", "czrQN", "id-ID", "goo_c", "ary_u", "e-fon", "age", "laws", "milk-", "origi", "fullf", "iJGnE", "a-mec", "team_", "ence", "highs", "ehelp", "es-24", "stic ", "-game", "SGDPM", "ear v", "gqyLK", "nsbor", "xQLFs", "DuUfw", "UVMjC", "../se", "inces", "myKRH", "riya", "gold ", "logic", "all_f", "yle", "nico_", "duel_", "ple_t", "Time*", "ning", "*<nam", "utube", "al_ma", "ructo", "total", "n_bal", "VWgjl", "una_(", "rated", "k-log", "ncand", "ogo-m", "YICTC", "og:du", " URL.", "3D ru", "ිසිවක", "CnwVE", "santa", "_fami", "city", "JdhJJ", "nshot", "min'(", "GKCCl", "le_vu", "GBhyZ", "tikto", "ZFUrs", "llfBR", "headp", "t-lig", "xt.co", "<quer", "olor-", "atio", "XNKib", " of g", "159.h", "nukun", "ne-17", "5.htm", "si-su", "loboo", "ror !", "cynth", "uabhT", "kdZZw", "eyela", "-vf", "JOBit", "sciur", "y_clo", " a va", "ny wa", "nity", "ipple", "antas", "670.h", "impso", "_sect", "ri2", "n-tex", "teari", "er-ma", "ids", "pov_e", "⏱️ `𝗧𝗜", "_tran", "_ches", "bdl", "ect O", "dat_a", "fella", "carry", "rus", "t_sig", "eeth", "r.set", "69_po", "juice", "call", " onli", "punja", "on_rg", "azEvw", "pol", "ects-", "ainer", "nia", "lend ", "ct-13", "c-tex", "BqGvi", "xfrHx", "gym_l", "xt-95", "durat", " beac", "g_fem", "HiTyw", "lothe", "le_th", "airma", "eum", "gangb", "submi", "ese4", "HpBVy", "06.ht", "eless", "] pal", "itVlz", "491.h", "BIhsj", "big_e", "Gemst", "EFGUl", "c clo", "(.*?)", "feath", "h_por", "l win", "or_al", "enita", "twitt", "TcqbM", "cream", "d_han", "heeks", "n_pen", "?q=", "ademi", "er Ef", "WVxGh", "goggl", "axy s", "husky", "le gr", "ch Re", "-deco", "ne-10", "WqsYk", "evRxb", "hindi", "IvSdQ", "ide", "ours", "n_han", "beggi", "e Dra", "a_str", "Retro", "ozaiq", "boots", "dlLFw", "../pa", "e_sli", "h_(fi", "om]*", "baraz", "insta", "4:3", "ZSoIa", "shado", "ed_as", "h_gai", " > ul", "ent_p", "eye", "gem_(", "hed_t", "aZqTq", "Multi", "ts fr", "egs", "angry", "h_of_", "nMxHi", "kill_", "fbsd", "ttom", "fTQjp", " div:", "l_gen", "-gala", "h_clo", "fondl", "in-th", "qZJXD", "e a s", "n-gol", "audio", "y_qui", "jrSVh", "arms", "wZuyC", "elf", "mind_", "ture_", "o_shi", "_rape", "bbw", "DvcCX", "ia_pe", "{}.co", " Name", "XVcHo", "_(mar", "x-ray", "ed_bo", "cle_h", "uJqWT", "uous", "diffe", "p.met", "ng_we", "ant_s", "borat", "ye_cl", "XUnOp", "xt2.p", "_leg", "led", "a_on_", "ammal", "AElIY", "rAcuT", "rch t", "ine F", " on w", "usagi", "YufEH", " Link", "orc", "cow_p", "pWAte", "10.ht", "IeFQJ", "ct-on", "nsion", "scar", "und_h", "VslEc", "ter-t", "udyDb", "gBRKp", "cooki", "d_ban", "le Sa", "ikini", "-gree", "DWMCr", "pierc", "qyDhJ", "moon", "lVwmM", "mDlKO", "bunny", "take_", "nami_", "e-mas", "FpyHn", "horns", "ype\"]", "ortra", "angle", "Accep", "hWOsX", "ythol", "zoroa", "que-w", "headd", "starl", "ier", "FLbmo", "SxYyo", "y_tun", "over_", "catch", ".logo", "aster", " Tita", "syLTk", "wn_ar", "lying", "readU", "mmake", "\n*ASI", "or=wh", "hands", "abs", "braix", "roman", "qzkxq", "_vict", "m_hai", "ons", "gothi", "e you", "witch", "WfzRE", "𝐀𝐃𝐄𝐑`", "bodyp", "CcgBh", "wn_as", "tan_b", "i_bot", "KrEqY", "feet_", "labia", "_skir", "g-log", "ZdyxC", " 3d t", "farti", "e_ass", "cat", "yUJzT", "cake-", "Objec", "size_", "st_wa", "rubbi", "leg_u", "ay fo", "nium ", "1boy", "AEYKT", "Music", "new-3", "lTiDn", " tatt", "_art_", "ne fo", "tongu", "ass-o", "jFriw", "sxiGD", "etteg", "_is_m", "searc", "ting", " ligh", "seduc", "BMGAH", "_legs", "analy", "edit2", "BLHHA", "big_b", "_pene", "f Fam", "uOWPY", "g_pre", "ree-6", "assho", " me t", "e_v", "bicep", "youtu", "Choco", "DkpPR", "g Neo", "signa", "sfm", "tan_s", "Owwyk", "_titl", "deer", "readF", "_mark", "hQvCl", "hedge", " agai", "spots", ".verc", "xjIam", "atoro", "SxtPd", "-602.", "no_br", "mamma", "lumin", "hyuug", "𝙱𝚈 𝙰𝚂", "missi", "┉━⦁⦂⦁", "di ke", "below", "pink_", "SXsUp", "end", "ng ch", "gestu", "fba", "uilde", "nae", "PQvjM", "king_", "NVfCQ", "-279.", ".epho", "UrlHi", "ornam", "BpCyF", "se gi", "Team ", " link", "ituti", "cum_o", "812.h", "0.0.0", "Creat", "syIuB", "iv > ", "aint ", "hilda", "pov", "29.ht", "fJyYH", "kslnf", "man_(", "EIbSO", "jin", "ter m", "s lin", "e-met", "cglPo", "QmTCJ", "on_hu", "choke", "𝙳 𝙱𝚈 ", "*<Son", "t-72.", "Ysium", "oku", "terva", "zIosK", "d_pos", "cot L", "apply", "2555520SJfPlR", "ing-t", "subst", "ejacu", "e_(we", "helpl", "Work ", "blend", "ath", "one_e", "uscle", "ct)", "ard_e", "XHFZV", "om_sm", "etrat", "an: ", "cut-s", "outsi", "e-544", "nal_c", "bell_", "vYYua", "ital ", "besti", "𝐎𝐖𝐍𝐋𝐎", "ncess", "199.h", "ed_pa", "ights", "e_(ml", "SZKga", "link", "wHzsc", "lay_m", "foote", "earch", "mYpDa", "robot", "ofied", "ist)", "rease", "O DOW", "en-ca", "buttp", "alls", "ahdku", "w_ski", "sPMaJ", "104.h", "704.h", "ng_bu", "unlin", "-85.h", "Caper", "h onl", "UtjRw", "lackp", "pleat", "disga", "xIyqQ", "oYHrP", "sibli", "pbqMj", "ree-4", "pinki", "1:1", "u_ise", "VYfWN", "_sail", " wing", "leani", "tion", "MtYAl", "nervo", "heter", "pace-", "khpcN", "s cya", "vtube", "d_mou", "verti", "oad T", "whip", "VTmgo", "NWapU", "_juic", "on_al", "me wo", "aged_", "ne-70", "eg-in", "r_(ge", "males", "ed_ar", " Gala", "membe", "thero", "atomy", "e  na", "quest", "ouse", "e Gec", "echno", "frenc", "e_dom", "eulip", "fbhd", "heart", "lass-", "calib", "-up", "echan", "no_un", "liday", "MLJMC", "kirt", "Water", "each ", "𝙰  〽️Ｄ", "ltcsz", "wars", "ct-86", "hanic", "WebKi", "froms", ": \n┃\n", "f_evi", "frier", "e_out", "\"retu", "ext-e", "_scre", "hot_s", "HMjnE", "cumci", "n_hor", "fat_a", "OBsxJ", "er_gi", "sungl", "hair", "splat", "DPgCe", "r_roo", "HJIcd", "y_flu", "futas", "IozGE", "AltOh", "-impr", "MEura", "e-dow", "tanar", "side-", "_mari", "pod", "tenta", "wince", "pubes", " Beac", "d Red", "hub <", "heet", "files", "(rest", "than_", "*🔢 Re", "spy_x", "ers-o", "high_", "n_hai", "aft", "bVtsj", "t_fuc", "ISFAK", "e-rea", "metad", ".*?)'", "d 5", "tic_t", "OpGEn", "jeans", "motio", "ces_o", "t/537", "UwaOm", "bell2", "_on_f", "nopan", "ply b", "AZfvs", "greys", "_lift", "metro", "CtMDx", "logy ", "ricit", "Color", "iFFBW", "ethio", "drago", "ext e", "nude2", "e neo", "virgi", "-bulb", "midri", "backs", "yorha", "e-tel", "ise", "om le", "ma/ti", "e_pus", "tic_b", "_line", "UMcdV", "e pix", "dread", "glow_", "alk-o", "pinkg", "stone", "d_for", "on)", "gcHQW", "armwe", "re)", "://ns", "ng_li", "o-pla", "let", "MWIMQ", "piYxR", "GSZJZ", "ackgr", "THA M", "ling", "e-a-p", "𝐍𝐋𝐎𝐀𝐃", "bodyb", "mix", "*An e", "mlp)", "n-lig", "on-pa", "iti l", "uids", "'_fro", "AroVa", "dickg", "JhcnZ", "ass_b", "logo2", "_hips", "glCoW", "yes", "ares-", "e_spi", "-64.h", "amber", "-vcod", "olor", "legs", "param", "lodeo", "nt-fi", "_sour", "ve me", "elect", "swnzr", "ne-67", "eWTzq", "d_lip", "ptCha", "dXcDR", "The e", "rache", "hy te", "r_col", "mark-", "RepMW", "nOUjq", "GrvWW", "yle-t", "intak", "pring", "Handw", "ky-61", "efJed", "boom-", "iQkhX", "no_hu", "sitio", "sound", "_of_s", "ovide", "alpha", "RzpMc", "08474", "ZCXju", "AjBQX", "hyena", "_talk", "n-677", "iful-", "flCpy", "ood W", "verse", "ht-ef", "world", "_labi", "809.h", "saggi", "wavy_", "NgXhl", "c-vin", "assic", "ressi", "padSt", "Mojtf", "ode. ", "XVIDE", "kucyw", "estic", "-127.", "CEopj", "prett", "qAemS", "sugge", "ass_s", "blush", "DzGLp", "alloo", "pinup", "deo:t", "kimon", "less_", "NaLGZ", "bGxZk", "rip", "adult", "-laye", "igbo", "day_n", "orien", "-271.", "utana", "Ezdei", "night", "SXGOo", "n-ste", "red_d", "fur", "horne", "SsRhy", "oobs", "giftw", ".tikt", "llic ", "se_cl", "shot", "SaaWf", "stacy", "undre", "rSZWZ", "graph", "lingu", "iti-3", "DVJRi", "t-68.", "_of_t", "cter_", "Reali", "-668.", "ZjSJt", "d Que", "ing t", "blue-", "ZGHBW", "one T", "nothe", "linge", "scare", ":(*", "lls", "ko) C", "text ", "e dig", "non-h", "hard_", "SSilD", "bitin", "rule_", "nurl", "nya-m", "tape", "engli", "k-sty", "kneeh", "hmrlt", "reen ", "ant_m", "talki", "pseud", "nal-f", "xvide", "slave", "_foot", "_play", "deo:h", "infla", "alien", "red! ", "ezyak", "or_nu", "smegm", "re:ze", "nthro", "tan-s", "AhzHI", "artor", "el Gl", "lic", "xiao_", "e hot", "_stac", "stabl", "Big\\(", "_rema", "ki_na", "voir", "_shee", "handj", "focus", "tale_", "ratio", "3d_mo", "ng_fo", "_(mtf", "al_ju", "2girl", "rwby", "22447", "e Wat", "couch", "dialo", "cing", "DbnLz", "os/se", " div ", "_show", "gag", "hing", "1fema", "hy on", "tAtZd", "ures-", "ignat", "lowre", "𝙣` : ", "impac", "insid", "euse", "EiEpS", "loNLg", "affit", "uzuma", "twitc", "typog", "xy ba", "oHMWS", "pegas", "*?)'\\", "e-808", "ects ", "Fytji", "SgrwM", "turtl", "f-fam", "-quar", "_hat", "e-71.", "XfnHR", "korea", "_fur", "n\"]", "o-shi", "feUeZ", "our-c", "YBLis", "cheet", "ct-52", "t_pla", "camer", "son_g", "xy-on", "boob", "_jack", "fluen", "defea", "the_l", "lion", "e-in-", "cat_t", "ted_n", "nate_", "NRACe", "bic t", "ction", "KxvHt", "gs-28", "eye_p", "ing_s", "ails", "garde", "GqOxK", "mtf_t", "platt", "bble", "symbo", "toe", "used_", "wRcgP", "LWIQC", "l_ear", "deo:w", "mical", "lane", "large", "itle*", "ot-te", "ss_2k", "JjUIH", "src", "fanta", "bald", "ned_f", "ot te", "de_to", "knot", "EHfTk", "eyed", "blind", "sword", "wing ", "detai", "ckpin", "hoyov", "🔗 `𝗨𝗿", "hand_", "ed_ta", "@sl-c", "body_", "-skin", "borde", "ders", "pPDPJ", "hasbr", "BVoZd", "now 3", "sleep", "ebook", "fwRUM", "tn1 ", "i_col", "YaUkx", "vommu", "grass", "inval", "nside", ".pron", "profa", "sligh", "lifte", "ed_to", "easur", "s-219", "_high", "ed_ma", "catgi", "milf2", "alam", "ets", "sapph", "denim", "xLgch", "MghUQ", "OADER", "all", "_yaib", "_char", "n_leg", "leava", "cotto", "anim_", "r_wom", "on_he", "ality", "wUnKu", "t to ", "h-pig", "_to_p", "while", "tie2", "NsVPr", "ing_o", "conte", "NlmWI", "eatur", "QksTu", " Styl", "the_w", "big", "m_bre", "ass o", "ls fr", "ering", "manly", "thd", "aRYem", "le lo", "uGsFO", "Jxpap", "sofa", "neckw", "oftwa", "QvjpG", "ොහැකි", "e_pan", "diges", "07.ht", "make", "lKdlh", "oid_f", "r_and", "anal", "girls", "tie_b", "leaf", "oid_h", "five_", "ninja", "FIupH", "ritte", "i-pin", "er_an", "heels", "miss_", "le te", " in S", "vil_3", "Resul", "femin", "m/ima", "_(dc)", "nomic", ": *", "ne.co", "tmas_", "rows", "bite_", "ear", "nude_", "bodie", "anoid", "FGIof", "Print", "e.jso", "jWjnc", "\n\n◈==", "ree-o", "t_in_", "CKPIN", "/61Sv", "sky", "b/com", "ead_j", "ine-l", "a_2:_", "NYPYQ", "xQbsY", "jAlwy", "massi", "Eqbcp", "work)", "way", "facin", " Masc", "tter ", "e foo", "42.ht", "e the", "e Fre", "blizz", "w_man", "l gam", "fYCJO", "trans", "OOMiW", "e-ano", "sFPpA", "━┉━⦁⦂", "furgo", "e_tra", "e 3D ", "turis", "4boys", "murid", "dlxnx", "girlf", "-star", "gun", "clenc", "-183.", "r nam", "GQtzD", "#vide", "girl", "polis", "le_an", "txmVh", "1:col", "t_fig", "app/a", "nchWa", "gue", "cppMX", "leg_g", "strea", "alize", "ized", "stall", "tatus", "uMVCs", "boku_", "KkjGk", "CAUJb", "BqyUX", "RZBdd", "e-sun", "e_num", "ninte", "ext-5", "oiled", "ite", "amana", "jJFKd", "excit", "y tex", "_plea", "━┉━┉━", "succu", "deos.", " 3D t", "bad_e", "red_c", "one-t", "nt_se", "Lcmlz", "penet", "rtwor", "model", "crash", "on_ss", "by ΓÇ", "Make ", "lass ", "nxx v", "dog", "e_ent", "sible", "oor", "zooph", "ur-na", "opper", "ming", "each-", "gethe", "D MOD", "_und_", "(one_", "ssy s", "l_pri", "petit", "rs-81", "pherd", "tic_p", "t-341", "mment", "gryph", "MRvFy", "ts on", "swimw", "ncap", "fucki", "query", "zFmGZ", "al_gi", "asy_v", "d_tai", "cape", "ured", "milki", "sport", "/?sto", "hones", "dildo", "_pers", "d_mal", "valid", "flora", "mask", "scat", "hone ", "FbZEW", "k_on_", "sh_te", "xt-ef", "SIXgb", "nium-", "aker-", "ple_p", "yubMs", "ship", "SRSIQ", "umano", "TUNwZ", "VMYKp", "zaTbG", "ball_", "_thig", "ViFTd", "ting-", "procy", "QyUux", "pair", "ease ", "lagom", "ykRxI", "ped", "cpFKq", "r_in_", "ine L", "ges/I", "pixar", "ated", "ism", "accpE", "okemo", "love", "duce ", "cum_e", "tWEDl", "id 10", "FSJhI", "fCZCO", "strip", "d 3", "mEnBi", "_gumb", "snout", "ine-3", "vil_2", "qAhUE", "a_(ch", "2014", "herma", "_uplo", "tic t", "bAILi", "oggin", "ulati", "ud te", "ridin", "oad t", "carto", "ook", "-oh!", "chain", "CflxU", "vskIe", "e a 3", "ome-t", "ureth", "prima", "xJbcg", "axy-w", "xqEyJ", "IzFTo", "ser-d", "WgKLs", "henta", "e_dil", "xUKjU", "ng_pr", "uffs", "elest", "ambig", "on_an", "eEptD", "b/fun", "m_wra", "eatin", "_outl", "_ring", "tring", "qPnTe", "e 15", "whRVi", "iness", "2022", "ect-1", "(mlp)", "open_", "ma ", "INK s", "sex_p", "Graff", "QGMmf", "00:00", "jAwmC", "0 (Li", "reen_", " lett", "ty_fa", "://en", "versi", "ords/", "BYasR", "ct-27", "rativ", "ocks", "eg_up", "xmlMo", "CXTyE", "7.htm", "mbroi", "er-go", "-free", "n-3d-", "api-d", "plasm", "buttj", "frien", "-63.h", "nt=on", "pants", "bsKiP", "GxuQq", "_glas", "n_req", "a sea", "gMxWc", "ord-g", "r_fuc", "funct", "\n🫣 *P", "yorub", "kiss_", "ait", "eyeli", "llia", "info", "_claw", "jjflT", "non-w", "tank_", "boss)", "RhDqT", "ally_", "set l", "cot s", "latin", "headw", "irehe", "(fran", "oot2", "input", "tem", "enshi", "croco", "pupil", "ne-42", "euro", "e Mas", "xRGXN", "&suba", "Type", "CPJKR", "RPfjh", "eDvJd", "fect", "smug_", "rim", "hrees", "-graf", "funki", "zapi.", "3:4", "aint-", "zTEVV", "an_30", "cunni", "an_se", "SbQpk", "io fi", "ainme", "urce", "ese12", "kasum", "yglFd", "ïΓÇïs", "HDDSO", "aur", "cyril", "e uni", "ai_as", "tyle ", "cellp", "../li", "ligat", "mahou", "l_fou", "space", "BFeRN", "the_o", "fit_f", "ant", "snow_", "stick", "HvHXS", "span.", "orns", "the-e", "my_he", "h_bub", "ker-e", "build", "-621.", " logo", "n't f", "text", "weddi", "_shea", "n_ass", "fundo", "t_log", "-3d-2", "veiny", "solo", "ed_ha", "DYYvQ", "VIlZp", "kSync", "_red", "micro", "ne-33", "t fir", "kcilb", "Nzggi", "writi", "mber>", "h tex", "QXgQf", "rubbe", "post-", "sfw.c", "commi", "upski", "MKCIl", "alley", "goth_", "275008VJORRk", "2010", "rward", "YMhaL", "𝙷𝙰  〽️", "-neon", "y_chi", "and_t", "euro2", ".xvdo", "t by ", " deco", "nctio", "_size", "_nipp", "ye_co", "ecs", "uncut", "pic2", "dpfra", "all_c", "lan", "serve", "-lett", "_peek", "erell", "ht-te", "-343.", "GSZLA", "gente", "sex/f", "uxury", "*[Res", "e_pen", "owing", "rswap", "05.ht", "nBJEq", "rotch", "MCYJn", "r wit", "KZsZp", "ada_w", "obe_m", "e_run", "ple_g", "attac", "log", "eCBcC", "=0.9,", "naTXe", "befor", "mYbIQ", "rat", "_peni", "se pr", "*Need", "hourg", "iSHMZ", "n_sel", "top-d", "alico", "qXQVl", "n_rap", "doka_", "ters", "perin", "ine", "gener", "bedro", "_areo", "l_uni", "WQSus", "r !!*", "moust", "60.ht", "matur", "ts-in", "tage ", "ver", "ust_c", "ows", "ots-l", "tortu", "ktok-", "ochak", "each", "os/do", "NLOAD", "_elf", "resol", "taur", "fishn", "rosa_", "dZLye", "e_but", "e Tex", "com/a", "back_", "jcfkC", "tive", "ogram", "et-gl", "rimjo", "vfLQd", "comme", "all_s", "grand", "n_sto", "pie", "mod", "mob_f", "ed_fu", "al_se", "teach", "11.ht", "main", "ng_he", "wides", "_brow", "al_ha", "Hylwa", "ure-o", "VWVFM", "on.co", "ashi", "r FPS", "ben_1", "8.htm", "bed_s", "QqDmY", "roo", "visor", " numb", "_chok", "su_no", "JrCaU", "QRZQZ", "ulett", "injus", "n_(sp", "hocol", "QVBFS", "mmer_", "-mini", "tic_a", "blurr", "cutaw", "code", "ear_r", "egut", "RVWaU", "y_but", "le-te", "_cens", "dXUSy", "XwxSU", "hime_", "_nose", "BrLXm", "ages-", "d_pen", "wfQNf", "_gap", "_skin", " mini", "bPmqZ", "-vsyn", "mtiTO", "69.ht", "re-in", "emYZY", "fcyba", "t_dif", "Gold ", "t_and", "cles", "parkl", "rom p", "ful-t", "UrRle", "skin_", "rhizo", "overf", "AUIhp", "e_gen", "nudit", "red_b", "orals", "led_b", "kohrB", "d_con", "spitz", "-flag", "thrus", "_son", "aoegO", "x-tex", "bra_l", "r-cut", "UfeeW", "een_b", "toned", "breat", "jqJYg", "fTQuj", "POwWc", "sults", "CuOka", "book", "om_ey", "tale", "r_str", "dinos", "leade", "free ", "oast", "cum", "e a p", "see-t", "anthr", "d_but", "lver-", "en_ey", "YAHkA", "lva", "_poke", "weigh", "broad", "armpi", "gagge", "tlab.", "2023", "XqIfu", "fbhd ", "mpeg", "594.h", "JJfOp", "ring", "xnxxd", "o shi", "rd-av", "rSBDp", "rcel.", "on_bw", "kissi", "licki", "ecko", "trati", "holid", "xt-on", "ion", "wnLdz", "pawg", "lated", "juri_", "ord e", "s-wit", "pavEl", "oat", "ight_", "tn2", "oden-", "restr", "batht", "cted_", "2015", "loona", "stree", "tatto", "JRBab", "WUSBI", "yoYZU", "ri_un", "_of_f", "jean-", "showi", "uppor", "stray", "datad", "va_bo", "VoGCz", "cummi", "stuck", "freck", " brus", "rap", "OdlNE", "awing", "QYXqR", "weste", "on_(g", "_last", "ant_f", "AmXcH", "_faun", "-the-", "r-wor", "desc", "_3_po", "ecies", "xian", "recor", "la_ki", "w_hai", "fiti-", "oo ef", "n_sho", "ood-w", "d onl", "12.ht", "e Eff", "ect, ", "occur", "_cum", "on Gl", " > di", "t-117", "whisk", "t-658", "secon", "_posi", "ssing", "ild", "warcr", "y_mal", "wwBQP", "lkhWA", "nd_ba", "Onlin", "a tex", "allig", "bejnn", "statu", "-leav", "princ", "ife", "tear", "LYzQq", "free-", "amput", "_nake", "tsu", "k dow", "ainsa", "ng te", "gVRsu", "vAEqi", "lic4", "longe", "m_fac", "oys", "DfkkT", "panth", "e_mal", "are", "o-gam", "XfMII", "m-log", "hind", "smoth", "LMcxZ", "death", "` QUA", "ulb o", "් සොය", "glowi", "blood", "on_dp", "_chai", "2020", "_dom_", "candy", "in 1 ", "3d-sa", "WhvAO", "KRzRY", "red_f", "zombi", "offic", "n neo", "fake_", "shuku", "n-the", "kobol", "a_tra", "squis", "arm_g", "g_anu", "likes", "ass_v", "sturb", "_requ", "capti", "sucki", "zTtIb", "wvOqG", "lid p", "chine", "pelvi", "el.ap", "3_toe", "rune", "hood", "heade", "muTTf", "-team", "nakad", "-shap", "m_bel", "FaPFg", "> div", "-468.", "anime", "IlvBb", "o_(cl", "aves", "media", "tpvyF", "hatsu", "\n   `", "overe", "_[Res", "_pawp", "t_gra", "ised_", "lp)", "ual_y", "pLcYy", "circl", "snake", "x.com", "08.ht", "scott", "lly_m", "shade", "_mout", "air", "jtMJz", "armen", "rged", "wbqlH", "e-san", "n_ute", "showe", "ained", "e_bun", "_fluf", "no_he", "76.ht", "felis", "VLhnx", "ine 1", "ge: `", "ng_up", "_weap", "p.net", "ble-e", "aerit", "curva", "with_", "ve Me", "pirat", "halo", "entat", "docum", "fallo", "TYOqP", "e-neo", "prASI", "SdFrR", "e sun", "ect f", "t-122", "wet_p", "orang", "elbow", "pffqI", "domin", "stive", "(meta", "ent", "reque", "gger_", "LCCgS", "er/ff", "sniff", "jjpVY", "_hole", "pecie", "unret", "358.h", "ConVs", "seque", "flowe", "_nail", "dress", "ine f", "nts", "ng_ma", "e a S", "narut", "dhXVB", "arrow", "spiri", "utout", "plush", "oEAoz", "woRgV", "-name", "gAjii", "ard", "vIudZ", "diamo", "_2b", "or-ho", "_aran", "rface", "PPXDY", "en-fl", "headb", "pixel", "long", "ing-o", "nsert", "t-shi", "raven", "gQwmp", "DoETj", "pregn", "ales", "_seka", "batma", "rcing", "WXnaR", "m:_th", "anari", "douji", "bear", "ide_u", "gzbKC", "blep", "d_clo", "tYrjx", "talia", "sis", "al_in", "strad", "self", "non_t", "ronic", "ent_a", "ing_b", "curvy", "d_ski", "georg", "er Go", "nveLP", "sheep", "f [p]", "darks", "otter", "DfCfb", "souso", ":-1:-", "* - ", "bovin", "nters", "e-hot", "://ip", "Gloss", "e_onl", "xPxWp", "son", "FryJc", "lizer", "defau", "taima", "worri", "/anim", "toile", "rn th", "ing_h", "Uxlcz", "obese", "sin s", "alk o", "Amwkv", "_in_p", "red_s", "kdeNe", "lVWit", "LHoje", "LACKP", "rch", "2012", "big_c", "*Erro", "chron", "d_cro", "qjXWW", "plit ", "arms_", "aut-s", "om_be", "hilia", "EMGKK", "gling", "TngdL", "-meta", "tokyo", "e-295", "rks", "bike_", "𝙰𝚂𝙸𝚃𝙷", "drink", "nline", ":nth-", "yu-gi", "Faibj", "bgcol", "zyihX", "alcoh", "CPkVD", "div.n", "hungr", "ollar", "hday-", "blond", "arous", "77.ht", "pasti", "jo_ma", "shoul", "garte", " laye", "feet", "ts in", "Funny", "34MEdaTB", "hroug", "sEUuF", " Graf", "ZQWKl", "ne-60", "nt_lo", "RsUHj", "𝗨𝗥𝗟` ", "r/pir", "jukeb", "eroin", "t-171", "ia_(p", "plap", "ite:_", "ns2", "m]*", "rgbOH", "...*", "manga", "sweat", "armer", "chast", "OquSL", "pial", "ve_bu", "s onl", "eme-3", "lolli", "back", " Cut ", "ailur", "ranso", "fwkyB", "HzpPC", "_of_z", "n_30_", "e a r", "t-273", "onzhk", "les_u", "uit", "husba", "er-te", "alett", "stock", "s_aro", "_cap", "repub", "close", "harac", "tWSwK", "wmpla", "s-817", "t-Lan", "n_gir", "gilf", "vVGeo", "u2000", "_pov", "x Tex", "o_on_", "hone", "listi", "nment", "redhe", "ssdl ", "iti  ", "ts-23", "Jndwo", "thai2", "WTzyh", "locks", "femsu", "noel-", "ies)", "crouc", "duce-", "mephi", "semi-", "arm_u", "jWqHn", "love_", "DxXhy", "vibra", "\\( *\\", "comic", "hile_", "gif", "AnzZp", "the_i", " 🔞\n  ", "nce", "GRmkm", "swall", "g_mal", "nstru", "mothe", "lass_", "sprin", "slush", "VlmxA", "ive", "xTYOG", "0-9a-", "h-imp", "KATHu", "Road ", "e-580", "e-eff", "2020s", "-styl", "der_c", "ne-80", "toFor", "d-shi", "gator", "nder_", "some", "d_ass", "key", "rolli", "_fant", "l_nud", "Magic", "EJtqn", "ye_ob", "sive_", "insig", "q=0.7", "acces", "fredd", "othes", "IjUJk", "shack", "oden ", "fects", "Makin", "tifa_", "fate_", "ILFiY", "hoodi", "bronc", "touho", "le_nu", "atrix", "le-lo", "onal", "group", "bendi", " !!\n\n", "sored", "DUSiP", "ine-4", "hODXe", "ome T", "<xnxx", "torie", "erezN", " flag", "DER`*", "ead", "HNokB", "nami", "musk_", "e-a-w", "_(pok", "d_nud", "sive ", "cow_h", "littl", "VklbH", "ksxyU", "u_no_", "-brus", "📼 No-", ".mp4", "_tuft", "indie", "fat", "ly_co", "drunk", "Free ", "dead_", "live!", "ine 3", "Nuptv", "sylve", "ack", "apple", "ye_de", "n_fee", "holol", "snow ", "d/v5?", "deity", "_minu", "lesbi", "el-gl", "FZAjG", "worsh", "hangi", "ro_ka", "uzpMJ", "swims", "smile", "spend", "daGXt", "ia_(a", "/raw/", "HgeYy", "aker", "ACKZV", "nload", "yuri", "opod", "FqFrc", "_clov", "ine-5", "topoe", "strug", "e-imp", "(seri", "mVYrf", "fusio", "paid_", "e-687", "toes", "andy", "🚩 *Er", "ZJDSU", "n.eu.", "/phdl", "x_gam", "Bmygz", "matin", "er_(s", "in_im", "cnggz", "DuKNe", "tfKGs", "mytho", "ame >", "derwa", "ral", "sonic", "HiYdE", "XfpeT", "ng_pu", "tenny", "QQAKR", "hairb", "goate", "RoboW", "barel", "subar", "hylia", " meta", "side_", "TbBUg", "jUKCA", "d-3-2", "ply.j", "en-US", "puffy", "veil", "nds", "zTYQV", "vein", "tAIWZ", "iffer", "Bokeh", "dota_", "ile_p", "eTVdM", "dsrbG", "e_org", "47.ht", "down ", "feral", "8,en;", "ge_fu", "Dkxub", "y_cur", "2d_ar", "ct-fu", "prone", "Axlks", "rans", "telug", "LEfAd", "dilf", "teapD", "herm", " sign", "MxvAp", "screa", "abWwt", "light", "ings", "ctile", "NDUpI", "nifor", "LaMJI", "dumpt", "mediu", "mwear", "eyewe", "a mec", " BIG", "broke", "al st", "overw", "fox", "/ph?q", " NSFW", "aUhLc", "vgiOr", "ced g", "hake", "gensh", "WZEHm", "w_fur", "mic", "Light", "fille", "sHwrv", "ist", "g-neo", "d_hum", "obile", "t-to-", "[p] p", "ra_ha", "ia 3D", "peace", "g_on_", "e_twe", "thes", "ils", "k-dow", "hoop_", "VruKr", "LCEdp", "prond", "bounc", "Url\\(", "rie", "ct-32", "outh", "shoun", " get ", "d_dra", "muuTC", "ny me", "a_dri", "uqBnx", "high-", "upsid", "nal F", "qZlHr", "3D Te", "; [b]", "mole_", "nne_m", "e_hai", "quote", "pikac", "d-61.", "e try", "line_", "e/fem", "bdsm", "colla", "ocWuH", "rder", "lic-t", "er_bo", "oftwo", "awlvG", "4girl", "allpa", "YxKGf", "her", "ndrag", "ocus", "e a g", "_(sur", "art-e", "lucar", "Writi", "tic e", ".pire", "bThhA", "pokep", "ed_fe", "neon-", "d-red", "ernam", "la/5.", "ranna", "🔞\n\n  ", "*❌ Pl", "wYcDO", "bone", "mpdzn", "TUchB", "1917-", "_legw", " foun", "mia", "ixgkO", "_dram", "OqKNQ", "lag-t", "QhFYq", "butto", "grabb", "es_pu", "food2", "invas", "vOljv", "narro", "frown", "child", "ADER*", "a_sli", "span", "ve_th", "3D wo", "r-nam", "PKkfP", "ileSy", " & ", "t-58.", " Effe", "ckage", "wcjde", "ers o", "bovid", "TEVgR", "et_st", "XX Se", "Woode", "HvOSU", "ots L", "ned_m", "cute", "-589.", "mark", "ujTsV", "raphy", "mXTpC", "ics", "brain", "per", "panze", "ss_zo", "sheat", "ierci", "(320,", "g Tex", "PUixW", "m_her", "tyle", "form", "big_m", "MKfMY", "Narut", "ilver", "ar_on", "vISDQ", "e-onl", ".html", "ht-20", "ාගත න", "ize", "tter-", "i-tex", "l_bar", "_effe", "not_f", " Onli", "i.tik", "on-cl", "BKVPo", "melee", "\n• *T", "ure  ", "iece_", "nICib", "slit_", "c_nud", "emon)", "ine: ", "solo_", "MNFSO", "bra2", "e JOK", "gwen_", "nPOhM", "🎟️ Wit", "ect o", "SJCMe", "Andro", "h and", "n1.co", "ent_e", "ead_m", "outer", "XOIWm", "ld_of", "ugly_", "ent_b", "ntlet", "ny-me", "scrol", "growt", "e_pla", "rewor", "cJSbs", "AIPTv", "apon", "rscho", "_ear_", "big_p", "opDiY", "s_at_", "o mak", "throb", "─────", "ed_ea", "frOdZ", "HLCRg", "cowgi", "mrfro", "ng_at", "aGVcv", "ode-l", "candl", "HOhPm", "ibbon", "ockin", "amy_r", "t_req", "kunoi", "range", "er-fo", "glish", "15.ht", ":_vil", "ne_nu", "d_bac", "bat_w", "ncy_c", "ct-17", "on_xy", "rom l", "oral_", "ail", "hter_", "intro", "mjIGJ", "alias", "mon)", " autu", "twins", "mastu", "kimet", "c_sle", "ight-", "ncred", "hblfH", "eFNGW", "head", "text_", "FeGxH", "ahoge", "nythi", "_slee", "hed_s", " Mobi", "_and_", "pool", "sATqV", "PRONH", "gunda", "/es/s", "Angel", "e_fac", "TNxVO", "_pier", "-hot-", "_ball", "3d-li", "ercin", "on_be", "dlIMk", "_test", "tree", "gger", "bow", "uMMFg", "fYKbh", "xWGPs", "balls", "EqBLg", "ee-67", "on-gl", "nshi", "2024", "3boys", "dipst", "tic_m", "i tex", "ng_ni", "23880", "iGIIn", "lar_t", "e a l", "ionab", "blaze", "BAZvD", "xenob", "error", "cal_v", "Dkuqv", "─╯\n\n⦁", "dated", "nsfw", "t_gir", "on te", "ddres", "BYnLr", "polic", "umber", "lVJLW", "dMVpL", "y_bod", "libwe", "arch?", "ypogr", " game", "eels", "QxKAz", "e_rin", "taken", "ity_d", "_anth", "_out", "aKSol", "bowse", "zebra", "its", "tripl", "premi", "ankha", "and_v", "roden", "ready", "jacka", "salah", "ouses", "low e", "idolm", "the-s", "urry", "ZskeN", "e_dif", "sex_s", "oma", "morph", "_trib", "d-eff", "valen", "video", ". Usa", "macro", "xt on", "cle_p", "corru", "text2", "arm_w", "wear", "anal_", "HcrZc", "guro", "veins", "uit2", "wareh", "_fema", "y_bal", "tUhyc", "uFmoF", "tGAlm", "fenne", "i_top", "fbsd ", "IOfNb", "kai_s", "JnAtG", "jhxLk", "cum_d", "MXsvI", "t_pre", "-rain", "zoMHH", "r-fre", "JTIDO", "_but_", "low-a", "ies", "YIyAH", "ght_p", "ngres", "oy_bu", "ocean", "ddCom", "t on ", "on_bo", "TjntZ", "┉━┉━┉", "iqwcj", "line", "i_nam", "ese2", "bUEml", "gxwXx", "=sear", "king)", "oad_u", "eader", "royal", "partn", "sAZxC", "heigh", "shy", "1.com", "UOcgC", "ance", "e_gir", "IzIBk", "_5_po", "y_mar", "schoo", "ad_by", "sPxdI", "nom.v", "amese", "-db/-", "-make", "fat_m", "layin", "n_mal", "SGyoI", "angel", "wnloa", "frida", "MVcZR", "e-uni", "aps", "*No r", "ng_ph", "out", "liter", "𝙸𝚃𝙷𝙰 ", "ature", "civit", "hers", "_7_po", "es_ar", "af-au", "sts", "kneel", "omach", "\n\n\n*㋛", "-100.", "se Gi", "go-48", "YiawZ", "e_vic", "GJISB", "washi", "Messa", "one_b", ":05", "bubbl", "n gol", "VbDoc", "DPMnq", "tain", "late ", "://me", "Drago", "impre", " On H", "hjvZs", "suspe", "matio", "_pull", " prov", "ryhum", ".jsx-", "mcise", "4.htm", "og:vi", "lle_(", "al-st", "ext -", " 𝙿𝙾𝚆𝙴", "sperm", "cake", "tyle-", "own", "sWith", "logo-", "r-onl", "il_po", "_of_w", "m xvi", "dilia", "des", "Chris", "rs' s", "acebo", "latex", "daddy", "ral_d", "e-cut", "TcGLU", "XTNKK", "gore", "toony", "_page", "cat_e", "cat_g", "dBDuw", "ender", "loinc", "rning", "TItlC", "wDoFA", "and S", "glace", "ple_m", "e-gal", "GuPTM", ".com]", "sterl", "VAoeB", "provi", "e>*", "lia", "bLcGW", "vil", "y-tex", "chara", "raft", "_sele", "absur", "-birt", "olpNM", "e BLA", "-725.", "Slide", "r_fut", "aEVpW", "ive_j", "flutt", " gold", "rando", "serti", "o_hai", "oad", "e a B", "art e", "conve", "AOkfM", "artne", "next_", "e a w", "vatar", "e-15-", "sh_(m", "nglis", "towel", "_daug", "slice", "l_rot", "bHHzN", "tinte", "nny", "D shi", "e sky", "ree-5", "the-b", "lRSlM", "AGkNI", "patre", "xbfxi", "godde", "bQoBG", "n_ton", "deos", "uzzKs", "soul_", "UAuZd", "rcLLi", "ween", "tRfQv", "fffff", "wpRCU", "halo_", "MZRtv", "fari/", "venus", "dyzwJ", "png", "sissy", "ted_h", "xt > ", "BNUM/", "ect-2", "tight", "drop", "eroge", "age_c", "LVjJi", "_from", "orgas", "AesDX", "ing_l", "ATPmw", "3d-te", "uWlZz", "_shor", "rom e", "QqWcE", "wYhlF", "ts_ou", "3d-ru", "SSMEL", "ect -", "ate-1", "nxx.c", "ess_c", "al_dr", "n_mou", "y_cha", "futad", "on_fl", "D XVI", "nd-te", "fours", "807.h", "e_for", "chair", "ced-g", "t_siz", "r_fem", "dQPnw", "ers", "hubby", "gigan", "_figu", "give ", "cts-1", "name-", "zQvIW", "rty=\"", "fold", "6.htm", "red_p", "devil", "two_s", "y's_2", "HOVcS", "4_toe", "n_pus", "aydCp", "-acco", "big_l", "6+gir", "n_bre", "leDrP", "e log", "uploa", "t-158", "zjOWU", "sweet", "_(ser", "16:9", "tail", "ight", " Make", "ork", "wl_ho", "kemon", "html", "ful-g", "Views", "nail", "camel", "AlRKY", "nurse", "none", "a_har", ".0, s", "auFbb", "monke", "ewel", "lar_a", "unsee", "ng_ri", "https", "aLvzu", "ree o", "ntr", "thai", "ersha", "e-a-g", "uizwC", "l_pie", "ashii", "palco", "ggmuv", "pull", "horny", "HWzeI", "vPXxE", "messy", "ne-15", "d wri", "eries", "_grab", "Hqvah", "e_bac", "itch ", "_hold", "braid", "g-ava", "RQthS", "ertai", "en=re", "YjDbC", "e_sex", "afKFs", "ype", "w eff", "_ass", "ker a", "utNuu", "16.ht", "fZoQR", "es_do", "mfgGy", "flexi", "on_br", "ync", "tone ", "makim", "JTFtj", "ick_o", "3d-cu", "vXOlw", "://ap", "ity", "l-sha", "rince", "xpSDs", "anji", "pFJzx", "QCjmt", "e-a-s", "ory:_", "s and", "ClMXS", "samus", "xHQwp", "uQrzS", "ltern", "penis", "cospl", "platf", "arthr", "B Sea", "serie", "atus-", "throu", "room", "el-te", "data", "hybri", "idzph", "wNQZV", "-glas", "t in ", "ufNTc", "_whit", "nIUlq", "yFIQM", "su_ka", "t_hai", "prost", "nis", "gon_m", "d-pur", "stack", "heel_", "ai_ge", "t_bul", "ringt", "ite@0", "MPnwK", "phara", "eakin", "PbavQ", "hroat", "KoXdM", "fgVCW", "bottl", "croft", "ne_mi", "ari_p", "snk", "hug2", "vEpRd", "slit", "EAHPO", "sand", "doki_", "HDJMG", "panty", "BVfwR", "unkno", "leeve", "e-fre", "_fit", "kono_", "arkle", "jPeSU", "NxNGU", "greek", "arm_s", "leave", "areol", "ne-fo", "ng_wh", "pinne", "uYrBO", "nytai", "_part", "dark-", "lydow", "qQUSx", "w\\('(", "foreh", "ntert", "EYhDS", "ottom", "mmUHC", "KvAFM", "helme", "Zombi", "lic3", "ider", "dery ", "curve", "ogo M", "kanta", "R !!*", "sed", "mata", "ear_p", "s_ope", "choco", "jAdIO", "en fl", "yECUa", "XWwBi", "aside", "Aheqx", "cHMYB", "dakim", "ol_su", "ont", "funny", "petal", "🪫 `SD", "ovum", "marki", "BkznA", "lag t", "sprea", "se_su", "hine", "pper", "flopp", "ershy", "ese6", "downl", "wed_e", "n 3D ", "shock", "DuctA", "ese", "casua", "headg", "m_fat", "enjoy", "spoke", "YERSh", "nshin", "star_", "genit", "na_5", "nal", "reatu", "crop_", "null", "e-wat", "le: 9", "pools", "ses", "cLqTy", "east", "no_pa", "one_h", "trait", "rding", "-106.", "ish", "y's:_", "lRufs", "alaxy", "chun-", "RLfcY", "y san", "NQALi", "fFhmm", "rn_cl", "ring2", "ick", "aOsgD", "glows", "breas", "facel", "ticol", "invit", "FlVeb", "cSTZs", "mcmEF", "-285.", "dhxDi", "ksARd", "sunse", "ind", "𝙜𝙞𝙤𝙣`", "avQzp", "expos", "wtrmI", "bian", "teasi", "gemst", "bsite", "ne-le", "ulb-6", "t_typ", "ift", "bqXdc", "Thund", "ber`*", "ine_m", "andro", "enJYc", "ital-", "anili", "logo", "e-a-3", "doggy", "eral", "FsXgs", "ZJLpO", "ZfYLM", "blowj", "RkYOu", "gay", "deep_", "iphon", "FGuSm", "EfGCm", "squar", "rwear", "lucen", "cts-o", "ider-", "IbKJS", "cumsh", "://gl", "ed_ni", "\n\n• *", "innie", "al_pi", " Sear", "Jewel", "eyebr", "wear_", "bulma", "ge-co", "orce_", "pronh", "on_ne", " name", "panti", "e tex", ".app", "condo", "Text", "y Tre", "futa", "cap", "ng_ha", "stars", "arabi", "broth", "eeze", "ored ", "megam", "yor_f", "anus", "dirty", "LQfKY", "_ears", "cheat", "EHPis", "hex_m", "ponyt", "_bone", "NlPnM", "n_fac", "euro4", "beat", "man", "recli", "ghter", " in s", "ghZOC", "jacke", "erm!", "bara", "low-e", "_suit", "_eye", "canon", "ent_r", "kGWgM", "aut S", "110.h", "on_rs", ")'\\);", "hofiu", "multi", "neckt", "◈ 𝐓𝐈𝐊", "ew-25", "@ffmp", "_puss", "ssy-s", "rouKD", "short", "nwdKk", "e_and", "shaki", "er_th", "of_fi", "hypno", "mouth", "were", "vFSgN", "WNxgx", "point", " LOGO", "RInWu", "g-tex", "unifo", "n_low", "y_pri", "raide", "e_eni", "_orga", "natur", "dkiQt", "mans", "r_ant", "-on-v", " DOWN", "orbit", "reply", "iXpMf", "RKXit", "sZdNI", "3D si", "WBQuv", "vampi", "_anal", "h-mul", "nsNgY", "r_tha", "hairc", "after", "dvJTl", "act_b", "pHiaR", "al_ou", "spide", "BXHBg", "rrect", "nux; ", "niger", "iftua", "es_as", "mages", "eQqmw", "pubic", "robin", "tummy", "ertio", "iNJYw", "plain", "on-on", "YJpAs", "decry", "_star", "iktok", "er_ra", "onate", "iKOEh", "x-men", "to360", "chibi", "go ga", "bimbo", "e-a-c", "ta ", "jScPZ", "rboar", "r cut", "Arrow", "lamp", "HCLRl", "gay_a", "green", "squat", "HBLoD", "_url", "_(col", "lder_", "d-30.", "conta", "humor", "_chil", "t pro", "times", "xpdDz", "dship", "fortn", "culat", "cXokh", "_demo", "koika", "Fhess", "oad x", "sIrQx", "❄️ `𝙍𝙚", "al_av", "armor", "o sea", "imati", "KPwzl", "ing_p", "genes", "inter", "looki", "r_bar", " blac", "ine t", "tomb_", "spair", "peek", "aBktj", "nose", "alWhB", "tgSjp", "mohaw", "drill", "-in-s", "fVAtb", "bNLPr", "peein", "5girl", "bisho", "ring_", "ture-", "2futa", "ork-e", "e-dra", "fLxIy", "s-cya", "novel", "zephy", "pPfOH", "606.h", "t_bac", "ent t", "MwwOV", "e Bla", "fate/", "prope", "get", "KDNMh", "Chrom", "\\+\\+ ", "_acte", "ffm_t", "ects", "n (fu", "marve", "lJarz", "ograp", "ijfAY", "146.h", "ostum", "FPVRD", "on th", "base ", "widow", "mmone", "hung_", "sFZYN", "fect-", "e_of_", "lecti", "teamw", " the ", "maki", "mium/", "rless", "leota", "_on_h", "SdCfx", " on v", "-tatt", "Purpl", "tremb", "hunti", "aQVyT", "caper", "ICDok", "y_ear", "-ss", "om xv", "-on-c", "tomac", "-barb", "over", "two-t", "ointy", "on_sm", "or_se", "bat", "scot-", "_cell", "e blu", ",id;q", " graf", "go fr", "Cloud", "skin", "scali", "talke", "d_wea", "oCIbj", "e-ava", "_feat", "ssass", "ese_t", "h_pen", "piece", " with", "e-tex", "cut s", "goodb", "side", "boobj", "ate_a", "unzip", "-arro", "logy-", "earth", "RssHo", "faceb", "monst", "zkAOT", "elf_f", "Effec", "Xsdua", "2016", "c Onl", "2.0.0", "isen", "13.ht", "arcra", "GrGzd", "tice_", "xbbb ", "per_p", "walki", "knott", "ped_p", "ine-9", "hopps", "-3d-p", "592867BqJtzn", "_tip", "dity", "3girl", "wings", " url ", "ittin", "ian", "e_nip", "saliv", "DOWNL", "sharp", "RigoQ", "2d_(a", "atar", "pokém", "inati", "anus_", "html5", "leagu", "glans", "flacc", "cock", "retra", "HTywi", "beard", "wYcFu", "rape", "nerat", "JfWbJ", "condi", "antle", "scale", "IS TO", "nMumN", "view", "male_", "prese", "ZQEHz", "_up", "on_hi", "rk)", "vagin", "..! 🖊️", " impr", "ole", "atar-", "leath", "groin", "pLhjw", "*\n\n  ", "etely", "il-ba", "sNWPo", "selfc", "delta", "t_gai", "-effe", "mega_", "rl2", "on_th", " team", "an_(s", "dunge", "ruck_", "handw", "hunt", "loud-", "Snake", "⦂⦁*━┉", "maid_", "LOAD ", "ext 5", "XtgBm", "ORQlV", "ppude", "logy", "cloth", "aiDEV", "activ", "ia_(m", "nText", "al-bo", "oid_p", "nun", "stude", "xvdl", "535.h", "cock_", "ed_le", "-cut-", "pqEig", "EBOoQ", "MLEpH", "thin_", "stron", "happy", "ojtJc", "ber", "lae", "ful-b", "ing_t", "tusks", "rasse", "2d_an", "image", "xposu", "force", "er_us", "ess_d", "e-the", "brace", "Url16", "fXwkH", "count", "style", "ohryu", "ker e", "g_vie", "Desli", "cervi", "gxNzb", "skull", "ly_nu", "e_mas", "m, lo", "waist", "cumfl", "webco", "tombo", "with ", "gem", "2548074UPMNFF", "YwwqA", "zQfad", "hzhqM", "ening", "jocks", "n-neo", "BXSjn", "ht_fu", "r_ski", "iliat", "canin", "jSlLy", "ESLPK", "gay_s", "t-353", "ofFhB", "pades", "_sock", "teeth", "_stra", "LFEKq", "yfres", "jojo'", "brush", "urine", "oYHzR", "rIEPx", "lokum", "e-432", "fring", "cattl", "lip", "t_vie", "c-304", "nBffe", "anill", "dxmMU", "(poke", "r_cla", "le* -", "s-and", "wet_b", "tputO", "xofGa", "l_sup", "nsgre", "beani", "_2_po", "pils", "jimer", "e,_na", "bonda", "werec", "car", "l_tuf", "d gre", " <pho", "less", "m_beh", "RmZKD", "e-pix", "_tatt", "ylux", "ct Ge", "gHSdu", "celeb", "xy-20", "ankle", "uest", "ptdir", "enes", "ng on", "e_ana", "big_t", "sdXWw", "c-clo", "CwBfH", "pound", "viett", "ZzjiP", "e onl", "tiNWV", "QOdAq", "ough", "rity", "euro3", "r_gir", "icles", "my)", "tid", "-onli", "sans_", "HTGQa", "neck_", "y's", "enetr", "ext-3", "on_gr", "Bedbk", "o_kuj", "01.ht", "tic-e", "e-blu", "ogy", "tradi", "  Typ", "s_hum", "ity_b", "fGzrd", "Style", "s_dra", "ribbo", "hould", "mGaAM", "vide ", "matri", "OFyfg", "thd ", "c_cen", "color", "debu", "n_she", "fluff", "zard", "-356.", "r_leg", "QNyoO", "_armp", "felin", "tmas ", "g ava", "und", "User-", "DENnE", "VeOgx", "_art", "duPbC", "ck_at", "sunli", "grin", "ful t", "sion", "ugKEC", "n Fir", "_ejac", " leav", "fire_", "umbre", "ts-fr", "yHzMz", "cover", "ilia", "og:ti", "objec", "Snow ", "ss_fe", "LZZay", "kemQO", "RhCXH", "3d_(a", "dile", "n_que", "e-97.", "BiNWg", "annoy", "ine-8", "-gene", "tting", "ct On", "sBPIF", "jBsJY", "chXPP", "s fou", "AkPSe", "raSIi", "_sign", "hat", "yang_", "thers", "mrhvG", "desli", "pact", "tine", "ffee-", "uman", "bikin", "03.ht", "osure", "a-tex", "er fo", "438.h", "_pony", "b.com", "a_gir", "ful p", "pov_m", "_bang", ",fps=", "om.ve", "go?ur", "upper", "n_hea", "l_gau", "iJKaX", "tits", "small", "lowin", "na_4", "full_", "embar", "oob", "ouds ", "Under", "gay_d", "seles", "ue-17", "europ", "punk_", "t Lig", "t_squ", "pyIEM", "ine-f", "borut", "mmf_t", "d-hol", "yWRVf", "botto", "ess_l", "ong", "\n`◈ 𝐅", "qZNma", "false", "Stars", "───╮\n", "r/Pre", "TtzcX", "ng_of", "_yun_", "fox_e", "femdo", "outdo", "id_ta", "nymou", "_of_k", "under", "ujo_s", "iMsAh", "nZGGQ", "n-log", "sda_s", "pecto", "ld-98", "ect-9", "torso", "ion_u", "gradi", "_eyes", "then", "ntary", "very_", "rXTRr", "&do=s", "o sty", "tiger", "loop", "ory", "archi", "moan", "EQcvA", "(6)", "ess_m", "ceboo", "eb_so", "𝗹` : ", "Blue ", "beads", "bNDDK", "thed", "oth-e", "on_ta", "Jean ", "t-59.", "irlfr", "own_b", "ame)", "AL.jp", "_view", "://ww", "mimet", "0:320", "cumdr", "kCjbF", "aying", "gold-", "cts", "ain", "ojekt", "i_(se", "tree2", "t-17.", "glass", "Icdnv", "e-274", "otRcm", "truly", "el-15", "ermar", "MNDUZ", "706.h", " Text", "t-wit", "hemip", "e-3d-", "morta", "*(?:[", "third", "TLkoO", " gala", "-283.", "orful", "h_onl", "atlus", "al bo", "ghs", "attr", "humil", "ess_p", "maste", "gym_u", "TMlZU", "Criui", "earri", "ss2", "intac", "funky", "ass_u", "MSnMT", "3D fo", "EapBO", "ussy", "ySocp", "duo_f", "benga", "tte", "d-que", "orph", "n log", "igger", "XfqmZ", "name", "ures", "ed Na", "rds t", "ontac", "skeb_", "OPgzf", "TJzyK", "d_ava", "al_yo", "eSvbx", "e_on_", "Gkvhj", "PlgYc", "judy_", "e_bod", "MUXdi", "CbPbJ", "qXLNH", "n_gro", "bangs", "grab", "dlxv", "les", "fTQow", "whgUZ", "\\('(.", "nties", "olds", "m_hea", "danga", "t-ffm", "𝚆𝙴𝚁𝙳 ", "kin_f", "oring", "fairy", "hi_re", "t-307", "dling", "-397.", "testi", "titfu", "bCCVq", "\n\n  \n", "humb-", "twint", "ding", "icela", "://m.", "socks", "tied", "ilena", "-pape", "RpwQm", "klesp", "SLWEr", "FTwbE", "_lap", "tline", "oGPWK", "o-onl", "vulva", "oKAZE", "triba", "soles", "fabri", "KDegc", "neonl", "haPuG", "e gal", "from_", "piYtQ", "ne-52", "ari", "wn_sp", "eyes_", "dc_co", "dream", "t-577", "tanli", "hield", "bun", "rab", "lengt", "y cut", "ZIDjy", "coat", "IrtSq", "crown", "cloud", "fools", "_(art", "CfqTy", "_teet", "teen_", "tanne", "ight ", "_nude", "wonde", "bear ", "_(hel", "iffus", "h the", "IjvBH", "lothi", "the_a", ".xnxx", "rator", "ine-7", "wlPZP", "eon", "y_nig", "palm_", "-beac", "ne-fr", "here", "l_com", "r/Mre", "_musc", "hairy", "KHTML", "nin_(", "TLsdt", "game_", "yama", "bob_c", "heroi", "_boot", "OKhaK", "CDhKx", "LFPYi", "pWRwT", "ia-3d", "holdi", "sory", "stay_", "_scle", "set-l", "pole_", "ummer", "yPrUw", "key=a", "-blac", "devic", "han", "ze_ti", "bvjMk", "load", "atch_", "es_vi", "3.htm", "als", "ges", "ght_s", "ct-79", "ScWjD", "loth", "aisy", "virtu", "HBOEH", "FcnxJ", " acco", "JfLCd", "n-sty", "kobay", "-73.h", "_in_a", "Kvqvw", "lic t", "jet", "shop", "ext-t", "ect-7", "hot_d", "inser", "queen", "age\"]", "lace", "toStr", "nd fo", "kanna", "_(mlp", "hindp", "beak", "en_ro", "r-fps", "typef", "roblo", "volca", "gh\\('", "ow_da", "IrsyF", "m_dri", "e_ant", "waZia", "leggi", "cowbo", "kOMss", "QmJdv", "t-on-", "smoke", "inner", "e Sta", "giant", "ts_bi", "ads", "eos", "====◈", "nscal", "QVJjs", "navel", "miqo'", "natio", "ubs", "foggy", "lver ", "try c", "yoga_", "om xn", "lutio", "adata", "KbylE", "agBOc", "gym", "ne-34", "wing-", "rock", "press", "ansfo", "look", "p/api", "door", "bleac", "am lo", "iews", "Wings", "TREyP", " hot ", "butt", "mGnHe", "er_hu", "face", "al_pe", "r_the", "gobst", "pTGGc", "ands", "bath", "ing", "lm)", "expan", "renam", "tuft", "Zodia", "verce", "-3d-t", "volup", "ntact", "t wit", "gynom", "sxqvo", "Write", "scrot", "de_fa", "ve ne", "hayas", "ored-", "_hind", "eoPTm", "ution", "EoAXT", "1male", "_pose", "/?api", "parti", "e_nag", "rYdQE", "_brie", "DfJiS", "ht Te", "ruhen", "on_as", "ptera", "s nig", "tch", "canid", "thro", "n_thr", "rippi", "works", "gHnDw", "ne-68", "cammy", "nai_d", "s_(ma", "ares", "steam", "awlWZ", "lloon", "88.ht", "e-dig", "NUWty", "LZAaK", "dmNTz", "ratin", "(HD)", "cum_s", "cow_g", "kgrou", "tio", "730.h", "emale", "outub", "e-717", "d_res", "ked_h", "WFwMx", "EYuxi", "honka", "rainb", "LBKMY", "murin", "disco", "eki_n", "XdaiE", "disne", "iYvos", "thumb", "onoma", "NQuzs", "asm", "Cake ", "ve_br", "_pect", "er-36", "ylZID", "etwee", "free", "aves-", "fox_t", "aQGsO", "; K) ", "hdpla", "d-com", "Enter", "tml", "mics", "XlzhX", "hrome", "tball", "RtsNc", "_heel", "o_(se", "skyri", "NMUDQ", "djob", "ass_c", "ian2", "95.ht", "on_vi", "pon", "bvgvY", "backg", "ng_ba", "_brea", "fpIay", "swept", "makeu", "bow_t", "WWVfr", "es2", "midna", ".xvs ", "iful ", "IDEOS", "stand", "on_sv", "domes", "bus", "agons", "mazin", " glas", "rt_st", "n_upp", "rough", "gKgMT", "line-", "igh", "siste", "cloac", "xVMOp", "faces", "CbJSD", "WoVGP", "zA-Z_", "black", "_make", "ngs", "Xlcuk", "Royal", "axy-s", "ascot", "nijis", "sei", "road-", "w_eye", "Video", "PFhWD", "red_l", "e-758", "g-str", "SUHUt", "Free", "suina", "_awe", "sketc", " විය ", "nails", "xrfAr", "YZJrJ", "itch-", "l_eye", "nelso", "rom r", "non-m", "h-Wat", "AfYyF", "/asit", "_head", "bisex", "hairs", "es_tr", "ransf", "t-184", "yBBhg", "_cove", "sanri", "AXchu", "cIQtI", "bgNUv", "moobs", "xsJEi", "3D li", "inclu", "ent_h", "YvPgD", "2077", " ange", "hsiTn", "eyepa", "CTvgC", "ch/", "state", "rBYbD", "rtion", "ruto", "768.h", "racia", "mless", "🚩 *Pl", "_file", "nel", "publi", "nus", "cat_h", "ris", "i_ni_", ")+)+)", "y-chr", "fetis", "ling_", "y_sho", "og:im", "-masc", "apart", "AtFkh", "_bulg", "inqjV", "yer-b", "cleav", "undea", "racco", "spare", "eyes", "mzXxD", "*ERRO", "xmmQd", "wide_", "nippl", "pussy", "ideo", "horn", "scarf", "oid_g", "zFRWW", "TUvKy", "beaut", "my_li", " phon", "nnel", "ndo", "bMVaG", "qaAGx", "trio", "mat", "kitsu", "t - O", "table", "cut", "purpl", "MIYQv", "held_", "ino_y", "bTPDk", "artwo", "pi/lo", "star", "b lin", "foot_", "86.ht", "Searc", "QrMmO", "IUZPp", "iGoBC", "PSLTd", "dLKyx", "posin", "bLfQh", "save", "ic-st", "unger", "     ", "nient", "TxxBd", "cts f", "ible_", "tears", "59.ht", "y Onl", "VNAFI", "l_pus", "kIjny", "74.ht", "secti", "et gl", "2019", "iatio", "cd_pr", "MnPKa", "55.ht", "orc_m", "ss_of", "isabe", "ture ", "ting ", "172.h", "dipha", "s* fo", "paws", "-loop", "enond", "pov_c", "ke* -", "gold", "doFnD", "ItxQC", "y_bac", "hung", "tied_", "s-onl", "ULFxf", "_expa", "w-tex", "aniac", "tar W", "qQNUH", "ulge", "Uvjgf", "fully", "al_ob", "ing_w", "QwUim", "_orde", "tai-i", "ress", "long_", "buckt", "pples", "otyph", "ochro", "crotc", "VURXK", "fish", " neon", "YfFfB", "ings2", "hy-te", "bYYSt", "eFIqd", "jMcIO", "lips", "cuff_", "h mul", "l_kom", "goth", "ght b", "re-th", "wear2", "nier:", "e_pie", "et_le", "er_fe", ":00", "spank", "HbmlT", "vs_th", "bust", "ezdZK", "h-tex", "ahe_g", "cigar", "🚩 *I ", "on_st", "lkkBV", "VIDEO", "ese8", "ct-25", "=◈\n╭─", "match", "minut", "hog", "cryin", "knife", " text", "QgHvB", "e met", "white", "sex/i", "ng_pe", "ided ", "_bord", "s vid", "mane", "edite", "circu", "box", "flash", "packa", "𝙏𝙞𝙩𝙡𝙚", "se_tc", "QKFVS", "ing-a", "ng_cu", "ng_fr", "_pubi", "scot ", " effe", "legwe", "mp4", "e_ski", "belly", "KJMkJ", "sex", "e-log", "views", "s_(an", "_back", "hhigh", "YbDDj", "nicke", "onPNg", "on_ch", "m.com", "cake ", "sOQGx", "const", "toele", "cCkPB", "n.eph", "tipto", "sourc", "gold_", "d-wri", "/THUM", "mon", "f_fra", "uqooS", "glitc", "ipsti", "e_foc", "pXFFv", "webp", "20.ht", "_anot", "tor", "qBJpd", "𝙿𝙾𝚆𝙴𝚁", "h_kis", "visib", "n tex", "NDHWe", "vrfor", "ger", "red_h", "oerba", "tly_c", "lAnGI", "esult", "JCmyN", "go ma", "idth\"", "giobq", "r_clo", "agic", "qwTjp", "e_nai", "push", "smoki", "athle", "indoo", "fin", "pqUbF", "c_use", "id_pe", "3d-un", "ng_aw", "kboar", "rms", "toe_c", "revea", "cum_i", "chrom", "d-208", "varia", "n.*", "w.xnx", "ct-bl", "GVhJH", "xy-ef", "ER`* ", "_sex", "ct-39", "censo", "_on_s", "clapp", "horse", "i:_st", "hog_(", "egory", "xKlPC", "Ommpu", "ral_i", "wo!", "1femb", "ars-c", "gun2", "gNJYm", "ioniz", "KYuEo", "cts-f", "wer", "JcERp", "first", "bathi", "shin_", "t-eff", "1080p", "nfxsd", "drool", "&name", "egg_l", "huggi", "ne  w", "nikke", "cle_s", "WgPQl", "2.htm", "thick", "on_si", "ous_a", "yshCR", "er_up", "e mul", "l_tai", "JfLiJ", "Foggy", "Terja", "JAXIQ", "pinkc", "e-bla", "rippe", "o_sex", "rzcxT", "mirro", "skunk", "81.ht", "gers", "l_dnp", "cow_e", "vietn", "categ", "csHie", "Mozil", "e-gir", "futa_", "WDbbF", "ows_v", "olor=", "rabbi", "pale-", "5boys", "enis", "t_clo", "and2", "_game", "e-lig", "suid", "tic-t", "cZcsx", "lcowU", "iobaa", "KfTdx", "marin", "YRDoM", "d Sil", "yor_b", "handb", "ess_2", "nd_he", "bukka", "d_bra", "ine 5", "epHYD", "AFYtz", "UXmhH", "zORzE", "mole", "a_hin", "yle t", "INtKT", "lizar", "cmJiA", "w_scl", "wgidP", "musk", "ok vi", "FWGaN", "playb", "d_sis", "strap", "iPhon", "ght_h", "n Gol", "e-bro", "RypDx", "DjxOo", "_outf", "repti", "eiRJg", "o-tea", "class", "saw_m", "_mido", "LITY", "_down", "vDcEg", "2018", "ures ", "_eyeb", "strin", "Ｄ*\n", "_diff", "360p ", "Green", "meta[", "21FNXpgR", "ks-te", "petpl", "iti-t", "ound_", "talle", "desse", "_tail", "dom", "294.h", "uku", "jiggl", "water", "d?url", "sh_co", "age_d", "jewel"];
  _0x3867 = function () {
    return _0x413fad;
  };
  return _0x3867();
}
const _0x5be235 = {
  pattern: "xvs",
  react: "🫣",
  alias: ["xvideossearch"],
  desc: "Search and get details from xvideos.",
  category: "download"
};
function _0x494b3e(_0x30713d, _0x33667d, _0x1e8116, _0x3d57df, _0x19e7dd) {
  return _0x109b(_0x3d57df + 426, _0x1e8116);
}
_0x5be235.use = ".xvs <query>";
_0x5be235.filename = __filename;
cmd(_0x5be235, async (_0x274915, _0x3dbcc9, _0x3a6b1a, {
  from: _0xc18f46,
  prefix: _0x46901e,
  q: _0xf96c43,
  sender: _0x2d6037,
  reply: _0x37cefd
}) => {
  try {
    if (!_0xf96c43) {
      return _0x37cefd("Please provide a search term!");
    }
    const _0x51fe39 = await fetchJson("https://nsfw-pink-venom.vercel.app/api/xvideos/search?query=" + _0xf96c43);
    var _0x3a9247 = [];
    for (var _0xf2260 = 0; _0xf2260 < _0x51fe39.result.length; _0xf2260++) {
      _0x3a9247.push({
        "title": _0xf2260 + 1,
        "description": _0x51fe39.result[_0xf2260].title + "\n",
        "rowId": _0x46901e + "xvdown " + _0x51fe39.result[_0xf2260].url
      });
    }
    const _0x45b140 = [{
      "title": "*[Result from xvideo.com]*\n",
      "rows": _0x3a9247
    }];
    const _0xbd606c = {
      text: "\n*ASITHA-MD XVIDEO DOWNLOADER*\n\n  \n🫣 *XVIDEOS Search Results* for: *" + _0xf96c43 + "*\n  ",
      footer: "*㋛ 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙰𝚂𝙸𝚃𝙷𝙰  〽️Ｄ*",
      title: '',
      buttonText: "*🔢 Reply below number*\n",
      sections: _0x45b140
    };
    const _0x568ccf = {
      quoted: _0x3dbcc9
    };
    return await _0x274915.replyList(_0xc18f46, _0xbd606c, _0x568ccf);
  } catch (_0x3ce350) {
    console.log(_0x3ce350);
    _0x37cefd("*ERROR !!*");
  }
});
async function ringtone(_0x3f5147) {
  return new Promise((_0x59ebf2, _0x466723) => {
    axios.get("https://meloboom.com/es/search/" + _0x3f5147).then(_0x5e9cfc => {
      const _0x548e8b = cheerio.load(_0x5e9cfc.data);
      const _0x2e02f4 = [];
      _0x548e8b("#__next > main > section > div.jsx-2244708474.container > div > div > div > div:nth-child(4) > div > div > div > ul > li").each(function (_0x1fb665, _0x39f75f) {
        _0x2e02f4.push({
          "title": _0x548e8b(_0x39f75f).find("h4").text(),
          "source": "https://meloboom.com/" + _0x548e8b(_0x39f75f).find("a").attr("href"),
          "audio": _0x548e8b(_0x39f75f).find("audio").attr("src")
        });
      });
      _0x59ebf2(_0x2e02f4);
    });
  });
}
const _0x3cfd64 = {
  pattern: "ringtone",
  alias: ["ring"],
  use: ".ringtone *<Song Name>*",
  react: "🍟",
  desc: "Search and DOWNLOAD VIDEOS from xvideos.",
  category: "download",
  filename: __filename
};
cmd(_0x3cfd64, async (_0x4afe91, _0xa9128f, _0x5dd35d, {
  from: _0x165d1e,
  prefix: _0x1005f5,
  l: _0x4aea29,
  quoted: _0x1c3ac0,
  body: _0x4f6048,
  isCmd: _0x25b88e,
  command: _0x5d8d3c,
  args: _0x1c3bac,
  q: _0x1c3d57,
  isGroup: _0x42c4d3,
  sender: _0x561d65,
  senderNumber: _0x472f4f,
  botNumber2: _0x4a481d,
  botNumber: _0x553f1f,
  pushname: _0x573051,
  isMe: _0x5b3e1b,
  isOwner: _0x3efac4,
  groupMetadata: _0xea84c7,
  groupName: _0x4282c3,
  participants: _0x2148c2,
  groupAdmins: _0xb54077,
  isBotAdmins: _0x1867be,
  isAdmins: _0x4708f8,
  reply: _0x4862d9
}) => {
  try {
    if (!_0x1c3d57) {
      return _0x4862d9("🚩 *Please give me words to search*");
    }
    const _0x6dffa1 = await ringtone(_0x1c3d57);
    const _0x1b5d93 = {
      quoted: _0xa9128f
    };
    if (_0x6dffa1.length < 1) {
      return await _0x4afe91.sendMessage(_0x165d1e, {
        "text": "🚩 *I couldn't find anything :(*"
      }, _0x1b5d93);
    }
    var _0x516420 = [];
    for (var _0x18e18b = 0; _0x18e18b < _0x6dffa1.length; _0x18e18b++) {
      _0x516420.push({
        "title": _0x18e18b + 1,
        "description": '' + _0x6dffa1[_0x18e18b].title + "\n",
        "rowId": _0x1005f5 + "ringdl " + _0x6dffa1[_0x18e18b].audio
      });
    }
    const _0x245b02 = [{
      "title": "*[Result from ringtone.com]*\n",
      "rows": _0x516420
    }];
    const _0x2b8698 = {
      text: "*ASITHA MD RINGTONE*",
      footer: "*㋛ 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙰𝚂𝙸𝚃𝙷𝙰  〽️Ｄ*",
      buttonText: "*🔢 Reply below number*\n",
      sections: _0x245b02
    };
    const _0x21ea12 = {
      quoted: _0xa9128f
    };
    return await _0x4afe91.replyList(_0x165d1e, _0x2b8698, _0x21ea12);
  } catch (_0x93064f) {
    console.log(_0x93064f);
    const _0x20a456 = {
      text: "🚩 *Error !!*"
    };
    const _0x4f603b = {
      quoted: _0xa9128f
    };
    await _0x4afe91.sendMessage(_0x165d1e, _0x20a456, _0x4f603b);
  }
});
function _0x109b(_0x21a17f, _0x2334bb) {
  const _0x10ec50 = _0x3867();
  _0x109b = function (_0x3867eb, _0x109b70) {
    _0x3867eb = _0x3867eb - 167;
    let _0x31d046 = _0x10ec50[_0x3867eb];
    return _0x31d046;
  };
  return _0x109b(_0x21a17f, _0x2334bb);
}
const _0x4d3b0d = {
  pattern: "ringdl",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x4d3b0d, async (_0x2c12d7, _0x2b022e, _0x1f5a25, {
  from: _0x489924,
  l: _0x5353af,
  quoted: _0x4c78ab,
  body: _0x183ec5,
  isCmd: _0xde7ca7,
  command: _0x5d2872,
  args: _0x1d3709,
  q: _0x3f2e44,
  isGroup: _0x4fada0,
  sender: _0x46ce1b,
  senderNumber: _0xd67cd9,
  botNumber2: _0x59f3c4,
  botNumber: _0x39f75a,
  pushname: _0xbefff8,
  isMe: _0x5d59d7,
  isOwner: _0xd91bdc,
  groupMetadata: _0x7e88e0,
  groupName: _0x57d3f6,
  participants: _0x5e65c7,
  groupAdmins: _0x92cf8b,
  isBotAdmins: _0x25acfd,
  isAdmins: _0x454666,
  reply: _0x19a442
}) => {
  try {
    const _0x53542f = {
      text: "📥",
      key: _0x2b022e.key
    };
    const _0x3b760a = {
      react: _0x53542f
    };
    await _0x2c12d7.sendMessage(_0x489924, _0x3b760a);
    const _0x493d23 = {
      text: "*Need link...*"
    };
    const _0x44840f = {
      quoted: _0x2b022e
    };
    if (!_0x3f2e44) {
      return await _0x2c12d7.sendMessage(_0x489924, _0x493d23, _0x44840f);
    }
    const _0x1fe93f = {
      quoted: _0x2b022e
    };
    _0x2c12d7.sendMessage(_0x489924, {
      "audio": await getBuffer(_0x3f2e44),
      "mimetype": "audio/mpeg"
    }, _0x1fe93f);
  } catch (_0x4f0847) {
    _0x19a442("*ERROR !!*");
    console.log(_0x4f0847);
  }
});
const _0x474b26 = {
  pattern: "xvdown",
  alias: ["dlxv", "xvdl"],
  react: "🫣",
  desc: "Download xvideos videos",
  category: "download",
  use: ".xvdown <xvideos link>",
  filename: __filename
};
cmd(_0x474b26, async (_0x43ab58, _0x336ee2, _0x2c464f, {
  from: _0x1095e7,
  l: _0x36148f,
  quoted: _0x15cc5e,
  body: _0xd66b46,
  isCmd: _0x21cbe3,
  command: _0x380338,
  args: _0x340924,
  q: _0x24b251,
  isGroup: _0x1462e2,
  sender: _0xd631d7,
  senderNumber: _0x5d939e,
  botNumber2: _0x1e31d5,
  botNumber: _0x5670e5,
  pushname: _0x2cd0b6,
  isMe: _0x54b859,
  isOwner: _0x33fc2d,
  groupMetadata: _0x44667f,
  groupName: _0x19a750,
  participants: _0x15dfe2,
  groupAdmins: _0x228ada,
  isBotAdmins: _0x5641c7,
  isAdmins: _0x167926,
  reply: _0x1a26c1
}) => {
  try {
    if (!_0x24b251) {
      return _0x1a26c1("*Please give me url !!*");
    }
    let _0x3bd807 = await fetchJson("https://nsfw-pink-venom.vercel.app/api/xvideos/download?url=" + _0x24b251);
    const _0x179b35 = "\n🔞 *`XVIDEO DOWNLOADER`* 🔞\n\n       \n• *Title* - " + _0x3bd807.result.title + "\n\n• *Views* - " + _0x3bd807.result.views + "\n\n• *Like* - " + _0x3bd807.result.likes + "\n\n• *Deslike* - " + _0x3bd807.result.deslikes + "\n\n\n*㋛ 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙰𝚂𝙸𝚃𝙷𝙰  〽️Ｄ*\n";
    const _0x2d171 = {
      url: _0x3bd807.result.thumb || ''
    };
    const _0x4dca90 = {
      image: _0x2d171,
      caption: _0x179b35
    };
    const _0x455cfe = {
      quoted: _0x336ee2
    };
    await _0x43ab58.sendMessage(_0x1095e7, _0x4dca90, _0x455cfe);
    const _0x19db84 = {
      url: _0x3bd807.result.url
    };
    const _0x483af6 = {
      document: _0x19db84,
      mimetype: "video/mp4",
      fileName: _0x3bd807.result.title,
      caption: _0x3bd807.result.title
    };
    const _0x158a3c = {
      quoted: _0x336ee2
    };
    await _0x43ab58.sendMessage(_0x1095e7, _0x483af6, _0x158a3c);
  } catch (_0x5d5318) {
    _0x1a26c1("*Error !!*");
    console.log(_0x5d5318);
  }
});
const _0x42a3d4 = {
  pattern: "logo",
  alias: ["lo"],
  use: ".logo*<name>*",
  react: "©️",
  desc: "Search and DOWNLOAD VIDEOS from xvideos.",
  category: "logo",
  filename: __filename
};
cmd(_0x42a3d4, async (_0x1273e9, _0x4b0698, _0x7330f2, {
  from: _0x5f2c28,
  prefix: _0x1b3f93,
  l: _0x1f8d8b,
  quoted: _0x24ce79,
  body: _0x403cb4,
  isCmd: _0xc07ea9,
  command: _0x2b1138,
  args: _0x24e846,
  q: _0x5f542d,
  isGroup: _0xe15c91,
  sender: _0x4a2098,
  senderNumber: _0x30d54f,
  botNumber2: _0x56bc39,
  botNumber: _0x433d78,
  pushname: _0x1734b3,
  isMe: _0x2eebe4,
  isOwner: _0x574515,
  groupMetadata: _0x46df9c,
  groupName: _0x7525eb,
  participants: _0x29057e,
  groupAdmins: _0x2574cb,
  isBotAdmins: _0x462923,
  isAdmins: _0x3ca8b7,
  reply: _0x1f61ab
}) => {
  try {
    if (!_0x5f542d) {
      return _0x1f61ab("*Input Name*");
    }
    const _0x14345d = {
      url: "https://en.ephoto360.com/create-online-3d-comic-style-text-effects-817.html",
      name: "Create online 3D comic-style text effects"
    };
    const _0x1c21c0 = {
      url: "https://en.ephoto360.com/create-dragon-ball-style-text-effects-online-809.html",
      name: "Create Dragon Ball style text effects online"
    };
    const _0x510366 = {
      url: "https://en.ephoto360.com/create-a-blackpink-style-logo-with-members-signatures-810.html",
      name: "Create a BLACKPINK style logo with members' signatures"
    };
    const _0x4abed9 = {
      url: "https://en.ephoto360.com/create-glossy-silver-3d-text-effect-online-802.html",
      name: "Create glossy silver 3D text effect online"
    };
    const _0x5a3029 = {
      url: "https://en.ephoto360.com/create-colorful-neon-light-text-effects-online-797.html",
      name: "Create colorful neon light text effects online"
    };
    const _0x1ce8ed = {
      url: "https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html",
      name: "Create Typography text effect on pavement online"
    };
    const _0x398072 = {
      url: "https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html",
      name: "Create digital glitch text effects online"
    };
    const _0x3ffa5d = {
      url: "https://en.ephoto360.com/handwritten-text-on-foggy-glass-online-680.html",
      name: "Handwritten text on foggy glass online"
    };
    const _0x46a129 = {
      url: "https://en.ephoto360.com/write-text-on-wet-glass-online-589.html",
      name: "Write text on wet glass online"
    };
    const _0xa9498d = {
      url: "https://en.ephoto360.com/create-online-typography-art-effects-with-multiple-layers-811.html",
      name: "Create online typography art effects with multiple layers"
    };
    const _0x2333fb = {
      url: "https://en.ephoto360.com/naruto-shippuden-logo-style-text-effect-online-808.html",
      name: "Naruto shippuden logo style text effect online"
    };
    const _0x461b57 = {
      url: "https://en.ephoto360.com/beautiful-3d-foil-balloon-effects-for-holidays-and-birthday-803.html",
      name: "Beautiful 3D foil balloon effects for holidays and birthday"
    };
    const _0x5d5ec4 = {
      url: "https://en.ephoto360.com/create-3d-colorful-paint-text-effect-online-801.html",
      name: "Create 3D colorful paint text effect online"
    };
    const _0x2f530a = {
      url: "https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html",
      name: "Create pixel Glitch text effect online"
    };
    const _0x3d4baa = {
      url: "https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html",
      name: "Create impressive neon Glitch text effects online"
    };
    const _0x1894c5 = {
      url: "https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html",
      name: "Free online American flag 3D text effect generator"
    };
    const _0x4f8de5 = {
      url: "https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html",
      name: "Create eraser deleting text effect online"
    };
    const _0x5144f2 = {
      url: "https://en.ephoto360.com/create-multicolored-signature-attachment-arrow-effect-714.html",
      name: "Create multicolored signature attachment arrow effect"
    };
    const _0x461f67 = {
      url: "https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html",
      name: "Online BLACKPINK style logo maker effect"
    };
    const _0x3b30e9 = {
      url: "https://en.ephoto360.com/create-a-star-wars-character-mascot-logo-online-707.html",
      name: "Create a Star Wars character mascot logo online"
    };
    const _0x1b404e = {
      url: "https://en.ephoto360.com/create-glowing-text-effects-online-706.html",
      name: "Create glowing text effects online"
    };
    const _0x47cf57 = {
      url: "https://en.ephoto360.com/create-3d-text-effect-on-the-beach-online-688.html",
      name: "Create 3D text effect on the beach online"
    };
    const _0x1dd588 = {
      url: "https://en.ephoto360.com/create-cute-girl-gamer-mascot-logo-online-687.html",
      name: "Create cute girl gamer mascot logo online"
    };
    const _0x337452 = {
      url: "https://en.ephoto360.com/3d-underwater-text-effect-online-682.html",
      name: "3D underwater text effect online"
    };
    const _0x5782d7 = {
      url: "https://en.ephoto360.com/free-bear-logo-maker-online-673.html",
      name: "Free bear logo maker online"
    };
    const _0x56516b = {
      url: "https://en.ephoto360.com/create-football-team-logo-online-free-671.html",
      name: "Create football team logo online free"
    };
    const _0x3eeb66 = {
      url: "https://en.ephoto360.com/write-text-on-vintage-television-online-670.html",
      name: "Write text on vintage television online"
    };
    const _0x593f98 = {
      url: "https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html",
      name: "Create a cartoon style graffiti text effect online"
    };
    const _0x4f2a19 = {
      url: "https://en.ephoto360.com/create-a-realistic-embroidery-text-effect-online-662.html",
      name: "Create a realistic embroidery text effect online"
    };
    const _0x2e42c7 = {
      url: "https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html",
      name: "Multicolor 3D paper cut style text effect"
    };
    const _0x43cf8b = {
      url: "https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html",
      name: "Create a watercolor text effect online"
    };
    const _0x1c32d5 = {
      url: "https://en.ephoto360.com/light-text-effect-futuristic-technology-style-648.html",
      name: "Light text effect futuristic technology style"
    };
    const _0x57dbec = {
      url: "https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html",
      name: "Write text effect clouds in the sky online"
    };
    const _0x562b46 = {
      url: "https://en.ephoto360.com/create-realistic-vintage-3d-light-bulb-608.html",
      name: "Create realistic vintage 3D light bulb online"
    };
    const _0x199f58 = {
      url: "https://en.ephoto360.com/create-blackpink-logo-online-free-607.html",
      name: "Create Blackpink logo online free"
    };
    const _0x13c899 = {
      url: "https://en.ephoto360.com/create-funny-warning-sign-602.html",
      name: "Create funny warning sign"
    };
    const _0x442eea = {
      url: "https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html",
      name: "Create 3D gradient text effect online"
    };
    const _0x2ce466 = {
      url: "https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html",
      name: "Write in sand summer beach online free"
    };
    const _0x59c43a = {
      url: "https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html",
      name: "Create a luxury gold text effect online"
    };
    const _0x1d530a = {
      url: "https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html",
      name: "Create multicolored neon light signatures"
    };
    const _0x43ae10 = {
      url: "https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html",
      name: "Write in Sand Summer Beach Online"
    };
    const _0x12ce27 = {
      url: "https://en.ephoto360.com/create-logo-team-logo-gaming-assassin-style-574.html",
      name: "Create logo team, logo gaming assassin style"
    };
    const _0x18e5ea = {
      url: "https://en.ephoto360.com/free-gaming-logo-maker-for-fps-game-team-546.html",
      name: "Free gaming logo maker for FPS game team"
    };
    const _0x1e3c37 = {
      url: "https://en.ephoto360.com/vibrant-fireworks-text-effect-535.html",
      name: "City new year vibrant fireworks text effect"
    };
    const _0x9c788a = {
      url: "https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html",
      name: "Create galaxy wallpaper mobile online"
    };
    const _0x5f537b = {
      url: "https://en.ephoto360.com/1917-style-text-effect-523.html",
      name: "1917 Style Text Effect"
    };
    const _0x35e086 = {
      url: "https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html",
      name: "Making Neon Light Text Effect with Galaxy Style"
    };
    const _0x3b5cd9 = {
      url: "https://en.ephoto360.com/create-blue-neon-logo-online-507.html",
      name: "Create blue neon logo online"
    };
    const _0x2cc5a6 = {
      url: "https://en.ephoto360.com/metal-mascots-logo-maker-486.html",
      name: "Metal Mascots Logo Maker"
    };
    const _0x1a5e5b = {
      url: "https://en.ephoto360.com/create-a-circle-mascot-team-logo-483.html",
      name: "Create a circle mascot team logo"
    };
    const _0x42586d = {
      url: "https://en.ephoto360.com/royal-text-effect-online-free-471.html",
      name: "Royal Text Effect Online Free"
    };
    const _0x47427b = {
      url: "https://en.ephoto360.com/create-double-exposure-inspired-text-effect-online-free-468.html",
      name: "Create Double Exposure Inspired Text Effect Online Free"
    };
    const _0x1e1df6 = {
      url: "https://en.ephoto360.com/print-name-on-hollywood-walk-of-fame-star-451.html",
      name: "Print Name On Hollywood Walk of Fame Star"
    };
    const _0x3ea01e = {
      url: "https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html",
      name: "Free Create a 3D Hologram Text Effect"
    };
    const _0x2bec39 = {
      url: "https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html",
      name: "Create galaxy style free name logo"
    };
    const _0x2cd8bf = {
      url: "https://en.ephoto360.com/create-mascot-logo-astronaut-space-galaxy-online-free-437.html",
      name: "Create Mascot Logo Astronaut Space Galaxy Online Free"
    };
    const _0xac93c1 = {
      url: "https://en.ephoto360.com/make-team-logo-online-free-432.html",
      name: "Make Team Logo Online Free"
    };
    const _0x3dcbde = {
      url: "https://en.ephoto360.com/create-light-effects-green-neon-online-429.html",
      name: "Create Light Effects Green Neon Online"
    };
    const _0x4b996f = {
      url: "https://en.ephoto360.com/glossy-chrome-text-effect-online-424.html",
      name: "Glossy Chrome Text Effect Online"
    };
    const _0x4c54ec = {
      url: "https://en.ephoto360.com/green-brush-text-effect-typography-maker-online-153.html",
      name: "Green brush text effect, Typography Maker Online"
    };
    const _0x307b9b = {
      url: "https://en.ephoto360.com/writing-on-the-cakes-127.html",
      name: "writing on the cakes"
    };
    const _0x149c52 = {
      url: "https://en.ephoto360.com/metal-logo-online-108.html",
      name: "Metal logo online"
    };
    const _0x721ea2 = {
      url: "https://en.ephoto360.com/noel-text-effect-online-99.html",
      name: "Noel text effect online"
    };
    const _0xc3c37f = {
      url: "https://en.ephoto360.com/glitter-gold-98.html",
      name: "Glitter Gold"
    };
    const _0x45082c = {
      url: "https://en.ephoto360.com/text-cake-90.html",
      name: "Text cake"
    };
    const _0x45f32e = {
      url: "https://en.ephoto360.com/stars-night-online-1-85.html",
      name: "Stars night online 1"
    };
    const _0x5ad94b = {
      url: "https://en.ephoto360.com/advanced-glow-effects-74.html",
      name: "Advanced glow effects online"
    };
    const _0x59a986 = {
      url: "https://en.ephoto360.com/road-paint-text-effect-70.html",
      name: "Road Paint Text Effect"
    };
    const _0x4c7fce = {
      url: "https://en.ephoto360.com/wooden-3d-text-effect-59.html",
      name: "Wooden 3D text effect"
    };
    const _0xaee023 = {
      url: "https://en.ephoto360.com/create-text-by-name-effect-58.html",
      name: "Create text by name effect"
    };
    const _0x15f299 = {
      url: "https://en.ephoto360.com/write-galaxy-online-18.html",
      name: "Write galaxy online"
    };
    const _0x5ccc55 = {
      url: "https://en.ephoto360.com/write-galaxy-bat-17.html",
      name: "Write galaxy bat"
    };
    const _0x5d3b39 = {
      url: "https://en.ephoto360.com/create-the-titanium-text-effect-to-introduce-iphone-15-812.html",
      name: "Create the Titanium text effect to introduce iPhone 15"
    };
    const _0x1ab17a = {
      url: "https://en.ephoto360.com/create-sunset-light-text-effects-online-807.html",
      name: "Create sunset light text effects online"
    };
    const _0x1ed7d1 = {
      url: "https://en.ephoto360.com/impressive-decorative-3d-metal-text-effect-798.html",
      name: "Impressive decorative 3D metal text effect"
    };
    const _0x444363 = {
      url: "https://en.ephoto360.com/create-mascot-shield-logo-online-for-free-758.html",
      name: "Create mascot shield logo online for free"
    };
    const _0x465e77 = {
      url: "https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html",
      name: "Nigeria 3D flag text effect online free"
    };
    const _0x4d706e = {
      url: "https://en.ephoto360.com/national-flag-text-effect-according-to-your-country-752.html",
      name: "National Flag text effect according to your country"
    };
    const _0x4bc4dc = {
      url: "https://en.ephoto360.com/create-colorful-angel-wing-avatars-731.html",
      name: "Create colorful angel wing avatars"
    };
    const _0x5622b6 = {
      url: "https://en.ephoto360.com/create-a-personalized-queen-card-avatar-730.html",
      name: "Create a personalized Queen card avatar"
    };
    const _0x58d921 = {
      url: "https://en.ephoto360.com/arrow-tattoo-effect-with-signature-712.html",
      name: "Arrow tattoo effect with signature"
    };
    const _0x44885f = {
      url: "https://en.ephoto360.com/create-3d-crack-text-effect-online-704.html",
      name: "Create 3D crack text effect online"
    };
    const _0x1e248e = {
      url: "https://en.ephoto360.com/create-broken-glass-text-effect-online-698.html",
      name: "Create broken glass text effect online"
    };
    const _0x227de2 = {
      url: "https://en.ephoto360.com/free-online-art-paper-cut-text-effects-695.html",
      name: "Free online art paper cut text effects"
    };
    const _0x369220 = {
      url: "https://en.ephoto360.com/create-3d-gradient-text-effect-online-686.html",
      name: "Create 3D gradient text effect online"
    };
    const _0x87246 = {
      url: "https://en.ephoto360.com/create-a-3d-shiny-metallic-text-effect-online-685.html",
      name: "Create a 3D shiny metallic text effect online"
    };
    const _0x23545c = {
      url: "https://en.ephoto360.com/neon-devil-wings-text-effect-online-683.html",
      name: "Neon devil wings text effect online"
    };
    const _0x48639e = {
      url: "https://en.ephoto360.com/create-anonymous-hacker-avatars-cyan-neon-677.html",
      name: "Create anonymous hacker avatars cyan neon"
    };
    const _0xeca89c = {
      url: "https://en.ephoto360.com/boom-text-comic-style-text-effect-675.html",
      name: "Boom text comic style text effect"
    };
    const _0x28242b = {
      url: "https://en.ephoto360.com/christmas-snow-text-effect-online-631.html",
      name: "Christmas snow text effect online"
    };
    const _0x36ce58 = {
      url: "https://en.ephoto360.com/create-a-snow-3d-text-effect-free-online-621.html",
      name: "Create a snow 3D text effect free online"
    };
    const _0x5e5b20 = {
      url: "https://en.ephoto360.com/colorful-birthday-foil-balloon-text-effects-620.html",
      name: "Colorful birthday foil balloon text effects"
    };
    const _0x294c36 = {
      url: "https://en.ephoto360.com/create-a-cloud-text-effect-in-the-sky-618.html",
      name: "Create a cloud text effect in the sky"
    };
    const _0x93a0d8 = {
      url: "https://en.ephoto360.com/create-realistic-cloud-text-effect-606.html",
      name: "Create realistic cloud text effect"
    };
    const _0x1ebe80 = {
      url: "https://en.ephoto360.com/write-names-and-messages-on-the-sand-online-582.html",
      name: "Write names and messages on the sand online"
    };
    const _0x2c5bf5 = {
      url: "https://en.ephoto360.com/realistic-3d-sand-text-effect-online-580.html",
      name: "Realistic 3D sand text effect online"
    };
    const _0x5a1d69 = {
      url: "https://en.ephoto360.com/create-a-summery-sand-writing-text-effect-577.html",
      name: "Create a summery sand writing text effect"
    };
    const _0x497fed = {
      url: "https://en.ephoto360.com/create-a-gaming-mascot-logo-free-560.html",
      name: "Create a gaming mascot logo free"
    };
    const _0x57f9b5 = {
      url: "https://en.ephoto360.com/funny-minion-text-effect-online-544.html",
      name: "Funny minion text effect online"
    };
    const _0x241f83 = {
      url: "https://en.ephoto360.com/writing-your-name-on-hot-air-balloon-506.html",
      name: "Writing your name on hot air balloon"
    };
    const _0x2485b2 = {
      url: "https://en.ephoto360.com/free-zodiac-online-logo-maker-491.html",
      name: "Free Zodiac Online Logo Maker"
    };
    const _0x2a5add = {
      url: "https://en.ephoto360.com/lovely-cute-3d-text-effect-with-pig-397.html",
      name: "Lovely cute 3D text effect with pig"
    };
    const _0x7e912d = {
      url: "https://en.ephoto360.com/green-neon-text-effect-395.html",
      name: "Green neon text effect"
    };
    const _0x208d84 = {
      url: "https://en.ephoto360.com/create-avatar-online-style-joker-365.html",
      name: "Create Avatar online style JOKER"
    };
    const _0x456a76 = {
      url: "https://en.ephoto360.com/dark-green-typography-online-359.html",
      name: "Dark Green  Typography online"
    };
    const _0x745bfa = {
      url: "https://en.ephoto360.com/typography-online-leaf-autumn-358.html",
      name: "Typography  online:  Leaf autumn"
    };
    const _0x2ff3de = {
      url: "https://en.ephoto360.com/create-typography-status-online-with-impressive-leaves-357.html",
      name: "Create typography, status online  with impressive leaves"
    };
    const _0x1d3e37 = {
      url: "https://en.ephoto360.com/text-firework-effect-356.html",
      name: "Text  FireWork Effect"
    };
    const _0xbc6fcb = {
      url: "https://en.ephoto360.com/chocolate-text-effect-353.html",
      name: "Chocolate text effect"
    };
    const _0x33e637 = {
      url: "https://en.ephoto360.com/dragon-steel-text-effect-online-347.html",
      name: "Dragon steel  text effect online"
    };
    const _0x3717a1 = {
      url: "https://en.ephoto360.com/text-light-galaxy-effectt-345.html",
      name: "Text light galaxy effect"
    };
    const _0x5d763e = {
      url: "https://en.ephoto360.com/typography-maker-online-5-343.html",
      name: "Typography Maker Online 5"
    };
    const _0x1249ad = {
      url: "https://en.ephoto360.com/typography-texture-online-nature-theme-342.html",
      name: "Typography texture  online  nature theme"
    };
    const _0x5baae5 = {
      url: "https://en.ephoto360.com/online-hot-metallic-effect-341.html",
      name: "Online hot metallic effect"
    };
    const _0x3a45d7 = {
      url: "https://en.ephoto360.com/typography-maker-facebook-online-340.html",
      name: "Typography Maker Facebook  Online"
    };
    const _0x48647e = {
      url: "https://en.ephoto360.com/make-typography-text-online-338.html",
      name: "Make typography text online"
    };
    const _0x529c38 = {
      url: "https://en.ephoto360.com/angel-wing-effect-329.html",
      name: "Angel wing effect"
    };
    const _0x3e10a9 = {
      url: "https://en.ephoto360.com/metallic-text-effect-with-impressive-font-307.html",
      name: "Metallic text effect with impressive font"
    };
    const _0x2ba9df = {
      url: "https://en.ephoto360.com/create-your-name-in-a-mechanical-style-306.html",
      name: "Create your name in a mechanical style"
    };
    const _0x200470 = {
      url: "https://en.ephoto360.com/metal-text-effect-online-new-305.html",
      name: "Metal text effect online - New"
    };
    const _0xb4c43f = {
      url: "https://en.ephoto360.com/text-effect-on-jean-fabric-304.html",
      name: "Text Effect on Jean Fabric"
    };
    const _0x5a6b04 = {
      url: "https://en.ephoto360.com/create-water-effect-text-online-295.html",
      name: "Create Water Effect Text Online"
    };
    const _0x53e25b = {
      url: "https://en.ephoto360.com/create-metal-border-294.html",
      name: "Create metal border"
    };
    const _0x24a90e = {
      url: "https://en.ephoto360.com/the-effect-of-galaxy-angel-wings-289.html",
      name: "The effect of galaxy angel wings"
    };
    const _0xddfd98 = {
      url: "https://en.ephoto360.com/text-galaxy-tree-effect-288.html",
      name: "Text Galaxy Tree Effect"
    };
    const _0x5099d4 = {
      url: "https://en.ephoto360.com/write-gold-letters-online-285.html",
      name: "Write gold letters online"
    };
    const _0xcc5cef = {
      url: "https://en.ephoto360.com/gemstone-text-effect-283.html",
      name: "Gemstone Text effect"
    };
    const _0xbee8dc = {
      url: "https://en.ephoto360.com/3d-ruby-stone-text-281.html",
      name: "3D ruby ΓÇïΓÇïstone Text"
    };
    const _0x122f68 = {
      url: "https://en.ephoto360.com/write-gold-letters-online-279.html",
      name: "Write gold letters online"
    };
    const _0x58b3f2 = {
      url: "https://en.ephoto360.com/magic-text-effect-278.html",
      name: "Magic text effect"
    };
    const _0x55a08c = {
      url: "https://en.ephoto360.com/text-metal-3d-277.html",
      name: "Text metal  3D"
    };
    const _0x107d85 = {
      url: "https://en.ephoto360.com/snake-text-effect-276.html",
      name: "Snake  Text Effect"
    };
    const _0x3449ea = {
      url: "https://en.ephoto360.com/jewel-text-effect-275.html",
      name: "Jewel Text Effect"
    };
    const _0x3ddc65 = {
      url: "https://en.ephoto360.com/3d-text-effects-style-274.html",
      name: "3D Text Effects Style"
    };
    const _0x59e9a9 = {
      url: "https://en.ephoto360.com/3d-silver-text-effect-273.html",
      name: "3D silver text effect"
    };
    const _0x1c9110 = {
      url: "https://en.ephoto360.com/gold-text-effect-style-272.html",
      name: "Gold Text Effect style"
    };
    const _0x4ad8d6 = {
      url: "https://en.ephoto360.com/gold-text-effect-pro-271.html",
      name: "Gold Text Effect pro"
    };
    const _0x44e6f5 = {
      url: "https://en.ephoto360.com/music-equalizer-text-effect-259.html",
      name: "Music equalizer text effect"
    };
    const _0x458a5c = {
      url: "https://en.ephoto360.com/galaxy-text-effect-new-258.html",
      name: "Galaxy Text Effect New"
    };
    const _0x4ea684 = {
      url: "https://en.ephoto360.com/write-letters-on-the-leaves-248.html",
      name: "Write letters on the leaves"
    };
    const _0x3ebac7 = {
      url: "https://en.ephoto360.com/fabric-text-effect-247.html",
      name: "Fabric Text Effect"
    };
    const _0x294ad3 = {
      url: "https://en.ephoto360.com/message-coffee-245.html",
      name: "Message  Coffee"
    };
    const _0x5b7e9e = {
      url: "https://en.ephoto360.com/text-light-effets-234.html",
      name: "Text Light Effets"
    };
    const _0xa56e89 = {
      url: "https://en.ephoto360.com/text-effects-incandescent-bulbs-219.html",
      name: "Text effects incandescent bulbs"
    };
    const _0x27cf6a = {
      url: "https://en.ephoto360.com/modern-gold-5-215.html",
      name: "Modern gold 5"
    };
    const _0x173a3e = {
      url: "https://en.ephoto360.com/modern-gold-4-213.html",
      name: "Modern gold 4"
    };
    const _0x5ddd62 = {
      url: "https://en.ephoto360.com/modern-gold-3-212.html",
      name: "Modern gold 3"
    };
    const _0x3e8fc = {
      url: "https://en.ephoto360.com/modern-gold-silver-210.html",
      name: "Modern Gold Silver"
    };
    const _0x2b87f7 = {
      url: "https://en.ephoto360.com/text-graffiti-3d-208.html",
      name: "Text Graffiti  3D"
    };
    const _0x59ae9a = {
      url: "https://en.ephoto360.com/wings-galaxy-206.html",
      name: "Wings Galaxy"
    };
    const _0x3ee354 = {
      url: "https://en.ephoto360.com/neon-text-effect-light-200.html",
      name: "Neon Text Effect Light"
    };
    const _0x2c6f67 = {
      url: "https://en.ephoto360.com/graffiti-color-199.html",
      name: "Graffiti color"
    };
    const _0x3c6a9b = {
      url: "https://en.ephoto360.com/write-text-on-chocolate-186.html",
      name: "Write text on chocolate"
    };
    const _0x5d16da = {
      url: "https://en.ephoto360.com/caper-cut-effect-184.html",
      name: "Caper Cut Effect"
    };
    const _0xdb5859 = {
      url: "https://en.ephoto360.com/modern-gold-red-183.html",
      name: "Modern Gold Red"
    };
    const _0x227f24 = {
      url: "https://en.ephoto360.com/cover-graffiti-181.html",
      name: "Cover Graffiti"
    };
    const _0x12dc06 = {
      url: "https://en.ephoto360.com/graffiti-text-5-180.html",
      name: "Graffiti Text 5"
    };
    const _0x2016be = {
      url: "https://en.ephoto360.com/graffiti-text-3-179.html",
      name: "Write graffiti letters on the wall art"
    };
    const _0x5b2a04 = {
      url: "https://en.ephoto360.com/graffiti-text-text-effect-online-178.html",
      name: "Graffiti Text -  Text effect online"
    };
    const _0x1f2f8a = {
      url: "https://en.ephoto360.com/wings-text-effect-176.html",
      name: "Wings Text Effect"
    };
    const _0xe1b978 = {
      url: "https://en.ephoto360.com/modern-gold-purple-175.html",
      name: "Modern Gold Purple"
    };
    const _0x477069 = {
      url: "https://en.ephoto360.com/metal-text-effect-blue-174.html",
      name: "Metal  Text Effect - Blue"
    };
    const _0x42444c = {
      url: "https://en.ephoto360.com/3d-text-effect-172.html",
      name: "3D Text Effect"
    };
    const _0x2d3cee = {
      url: "https://en.ephoto360.com/neon-text-effect-171.html",
      name: "Neon Text Effect"
    };
    const _0xa240c3 = {
      url: "https://en.ephoto360.com/color-text-effects-160.html",
      name: "Color text effects"
    };
    const _0x309316 = {
      url: "https://en.ephoto360.com/embroider-159.html",
      name: "Embroider"
    };
    const _0x1661d5 = {
      url: "https://en.ephoto360.com/gold-text-effect-158.html",
      name: "Gold Text Effect - Online Text Effect Generators"
    };
    const _0x7f6978 = {
      url: "https://en.ephoto360.com/modern-gold-157.html",
      name: "Modern Gold"
    };
    const _0x208b80 = {
      url: "https://en.ephoto360.com/logo-viettel-156.html",
      name: "Create 3D wooden logo online"
    };
    const _0xf63726 = {
      url: "https://en.ephoto360.com/shadow-text-effects-155.html",
      name: "Shadow text effects"
    };
    const _0x7a3be = {
      url: "https://en.ephoto360.com/matrix-text-effect-154.html",
      name: "Matrix Text Effect"
    };
    const _0x17e989 = {
      url: "https://en.ephoto360.com/creating-text-effects-night-lend-for-word-effect-147.html",
      name: "Creating text effects night - lend for word effect"
    };
    const _0x308b99 = {
      url: "https://en.ephoto360.com/ligatures-effects-from-leaves-146.html",
      name: "Ligatures effects from leaves"
    };
    const _0xe532c2 = {
      url: "https://en.ephoto360.com/zombie-3d-text-effect-143.html",
      name: "Zombie 3D Text Effect"
    };
    const _0x3c9281 = {
      url: "https://en.ephoto360.com/create-word-green-flares-140.html",
      name: "Create word green flares"
    };
    const _0x1feb50 = {
      url: "https://en.ephoto360.com/cloud-text-effect-139.html",
      name: "Cloud text effect"
    };
    const _0x1bc949 = {
      url: "https://en.ephoto360.com/water-3d-text-effect-online-126.html",
      name: "Water 3d text effect online"
    };
    const _0x17c70d = {
      url: "https://en.ephoto360.com/beautiful-gold-text-effect-122.html",
      name: "Beautiful gold text effect"
    };
    const _0x3d01fa = {
      url: "https://en.ephoto360.com/blue-neon-text-effect-117.html",
      name: "Blue neon text effect"
    };
    const _0x230723 = {
      url: "https://en.ephoto360.com/galaxy-text-effect-116.html",
      name: "Galaxy text effect"
    };
    const _0x703eb8 = {
      url: "https://en.ephoto360.com/gold-text-effect-online-112.html",
      name: "Gold text effect online"
    };
    const _0x53d90e = {
      url: "https://en.ephoto360.com/dragon-fire-text-effect-111.html",
      name: "Dragon Fire Text effect"
    };
    const _0x222988 = {
      url: "https://en.ephoto360.com/metal-text-effect-online-110.html",
      name: "Metal text effect online"
    };
    const _0x8aedde = {
      url: "https://en.ephoto360.com/metal-star-text-online-109.html",
      name: "Metal star text online"
    };
    const _0x1f738b = {
      url: "https://en.ephoto360.com/snow-on-text-online-107.html",
      name: "Snow on text online"
    };
    const _0x3e7b6e = {
      url: "https://en.ephoto360.com/water-text-effects-online-106.html",
      name: "Water text effects online"
    };
    const _0x47a369 = {
      url: "https://en.ephoto360.com/3d-wooden-text-effects-online-104.html",
      name: "3D wooden text effects online"
    };
    const _0x4f72b2 = {
      url: "https://en.ephoto360.com/cake-text-effect-online-103.html",
      name: "Cake text effect online"
    };
    const _0x2abcb9 = {
      url: "https://en.ephoto360.com/milk-cake-text-effects-102.html",
      name: "Milk cake text effects"
    };
    const _0x4c03fe = {
      url: "https://en.ephoto360.com/purple-text-effect-online-100.html",
      name: "Purple text effect online"
    };
    const _0x1cc97f = {
      url: "https://en.ephoto360.com/thunder-text-effect-online-97.html",
      name: "Thunder text effect online"
    };
    const _0x9f44df = {
      url: "https://en.ephoto360.com/diamond-text-95.html",
      name: "Diamond Text"
    };
    const _0x4e7d11 = {
      url: "https://en.ephoto360.com/candy-text-effect-94.html",
      name: "Candy text effect"
    };
    const _0x2b06e0 = {
      url: "https://en.ephoto360.com/colorful-text-effects-93.html",
      name: "Colorful text effects"
    };
    const _0x2b2821 = {
      url: "https://en.ephoto360.com/chrome-text-effect-91.html",
      name: "Chrome Text Effect"
    };
    const _0x37b602 = {
      url: "https://en.ephoto360.com/3d-cubic-text-effect-online-88.html",
      name: "3D cubic text effect online"
    };
    const _0x4576e9 = {
      url: "https://en.ephoto360.com/bokeh-text-effect-86.html",
      name: "Bokeh Text effect"
    };
    const _0x396d65 = {
      url: "https://en.ephoto360.com/stars-night-online-84.html",
      name: "Stars night online"
    };
    const _0x5f40de = {
      url: "https://en.ephoto360.com/foggy-rainy-text-effect-75.html",
      name: "Foggy rainy text effect"
    };
    const _0x408bd1 = {
      url: "https://en.ephoto360.com/underwater-text-73.html",
      name: "Underwater Text"
    };
    const _0x368647 = {
      url: "https://en.ephoto360.com/paint-splatter-text-effect-72.html",
      name: "Paint splatter text effect"
    };
    const _0x8efc32 = {
      url: "https://en.ephoto360.com/plasma-text-effects-online-71.html",
      name: "Plasma text effects online"
    };
    const _0x105833 = {
      url: "https://en.ephoto360.com/colorful-glowing-text-effect-69.html",
      name: "Colorful Glowing Text Effect"
    };
    const _0x55b997 = {
      url: "https://en.ephoto360.com/neon-text-effect-68.html",
      name: "Neon Text Effect"
    };
    const _0x142a50 = {
      url: "https://en.ephoto360.com/retro-text-effect-67.html",
      name: "Retro Text Effect"
    };
    const _0x43ea1b = {
      url: "https://en.ephoto360.com/graffiti-lettering-online-64.html",
      name: "Graffiti lettering online"
    };
    const _0x5c58d7 = {
      url: "https://en.ephoto360.com/create-unique-word-green-light-63.html",
      name: "Create unique word green light"
    };
    const _0x3b1ed8 = {
      url: "https://en.ephoto360.com/text-on-cloth-effect-62.html",
      name: "Text on cloth effect"
    };
    const _0x28bf73 = {
      url: "https://en.ephoto360.com/writing-chalk-on-the-blackboard-61.html",
      name: "Writing chalk on the blackboard"
    };
    const _0x119699 = {
      url: "https://en.ephoto360.com/cake-text-60.html",
      name: "Cake Text"
    };
    const _0x12fd01 = {
      url: "https://en.ephoto360.com/writing-chalk-on-the-blackboard-30.html",
      name: "Writing chalk on the blackboard"
    };
    const _0x51f7fd = [_0x14345d, _0x1c21c0, _0x510366, _0x4abed9, _0x5a3029, _0x1ce8ed, _0x398072, _0x3ffa5d, _0x46a129, _0xa9498d, _0x2333fb, _0x461b57, _0x5d5ec4, _0x2f530a, _0x3d4baa, _0x1894c5, _0x4f8de5, _0x5144f2, _0x461f67, _0x3b30e9, _0x1b404e, _0x47cf57, _0x1dd588, _0x337452, _0x5782d7, _0x56516b, _0x3eeb66, _0x593f98, _0x4f2a19, _0x2e42c7, _0x43cf8b, _0x1c32d5, _0x57dbec, _0x562b46, _0x199f58, _0x13c899, _0x442eea, _0x2ce466, _0x59c43a, _0x1d530a, _0x43ae10, _0x12ce27, _0x18e5ea, _0x1e3c37, _0x9c788a, _0x5f537b, _0x35e086, _0x3b5cd9, _0x2cc5a6, _0x1a5e5b, _0x42586d, _0x47427b, _0x1e1df6, _0x3ea01e, _0x2bec39, _0x2cd8bf, _0xac93c1, _0x3dcbde, _0x4b996f, _0x4c54ec, _0x307b9b, _0x149c52, _0x721ea2, _0xc3c37f, _0x45082c, _0x45f32e, _0x5ad94b, _0x59a986, _0x4c7fce, _0xaee023, _0x15f299, _0x5ccc55, _0x5d3b39, _0x1ab17a, _0x1ed7d1, _0x444363, _0x465e77, _0x4d706e, _0x4bc4dc, _0x5622b6, _0x58d921, _0x44885f, _0x1e248e, _0x227de2, _0x369220, _0x87246, _0x23545c, _0x48639e, _0xeca89c, _0x28242b, _0x36ce58, _0x5e5b20, _0x294c36, _0x93a0d8, _0x1ebe80, _0x2c5bf5, _0x5a1d69, _0x497fed, _0x57f9b5, _0x241f83, _0x2485b2, _0x2a5add, _0x7e912d, _0x208d84, _0x456a76, _0x745bfa, _0x2ff3de, _0x1d3e37, _0xbc6fcb, _0x33e637, _0x3717a1, _0x5d763e, _0x1249ad, _0x5baae5, _0x3a45d7, _0x48647e, _0x529c38, _0x3e10a9, _0x2ba9df, _0x200470, _0xb4c43f, _0x5a6b04, _0x53e25b, _0x24a90e, _0xddfd98, _0x5099d4, _0xcc5cef, _0xbee8dc, _0x122f68, _0x58b3f2, _0x55a08c, _0x107d85, _0x3449ea, _0x3ddc65, _0x59e9a9, _0x1c9110, _0x4ad8d6, _0x44e6f5, _0x458a5c, _0x4ea684, _0x3ebac7, _0x294ad3, _0x5b7e9e, _0xa56e89, _0x27cf6a, _0x173a3e, _0x5ddd62, _0x3e8fc, _0x2b87f7, _0x59ae9a, _0x3ee354, _0x2c6f67, _0x3c6a9b, _0x5d16da, _0xdb5859, _0x227f24, _0x12dc06, _0x2016be, _0x5b2a04, _0x1f2f8a, _0xe1b978, _0x477069, _0x42444c, _0x2d3cee, _0xa240c3, _0x309316, _0x1661d5, _0x7f6978, _0x208b80, _0xf63726, _0x7a3be, _0x17e989, _0x308b99, _0xe532c2, _0x3c9281, _0x1feb50, _0x1bc949, _0x17c70d, _0x3d01fa, _0x230723, _0x703eb8, _0x53d90e, _0x222988, _0x8aedde, _0x1f738b, _0x3e7b6e, _0x47a369, _0x4f72b2, _0x2abcb9, _0x4c03fe, _0x1cc97f, _0x9f44df, _0x4e7d11, _0x2b06e0, _0x2b2821, _0x37b602, _0x4576e9, _0x396d65, _0x5f40de, _0x408bd1, _0x368647, _0x8efc32, _0x105833, _0x55b997, _0x142a50, _0x43ea1b, _0x5c58d7, _0x3b1ed8, _0x28bf73, _0x119699, _0x12fd01];
    var _0x120770 = [];
    for (var _0x3801e0 = 0; _0x3801e0 < _0x51f7fd.length; _0x3801e0++) {
      _0x120770.push({
        "title": _0x3801e0 + 1,
        "description": '' + _0x51f7fd[_0x3801e0].name + "\n",
        "rowId": _0x1b3f93 + "logodl " + _0x51f7fd[_0x3801e0].url + " & " + _0x5f542d
      });
    }
    const _0xd8b2a1 = [{
      "title": "*[Result from en.ephoto360.com]*\n",
      "rows": _0x120770
    }];
    const _0x30607b = {
      image: "https://m.media-amazon.com/images/I/61SvvYYuaAL.jpg",
      text: "*ASITHA MD LOGO*",
      footer: "*㋛ 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙰𝚂𝙸𝚃𝙷𝙰  〽️Ｄ*",
      buttonText: "*🔢 Reply below number*\n",
      sections: _0xd8b2a1
    };
    const _0x2417a1 = {
      quoted: _0x4b0698
    };
    return await _0x1273e9.replyList(_0x5f2c28, _0x30607b, _0x2417a1);
  } catch (_0x415e7f) {
    console.log(_0x415e7f);
    const _0x176742 = {
      text: "🚩 *Error !!*"
    };
    const _0x227185 = {
      quoted: _0x4b0698
    };
    await _0x1273e9.sendMessage(_0x5f2c28, _0x176742, _0x227185);
  }
});
const _0x35562a = {
  pattern: "logodl",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x35562a, async (_0x34d4ba, _0x20a071, _0x2e4526, {
  from: _0x165290,
  l: _0x4a4294,
  quoted: _0x585526,
  body: _0x3e2fdb,
  isCmd: _0x409edd,
  command: _0x28e116,
  args: _0x1ceb85,
  q: _0x33ec2c,
  isGroup: _0x1a1155,
  sender: _0x5d7431,
  senderNumber: _0x5db39d,
  botNumber2: _0x30f6ea,
  botNumber: _0xffb488,
  pushname: _0x5e8966,
  isMe: _0x26d3a1,
  isOwner: _0x58f30d,
  groupMetadata: _0xb5b0bb,
  groupName: _0x5d3c16,
  participants: _0x4f54d9,
  groupAdmins: _0xe1f68c,
  isBotAdmins: _0x4eb627,
  isAdmins: _0x8a7fa1,
  reply: _0x1387e7
}) => {
  try {
    const _0x54287f = {
      text: "📥",
      key: _0x20a071.key
    };
    const _0x1b2e21 = {
      react: _0x54287f
    };
    await _0x34d4ba.sendMessage(_0x165290, _0x1b2e21);
    const _0x5a69bc = _0x33ec2c.split(" & ")[0];
    const _0x314ed9 = _0x33ec2c.split(" & ")[1];
    const _0x7e78ab = await fetchJson("https://api-pink-venom.vercel.app/api/logo?url=" + _0x5a69bc + "&name=" + _0x314ed9);
    const _0x403eeb = _0x7e78ab.result.download_url;
    const _0x29b9dd = {
      url: _0x403eeb
    };
    const _0x413b58 = {
      image: _0x29b9dd,
      caption: "*㋛ 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙰𝚂𝙸𝚃𝙷𝙰  〽️Ｄ*"
    };
    const _0x410f3f = {
      quoted: _0x20a071
    };
    _0x34d4ba.sendMessage(_0x165290, _0x413b58, _0x410f3f);
  } catch (_0x3bb73a) {
    _0x1387e7("*ERROR !!*");
    console.log(_0x3bb73a);
  }
});
const _0x4b24a = {
  pattern: "pronhub",
  react: "🫣",
  alias: ["ph"],
  desc: "Search and get details from xvideos.",
  category: "download",
  use: ".pronhub <query>",
  filename: __filename
};
cmd(_0x4b24a, async (_0x1eec17, _0x1e6192, _0x5c26b9, {
  from: _0x143eee,
  prefix: _0x1dd93a,
  q: _0x34c144,
  sender: _0x43c3a2,
  reply: _0xca775f
}) => {
  try {
    if (!_0x34c144) {
      return _0xca775f("Please provide a search term!");
    }
    const _0xccd7c9 = await fetchJson("https://ipa-oya.vercel.app/api/ph?q=" + _0x34c144);
    var _0x4c20ee = [];
    for (var _0x191704 = 0; _0x191704 < _0xccd7c9.length; _0x191704++) {
      _0x4c20ee.push({
        "title": _0x191704 + 1,
        "description": _0xccd7c9[_0x191704].title + "\n",
        "rowId": _0x1dd93a + "prondl " + _0xccd7c9[_0x191704].url
      });
    }
    const _0x26f992 = [{
      "title": "*[Result from pronhub.com]*\n",
      "rows": _0x4c20ee
    }];
    const _0x5cb1f8 = {
      text: "\n*ASITHA-MD PRONHUB DOWNLOADER*\n\n  \n🫣 *PRONHUB Search Results* for: *" + _0x34c144 + "*\n  ",
      footer: "*㋛ 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙰𝚂𝙸𝚃𝙷𝙰  〽️Ｄ*",
      title: '',
      buttonText: "*🔢 Reply below number*\n",
      sections: _0x26f992
    };
    const _0x3152ef = {
      quoted: _0x1e6192
    };
    return await _0x1eec17.replyList(_0x143eee, _0x5cb1f8, _0x3152ef);
  } catch (_0x5e4b8b) {
    _0xca775f('' + _0x5e4b8b);
    console.log(_0x5e4b8b);
  }
});
const _0x2c334e = {
  pattern: "prondl",
  react: "🫣",
  desc: "Download xvideos videos",
  category: "download",
  use: ".prondl <pronhub link>",
  filename: __filename
};
function _0x2d03b2(_0x576e60, _0x1097ba, _0x46bcc1, _0xc49a80, _0x5337b3) {
  return _0x109b(_0x576e60 + 376, _0x1097ba);
}
cmd(_0x2c334e, async (_0x467d85, _0x515d2e, _0x2d86bb, {
  from: _0x302424,
  l: _0x4f6abf,
  quoted: _0x203205,
  body: _0x11edc0,
  isCmd: _0x209677,
  command: _0x1dbdee,
  args: _0x37f9ed,
  q: _0x21bc40,
  prefix: _0xd81544,
  isGroup: _0x3ee233,
  sender: _0x3bf715,
  senderNumber: _0x49c581,
  botNumber2: _0x225df6,
  botNumber: _0xc29d12,
  pushname: _0x5c841d,
  isMe: _0xdc608c,
  isOwner: _0xa4adc6,
  groupMetadata: _0x55df12,
  groupName: _0x341ba5,
  participants: _0x21fae6,
  groupAdmins: _0x135c78,
  isBotAdmins: _0xa63b04,
  isAdmins: _0x3b4139,
  reply: _0x435fe0
}) => {
  try {
    if (!_0x21bc40) {
      return _0x435fe0("*Please give me url !!*");
    }
    let _0x5396c3 = await fetchJson("https://ipa-oya.vercel.app/api/phdl?q=" + _0x21bc40);
    const _0x35f7e5 = "\n🔞 *`PRONHUB DOWNLOADER`* 🔞\n     \n• *Title* - " + _0x5396c3.video_title + "\n\n• *Time* - " + _0x5396c3.analyze_time + "\n\n• *Date* - " + _0x5396c3.video_upload_date + "\n\n• *Link* - " + _0x21bc40 + "\n";
    const _0x3e6964 = _0x5396c3.format.map(_0x154446 => _0x154446.download_url);
    const _0x4bf8fa = (await axios.get("https://gitlab.com/anukunu2000/asitha-md-db/-/raw/master/ditels/ditels.json")).data;
    let _0x5c9832 = _0x4bf8fa.footer;
    const _0x35bed5 = [{
      "title": '',
      "rows": [{
        "title": "1",
        "rowId": _0xd81544 + "xbbb " + (_0x3e6964[3] + " & " + _0x5396c3.video_title + " & " + _0x5396c3.video_cover),
        "description": "1080p"
      }, {
        "title": "2",
        "rowId": _0xd81544 + "xbbb " + (_0x3e6964[2] + " & " + _0x5396c3.video_title + " & " + _0x5396c3.video_cover),
        "description": "720p"
      }, {
        "title": "3",
        "rowId": _0xd81544 + "xbbb " + (_0x3e6964[1] + " & " + _0x5396c3.video_title + " & " + _0x5396c3.video_cover),
        "description": "480p"
      }, {
        "title": "4",
        "rowId": _0xd81544 + "xbbb " + (_0x3e6964[0] + " & " + _0x5396c3.video_title + " & " + _0x5396c3.video_cover),
        "description": "240p"
      }]
    }];
    const _0x4a158c = {
      url: _0x5396c3.video_cover
    };
    const _0x2258de = {
      caption: _0x35f7e5,
      image: _0x4a158c,
      footer: _0x5c9832,
      title: '',
      buttonText: "*🔢 Reply below number*",
      sections: _0x35bed5
    };
    const _0x3cb08c = {
      quoted: _0x515d2e
    };
    return await _0x467d85.replyList(_0x302424, _0x2258de, _0x3cb08c);
  } catch (_0x5adaae) {
    _0x435fe0('' + _0x5adaae);
    console.log(_0x5adaae);
  }
});
const _0x599c0e = {
  pattern: "xbbb",
  react: "🫣",
  filename: __filename
};
cmd(_0x599c0e, async (_0x17c8ef, _0x24e42e, _0x1e288a, {
  from: _0x147754,
  l: _0x2972a5,
  quoted: _0x1976ce,
  body: _0xe7b9fd,
  isCmd: _0x16af2b,
  command: _0x4a389f,
  args: _0x578806,
  q: _0x4129c1,
  isGroup: _0x1d2f50,
  sender: _0x3fcc5d,
  senderNumber: _0x3e81e3,
  botNumber2: _0xc00c98,
  botNumber: _0x4a5571,
  pushname: _0x2dc850,
  isMe: _0x278d54,
  isOwner: _0x49021a,
  groupMetadata: _0x1e8fd9,
  groupName: _0x38f3ec,
  participants: _0x3411c4,
  groupAdmins: _0x4060d8,
  isBotAdmins: _0xe68037,
  isAdmins: _0x21b258,
  reply: _0x337ab9
}) => {
  try {
    const _0x5312af = _0x4129c1.split(" & ")[1];
    const _0x33c14b = _0x4129c1.split(" & ")[0];
    const _0x584b17 = _0x4129c1.split(" & ")[2];
    const _0x555699 = await getimage(_0x584b17);
    const _0x4539db = {
      url: _0x33c14b
    };
    const _0x5669ea = {
      quoted: _0x24e42e
    };
    await _0x17c8ef.sendMessage(_0x147754, {
      "document": _0x4539db,
      "jpegThumbnail": _0x555699,
      "mimetype": "video/mp4",
      "fileName": _0x5312af,
      "caption": _0x5312af + "\n\n*㋛ 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙰𝚂𝙸𝚃𝙷𝙰  〽️Ｄ*"
    }, _0x5669ea);
  } catch (_0x309259) {
    _0x337ab9('' + _0x309259);
    console.log(_0x309259);
  }
});
const categories = ["furry", "western_dragon", "tree2", "big_breasts", "blue_hair", "ejaculation", "eroge", "slushe_(website)", "red_hair", "short_hair", "2009", "jotaro_kujo", "naked_stockings", "2013", "intact", "hyaenid", "fennec", "2010", "2011", "cg", "bbmbbf", "pretty_cure", "parent_and_child", "parent", "erect_nipple", "bodybuilder", "penis_under_skirt", "embrace", "triceps", "muscular_back", "sibling", "magical_girl", "cute_fang", "hyper_testicles", "female_protagonist", "soul_calibur", "bouncing_balls", "male_human/female_anthro", "pokemon_gsc", "bra_lift", "virgin", "the_avatar", "hylian", "super_smash_bros.", "smoke", "were", "conditional_dnp", "multi_breast", "beer", "invalid_tag", "cum_on_leg", "2014", "throat_bulge", "multi_nipple", "dota_2", "dock", "shantae", "harley_quinn", "semi-anthro", "2012", "barely_visible_genitalia", "braixen", "cum_on_chest", "human_penetrated", "multiple_females", "pointless_censoring", "outdoor", "cum_in_hair", "long_hair_male", "the_simpsons", "<3_eyes", "asymmetrical_hair", "mob_face", "tears_of_the_kingdom", "octoling", "tear", "student", "military", "2016", "eye_patch", "one_eye_obstructed", "halo_(series)", "apex_legends", "fringe", "public_exposure", "mtf_transformation", "male/ambiguous", "cutaway", "love_live!", "arm_warmers", "puffy_pussy", "legendary_pokémon", "hime_cut", "outercourse", "spirit", "breath_of_the_wild", "oni", "short_skirt", "bowser", "cowboy_hat", "human_penetrating_anthro", "pointy_chin", "chastity", "cum_in_throat", "suspension", "alpha_channel", "the_amazing_world_of_gumball", "green_background", "goblin_female", "smothering", "jill_valentine", "flexible", "urination", "side-tie_bikini", "crash_(series)", "activision", "chocolate_and_vanilla", "au_ra", "looney_tunes", "may_(pokemon)", "photoshop", "back_muscles", "taint", "commissioner_upload", "fishnet", "shaved_crotch", "naruto_(classic)", "penis_under_clothes", "lara_croft_(survivor)", "lara_croft", "tomb_raider", "mahou_shoujo_madoka_magica", "blue_tail", "completely_naked_male", "!", "pokemon_xy", "scrotum", "android_18", "cervid", "thick_tail", "thigh_socks", "underwear_aside", "bulma_briefs", "egg", "male_on_anthro", "female_on_feral", "blue_tongue", "torn_legwear", "taimanin_(series)", "cum_on_lower_body", "doujinshi", "foreskin_folds", "penis_piercing", "ganyu_(genshin_impact)", "rumi_usagiyama", "holding_head", "asari", "male_nipples", "stardust_crusaders", "naked_thighhighs", "public_domain", "gradient", "son_goku", "black_screen_roulette", "youtuber", "whip", "sweaty_balls", "gundam", "scat", "naked_heels", "team_fortress_2", "translucent_clothing", "pattern_clothing", "knotting", "bedding", "larger_anthro", "double_anal", "traditional_media_(artwork)", "gloves_(marking)", "striped_panties", "blue_background", "lumine_(genshin_impact)", "masked_male", "pharah", "animal2", "69", "breast_size_difference", "latex_suit", "rubber", "egg_laying", "milking", "milking_machine", "2015", "gaping_pussy", "ghost", "k-on!", "hayase_nagatoro", "carrying", "faceless_female", "fire_emblem_fates", "door", "t-shirt", "midna", "twilight_princess", "earth_pony", "granblue_fantasy", "toned_male", "wet_clothes", "shirt_up", "bridal_gauntlets", "hair_pull", "kangaroo", "toilet", "female_domination", "green_nipples", "tapering_penis", "cum_on_balls", "sleeveless_shirt", "clothed/nude", "cervine", "2017", "pikachu", "pivoted_ears", "suid", "warhammer_(franchise)", "anal_vore", "tongue_piercing", "aether_(genshin_impact)", "maid_headdress", "gangrape", "hair_grab", "urine", "open_eyes", "tentacle_rape", "mega_man", "pumpkin", "rainbow_hair", "helpless", "big_testicles", "humor", "nijisanji", "handcuffs", "pregnant_sex", "xenoblade_chronicles_2", "xenoblade_(series)", "hairy_balls", "censored_pussy", "muscular_ass", "mouse", "breasts_bigger_than_torso", "total_drama_island", "five_nights_at_freddy's_2", "sunlight", "male_on_futa", "cute_male", "rubbing", "anklet", "hands", "human_male", "villainess", "futanari_penetrating", "being_watched", "teacher_and_student", "toony", "bending_over", "duel_monster", "isabelle_(animal_crossing)", "throat_fuck", "please_don't_bully_me,_nagatoro", "avatar_the_last_airbender", "bracelets", "asuka_langley_sohryu", "fnaf", "wedding_dress", "panties_around_one_leg", "juri_han", "felid_humanoid", "feline_humanoid", "enf", "daughter", "out_of_frame", "dark_penis", "cum_on_feet", "nami", "head_out_of_frame", "princess_rosalina", "funny", "insertion", "narrow_waist", "girls_und_panzer", "the_witcher_3:_wild_hunt", "ciri", "the_witcher_(series)", "nipple_penetration", "underwear_down", "street_fighter_v", "futa_with_male", "cumming_together", "forehead_mark", "pokemon_sv", "outdoor_nudity", "sportswear", "what", "palcomix", "resident_evil_8:_village", "groping_from_behind", "legs_held_open", "dcau", "10s", "kissing_while_penetrated", "finger_fuck", "eyebrow_piercing", "cowbell", "resident_evil_3", "panties_around_leg", "shoulders", "voyeur", "bunny", "indie_virtual_youtuber", "splits", "platform_heels", "mai_shiranui", "spiral_eyes", "pink_lips", "jojo's_bizarre_adventure", "flat_chested", "5girls", "male_anthro", "translucent", "exposed", "disgaea", "pregnant_belly", "excited", "naked_footwear", "dungeons_and_dragons", "leash_pull", "twerking", "stand_and_carry_position", "zipper", "moustache", "tails", "female_human", "hand_behind_head", "costume", "witch_hat", "idolmaster", "idolmaster_cinderella_girls", "cap", "goddess_of_victory:_nikke", "pelvic_curtain", "purple_nails", "sperm_cell", "robe", "collaborative_fellatio", "teamwork", "masked", "street_fighter_6", "leash_and_collar", "atlus", "king_of_fighters", "shounen_jump", "foursome", "denim_shorts", "alternate_color", "shiny_pokemon", "bike_shorts", "lowres", "fucked_senseless", "long_gloves", "depth_of_field", "pokemon_bw2", "bigger_female", "miqo'te", "hand_on_another's_head", "black_dress", "cuffs", "krystal", "nipple_rings", "breastfeeding", "post-timeskip", "against_glass", "car", "sling_bikini", "brainwashing", "screencap", "screenshot2", "knife", "aqua_hair", "drinking", "2020s", "wavy_hair", "civitai", "izuku_midoriya", "miss_kobayashi's_dragon_maid", "runny_makeup", "queen_of_spades", "drunk2", "resident_evil_2", "resident_evil_2_remake", "ready_to_pop", "body_markings", "snk", "bandana", "witch", "police_uniform", "police", "pokemon_sm", "night_elf", "sitting_on_penis", "star_vs_the_forces_of_evil", "animatronic", "visor", "arm_tattoo", "hoop_earrings", "final_fantasy_xiv", "eyes_visible_through_hair", "eating", "obese_female", "antennae", "cum_between_breasts", "obese", "blood_elf", "sus_(pig)", "chinese_clothes", "suina", "fat_mons", "muscular_legs", "wolf_ears", "wolf_girl", "blaze_the_cat", "honey_select", "youtube2", "green_penis", "half-dressed", "sony_interactive_entertainment", "princess_daisy", "grope", "black_lips", "nier", "fingering_partner", "penis_between_breasts", "twins", "dominatrix", "greek_mythology", "persona_5", "persona", "persona_4", "dead_or_alive", "tsunade", "queen's_blade", "humanized", "hot_spring", "blue_lipstick", "sex_machine", "goblin", "canine_humanoid", "male_on_top", "cum_on_ground", "flared_penis", "short_stack", "multi_tail", "bodypaint", "holding_weapon", "big_tail", "black_claws", "white_feathers", "pregnant_female", "cum_covered", "medial_ring", "skunk", "mephitid", "huge_belly", "pinkie_pie_(mlp)", "twilight_sparkle_(mlp)", "hairy_armpits", "applejack_(mlp)", "rainbow_dash_(mlp)", "g-string", "star", "antennae_(anatomy)", "imminent_oral", "hand_on_leg", "android", "undead", "sanrio", "vrchat", "handsfree_ejaculation", "dark_body", "purple_nipples", "double_dildo", "taken_from_behind", "game_freak", "furred_dragon", "penile_masturbation", "genital_outline", "penile_spines", "hemipenes", "multiple_males", "kemono", "murid", "murine", "rat", "captured_heroine", "slavegirl", "bad_end", "69_position", "tight_pants", "melee_weapon", "kobold", "blue_feathers", "bone", "green_fur", "messy", "pseudo_hair", "beak", "full-length_portrait", "greyscale", "3_fingers", "desk", "draenei", "torn_pantyhose", "heart_censor", "neon_genesis_evangelion", "dakimakura", "bathtub", "hex_maniac", "skeb_commission", "topless_male", "amputee", "anal_fingering", "pokemon_ss", "gym_leader", "saliva_on_penis", "sword_art_online", "link", "thought_bubble", "the_owl_house", "gilf", "sequence", "plain_background", "breast_expansion", "goddess", "oppai2", "top_heavy", "puffy_areola", "looking_to_the_side", "expansion", "military_uniform", "tight_clothes", "animal_tail", "alternate_ass_size", "hyper_thighs", "clothes", "bouncing_butt", "waist", "ass_cleavage", "spider", "gwen_stacy", "cow_ears", "leopard", "anal_masturbation", "homestuck", "sweaty_breasts", "bob_cut", "lying_down", "circumcised", "kill_la_kill", "no_nipples", "licking_pussy", "sneakers", "covering_breasts", "hearts_around_head", "exposed_torso", "exposed_ass", "siblings", "cumflated_belly", "outdoor_sex", "groping_breasts", "fully_nude", "cum_pool", "black_clover", "macro", "blushing_at_viewer", "fanart", "alternate_version_at_source", "mirror", "fromsoftware", "elden_ring", "big", "darkstalkers", "nakadashi", "tiptoes", "stuck", "spiky_hair", "ginger_hair", "ginger", "tights", "shocked_expression", "micro", "pasties", "eyepatch", "fantasy", "paizuri_under_clothes", "struggling", "red_scales", "turtleneck", "orc", "human_female", "stray_pubic_hair", "five_nights_at_freddy's:_security_breach", "bathroom", "uzumaki_naruto", "naruto_(series)", "hyuuga_hinata", "ino_yamanaka", "reverse_suspended_congress", "ursid", "nipple_pinch", "overweight_male", "gyaru", "tan-skinned_female", "leaning_back", "navel_piercing", "long_video", "holding_leg", "black_balls", "twitter", "halloween_costume", "office", "malesub", "ass_jiggle", "sniffing", "full-package_futanari", "farting", "fart_cloud", "ass_shake", "widowmaker", "latex_gloves", "dreamworks", "mortal_kombat", "two_tone_tail", "undertale", "dungeon", "censored_penis", "torture", "rosa_(pokemon)", "slime", "v_sign", "skull", "digestion", "scars", "injustice_2", "big_eyes", "futa_with_female", "blue_nails", "kitsune", "rimjob", "tail_grab", "dog", "nudity", "facial_mark", "japanese_clothes", "older_penetrating_younger", "futasub", "hololive_japan", "cat_humanoid", "hands_behind_head", "tekken", "music", "hairy_male", "passionate", "clapping_cheeks", "urethral_insertion", "circlet", "bishoujo_senshi_sailor_moon", "steven_universe", "gem_(species)", "4boys", "worried", "princess_peach", "super_mario_bros.", "prostitution", "cookie_run", "gay_domination", "pussy_ejaculation", "yor_forger", "spy_x_family", "yor_briar", "guro", "half_naked", "pokemorph", "egyptian", "ankha", "tagme_(artist)", "functionally_nude_female", "functionally_nude", "breasts_out_of_clothes", "sakura_haruno", "boruto:_naruto_next_generations", "harem_outfit", "crotchboobs", "girlfriend_(friday_night_funkin)", "see-through_clothing", "paizuri_lead_by_female", "erect_nipples_under_clothes", "pinned", "head_grab", "manga", "alicorn", "re:zero_kara_hajimeru_isekai_seikatsu", "striped", "angel_wings", "friday_night_funkin_mod", "robot_humanoid", "pink_nails", "money", "cynthia_(pokemon)", "stripper_pole", "amy_rose", "unknown_artist", "mobian_(species)", "insects", "boner", "balls_deep", "loop", "fruit", "white_dress", "cross_section", "pleasured", "large_nipples", "futa_sans_balls", "hood", "armlet", "loincloth", "raven_(dc)", "forehead_jewel", "colored_skin", "anilingus", "choking", "miruko", "back_view", "source_filmmaker", "huge_areolae", "venus_body", "giant_breasts", "laying_on_back", "wrist_cuffs", "background", "high-angle_view", "skimpy_clothes", "sandals", "anal_juice", "spider-man", "panting", "black_underwear", "third-party_edit", "pale-skinned_male", "whisker_markings", "upside-down", "anal_beads", "happy_trail", "stripper", "gynomorph/female", "minecraft", "blue_shirt", "ball_fondling", "hyper_muscles", "brown_nose", "werewolf", "werecanine", "werecanid", "hellhound", "red_sclera", "canid_demon", "censor_bar", "vtuber", "leather", "erection_under_clothing", "angel", "black_scales", "bandage", "goo_creature", "fallout", "talons", "humanoid_pointy_ears", "anon", "artist_logo", "dildo_sitting", "green_clothing", "nipple_outline", "white_clothing", "5boys", "braided_ponytail", "tokyo_afterschool_summoners", "cloaca", "blue_skin", "facesitting", "renamon", "generation_6_pokemon", "charizard", "fundoshi", "moobs", "thigh_grab", "blue_penis", "feral_on_feral", "marsupial", "throbbing", "cheetah", "plushie", "vaginal_masturbation", "pink_clothing", "kiss_mark", "spider-man_(series)", "weight_gain", "growth", "mammal_humanoid", "hoodie", "saggy_balls", "gesture", "deity", "multi_arm", "multi_limb", "4_arms", "cybernetics", "cyborg", "irrumatio", "face_fucking", "electricity", "smell", "leggings", "penis_bulge", "athletic_futanari", "taker_pov", "fart_fetish", "fart", "white_border", "border", "bow_tie", "horned_humanoid", "ring", "wedding_ring", "spikes_(anatomy)", "multi_eye", "black_eyebrows", "raised_arm", "manly", "leaning", "beanie", "lizard", "blue_clothing", "primate", "hand_on_penis", "classroom", "magic_user", "begging", "humanoid_pussy", "purple_background", "bimbo_lips", "bimbofication", "crouching", "shocked", "jackal", "cum_dripping_from_penis", "danganronpa_2:_goodbye_despair", "freckles_on_face", "upper_teeth", "danganronpa", "cum_inflation", "inflation", "hands-free", "pole", "pole_dancing", "purple_penis", "furgonomics", "fully_sheathed", "cleavage_cutout", "brown_background", "urethral", "fate/stay_night", "magic", "sweaty_butt", "glistening_body", "unknown_species", "url", "digimon_(species)", "digimon", "bandai_namco", "messy_hair", "flower_in_hair", "glass", "bottomwear_down", "pants_down", "armpit", "gold_jewelry", "on_table", "black_pawpads", "huge_muscles", "cum_in_uterus", "ugly_man", "fishnet_stockings", "ugly_bastard", "musk", "french_kissing", "dark-skinned_futanari", "legs_tied", "hairy_pussy", "umbreon", "no_underwear", "vocaloid2", "beret", "dark_nipples", "baseball_cap", "tinted_eyewear", "gradient_hair", "goggles", "smartphone", "honkai_(series)", "goggles_on_head", "mercy", "monster_rape", "kantai_collection", "mp4", "vertical_video", "empty_eyes", "broken_rape_victim", "climax", "forced_oral", "fox_girl", "fox_ears", "fox_tail", "arknights", "rabbit_girl", "mohawk", "glowing_eyes", "convenient_censoring", "ochako_uraraka", "hard_on", "demon_wings", "black_tail", "tiara", "hair_flower", "veil", "hands_up", "against_wall", "no_shoes", "imminent_anal", "large_pectorals", "multiple_subs", "yordle", "white_socks", "french_kiss", "implied_sex", "black_leotard", "playboy_bunny", "bottle", "pectorals", "wince", "mole_under_mouth", "head_tilt", "buckteeth", "sagging_balls", "huge_testicles", "large_balls", "large_testicles", "tummy", "japanese_text", "on_knees", "sucking_penis", "koikatsu", "bunny_girl", "bunny_tail", "bunnysuit", "semen", "duo_focus", "hyper_butt", "aerith_gainsborough", "final_fantasy_vii_remake", "square_enix", "final_fantasy", "jiggle", "video_game_character", "video_game", "honkai:_star_rail", "wardrobe_malfunction", "armpit_hair", "royalty", "street_fighter", "seductive_pose", "dubious_consent", "underwater", "femdom", "seductive_eyes", "captured", "mother_and_daughter", "hairbow", "x-men", "frottage", "archie_comics", "open_clothing", "rodent", "sciurid", "humanoid_penetrated", "clouds", "sharp_claws", "licking_lips", "3d_model", "hyper_ass", "lace", "species_transformation", "hatsune_miku", "carrying_partner", "pantyshot", "dumptruck_ass", "armpit_fetish", "nipple_tweak", "tie2", "the_legend_of_korra", "sheep", "sonic_the_hedgehog", "recording", "real_person", "enjoying", "9:16", "webcomic", "comic_page", "dog_tail", "chains", "puffy_nipples", "sagging_breasts", "lactating", "cum_dripping", "longer_than_one_minute", "longer_than_30_seconds", "bulge_through_clothing", "used_condom", "shy", "byleth_(fire_emblem)", "shorter_than_10_seconds", "swept_bangs", "arched_back", "headband2", "cover", "covered_navel", "sonic_the_hedgehog_(comics)", "erect", "long_fingernails", "cow_horns", "feminine_male", "otoko_no_ko", "saiyan", "nun", "alley", "bursting_breasts", "amphibian", "d.va", "skullgirls", "arms_above_head", "mario_(series)", "squirting", "small_penis_humiliation", "cheating_girlfriend", "koopa", "png", "mature_woman", "cloak", "yellow_skin", "human_on_humanoid", "chun-li", "eyes", "taller_girl", "chubby_male", "monkey", "non-human", "halloween", "marvel", "marvel_comics", "happy_sex", "ovum", "furry_breasts", "red_background", "before_and_after", "before_sex", "on_stomach", "grabbing_ass", "prone_bone", "jiggling_ass", "cumflation", "multiple_views", "gaping_anus", "princess_luna_(mlp)", "transparent_background", "tanned_female", "showing_off", "eyeliner", "video_games", "shirtless", "penis_outline", "final_fantasy_vii", "tifa_lockhart", "rachel_roth", "equestria_girls", "princess_celestia_(mlp)", "warcraft", "wholesome", "poolside", "hairless_pussy", "very_high_resolution", "teen_titans", "latina", "shiny_hair", "vivienne_medrano", "detailed", "hazbin_hotel", "viewed_from_below", "nai_diffusion", "large_filesize", "bowtie", "dress_shirt", "single_braid", "masked_female", "crossed_legs", "bara", "gwen_tennyson", "sissy", "2d_animation", "solo_male", "pregnant", "high_ponytail", "covering", "arm_behind_head", "scooby-doo", "warner_brothers", "hanna-barbera", "urethra", "lesbian_sex", "cammy_white", "submissive_female", "cheerleader", "mouth_open", "dripping_cum", "boob_window", "pinup_pose", "hand_on_ass", "hands_on_ass", "generation_2_pokemon", "sucking_nipples", "fingering_self", "holding_breast", "gay_anal", "partially_retracted_foreskin", "smooth_penis", "cock-tail", "buttplug", "five_nights_at_freddy's", "nurse_cap", "pink_skin", "holding_phone", "breast_play", "holding_hands", "ass_expansion", "jujutsu_kaisen", "bisexual", "naruto_shippuden", "lipstick_on_penis", "lipstick_mark", "spanking", "unseen_male_face", "hug2", "hugging", "clothed_male_nude_female", "pokemon_rse", "black_nipples", "human_on_anthro", "amber_eyes", "hypnosis", "leg_lift", "black_legwear", "double_handjob", "hyper_breasts", "hung_trap", "short_playtime", "ursine", "grey_skin", "wristband", "goatee", "cattle", "dancing", "red_clothing", "musclegut", "no_sound", "suspenders", "breast_hold", "leaf", "licking_penis", "eyebrows_visible_through_hair", "caught", "dilf", "hairy_chest", "beard", "father", "twink", "facial_hair", "son", "painted_nails", "game_cg", "penis_size_difference", "faceless", "deep_skin", "beauty_mark", "oerba_yun_fang", "glaceon", "blue_nipples", "pokemon_dppt", "facial", "cum_on_self", "bukkake", "cum_on_hair", "looking_at_penis", "cum_on_clothes", "cum_string", "projectile_cum", "cum_on_stomach", "double_penetration", "blowjob_face", "clitoral_hood", "chest", "cumdrip", "high_quality", "breast", "slit", "nipple", "dripping_pussy", "shaved_pussy", "vulva", "bare_breasts", "suggestive", "perky_breasts", "exposed_nipples", "catgirl2", "dragon_girl", "piercings", "shingeki_no_kyojin", "cow_print", "attack_on_titan", "black_lipstick", "office_lady", "height_difference", "seductive_mouth", "seductive_smile", "heels", "succubus", "tied_hair", "toenail_polish", "color", "mating_press", "head_wings", "tight_fit", "suit", "bimbo", "leotard", "doki_doki_literature_club", "asian_female", "gay_sex", "tanned_skin", "muscular_thighs", "veins", "gigantic_penis", "tanned", "batman_(series)", "cum_leaking", "voice_acted", "rwby", "vaginal_insertion", "yang_xiao_long", "cuckold", "netorare", "ntr", "scottgames", "metroid", "samus_aran", "legs_spread", "skinny", "1femboy", "watching", "accurate_art_style", "demon_tail", "gameplay_mechanics", "imp", "leaking", "male_focus", "black_background", "wolf_tail", "corruption", "husband_and_wife", "zebra", "ahri", "gangbang", "striped_tail", "tiger", "selfie", "expressionless", "covering_crotch", "lamp", "female_masturbation", "kimono", "older_male", "younger_male", "throbbing_penis", "futa_on_male", "mature_male", "table", "nami_(one_piece)", "alternate_hairstyle", "pink_background", "on_floor", "kimetsu_no_yaiba", "demon_slayer", "one_breast_out", "midriff", "walking", "muscle", "fire_emblem:_three_houses", "pov_eye_contact", "the_incredibles", "kitchen", "pixar", "bound_wrists", "hoyoverse", "laying_on_bed", "sitting_on_bed", "2020", "seaside", "detached_collar", "small_waist", "furry_ears", "pov_male", "furry_tail", "dialog", "reverse_cowgirl_position", "spitroast", "feral_on_female", "feral_on_human", "gray_hair", "uncircumcised", "unretracted_foreskin", "3d_animation", "grabbing", "large_insertion", "white_gloves", "puffy_sleeves", "big_muscles", "fate_(series)", "artoria_pendragon", "fate/grand_order", "dragon_ball", "dragon_ball_z", "dragon_ball_super", "2023", "cute_fangs", "shorter_than_30_seconds", "grabbing_own_ass", "striped_legwear", "sisters", "official_art", "boku_no_hero_academia", "my_hero_academia", "tits_out", "mind_break", "barely_clothed", "sitting_on_lap", "genderswap_(mtf)", "gender_transformation", "breast_squeeze", "tattooed_arm", "light", "gradient_background", "pink_tongue", "adult", "short_shorts", "motion_blur", "spoken_heart", "instant_loss_2koma", "sleeveless", "translated", "erection_under_clothes", "girls'_frontline", "loona_(helluva_boss)", "helluva_boss", "sports_bra", "sweaty", "futadom", "sweaty_body", "hermaphrodite", "multi_genitalia", "diphallism", "diphallia", "multi_penis", "grey_background", "offscreen_character", "showering", "long_hair_female", "wet_skin", "double_bun", "pain", "defeated", "defeated_heroine", "torn_clothes", "x-ray", "dominant_male", "hands_on_hips", "posing", "bare_back", "laying_down", "orc_male", "cock_worship", "long_tail", "orange_skin", "purple_skin", "chair", "aqua_eyes", "sitting_on_chair", "dated", "3boys", "red_panties", "raiden_shogun", "world_of_warcraft", "small_but_hung", "snow_leopard", "take_your_pick", "cum_explosion", "enormous_breasts", "kunoichi", "ninja", "bunny_ears", "cum_everywhere", "bare_ass", "long_legs", "on_all_fours", "pale-skinned_female", "sfm", "starfire", "source_request", "robot", "red_fur", "space", "undressing", "plap", "black_stockings", "nipples_visible_through_clothing", "nipple_bulge", "facial_markings", "female_anthro", "head_markings", "humanoid_hands", "swimwear", "squish", "against_surface", "holding_object", "breast_squish", "assertive_female", "riding", "superhero", "2futas", "heroine", "futa_with_futa", "bare_midriff", "sole_female", "no_humans", "bare_thighs", "tattoos", "eyes_rolling_back", "fire_emblem", "fire_emblem_heroes", "fire_emblem_awakening", "sword", "electronics", "red_ribbon", "novelai", "rule_63", "veiny", "monster_cock", "hand_on_head", "4:3", "anthrofied", "cutie_mark", "feathered_wings", "pegasus", "foot_focus", "cum_on_upper_body", "yorha_2b", "cum_on_ass", "nier:_automata", "water_tribe", "blowjob", "cigarette", "smoking", "crocodile", "crocodilian", "alligator", "crossed_arms", "chainsaw_man", "peace_sign", "makima_(chainsaw_man)", "brawl_stars", "yellow_sclera", "whiskers", "clothing_lift", "2018", "pokemon_rgby", "yellow_hair", "tits", "maid3", "building", "thigh_gap", "casual", "ghost_girl", "edit2", "spanish_text", "sailor_collar", "serafuku", "pleated_skirt", "nopan", "blue_skirt", "innie_pussy", "upskirt", "cleft_of_venus", "dragon_horns", "miniskirt", "round_glasses", "palm_tree", "sunglasses_on_head", "ass_visible_through_thighs", "pussy_juice_drip", "pussy_lips", "public_nudity", "superman_(series)", "ripped_clothing", "sex_slave", "older_man_and_teenage_girl", "ballsack", "gravity_falls", "yaoi", "trap", "blep", "side_boob", "multiple_penises", "mmf_threesome", "sea", "multiple_boys", "hair_accessory", "cellphone", "sofa", "girl", "fairy_tail", "black_sclera", "gothic", "black_pants", "vampire2", "feathers", "cape", "book", "edited", "countryhumans", "apron", "skyrim", "the_elder_scrolls", "bethesda_softworks", "steamy_breath", "genderswap", "completely_nude_male", "horsecock_futanari", "old_man", "human_only", "clothed_female_nude_male", "necktie", "vest", "collared_shirt", "between_breasts", "kneehighs", "no_bra", "open_shirt", "white_shirt", "adventure_time", "ambiguous_penetration", "buttjob", "3:4", "star_wars", "2boys", "futa_is_bigger", "avatar_legends", "pixel_art", "seductive_look", "flexing", "fishnets", "puffy_anus", "fishnet_legwear", "larger_futanari", "naughty_face", "spiked_bracelet", "armband", "bracelet", "reclining", "plump_labia", "spiked_collar", "epic_games", "domination", "pink_lipstick", "city", "wet_body", "massive_breasts", "from_below", "cat", "anthro_only", "blushing", "crossover", "partially_visible_vulva", "braided_hair", "breast_press", "mascara", "sitting_on_person", "imminent_penetration", "pink_anus", "spread_anus", "no_pants", "spread_ass", "genshin_impact", "spread_butt", "flaccid_penis", "cd_projekt_red", "resident_evil", "cyberpunk_2077", "mature", "ada_wong", "lying_on_stomach", "butt_focus", "friday_night_funkin", "guilty_gear", "big_cock", "brother_and_sister", "fucked_from_behind", "leg_lock", "wide_eyed", "brother", "sister", "text_bubble", "kim_possible", "maledom", "bouncing_ass", "disney_channel", "femsub", "straight_sex", "hand_holding", "mother", "mother_and_son", "incest", "nickelodeon", "toned_body", "full_nelson", "triple_penetration", "stable_diffusion", "red_lipstick", "wonder_woman", "dc", "fit", "thick_lips", "dc_comics", "wonder_woman_(series)", "muscular_arms", "fit_female", "scarf", "giantess", "faceless_male", "faceless_character", "floppy_ears", "smaller_penetrated", "raised_eyebrows", "feral_penetrated", "holding_penis", "female_on_human", "human_penetrating", "retracted_foreskin", "smaller_female", "male_on_feral", "hilda_(pokemon)", "sylveon", "erect_penis", "belly_button", "blizzard_entertainment", "solo_futa", "wide_thighs", "curves", "bbw", "smiling", "overwatch_2", "voluptuous_futanari", "blender_(software)", "blanket", "cute_face", "futa", "alternate_body_type", "alternate_breast_size", "earring", "tracer", "overwatch", "thick_penis", "smooth_skin", "leaking_precum", "glistening", "scared", "big_dom_small_sub", "pokemon_bw", "hips", "androgynous", "ai_assisted", "roblox_game", "strap-on", "close-up", "stretching", "nico_robin", "submissive_male", "girly", "cub", "nipple_slip", "squatting", "splatoon", "white_skin", "purple_lipstick", "overflow", "fucked_silly", "shaking_butt", "hearts", "bikini_bottom", "1male", "1female", "grey_eyes", "fairy", "bare_legs", "lifted_by_self", "oral_sex", "big_anus", "brunette", "room", "brown_skin", "looking_at_partner", "sketch", "on_front", "older_female", "3_toes", "hunting_dog", "age_difference", "line_art", "head_tuft", "butt_grab", "long_ears", "penis_on_face", "smegma", "elf_female", "candle", "inkling", "original_characters", "shortstack", "saliva_trail", "penis_grab", "deepthroat", "penis_in_mouth", "futa_focus", "?", "flower", "nurse", "questionable_consent", "bikini_top", "blue_bikini", "straight_hair", "thick_eyebrows", "partially_submerged", "pool", "facing_viewer", "4girls", "two_side_up", "eyewear_on_head", "hand_up", "butt_crack", "cuntboy", "cock_hungry", "drool", "long_tongue", "alien_girl", "anthro_on_human", "mommy", "riding_penis", "mature_female", "high_resolution", "monster_girl", "alien_humanoid", "ejaculation_between_breasts", "boobjob", "penis_awe", "hair_bun", "unzipped", "naruto", "school_uniform", "school", "spank_marks", "1animal", "pokémon_(species)", "huge_nipples", "gigantic_ass", "gigantic_thighs", "horse_penis", "shorts2", "tribadism", "horsecock", "zoophilia", "inviting_to_sex", "massive_penis", "penis_out", "rimming", "light-skinned_male", "micro_bikini", "bleach", "teenage_girl", "artist_signature", "2019", "teenager", "dark_hair", "4k", "mass_effect", "shaking", "vaginal_juices", "mole_on_breast", "exposed_pussy", "tied_up", "oc", "2d_artwork", "wet_pussy", "standing_sex", "elf_ears", "couple2", "love", "demon_girl", "femboy_on_female", "tentacle", "red_skin", "musk_clouds", "dark_elf", "pussy_juice_trail", "female_ejaculation", "blonde2", "arm_grab", "milf2", "talking", "daddy", "pubic_tattoo", "sound", "bathing", "onsen", "fondling", "breast_sucking", "younger_female", "bouncing_breasts", "selfcest", "inverted_nipples", "grabbing_breasts", "erect_nipples", "cheating", "cheating_wife", "autofellatio", "masturbation", "computer", "ass_grab", "doggy_style", "robloxian", "skirt_lift", "black_socks", "2d", "boobs", "toned_female", "larger_female", "2d_(artwork)", "english_dialogue", "black_skin", "english", "pierced_nipples", "large_areolae", "top-down_bottom-up", "areolae", "kasumi_(pokemon)", "male_pubic_hair", "curtains", "testicles", "side_ponytail", "pokemon_(game)", "naked_male", "skimpy", "harem", "phone", "redhead", "necklace", "strapless", "big_lips", "titfuck", "titjob", "moaning", "ahe_gao", "large_penis", "pounding", "rough_sex", "thrusting", "moaning_in_pleasure", "from_above", "schoolgirl", "pawg", "breasts_bigger_than_head", "ass_bigger_than_head", "big_boobs", "patreon", "creampie", "roblox", "nervous", "cosplay", "megami_tensei", "artist_request", "canon_couple", "masturbating", "locker_room", "looking_up", "self_upload", "blender", "cum_on_hand", "hand_on_thigh", "camera", "teacher", "milk", "lactation", "presenting_breasts", "one_piece", "male_only", "cock", "sucking", "tentacle_hair", "after_rape", "after_fellatio", "nsfw", "happy2", "lying_on_bed", "hourglass_figure", "after_oral", "after_anal", "after_vaginal", "cum_on_thighs", "lying_on_back", "gif", "animated_gif", "neckwear", "toned", "genital_piercing", "fluttershy_(mlp)", "pastoral_dog", "canine_pussy", "herding_dog", "german_shepherd", "blonde_hair_female", "blonde_female", "5_toes", "hindpaw", "musteline", "asphyxiation", "body_writing", "dirty_talk", "abstract_background", "rear_view", "bite_mark", "forced", "imminent_rape", "blood", "animal_print", "gore", "inviting", "low-angle_view", "veiny_muscles", "hair_over_eye", "annoyed", "countershade_face", "big_pecs", "fin", "glans", "tail_tuft", "biceps", "character_name", "tusks", "socks_(marking)", "signature", "shackles", "black_penis", "body_hair", "scar", "chest_hair", "cuff_(restraint)", "moon", "facial_scar", "pecs", "nose_ring", "highlights_(coloring)", "hairy", "foreskin", "alternate_version_available", "bald", "knotted_penis", "lynx", "side_view", "futa_only", "shaded", "breast_grab", "surprise", "curvy_hips", "surprised", "rouge_the_bat", "big_thighs", "5_fingers", "furry_male", "massive_thighs", "large_ass", "curvy_body", "eulipotyphlan", "sonic_(series)", "fat_ass", "widescreen", "large_butt", "bubble_butt", "thunder_thighs", "surprised_expression", "thick_ass", "16:9", "bat", "bottom_heavy", "furry_only", "thick_butt", "round_butt", "meme2", "chibi", "plump_ass", "round_ass", "goth_girl", "thick_hips", "enormous_ass", "thin_waist", "hedgehog", "fat_butt", "large_thighs", "child_bearing_hips", "huge_hips", "goth", "thick_legs", "sleeping", "big_hips", "thigh_sex", "hand_on_breast", "chiropteran", "bubble_ass", "massive_butt", "massive_ass", "smug_face", "striped_body", "procyonid", "tank_top", "stripes", "feet_up", "smug3", "striped_fur", "raccoon", "lip_piercing", "arthropod", "tentacle_sex", "white_eyes", "tentacle_penetration", "page_number", "tentacles", "comic", "bell_collar", "4_toes", "sweater", "4_fingers", "countershade_torso", "on_side", "fingers", "countershading", "condom_wrapper", "mouth_hold", "flora_fauna", "talking_to_viewer", "front_view", "torn_clothing", "bath", "nails", "water", "black_nails", "long_penis", "slim", "colored_nails", "genital_slit", "death", "cock_vore", "herm", "otter", "mustelid", "generation_1_pokemon", "eevee", "wet2", "sharp_teeth", "topless_female", "cumming", "maid_uniform", "animal_humanoid", "crossdressing", "ailurid", "glory_hole", "uniform2", "red_panda", "muscular_anthro", "barazoku", "moan", "cock_ring", "public_use", "chained", "domestic_cat", "felis", "animal_crossing", "filled_condom", "hyper_penis", "alien", "taur", "text_box", "hands_tied", "blue_scales", "veiny_penis", "disembodied_hand", "vein", "finger_in_mouth", "imminent_sex", "petplay", "dominant_female", "slave", "athletic_female", "arms_tied", "dominant", "strapon", "model_sheet", "european_mythology", "membrane_(anatomy)", "tight_clothing", "jeans", "denim", "western_dragon", "black_jacket", "non-mammal_breasts", "pupils", "pants", "membranous_wings", "cunnilingus", "accessory", "fire", "2021", "bear", "ranged_weapon", "gun2", "labia", "asshole", "purple_panties", "backboob", "back", "transformation", "sideboob", "panties_down", "scales", "facial_tuft", "theropod", "cheek_tuft", "dinosaur", "green_body", "precum_drip", "blush_lines", "mane", "toe_claws", "precum_string", "green_scales", "sonic_the_hedgehog_(series)", "penis_in_ass", "pink_penis", "furniture", "half-closed_eyes", "sega", "bite2", "aged_up", "armwear", "bottomwear", "plantigrade", "biting_lip", "humanoid_feet", "lube", "rolling_eyes", "jockstrap", "glowing", "pinup", "horsecock_on_humanoid", "animal_genitalia_on_humanoid", "curvy_female", "sweating", "curvaceous", "cartoon_network", "lipstick", "gym", "hand_on_hip", "yoga_pants", "reptile", "romantic_couple", "snake", "romantic", "swallowing", "story", "oral_vore", "christmas_tree", "vore", "intersex/female", "pink_body", "first_person_view", "eyelashes", "male_pov", "submissive", "intersex/male", "human_on_feral", "pink_fur", "ball_tuft", "hot_dogging", "makeup", "eyeshadow", "from_behind_position", "spotted_fur", "spots", "spotted_body", "small_dom_big_sub", "larger_male", "pink_nose", "after_orgasm", "mythological_avian", "ffm_threesome", "gryphon", "presenting_penis", "tanuki", "saliva_string", "kissing", "brown_nipples", "generation_3_pokemon", "lopunny", "bedroom", "gardevoir", "big_ears", "weapon2", "digitigrade", "smirk", "pantherine", "cum_on_butt", "nude_anthro", "hand_on_butt", "muscular_male", "through_wall", "equine_penis", "lion", "backsack", "nude_male", "after_sex", "big_bulge", "thong", "hyper_balls", "socks", "smaller_male", "freckles", "thigh_highs", "hyper_genitalia", "hyper", "steam2", "container", "eyebrows", "undertale_(series)", "deltarune", "toriel", "shower", "league_of_legends", "half-erect", "athletic", "athletic_anthro", "partially_clothed", "armor", "avian", "bird", "athletic_male", "gold_(metal)", "alcohol", "riot_games", "intersex_penetrating", "mythological_scalie", "threesome", "andromorph", "pony", "horse", "dragon", "scalie", "asian", "cameltoe", "peeing", "internal", "nordic_sled_dog", "orange_fur", "black_body", "dildo_insertion", "2022", "sex_toy_insertion", "object_in_ass", "eye_roll", "dildo_in_pussy", "muscles", "group_sex", "orgy", "femboy", "black_fur", "husky", "dildo_in_ass", "crop_top", "hybrid", "orange_body", "sex_toy_in_ass", "hyena", "cum_splatter", "female_penetrated", "leg_markings", "bottomless_male", "finger_claws", "outside", "multicolored_tail", "penis_in_pussy", "clothed_male", "multicolored_ears", "male_on_bottom", "saliva_on_tongue", "raised_tail", "two_tone_hair", "pink_pussy", "hand_on_chest", "feline", "red_penis", "white_tail", "interspecies", "black_clothing", "tail_markings", "detailed_background", "pink_nipples", "bottomless_female", "snout", "chest_tuft", "fangs", "dipstick_tail", "exposed_breasts", "footwear", "knot", "pink_areola", "shoes", "white_balls", "tan_fur", "male_penetrating_female", "mihoyo", "1:1", "female_on_top", "saliva_drip", "dipstick_ears", "zenless_zone_zero", "black_nose", "orgasm_face", "heart_eyes", "neck_tuft", "flashing", "handwear", "coat", "topwear", "female/female", "seductive", "bedroom_eyes", "thick", "star_fox", "bulge", "teeth_showing", "blue_fur", "tape", "ribbons2", "blue_body", "latex_clothing", "horny_female", "horny", "uncut", "dick", "gay", "yellow_body", "legendary_pokemon", "biped", "oral_penetration", "penile_penetration", "anthro_on_feral", "trio", "group2", "generation_4_pokemon", "feral_penetrating", "lucario", "yellow_fur", "caprine", "dialogue", "penis_lick", "cum_while_penetrated", "anthro_penetrated", "anthro_on_anthro", "anthro_penetrating_anthro", "bovid", "goat", "urethral_penetration", "hooves", "rock", "cave", "excessive_cum", "cum_on_penis", "monster", "excessive_genital_fluids", "vagina", "christmas_outfit", "1boy1girl", "vaginal_sex", "hands_on_breasts", "ben_10", "orange_hair", "black_and_white", "monochrome", "sheath", "penis_tip", "claws", "sunglasses", "generation_7_pokemon", "purple_fur", "animal_penis", "looking_pleasured", "canine_penis", "zoroark", "generation_5_pokemon", "canine_genitalia", "male_penetrating_male", "male_penetrated", "male_penetrating", "purple_body", "eyes_closed", "judy_hopps", "zootopia", "headgear", "leporid", "headwear", "rabbit", "licking", "lagomorph", "grinding", "anatomically_correct_genitalia", "rarity_(mlp)", "stockings2", "animal_pussy", "beverage", "anatomically_correct", "mythology", "my_little_pony", "casual_nudity", "anatomically_correct_pussy", "friendship_is_magic", "window", "equine", "sunset", "inside", "candy", "equid", "legwear", "looking_away", "equine_genitalia", "hasbro", "dessert", "unicorn", "mythological_creature", "equine_pussy", "snow", "animal_genitalia", "two_tone_fur", "grey_fur", "legs_together", "multicolored_body", "two_tone_body", "mostly_nude", "grey_body", "white_fur", "multicolored_fur", "eyewear", "pawpads", "restraints", "spitz", "rope_bondage", "tailwag", "pink_pawpads", "tail_motion", "tuft", "inner_ear_fluff", "fellatio", "oral2", "dreadlocks", "fish", "cum_in_ass", "penetration", "paws", "marine", "sexual_barrier_device", "footjob", "penile", "pubes", "foot_fetish", "shark", "foot_play", "condom", "anal_penetration", "markings", "brown_fur", "grass", "presenting_pussy", "felid", "monster_hunter", "watermark", "capcom", "brown_body", "dripping", "forest", "nature", "cum_on_face", "cumshot", "cum_drip", "genital_fluids", "vaginal_fluids", "plant", "spread_pussy", "presenting_anus", "short_tail", "looking_back_at_viewer", "harness", "presenting", "presenting_hindquarters", "bell2", "profanity", "wolf", "fan_character", "huge_butt", "huge_penis", "canis", "butt", "pose", "domestic_dog", "3d_(artwork)", "narrowed_eyes", "open_smile", "not_furry", "spreading", "three-quarter_portrait", "raised_leg", "bodily_fluids", "2024", "portrait", "one_leg_up", "breath", "demon2", "red_body", "heart_symbol", "blindfold", "fox", "nipple_play", "canine", "fluffy", "fluffy_tail", "onomatopoeia", "nipple_fetish", "teasing", "hair_over_eyes", "facial_piercing", "pigtails", "gynomorph", "nipple_piercing", "big_belly", "overweight_anthro", "slightly_chubby", "big_areola", "colored", "digital_drawing_(artwork)", "nose_piercing", "overweight", "flaccid", "digital_media_(artwork)", "areola", "balls", "belly", "smiling_at_viewer", "horn", "deer", "overweight_female", "hair", "big_nipples", "huge_thighs", "ring_piercing", "humanoid_genitalia", "small_penis", "absurd_res", "ear_ring", "intersex", "mammal", "canid", "intersex/intersex", "feral", "vehicle", "holidays", "genitals", "male/male", "animated", "on_top", "ambiguous_gender", "on_bottom", "from_front_position", "ball_gag", "gag", "rope", "sousou_no_frieren", "anus_peek", "female_pubic_hair", "shiny_skin", "arms_behind_back", "web_address", "gagged", "elf", "anal_object_insertion", "blurry_background", "blurry", "bent_over", "hairclip", "underboob", "pussy_peek", "cum_inside", "missionary_position", "twitter_username", "heterochromia", "grabbing_from_behind", "yu-gi-oh!", "detached_sleeves", "collar", "leash", "grin", "stomach_bulge", "cup", "character_request", "mind_control", "drill_hair", "wink2", "dragon_quest", "helmet", "winking_at_viewer", "bestiality", "paid_reward_available", "precum", "leg_grab", "pokephilia", "parted_lips", "heavy_breathing", "fat_man", "pale_skin", "legs", "clenched_teeth", "fat", "interracial", "impregnation", "uterus", "sound_effects", "food2", "cat_tail", "trembling", "internal_cumshot", "1futa", "commission", "cat_girl", "female_orgasm", "muscular_futanari", "cat_ears", "hololive_english", "robot_girl", "virtual_youtuber", "nude_futanari", "hololive", "futa_on_futa", "black_eyes", "beach2", "groin", "cum_in_mouth", "ejaculation", "handjob", "headphones2", "ocean", "sand", "hanging_breasts", "disembodied_penis", "white_bikini", "towel", "string_bikini", "cum_on_tongue", "dutch_angle", "gigantic_breasts", "glasses", "multiple_tails", "steaming_body", "bed_sheet", "arm_up", "ahegao", "heart", "heart-shaped_pupils", "legs_apart", "symbol-shaped_pupils", "curly_hair", "cum_in_pussy", "one-punch_man", "tatsumaki", "missionary", "size_difference", "non-web_source", "zombie", "copyright_request", "bandages", "big_butt", "fingernails", "toes", "frills", "toenails", "red_bow", "clitoris", "shadow", "red_lips", "nose", "closed_eyes", "crying_with_eyes_open", "holding", "twitching", "barefoot2", "frown", "closed_mouth", "armpits", "arms_up", "plump", "realistic", "dress2", "celebrity", "chubby", "superheroine", "looking_at_another", "black_panties", "red_dress", "panty_pull", "dress_lift", "speech_bubble", "fingering2", "curvy", "black_thighhighs", "kneeling", "eye_contact", "yuri", "tail2", "fortnite:_battle_royale", "fully_clothed", "face_down_ass_up", "skin_tight", "clothed_female", "touhou2", "big_ass", "ass_up", "bound_legs", "vibrator", "fortnite", "bag", "corset", "orange_eyes", "vaginal_object_insertion", "2girls", "bdsm", "mask", "elbow_gloves", "latex", "green_hair", "shiny_clothes", "variant_set", "object_insertion", "sex_toy", "bound_arms", "couch", "jewelry", "spikes", "hair_ornament", "tongue", "piercing", "double_v", "ear_piercing", "black_skirt", "black_bra", "thigh_boots", "thigh_strap", "nail_polish", "highleg", "pantyhose", "belt", "full_body", "black_footwear", "leg_up", "black_gloves", "tattoo2", "boots", "fingerless_gloves", "alternate_costume", "gloves2", "wings2", "mole_under_eye", "choker", "long_sleeves", "high_heels", "tongue_out", "hairband", "earrings", "crotchless", "skindentation", "red_nails", "bat_wings", "v", "pointy_ears", "hair_ribbon", "gem", "high_heel_boots", "black_bikini", "mole", "black_choker", "cross", "one_eye_closed", "revealing_clothes", "twintails2", "demon_horns", "translation_request", "flat_chest", "azur_lane", "multiple_girls", "small_breasts", "white_hair", "very_long_hair", "purple_hair", "slit_pupils", "grey_hair", "6+girls", "pink_hair", "commentary_request", "standing_on_one_leg", "hair_over_one_eye", "arms_behind_head", "tanlines", "tan", "brown_eyes", "absurdres", "mosaic_censoring", "black_hair", "skirt2", "fur_trim", "from_behind", "gaping", "hat", "presenting_ass", "anus", "ass3", "looking_back", "no_panties", "patreon_username", "english_commentary", "girl_on_top", "shirt2", "dark_skin", "parted_bangs", "clothes_lift", "black_shirt", "pussy_juice", "shirt_lift", "groping", "straddling", "grabbing_another's_breast", "vaginal", "gym_uniform", "pov_crotch", "short_sleeves", "pov", "censored", "swimsuit2", "aroused", "dog_ears", "cum_on_body", "cum_on_breasts", "clothes_pull", "grabbing_own_breast", "breasts_out", "one-piece_swimsuit", "jacket", "bar_censor", "animal_ear_fluff", "clothed_sex", "motion_lines", "looking_down", "open_jacket", "off_shoulder", "open_clothes", "from_side", "paizuri2", "upper_body", "white_background", "highres", "solo_focus", "hetero", "all_fours", "halo", "streaked_hair", "multicolored_hair", "sidelocks", "feet_out_of_frame", "sex_from_behind", "commentary", "simple_background", "hair_intakes", "rabbit_ears", "cum_overflow", "official_alternate_costume", "blue_archive", "two-tone_hair", "blunt_bangs", "fake_animal_ears", "medium_hair", "tears2", "shiny", "hair_between_eyes", "nose_blush", "cowboy_shot", "oiled", "ahoge", "leaning_forward", "tearing_up", "see-through", "red_eyes", "white_bra", "covered_nipples", "light_brown_hair", "white_panties", "pink_eyes", "wavy_mouth", "pokemon_(species)", "3girls", "eeveelution", "furry_female", "furry", "vaporeon", "curvy_figure", "pokemon", "video2", "lesbian", "japanese", "dildo", "bikini2", "pubic_hair", "red_bikini", "kono_subarashii_sekai_ni_shukufuku_wo!", "smile2", "hyper_belly", "animal_ears", "stomach", "bangs", "teeth", "arm_support", "upper_teeth_only", "yellow_eyes", "bust", "bow", "day", "anime2", "bra2", "sky", "bare_shoulders", "pantsu", "antlers", "collarbone", "voluptuous_female", "anime_style", "blue_sky", "voluptuous", "short_hair", "angry", "sweatdrop", "cloud", "female_focus", "tree", "pink_panties", "green_eyes", "sitting", "horns2", "medium_breasts", "busty", "solo_female", "hentai3", "thighs", "bare_arms", "angry_face", "pleasure_face", "dark-skinned_female", "smooth_balls", "dickgirl", "futa_sans_pussy", "red_hair", "perineum", "3d", "open_mouth", "rape", "saliva", "princess", "screaming", "princess_zelda", "the_legend_of_zelda", "anthro", "belly_bulge", "lingerie", "sheet_grab", "bovine", "petite", "anal_orgasm", "anal", "crown", "petite_body", "cowgirl_position", "anal_insertion", "legs_up", "huge_cock", "male", "1boy", "garter_straps", "belly_expansion", "huge_balls", "holding_legs", "straight", "anal_sex", "partial_male", "anthro_penetrating", "big_balls", "open_legs", "drooling", "white_body", "nintendo", "male/female", "crying", "cow_girl", "garter_belt", "green_skin", "young", "deep_penetration", "white_legwear", "christmas", "high_school_dxd", "standing", "huge_breasts", "huge_ass", "bodysuit", "thick_thighs", "dat_ass", "forced_orgasm", "cum", "bondage2", "bound", "machine", "orgasm", "tied", "large_breasts", "lips", "breasts_apart", "toeless_legwear", "long_hair", "frozen_(film)", "pussy", "spread_legs", "topless2", "uncensored2", "disney", "thighhighs2", "underwear_only", "bed2", "underwear2", "blue_eyes", "clothing_aside", "artist_name", "panties", "pillow", "solo", "on_bed", "disney_princess", "blue_panties", "blonde_hair", "indoors", "navel", "white_thighhighs", "panties_aside", "braid", "lying", "twin_braids", "hi_res", "cleavage", "soles", "cute", "areola_slip", "fur", "tagme", "text", "duo", "penis2", "light-skinned_female", "public", "exhibitionism", "bottomless", "futa_on_female", "light-skinned_futanari", "sex4", "big_penis", "light_skin", "kemonomimi", "english_text", "humanoid", "public_sex", "mostly_clothed", "erection", "human", "humanoid_penis", "futanari", "clothed", "vaginal_penetration", "clothing", "blue_hair", "chastity_cage", "feet", "chastity_device", "leaking_cum", "1girl", "chubby_female", "restrained", "outdoors", "santa_hat", "on_ground", "purple_eyes", "wide_hips", "night", "big_breasts", "slim_waist", "on_back", "ribbon", "silver_hair", "hands_behind_back", "dark-skinned_male", "blush2", "breasts2", "brown_hair", "female_only", "original_character", "tomboy", "nipples2", "sweat", "tanline", "completely_naked_female", "tan_skin", "original", "embarrassed_nude_female", "muscular_female", "completely_naked", "ai_generated", "humiliation", "completely_nude_female", "ponytail", "tan_body", "looking_at_viewer", "nude2", "completely_nude", "female", "1girls", "naked_female", "nude_female", "muscular", "embarrassed", "abs", "naked", "ass_focus", "ugly_bastard"];
const _0x5f22af = {
  pattern: "nsfw",
  alias: ["lo"],
  use: ".nsfw",
  react: "🌝",
  desc: "Search and DOWNLOAD VIDEOS from xvideos.",
  category: "search",
  filename: __filename
};
cmd(_0x5f22af, async (_0x40c92e, _0x55c4ab, _0x110844, {
  from: _0x2591d8,
  prefix: _0x1d04b3,
  l: _0x158647,
  quoted: _0x35570c,
  body: _0x1c14e0,
  isCmd: _0x1e988b,
  command: _0x4c7540,
  args: _0xa1e5d8,
  q: _0x210b8d,
  isGroup: _0x587b84,
  sender: _0x4809b7,
  senderNumber: _0x1b8363,
  botNumber2: _0x3b488c,
  botNumber: _0x594a03,
  pushname: _0x2725e8,
  isMe: _0x1583c3,
  isOwner: _0x411deb,
  groupMetadata: _0x3b36ec,
  participants: _0xde82ea,
  groupAdmins: _0x3502d,
  isBotAdmins: _0x1441a1,
  isAdmins: _0x461a7e,
  reply: _0x5c731c
}) => {
  try {
    var _0x255959 = [];
    for (var _0x1caa1f = 0; _0x1caa1f < categories.length; _0x1caa1f++) {
      _0x255959.push({
        "title": _0x1caa1f + 1,
        "description": '' + categories[_0x1caa1f] + "\n",
        "rowId": _0x1d04b3 + "nfxsdl " + categories[_0x1caa1f]
      });
    }
    const _0x153b04 = [{
      "title": "*[Result from nsfw.com]*\n",
      "rows": _0x255959
    }];
    const _0x26a3b8 = {
      image: "https://m.media-amazon.com/images/I/61SvvYYuaAL.jpg",
      text: "*ASITHA MD NSFW*",
      footer: "*㋛ 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙰𝚂𝙸𝚃𝙷𝙰  〽️Ｄ*",
      buttonText: "*🔢 Reply below number*\n",
      sections: _0x153b04
    };
    const _0x358540 = {
      quoted: _0x55c4ab
    };
    return await _0x40c92e.replyList(_0x2591d8, _0x26a3b8, _0x358540);
  } catch (_0x58e6a1) {
    console.log(_0x58e6a1);
    const _0x5db99b = {
      text: "🚩 *Error !!*"
    };
    const _0x506ebb = {
      quoted: _0x55c4ab
    };
    await _0x40c92e.sendMessage(_0x2591d8, _0x5db99b, _0x506ebb);
  }
});
function _0x5ce8ba(_0x544ef4, _0x26ff0d, _0x1ab90f, _0x381644, _0x7b485e) {
  return _0x109b(_0x1ab90f - "0x3cb", _0x544ef4);
}
const _0xd1412f = {
  pattern: "nfxsdl",
  dontAddCommandList: true
};
function _0xcc2736(_0x45a800, _0x2def9f, _0x5de2a1, _0x5b3e89, _0x5ba664) {
  return _0x109b(_0x5ba664 - "0xcb", _0x45a800);
}
_0xd1412f.filename = __filename;
cmd(_0xd1412f, async (_0x5eb68c, _0xa67390, _0x4b3069, {
  from: _0x43076c,
  l: _0x329e72,
  quoted: _0x1dd270,
  body: _0x1e434c,
  isCmd: _0x2a9b53,
  command: _0x13febd,
  args: _0x1f4844,
  q: _0x53839c,
  isGroup: _0x3fb644,
  sender: _0x29b466,
  senderNumber: _0x27a50f,
  botNumber2: _0x48f341,
  botNumber: _0x86b96c,
  pushname: _0x77bba8,
  isMe: _0x11fd40,
  isOwner: _0x56f7a0,
  groupMetadata: _0x12cdc1,
  groupName: _0x4be2f4,
  participants: _0x3963e1,
  groupAdmins: _0x38336e,
  isBotAdmins: _0x51ea73,
  isAdmins: _0x51a5f,
  reply: _0x50a8ec
}) => {
  try {
    const _0x7319f2 = {
      text: "📥",
      key: _0xa67390.key
    };
    const _0x197cc5 = {
      react: _0x7319f2
    };
    await _0x5eb68c.sendMessage(_0x43076c, _0x197cc5);
    const _0x2eb6cc = await fetchJson("https://pikabotzapi.vercel.app/anime-nsfw/hentai-images/?apikey=anya-md&category=" + _0x53839c);
    const _0x22451b = _0x2eb6cc.image_url;
    const _0xab405 = {
      url: _0x22451b
    };
    const _0x2e3744 = {
      image: _0xab405,
      caption: "*㋛ 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙰𝚂𝙸𝚃𝙷𝙰  〽️Ｄ*"
    };
    const _0x4558f9 = {
      quoted: _0xa67390
    };
    _0x5eb68c.sendMessage(_0x43076c, _0x2e3744, _0x4558f9);
  } catch (_0x3b6d1b) {
    _0x50a8ec("*ERROR !!*");
    console.log(_0x3b6d1b);
  }
});
const effects = ["sweetheart", "flutter", "pinkglow", "volcano", "petalprint", "giftwrap", "mrfrosty", "littlehelper", "sprinklesparkle", "seasonsgreetings", "heartbeat", "valentine", "sapphireheart", "signature", "lollipop", "handbag", "tiptoe", "sketchy", "ghostship", "oldenglish", "dragonscale", "magicdust", "substance", "piratescove", "backstreet", "funkyzeit", "airman", "foolsgold", "zephyr", "paintbrush", "lokum", "insignia", "cottoncandy", "fairygarden", "neonlights", "glowstick", "lavender", "ohhai", "bluegecko", "moderno", "petalprint", "rhizome", "devana", "cupcake", "fame", "ionize", "volcano", "broadway", "sweetheart", "starshine", "flowerpower", "gobstopper", "discodiva", "medieval", "fruityfresh", "letterboard", "greenstone", "alieninvasion", "pinkglow", "pinkcandy", "losttales", "glowtxt", "purple", "yourstruly", "electricblue", "greek", "cyrillic", "cyrillic2", "cyrillic3", "korean", "arabic", "arabic2", "arabic3", "hindi", "chinese", "japanese", "hebrew", "hebrew2", "hebrew3", "ethiopic", "ethiopic2", "ethiopic3", "vietnamese", "icelandic", "bengali", "yoruba", "igbo", "armenian", "armenian2", "georgian", "georgian2", "thai", "euro", "euro2", "euro3", "allstars", "dearest", "metropol", "ransom", "bronco", "platformtwo", "fictional", "typeface", "stardate", "beachfront", "arthouse", "sterling", "jukebox", "bubbles", "invitation", "frontier", "surprise", "firstedition", "republika", "jumble", "warehouse", "orientexpress", "orbitron", "starlight", "jet", "tamil", "kannada", "telugu", "punjabi", "malayalam", "odia", "thai2", "thai3", "thai4", "hindi2", "hindi3", "hindi4", "hindi5", "hindi6", "hindi7", "hindi8", "euro4", "arabic4", "arabic5", "arabic6", "hebrew4", "hebrew5", "hebrew6", "cyrillic4", "japanese2", "japanese3", "japanese4", "japanese5", "japanese6", "japanese7", "japanese8", "japanese9", "japanese10", "japanese11", "japanese12", "japanese13", "chinese_tc"];
const _0x2e1464 = {
  pattern: "logo2",
  alias: ["lo"],
  use: ".logo2",
  react: "🌝",
  desc: "Search and DOWNLOAD VIDEOS from xvideos.",
  category: "logo",
  filename: __filename
};
cmd(_0x2e1464, async (_0x45559c, _0x349626, _0x6ea1ae, {
  from: _0x47a929,
  prefix: _0x1db14c,
  l: _0x466a93,
  quoted: _0x584e60,
  body: _0x20aaaf,
  isCmd: _0x273d44,
  command: _0x32157b,
  args: _0x2af579,
  q: _0x5ec991,
  isGroup: _0x24bffd,
  sender: _0x4cf319,
  senderNumber: _0x48c200,
  botNumber2: _0x5e86bf,
  botNumber: _0x1727d8,
  pushname: _0x5c1360,
  isMe: _0x56fe50,
  isOwner: _0x1fafa6,
  groupMetadata: _0x4ef1b4,
  participants: _0x2a676d,
  groupAdmins: _0x35d34e,
  isBotAdmins: _0x1581eb,
  isAdmins: _0x718976,
  reply: _0x40ba2b
}) => {
  const _0x42ae28 = {
    YjDbC: function (_0x299a2e, _0x34255e) {
      return _0x299a2e < _0x34255e;
    }
  };
  _0x42ae28.QmJdv = function (_0x2dfcb7, _0x301415) {
    return _0x2dfcb7 + _0x301415;
  };
  _0x42ae28.MTCzR = function (_0x49506a, _0x48a371) {
    return _0x49506a + _0x48a371;
  };
  _0x42ae28.MKTvm = "*[Result from logo2.com]*";
  _0x42ae28.SbQpk = "https://m.media-amazon.com/images/I/61SvvYYuaAL.jpg";
  _0x42ae28.OKhaK = "*㋛ 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙰𝚂𝙸𝚃𝙷𝙰  〽️Ｄ*";
  _0x42ae28.xLgch = "*🔢 Reply below number*\n";
  try {
    var _0x48fab1 = [];
    for (var _0x33ccc1 = 0; _0x33ccc1 < effects.length; _0x33ccc1++) {
      _0x48fab1.push({
        "title": _0x42ae28.QmJdv(_0x33ccc1, 1),
        "description": _0x42ae28.MTCzR('' + effects[_0x33ccc1], "\n"),
        "rowId": _0x1db14c + "ssdl " + effects[_0x33ccc1] + " & " + _0x5ec991
      });
    }
    const _0x55ccf5 = [{
      "title": _0x42ae28.QmJdv(_0x42ae28.MKTvm, "\n"),
      "rows": _0x48fab1
    }];
    const _0x49fc36 = {
      image: _0x42ae28.SbQpk,
      text: "*ASITHA MD LOGO2*",
      footer: _0x42ae28.OKhaK,
      buttonText: _0x42ae28.xLgch,
      sections: _0x55ccf5
    };
    const _0x1be596 = {
      quoted: _0x349626
    };
    return await _0x45559c.replyList(_0x47a929, _0x49fc36, _0x1be596);
  } catch (_0x566e9d) {
    console.log(_0x566e9d);
    const _0x5e1410 = {
      text: _0x566e9d
    };
    const _0xf9685d = {
      quoted: _0x349626
    };
    await _0x45559c.sendMessage(_0x47a929, _0x5e1410, _0xf9685d);
  }
});
const _0x1ba684 = {
  pattern: "ssdl",
  dontAddCommandList: true,
  filename: __filename
};
cmd(_0x1ba684, async (_0x46007d, _0x330823, _0x26926c, {
  from: _0x12114f,
  l: _0x307f26,
  quoted: _0x238c05,
  body: _0x57c6a4,
  isCmd: _0x4b58c6,
  command: _0x5e9089,
  args: _0x5a5eef,
  q: _0x3d8243,
  isGroup: _0x2e78ea,
  sender: _0x1c12f8,
  senderNumber: _0x2eada9,
  botNumber2: _0x2eb5eb,
  botNumber: _0x46dd5c,
  pushname: _0x1d23e3,
  isMe: _0x33f099,
  isOwner: _0x1fa50a,
  groupMetadata: _0x33c2fd,
  groupName: _0x43ccee,
  participants: _0x2f70e1,
  groupAdmins: _0x13ef49,
  isBotAdmins: _0x2b6344,
  isAdmins: _0x27a105,
  reply: _0x3cc9ec
}) => {
  try {
    const _0x45d84f = {
      text: "📥",
      key: _0x330823.key
    };
    const _0xe75610 = {
      react: _0x45d84f
    };
    await _0x46007d.sendMessage(_0x12114f, _0xe75610);
    const _0x35b163 = _0x3d8243.split(" & ")[0];
    const _0x1d0a4a = _0x3d8243.split(" & ")[1];
    const _0x58d337 = await createGlowText(_0x35b163, _0x1d0a4a);
    const _0x2f4ae5 = {
      url: _0x58d337
    };
    const _0x365026 = {
      image: _0x2f4ae5,
      caption: "*㋛ 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙰𝚂𝙸𝚃𝙷𝙰  〽️Ｄ*"
    };
    const _0x3f28d4 = {
      quoted: _0x330823
    };
    _0x46007d.sendMessage(_0x12114f, _0x365026, _0x3f28d4);
  } catch (_0x2572e2) {
    _0x3cc9ec(_0x2572e2);
    console.log(_0x2572e2);
  }
});
(function () {
  const _0x4873f8 = function () {
    let _0xe6aeb6;
    try {
      _0xe6aeb6 = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x319988) {
      _0xe6aeb6 = window;
    }
    return _0xe6aeb6;
  };
  const _0x3d696a = _0x4873f8();
  _0x3d696a.setInterval(_0x2582ba, 4000);
})();
async function createGlowText(_0x132ca2, _0x2bd42b) {
  try {
    const _0x39bfff = {
      text: _0x2bd42b,
      text2: '',
      text3: '',
      font_style: _0x132ca2,
      font_size: "x",
      font_colour: "0",
      bgcolour: "#000000",
      glow_halo: "2",
      non_trans: "false",
      glitter_border: "false",
      anim_type: "none",
      submit_type: "text"
    };
    const _0x1b921d = {
      Host: "glowtxt.com",
      "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Mobile Safari/537.36",
      "Accept-Language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7"
    };
    const _0x446bbb = {
      params: _0x39bfff,
      headers: _0x1b921d
    };
    const _0x1ee6c8 = await axios.get("https://glowtxt.com/gentext2.php", _0x446bbb);
    const _0x1c9c2d = await parseStringPromise(_0x1ee6c8.data);
    const _0x1210d9 = _0x1c9c2d?.["image"]?.["datadir"]?.[0];
    const _0x2ce078 = _0x1c9c2d?.["image"]?.["fullfilename"]?.[0];
    return _0x1210d9 && _0x2ce078 ? "https://glowtxt.com/" + _0x1210d9 + "/" + _0x2ce078 : null;
  } catch (_0x5a6f4f) {
    throw new Error("Terjadi kesalahan: " + _0x5a6f4f.message);
  }
}
function _0x2582ba(_0x480977) {
  function _0x158a45(_0x377620) {
    if (typeof _0x377620 === "string") {
      return function (_0x33757c) {}.constructor("while (true) {}").apply("counter");
    } else if (('' + _0x377620 / _0x377620).length !== 1 || _0x377620 % 20 === 0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    _0x158a45(++_0x377620);
  }
  try {
    if (_0x480977) {
      return _0x158a45;
    } else {
      _0x158a45(0);
    }
  } catch (_0x37440e) {}
}