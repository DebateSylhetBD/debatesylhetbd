// Create sticky ad container
var adDiv = document.createElement("div");
adDiv.id = "sticky-ad";
adDiv.style.position = "fixed";
adDiv.style.bottom = "0";
adDiv.style.left = "0";
adDiv.style.width = "100%";
adDiv.style.textAlign = "center";
adDiv.style.zIndex = "9999";
adDiv.style.background = "#ffffff";
adDiv.style.boxShadow = "0 -2px 10px rgba(0,0,0,0.15)";
adDiv.style.padding = "5px 0";

document.body.appendChild(adDiv);

// Adsterra configuration
var atScript1 = document.createElement("script");
atScript1.innerHTML = `
  atOptions = {
    'key' : '97eaa956c295deb2e507ef43d5611498',
    'format' : 'iframe',
    'height' : 50,
    'width' : 320,
    'params' : {}
  };
`;
adDiv.appendChild(atScript1);

// Adsterra invoke script
var atScript2 = document.createElement("script");
atScript2.src = "https://www.highperformanceformat.com/97eaa956c295deb2e507ef43d5611498/invoke.js";
adDiv.appendChild(atScript2);
