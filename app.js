let image = document.querySelector('.image');
image.addEventListener('mouseover', () =>
{
  document.body.style.backgroundColor = "rgba(164, 250, 140, 0.997)";  
});


image.addEventListener('mouseout', () =>
{
  document.body.style.backgroundColor = "white";  
});


let navbar = document.querySelector('.navbar');
navbar.addEventListener('mouseover', () =>
{
  document.body.style.backgroundColor = "rgb(243, 72, 72)";  
  document.body.style.color = 'white';
});


navbar.addEventListener('mouseout', () =>
{
  document.body.style.backgroundColor = "white";  
  document.body.style.color = 'black';
});
