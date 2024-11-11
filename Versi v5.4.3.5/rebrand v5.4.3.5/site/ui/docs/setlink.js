window.addEventListener("load", function() 
{
  sleepSetAdminTitle();
});

window.addEventListener("pageshow", function() 
{
  var languageSelectors = document.querySelectorAll('[aria-label] + ul li a');
  // console.dir(languageSelectors);
  for (let index = 0; index < languageSelectors.length; index++) {
    languageSelectors[index].addEventListener("click", setAdminTitle);
  };
});

function sleepSetAdminTitle() {
  var link = document.createElement('a');
  var backSpan = document.querySelector('.admin-link-orig');
  if (backSpan == null){
    backSpan = document.querySelector('.sidebar-group.depth-0 p span');
    backSpan.setAttribute('class', 'admin-link-orig');
    backSpan.style.display = "none";
    link.innerText = backSpan.innerText;
    link.style = backSpan.style;
    link.setAttribute('href', '../../');
    backSpan.parentNode.appendChild(link);
  }
  else {
    link = document.querySelector('.sidebar-group.depth-0 p a');
    link.innerText = backSpan.innerText;
  }
  
  // console.dir(backSpan);
}

function setAdminTitle() {
  setTimeout(() => {
    sleepSetAdminTitle();
  }, 100);
}