/*
   GETTING THE JSON CONTENT
*/

function loadArtists() {
   $.getJSON('data/music.json')
   .done(function(data) {
      var artists = data.artists;
      for (var i = 0; i < artists.length; i++) {
         var title = '<div class="title simpleCart_shelfItem">';
         // Create the title
         title += "<img src=" + artists[i].image + " class='item_thumb ui image left floated tiny'/>";
         title += "<h2 class='ui header'>" + artists[i].name;
         title += '<div class="ui sub header item_name">' + artists[i].album + '</div></h2>';
         title += '<span class="item_price">$35.99</span><a class="item_add" href="javascript:;"> Add to Cart </a></p>'
         title += '<span class="ui tag label">' + artists[i].year + '</span>';
         title += '<span class="ui ' + artists[i].tags[0].color + ' tag label">' + artists[i].tags[0].type + '</span>';
         title += '<span class="ui ' + artists[i].tags[1].color + ' tag label">' + artists[i].tags[1].type + '</span>';
         title += '</div>';

         // Create the content
         content = '<div class="content">';
         content += '<div class="ui divider"></div>';
         content += '<table class="ui very basic table">';
         content += '  <thead>';
         content += '    <tr><th>#</th>';
         content += '    <th>Name</th>';
         content += '    <th>Duration</th>';
         content += '    <th>Price</th>';
         content += '    <th>Buy</th>';
         content += '  </tr></thead>';
         content += '  <tbody>';
         var song = artists[i].songs;
        for (var j = 0; j < song.length; j++) {
         content += '  <tr class="simpleCart_shelfItem">';
         content += '    <td>' + artists[i].songs[j].num + '</td>';
         content += '    <td class="single line item_name">' + artists[i].songs[j].name + '</td>';
         content += '    <td>' + artists[i].songs[j].duration + '</td>';
         content += '    <td class="item_price">' + artists[i].songs[j].price + '</td>';
         content += '    <td><a class="item_add" href="javascript:;"> Add to Cart </a></td>';
         content += '  </tr>';
        }
        content += ' </tbody>';
        content += '</table>';
        content += '</div>';

         $('#content').append(title);
         $('#content').append(content);
      }
   }).fail(function() {
      $('#content').append('Sorry, We cannot load the json music');
   }).always(function(data) {

   });
}

 loadArtists();


$('.ui.accordion')
  .accordion()
;

$('.ui.dropdown')
  .dropdown()
;
