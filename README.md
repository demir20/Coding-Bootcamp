# Coding-Bootcamp

RijksMuseum Art Generator:

Randomly select any art piece with a web image from the RijksMuseum open source data base (https://data.rijksmuseum.nl/object-metadata/api/).
Background images from Pexel (https://www.pexels.com/api/)

Features:
  - Random abstract background image from Pexel API
  - Random uncopyrighted art piece from the RijksMuseum on button click
  - Modal displays web image, title, place of origin, maker, year made, and more (when applicable)
  - Can save to personal collection
  - Personal collection saved to local storage and displays modal with cards describing each piece
  
  Built with:
   - jQuery
   - API Interaction
   - CSS
   - HTML
   - Materialize
   
   Bugs: when web image is null in the JSON response the function fails to open the modal
