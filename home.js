const time = () => new Date().toLocaleTimeString();

export function renderHomePage() {
  return `<div class="home">
              <div class="welcome-card">
                <h1>Welcome to the Home Page</h1>
                  <p class="welcome-text">This is the main landing page of our application.</p>
                <div class="time-card">
                  <p><strong>Current time:</strong> <span id="time">${time()}</span></p>
                <div class="clock">
                  <div class="clock-face">
                  <time datetime="12:00">12</time>
                  <time datetime="1:00">1</time>
                  <time datetime="2:00">2</time>
                  <time datetime="3:00">3</time>
                  <time datetime="4:00">4</time>
                  <time datetime="5:00">5</time>
                  <time datetime="6:00">6</time>
                  <time datetime="7:00">7</time>
                  <time datetime="8:00">8</time>
                  <time datetime="9:00">9</time>
                  <time datetime="10:00">10</time>
                  <time datetime="11:00">11</time>
                  </div>
                </div>
              </div>
            </div>
          </div>`;
}

setInterval(() => {
  const timeElement = document.getElementById("time");
  if (timeElement) {
    timeElement.textContent = time();
  }
}, 1000);
