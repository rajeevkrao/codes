var invites = []; // starting array
    message.client.guilds.cache.forEach(async (guild) => { 
      const channel = guild.channels.cache 
        .filter((channel) => channel.type === 'text')
        .first();
      if (!channel || guild.member(client.user).hasPermission('CREATE_INSTANT_INVITE')) return;
      await channel
        .createInvite({ maxAge: 0, maxUses: 0 })
        .then(async (invite) => {
          invites.push(`${guild.name} - ${invite.url}`); 
        })
        .catch((error) => console.log(error));
      message.channel.send(invites);
    });