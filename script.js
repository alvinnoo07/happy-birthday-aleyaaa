/* ==================================================
   AMBIL ELEMENT HTML
================================================== */

// Amplop
const envelope = document.querySelector(".envelope");

// Halaman amplop
const envelopeScreen =
    document.getElementById("envelopeScreen") ||
    document.querySelector(".envelope-screen");

// Halaman surat
const letterScreen =
    document.getElementById("letterScreen");

// Tombol selesai surat
const finishBtn =
    document.getElementById("finishBtn");

// Halaman memory
const memoryScreen =
    document.getElementById("memoryScreen");

// Tombol lanjut
const nextButton =
    document.getElementById("nextButton");

// Audio
const music =
    document.getElementById("music");

// Music player
const musicPlayer =
    document.getElementById("musicPlayer");


/* ==================================================
   KLIK AMPLOP
================================================== */

if (envelope) {

    envelope.addEventListener("click", () => {

        // Jangan bisa diklik dua kali
        if (envelope.classList.contains("open")) {
            return;
        }


        // ==========================================
        // 1. BUKA AMPLOP
        // ==========================================

        envelope.classList.add("open");


        // ==========================================
        // 2. PUTAR MUSIK
        // ==========================================

        if (music) {

            music.play()
                .then(() => {

                    console.log("Musik berhasil diputar");

                })
                .catch((error) => {

                    console.log(
                        "Musik tidak bisa diputar:",
                        error
                    );

                });
        }


        // ==========================================
        // 3. MUNCULKAN MUSIC PLAYER
        // ==========================================

        if (musicPlayer) {

            musicPlayer.classList.add("show");

            musicPlayer.classList.add("playing");

        }


        // ==========================================
        // 4. TUNGGU ANIMASI AMPLOP
        // ==========================================

        setTimeout(() => {

            // Hilangkan halaman amplop
            if (envelopeScreen) {

                envelopeScreen.style.opacity = "0";

                envelopeScreen.style.pointerEvents =
                    "none";

                envelopeScreen.style.transform =
                    "scale(1.2)";
            }


            // ======================================
            // 5. MUNCULKAN SURAT
            // ======================================

            setTimeout(() => {

                if (letterScreen) {

                    letterScreen.classList.add("active");

                }

            }, 500);


        }, 1200);

    });

}


/* ==================================================
   TOMBOL SELESAI SURAT
================================================== */

if (finishBtn) {

    finishBtn.addEventListener("click", () => {

        // Hilangkan surat
        if (letterScreen) {

            letterScreen.classList.remove("active");

        }


        // Tunggu animasi
        setTimeout(() => {

            // Munculkan memory page
            if (memoryScreen) {

                memoryScreen.classList.add("active");

            }

        }, 700);

    });

}


/* ==================================================
   TOMBOL LANJUT
================================================== */

if (nextButton) {

    nextButton.addEventListener("click", () => {

        console.log("Tombol lanjut diklik");

        // NANTI PAGE 3 KITA MASUKIN DI SINI

    });

}


/* ==================================================
   MUSIC PLAYER
================================================== */

if (musicPlayer && music) {

    musicPlayer.addEventListener("click", () => {

        // Kalau musik sedang main
        if (!music.paused) {

            music.pause();

            musicPlayer.classList.remove("playing");

        }

        // Kalau musik sedang berhenti
        else {

            music.play()
                .then(() => {

                    musicPlayer.classList.add("playing");

                })
                .catch((error) => {

                    console.log(
                        "Musik tidak bisa diputar:",
                        error
                    );

                });

        }

    });

}


/* ==================================================
   SAAT MUSIK SELESAI
================================================== */

if (music) {

    music.addEventListener("ended", () => {

        if (musicPlayer) {

            musicPlayer.classList.remove("playing");

        }

    });

}


/* ==================================================
   DEBUG
================================================== */

console.log("Website berhasil dijalankan 🚀");