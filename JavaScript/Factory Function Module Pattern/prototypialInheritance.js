function createUser (name) {
    const discordName = "@" + name;
  
    let reputation = 0;
    const getReputation = () => reputation;
    const giveReputation = () => reputation++;
  
    return { name, discordName, getReputation, giveReputation };
}
  
const josh = createUser("josh");
josh.giveReputation();
josh.giveReputation();
  
  console.log({
    discordName: josh.discordName,
    reputation: josh.getReputation()
});
// logs { discordName: "@josh", reputation: 2 }

// Turn user into player from user
// Extracting what you need
function CreatePlayer (name, level) {
    const { getReputation, giveReputation } = createUser(name);

    const increaseLevel = () => level++;

    return { name, getReputation, giveReputation, increaseLevel};
}

// Extending the User Object...
function CreatePlayerTwo (name, level) {
    const user = createUser (name);

    const increaseLevel = () => level++;

    return Object.assign({}, user, {increaseLevel});
}