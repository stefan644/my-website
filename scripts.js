// Data for different sections
const viruseinkenniData = [
    { name: 'Hálsbólga', type: 'PlusMinus', positive: 'Hálsbólga', negative: 'Ekki hálsbólga' },
    { name: 'Kvef', type: 'PlusMinus', positive: 'Kvef', negative: 'Ekki kvef' },
    { name: 'Hósti', type: 'PlusMinus', positive: 'Hósti', negative: 'Ekki hósti' },
    { name: 'Uppgangur', type: 'PlusMinus', positive: 'Uppgangur', negative: 'Ekki uppgangur' },
    { name: 'Hiti', type: 'PlusMinus', positive: 'Hiti', negative: 'Ekki hiti' },
    { name: 'Þrýstingur yfir ennisholum', type: 'PlusMinus', positive: 'Þrýstingur yfir ennisholum', negative: 'Ekki þrýstingur yfir ennisholum' },
    { name: 'Eyrnaverkur hægra megin', type: 'PlusMinus', positive: 'Eyrnaverkur hægra megin', negative: 'Neitar einkennum frá eyrum' },
    { name: 'Eyrnaverkur vinstra megin', type: 'PlusMinus', positive: 'Eyrnaverkur vinstra megin', negative: 'Neitar einkennum frá eyrum' },
    { name: 'Eyrnaverkur beggja vegna', type: 'PlusMinus', positive: 'Eyrnaverkur beggja vegna', negative: 'Neitar einkennum frá eyrum' },
    { name: 'Slappleiki', type: 'PlusMinus', positive: 'Slappleiki', negative: 'Ekki áberandi slappleiki' },
    { name: 'Margir veikir á heimili', type: 'PlusMinus', positive: 'Margir veikir á heimili', negative: 'Enginn annar veikur í kringum hann' }
];

const lutsData = [
    { name: 'Blöðrubólga', type: 'Medium', display: ['Grunur', 'Jákv stix heima'], output: ['Grunar sig vera með blöðrubólgu', 'Jákv stix heima'] },
    { name: 'Fengið áður', type: 'PlusMinus', positive: 'Þekkir einkennin', negative: 'Aldrei fengið áður' },
    { name: 'Óþægindi', type: 'PlusMinus', positive: 'Óþægindi við þvaglát', negative: 'Ekki óþægindi við þvaglát' },
    { name: 'Sviði', type: 'PlusMinus', positive: 'Sviði við þvaglát', negative: 'Ekki sviði við þvaglát' },
    { name: 'Tíð', type: 'PlusMinus', positive: 'Tíð þvaglát', negative: 'Ekki tíð þvaglát' },
    { name: 'Blóð', type: 'PlusMinus', positive: 'Blóð í þvagi', negative: 'Ekki blóð í þvagi' },
    { name: 'Hiti', type: 'PlusMinus', positive: 'Verið með hita', negative: 'Ekki fengið hita' },
    { name: 'Bakverkur', type: 'PlusMinus', positive: 'Bakverkur, nýtilkominn', negative: 'Ekki nýtilkominn bakverkur' },
    { name: 'Slappleiki', type: 'PlusMinus', positive: 'Almennur slappleiki', negative: 'Ekki fundið fyrir slappleika' }
];

const lutsSkodunData = [
    { name: 'Lasleg', type: 'PlusMinus', positive: 'Lasleg að sjá', negative: 'Ekki bráðveikindaleg að sjá' },
    { name: 'Laslegur', type: 'PlusMinus', positive: 'Laslegur að sjá', negative: 'Ekki bráðveikindalegur að sjá' },
    { name: 'Bankum', type: 'Medium', display: ['Bankaum hæ', 'Bankaum vi', 'Ekki bankaum'], output: ['Bankaum yfir nýrnastað hæ megin', 'Bankaum yfir nýrnastað vi megin', 'Ekki bankeymsli yfir nýrnastað'] },
    { name: 'Nítrít', type: 'PlusMinus', positive: 'Jákv nítrít í þvagi', negative: 'Þvagstix hreint' },
    { name: 'Hvít', type: 'PlusMinus', positive: 'Hvít í þvagi', negative: 'Þvagstix hreint' },
    { name: 'Þvagstix', type: 'PlusMinus', positive: 'Þvagstix jákv', negative: 'Þvagstix hreint' }
];

