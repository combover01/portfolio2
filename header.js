

window.onload = function() {
  const baseURL = window.location.origin;
  const currentDirectory = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/'));
  let headerURL;
  if (currentDirectory === '/') {
    // If the current page is the base URL, fetch header.html from the root directory
    headerURL = baseURL + '/header.html';
  } 
  else {
    // If the current page is a subpage, fetch header.html relative to the current page's directory
    // const currentDirectory = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/'));
    headerURL = baseURL + '/header.html';
  }
  
  fetch(headerURL)
  .then(response => response.text())
  .then(html => {
    document.getElementById('header-placeholder').innerHTML = html;
  })
  .catch(error => {
    console.error('Error fetching header:', error);
  });

  // make all links open in new tab
  var links = document.querySelectorAll('a');
// Iterate through each link
  links.forEach(function(link) {
    // Get the href attribute of the link
    var href = link.getAttribute('href');
    
    // Check if the link is external
    if (href.startsWith('http://') || href.startsWith('https://')) {
      // Set target="_blank" for external links
      link.setAttribute('target', '_blank');
    }
  });
};