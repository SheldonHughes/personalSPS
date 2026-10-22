const time = () => new Date().toLocaleTimeString();

export function renderHomePage() {
  return `<div class="home">
  <h1>Welcome to the Home Page</h1>
  <p>This is the main landing page of our application.</p>
  <p><strong>Current time:</strong> <span id="time">${time()}</span></p>
</div>`;
}

setInterval(() => {
  const timeElement = document.getElementById("time");
  if (timeElement) {
    timeElement.textContent = time();
  }
}, 1000);
