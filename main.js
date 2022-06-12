const linksSocialMedia = {
  github: 'Matheusdev10',
  youtube: 'mundosemfim',
  facebook: '100000496084612',
  instagram: 'ma_campos10',
  twitter: 'coldplay',
};

function changeSocialMediaLinks() {
  // a cada vez que o for rodar ele vai pegar 1 filho da ul e armazenar na variavel li
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class');
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`;
  }
}

changeSocialMediaLinks();

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      userName.textContent = data.name;
      userBio.textContent = data.bio;
      userLink.href = data.html_url;
      userImage.src = data.avatar_url;
      userLogin.textContent = data.login;
    });
}
getGitHubProfileInfos();
