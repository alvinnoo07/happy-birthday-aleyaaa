/* ==================================================
   GET ELEMENT
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

const loveScreen =
    document.getElementById("loveScreen");

const loveContainer =
    document.getElementById("loveContainer");


/* ==================================================
   PAGE 1
   AMPLOP
================================================== */

if (envelope) {

    envelope.addEventListener("click", () => {

        /*
         * Cegah amplop dibuka berkali-kali
         */

        if (
            envelope.classList.contains("open")
        ) {
            return;
        }


        /*
         * Buka amplop
         */

        envelope.classList.add("open");


        /*
         * Putar musik
         */

        if (music) {

            music.play()
                .then(() => {

                    console.log(
                        "🎵 Raindance mulai"
                    );

                })
                .catch((error) => {

                    console.log(
                        "Musik gagal:",
                        error
                    );

                });

        }


        /*
         * Tampilkan music player
         */

        if (musicPlayer) {

            musicPlayer.classList.add(
                "show"
            );

            musicPlayer.classList.add(
                "playing"
            );

        }


        /*
         * Setelah amplop terbuka,
         * masuk ke surat
         */

        setTimeout(() => {


            envelopeScreen.classList.add(
                "leaving"
            );


            setTimeout(() => {

                envelopeScreen.classList.remove(
                    "active"
                );


                letterScreen.classList.add(
                    "active"
                );

            }, 600);


        }, 1200);

    });

}


/* ==================================================
   PAGE 2
   SURAT → MEMORY
================================================== */

if (finishBtn) {

    finishBtn.addEventListener(
        "click",
        () => {


            /*
             * Hilangkan surat
             */

            letterScreen.classList.remove(
                "active"
            );


            /*
             * Munculkan memory
             */

            setTimeout(() => {

                memoryScreen.classList.add(
                    "active"
                );

            }, 700);

        }
    );

}


/* ==================================================
   PAGE 3
   MEMORY → VIDEO
================================================== */

if (nextButton) {

    nextButton.addEventListener(
        "click",
        () => {


            /*
             * Hilangkan memory
             */

            memoryScreen.classList.remove(
                "active"
            );


            /*
             * Munculkan video page
             */

            setTimeout(() => {

                videoScreen.classList.add(
                    "active"
                );

            }, 700);

        }
    );

}


/* ==================================================
   PAGE 4 VIDEO
   MULAI VIDEO
================================================== */

