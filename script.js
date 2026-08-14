/* ==================================================
   ELEMENT
================================================== */

const envelope =
    document.getElementById("envelope");

const envelopeScreen =
    document.getElementById("envelopeScreen");

const letterScreen =
    document.getElementById("letterScreen");

const finishBtn =
    document.getElementById("finishBtn");

const memoryScreen =
    document.getElementById("memoryScreen");

const nextButton =
    document.getElementById("nextButton");

const videoScreen =
    document.getElementById("videoScreen");

const videoIntro =
    document.getElementById("videoIntro");

const startVideoBtn =
    document.getElementById("startVideoBtn");

const videoWrapper =
    document.getElementById("videoWrapper");

const messageVideo =
    document.getElementById("messageVideo");

const videoNextBtn =
    document.getElementById("videoNextBtn");

const music =
    document.getElementById("music");

const musicPlayer =
    document.getElementById("musicPlayer");


/* ==================================================
   PAGE 1
   AMPLOP
================================================== */

if (envelope) {

    envelope.addEventListener("click", () => {


        /* ------------------------------------------
           Cegah klik kedua
        ------------------------------------------ */

        if (
            envelope.classList.contains("open")
        ) {
            return;
        }


        /* ------------------------------------------
           Buka amplop
        ------------------------------------------ */

        envelope.classList.add("open");


        /* ------------------------------------------
           Play musik
        ------------------------------------------ */

        if (music) {

            music.play()
                .then(() => {

                    console.log(
                        "Raindance mulai 🎵"
                    );

                })
                .catch((error) => {

                    console.log(
                        "Musik gagal diputar:",
                        error
                    );

                });

        }


        /* ------------------------------------------
           Music player muncul
        ------------------------------------------ */

        if (musicPlayer) {

            musicPlayer.classList.add("show");

            musicPlayer.classList.add("playing");

        }


        /* ------------------------------------------
           Tunggu animasi amplop
        ------------------------------------------ */

        setTimeout(() => {

            if (envelopeScreen) {

                envelopeScreen.classList.add(
                    "leaving"
                );

            }


            /* --------------------------------------
               Masuk ke surat
            -------------------------------------- */

            setTimeout(() => {

                if (letterScreen) {

                    letterScreen.classList.add(
                        "active"
                    );

                }

            }, 500);

        }, 1000);

    });

}


/* ==================================================
   PAGE 2
   SURAT → MEMORY
================================================== */

if (finishBtn) {

    finishBtn.addEventListener("click", () => {


        /* ------------------------------------------
           Hilangkan surat
        ------------------------------------------ */

        if (letterScreen) {

            letterScreen.classList.remove(
                "active"
            );

        }


        /* ------------------------------------------
           Munculkan memory
        ------------------------------------------ */

        setTimeout(() => {

            if (memoryScreen) {

                memoryScreen.classList.add(
                    "active"
                );

            }

        }, 600);

    });

}


/* ==================================================
   PAGE 3
   MEMORY → VIDEO
================================================== */

if (nextButton) {

    nextButton.addEventListener("click", () => {


        /* ------------------------------------------
           Hilangkan memory
        ------------------------------------------ */

        if (memoryScreen) {

            memoryScreen.classList.remove(
                "active"
            );

        }


        /* ------------------------------------------
           Munculkan video page
        ------------------------------------------ */

        setTimeout(() => {

            if (videoScreen) {

                videoScreen.classList.add(
                    "active"
                );

            }

        }, 700);

    });

}


/* ==================================================
   PAGE 4
   START VIDEO
================================================== */

