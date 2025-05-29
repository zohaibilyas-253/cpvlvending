// public/assets/js/init.js
(async function () {
    await new Promise(res => {
      const jq = document.createElement("script");
      jq.src = "https://code.jquery.com/jquery-3.7.1.min.js";
      jq.onload = res;
      document.body.appendChild(jq);
    });
  
    await Promise.all([
      "/assets/js/plugins.min.js",
      "/assets/js/plugins/dsn-grid.min.js",
      "/assets/js/custom.js"
    ].map(src => new Promise(res => {
      const s = document.createElement("script");
      s.src = src;
      s.onload = res;
      document.body.appendChild(s);
    })));
  })();
  