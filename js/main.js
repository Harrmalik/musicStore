/*
   GETTING THE JSON CONTENT
*/

function loadArtists() {
   $.getJSON('data/music.json')
   .done(function(data) {
      var artists = data.artists;
      for (var i = 0; i < artists.length; i++) {
         var title = '<div class="title">';
         // Create the title
         title += "<img src=" + artists[i].image + " class='ui image left floated tiny'/>";
         title += "<h2 class='ui header'>" + artists[i].name;
         title += '<div class="ui sub header">' + artists[i].album + '</div></h2>';
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
         content += '  </tr></thead>';
         content += '  <tbody>';
         var song = artists[i].songs;
        for (var j = 0; j < song.length; j++) {
         content += '  <tr>';
         content += '    <td>' + artists[i].songs[j].num + '</td>';
         content += '    <td class="single line">' + artists[i].songs[j].name + '</td>';
         content += '    <td>' + artists[i].songs[j].duration + '</td>';
         content += '    <td>' + artists[i].songs[j].price + '</td>';
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
