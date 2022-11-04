const submitBtn = document.getElementById('submitBtn')
const warframeCards = document.getElementById('cardDisplay')
let warframes = []


const collectData = () => {
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

const addData = (obj) => {
    warframes = [...warframes, obj]
    buildCard(warframes)
}

const buildCard = (arr) => {
    let card;

    warframes.forEach(warframe => {
        card = `
        <div class="card mb-3 warframe-card">
        <div class="row g-0">
            <div class="col-md-4">
            <img src="${warframe.warframeImage}" class="img-fluid" alt="...">
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h2 class="card-title card-header" id="warframeName">${warframe.warframeName}</h2>
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
                        <p class="card-text">Health
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
</svg>
                        </p>
                    </div>
                    <div class="col-md-3">
                        ${warframe.warframeShield}
                        <p class="card-text">Shield
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shield" viewBox="0 0 16 16">
<path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
</svg>
                        </p>
                    </div>
                    <div class="col-md-3">
                        ${warframe.warframeArmor}
                        <p class="card-text">Armor
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bricks" viewBox="0 0 16 16">
<path d="M0 .5A.5.5 0 0 1 .5 0h15a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H14v2h1.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H14v2h1.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5H2v-2H.5a.5.5 0 0 1-.5-.5v-3A.5.5 0 0 1 .5 6H2V4H.5a.5.5 0 0 1-.5-.5v-3zM3 4v2h4.5V4H3zm5.5 0v2H13V4H8.5zM3 10v2h4.5v-2H3zm5.5 0v2H13v-2H8.5zM1 1v2h3.5V1H1zm4.5 0v2h5V1h-5zm6 0v2H15V1h-3.5zM1 7v2h3.5V7H1zm4.5 0v2h5V7h-5zm6 0v2H15V7h-3.5zM1 13v2h3.5v-2H1zm4.5 0v2h5v-2h-5zm6 0v2H15v-2h-3.5z"/>
</svg>
                        </p>
                    </div>
                    <div class="col-md-3">
                        ${warframe.warframeEnergy}
                        <p class="card-text">Energy
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-battery" viewBox="0 0 16 16">
<path d="M0 6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6zm2-1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H2zm14 3a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8z"/>
</svg>
                        </p>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        `
    })
    const warframeCards = document.getElementById('cardDisplay')
    warframeCards.innerHTML += card
}

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    collectData()

    // console.log(warframeCards)
})