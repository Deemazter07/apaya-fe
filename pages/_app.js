import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { useRouter } from "next/router";
import "./global.css";

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    // Slide In and Out Effect
    <AnimatePresence mode="wait">
      {router.pathname === "/articles" ? (
        <motion.div key={router.pathname} className="w-full">
          <Component {...pageProps} />
          {/* Proggress Bar */}
          <motion.div className="progress-bar" style={{ scaleX }} />
          {/* Proggress Bar */}
          <motion.div
            className="slide-in-right"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 0 }}
            exit={{ scaleX: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          ></motion.div>
          <motion.div
            className="slide-out-left"
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          ></motion.div>
        </motion.div>
      ) : (
        <motion.div key={router.pathname} className="w-full">
          <Component {...pageProps} />
          {/* Proggress Bar */}
          <motion.div className="progress-bar" style={{ scaleX }} />
          {/* Proggress Bar */}
          <motion.div
            className="slide-in-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 0 }}
            exit={{ scaleX: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          ></motion.div>

          <motion.div
            className="slide-out-right"
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          ></motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default App;
