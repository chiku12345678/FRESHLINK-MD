(function (_0x1d850c, _0x31f9f6) {
  const _0x1d1a68 = _0x1d850c();
  while (true) {
    try {
      const _0x574ad2 = -parseInt(_0x2507(571, "0x4fc")) / 1 + -parseInt(_0x2507(745, "0x67")) / 2 + parseInt(_0x2507(1233, "0x19e")) / 3 * (-parseInt(_0x2507(1409, 0x504)) / 4) + parseInt(_0x2507(1417, 0x33d)) / 5 * (-parseInt(_0x2507(810, 0x3fb)) / 6) + -parseInt(_0x2507(576, "0x451")) / 7 + parseInt(_0x2507(1443, "0x409")) / 8 * (-parseInt(_0x2507(1109, 0x51a)) / 9) + parseInt(_0x2507(998, "0x29d")) / 10;
      if (_0x574ad2 === _0x31f9f6) {
        break;
      } else {
        _0x1d1a68.push(_0x1d1a68.shift());
      }
    } catch (_0x29375f) {
      _0x1d1a68.push(_0x1d1a68.shift());
    }
  }
})(_0x456a, 349048);
const _0x39e9c9 = function () {
  let _0x26bce4 = true;
  return function (_0xf0a5e0, _0xca4cb8) {
    const _0x1ea9eb = _0x26bce4 ? function () {
      if (_0xca4cb8) {
        const _0xc0bb7 = _0xca4cb8.apply(_0xf0a5e0, arguments);
        _0xca4cb8 = null;
        return _0xc0bb7;
      }
    } : function () {};
    _0x26bce4 = false;
    return _0x1ea9eb;
  };
}();
const _0x4d33fe = _0x39e9c9(this, function () {
  return _0x4d33fe.toString().search("(((.+)+)+)+$").toString().constructor(_0x4d33fe).search("(((.+)+)+)+$");
});
_0x4d33fe();
const _0x372c89 = function () {
  let _0x48243f = true;
  return function (_0x275c23, _0x3f9281) {
    const _0x29dff8 = _0x48243f ? function () {
      if (_0x3f9281) {
        const _0x5a51a5 = _0x3f9281.apply(_0x275c23, arguments);
        _0x3f9281 = null;
        return _0x5a51a5;
      }
    } : function () {};
    _0x48243f = false;
    return _0x29dff8;
  };
}();
(function () {
  _0x372c89(this, function () {
    const _0x1fb207 = new RegExp("function *\\( *\\)");
    const _0x1fc162 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
    const _0x572acd = _0x2da288("init");
    if (!_0x1fb207.test(_0x572acd + "chain") || !_0x1fc162.test(_0x572acd + "input")) {
      _0x572acd("0");
    } else {
      _0x2da288();
    }
  })();
})();
const {
  screenshotV1,
  screenshotV2,
  screenshotV3
} = require("getscreenshot.js");
const fileType = require("file-type");
const axios = require("axios");
const {
  cmd,
  commands
} = require("../lib/command");
(function () {
  let _0x4a518f;
  try {
    const _0x1736e9 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x4a518f = _0x1736e9();
  } catch (_0x71284e) {
    _0x4a518f = window;
  }
  _0x4a518f.setInterval(_0x2da288, 4000);
})();
const fs = require("fs");
const path = require("path");
const {
  getBuffer,
  getGroupAdmins,
  getRandom,
  removebg,
  h2k,
  isUrl,
  Json,
  sleep,
  fetchJson
} = require("../lib/functions");
const fetch = require("node-fetch");
const googleTTS = require("google-tts-api");
const {
  Sticker,
  createSticker,
  StickerTypes
} = require("wa-sticker-formatter");
const {
  tmpdir
} = require("os");
const Crypto = require("crypto");
const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
const ffmpeg = require("fluent-ffmpeg");
const sharp = require("sharp");
ffmpeg.setFfmpegPath(ffmpegPath);
async function videoToWebp(_0x5ce879) {
  const _0x55e595 = path.join(tmpdir(), Crypto.randomBytes(6).readUIntLE(0, 6).toString(36) + ".webp");
  const _0x2a1f33 = path.join(tmpdir(), Crypto.randomBytes(6).readUIntLE(0, 6).toString(36) + ".mp4");
  fs.writeFileSync(_0x2a1f33, _0x5ce879);
  await new Promise((_0x35e539, _0x2534cd) => {
    ffmpeg(_0x2a1f33).on("error", _0x2534cd).on("end", () => _0x35e539(true)).addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse", "-loop", "0", "-ss", "00:00:00", "-t", "00:00:05", "-preset", "default", "-an", "-vsync", "0"]).toFormat("webp").save(_0x55e595);
  });
  const _0x5cac4a = fs.readFileSync(_0x55e595);
  fs.unlinkSync(_0x55e595);
  fs.unlinkSync(_0x2a1f33);
  return _0x5cac4a;
}
function toAudio(_0x1da0ad, _0x22afb6) {
  return ffmpeg(_0x1da0ad, ["-vn", "-ac", "2", "-b:a", "128k", "-ar", "44100", "-f", "mp3"], _0x22afb6, "mp3");
}
function _0xfd0c40(_0x143527, _0x58775a, _0x46047e, _0x28f6ca, _0xa34dd6) {
  return _0x2507(_0x58775a - 0x2e, _0x46047e);
}
function toPTT(_0x207be7, _0x3e517f) {
  return ffmpeg(_0x207be7, ["-vn", "-c:a", "libopus", "-b:a", "128k", "-vbr", "on", "-compression_level", "10"], _0x3e517f, "opus");
}
function toVideo(_0x5e21f4, _0x3a1ae7) {
  return ffmpeg(_0x5e21f4, ["-c:v", "libx264", "-c:a", "aac", "-ab", "128k", "-ar", "44100", "-crf", "32", "-preset", "slow"], _0x3a1ae7, "mp4");
}
if (require("../package.json").version == "2.0.0") {
  console.log("decrypt karanna EPA pko");
}
const _0x3d6a79 = {
  pattern: "combine",
  desc: "Combine a sticker and photo",
  alias: ["stickerphoto", "merge"],
  category: "convert",
  use: ".combine <Reply to sticker & photo>",
  filename: __filename
};
cmd(_0x3d6a79, async (_0x45a24c, _0x182e0b, _0x129ea1, {
  from: _0x3bdc77,
  quoted: _0x3d88be,
  reply: _0x132b97
}) => {
  try {
    if (!_0x129ea1.quoted) {
      return _0x132b97("*Reply to a sticker and a photo to combine them!* ❌");
    }
    const _0x282d79 = _0x129ea1.quoted.message.stickerMessage;
    const _0x413c82 = _0x129ea1.quoted.message.imageMessage;
    if (!_0x282d79 || !_0x413c82) {
      return _0x132b97("*Reply to both a sticker and an image only ❌*");
    }
    const _0x4b0e81 = await _0x129ea1.quoted.download();
    const _0x131251 = await _0x129ea1.quoted.download();
    const _0x551ff8 = {
      input: _0x4b0e81,
      top: 0x32,
      left: 0x32
    };
    const _0x2328b1 = await sharp(_0x131251).composite([_0x551ff8]).jpeg().toBuffer();
    const _0x58cf93 = {
      image: _0x2328b1,
      caption: "*Sticker + Photo Combined 🎨*"
    };
    const _0xb3208 = {
      quoted: _0x182e0b
    };
    await _0x45a24c.sendMessage(_0x3bdc77, _0x58cf93, _0xb3208);
  } catch (_0x5753ff) {
    console.error(_0x5753ff);
    _0x132b97("*Error while combining sticker and photo ❌*");
  }
});
const _0x968221 = {
  pattern: "tts",
  react: "❄️",
  desc: "text to speech.",
  category: "convert",
  filename: __filename,
  use: ".tts <Im Asitha>"
};
cmd(_0x968221, async (_0xea58b, _0x496a0e, _0x55c012, {
  from: _0x31de99,
  quoted: _0x176de8,
  body: _0x5df50c,
  isCmd: _0x34c962,
  command: _0x2768f1,
  args: _0x1f7ef6,
  q: _0x2744a0,
  isGroup: _0xade7c6,
  sender: _0x55bb45,
  senderNumber: _0x34df0a,
  botNumber2: _0x7bc10b,
  botNumber: _0x44e82b,
  pushname: _0x42b1c3,
  isMe: _0xa78da0,
  isOwner: _0x6df24f,
  groupMetadata: _0x41396a,
  groupName: _0x30d5a3,
  participants: _0xca4ad6,
  groupAdmins: _0x2952f4,
  isBotAdmins: _0x4db0ca,
  isAdmins: _0x38dd70,
  reply: _0x594d28
}) => {
  try {
    if (!_0x2744a0) {
      return _0x55c012.reply("Please give me Sentence to change into audio.");
    }
    const _0x11a19f = {
      lang: "en",
      slow: false,
      host: "https://translate.google.com"
    };
    const _0x20bd16 = googleTTS.getAudioUrl(_0x2744a0, _0x11a19f);
    const _0x5212f5 = {
      url: _0x20bd16
    };
    const _0x2c3a8d = {
      audio: _0x5212f5,
      mimetype: "audio/mpeg",
      fileName: "ttsCitelVoid.m4a"
    };
    const _0x31dff1 = {
      quoted: _0x496a0e
    };
    return _0xea58b.sendMessage(_0x55c012.chat, _0x2c3a8d, _0x31dff1);
  } catch (_0x3ff199) {
    _0x594d28("*Error !!*");
    l(_0x3ff199);
  }
});
const _0x42e937 = {
  pattern: "ss",
  react: "⭕",
  alias: ["shot", "screen"],
  desc: "o",
  category: "other",
  use: ".ss <link>",
  filename: __filename
};
cmd(_0x42e937, async (_0x5dc7bd, _0x50ac99, _0x4af521, {
  from: _0x402ece,
  l: _0x5740d4,
  quoted: _0x9c7804,
  body: _0x17b04a,
  isCmd: _0x2baba1,
  command: _0xf48cfb,
  args: _0x19fbd4,
  q: _0x4a0181,
  isGroup: _0x3a4bbf,
  sender: _0x19d09d,
  senderNumber: _0x3051b9,
  botNumber2: _0x421efb,
  botNumber: _0x272b5b,
  pushname: _0x37380f,
  isMe: _0x43789f,
  isOwner: _0x1ceb2c,
  groupMetadata: _0x4b0e7b,
  groupName: _0x584f23,
  participants: _0x33470a,
  groupAdmins: _0x2d1366,
  isBotAdmins: _0x2d623d,
  isAdmins: _0x331e0e,
  reply: _0x28f72f
}) => {
  try {
    var _0x30b233 = await screenshotV3(_0x4a0181);
    const _0x37e591 = {
      url: _0x30b233
    };
    const _0x4162b0 = {
      image: _0x37e591,
      caption: "*ρσɯҽɾҽԃ Ⴆყ ϝɾҽʂԋʅιɳƙ ɱԃ🌿*"
    };
    const _0x409edc = {
      quoted: _0x50ac99
    };
    await _0x5dc7bd.sendMessage(_0x402ece, _0x4162b0, _0x409edc);
  } catch (_0x3b6689) {
    _0x28f72f("*Error !!*");
    _0x5740d4(_0x3b6689);
  }
});
const _0x4caffa = {
  pattern: "tomp3",
  react: "🔊",
  alias: ["tomp3"],
  desc: "convert to audio",
  category: "convert",
  use: ".toptt <Reply to video>",
  filename: __filename
};
cmd(_0x4caffa, async (_0xe0f59e, _0x4024b5, _0x3c80cf, {
  from: _0x40e142,
  l: _0x558d03,
  quoted: _0x427c38,
  body: _0x556320,
  isCmd: _0x11b4ae,
  command: _0x25dbb0,
  args: _0x448e15,
  q: _0x49961c,
  isGroup: _0x5b108e,
  sender: _0xf17f6f,
  senderNumber: _0xc01742,
  botNumber2: _0x4b0134,
  botNumber: _0x21fae9,
  pushname: _0xce414c,
  isMe: _0x3813da,
  isOwner: _0x92250,
  groupMetadata: _0x2f5fca,
  groupName: _0x4edb53,
  participants: _0x1b21fb,
  groupAdmins: _0x37567a,
  isBotAdmins: _0xdacf2d,
  isAdmins: _0x54c083,
  reply: _0xe28bb0
}) => {
  try {
    let _0x4c0105 = _0x3c80cf.quoted ? _0x3c80cf.quoted.type === "videoMessage" : _0x3c80cf ? _0x3c80cf.type === "videoMessage" : false;
    if (!_0x4c0105) {
      return await _0xe28bb0();
    }
    let _0x2d1cef = _0x3c80cf.quoted ? await _0x3c80cf.quoted.download() : await _0x3c80cf.download();
    let _0x59edb4 = await ffmpeg(_0x2d1cef, ["-vn", "-c:a", "libopus", "-b:a", "128k", "-vbr", "on", "-compression_level", "10"], "mp4", "opus");
    const _0x16bf37 = {
      audio: _0x59edb4.options,
      mimetype: "audio/mpeg"
    };
    let _0x4afbe2 = await _0xe0f59e.sendMessage(_0x3c80cf.chat, _0x16bf37, {
      "quoted": _0x3c80cf
    });
    const _0xa22c90 = {
      text: "🎼",
      key: _0x4afbe2.key
    };
    const _0x1e578a = {
      react: _0xa22c90
    };
    await _0xe0f59e.sendMessage(_0x40e142, _0x1e578a);
  } catch (_0x1f4479) {
    _0xe28bb0("*Error !!*");
    _0x558d03(_0x1f4479);
  }
});
const _0x4cf33b = {
  pattern: "toptt",
  react: "🔊",
  alias: [],
  desc: "convert to audio",
  category: "convert",
  use: ".toptt <Reply to video>",
  filename: __filename
};
cmd(_0x4cf33b, async (_0x3c305b, _0x1a21c7, _0x1ca6ef, {
  from: _0x24c30e,
  l: _0x35dfde,
  quoted: _0x54ba22,
  body: _0x541b31,
  isCmd: _0x17e0d6,
  command: _0x47e744,
  args: _0x3a3c9c,
  q: _0x6133b4,
  isGroup: _0x6e963b,
  sender: _0x1599ec,
  senderNumber: _0x3db3c7,
  botNumber2: _0x5ba8ac,
  botNumber: _0x6ef39,
  pushname: _0x482025,
  isMe: _0x417f7b,
  isOwner: _0x50e0e3,
  groupMetadata: _0x21af0d,
  groupName: _0x42a1d1,
  participants: _0x5b9a6f,
  groupAdmins: _0x50beca,
  isBotAdmins: _0x1bf2b2,
  isAdmins: _0x1e8e5c,
  reply: _0x5d46b3
}) => {
  try {
    let _0x2feeea = _0x1ca6ef.quoted ? _0x1ca6ef.quoted.type === "videoMessage" : _0x1ca6ef ? _0x1ca6ef.type === "videoMessage" : false;
    if (!_0x2feeea) {
      return await _0x5d46b3();
    }
    let _0x597d2a = _0x1ca6ef.quoted ? await _0x1ca6ef.quoted.download() : await _0x1ca6ef.download();
    let _0x1be626 = await ffmpeg(_0x597d2a, ["-vn", "-c:a", "libopus", "-b:a", "128k", "-vbr", "on", "-compression_level", "10"], "mp4", "opus");
    const _0x337030 = {
      audio: _0x1be626.options,
      mimetype: "audio/mpeg",
      ptt: true
    };
    let _0x3d3723 = await _0x3c305b.sendMessage(_0x1ca6ef.chat, _0x337030, {
      "quoted": _0x1ca6ef
    });
    const _0x36cbc0 = {
      text: "🎼",
      key: _0x3d3723.key
    };
    const _0x5f26cf = {
      react: _0x36cbc0
    };
    await _0x3c305b.sendMessage(_0x24c30e, _0x5f26cf);
  } catch (_0x410701) {
    _0x5d46b3("*Error !!*");
    _0x35dfde(_0x410701);
  }
});
const _0x3481ee = {
  pattern: "sticker",
  react: "🔮",
  alias: ["s", "stic"],
  desc: "Convert to sticker",
  category: "convert",
  use: ".sticker <Reply to image/video>",
  filename: __filename
};
cmd(_0x3481ee, async (_0x1c6c65, _0x4ebf9d, _0x4a08d6, {
  from: _0xb894dc,
  l: _0x29e7fb,
  quoted: _0x1c5e38,
  body: _0xa67ee8,
  args: _0x191cad,
  q: _0x518d0c,
  reply: _0x3145a0,
  pushname: _0x4e8b7f
}) => {
  try {
    const _0x479b96 = _0x4a08d6.quoted && _0x4a08d6.quoted.type === "viewOnceMessage";
    const _0x54961a = _0x4a08d6.quoted && (_0x4a08d6.quoted.type === "imageMessage" || _0x479b96 && _0x4a08d6.quoted.msg.type === "imageMessage");
    const _0x2a6d96 = _0x4a08d6.quoted && (_0x4a08d6.quoted.type === "videoMessage" || _0x479b96 && _0x4a08d6.quoted.msg.type === "videoMessage");
    const _0x520053 = _0x4a08d6.quoted && _0x4a08d6.quoted.type === "stickerMessage";
    if (_0x4a08d6.type === "imageMessage" || _0x54961a) {
      const _0x229bce = getRandom('');
      if (_0x54961a) {
        await _0x4a08d6.quoted.download(_0x229bce);
      } else {
        await _0x4a08d6.download(_0x229bce);
      }
      let _0x55bde5 = new Sticker(_0x229bce + ".jpg", {
        "pack": _0x4e8b7f,
        "author": "*ASITHA*",
        "type": _0x518d0c.includes("--crop") || _0x518d0c.includes("-c") ? StickerTypes.CROPPED : StickerTypes.FULL,
        "quality": 0x4b,
        "background": "transparent"
      });
      const _0x42b00e = await _0x55bde5.toBuffer();
      const _0xe382c = {
        sticker: _0x42b00e
      };
      const _0x2303dc = {
        quoted: _0x4ebf9d
      };
      return _0x1c6c65.sendMessage(_0xb894dc, _0xe382c, _0x2303dc);
    } else {
      if (_0x4a08d6.type === "videoMessage" || _0x2a6d96) {
        const _0x3c4c68 = getRandom('');
        if (_0x2a6d96) {
          await _0x4a08d6.quoted.download(_0x3c4c68);
        } else {
          await _0x4a08d6.download(_0x3c4c68);
        }
        let _0x5e2a5a = new Sticker(_0x3c4c68 + ".mp4", {
          "pack": _0x4e8b7f,
          "author": "*SHAMITHA*",
          "type": StickerTypes.FULL,
          "quality": 0x4b,
          "animated": true
        });
        const _0x760c8b = await _0x5e2a5a.toBuffer();
        const _0x14812c = {
          sticker: _0x760c8b
        };
        const _0xaa3013 = {
          quoted: _0x4ebf9d
        };
        return _0x1c6c65.sendMessage(_0xb894dc, _0x14812c, _0xaa3013);
      } else {
        if (_0x520053) {
          const _0x1ce586 = getRandom('');
          await _0x4a08d6.quoted.download(_0x1ce586);
          let _0x34c860 = new Sticker(_0x1ce586 + ".webp", {
            "pack": _0x4e8b7f,
            "author": "*ASITHA*",
            "type": _0x518d0c.includes("--crop") || _0x518d0c.includes("-c") ? StickerTypes.CROPPED : StickerTypes.FULL,
            "quality": 0x4b,
            "background": "transparent"
          });
          const _0x2ca829 = await _0x34c860.toBuffer();
          const _0x20df39 = {
            sticker: _0x2ca829
          };
          const _0x3e7f = {
            quoted: _0x4ebf9d
          };
          return _0x1c6c65.sendMessage(_0xb894dc, _0x20df39, _0x3e7f);
        } else {
          return await _0x3145a0("🔹 *Reply to an Image, Video, or Sticker!*");
        }
      }
    }
  } catch (_0x1073b9) {
    _0x3145a0("*Error!!*");
    _0x29e7fb(_0x1073b9);
  }
});
const _0x5f3940 = {};
function _0x5e82a7(_0x12556f, _0x25e011, _0x5678d7, _0xbb4c0f, _0xa7633c) {
  return _0x2507(_0xa7633c + 977, _0x5678d7);
}
_0x5f3940.pattern = "img2url";
_0x5f3940.react = "🔗";
_0x5f3940.alias = ["tourl", "imgurl", "telegraph", "imgtourl"];
_0x5f3940.category = "convert";
_0x5f3940.use = ".img2url <reply image>";
function _0x5b113e(_0x5322fd, _0x5c79e3, _0x3877bc, _0x217904, _0x2f6997) {
  return _0x2507(_0x2f6997 - "0x2ed", _0x217904);
}
_0x5f3940.filename = __filename;
cmd(_0x5f3940, async (_0x5cc76e, _0x545232, _0x3b5a5a, {
  reply: _0x37dc71,
  quoted: _0x2c70b6
}) => {
  try {
    const {
      image2url: _0x247044
    } = require("@dark-yasiya/imgbb.js");
    const _0xdb6c17 = _0x3b5a5a.quoted ? _0x3b5a5a.quoted.type === "viewOnceMessage" : false;
    const _0x2ba9f9 = _0x3b5a5a.quoted ? _0x3b5a5a.quoted.type === "imageMessage" || (_0xdb6c17 ? _0x3b5a5a.quoted.msg.type === "imageMessage" : false) : false;
    if (_0x3b5a5a.type === "imageMessage" || _0x2ba9f9) {
      const _0x20c448 = getRandom('');
      const _0x5eb532 = _0x2ba9f9 ? await _0x3b5a5a.quoted.download(_0x20c448) : await _0x3b5a5a.download(_0x20c448);
      const _0x4a6a54 = await fileType.fromBuffer(_0x5eb532);
      if (!_0x4a6a54 || _0x4a6a54.ext !== "jpg" && _0x4a6a54.ext !== "png") {
        return _0x37dc71("Only JPG or PNG images are supported!");
      }
      const _0x5628b8 = "./" + _0x20c448 + "." + _0x4a6a54.ext;
      await fs.promises.writeFile(_0x5628b8, _0x5eb532);
      const _0x41ce81 = await _0x247044(_0x5628b8);
      console.log(_0x41ce81);
      await _0x37dc71("🌐 URL Generated: \n" + _0x41ce81.result.url + "\n\n*㋛ 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙰𝚂𝙸𝚃𝙷𝙰  〽️Ｄ*");
      await fs.promises.unlink(_0x5628b8);
    } else {
      _0x37dc71("⚠️ Please reply to an image message.");
    }
  } catch (_0xeed68a) {
    console.error("Error:", _0xeed68a);
    _0x37dc71("❌ An error occurred while processing the image.");
  }
});
function _0x2507(_0xb3dbd6, _0x5fce3b) {
  const _0x4d33fe = _0x456a();
  _0x2507 = function (_0x39e9c9, _0x456ac0) {
    _0x39e9c9 = _0x39e9c9 - 208;
    let _0x2507c6 = _0x4d33fe[_0x39e9c9];
    return _0x2507c6;
  };
  return _0x2507(_0xb3dbd6, _0x5fce3b);
}
const _0x217dcb = {
  pattern: "convert",
  desc: "Convert an amount from one currency to another.",
  category: "convert",
  use: ".convert",
  react: "💱",
  filename: __filename
};
cmd(_0x217dcb, async (_0x328c65, _0x2964d8, _0x217127, {
  from: _0x51d2e3,
  quoted: _0x4ac5f0,
  body: _0x70e3ea,
  isCmd: _0x89325e,
  command: _0x9c4e3,
  args: _0x5a4dcd,
  q: _0x39274a,
  isGroup: _0x5ddd95,
  sender: _0x1a0472,
  senderNumber: _0x2d0c88,
  botNumber2: _0xf9934b,
  botNumber: _0x5ac258,
  pushname: _0x1bf5ed,
  isMe: _0xae8b9e,
  isOwner: _0x5eea72,
  groupMetadata: _0x402f90,
  groupName: _0x35edd6,
  participants: _0x40497e,
  groupAdmins: _0x5b4419,
  isBotAdmins: _0x29b18a,
  isAdmins: _0x2f7b7f,
  reply: _0x4d83c4
}) => {
  try {
    if (_0x5a4dcd.length < 3) {
      return _0x4d83c4("Usage: .convert <amount> <from_currency> <to_currency>");
    }
    const _0x4cc102 = _0x5a4dcd[0];
    const _0x398fcb = _0x5a4dcd[1].toUpperCase();
    const _0x456e1f = _0x5a4dcd[2].toUpperCase();
    if (isNaN(_0x4cc102)) {
      return _0x4d83c4("Please provide a valid amount.");
    }
    const _0x5a3438 = "https://api.exchangerate-api.com/v4/latest/" + _0x398fcb;
    const _0x1f7251 = await axios.get(_0x5a3438);
    const _0x1a9bfa = _0x1f7251.data;
    if (!_0x1a9bfa.rates[_0x456e1f]) {
      return _0x4d83c4("Conversion rate for " + _0x456e1f + " not found.");
    }
    const _0x1f1eef = (_0x4cc102 * _0x1a9bfa.rates[_0x456e1f]).toFixed(2);
    let _0x252bea = "💸_*Currency Conversion*_💸\n\n";
    _0x252bea += "💵 *Amount*: " + _0x4cc102 + " " + _0x398fcb + "\n";
    _0x252bea += "🔄 *Converted Amount*: " + _0x1f1eef + " " + _0x456e1f + "\n";
    _0x252bea += "📈 *Exchange Rate*: 1 " + _0x398fcb + " = " + _0x1a9bfa.rates[_0x456e1f] + " " + _0x456e1f + "\n\n        \n*㋛ 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙰𝚂𝙸𝚃𝙷𝙰  〽️Ｄ*\n        ";
    const _0x503a51 = {
      text: _0x252bea
    };
    const _0x5cee50 = {
      quoted: _0x2964d8
    };
    await _0x328c65.sendMessage(_0x51d2e3, _0x503a51, _0x5cee50);
  } catch (_0x2553fc) {
    console.log(_0x2553fc);
    _0x4d83c4("Error fetching data: " + _0x2553fc.message);
  }
});
const _0x22d258 = {
  pattern: "trt",
  desc: "🌍 Translate text between languages",
  react: "🌐",
  category: "other",
  use: ".trt < Si Mother >",
  filename: __filename
};
cmd(_0x22d258, async (_0xc8d3f, _0x14abb3, _0x12d96c, {
  from: _0x5befef,
  q: _0x3850e0,
  reply: _0x151585
}) => {
  try {
    const _0x14a17c = _0x3850e0.split(" ");
    if (_0x14a17c.length < 2) {
      return _0x151585("❗ Please provide a language code and text. Usage: .translate [language code] [text]");
    }
    const _0x1837e8 = _0x14a17c[0];
    const _0x4be12d = _0x14a17c.slice(1).join(" ");
    const _0x6362b = "https://api.mymemory.translated.net/get?q=" + encodeURIComponent(_0x4be12d) + "&langpair=en|" + _0x1837e8;
    const _0x30cf93 = await axios.get(_0x6362b);
    const _0x33c0e8 = _0x30cf93.data.responseData.translatedText;
    const _0x208d13 = "\n🌍 *Translation* 🌍\n\n🔤 *Original*: " + _0x4be12d + "\n🔠 *Translated*: " + _0x33c0e8 + "\n🌐 *Language*: " + _0x1837e8.toUpperCase() + "\n\n*㋛ 𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝙰𝚂𝙸𝚃𝙷𝙰  〽️Ｄ*";
    return _0x151585(_0x208d13);
  } catch (_0x3d3892) {
    console.log(_0x3d3892);
    return _0x151585("⚠️ An error occurred while translating the text. Please try again later.");
  }
});
const _0x575da6 = {};
function _0x456a() {
  const _0x838f37 = ["n() ", ".json", "combi", "jAZdC", "&lang", "?key=", "vQiPf", "angua", "ix කර", "TKfaD", "GdyOE", "XliAu", ".webp", "❌ An ", "imgur", "RzDtD", "jpeg", "tputO", "qWUBO", " emoj", "HvpYq", "RcALK", "wzokd", "LAqXV", "toStr", "lengt", "Ygufs", "mand", ".tran", "csZoQ", "rate-", "fKIja", "jMiQe", "Dozbs", "vide ", "e pro", "sIKRd", "tVYeF", "ogevq", "path", "vFoRd", "zwDmZ", "bined", "_filt", "YBycg", "d tex", "er an", "ePOxN", "ge on", "olor=", "bjlZK", "binar", "i2>* ", "YKjxI", "OYTJm", "Uaamn", "aJNYR", " එක m", "ction", "pyLgl", "QbYpz", "jCYfC", " 🎨*", "lkAZw", "to an", "jeEnN", "iKQAe", "gger", "GktzV", "ODvRb", "../se", "eftRT", "pDnqQ", "toBuf", "ෙකක් ", "teleg", "qLIDt", "xsCxK", "ueyQl", " fetc", "JRBKY", "r >", "Error", "IHQtf", "flZUs", "qLqTi", "fThJk", "icker", "jHeLi", "er co", "aBVTf", "sage", "slice", "tHYFn", "defau", "filen", "eech.", "711PlUWCL", "conve", "<Im A", "Conve", "zVIgi", "TMbBl", "setFf", "KVzQM", "DRWmF", "OJTHI", "𝙰𝚂𝙸𝚃𝙷", "mXzAX", "XzVmd", "rease", "OxXow", "iZNga", "y ima", "scale", "lter=", "r PNG", "crypt", "rxMps", "hpERu", "fKvDF", "nstru", "cDScQ", "AnOEM", "mpeg", "hange", "*Erro", "SpYJI", "NhHed", ".mp4", "toUpp", "lQpCm", "nseDa", "rkiES", "Bucfy", "LbCNr", "    ", "uQGjA", "< Si ", "msg", "ng th", "oEeFE", "getAu", "okfti", "ෙන් ල", "ng st", "jnRdc", "decry", "dUDDh", "bJasz", "erpho", "arsod", "*Stic", "QiGNG", "VFdlq", "Usage", "aYcWt", "pLtBN", "-c:a", "*Repl", "ileSy", "unt> ", "kBzBq", "msniY", "TbpOJ", "LcWMd", "ressi", "ext", "ghvwj", "type", "kuYQY", "qWToD", "FULL", "audio", "කර em", "ssage", "\n    ", "wIdSe", "\n\n   ", "EOuJo", "toFor", "sendM", "ZdsiB", "patte", "twOUd", "*㋛ 𝙿𝙾", "-ab", "libwe", "iw)':", "url <", "ansla", "LdIMk", "t-ffm", "SULlF", "t. Us", "tyWLy", "CgwTe", "gesMR", "iNNQF", "apply", "libop", "stick", "ZqomG", "zHhvZ", "@dark", "found", "MpXsv", "UcWaK", "sYFvV", "nceMe", "ckBwD", "SPbAm", ".ss <", "euse", ".stic", "iSaRh", "ories", "WVVsW", "zVqOw", "vebg ", "s you", "328299eYixOl", "n/jso", "ker +", "imgto", "json", "d.net", "/mpeg", "e) {}", "afLRh", "ESRBd", "cker ", "𝚆𝙴𝚁𝙳 ", "mat", "pUUHq", "Eznlh", "g the", "NhXou", "; [b]", "SZGic", "oad", "n (fu", "MGZeu", "get", "GqHhC", "Offbu", "catio", "MNxAr", "niait", "sNoxs", "des", "r!!*", ":-1:-", "VsusS", "join", " vide", "-pres", "aNPAy", "RQhEp", "remin", "UHkLm", "PFqDP", "ji1>+", "$]*)", "📈 *Ex", "log", "deo", "pXXcw", "cicQm", ".0, s", "kNiaC", "XvnwC", ".remo", "bZGbv", "FileS", "YLZGu", "Sente", "otrnh", "AGWgW", "ory", "hzTru", "cZvrV", " <amo", "kuoGz", "viewO", " to s", "CMWCk", "h)':f", "qewer", "addOu", "ectio", "oMTUr", "a-zA-", "gbb.j", "❗ Ple", "er to", " 〽️Ｄ*", "nLrjh", "caKas", "MeqnR", "loGuZ", "er=pn", "slow", "id.m4", "nlUDu", "[p] p", "jVdQP", "cxOtB", "tyy.d", "curre", "𝙸𝚃𝙷𝙰 ", "tourl", "uGQct", "hmCYr", "ZDWNv", "rroTS", "් සිද", "messa", "hoto>", "DhQiz", "(((.+", "o cha", "ge co", "Bkqeh", "yQjVk", "NbPgl", "MyKzT", "tTloZ", "HFWWw", "on_le", "ITIjC", "gCWXe", "pt ka", "EAJXi", "gXUio", "rsion", "pair=", "XfeRb", "mp4", "telVo", "ZOjAh", "\n🔠 *T", "Buffe", "fFGkh", "nt fr", "ase r", "YkrMR", "etrcq", "UiKjT", "libx2", "00:00", "wVmtA", "ion *", "ptt", "chang", "hing ", "Z_$][", "ption", "stic", "MTwFA", "bImJJ", "බා දෙ", "togif", "XvAyh", ",fps=", "oji ද", "QmWFw", "XZJne", "dCYQ", "RwVpf", "pko", "jVcQZ", ".togi", "lihSm", "HCBxZ", "https", "lied ", "SuEsS", "LUuys", "ker", "CZqcB", "Image", "slati", " a vi", "not a", "VpZdJ", "='min", "MYKby", "bdcaP", "sitha", ")+)+)", "r !!*", "entfi", "VJcnf", "fwzwJ", "other", "lcyHA", "20SSYxJn", "JKryp", "eqzwQ", "ECMKf", " stic", "raph", "nt=on", "FJRWa", "5EjzRHf", "CfKTf", "hXksp", "uMoYg", "FzCYZ", "ycmmY", "tts", "FNSps", "<from", "TUgNu", "ya/im", "a val", "qfevT", "MfzsV", "top", "e Rep", "om/v4", "ncy>", " <to_", ".imoj", "WmtQK", "reply", "FnkAI", "errDR", "FDrUD", "com", "7976DeCens", "XoUfr", "OUNot", "න්න!", "fffff", "qXUwc", "i.exc", "abyFZ", "lated", "nto a", "GvylD", "fer", "min'(", "pKWQq", "-vsyn", "opus", "getsc", ".topt", "HaIMi", "LPCXc", "gReAX", "qTCNG", "mUrSF", "UrPlL", "peg", "HozRA", "sharp", "trans", "ibsrS", "BEgvv", "inclu", "NctMO", "GWTQL", "const", "sBevu", "er/ff", "ly to", "kqWAR", "toFix", "A MD", "ge*: ", "ycgAi", "error", "JOhEU", "EyuNX", "ogle.", "both ", "ZgaiL", "ing", "Yzxod", "b/fun", "Objec", "LKpDr", "WgOFF", "azJhu", "strin", "LEXSX", "o a v", ".comb", "ync", "WeqXM", "try a", "o to ", "𝙾𝚆𝙴𝚁𝙳", "eo>", "KUHEU", "ZjisK", "ALexP", "PqeVM", "nspar", "BbExP", "මෙම e", "readU", "glTKH", "eply ", "qrTOY", "a sti", "shTCV", "OQMBk", "RMnLf", "\\( *\\", "resul", "and a", "xica.", "කණගාට", "nor.g", "SVWeB", "gglzP", "e tex", "DosXi", "qYUZa", "Oemse", "sroil", ".img2", "gifPl", "mOWNk", "tDgND", "ease ", "xqkld", "-ar", "mAMPD", "plit ", "-ss", "ompon", "SzyOr", "t bet", "XWFbS", " [lan", "dgoaO", "://tr", "🔤 *Or", "guage", "g_tra", "ses", "ආකාරය", "<repl", "IJOgW", "kBnMC", "rrenc", "ath", "xwzrD", "en|", "rency", "iDEop", "ZqBzK", "eo, o", "lang", "KMXgH", "rvgFR", "Reply", "DlTiq", "imoji", "IaErB", "&cont", "XpJVv", "tchen", "ebg", "EnhlT", ": \n", "mYDvB", "text ", "yHwdS", "rZWrI", "WTYYk", "GRgCf", "aac", "e a l", "../pa", "2.0.0", "JwRJj", "rXUFA", ".trt ", "OOcVc", "It co", "ount.", "alett", "sLOKT", "uUrFx", "test", "yOOMI", "WABtc", "init", "QPOic", "දෝෂයක", "gify", "ZdfBO", "usPXi", "ctor(", " ❌*", "mSFlL", "CCKsW", "xzgkQ", " audi", "ame", "gKpeM", "sage.", "text", "while", "o an ", "fBelp", "cDcUu", "tsPkv", "File", "oxeXB", "gDDuM", "downl", "aybac", "cnfKd", "rlxfJ", "rred ", "bnTsX", "../li", "nohAp", "le co", "de an", "vmega", "rzdDS", "WCLRx", "y to ", "ase p", "toIPB", "qGaKL", "[a][b", "e-tts", "ASITH", "ev/up", "reens", "FpWsc", "_v5&q", "DwRRf", "gain ", "fcKlG", "gtRnd", "prhUX", "tuDsY", "Stick", "RaRFt", "com/v", "spare", "AetHN", "om on", "] pal", "toptt", "Vbhii", "FOkNC", "tQtLe", "chat", "AQimK", "\n*㋛ 𝙿", "oyhZC", "sjeye", "YKwFH", "MsyJK", "ly ❌*", "RiCDF", "is\")(", "tting", "rt to", "FSFXL", "VHIrl", "sXeyt", "gseRD", "url", "EOSMb", "mWGPH", "on*_💸", "JNSYm", "AIzaS", "iNzUh", "qjVFV", "ttsCi", "ated*", "ert", "fromB", "ween ", "serve", "TBsOB", "TftQW", "TAeDG", "BbdJK", "data:", "compo", " for ", "e me ", "ywgpj", "image", "nctio", "ZexNw", "hAoNR", "spect", "ne a ", "react", "PihIQ", "LfGsk", "qnDqB", "fVMPm", "ruzDn", "-vbr", "vFqMc", "BEsHm", "NrXah", "oQutq", "oseui", "y Con", "OjMzM", "*(?:[", "⚠️ Ple", "ruyYC", "Hupiz", "uAXxq", "bDFOk", "QtyHf", "fEBmM", "𝙱𝚈 𝙰𝚂", "categ", ":05", " not ", "-vf", "apis.", "zmGGY", "pmiOh", "t <Re", " occu", "rated", "XveJs", ":tran", "api.c", "o vid", "ikdts", "enNhI", "e cur", "dbqPy", "bmhui", "xJyWg", "0-9a-", "pygfn", "img2u", "HIYNk", "media", "UykDm", "* 🌍\n\n", "gBiwM", "r rep", "ent&c", "JPG o", " amou", "YfjZJ", "𝙿𝙾𝚆𝙴𝚁", "zWRCO", "zcSnQ", "SsLTZ", "ryMYi", "array", "bQLim", "czhCD", " and ", "-c:v", "r Sti", "rn th", "MEXci", "erDfu", "file-", "zrBBO", "ages", " Phot", "ite@0", "ker <", "Qlsux", "state", "-vcod", "pojUR", "VkphN", "Pleas", "yDLOb", "gBscm", "count", "hot.j", "128k", " to i", "GxvHI", "ffytG", "ticke", "KpFko", "vCMyU", " Gene", " imag", "XQSIr", "chain", "88030smrKHL", "capti", "RFYoi", "rsbVi", "ne th", "2376633ExbHiV", "axios", "cykkD", "roact", "LorYJ", "nvert", "🔄 *Co", "2/fea", "gxgFW", "Goxgv", "ZGaVS", "fluen", "vtDnv", "-an", "ZJxMz", "mage/", " proc", "ransl", "tVTcH", "nce t", "ation", "fWzsP", "_tran", "qjiIs", "rt an", "to sp", "bwJGq", "scree", "readF", "umNPY", "sIzHY", "osNWe", "use", "JlBgq", "_curr", " to a", "𝚂𝙸𝚃𝙷𝙰", "vTBSr", "ු විය", ": .co", "iABFx", "zRoOe", "versi", "e mes", "BqtVp", "xYiko", "JnPFk", "fetch", "hHfqW", "OpAUA", "hfBaF", "GweVf", "--cro", "or=wh", " 𝙱𝚈 𝙰", "Only ", "NHXVA", "CikDo", "alias", "\n🌐 *L", "IbOqw", "origi", "appli", "NJwJQ", "YHnce", "CROPP", "💵 *Am", "ount*", " (tru", "bKANi", "pJfTN", "o=dec", "hHPJx", "]; [a", "RWiQo", "*ASIT", "nge i", "iOprH", "key", "vHNom", ", Vid", "eFvUz", "320,i", "\n🌍 *T", "ive", "em!* ", "ුයි, ", "mqRIH", "IXmhP", "qkiGb", "porte", "ANvDN", "is to", "input", "ency>", "iQSYv", "znULG", "mNEZG", "JaZPi", "-vn", " tran", "mp3", "uotXA", "𝙳 𝙱𝚈 ", "-loop", "44100", "EpOpn", "TiyYs", "POST", "EMlGt", "age: ", "-api", "\n\n*㋛ ", " code", "funct", "nnFvp", "trt", "ine <", "mDomI", "full", "OJbmu", "merge", "ion f", "PcPjW", "ge>", "bSsPt", "left", "d pho", "sBjwg", "FfPVV", "ECtnt", "OWYYn", "muWtU", "rando", "nal_a", "NHrEJ", "o Com", "f <Re", "from", "LywhC", "-ac", "fileN", "IWAvW", "://te", "pUbIA", "-yasi", "shot", "LHFii", "Rrtcw", "yLrxL", "emory", "-form", "eg-in", "KyTFR", "XBIFQ", "Messa", "OnKEd", "ent=p", "dioUr", "ThKKY", "oogle", "r & p", "NQJzE", "stall", "Oknho", " EPA ", "n=emo", "-crf", "IENZx", "158152KazQhd", "xt]", "zA-Z_", "gjHAT", "UWRUR", "_rati", "xXtHm", "terva", "pKqmi", "essag", "ijwDE", "ZQfeT", "cker!", "nslat", "WEvzN", "e sup", "later", "ideo>", "NMVYH", "://le", "optio", "OCgTr", "WtcyJ", "lwsVz", "\\+\\+ ", "ailed", "NAktK", "IEvvk", "OXSXR", "id am", "pHydI", "yAyim", "rovid", "debu", "NOlru", "ZDRPP", "atter", "base6", "ype", "aLpVD", "IntLE", "bVhEg", "wa-st", "mpegP", "retur", "link>", "fuBRl", "     ", "🚩 Thi", "euZyf", "MGKUw", "TEvvS", "imix ", "promi", "actio", "IUJQF", "unlin", "vlpVD", " phot", "i2>*", "r whi", "RTPss", "YwteT", "NsACr", "n ima", "3253938OQbxMs", "b/com", "mydVa", "-b:a", " = ", "zJNoQ", ".tts ", "aCtSq", "AvmIs", "searc", "e giv", "emQrr", "lViZJ", "AfDdk", "කරුණා", "mbXGG", "Combi", "GPGPD", "high&", "NkFWV", "xqCaj", "AXKEm", "kSync", "vel", "KgxOk", "save", "e Rat", "\"retu", "fIwwc", "uffer", "wUvfG", "  〽️Ｄ*", "mimet", "xlPHK", "call", "oQica", "ji_ki", "jpg", "VrEKI", "pack", "gRiKb", "🌐 URL", "kLXfv", "JVQGu", "⚠️ An ", "IoOBY", "ොහැක.", "://ap", "video", ".jpg", "@ffmp", "vgdwb", "-comp", "/late", "quote", "yLrpx", "slate", "bLXcE", "iCDSC", "i.mym", "SFVFV", "Mothe", "0:320", "💸_*Cu", "<emoj", " rate", "f [p]", "photo", "rates", "etteg", "igina", "agUzD", "ed Am", "mojis", "*<emo", "Text", "1:col", "st/", "pmjoU", "nothe", "kyyev", "PUwHn", "YBSgU", "umTZn", "uhAli", "pJHyv", "pJQVi", "(320,", "HA*", "mbini", "erCas", ":00", "DIErT", "end", ".conv", "xALad", "en=re", "langu", "🔹 *Re", "nsLbg", "te.go", "mix", "mdUwS", "site", "oYPJy", "l*: ", "qaygJ", "RNUeY", "qvYRD", "es ar", "orce_", "ckage", "ker.", "node-", "RrFSU", "DDOFZ", "SoWcc", "desc", "udio.", "host", "𝙰  〽️Ｄ", "jvfxG", "VohIm", "] [te", "nqDoa", "remov", "ULzCj", "zWHqJ", "webp", "paren", "zMoUl", "swTPq", "ad=32", "nvers", "ructo", "tTbJy", "&coll", "s two", "s is ", "KtEZu", "buffe", "cheer", "AAQlg", "ZkmHX", "AkvqP", "FXZbH", "respo", "bOmnL", "erMes", "mkNWd", "data", "dDCRt", "t. Pl", "essin", "RRYwJ", "MdHjE", "FoOSO", "rRmxe", "ranna", "ncy_c", "ueSRt", "tomp3", "googl", "oebPp", "cyXsu", "dvuLc", "/get?", "15, p", "e*: 1", "න්න න", "UkJrr", "rJKVY", "oalar", "{}.co", "kqfUd", "STiaI", "autho", "OPzaj", "VRMhM", "SuMKI", "ply t", "TEkos", "cGgzN", "sNlTX", "lAeCv", "PwWvF", "VkGJq", "F_FXV", "20239240ioTsmy", "split", "🌍 Tra", "write", "BwPPr", "tured", "setIn", "png", "OZGXu", "GzItt", "mByte", "FOtPp", "nWwLx", "YuIqr"];
  _0x456a = function () {
    return _0x838f37;
  };
  return _0x456a();
}
_0x575da6.pattern = "removebg";
_0x575da6.react = "👻";
_0x575da6.alias = ["rb"];
_0x575da6.category = "convert";
_0x575da6.use = ".removebg <reply image>";
_0x575da6.filename = __filename;
cmd(_0x575da6, async (_0x3f93a3, _0x302b09, _0x2e6b5b, {
  from: _0x3167f7,
  reply: _0x1d7b74,
  quoted: _0x63764a
}) => {
  try {
    const {
      image2url: _0x2b80d2
    } = require("@dark-yasiya/imgbb.js");
    const _0x1caa9c = _0x2e6b5b.quoted ? _0x2e6b5b.quoted.type === "viewOnceMessage" : false;
    const _0x1031a2 = _0x2e6b5b.quoted ? _0x2e6b5b.quoted.type === "imageMessage" || (_0x1caa9c ? _0x2e6b5b.quoted.msg.type === "imageMessage" : false) : false;
    if (_0x2e6b5b.type === "imageMessage" || _0x1031a2) {
      const _0x454cac = getRandom('');
      const _0x3012cf = _0x1031a2 ? await _0x2e6b5b.quoted.download(_0x454cac) : await _0x2e6b5b.download(_0x454cac);
      const _0x38b16d = await fileType.fromBuffer(_0x3012cf);
      if (!_0x38b16d || _0x38b16d.ext !== "jpg" && _0x38b16d.ext !== "png") {
        return _0x1d7b74("Only JPG or PNG images are supported!");
      }
      const _0x5c6a4a = "./" + _0x454cac + "." + _0x38b16d.ext;
      await fs.promises.writeFile(_0x5c6a4a, _0x3012cf);
      const _0x5a850f = await _0x2b80d2(_0x5c6a4a);
      const _0x5d06e7 = await removebg(_0x5a850f.result.url);
      const _0x367342 = {
        url: _0x5d06e7
      };
      const _0x1c701a = {
        image: _0x367342,
        caption: "*ρσɯҽɾҽԃ Ⴆყ ϝɾҽʂԋʅιɳƙ ɱԃ🌿*"
      };
      const _0x5705df = {
        quoted: _0x302b09
      };
      await _0x3f93a3.sendMessage(_0x3167f7, _0x1c701a, _0x5705df);
      await fs.promises.unlink(_0x5c6a4a);
    } else {
      _0x1d7b74("⚠️ Please reply to an image message.");
    }
  } catch (_0x31b390) {
    console.error("Error:", _0x31b390);
    _0x1d7b74("❌ An error occurred while processing the image.");
  }
});
async function createStickerFromURL(_0x444007, _0x50f76d) {
  try {
    const _0x3a2565 = await fetch(_0x444007);
    const _0x3e0f66 = await _0x3a2565.buffer();
    const _0x3f7670 = {
      pack: "ASITHA MD",
      author: _0x50f76d,
      type: "full",
      categories: ["🌟"]
    };
    const _0x396cf4 = new Sticker(_0x3e0f66, _0x3f7670);
    return await _0x396cf4.toBuffer();
  } catch (_0x3d3a50) {
    throw new Error("Sticker conversion failed");
  }
}
const _0x48f9ed = {
  pattern: "imojimix",
  react: "✨",
  alias: ["im"],
  desc: "It converts two emojis to sticker.",
  category: "convert"
};
function _0x3a1c64(_0x494361, _0x5263ce, _0x45c1cc, _0x5a78a7, _0x2f6729) {
  return _0x2507(_0x45c1cc + 564, _0x5a78a7);
}
_0x48f9ed.use = ".imojimix *<emoji1>+<emoji2>*";
_0x48f9ed.filename = __filename;
cmd(_0x48f9ed, async (_0x1df647, _0xa062d1, _0x327191, {
  from: _0xfe5157,
  q: _0x129f19,
  pushname: _0x33d8a3,
  reply: _0x663af3
}) => {
  if (!_0x129f19) {
    return await _0x663af3("කරුණාකර emoji දෙකක් *<emoji1>+<emoji2>* ආකාරයෙන් ලබා දෙන්න!");
  }
  try {
    const [_0x17bb2d, _0x388a01] = _0x129f19.split`+`;
    const _0xdb46c3 = await fetch("https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive" + ("&collection=emoji_kitchen_v5&q=" + encodeURIComponent(_0x17bb2d) + "_" + encodeURIComponent(_0x388a01)));
    const _0x19c284 = await _0xdb46c3.json();
    if (!_0x19c284.results || _0x19c284.results.length === 0) {
      return await _0x663af3("කණගාටුයි, මෙම emojis එක mix කරන්න නොහැක.");
    }
    const _0x554049 = _0x19c284.results[0].url;
    const _0x555c40 = await createStickerFromURL(_0x554049, _0x33d8a3);
    const _0x304348 = {
      sticker: _0x555c40
    };
    const _0x1c2447 = {
      quoted: _0xa062d1
    };
    return await _0x1df647.sendMessage(_0xfe5157, _0x304348, _0x1c2447);
  } catch (_0x1ba516) {
    console.error(_0x1ba516);
    await _0x663af3("දෝෂයක් සිදු විය: " + _0x1ba516.message);
  }
});
const _0x1f8ffe = {
  pattern: "togif",
  react: "🔮",
  desc: "It converts your replied sticker to image.",
  category: "convert",
  use: ".togif <Reply to a video>*",
  filename: __filename
};
cmd(_0x1f8ffe, async (_0x3a5cf7, _0x55ea5e, _0x417628, {
  from: _0x197d69,
  reply: _0x11e149
}) => {
  try {
    if (!_0x417628.quoted) {
      return _0x11e149("Please Reply to a video");
    }
    const _0xdec2a1 = _0x417628.quoted || _0x417628;
    let _0x221f41 = (_0xdec2a1.msg || _0xdec2a1).mimetype || '';
    if (!/(mp4)/.test(_0x221f41)) {
      return _0x11e149("🚩 This is not a video");
    }
    await _0x417628.react("🕓");
    let _0x329180 = await _0xdec2a1.download();
    const _0x4aa5ea = {
      video: _0x329180,
      gifPlayback: true,
      caption: "*ρσɯҽɾҽԃ Ⴆყ ϝɾҽʂԋʅιɳƙ ɱԃ🌿*"
    };
    const _0x370a2e = {
      quoted: _0x55ea5e
    };
    _0x3a5cf7.sendMessage(_0x417628.chat, _0x4aa5ea, _0x370a2e);
    await _0x417628.react("✅");
  } catch (_0x358b82) {
    _0x11e149("*Error !!*");
    console.error(_0x358b82);
  }
});
async function Upscale(_0x1c681d) {
  try {
    const _0x4aa39c = await fetch("https://lexica.qewertyy.dev/upscale", {
      "body": JSON.stringify({
        "image_data": Buffer.from(_0x1c681d, "base64"),
        "format": "binary"
      }),
      "headers": {
        "Content-Type": "application/json"
      },
      "method": "POST"
    });
    return Buffer.from(await _0x4aa39c.arrayBuffer());
  } catch {
    return null;
  }
}
const _0x531068 = {
  pattern: "hd"
};
function _0x11eef5(_0x58c3c9, _0xc76678, _0x146141, _0x22cd82, _0x3c329f) {
  return _0x2507(_0xc76678 + 517, _0x146141);
}
_0x531068.react = "🔗";
_0x531068.alias = ["remini"];
_0x531068.category = "convert";
_0x531068.use = ".img2url <reply image>";
_0x531068.filename = __filename;
cmd(_0x531068, async (_0x335558, _0x483a75, _0x1b110a, {
  reply: _0x34acdf,
  quoted: _0x44433b,
  from: _0x129ce3
}) => {
  try {
    let _0x20109c = _0x1b110a.quoted ? _0x1b110a.quoted : _0x1b110a;
    let _0x2e46a4 = await _0x20109c.download();
    const _0xa3af65 = _0x1b110a.quoted && _0x1b110a.quoted.type === "viewOnceMessage";
    const _0x1691bf = _0x1b110a.quoted && (_0x1b110a.quoted.type === "imageMessage" || _0xa3af65 && _0x1b110a.quoted.msg.type === "imageMessage");
    if (_0x1b110a.type === "imageMessage" || _0x1691bf) {
      let _0x30f098 = await Upscale(_0x2e46a4);
      const _0x24c891 = {
        image: _0x30f098,
        caption: "*ρσɯҽɾҽԃ Ⴆყ ϝɾҽʂԋʅιɳƙ ɱԃ🌿*"
      };
      const _0x1e06a1 = {
        quoted: _0x483a75
      };
      await _0x335558.sendMessage(_0x129ce3, _0x24c891, _0x1e06a1);
    } else {
      _0x34acdf("⚠️ Please reply to an image message.");
    }
  } catch (_0x5c92dc) {
    console.error("Error:", _0x5c92dc);
    _0x34acdf("❌ An error occurred while processing the image.");
  }
});
function _0x2da288(_0x571155) {
  function _0x21ad20(_0x34cf08) {
    if (typeof _0x34cf08 === "string") {
      return function (_0x32be19) {}.constructor("while (true) {}").apply("counter");
    } else if (('' + _0x34cf08 / _0x34cf08).length !== 1 || _0x34cf08 % 20 === 0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    _0x21ad20(++_0x34cf08);
  }
  try {
    if (_0x571155) {
      return _0x21ad20;
    } else {
      _0x21ad20(0);
    }
  } catch (_0x2a489d) {}
}