if (startVideoBtn) {

    startVideoBtn.addEventListener(
        "click",
        async () => {


            /* --------------------------------------
               Sembunyikan intro
            -------------------------------------- */

            if (videoIntro) {

                videoIntro.style.display =
                    "none";

            }


            /* --------------------------------------
               Tampilkan video
            -------------------------------------- */

            if (videoWrapper) {

                videoWrapper.classList.add(
                    "visible"
                );

            }


            /* --------------------------------------
               RESET VIDEO
            -------------------------------------- */

            if (messageVideo) {

                messageVideo.currentTime = 0;

            }


            /* --------------------------------------
               MATIKAN MUSIK SEBELUM VIDEO
            -------------------------------------- */

            if (music) {

                music.pause();

            }


            /* --------------------------------------
               Hentikan animasi player
            -------------------------------------- */

            if (musicPlayer) {

                musicPlayer.classList.remove(
                    "playing"
                );

            }


            /* --------------------------------------
               PUTAR VIDEO
            -------------------------------------- */

            if (messageVideo) {

                try {

                    await messageVideo.play();

                    console.log(
                        "Video mulai 🎬"
                    );

                }

                catch (error) {

                    console.log(
                        "Video belum bisa autoplay:",
                        error
                    );

                }

            }

        }
    );

}


/* ==================================================
   VIDEO PLAY
================================================== */

if (messageVideo) {

    messageVideo.addEventListener(
        "play",
        () => {


            /* --------------------------------------
               Pastikan musik mati
            -------------------------------------- */

            if (music) {

                music.pause();

            }


            /* --------------------------------------
               Animasi status
            -------------------------------------- */

            if (videoWrapper) {

                videoWrapper.classList.add(
                    "playing"
                );

            }


            console.log(
                "Video sedang diputar 🎬"
            );

        }
    );


    /* ==============================================
       VIDEO PAUSE
    ============================================== */

    messageVideo.addEventListener(
        "pause",
        () => {

            if (videoWrapper) {

                videoWrapper.classList.remove(
                    "playing"
                );

            }

        }
    );


    /* ==============================================
       VIDEO SELESAI
    ============================================== */

    messageVideo.addEventListener(
        "ended",
        () => {


            console.log(
                "Video selesai ❤️"
            );


            /* --------------------------------------
               Hilangkan status
            -------------------------------------- */

            if (videoWrapper) {

                videoWrapper.classList.remove(
                    "playing"
                );

            }


            /* --------------------------------------
               PUTAR LAGI RAINDANCE
            -------------------------------------- */

            if (music) {

                music.play()
                    .then(() => {

                        console.log(
                            "Raindance lanjut lagi 🎵"
                        );


                        if (musicPlayer) {

                            musicPlayer.classList.add(
                                "playing"
                            );

                        }

                    })
                    .catch((error) => {

                        console.log(
                            "Musik tidak bisa dilanjutkan:",
                            error
                        );

                    });

            }


            /* --------------------------------------
               MUNCULKAN TOMBOL LANJUT
            -------------------------------------- */

            if (videoNextBtn) {

                videoNextBtn.classList.add(
                    "show"
                );

            }

        }
    );

}


/* ==================================================
   VIDEO NEXT
================================================== */

if (videoNextBtn) {

    videoNextBtn.addEventListener(
        "click",
        () => {

            console.log(
                "Page berikutnya nanti di sini 🚀"
            );

        }
    );

}


/* ==================================================
   MUSIC PLAYER
   CLICK = PLAY / PAUSE
================================================== */

if (musicPlayer && music) {

    musicPlayer.addEventListener(
        "click",
        () => {


            /* --------------------------------------
               Kalau sedang play
            -------------------------------------- */

            if (!music.paused) {

                music.pause();

                musicPlayer.classList.remove(
                    "playing"
                );

                return;

            }


            /* --------------------------------------
               Kalau sedang pause
            -------------------------------------- */

            music.play()
                .then(() => {

                    musicPlayer.classList.add(
                        "playing"
                    );

                })
                .catch((error) => {

                    console.log(
                        "Musik gagal diputar:",
                        error
                    );

                });

        }
    );

}


/* ==================================================
   DEBUG
================================================== */

console.log(
    "Website siap 🚀"
);