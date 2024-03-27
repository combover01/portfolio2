
const baseURL = window.location.origin;
let headerURL;
headerURL = baseURL + '/header.html';

window.onload = function() {

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