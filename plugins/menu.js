}
_0x2695f7.desc = "Get bot's command list.";
_0x2695f7.dontAddCommandList = true;
_0x2695f7.use = ".menu";
_0x2695f7.filename = __filename;
cmd(_0x2695f7, async (_0x59cc07, _0x2f7916, _0x140d96, {
  from: _0x16c557,
  prefix: _0x581823,
  pushname: _0x4fd6ff,
  reply: _0x30d7db
}) => {
  try {
    const _0x2ac43d = (await axios.get("https://gitlab.com/anukunu2000/asitha-md-db/-/raw/master/ditels/ditels.json")).data;
    let _0xec95bf = _0x2ac43d.imageurl;
    let _0x2d9f0a = _0x2ac43d.footer;
    const _0x420dcf = [];
    const _0x5661f9 = new Map();
    for (let _0x3ae950 of commands) {
      if (!_0x3ae950.dontAddCommandList && _0x3ae950.pattern && _0x3ae950.category.toLowerCase() !== "misc") {
        const _0x3466d7 = _0x3ae950.category.toUpperCase();
        if (!_0x5661f9.has(_0x3466d7)) {
          _0x420dcf.push(_0x3466d7);
          _0x5661f9.set(_0x3466d7, []);
        }
        _0x5661f9.get(_0x3466d7).push(_0x3ae950.pattern);
      }
    }
    var _0x2bcc87 = [];
    for (var _0x442397 = 0; _0x442397 < _0x420dcf.length; _0x442397++) {
      _0x2bcc87.push({
        "title": _0x442397 + 1,
        "description": _0x420dcf[_0x442397] + " MENU",
        "rowId": _0x581823 + "category " + _0x420dcf[_0x442397]
      });
    }
    const _0x1f1ce7 = {
      title: '',
      rows: _0x2bcc87
    };
    const _0x210b20 = [_0x1f1ce7];
    const _0x35cfa7 = {
      url: _0xec95bf
    };
    const _0x3a6e80 = {
      "caption": "\n🤩 *𝙃𝙀𝙇𝙇𝙊𝙒* " + _0x4fd6ff + "\n> 🌀 *ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ ᴀsɪᴛʜᴀ-ᴍᴅ* 🌀\n\n╭──────────────────━┈⊷\n│◦ ✗🤖ʙᴏᴛ ɴᴀᴍᴇ : *ᴀsɪᴛʜᴀ-ᴍᴅ™*\n│◦ ✗👤ᴏᴡɴᴇʀ ɴᴀᴍᴇ : *ᴀsɪᴛʜᴀ*\n│◦ ✗☎️ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ : \n│◦ ✗ *94743381623*\n│◦ ✗⏰ᴜᴘᴛɪᴍᴇ : " + runtime(process.uptime()) + "\n│◦ ✗💾ʀᴀᴍ : " + (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + "MB / " + Math.round(require("os").totalmem / 1024 / 1024) + "MB\n│◦ ✗💫ᴘʀᴇғɪx : " + _0x581823 + "\n╰──────────────────━┈⊷\n",
      "image": _0x35cfa7,
      "footer": _0x2d9f0a,
      "title": '',
      "buttonText": "*🔢 Reply to number *🤖",
      "sections": _0x210b20
    };
    const _0xc5fb99 = {
      quoted: _0x2f7916
    };
    return await _0x59cc07.replyList(_0x16c557, _0x3a6e80, _0xc5fb99);
  } catch (_0x16ac39) {
    _0x30d7db("*Error !!*");
    console.error(_0x16ac39);
  }
});
function determineHostname() {
  const _0x2968cf = os.hostname().length;
  if (_0x2968cf === 12) {
    return "replit";
  }
  if (_0x2968cf === 36) {
    return "heroku";
  }
  if (_0x2968cf === 8) {
    return "koyeb";
  }
  return os.hostname();
}
const _0xe71778 = {
  pattern: "category",
  dontAddCommandList: true
};
function _0x19ab04(_0x1c99a2, _0x1c0502, _0x2daca7, _0x5b8570, _0x18df46) {
  return _0x4dee(_0x5b8570 + 574, _0x1c0502);
}
_0xe71778.filename = __filename;
function _0x43d125(_0x415acb, _0x453f6c, _0xf94663, _0x8c53e6, _0x59cd52) {
  return _0x4dee(_0x415acb + 86, _0x8c53e6);
}
cmd(_0xe71778, async (_0x22dc2e, _0x29c59c, _0x41a27c, {
  from: _0x47fa9c,
  q: _0x5ac40a,
  pushname: _0x42e98f,
  reply: _0x4e7d42
}) => {
  try {
    const _0x52f9ef = (await axios.get("https://gitlab.com/anukunu2000/asitha-md-db/-/raw/master/ditels/ditels.json")).data;
    let _0xa352a0 = _0x52f9ef.footer;
    const _0x591fa2 = _0x5ac40a.trim().toUpperCase();
    if (_0x591fa2 === "MISC") {
      return;
    }
    let _0x17c6f9 = "*HELLO* " + _0x42e98f + "\n*╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」*\n*│◈ 𝚁𝙰𝙼 𝚄𝚂𝙰𝙶𝙴 -* " + (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + "MB / " + Math.round(require("os").totalmem / 1024 / 1024) + "MB\n*│◈ 𝚁𝚄𝙽𝚃𝙸𝙼𝙴 -* " + runtime(process.uptime()) + "\n*╰──────────●●►*\n\n*╭──────────●●►*\n*│⚜️ " + _0x591fa2 + " Command List:*\n*╰──────────●●►*\n\n";
    for (let _0x5bdd69 = 0; _0x5bdd69 < commands.length; _0x5bdd69++) {
      const _0x2211f4 = commands[_0x5bdd69];
      if (_0x2211f4.category.toUpperCase() === _0x591fa2) {
        _0x17c6f9 += "*╭──────────●●►*\n*│Command:* " + _0x2211f4.pattern + "\n*│Use:* " + _0x2211f4.use + "\n*╰──────────●●►*\n\n";
      }
    }
    const _0xa2d261 = commands.filter(_0x1e58bb => _0x1e58bb.category.toUpperCase() === _0x591fa2).length;
    _0x17c6f9 += "\n➠ *Total Commands in " + _0x591fa2 + "*: " + _0xa2d261 + "\n\n" + _0xa352a0;
    const _0x36538f = encodeURIComponent(_0x591fa2);
    let _0x3a5e76;
    let _0x9d2297 = await fetchJson("https://any-anime-api.vercel.app/v1/anime/png/1");
    let _0x50f0c9 = _0x9d2297.images[0];
    try {
      _0x3a5e76 = "https://api.popcat.xyz/welcomecard?background=https://minimalistic-wallpaper.demolab.com/?random&text1=" + _0x36538f + "&text2=Command%20List!&text3=%20&avatar=" + _0x50f0c9;
    } catch (_0x5484ee) {
      _0x3a5e76 = config.THUMB;
    }
    const _0x2914b9 = _0x3a5e76;
    const _0x459e0b = {
      url: _0x2914b9
    };
    const _0x1089c3 = {
      image: _0x459e0b,
      caption: _0x17c6f9
    };
    const _0x250ac0 = {
      quoted: _0x29c59c
    };
    await _0x22dc2e.sendMessage(_0x47fa9c, _0x1089c3, _0x250ac0);
  } catch (_0x48fb94) {
    _0x4e7d42("*Error !!*");
    console.error(_0x48fb94);
  }
});
function _0x101442(_0x105505) {
  function _0x671f32(_0x2dec2d) {
    if (typeof _0x2dec2d === "string") {
      return function (_0x34907f) {}.constructor("while (true) {}").apply("counter");
    } else {
      if (('' + _0x2dec2d / _0x2dec2d).length !== 1 || _0x2dec2d % 20 === 0) {
        (function () {
          return true;
        }).constructor("debugger").call("action");
      } else {
        (function () {
          return false;
        }).constructor("debugger").apply("stateObject");
      }
    }
    _0x671f32(++_0x2dec2d);
  }
  try {
    if (_0x105505) {
      return _0x671f32;
    } else {
      _0x671f32(0);
    }
  } catch (_0x276ddf) {}
}
