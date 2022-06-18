// Write your code here!

const newHeader = document.createElement("h1");
const removeMain = document.getElementById("main")
removeMain.remove("main")
newHeader.id = 'victory';
newHeader.textContent = 'Levi is the champion';
document.body.append(newHeader);