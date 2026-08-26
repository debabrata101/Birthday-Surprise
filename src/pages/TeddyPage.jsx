import { useNavigate } from "react-router-dom";

import Balloons from "../Components/Balloons";
import PhotoFrame from "../Components/PhotoFrame";
import AltaTree from "../Components/AltaTree";
import NextButton from "../Components/NextButton";

function TeddyPage() {
  const navigate = useNavigate();

  return (
    <main
      className="
        screen-fit
        relative
        overflow-hidden
        bg-gradient-to-br
        from-[#fff5f9]
        via-[#ffe1ec]
        to-[#ffc4d9]
          pt-15
      "
    >
      <Balloons amount={8} />

      <section
        className="
          relative
          z-10
          h-full
          w-full
          w-[min(1200px,94vw)]
            mx-auto
          flex
          flex-col
          items-center
          justify-center
          px-4
          sm:px-6
          pb-5
        "
      >
        {/* TITLE */}

        <div
          className="
          text-center
          shrink-0
        "
        >
          <p
            className="
              uppercase
              tracking-[.22em]
              text-[9px]
              sm:text-xs
              font-bold
              text-[#b65376]
            "
          >
            Surprise · 01
          </p>

          <h1
            className="
              font-serif
              text-2xl
              sm:text-4xl
              md:text-5xl
              font-bold
              text-[#70263f]
            "
          >
            A Little Garden For Sundari 🌸
          </h1>
        </div>

        {/* PHOTO + TREE */}

        <div
          className="
            w-full
            flex
            items-center
            justify-center
            gap-3
            sm:gap-6
            md:gap-10
            flex-1
            min-h-0
            max-h-[65vh]
          "
        >
          {/* PHOTO */}

          <div
            className="
              w-[44%]
              max-w-[430px]
              min-w-0
            "
          >
            <PhotoFrame />
          </div>

          {/* TREE */}

          <div
            className="
              w-[44%]
              max-w-[430px]
              min-w-0
            "
          >
            <AltaTree />
          </div>
        </div>

        {/* BUTTON */}

        <div
          className="
            shrink-0
            mt-2
          "
        >
          <NextButton onClick={() => navigate("/cake")}>
            Next Surprise: The Cake
          </NextButton>
        </div>
      </section>
    </main>
  );
}

export default TeddyPage;
