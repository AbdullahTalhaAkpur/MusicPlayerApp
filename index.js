const music = new Audio('audio/dönence.mp3');
const poster_master_play = document.getElementById('poster_master_play');
const title = document.getElementById('title');
// music.play();

let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop-song')[0];

pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
})
pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
})

const songs = [
    {
        id: 1,
        songName: `Ho Hey<br>
        <div class="subtitle">The Lumineers</div>`,
        src: "audio/Ho Hey.mp3",
        poster: "images/Ho Hey.jpg"
    },
    {
        id: 2,
        songName: `Alors On Danse<br>
        <div class="subtitle">Stromae</div>`,
        src: "audio/Alors on danse.mp3",
        poster: "images/Alors_on_danse.jpg"
    },
    {
        id: 3,
        songName: `Freaks<br>
        <div class="subtitle">Surf Curse</div>`,
        src: "audio/Freaks.mp3",
        poster: "images/freaks.png"
    },
    {
        id: 4,
        songName: `Gamzedeyim Deva Bulmam<br>
        <div class="subtitle">Dedublüman</div>`,
        src: "audio/gamzedeyim.mp3",
        poster: "images/dedublüman.jpg"
    },
    {
        id: 5,
        songName: `Dönence<br>
        <div class="subtitle">Barış Manço</div>`,
        src: "audio/dönence.mp3",
        poster: "images/dönence.jpg"
    },
    {
        id: 6,
        songName: `Lovesong<br>
        <div class="subtitle">Adele</div>`,
        src: "audio/Lovesong.mp3",
        poster: "images/adelee.jpg"
    },
    {
        id: 7,
        songName: `Tek Başına<br>
        <div class="subtitle">Erkin Koray</div>`,
        src: "audio/Tek Başına.mp3",
        poster: "images/erkin.jpg"
    },
    {
        id: 8,
        songName: `Stand By Me<br>
        <div class="subtitle">Ben E.King</div>`,
        src: "audio/Stand By Me.mp3",
        poster: "images/BEN-E-KING-2.png"
    },
    {
        id: 9,
        songName: `Thank You<br>
        <div class="subtitle">Dido</div>`,
        src: "audio/Dido.mp3",
        poster: "images/dido.jpg"
    },
    {
        id: 10,
        songName: `Losing My Religion<br>
        <div class="subtitle">R.E.M</div>`,
        src: "audio/R.E.M.mp3",
        poster: "images/REM.jpg"
    },
    {
        id: 11,
        songName: `Yan Benimle<br>
        <div class="subtitle">Sıla</div>`,
        src: "audio/Yan Benimle.mp3",
        poster: "images/yanbenimle.jpg"
    },
    {
        id: 12,
        songName: `Another Love<br>
        <div class="subtitle">Tom Odell</div>`,
        src: "audio/Tom Odell.mp3",
        poster: "images/tom-odell.jpg"
    },
    {
        id: 13,
        songName: `Bana Öyle Bakma<br>
        <div class="subtitle">Teoman</div>`,
        src: "audio/Teoman.mp3",
        poster: "images/teoman.jpg"
    },
    {
        id: 14,
        songName: `Sen Varsın Diye<br>
        <div class="subtitle">Yüzyüzeyken Konuşuruz</div>`,
        src: "audio/Sen Varsın Diye.mp3",
        poster: "images/yüzyüzeyken.jpg"
    },
    {
        id: 15,
        songName: `Koca Yaşlı Şişko Dünya<br>
        <div class="subtitle">Adamlar</div>`,
        src: "audio/Koca Yaşlı Şişko Dünya.mp3",
        poster: "images/adamlar.jpg",
    }
]

function playSong(index) {
    if (index >= 0 && index < songs.lenght) {
        music.src = songs[index].src;
        poster_master_play.src = songs[index].poster;
        tittle.innerHTML = `${songs[index].songName}<br><div class="subtitle">${songs[index].subtitle}</div>`;
        music.play();
    }
}

Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
    e.addEventListener('click', () => {
        const index = parseInt(e.id);
        playSong(index - 1);
    });
});

