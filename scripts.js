// Pull items
const plank = document.getElementById("plank");
const items = document.getElementById("items");
const leftWeightText = document.getElementById("leftWeight");
const rightWeightText = document.getElementById("rightWeight");
const nextWeightText = document.getElementById("nextWeight");
const tiltAngleText = document.getElementById("tiltAngle");
const statusBox = document.getElementById("statusBox");
const resetBtn = document.getElementById("resetBtn");

// Default simulation değerleri
const plankWidth = 400;
const centerX = plankWidth / 2;
const maxAngle = 30;
const storageKey = "seesawData";

// Değişkenler
let placedWeights = [];
let nextWeight = randomWeight();

// Random ağırlık üretimi
function randomWeight() {
    return Math.floor(Math.random() * 10) + 1;
}

function drawWeights() {
    items.innerHTML = "";

    for (let i = 0; i < placedWeights.length; i++) {
        const item = placedWeights[i];
        const weightEl = document.createElement("div");

        weightEl.className = "weight";
        weightEl.style.left = item.x + "px";
        weightEl.textContent = item.weight + "kg";

        items.appendChild(weightEl);
    }
}

// Tork hesaplama
function calculateTorque() {
    let leftTorque = 0;
    let rightTorque = 0;

    for (let i = 0; i < placedWeights.length; i++) {
        const item = placedWeights[i];
        const distance = Math.abs(item.x - centerX);

        if (item.x < centerX) {
            leftTorque += item.weight * distance;
        } else {
            rightTorque += item.weight * distance;
        }
    }

    return {
        leftTorque,
        rightTorque
    };
}


// ağırlık sağ sol hesaplama
function updateWeights() {
    let leftTotal = 0;
    let rightTotal = 0;

    for (let i = 0; i < placedWeights.length; i++) {
        const item = placedWeights[i];

        if (item.x < centerX) {
            leftTotal += item.weight;
        } else {
            rightTotal += item.weight;
        }
    }

    leftWeightText.textContent = leftTotal + " kg";
    rightWeightText.textContent = rightTotal + " kg";

    const torque = calculateTorque();

    statusBox.innerHTML =
        "Left torque: " + torque.leftTorque.toFixed(1) + "<br>" +
        "Right torque: " + torque.rightTorque.toFixed(1);
}


// ağırlığı ekleme
function addWeight(clickX) {
    placedWeights.push({
        x: clickX,
        weight: randomWeight()
    });

    drawWeights();
    updateWeights();
}

// Planke tıklanılan yeri bulma
plank.addEventListener("click", function (e) {
    let clickX = e.offsetX;
    addWeight(clickX);
});