/* =================================================
   GET ELEMENT
================================================= */

const music =
    document.getElementById("music");

const musicPlayer =
    document.getElementById("musicPlayer");

const page1 =
    document.getElementById("page1");

const page2 =
    document.getElementById("page2");

const page3 =
    document.getElementById("page3");

const page4 =
    document.getElementById("page4");

const envelope =
    document.getElementById("envelope");

const letterModal =
    document.getElementById("letterModal");

const letterNext =
    document.getElementById("letterNext");

const memoryNext =
    document.getElementById("memoryNext");

const videoIntro =
    document.getElementById("videoIntro");

const startVideo =
    document.getElementById("startVideo");

const videoBox =
    document.getElementById("videoBox");

const messageVideo =
    document.getElementById("messageVideo");

const videoNext =
    document.getElementById("videoNext");

const heartContainer =
    document.getElementById("heartContainer");

const finalMessage =
    document.getElementById("finalMessage");


/* =================================================
   PAGE SWITCH
================================================= */

function showPage(page) {

    document
        .querySelectorAll(".page")
        .forEach((item) => {

            item.classList.remove("active");

        });


    page.classList.add("active");

}


/* =================================================
   MUSIC PLAYER
================================================= */

function musicStart() {

    if (!music) return;


    music.play()
        .then(() => {

            musicPlayer.classList.add("show");

            musicPlayer.classList.add("playing");

        })
        .catch((error) => {

            console.log(
                "Musik tidak bisa dimainkan:",
                error
            );

        });

}


function musicPause() {

    if (!music) return;

    music.pause();

    musicPlayer.classList.remove(
        "playing"
    );

}


/* =================================================
   PAGE 1
   AMPLOP
================================================= */

envelope.addEventListener(
    "click",
    () => {


        /* Jangan klik dua kali */

        if (
            envelope.classList.contains("open")
        ) {

            return;

        }


        /* Buka amplop */

        envelope.classList.add(
            "open"
        );


        /* Mulai lagu */

        musicStart();


        /* Setelah animasi amplop */

        setTimeout(() => {

            letterModal.classList.add(
                "show"
            );

        }, 900);

    }
);


/* =================================================
   SURAT → PAGE 2
================================================= */

letterNext.addEventListener(
    "click",
    () => {


        letterModal.classList.remove(
            "show"
        );


        setTimeout(() => {

            showPage(page2);

        }, 600);

    }
);


/* =================================================
   PAGE 2 → PAGE 3
================================================= */

memoryNext.addEventListener(
    "click",
    () => {


        showPage(page3);

    }
);


/* =================================================
   PAGE 3
   MULAI VIDEO
================================================= */

startVideo.addEventListener(
    "click",
    () => {


        /* Pause lagu */

        musicPause();


        /* Hilangkan intro */

        videoIntro.style.display =
            "none";


        /* Munculkan video */

        videoBox.classList.add(
            "show"
        );


        /* Mulai dari awal */

        messageVideo.currentTime = 0;


        /* Play */

        messageVideo.play()
            .catch((error) => {

                console.log(
                    "Video gagal:",
                    error
                );

            });

    }
);


/* =================================================
   VIDEO
   SAAT DIMAINKAN
================================================= */

messageVideo.addEventListener(
    "play",
    () => {

        musicPause();

    }
);


/* =================================================
   VIDEO SELESAI
================================================= */

messageVideo.addEventListener(
    "ended",
    () => {


        console.log(
            "🎬 Video selesai"
        );


        /* Lagu lanjut */

        musicStart();


        /* Tombol lanjut muncul */

        videoNext.classList.add(
            "show"
        );

    }
);


/* =================================================
   VIDEO → PAGE 4
================================================= */

videoNext.addEventListener(
    "click",
    () => {


        /* Sembunyikan player */

        musicPlayer.classList.remove(
            "show"
        );


        /* Pindah Page 4 */

        showPage(page4);


        /* Mulai animasi */

        startHeartAnimation();

    }
);


/* =================================================
   BENTUK HATI
================================================= */

function getHeartPoints(amount) {

    const points = [];


    for (
        let i = 0;
        i < amount;
        i++
    ) {


        const t =
            (Math.PI * 2 * i) /
            amount;

       
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
            x,
            y
        });

    }


    return points;

}


/* =================================================
   LOVE ANIMATION
================================================= */

function startHeartAnimation() {


    console.log(
        "❤️ Heart animation start"
    );


    /* Bersihkan */

    heartContainer.innerHTML = "";


    /* Sembunyikan tulisan */

    finalMessage.classList.remove(
        "show"
    );


    /*
     * Jumlah love
     */

    const amount = 100;


    /*
     * Ambil posisi hati
     */

    const points =
        getHeartPoints(amount);


    /*
     * Besar hati
     */

    const scale = 2.3;


    points.forEach(
        (point, index) => {


            /*
             * Buat love
             */

            const heart =
                document.createElement(
                    "span"
                );


            heart.className =
                "heart-particle";


            heart.textContent =
                "♥";


            /*
             * Mulai dari tengah
             */

            heart.style.left =
                "50%";

            heart.style.top =
                "50%";


            /*
             * Ukuran random
             */

            heart.style.fontSize =
                `${12 + Math.random() * 10}px`;


            /*
             * Masukkan
             */

            heartContainer.appendChild(
                heart
            );


            /*
             * Posisi akhir
             */

            const finalX =
                50 +
                point.x * scale;


            const finalY =
                50 +
                point.y * scale;


            /*
             * Delay
             */

            const delay =
                400 +
                index * 16;


            /*
             * Gerak ke posisi
             */

            setTimeout(
                () => {

                    heart.classList.add(
                        "fly"
                    );


                    heart.style.left =
                        `${finalX}%`;


                    heart.style.top =
                        `${finalY}%`;

                },
                delay
            );


            /*
             * Setelah terbentuk,
             * pulse
             */

            setTimeout(
                () => {

                    heart.classList.add(
                        "pulse"
                    );

                },
                delay + 2300
            );

        }
    );


    /*
     * Setelah semua love berkumpul
     * munculkan tulisan
     */

    setTimeout(
        () => {

            finalMessage.classList.add(
                "show"
            );

        },
        4300
    );

}


/* =================================================
   MUSIC PLAYER CLICK
================================================= */

musicPlayer.addEventListener(
    "click",
    () => {


        if (
            music.paused
        ) {

            musicStart();

        }

        else {

            musicPause();

        }

    }
);


/* =================================================
   DEBUG
================================================= */

console.log(
    "🚀 Website berhasil dimuat!"
);