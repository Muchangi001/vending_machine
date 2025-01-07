let dateWidget = document.querySelector(".date");
let timeWidget = document.querySelector(".time");

function updateTime() {
    setInterval(() => {
        pywebview.api.get_current_time()
        .then((time) => {
            dateWidget.textContent = `${time.day_date} ${time.day_name} ${time.month_name}`;
            timeWidget.textContent = `${time.hour}:${time.minute}`;
        })
        .catch((error) => {
            timeWidget.textContent = "Error fetching time";
        });
    }, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
    updateTime();
});


