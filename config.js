//David Cyril
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK001YzBkMTVhNTlnZ0V3V0UzblJFTTZIUjlETmRmajVNbXc3NmhiaWtGRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZFBZNVhVdytQZCtFL1dqeHg2SFFCdExvdSswWWxXbmhVREpJa2JObU5pST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNTmJVcFB5aW1WakdKQ010cWxNSUp1b25jSlR0Q1RmOGdkYlA1UEowcUZnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOUVp6d0crL0ZjTzE4eUpJcUZmM0c5aytxeWN1RVFwNmVOM0JUbjF6aUE0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9MbndzUFJGUEorOURtL3hxNW5FNm5yVEdLalN1alFlWWxJdDlkdVpoRmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdZdXBiZ3R6cktiRWN0VVUrUHYrTTJDdFJKUlJ2Qm44MVM0bzVvYndaa2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEVhRDhhbFhYUnUvejVJY3pJTjYrV2RyMVJwd0ZkcDMxYWtKZS9sM21Xaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU1dKR1hlelFpRmdBbGllZGFTNGJ1RlYyeUdlMHZiVUtMM0J4ZXp6ay9oUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhkQ1ZmVXhzK1R6OUgrTXoyTXBkeW5NUENCUTNYdW5UeVppdkd1dS9sZEFrUnhtMW50NWwzQ2x2S2NzZllXWHdkc0I2SEMyNHd4empnWHpxUTNaOURBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUsImFkdlNlY3JldEtleSI6IkRYZFp6anV1ZUxYeHZwY2J6clgvL3hTbnpOWitxbmFSczFkdXdaU0ZNbjA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODA3ODExMjg5MUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzQURFQTlFQzE4OEQwMTU3NjA5MyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE5NjkwMDQwfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ4MDc4MTEyODkxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNBNTQ2RjE3NzhEQjg2ODY3QjBGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTk2OTAwNDJ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkxXb05HejU0UnV5bGpmVXpiVFZ1VHciLCJwaG9uZUlkIjoiOWJmMTE3ZjAtNzMzMi00NWJkLWE2YjMtNmQ4NWEzMTUyMjI3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNuVmdBU0JUS1N3ci94NXQ2eTNjSDBoLzhrcz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1YU8xb1Z1eWRuS3dxYmVhaHZFZlZIMzZDcHc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSEVaVlJIQlIiLCJtZSI6eyJpZCI6IjIzNDgwNzgxMTI4OTE6NDNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQ2Flc2FyIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQZXZnUGNORUtuR2diUUdHQVVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJtTHhrMjhpZFh1ckxLNWVCZ0U0NkkvT2VxU1I3ZjlXUWdYZzI0bnRhMERRPSIsImFjY291bnRTaWduYXR1cmUiOiJDQlFrS1dnN2ZOdW5Nb3JEbWdQWHphdEZLelhBOXI2cGVDM2NCdG1Cd0RWVEFnSS9FRHZ4TjJqbkNZUEltOXEyR3lEamliN01Fekk3cERXMjhvMmNBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMjFBV0duaUhSOXFzTW1FYUhNQ3A4SE52WTFWQUp2Sm0yd0x6ajRaQWNCbFhLUWpBRThsajlOVXhMaENyaDUrUVdLbVhIU1RaMDBLeEIrdDEvSUNqQkE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MDc4MTEyODkxOjQzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlppOFpOdkluVjdxeXl1WGdZQk9PaVB6bnFra2UzL1ZrSUY0TnVKN1d0QTAifX1dLCJwbGF0Zm9ybSI6InNtYmkiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTk2OTAwMzcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTE14In0=";
global.MONGODB = process.env.MONGODB_URI || "mongodb+srv://caesar:OLUSUNLE@cluster0.lmzgxmx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "2348078112891")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "2348078112891")
  : "2349066528353";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg,https://telegra.ph/file/7275967ae7b5283fada69.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://telegra.ph/file/7275967ae7b5283fada69.jpg,https://telegra.ph/file/c3049cd3ac77f371e119e.jpg,https://telegra.ph/file/a22200a780671e0e32383.jpg,https://telegra.ph/file/85fe388fdd14930cf86a0.jpg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "?",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`©QUEEN_ANITA-V2`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "Caesar",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "382461a4a0b0e16cefda7ee92c59c87e",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/QUEEN_ANITA-V2";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.devs = "2349066528353";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
