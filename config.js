const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "243901032452" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "243901032452";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_24_06_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDMwLFxuICAgICAgICAxOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDYzLFxuICAgICAgICA0NCxcbiAgICAgICAgNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTM4LFxuICAgICAgICA4OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODksXG4gICAgICAgIDM0LFxuICAgICAgICA2MyxcbiAgICAgICAgODcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI2LFxuICAgICAgICAyOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNixcbiAgICAgICAgMTcxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTk0LFxuICAgICAgICA1NixcbiAgICAgICAgNzcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDgxLFxuICAgICAgICAzMixcbiAgICAgICAgNjgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNyxcbiAgICAgICAgMTMxLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTU5LFxuICAgICAgICA3MixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDgxLFxuICAgICAgICA3OSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDAsXG4gICAgICAgIDMxLFxuICAgICAgICAxOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDksXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkxLFxuICAgICAgICAxODMsXG4gICAgICAgIDI4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjIzLFxuICAgICAgICA0LFxuICAgICAgICAxNTksXG4gICAgICAgIDE2NCxcbiAgICAgICAgODgsXG4gICAgICAgIDI4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMyxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDI2LFxuICAgICAgICA1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTY1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTY1LFxuICAgICAgICA4NyxcbiAgICAgICAgODIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDMzLFxuICAgICAgICAxODAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTk2LFxuICAgICAgICA5MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxMDksXG4gICAgICAgIDg5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzIsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwLFxuICAgICAgICA2MixcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDg0LFxuICAgICAgICA5OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDc0LFxuICAgICAgICAzLFxuICAgICAgICA2OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDk2LFxuICAgICAgICA0NixcbiAgICAgICAgMzgsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzksXG4gICAgICAgIDU5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDU1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxODQsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTUsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIyLFxuICAgICAgICAxODAsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTE5LFxuICAgICAgICA4MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQwLFxuICAgICAgICA1MixcbiAgICAgICAgNjMsXG4gICAgICAgIDQzLFxuICAgICAgICA2OSxcbiAgICAgICAgMjMyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDM2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDksXG4gICAgICAgIDEwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDc0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjksXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTcyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIitjbDBKWCtDQ3RoQUpwekFCMUhGNTFBWitmeFJmWXRHVGE2dnZIeGI5a1U9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjQzOTAxMDMyNDUyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4MTBDMTdEREI2QkUwMDc0RUY2QkU3MjM2NUVBMzM2NVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTg4Mjg2NzZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNDM5MDEwMzI0NTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjQyNDIyMjAxRjM4NTAzMEVBRUE5NDNEODAzODY2RDFBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODgyODY3NlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJnRmJuS2ExelN4UzNUSTkyLVhOOFdRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjc0MjljMmE3LWY4NGItNDdlMy1iNGRhLWVmYThjMDYyNTdkMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDIsXG4gICAgICAxMTEsXG4gICAgICAxMDUsXG4gICAgICAyMDEsXG4gICAgICA5LFxuICAgICAgMTM1LFxuICAgICAgMTc4LFxuICAgICAgMTY3LFxuICAgICAgMjksXG4gICAgICAxMzUsXG4gICAgICAyMTQsXG4gICAgICAxMTEsXG4gICAgICAxNjYsXG4gICAgICAxMzQsXG4gICAgICAyMTIsXG4gICAgICAxNzAsXG4gICAgICA3LFxuICAgICAgMzAsXG4gICAgICAxOTksXG4gICAgICA4NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODEsXG4gICAgICAxNzIsXG4gICAgICA1MSxcbiAgICAgIDgxLFxuICAgICAgNTIsXG4gICAgICAxMTQsXG4gICAgICA2NyxcbiAgICAgIDIyMixcbiAgICAgIDIzOSxcbiAgICAgIDE5OSxcbiAgICAgIDEyMSxcbiAgICAgIDE3OSxcbiAgICAgIDIyMyxcbiAgICAgIDQyLFxuICAgICAgMTQsXG4gICAgICAyNDEsXG4gICAgICAyNSxcbiAgICAgIDE5NCxcbiAgICAgIDE1NyxcbiAgICAgIDQ4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIldSR1Y4VFpXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNDM5MDEwMzI0NTI6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTI2NzkxNzk2OTAyMzA6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKZmx5ZTRDRVAvOHpMTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImdVeGtnZE1XMCtjeVhpMElHTU5OWWJMNDN0VHZrMHZ3aWRTV0tYSmN1RW89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTDI0V3ZraERIaFZ5QUFSQ1JFTFY2eUVESmdmTStZa2k0VTMxQXRxMUtvNG9VWkplRXJ3VHFCOHNlajY3aGZRMEhRWTAxdHg3eVBPVlAwVDNvdGFkQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiV1Q3WUZ1NTR6TWdXZmNCcmtXUENhYTY0eThJaVRkVmxoZjVJTFkzbTZCc0JURTJHa3VwSEdlZ0ZYallKQVFRNnd6ck9SbWpVUlJZVTRtcEpreXVNQkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjQzOTAxMDMyNDUyOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4ODI4Njc0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQnZnXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCdmcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJqRERJTXA4ZE1ITFI3UStLdm43YzUwYWVjbTNjZ2ZjV0R0Z3l2VWV4YTBJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjc2ODc2NjYxNSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE4ODI4Njc2NjAwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