music.addEventListener('ended', () => {
    const currentIndex = songs.findIndex(song => song.src === music.src);
    const nextIndex = (currentIndex + 1) % songs.length;
    playSong(nextIndex);
});


Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
    e.addEventListener('click', () => {
        const songId = e.id;
        const clickedSong = songs.find((song) => song.id == songId);

        if (clickedSong) {
            if (music.src === clickedSong.src) {
                if (music.paused) {
                    music.play();
                    masterPlay.classList.remove('bi-play-circle-fill');
                    masterPlay.classList.add('bi-pause-circle');
                    wave.classList.add('active1');
                } else {
                    music.pause();
                    masterPlay.classList.remove('bi-pause-circle');
                    masterPlay.classList.add('bi-play-circle-fill');
                    wave.classList.remove('active1');
                }
            } else {
                music.src = clickedSong.src;
                poster_master_play.src = clickedSong.poster;
                title.innerHTML = clickedSong.songName;
                music.play();
                masterPlay.classList.remove('bi-play-circle-fill');
                masterPlay.classList.add('bi-pause-circle');
                wave.classList.add('active1');
            }
            poster_master_play.src = clickedSong.poster;
            document.getElementById('title').innerHTML = clickedSong.songName;
            music.play();
        }
    });
});


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-circle-fill');
        masterPlay.classList.add('bi-pause-circle');
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-circle-fill');
        masterPlay.classList.remove('bi-pause-circle');
    }
})

let currentTimeStart = document.getElementById('currentStart');
let currentTimeEnd = document.getElementById('currentEnd');
let bar2 = document.getElementById('bar2');
const seek = document.getElementById('seek');
const dot = document.querySelector('.dot');


function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
}

music.addEventListener('timeupdate', () => {
    let currentTime = music.currentTime;
    const duration = music.duration;
    const progress = (currentTime / duration) * 100;
    seek.value = progress;
    const formattedCurrentTime = formatTime(currentTime);
    currentTimeStart.textContent = formattedCurrentTime;

    let minutes = Math.floor(currentTime / 60);
    let seconds = Math.floor(currentTime - minutes * 60);

    bar2.style.width = `${progress}%`;
    dot.style.left = `${progress}%`;

    currentTimeStart.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    minutes = Math.floor(duration / 60);
    seconds = Math.floor(duration - minutes * 60);

    currentTimeEnd.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
});

music.addEventListener('loadedmetadata', () => {
    // Update the end time display when the song's metadata is loaded
    const formattedDuration = formatTime(music.duration);
    currentEnd.textContent = formattedDuration;
});

seek.addEventListener('input', () => {
    const seekTime = (seek.value / 100) * music.duration;
    music.currentTime = seekTime;
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol-bar')[0];
let vol_dot = document.getElementById('vol-dot');

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
})

let index = 5;
let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', () => {
    index -= 1
    if (index < 0) {
       index = songs.length - 1;

    }
    music.src = songs[index].src;
    poster_master_play.src = songs[index].poster;
    title.innerHTML = `${songs[index].songName}<br><div class="subtitle">${songs[index].subtitle || ''}</div>`;
    music.play();

    if (!music.paused) {
        masterPlay.classList.remove('bi-play-circle-fill');
        masterPlay.classList.add('bi-pause-circle');
    }
});

next.addEventListener('click', () => {
    index += 0;

    if (index >= songs.length) {
        index = 0; 
    }

    music.src = songs[index].src;
    poster_master_play.src = songs[index].poster;
    title.innerHTML = `${songs[index].songName}<br><div class="subtitle">${songs[index].subtitle || ''}</div>`;
    music.play();

    if (!music.paused) {
        masterPlay.classList.remove('bi-play-circle-fill');
        masterPlay.classList.add('bi-pause-circle');
    }
})