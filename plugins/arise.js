const fs = require("fs");
const Config = require("../config");
const { smd } = require("../lib");

// Command definitio
smd(
  {
    pattern: "arise", // Command trigger
    react: "🫴", // Reaction when the command is run
    desc: "Check bot's status, speed, and latency with channel link", // Command description
    category: "misc", // Command category
    filename: __filename, // Filename reference
  },
  async (message, client) => {
    const start = Date.now();
    
    // Perform an action (no intermediate reply message)
    await new Promise((resolve) => setTimeout(resolve, 100)); // Small delay to simulate a task

    const latency = Date.now() - start;
    const channelLink = "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L"; // Replace with your actual channel link

    // Final message with latency, speed, and channel link
    const finalMessage = `
🫴 *𝕻𝖍𝖆𝖓𝖙𝖔𝖒 is Arised!*

*Latency:* ${latency}ms
*Speed:* Fast as always🚀

*Channel Link:* (${channelLink})

*LONG ARISED Phantom-Error*
    `;

    // Send the final message directly (no initial message)
    await message.reply(finalMessage);
  }
);


// about command


smd(
  {
    pattern: "abbt", // Command trigger
    react: "🎊", // Reaction when the command is run
    desc: "Shows if the bot is alive and displays important information", // Command description
    category: "misc", // Command category
    filename: __filename, // Filename reference
  },
  async (message) => {
    const owner = "𝕻𝖍𝖆𝖓𝖙𝖔𝖒"; // Owner name
    const repoLink = "https://github.com/Phantom-kin/Phantom-Error"; // Repository link
    const channelLink = "https://whatsapp.com/channel/0029VarUpFs2ZjCmM38C463O"; // Channel link
    const whatsappGroupLink = "https://whatsapp.com/channel/0029VarUpFs2ZjCmM38C463O"; // WhatsApp Group link
    const uptime = runtime(process.uptime()); // Get bot uptime

    // Prepare the final message content
    const finalMessage = `
🫴 `Phantom-Error`

*Owner:* ${owner}


*Channel:* (${channelLink})


*Repository:* (${repoLink}


*WhatsApp Group:* (${whatsappGroupLink})

*Made With RAGE🤲 by 𝕻𝖍𝖆𝖓𝖙𝖔𝖒🫴*

*Bot Uptime:* ${uptime}

*LONG ARISED Phantom-Error🫴*
`;

    // Send the final message
    await message.reply(finalMessage);
  }
);
