function getYearsAgo(dateString) {
    const [month, day, year] = dateString.split("/").map(Number);
    const inputDate = new Date(year, month - 1, day);
    const now = new Date();

    let years = now.getFullYear() - inputDate.getFullYear();

    const hasHadBirthdayThisYear =
        now.getMonth() > inputDate.getMonth() ||
        (now.getMonth() === inputDate.getMonth() && now.getDate() >= inputDate.getDate());

    if (!hasHadBirthdayThisYear) {
        years--;
    }

    return years;
}

window.addEventListener("DOMContentLoaded", () => {
    const birthday = "01/03/2010";
    const span = document.getElementById("years-ago");
    if (span) {
        span.innerHTML = `Same age as me (<b>${getYearsAgo(birthday)}</b> years old)`;
        setInterval(() => {
            span.innerHTML = `Same age as me (<b>${getYearsAgo(birthday)}</b> years old)`;
        }, 300000); // five minutes
    }
});