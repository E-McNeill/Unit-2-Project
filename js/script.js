/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
By: Erica Saunders
******************************************/

/*** 
The variables below are global variables referenced throughout the program.
***/
const thelist = document.querySelectorAll('.student-item'); // Selects all the student items 
const pagesRequired = Math.ceil(thelist.length/10); // How many pages will go on the bottom


/*** 
The function below is designed to show only the items that the user wants to see. 10 items per page. 
***/
const showPage = (list, page) => {
 const first = (page * 10) - 10;
 const last = (page * 10) -1;  
  for (let i = 0; i < list.length; i+=1) {
         if (i >= first && i <= last ) {
            list[i].style.display = 'block';
            } else {
            list[i].style.display = 'none';
       }
   }
}

/***  
The function below is designed to generate, append, and add functionality to the buttons on the bottom of the webpage. 
***/ 


const appendPageLinks = (list) => {
  // New div with ul is created and appended to the page.
   const ul = document.querySelector('.page');  
  const paginationDiv = document.createElement('div'); 
  paginationDiv.className = 'pagination'; 
  ul.append(paginationDiv); 
  const paginationClass = document.querySelector('.pagination'); 
  const paginationList = document.createElement('ul'); 
  paginationClass.append(paginationList); 
  // Loops over the pages required and creates a list item for each page.
  for (let i=0; i <pagesRequired; i+=1){ 
     const a = document.createElement('li'); 
     const link = document.createElement('a');    
     link.textContent = [i+1]; 
     link.href = '#'
     a.append(link); 
     paginationList.append(a); 
     const buttonLinks = parseInt(a.textContent); // Takes the page as a number to pass to the showPage function
     // First link on the page is selected, and marked as active so the formatting appears on page load.
     const firstLinkActive = document.querySelector('a'); 
     firstLinkActive.classList = ('active'); 
     // Event listener notices when a page number is clicked, and then calls the showPage function to show the correct page. 
     a.addEventListener('click', (e) => {    
     showPage(thelist, buttonLinks);
     const linkTest1 = document.querySelectorAll('a');   
      for (let i = 0; i < linkTest1.length; i+=1) {
         linkTest1[i].classList.remove('active');
         }
    e.target.classList = 'active';
        });
    }                       
 }
appendPageLinks();
showPage(thelist, 1); // Shows first page with 10 items on page load 

