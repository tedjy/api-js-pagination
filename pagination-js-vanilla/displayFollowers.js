const container = document.querySelector('.container');

const displayFolowers = (followers) => {
  const newFollowers = followers
    .map((follower) => {
      const { avatar_url, html_url, login } = follower;

      return `<article class="card">
    <img src="${avatar_url}" alt="${login}" />
    <h4>${login}</h4>
    <a href="${html_url}" class="btn">view profile</a>
    </article>`;
    })
    .join('');

  container.innerHTML = newFollowers;
};

export default displayFolowers;
