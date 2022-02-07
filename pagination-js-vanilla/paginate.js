const paginate = (followers) => {
  const itemsPerPage = 9;
  const numberOfPages = Math.ceil(followers.length / itemsPerPage);
  const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    const end = start + itemsPerPage;

    return followers.slice(start, end);
  });

  return newFollowers;
};

export default paginate;
