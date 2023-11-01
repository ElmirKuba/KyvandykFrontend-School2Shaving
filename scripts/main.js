window.addEventListener('load', () => {
  let urlSearch = window.location.search;

  urlSearch = urlSearch.slice(1, urlSearch.length);
  const urlSearchArray = urlSearch.split('&');

  urlSearch = urlSearchArray[0];

  const currPage = urlSearch.slice(5, urlSearch.length);

  switch (currPage) {
    case 'how-to-shave':
      document.querySelector('.content_how-to-shave').style.display = 'block';
      break;

    case 'shaving-types':
      document.querySelector('.content_shaving-types').style.display = 'block';
      break;

    case 'shaver-philips-s1223-41':
      document.querySelector('.content_shaver-philips-s1223-41').style.display =
        'block';
      break;

    case 'popular-solutions':
      document.querySelector('.content_popular-solutions').style.display =
        'block';
      break;

    default:
      break;
  }
});
