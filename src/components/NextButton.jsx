import {
  ArrowRight
} from "lucide-react";

function NextButton({
  children,
  onClick
}) {
  return (
    <button
      onClick={onClick}
      className="
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-full
        bg-[#d9487d]
        text-white
        px-5
        sm:px-7
        py-3
        sm:py-3.5
        text-sm
        sm:text-base
        font-bold
        shadow-[0_12px_30px_rgba(217,72,125,.28)]
        hover:scale-105
        active:scale-95
        transition
        duration-300
      "
    >
      {children}

      <ArrowRight
        size={18}
      />

    </button>
  );
}

export default NextButton;