const lutsPlanData = [
    { name: 'Greining', type: 'Medium', display: ['Blöðrubólga', 'Pyelonephritis', 'Prostatitis'], output: ['Grunur um blöðrubólgu', 'Grunur um pyelonephritis', 'Grunur um prostatitis'] },
    { name: 'Rannsóknir', type: 'Medium', display: ['CRP hátt', 'CRP lágt'], output: ['CRP nokkuð hátt', 'CRP lágt'] },
    { name: 'Ofnæmi', type: 'Medium', display: ['Penisillinofnæmi'], output: ['Ofnæmi fyrir penisillin'] },
    { name: 'Meðferð', type: 'Medium', display: ['Ráðleggingar', 'Sýklalyf', 'Myndataka', 'Stuðningsmeðferð'], output: ['Almennar ráðleggingar', 'Ráðlegg sýklalyf', 'Ráðlegg myndatöku', 'Ráðlegg stuðningsmeðferð'] },
    { name: 'Meðferð', type: 'Medium', display: ['Blóðprufa', 'BMT', 'Idotrim'], output: ['Panta blóðprufu', 'Vísa á bráðamóttöku', 'Set á idotrim'] },
    { name: 'Meðferð', type: 'Medium', display: ['Furadantin', 'Amoxin', 'Keflex', 'Selexid'], output: ['Set á furadantin', 'Set á amoxicillin', 'Set á keflex', 'Set á selexíð'] },
    { name: 'Eftirfylgd', type: 'Medium', display: ['Endurmat pn', 'Endurmat ef versnar', 'Símatíma', 'Heilsugæsla'], output: ['Endurmat pn', 'Endurmat ef versnar', 'Pantar sér símatíma til að fá niðurstöður', 'Eftirfylgd á sinni heilsugæslu'] }
];

const bakverkurData = [
    // Add Bakverkur data here if needed
];

const timalengdData = [
    { display: '1d', output: '1d saga' },
    { display: '2d', output: '2d saga' },
    { display: '3d', output: '3d saga' },
    { display: '4d', output: '4d saga' },
    { display: '5d', output: '5d saga' },
    { display: '6d', output: '6d saga' },
    { display: '1v', output: '1 vikna saga' },
    { display: '1,5v', output: '1,5 vikna saga' },
    { display: '2v', output: '2 vikna saga' },
    { display: '3v', output: '3 vikna saga' },
    { display: '1m', output: '1 mán saga' },
    { display: '2m', output: '2 mán saga' },
    { display: '3m', output: '3 mán saga' },
    { display: '4m', output: '4 mán saga' },
    { display: '5m', output: '5 mán saga' },
    { display: '6m', output: '6 mán saga' }
];

const skodunData = [
    { name: 'Laslegur', type: 'PlusMinus', positive: 'Laslegur að sjá', negative: 'Ekki bráðveikindalegur að sjá' },
    { name: 'Lasleg', type: 'PlusMinus', positive: 'Lasleg að sjá', negative: 'Ekki bráðveikindaleg að sjá' },
    { name: 'Háls - Roði', type: 'PlusMinus', positive: 'Dálítill roði í koki', negative: 'Ekki roði í koki' },
    { name: 'Háls - Gröftur', type: 'PlusMinus', positive: 'Gröftur á hálskirtlum', negative: 'Ekki gröftur á hálskirtlum' },
    { name: 'Stórir hálskirtlar', type: 'PlusMinus', positive: 'Hálskirtlar stórir', negative: 'Ekki áberandi stórir hálskirtlar' },
    { name: 'Eitlastækkanir', type: 'PlusMinus', positive: 'Vægar eitlastækkanir á hálsi', negative: 'Ekki eitlastækkanir á hálsi' },
    { name: 'Lungnahlustun', type: 'Medium', display: ['Hrein', 'Gróf', 'Slímhljóð basalt', 'Brak hæ', 'Brak vi'], output: ['Lungnahlustun hrein', 'Gróf lungnahlustun', 'Við lungnahlustun heyrast slímhljóð basalt, hrein a.ö.l', 'Við hlustun heyrist brak hægra megin', 'Við hlustun heyrist brak vinstra megin'] },
    { name: 'Hljóðhimnur', type: 'Medium', display: ['Roði hæ', 'Roði vi', 'Eðl hæ', 'Eðl vi'], output: ['Roði á hægri hljóðhimnu', 'Roði á vinstri hljóðhimnu', 'Hljóðhimna hægra megin eðlileg', 'Hljóðhimna vinstra megin eðlileg'] },
    { name: 'Mergur', type: 'Medium', display: ['Mergur hæ', 'Mergur vi'], output: ['Eyrnamergur hægra megin', 'Eyrnamergur vinstra megin'] },
    { name: 'Streptest', type: 'PlusMinus', positive: 'Strep jákv', negative: 'Strep neikv' }
];

