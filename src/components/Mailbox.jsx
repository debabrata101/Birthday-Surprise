import { useState } from "react";
import { motion } from "framer-motion";

function Mailbox({ onOpen }) {
  const [opened, setOpened] = useState(false);

  const handleClick = () => {
    if (opened) return;
    setOpened(true);
    // wait for lid + letter animation then notify parent
    setTimeout(() => {
      if (onOpen) onOpen();
    }, 800);
  };

  return (
    <div className="mx-auto block w-[min(420px,92vw)] text-center">
      <motion.div
        onClick={handleClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="relative mx-auto cursor-pointer"
      >
        {/* box base */}
        <div className="w-[320px] sm:w-[380px] mx-auto bg-[#fffdf8] border border-[#f1d9df] rounded-xl shadow-[0_20px_60px_rgba(159,65,98,.12)] p-6 pt-12">
          <h3 className="font-serif text-2xl text-[#8f3d60]">A Letter Is Waiting</h3>
          <p className="text-sm text-[#8f6273] mt-2">Tap the box to open</p>
        </div>

        {/* lid */}
        <motion.div
          className="absolute left-1/2 -top-6 -translate-x-1/2 w-[360px] sm:w-[420px] origin-bottom rounded-t-xl bg-[#f3dfe7] border border-[#e8c5d3] shadow-md"
          initial={{ rotateX: 0 }}
          animate={opened ? { rotateX: -110, y: -30 } : { rotateX: 0, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        {/* letter that pops out */}
        <motion.div
          className="absolute left-1/2 -top-2 -translate-x-1/2 w-[260px] sm:w-[320px]"
          initial={{ y: 10, opacity: 0 }}
          animate={opened ? { y: -120, opacity: 1 } : { y: 10, opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="bg-white rounded-md shadow p-4 text-[#b93f6d] font-semibold">
            ✉️
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Mailbox;
