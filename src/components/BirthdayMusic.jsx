import {
  useEffect,
  useRef,
  useState
} from "react";

import {
  Volume2,
  VolumeX
} from "lucide-react";

function BirthdayMusic() {

  const audioRef = useRef(null);

  const [playing, setPlaying] =
    useState(false);

  useEffect(() => {

    if (!audioRef.current) {
      return;
    }

    audioRef.current.loop = true;
    audioRef.current.volume = 0.45;

  }, []);

  const toggleMusic = async () => {

    const audio =
      audioRef.current;

    if (!audio) {
      return;
    }

    try {

      if (playing) {

        audio.pause();

        setPlaying(false);

      } else {

        await audio.play();

        setPlaying(true);

      }

    } catch (error) {

      console.log(
        "Music cannot start:",
        error
      );

    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/birthday-music.mp3"
        preload="auto"
      />

      <button
        onClick={toggleMusic}
        aria-label={playing ? "Mute music" : "Play music"}
        className="
          fixed
          top-4
          right-4
          z-[200]
          flex
          items-center
          justify-center
          rounded-full
          bg-white/85
          backdrop-blur-md
          border
          border-white
          p-2.5
          sm:p-3
          text-[#b9366b]
          shadow-[0_10px_30px_rgba(150,50,90,.18)]
          hover:scale-105
          transition
        "
      >

        {playing ? (
          <Volume2 size={18} />
        ) : (
          <VolumeX size={18} />
        )}

      </button>
    </>
  );
}

export default BirthdayMusic;