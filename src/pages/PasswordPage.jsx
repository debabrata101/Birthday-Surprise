
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const PASSWORD = "9sep2005";

function PasswordPage() {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (success) {
      try {
        localStorage.setItem("unlocked", "true");
      } catch (e) {
        // ignore
      }
      const t = setTimeout(() => navigate("/welcome"), 700);
      return () => clearTimeout(t);
    }
  }, [success, navigate]);

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (value.trim().toLowerCase() === PASSWORD.toLowerCase()) {
      setError("");
      setSuccess(true);
    } else {
      setError("Incorrect password — try again.");
      setSuccess(false);
    }
  };

  return (
    <main className="relative min-h-screen w-full grid place-items-center overflow-hidden bg-gradient-to-br from-pink-50 via-pink-100 to-pink-200">
      {/* Decorative floating hearts */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-10 top-20 text-3xl text-pink-300"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        💕
      </motion.div>

      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-6 bottom-32 text-4xl text-pink-200"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
      >
        
      </motion.div>

      <AnimatePresence>
        <motion.form
          key="form"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 140, damping: 12 }}
          onSubmit={submit}
          className="relative w-[min(520px,92vw)] bg-white/95 p-8 rounded-3xl shadow-[0_20px_60px_rgba(173,61,105,.12)] text-center"
        >
          <motion.h1 className="font-serif text-3xl mb-2 text-[#70263f]" whileTap={{ scale: 0.98 }}>
            Welcome ✨
          </motion.h1>

          <p className="text-sm text-[#7a4a5f] mb-6">Enter the birthdate password to continue</p>

          <div className="mb-4 relative">
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="e.g. Birthdate (9sep2005)"
              aria-label="password"
              className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:ring-4 focus:ring-pink-100 outline-none transition-shadow"
            />

            {submitted && !success && error && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-red-600 mt-2 text-left"
              >
                {error}
              </motion.div>
            )}
          </div>

          <div className="flex gap-3 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full bg-[#d9487d] text-white px-7 py-2 font-bold shadow-md"
            >
              {success ? "Opening..." : "Enter"}
            </motion.button>

            <button
              type="button"
              onClick={() => {
                setValue("");
                setError("");
                setSubmitted(false);
              }}
              className="rounded-full bg-white border border-pink-100 text-[#9e4a6b] px-5 py-2 font-semibold"
            >
              Reset
            </button>
          </div>

          {/* small success badge */}
          <AnimatePresence>
            {success && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="absolute -top-4 right-4 bg-rose-50 border border-rose-200 px-3 py-1 rounded-full text-rose-600 font-semibold"
              >
                ✓
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </AnimatePresence>
    </main>
  );
}

export default PasswordPage;