const mettunData = [
    { display: '100', output: 'Mettar 100%' },
    { display: '99', output: 'Mettar 99%' },
    { display: '98', output: 'Mettar 98%' },
    { display: '97', output: 'Mettar 97%' },
    { display: '96', output: 'Mettar 96%' },
    { display: '95', output: 'Mettar 95%' },
    { display: '94', output: 'Mettar 94%' },
    { display: '93', output: 'Mettar 93%' },
    { display: '92', output: 'Mettar 92%' },
    { display: '91', output: 'Mettar 91%' },
    { display: '90', output: 'Mettar 90%' },
    { display: '89', output: 'Mettar 89%' },
    { display: '88', output: 'Mettar 88%' },
    { display: '87', output: 'Mettar 87%' }
];

const planData = [
    { name: 'Greining', type: 'Medium', display: ['Strep', 'Vírósa', 'Eyrnabólga', 'Lungnabólga'], output: ['Strep throat', 'Vírósa', 'Eyrnabólga', 'Lungnabólga'] },
    { name: 'Greining', type: 'Medium', display: ['Sinusitis', 'Bronchitis', 'Versnun á COPD', 'Astmi'], output: ['Sinusitis', 'Bronchitis', 'Versnun á COPD', 'Astmi'] },
    { name: 'Rannsóknir', type: 'Medium', display: ['CRP hátt', 'CRP lágt', 'Streptest jákv', 'Streptest neikv'], output: ['CRP nokkuð hátt', 'CRP lágt', 'Streptest jákv', 'Streptest neikv'] },
    { name: 'Ofnæmi', type: 'Medium', display: ['Penisillinofnæmi', 'Keflex'], output: ['Ofnæmi fyrir penisillin', 'Set á keflex'] },
    { name: 'Meðferð', type: 'Medium', display: ['Ráðleggingar', 'Sýklalyf', 'Myndataka', 'Stuðningsmeðferð'], output: ['Almennar ráðleggingar', 'Ráðlegg sýklalyf', 'Ráðlegg myndatöku', 'Ráðlegg stuðningsmeðferð'] },
    { name: 'Meðferð', type: 'Medium', display: ['Slímlosandi', 'Kódein', 'Blóðprufa', 'BMT'], output: ['Reynum slímlosandi', 'Fær lyf við hósta', 'Panta blóðprufu', 'Vísa á bráðamóttöku'] },
    { name: 'Meðferð', type: 'Medium', display: ['Azithromycin', 'Amoxin', 'Spectracillin', 'Kaavepenin'], output: ['Set á azithromycin', 'Set á amoxicillin', 'Set á spectracillin', 'Set á kaavepenin'] },
    { name: 'Eftirfylgd', type: 'Medium', display: ['Endurmat pn', 'Endurmat ef versnar', 'Símatíma', 'Heilsugæsla'], output: ['Endurmat pn', 'Endurmat ef versnar', 'Pantar sér símatíma til að fá niðurstöður', 'Eftirfylgd á sinni heilsugæslu'] }
];

function loadPage(page) {
    const container = document.getElementById('content-section');
    container.innerHTML = ''; // Clear any existing content

    const einkenniSection = createEinkenniSection(page === 'Vírósa' ? viruseinkenniData : page === 'LUTS' ? lutsData : page === 'Bakverkur' ? bakverkurData : []);
    const skodunSection = createSkodunSection(page === 'Vírósa' || page === 'Bakverkur' ? skodunData : lutsSkodunData);
    const planSection = createPlanSection(page === 'Vírósa' || page === 'Bakverkur' ? planData : lutsPlanData);

    container.appendChild(einkenniSection);
    container.appendChild(skodunSection);
    container.appendChild(planSection);

    // Make titles clickable
    makeTitleButton('skodun', addSkoðun);
    makeTitleButton('plan', addPlan);
}

function createSection(id, title) {
    const section = document.createElement('div');
    section.id = `${id}-section`;
    section.innerHTML = `<h2>${title}</h2><div id="${id}"></div>`;
    return section;
}

function createEinkenniSection(data) {
    const section = createSection('einkenni', 'Einkenni');
    const container = section.querySelector('#einkenni');
    createButtons(container, data);

    const timalengdSection = createTimalengdSection(timalengdData);
    section.appendChild(timalengdSection);

    return section;
}

function createSkodunSection(data) {
    const section = createSection('skodun', 'Skoðun');
    const container = section.querySelector('#skodun');
    createButtons(container, data);

    const mettunSection = createMettunSection(mettunData);
    section.appendChild(mettunSection);

    return section;
}

