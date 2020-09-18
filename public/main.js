getCSS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/style.css"); 
    request.onreadystatechange = () => {
      if (request.readyState === 4) {
        if (request.status >= 200 && request.status < 300) {
          const style = document.createElement("style");
          style.innerHTML = request.response;
          document.head.appendChild(style);
        } else {
          alert("加载 CSS 失败");
        }
      }
    };
    request.send(); // readyState = 2
};
  
getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/2.js"); 
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const script = document.createElement("script");
        script.innerHTML = request.response;
        document.head.appendChild(script);
      } else {
        alert("加载 js 失败");
      }
    }
  };
  request.send(); // readyState = 2
};

getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/3.html"); 
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const div = document.createElement("div");
        div.innerHTML = request.response;
        document.body.appendChild(div);
      } else {
        alert("加载 html 失败");
      }
    }
  };
  request.send(); // readyState = 2
};

getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/4.xml"); 
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const dom = request.responseXML;
        const text = dom.getElementsByTagName("warning")[0].textContent;
        console.log(text.trim());
      } else {
        alert("加载 xml 失败");
      }
    }
  };
  request.send(); // readyState = 2
};

getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/5.json"); 
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const bool = JSON.parse(request.response);
        console.log(bool);
      } else {
        alert("加载 json 失败");
      }
    }
  };
  request.send(); // readyState = 2
};