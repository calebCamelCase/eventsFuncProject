const submitBtn = document.getElementById('submitBtn')
const warframeCards = document.getElementById('cardDisplay')
let warframes = []


const collectData =()=> {
    // name, health, shield, armor, energy, skill names, passive, acquistion, image


    const warframeName = document.getElementById('wfName').value
    const warframeHealth = document.getElementById('wfHealth').value
    const warframeShield = document.getElementById('wfShield').value
    const warframeArmor = document.getElementById('wfArmor').value
    const warframeEnergy = document.getElementById('wfEnergy').value
    const warframeSkill1 = document.getElementById('skill1').value
    const warframeSkill2 = document.getElementById('skill2').value
    const warframeSkill3 = document.getElementById('skill3').value
    const warframeSkill4 = document.getElementById('skill4').value
    const warframePassive = document.getElementById('wfPassive').value
    const warframeSources = document.getElementById('wfSources').value
    const warframeImage = document.getElementById('wfImage').value

    let data = {
        warframeName,
        warframeHealth,
        warframeShield,
        warframeArmor,
        warframeEnergy,
        warframeSkill1,
        warframeSkill2,
        warframeSkill3,
        warframeSkill4,
        warframePassive,
        warframeSources,
        warframeImage
    }

    addData(data)
}

const addData =(obj)=> {
    warframes = [...warframes, obj]
    buildCard(warframes)
}

const buildCard =(arr)=> {
    let card;

    warframes.forEach(warframe => {
        card =`
        <div class="card mb-3 warframe-card">
        <div class="row g-0">
            <div class="col-md-4">
            <img src="${warframe.warframeImage}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h2 class="card-title" id="warframeName">${warframe.warframeName}</h2>
                <p class="card-text" id="wfSkill1">${warframe.warframeSkill1}</p>
                <p class="card-text" id="wfSkill2">${warframe.warframeSkill2}</p>
                <p class="card-text" id="wfSkill3">${warframe.warframeSkill3}</p>
                <p class="card-text" id="wfSkill4">${warframe.warframeSkill4}</p>
                <p class="card-text text-muted" id="warframePassive">${warframe.warframePassive}</p>
                <p class="card-text" id="warframeSources"><small class="text-muted">${warframe.warframeSources}</small></p>
            </div>
            <div class="card-footer">
                <div class="row">
                    <div class="col-md-3">
                        ${warframe.warframeHealth}
                        <p class="card-text">Health</p>
                        <i class="bi bi-heart"></i>
                    </div>
                    <div class="col-md-3">
                        ${warframe.warframeShield}
                        <p class="card-text">Shield</p>
                        <i class="bi bi-shield"></i>
                    </div>
                    <div class="col-md-3">
                        ${warframe.warframeArmor}
                        <p class="card-text">Armor</p>
                        <i class="bi bi-box"></i>
                    </div>
                    <div class="col-md-3">
                        ${warframe.warframeEnergy}
                        <p class="card-text">Energy</p>
                        <i class="bi bi-battery"></i>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        `
    })
    const warframeCards = document.getElementById('cardDisplay')
    warframeCards.innerHTML+= card
}

submitBtn.addEventListener('click', (e)=> {
    e.preventDefault()
    collectData()

    console.log(warframeCards)
})