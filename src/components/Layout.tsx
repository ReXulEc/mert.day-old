import Navbar from "./Navbar";
import Footer from "./Footer";
import Header from "./Header";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const size = useWindowSize();
    console.log(size.value);
    const stylesa = { height: `calc(100% - ${size.value}rem)` }
    return (
        <motion.div exit={{ opacity: 0, transition: { duration: 1 } }} className="w-full h-screen flex flex-col justify-">
            <Header />
            <Navbar />
            <AnimatePresence mode="wait">
                <motion.main
                    key={router.route}
                    style={stylesa} id="mn"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.2 } }}
                    className="overflow-y-auto"
                >
                    {children}
                </motion.main>
            </AnimatePresence>
            <Footer />
        </motion.div>
    );
};

// Hook
function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
      value: undefined,
    });
  
    useEffect(() => {
      // only execute all the code below in client side
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
          value: window.innerWidth > 650 ? "5" : "2.5",
        });
      }
      
      // Add event listener
      window.addEventListener("resize", handleResize);
       
      // Call handler right away so state gets updated with initial window size
      handleResize();
      
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

export default Layout;