if (startVideoBtn) {

    startVideoBtn.addEventListener(
        "click",
        async () => {


            console.log(
                "🎬 Video dimulai"
            );


            /*
             * Sembunyikan intro
             */

            videoIntro.style.display =
                "none";


            /*
             * Tampilkan video
             */

            videoWrapper.classList.add(
                "visible"
            );


            /*
             * Reset video
             */

            messageVideo.currentTime = 0;


            /*
             * PAUSE RAINDANCE
             */

            if (music) {

                music.pause();

            }


            /*
             * Matikan animasi music player
             */

            if (musicPlayer) {

                musicPlayer.classList.remove(
                    "playing"
                );

            }


            /*
             * Play video
             */

            try {

                await messageVideo.play();

            }

            catch (error) {

                console.log(
                    "Video gagal dimainkan:",
                    error
                );

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


            /*
             * Pastikan musik mati
             */

            if (music) {

                music.pause();

            }


            /*
             * Animasi video
             */

            videoWrapper.classList.add(
                "playing"
            );


        }
    );


    /* ==================================================
       VIDEO PAUSE
    ================================================== */

    messageVideo.addEventListener(
        "pause",
        () => {

            videoWrapper.classList.remove(
                "playing"
            );

        }
    );


    /* ==================================================
       VIDEO SELESAI
    ================================================== */

    messageVideo.addEventListener(
        "ended",
        () => {


            console.log(
                "🎬 Video selesai"
            );


            /*
             * Hilangkan status video
             */

            videoWrapper.classList.remove(
                "playing"
            );


            /*
             * PLAY RAINDANCE LAGI
             */

            if (music) {

                music.play()
                    .then(() => {

                        console.log(
                            "🎵 Raindance lanjut"
                        );


                        if (musicPlayer) {

                            musicPlayer.classList.add(
                                "playing"
                            );

                        }

                    })
                    .catch((error) => {

                        console.log(
                            "Musik gagal lanjut:",
                            error
                        );

                    });

            }


            /*
             * Tampilkan tombol lanjut
             */

            videoNextBtn.classList.add(
                "show"
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


            /*
             * Kalau musik sedang main
             */

            if (!music.paused) {

                music.pause();

                musicPlayer.classList.remove(
                    "playing"
                );

                return;

            }


            /*
             * Kalau musik sedang pause
             */

            music.play()
                .then(() => {

                    musicPlayer.classList.add(
                        "playing"
                    );

                })
                .catch((error) => {

                    console.log(
                        "Musik gagal:",
                        error
                    );

                });

        }
    );

}


/* ==================================================
   PAGE 4
   BENTUK HATI
================================================== */

function createHeartShape(count) {

    const points = [];


    for (let i = 0; i < count; i++) {

        const t =
            (Math.PI * 2 * i) /
            count;


        /*
         * Rumus matematika bentuk hati
         */

        const x =
            16 *
            Math.pow(
                Math.sin(t),
                3
            );


        const y =
            -(
                13 *
                Math.cos(t)

                -

                5 *
                Math.cos(
                    2 * t
                )

                -

                2 *
                Math.cos(
                    3 * t
                )

                -

                Math.cos(
                    4 * t
                )
            );


        points.push({
            x: x,
            y: y
        });

    }


    return points;

}


/* ==================================================
   BUAT LOVE PARTICLES
================================================== */

function startLoveAnimation() {

    console.log(
        "❤️ LOVE ANIMATION START"
    );


    /*
     * Pastikan container ada
     */

    if (!loveContainer) {

        console.log(
            "❌ loveContainer tidak ditemukan"
        );

        return;

    }


    /*
     * Bersihkan love lama
     */

    loveContainer.innerHTML = "";


    /*
     * Jumlah love
     */

    const loveCount = 90;


    /*
     * Ambil titik-titik bentuk hati
     */

    const heartPoints =
        createHeartShape(
            loveCount
        );


    /*
     * Ukuran hati
     */

    const scale = 2.4;


    /*
     * Buat semua love
     */

    heartPoints.forEach(
        (point, index) => {


            const love =
                document.createElement(
                    "span"
                );


            /*
             * Class CSS
             */

            love.classList.add(
                "love-particle"
            );


            /*
             * Bentuk love
             */

            love.innerHTML = "♥";


            /*
             * Semua mulai dari tengah
             */

            love.style.left =
                "50%";

            love.style.top =
                "50%";


            /*
             * Ukuran random
             */

            const size =
                12 +
                Math.random() * 10;


            love.style.fontSize =
                `${size}px`;


            /*
             * Masukkan ke layar
             */

            loveContainer.appendChild(
                love
            );


            /*
             * Hitung posisi akhir
             */

            const finalX =
                50 +
                point.x *
                scale;


            const finalY =
                50 +
                point.y *
                scale;


            /*
             * Delay setiap love
             * sedikit berbeda
             */

            const delay =
                300 +
                index * 18;


            /*
             * Gerakkan love
             */

            setTimeout(
                () => {


                    love.classList.add(
                        "fly"
                    );


                    love.style.left =
                        `${finalX}%`;


                    love.style.top =
                        `${finalY}%`;


                },
                delay
            );


            /*
             * Setelah sampai,
             * mulai pulse
             */

            setTimeout(
                () => {


                    love.classList.add(
                        "formed"
                    );


                },
                delay + 1900
            );

        }
    );

}


/* ==================================================
   VIDEO → PAGE 4
================================================== */

if (videoNextBtn) {

    videoNextBtn.addEventListener(
        "click",
        () => {


            console.log(
                "➡️ Masuk Page 4"
            );


            /*
             * Hilangkan video page
             */

            videoScreen.classList.remove(
                "active"
            );


            /*
             * Tunggu transisi
             */

            setTimeout(() => {


                /*
                 * Tampilkan Page 4
                 */

                loveScreen.classList.add(
                    "active"
                );


                /*
                 * Mulai animasi love
                 */

                setTimeout(() => {

                    startLoveAnimation();

                }, 300);


            }, 800);

        }
    );

}


/* ==================================================
   WEBSITE READY
================================================== */

console.log(
    "🚀 Website berhasil dimuat"
);