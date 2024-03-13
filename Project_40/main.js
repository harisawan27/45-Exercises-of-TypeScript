function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Create three dictionaries representing different albums
var album1 = make_album('Talha Anjum', 'Khana Badosh');
var album2 = make_album('Shubh', 'Still Rollin');
var album3 = make_album('Sidhu Moose Wala', 'Moosetape', 32);
// Print each return value to show that Objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);
