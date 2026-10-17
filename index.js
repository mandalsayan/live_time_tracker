const current_time = document.getElementById("time");
const current_date = document.getElementById("date");

function updateTime(){
    const now = new Date();
    const hour = (now.getHours() % 12) || 12;
    const minutes = now.getMinutes() < 10 ? `0${now.getMinutes()}` : `${now.getMinutes()}`;
    const seconds = now.getSeconds() < 10 ? `0${now.getSeconds()}` : `${now.getSeconds()}`;
    const ampm = now.getHours() >= 12 ? "PM" : "AM";

    current_time.textContent = `${hour}:${minutes}:${seconds} ${ampm}`;

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    current_date.textContent = now.toLocaleDateString(undefined, options);
}

setInterval(() => updateTime(), 1000);

updateTime();