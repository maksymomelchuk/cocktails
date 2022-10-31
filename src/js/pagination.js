// import { checkDisplayType, fetchByName, createMarkup } from './fetch.js';

// const pagination = document.querySelector('.pagination');

// pagination.addEventListener('click', onClick);

// const cardsOnPage = checkDisplayType();
// let pageNumber;

// function makePagination(array) {
//   const start = (pageNumber - 1) * cardsOnPage;
//   const end = start + cardsOnPage;

//   const newArr = array.slice(start, end);
//   console.log(newArr);
//   return newArr;
// }

// function onClick(event) {
//   if (+event.target.textContent) {
//     console.log(+event.target.textContent);
//     pageNumber = +event.target.textContent;

//     makePagination([
//       {
//         color: 'red',
//         value: '#f00',
//       },
//       {
//         color: 'green',
//         value: '#0f0',
//       },
//       {
//         color: 'blue',
//         value: '#00f',
//       },
//       {
//         color: 'cyan',
//         value: '#0ff',
//       },
//       {
//         color: 'magenta',
//         value: '#f0f',
//       },
//       {
//         color: 'yellow',
//         value: '#ff0',
//       },
//       {
//         color: 'black',
//         value: '#000',
//       },
//       {
//         color: 'red',
//         value: '#f00',
//       },
//       {
//         color: 'green',
//         value: '#0f0',
//       },
//       {
//         color: 'blue',
//         value: '#00f',
//       },
//       {
//         color: 'cyan',
//         value: '#0ff',
//       },
//       {
//         color: 'magenta',
//         value: '#f0f',
//       },
//       {
//         color: 'yellow',
//         value: '#ff0',
//       },
//       {
//         color: 'black',
//         value: '#000',
//       },
//     ]);
//   }
// }
// // !
// // async function getData() {
// //   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
// //   const data = await response.json();
// //   return data;
// // }

// // async function main() {
// //   const postsData = await getData();
// //   let currentPage = 1;
// //   let rows = 10;

// //   function displayList(arrData, rowPerPage, page) {
// //     const postsEl = document.querySelector('.posts');
// //     postsEl.innerHTML = '';
// //     page--;

// //     const start = rowPerPage * page;
// //     const end = start + rowPerPage;
// //     const paginatedData = arrData.slice(start, end);

// //     paginatedData.forEach(el => {
// //       const postEl = document.createElement('div');
// //       postEl.classList.add('post');
// //       postEl.innerText = `${el.title}`;
// //       postsEl.appendChild(postEl);
// //     });
// //   }

// //   function displayPagination(arrData, rowPerPage) {
// //     const paginationEl = document.querySelector('.pagination');
// //     const pagesCount = Math.ceil(arrData.length / rowPerPage);
// //     const ulEl = document.createElement('ul');
// //     ulEl.classList.add('pagination__list');

// //     for (let i = 0; i < pagesCount; i++) {
// //       const liEl = displayPaginationBtn(i + 1);
// //       ulEl.appendChild(liEl);
// //     }
// //     paginationEl.appendChild(ulEl);
// //   }

// //   function displayPaginationBtn(page) {
// //     const liEl = document.createElement('li');
// //     liEl.classList.add('pagination__item');
// //     liEl.innerText = page;

// //     if (currentPage == page) liEl.classList.add('pagination__item--active');

// //     liEl.addEventListener('click', () => {
// //       currentPage = page;
// //       displayList(postsData, rows, currentPage);

// //       let currentItemLi = document.querySelector('li.pagination__item--active');
// //       currentItemLi.classList.remove('pagination__item--active');

// //       liEl.classList.add('pagination__item--active');
// //     });

// //     return liEl;
// //   }

// //   displayList(postsData, rows, currentPage);
// //   displayPagination(postsData, rows);
// // }

// // main();
// // !
// export { makePagination };
