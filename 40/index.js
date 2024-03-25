"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const make_album = (artist_name, album_title, total_tracks) => {
    let music_album = {
        artist_name,
        album_title,
    };
    if (total_tracks !== undefined && total_tracks >= 0) {
        music_album.total_tracks = total_tracks;
    }
    return music_album;
};
console.log(make_album('Tahir Shah', 'Angels'));
console.log(make_album('Dhinchak Pooja', 'Selfie mene leli aaj'));
console.log(make_album('Bakray k muu wala', 'Jannati hai mera aandu bakra', 3));
