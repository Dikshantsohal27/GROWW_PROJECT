document.addEventListener("DOMContentLoaded", function() {
  var watchlistHeader = document.getElementById("watchlist-header");
  var watchlistDropdown = document.getElementById("watchlist-dropdown");
  var expandArrow = document.getElementById("expand-arrow");
  var rightContainer = document.querySelector(".right-container-part3");

  watchlistDropdown.style.display = "none";
  

  
  expandArrow.addEventListener("click", function() {
      if (watchlistDropdown.style.display === "none") {
          watchlistDropdown.style.display = "block";
          expandArrow.textContent = "expand_less"; 
          rightContainer.style.border = "none"; 
      } else {
          watchlistDropdown.style.display = "none";
          expandArrow.textContent = "expand_more"; 
      }
  });

  
  var links = document.querySelectorAll('.links');
  links.forEach(link => {
      link.addEventListener('click', function() {
          link.classList.add('active');
      });
  });

  
  //fetchMultipleStocks(["TSLA", "MSFT", "META"]);
});

// async function fetchMultipleStocks(symbols) {
//   for (const symbol of symbols) {
//       await fetchStockData(symbol);
//   }
// }

// async function fetchStockData(symbol) {
//   const url = `https://yahoo-finance127.p.rapidapi.com/price/${symbol}`;
//   const options = {
//       method: 'GET',
//       headers: {
//           'X-RapidAPI-Key': 'f5cc208210msh635775d23d9128bp139697jsn5f231bf98b5d',
//           'X-RapidAPI-Host': 'yahoo-finance127.p.rapidapi.com'
//       }
//   };

//   try {
//       const response = await fetch(url, options);
//       if (!response.ok) {
//           throw new Error(`API call failed with status ${response.status}`);
//       }
//       const data = await response.json();
//       console.log(`${symbol}:`);
//       displayStockData(data);
//   } catch (error) {
//       console.error('Error fetching data:', error);
//   }
// }

// function displayStockData(data) {
//   const stockData = {
//       Ask: { raw: data.ask?.raw, formatted: data.ask?.fmt },
//       'Ask Size': { raw: data.askSize?.raw, formatted: data.askSize?.fmt }
      
//   };

//   Object.entries(stockData).forEach(([key, value]) => {
//       console.log(`  ${key} - Raw: ${value.raw}, Formatted: ${value.formatted}`);
//   });

//   console.log('---------------------------');
// }

document.addEventListener("DOMContentLoaded", function() {
    // Define stream names for each box
    let streamName1 = 'btcusdt@trade';
    let streamName2 = 'bnbusdt@aggTrade';
    let streamName3= 'xrpusdt@trade';

    // WebSocket connection for box1
    var ws1 = new WebSocket(`wss://stream.binance.com:9443/ws/${streamName1}`);

    ws1.onmessage = function(event) {
        var data = JSON.parse(event.data);
        var price = parseFloat(data.p).toFixed(2);

        // Update box1
        var box1 = document.getElementById('box1');
        var ask1 = box1.querySelector('.ask');
        var askSize1 = box1.querySelector('.ask-size');
        ask1.textContent = "Price: " + price;
        askSize1.textContent = "Ask Size: " + data.q; // Assuming askSize field is 'q'
    };

    // WebSocket connection for box2
    var ws2 = new WebSocket(`wss://stream.binance.com:9443/ws/${streamName2}`);

    ws2.onmessage = function(event) {
        var data = JSON.parse(event.data);
        var price = parseFloat(data.p).toFixed(2);

        // Update box2
        var box2 = document.getElementById('box2');
        var ask2 = box2.querySelector('.ask');
        var askSize2 = box2.querySelector('.ask-size');
        ask2.textContent = "Price: " + price;
        askSize2.textContent = "Ask Size: " + data.q; // Assuming askSize field is 'q'
    };

    // Similarly, you can add WebSocket connections for other boxes...

    var ws3 = new WebSocket(`wss://stream.binance.com:9443/ws/${streamName3}`);

ws3.onmessage = function(event) {
    console.log("Received message on ws3:", event.data); // Log received message
    var data = JSON.parse(event.data);
    var price = parseFloat(data.p).toFixed(1);

    // Update box3
    var box3 = document.getElementById('box3');
    var ask3 = box3.querySelector('.ask');
    var askSize3 = box3.querySelector('.ask-size');
    ask3.textContent = "Price: " + price;
    askSize3.textContent = "Ask Size: " + data.q; // Assuming askSize field is 'q'
};

ws3.onerror = function(event) {
    console.error("WebSocket error:", event); // Log WebSocket error
};
});
