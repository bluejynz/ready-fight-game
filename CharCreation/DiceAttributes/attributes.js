const dice = {
    1: `<div class="die">
            <div class="column">
                <div class="dot hidden"></div>
                <div class="dot hidden"></div>
                <div class="dot hidden"></div>
            </div>
            <div class="column center-column">
                <div class="dot"></div>
            </div>
            <div class="column">
                <div class="dot hidden"></div>
                <div class="dot hidden"></div>
                <div class="dot hidden"></div>
            </div>
        </div>`,
    2: `<div class="die">
            <div class="column">
                <div class="dot"></div>
                <div class="dot hidden"></div>
                <div class="dot hidden"></div>
            </div>
            <div class="column center-column">
                <div class="dot hidden"></div>
            </div>
            <div class="column">
                <div class="dot hidden"></div>
                <div class="dot hidden"></div>
                <div class="dot"></div>
            </div>
        </div>`,
    3: `<div class="die">
            <div class="column">
                <div class="dot"></div>
                <div class="dot hidden"></div>
                <div class="dot hidden"></div>
            </div>
            <div class="column center-column">
                <div class="dot"></div>
            </div>
            <div class="column">
                <div class="dot hidden"></div>
                <div class="dot hidden"></div>
                <div class="dot"></div>
            </div>
        </div>`,
    4: `<div class="die">
            <div class="column">
                <div class="dot"></div>
                <div class="dot hidden"></div>
                <div class="dot"></div>
            </div>
            <div class="column center-column">
                <div class="dot hidden"></div>
            </div>
            <div class="column">
                <div class="dot"></div>
                <div class="dot hidden"></div>
                <div class="dot"></div>
            </div>
        </div>`,
    5: `<div class="die">
            <div class="column">
                <div class="dot"></div>
                <div class="dot hidden"></div>
                <div class="dot"></div>
            </div>
            <div class="column center-column">
                <div class="dot"></div>
            </div>
            <div class="column">
                <div class="dot"></div>
                <div class="dot hidden"></div>
                <div class="dot"></div>
            </div>
        </div>`,
    6: `<div class="die">
            <div class="column">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
            <div class="column center-column">
                <div class="dot hidden"></div>
            </div>
            <div class="column">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
        </div>`,
};

let diceAttributeRolls = [];

function roll(btn) {
    btn.textContent = `Roll dice x${5 - diceAttributeRolls.length}`;
    let rngRolls = rollDice(5, 6);
    diceAttributeRolls.push(sumResultsNoMinor(rngRolls));
    saveDiceResults(diceAttributeRolls);
    createDiceElements(rngRolls);
    if (diceAttributeRolls.length >= 6) {
        btn.remove();
    }
}

function sumResultsNoMinor(results) {
    let sum = 0;
    for (i = 0; i < results.length; i++) {
        if (getIndexOfMinorValue(results) != i) {
            sum += results[i];
        }
    }
    return sum;
}

function createDiceElements(rngRolls) {
    let diceContainer = document.getElementById("dice-container");
    diceContainer.innerHTML = "";
    if (!document.getElementById("h2-dice-info")) {
        let h2Info = document.createElement("h2");
        h2Info.id = "h2-dice-info";
        h2Info.textContent = "Suas rolagens foram:";
        diceContainer.before(h2Info);
    }
    let minorIndex = getIndexOfMinorValue(rngRolls);
    rngRolls.forEach((r) => {
        diceContainer.innerHTML += dice[r];
    });
    let minorDieElement = diceContainer.children[minorIndex];
    minorDieElement.classList.add("minor-die");
    createAttributesAllocationElements();
}

function saveDiceResults(values) {
    console.log("Array stringify", JSON.stringify(values));
    const diceResults = JSON.stringify(values);
    localStorage.setItem('diceResults', diceResults);
}

function createAttributesAllocationElements() {
    // TODO:
    // criar mais um main-container no html escondido
    // ao chamar essa função mostrar o container
    let allocationContainer = document.getElementById("allocation-container");
    allocationContainer.classList.remove("hidden");
    // colocar todos os atributos
    // ao lado um select com os valores rolados pelos dados
    // quando selecionar um, esse mesmo não pode ser selecionado em outro
    // fazer os atributos baseados em d&d 5e
}

function rollDice(qty, size) {
    let rngRolls = [];
    for (let i = 1; i <= qty; i++) {
        rngRolls.push(randomIntFromInterval(1, size));
    }
    return rngRolls;
}

function getIndexOfMinorValue(arr) {
    let minorValue;
    let minorIndex;
    for (let i = 0; i < arr.length; i++) {
        if (!minorValue) {
            minorValue = arr[i];
            minorIndex = i;
        } else if (arr[i] < minorValue) {
            minorValue = arr[i];
            minorIndex = i;
        }
        if (minorValue && minorValue == 1) {
            break;
        }
    }
    return minorIndex;
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
