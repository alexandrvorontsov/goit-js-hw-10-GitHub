//пример запроса в гитхаб
const searchbox = document.querySelector('.searchbox');
const profileContainer = document.querySelector('.profile-section');

searchbox.addEventListener('submit', e => {
  e.preventDefault();
  const login = searchbox.elements.login.value;
  fetchUser(login).then(showProfile);
  searchbox.reset();
});

function showProfile({
  avatar_url,
  name,
  login,
  node_id,
  public_repos,
  followers_url,
  following_url,
}) {
  profileContainer.innerHTML = `<div class="profile">
    <img src="${avatar_url}" class="avatar" alt="user avatar" width="120" height="120" />
    <div class="content">
    <h1 class="name">${name}</h1>
     <p class="login">Login: ${login}</p>
     <p class="node_id">Node_id: ${node_id}</p>
     <ul class="stats">
       <li>Followers_url:<span>${followers_url}</span></li>
       <li>Following_url:<span>${following_url}</span></li>
       <li>Repos:<span>${public_repos}</span></li>
    </ul>
</div>
</div>`;
}

// ${name ? `<h1 class="name">${name}</h1>` : ''}
function fetchUser(login) {
  return fetch(`https://api.github.com/users/${login}`).then(response =>
    response.json()
  );
}
