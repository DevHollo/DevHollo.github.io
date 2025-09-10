function getYearsAgo(dateString) {
    const [month, day, year] = dateString.split("/").map(Number);
    const inputDate = new Date(year, month - 1, day);
    const now = new Date();
    let years = now.getFullYear() - inputDate.getFullYear();
    const hasHadBirthdayThisYear =
        now.getMonth() > inputDate.getMonth() ||
        (now.getMonth() === inputDate.getMonth() &&
            now.getDate() >= inputDate.getDate());
    if (!hasHadBirthdayThisYear) {
        years--;
    }
    return years;
}

window.addEventListener("DOMContentLoaded", () => {
    const birthday = "01/03/2010";
    const li = document.getElementById("years-ago");
    if (li) {
        li.innerHTML = `I am <b>${getYearsAgo(birthday)}</b> years old (2010)`;
        setInterval(() => {
            li.innerHTML = `I am <b>${getYearsAgo(birthday)}</b> years old (2010)`;
        }, 300000);
    }
});