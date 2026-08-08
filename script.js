// ===============================
// AMBIL ELEMENT HTML
// ===============================

const envelope = document.getElementById("envelope");

const envelopeScreen =
    document.getElementById("envelopeScreen");

const letterScreen =
    document.getElementById("letterScreen");

const finishBtn =
    document.getElementById("finishBtn");

const music =
    document.getElementById("music");

const musicPlayer =
    document.getElementById("musicPlayer");


// ===============================
// STATUS
// ===============================

let envelopeOpened = false;


// ===============================
// KLIK AMPLOP
// ===============================

envelope.addEventListener("click", () => {

    // Supaya tidak bisa diklik berkali-kali
    if (envelopeOpened) return;

    envelopeOpened = true;


    // ===============================
    // 1. BUKA AMPLOP
    // ===============================

    envelope.classList.add("open");


    // ===============================
    // 2. PUTAR MUSIK
    // ===============================

    music.play()
        .then(() => {

            console.log("Musik mulai 🎵");

        })
        .catch((error) => {

            console.log(
                "Musik gagal diputar:",
                error
            );

        });


    // ===============================
    // 3. MUNCULKAN MUSIC PLAYER
    // ===============================

    musicPlayer.classList.add("show");

    musicPlayer.classList.add("playing");


    // ===============================
    // 4. TUNGGU ANIMASI AMPLOP
    // ===============================

    setTimeout(() => {

        // Hilangkan halaman amplop

        envelopeScreen.style.opacity = "0";

        envelopeScreen.style.pointerEvents = "none";


        // Munculkan surat

        letterScreen.classList.add("active");

    }, 1000);

});


// ===============================
// TOMBOL SELESAI
// ===============================

finishBtn.addEventListener("click", () => {

    // Hilangkan surat

    letterScreen.classList.remove("active");

});