function createPlanSection(data) {
    const section = createSection('plan', 'Plan');
    const container = section.querySelector('#plan');
    createButtons(container, data);
    return section;
}

function createTimalengdSection(data) {
    const section = createSection('timalengd', 'Tímalengd');
    const container = section.querySelector('#timalengd');

    const daysContainer = document.createElement('div');
    daysContainer.className = 'timalengd-group';
    container.appendChild(daysContainer);

    const weeksContainer = document.createElement('div');
    weeksContainer.className = 'timalengd-group';
    container.appendChild(weeksContainer);

    const monthsContainer = document.createElement('div');
    monthsContainer.className = 'timalengd-group';
    container.appendChild(monthsContainer);

    data.forEach(item => {
        const button = document.createElement('button');
        button.textContent = item.display;
        button.onclick = () => insertText(item.output);

        if (item.display.includes('d')) {
            daysContainer.appendChild(button);
        } else if (item.display.includes('v')) {
            weeksContainer.appendChild(button);
        } else if (item.display.includes('m')) {
            monthsContainer.appendChild(button);
        }
    });

    return section;
}

function createMettunSection(data) {
    const section = createSection('mettun', 'Mettun');
    const container = section.querySelector('#mettun');
    container.style.display = 'flex';  // Ensure flex display is applied
    container.style.flexDirection = 'row';
    container.style.flexWrap = 'nowrap';
    container.style.gap = '5px';
    container.style.alignItems = 'center';
    container.style.justifyContent = 'flex-start';

    data.forEach(item => {
        const button = document.createElement('button');
        button.textContent = item.display;
        button.onclick = () => insertText(item.output);
        button.style.flex = 'none';
        button.style.width = 'auto';
        container.appendChild(button);
    });
    return section;
}

function createButtons(container, data) {
    data.forEach(item => {
        if (item.type === 'PlusMinus') {
            const row = document.createElement('div');
            row.className = 'data-row';

            const label = document.createElement('span');
            label.textContent = item.name;
            row.appendChild(label);

            const positiveButton = document.createElement('button');
            positiveButton.textContent = '+';
            positiveButton.onclick = () => insertText(item.positive || ''); // Check for undefined
            row.appendChild(positiveButton);

            const negativeButton = document.createElement('button');
            negativeButton.textContent = '-';
            negativeButton.onclick = () => insertText(item.negative || ''); // Check for undefined
            row.appendChild(negativeButton);

            container.appendChild(row);
        } else if (item.type === 'Medium') {
            const row = document.createElement('div');
            row.className = 'data-row';

            const label = document.createElement('span');
            label.textContent = item.name;
            row.appendChild(label);

            item.display.forEach((displayText, index) => {
                const button = document.createElement('button');
                button.textContent = displayText;
                button.onclick = () => insertText(item.output[index]);
                row.appendChild(button);
            });

            container.appendChild(row);
        }
    });
}
// Textbox manipulation functions

let textHistory = [];

function insertText(text) {
    const textbox = document.getElementById('journalTextbox');
    textHistory.push(textbox.value); // Save current state before modification
    textbox.value += text.replace(/\.$/, '') + '. ';
}

function eraseText() {
    const textbox = document.getElementById('journalTextbox');
    textHistory.push(textbox.value); // Save current state before erasing
    textbox.value = '';
}

function undoLastText() {
    const textbox = document.getElementById('journalTextbox');
    if (textHistory.length > 0) {
        textbox.value = textHistory.pop(); // Restore the last state from history
    }
}

function addSkoðun() {
    const textbox = document.getElementById('journalTextbox');
    textHistory.push(textbox.value); // Save current state before adding
    textbox.value += '\n\nSk: ';
}

function addPlan() {
    const textbox = document.getElementById('journalTextbox');
    textHistory.push(textbox.value); // Save current state before adding
    textbox.value += '\n\nÁ/P: ';
}

function copyText() {
    const textbox = document.getElementById('journalTextbox');
    textbox.select();
    document.execCommand('copy');
}

function analyzeText() {
    console.log('AI Analyze button clicked');
    alert('AI Analyze feature is not implemented in this demo.');
}

function makeTitleButton(sectionId, callback) {
    const sectionTitle = document.querySelector(`#${sectionId}-section h2`);
    if (sectionTitle) {
        sectionTitle.style.cursor = 'pointer';
        sectionTitle.addEventListener('click', callback);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    loadPage('Komuástæða'); // Load default page on start
});