let gitHubUserName = 'john-walter-munene'
let imageSpace = document.querySelector('.image');

async function showAvatar() {
    // Read GitHub user
    let gitHubResponse = await fetch(`https://api.github.com/users/${gitHubUserName}`, { mode: 'cors'});
    let gitHubUser = await gitHubResponse.json();
    console.log(gitHubUser)

    // Show the avatar.
    imageSpace.src = gitHubUser.avatar_url;

    await new Promise((resolve, reject) => setTimeout(resolve, 3000));
    imageSpace.src = '';

    return gitHubUser;
}

showAvatar();