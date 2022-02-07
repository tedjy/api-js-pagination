import fetchFollowers from './fetchFollowers.js';
import displayFolowers from './displayFollowers.js';
import paginate from './paginate.js';
import displayButtons from './displayButtons.js';

const title = document.querySelector('.section-title h1');
const btnContainer = document.querySelector('.btn-container');

let index = 0;
let pages = [];

const setupUI = () => {
  displayFolowers(pages[index]);
  displayButtons(btnContainer, pages, index);
};

const init = async () => {
  const followers = await fetchFollowers();
  title.textContent = 'Pagination';
  pages = paginate(followers);
  setupUI();
};

window.addEventListener('DOMContentLoaded', init);

btnContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('prev-btn')) {
    index--;

    if (index < 0) {
      index = pages.length - 1;
    }
  }

  if (e.target.classList.contains('next-btn')) {
    index++;

    if (index > pages.length - 1) {
      index = 0;
    }
  }

  if (e.target.classList.contains('page-btn')) {
    index = parseInt(e.target.dataset.index);
  }

  setupUI();
});
