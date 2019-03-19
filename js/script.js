/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
const thelist = document.querySelectorAll('.student-item'); // Selects all the student items 
console.log(thelist.length); // Logs the number of students 
const pagesRequired = Math.ceil(thelist.length/10); //How many pages will go on the bottom
console.log(pagesRequired); // Logs the number of pages
const pages = document.links.length; // counts all the links in the page aka how many pages there are. 
console.log(pages); // Logs the number of each page 


/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
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





const appendPageLinks = (list) => {
//Creates the new div elements on the bottom 
  const ul = document.querySelector('.page');  // Selects the main div
  const paginationDiv = document.createElement('div'); // makes the new div
  paginationDiv.className = 'pagination'; // gives the new div a class name
  ul.append(paginationDiv); //sticks the new div after the ul
  const pdClass = document.querySelector('.pagination'); // selects the paginaiton class(the new div)
  const paginationList = document.createElement('ul'); //creates the ul that goes in the bottom div
  pdClass.append(paginationList); // sticks the ul into the bottom div
  for (let i=0; i <pagesRequired; i+=1){
     const a = document.createElement('li'); //creates a list item
     const link = document.createElement('a');    //creates a link item
    link.textContent = [i+1]; // label for the list item
    link.href = '#'
    a.append(link); 
    paginationList.append(a); // Sticks the button at the bottom of the main div
  
const buttonLinks = parseInt(a.textContent);

  
// looping test     
    
    const firstLinkActive = document.querySelector('a');
   // const linkTest1 = document.querySelectorAll('a');
    firstLinkActive.classList = ('active'); // shows the first page as active on load
  // for (let i = 0; i < linkTest1.length; i+=1) {
   
      a.addEventListener('click', (e) => {    
      showPage(thelist, buttonLinks);
     const linkTest1 = document.querySelectorAll('a');   
   for (let i = 0; i < linkTest1.length; i+=1) {
    linkTest1[i].classList.remove('active');
    }
    e.target.classList = 'active';
        });
    }
                                                
                      
//}                              
 }
  
  

appendPageLinks();




/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/





// /Remember to delete the comments that came with this file, and replace them with your own code comments.