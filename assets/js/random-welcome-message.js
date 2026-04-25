const h1 = document.getElementById("welcome-msg");

const random_msgs = [
    "Hi!",
    "Hey, I'm Hollo",
    "Welcome to my page :3"
];

h1.textContent = random_msgs[Math.floor(Math.random() * random_msgs.length)];