import { useEffect } from 'react';
import Helpers from '../Helpers/Helpers';

const LoadScripts = () => {
  useEffect(() => {
    async function loadScriptsAndInit() {
      try {
        await Helpers.loadScript("assets/js/jquery-3.7.1.min.js");
        await Helpers.loadScript("assets/js/plugins.min.js");
        await Helpers.loadScript("assets/js/plugins/dsn-grid.min.js");
        await Helpers.loadScript("assets/js/custom.js");

        setTimeout(() => {
          if (!window._dsnAlreadyInitialized && typeof window.dsnInit === "function") {
            console.log("Calling dsnInit...");
            window.dsnInit();
            window._dsnAlreadyInitialized = true;
          }
        }, 300);
      } catch (error) {
        console.error("Script loading failed:", error);
      }
    }

    loadScriptsAndInit();

    return () => {
      window._dsnAlreadyInitialized = false;
    };
  }, []);
};

export default LoadScripts;
