function make_album(artist: string, title: string, tracks?: number) {
    let album: { artist: string, title: string, tracks?: number } = {
        artist: artist,
        title: title
    };

    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

// Create three dictionaries representing different albums
let album1 = make_album('Talha Anjum', 'Khana Badosh');
let album2 = make_album('Shubh', 'Still Rollin');
let album3 = make_album('Sidhu Moose Wala', 'Moosetape', 32);

// Print each return value to show that Objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);
