const SymptomsViral = [
    { name: 'Flensueinkenni', type: 'PlusMinus', positive: 'Flensueinkenni', negative: 'Ekki flensueinkenni' },
    { name: 'Hálsbólga', type: 'PlusMinus', positive: 'Hálsbólga', negative: 'Ekki hálsbólga' },
    { name: 'Kvef', type: 'PlusMinus', positive: 'Kvef', negative: 'Ekki kvef' },
    { name: 'Hósti', type: 'PlusMinus', positive: 'Hósti', negative: 'Ekki hósti' },
    { name: 'Hiti', type: 'PlusMinus', positive: 'Hiti', negative: 'Ekki hiti' },
    { name: 'Sinuseinkenni', type: 'PlusMinus', positive: 'Þrýstingur yfir ennisholum', negative: 'Ekki þrýstingur yfir ennisholum' },
    { name: 'Eyrnaverkur', type: 'PlusMinus', positive: 'Eyrnaverkur', negative: 'Neitar eyrnaverk' },
    { name: 'Slappleiki', type: 'PlusMinus', positive: 'Slappleiki', negative: 'Ekki áberandi slappleiki' },
    { name: 'Veikindi heima', type: 'PlusMinus', positive: 'Margir veikir á heimili', negative: 'Ekki aðrir veikir á heimili' }
];

const ExamsViral = [
    { name: 'Lasleg/ur', type: 'GenderPrompt' },
    { name: 'Háls - Roði', type: 'PlusMinus', positive: 'Roði í koki', negative: 'Ekki roði í koki' },
    { name: 'Háls - Gröftur', type: 'PlusMinus', positive: 'Gröftur á hálskirtlum', negative: 'Ekki gröftur á hálskirtlum' },
    { name: 'Stórir hálskirtlar', type: 'PlusMinus', positive: 'Hálskirtlar stórir', negative: 'Ekki áberandi stórir hálskirtlar' },
    { name: 'Eitlastækkanir', type: 'PlusMinus', positive: 'Eitlastækkanir á hálsi', negative: 'Ekki eitlastækkanir á hálsi' },
    { name: 'Lungnahlustun', type: 'Medium', display: ['Hrein', 'Slímhljóð basalt', 'Brak hæ', 'Brak vi'], output: ['Lungnahlustun hrein', 'Við lungnahlustun heyrast slímhljóð basalt, hrein a.ö.l', 'Við hlustun heyrist brak hægra megin', 'Við hlustun heyrist brak vinstra megin'] },
    { name: '-', type: 'Medium', display: ['Gróf', 'Obstrúktíf'], output: ['Gróf lungnahlustun', 'Obstrúktíf lungnahlustun'] },
    { name: 'Hljóðhimnur', type: 'Medium', display: ['Roði hæ', 'Roði vi', 'Eðl hæ', 'Eðl vi'], output: ['Roði á hægri hljóðhimnu', 'Roði á vinstri hljóðhimnu', 'Hljóðhimna hægra megin eðlileg', 'Hljóðhimna vinstra megin eðlileg'] },
    { name: 'Mergur', type: 'Medium', display: ['Mergur hæ', 'Mergur vi'], output: ['Eyrnamergur hægra megin', 'Eyrnamergur vinstra megin'] },
    { name: 'Streptest/CRP', type: 'Medium', display: ['Strep +', 'Strep -', 'CRP hátt', 'CRP lágt'], output: ['Streptest jákvætt', 'Streptest neikvætt', 'CRP hátt', 'CRP lágt']}
];


const PlanViral = [
    { name: 'Greining', type: 'Medium', display: ['Strep', 'Vírósa', 'Eyrnabólga', 'Lungnabólga'], output: ['Strep throat', 'Vírósa', 'Eyrnabólga', 'Lungnabólga'] },
    { name: '-', type: 'Medium', display: ['Sinusitis', 'Bronchitis', 'Versnun á COPD', 'Astmi'], output: ['Sinusitis', 'Bronchitis', 'Versnun á COPD', 'Astmi'] },
    { name: '-', type: 'Medium', display: ['Mergur'], output: ['Eyrnamergur'] },
    { name: 'Meðferð', type: 'Medium', display: ['Ráðleggingar', 'Sýklalyf', 'Myndataka', 'Stuðningsmeðferð'], output: ['Almennar ráðleggingar', 'Ráðlegg sýklalyf', 'Ráðlegg myndatöku', 'Ráðlegg stuðningsmeðferð'] },
    { name: '-', type: 'Medium', display: ['Slímlosandi', 'Kódein', 'Blóðprufa', 'BMT'], output: ['Reynum slímlosandi', 'Fær lyf við hósta', 'Panta blóðprufu', 'Vísa á bráðamóttöku'] },
    { name: '-', type: 'Medium', display: ['Nefstera', 'Merglosandi', 'Merghreinsun'], output: ['Ráðlegg nefstera', 'Ráðlegg merglosandi dropa, endurkoma í merghreinsun', 'Hreinsum út eyrnamerg'] },
    { name: 'Eftirfylgd', type: 'Medium', display: ['Endurmat pn', 'Endurmat ef versnar', 'Símatíma', 'Heilsugæsla'], output: ['Endurmat pn', 'Endurmat ef versnar eða lagast ekki', 'Pantar sér símatíma til að fá niðurstöður', 'Eftirfylgd á sinni heilsugæslu'] }
];

const historyViralData = [
    {
        name: '',
        type: 'Medium',
        display: ['HTN', 'DM', 'IHD', 'Offita'],
        output: ['Saga um háþrýsting', 'Saga um sykursýki', 'Saga um kransæðasjúkdóm', 'Saga um offitu']
    },
    {
        name: '',
        type: 'Medium',
        display: ['Kæfisvefn', 'Nýrnasjúkdóm', 'Astmi', 'COPD'],
        output: ['Saga um kæfisvefn', 'Saga um nýrnasjúkdóm', 'Saga um astma', 'Saga um langvinna lungnateppu']
    },
    {
        name: '',
        type: 'Medium',
        display: ['Sinusitar', 'Eyrnabólgur', 'Ólétta', 'Ónæmisbælandi'],
        output: ['Saga um endurteknar kinnholusýkingar', 'Saga um endurteknar eyrnabólgur', 'Ófrísk, gengin X vikur', 'Er á ónæmisbælandi meðferð']
    }
];

const HabitsViral = [
    { name: 'Reykingar', type: 'Reykingar', display: ['Já', 'Nei', 'Aldrei'], output: ['Reykir. X pakkaár að baki', 'Reykir ekki. Hætti fyrir X árum. Reykti Y pakkaár fram að því', 'Aldrei reykt'] },
    { name: 'Áfengi', type: 'Medium', display: ['Já', 'Nei'], output: ['Drekkur. Meira en X á dag', 'Neitar áfengisdrykkju'] },
    { name: 'Eiturlyf', type: 'Medium', display: ['Já', 'Nei'], output: ['Er að nota X', 'Neitar eiturlyfjanotkun'] },
    { name: 'Ofnæmi', type: 'Medium', display: ['Penisillin', 'Sulfa'], output: ['Penisillinofnæmi', 'Sulfaofnæmi'] }
];

const SymptomsUrinary = [
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

const ExamsUrinary = [
    { name: 'Lasleg/ur', type: 'GenderPrompt' },
    { name: 'Bankum', type: 'Medium', display: ['Hæ', 'Vi', '-'], output: ['Bankaum yfir nýrnastað hæ megin', 'Bankaum yfir nýrnastað vi megin', 'Ekki bankeymsli yfir nýrnastað'] },
    { name: 'Nítrít', type: 'PlusMinus', positive: 'Jákv nítrít í þvagi', negative: 'Þvagstix hreint' },
    { name: 'Hvít', type: 'PlusMinus', positive: 'Hvít í þvagi', negative: 'Þvagstix hreint' },
    { name: 'Þvagstix', type: 'PlusMinus', positive: 'Þvagstix jákv', negative: 'Þvagstix hreint' }
];

const PlanUrinary = [
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

const Duration = [
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

const Saturation = [
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


function showGenderPrompt(actionType, itemName) {
    const modal = document.createElement('div');
    modal.id = 'genderPromptModal';
    modal.className = 'modal';

    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';

    const message = document.createElement('p');
    message.textContent = 'Select gender:';
    modalContent.appendChild(message);

    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'buttons-container';

    const buttonKK = document.createElement('button');
    buttonKK.textContent = 'KK';
    buttonKK.onclick = () => handleGenderSelection('KK', actionType, itemName);
    buttonsContainer.appendChild(buttonKK);

    const buttonKVK = document.createElement('button');
    buttonKVK.textContent = 'KVK';
    buttonKVK.onclick = () => handleGenderSelection('KVK', actionType, itemName);
    buttonsContainer.appendChild(buttonKVK);

    modalContent.appendChild(buttonsContainer);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    document.addEventListener('keydown', handleEscapeKey);
}

function handleGenderSelection(gender, actionType, itemName) {
    closeModal(document.getElementById('genderPromptModal'));

    if (itemName === 'Lasleg/ur') {
        if (actionType === 'positive') {
            insertText(gender === 'KK' ? 'Laslegur að sjá' : 'Lasleg að sjá');
        } else {
            insertText(gender === 'KK' ? 'Ekki bráðveikindalegur að sjá' : 'Ekki bráðveikindaleg að sjá');
        }
    }
}

let reykingarFlag = false;

function handleReykingarYes() {
    reykingarFlag = false; // Reset flag
    const packs = prompt('Enter the number of pack-years:');
    if (packs !== null) {
        insertText(`Reykir. ${packs} pakkaár að baki`);
        reykingarFlag = true; // Set flag if additional input is provided
    } else {
        insertText('Reykir'); // Insert default text if prompt is cancelled
    }
}

function handleReykingarNo() {
    const yearsStopped = prompt('Hætti fyrir hversu mörgum árum?');
    if (yearsStopped !== null) {
        const packYears = prompt('Reykti hversu mörg pakkaár fram að því?');
        if (packYears !== null) {
            insertText(`Reykir ekki. Hætti fyrir ${yearsStopped} árum. Reykti ${packYears} pakkaár fram að því`);
        } else {
            insertText('Reykir ekki');
        }
    } else {
        insertText('Reykir ekki');
    }
}

function handleSyklalyfSelection() {
    console.log('handleSyklalyfSelection called'); // Debugging line
    const modal = document.createElement('div');
    modal.id = 'syklalyfModal';
    modal.className = 'modal';

    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';

    const message = document.createElement('p');
    message.textContent = 'Select antibiotic:';
    modalContent.appendChild(message);

    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'buttons-container';

    const antibiotics = ['azithromycin', 'amoxin', 'spectracillin', 'kaavepenin', 'keflex'];
    antibiotics.forEach(antibiotic => {
        const button = document.createElement('button');
        button.textContent = antibiotic;
        button.onclick = () => handleAntibioticSelection(antibiotic);
        buttonsContainer.appendChild(button);
    });

    modalContent.appendChild(buttonsContainer);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    document.addEventListener('keydown', handleEscapeKey);
}

function handleAntibioticSelection(antibiotic) {
    console.log(`Selected antibiotic: ${antibiotic}`); // Debugging line
    closeModal(document.getElementById('syklalyfModal'));
    insertText(`Ráðlegg sýklalyf. Fer á ${antibiotic}`);
}

function handleEyrnaverkurPositive() {
    showEyrnaverkurModal();
}

function showEyrnaverkurModal() {
    const modal = document.createElement('div');
    modal.id = 'eyrnaverkurModal';
    modal.className = 'modal';

    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';

    const message = document.createElement('p');
    message.textContent = 'Select side:';
    modalContent.appendChild(message);

    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'buttons-container';

    const buttonHae = document.createElement('button');
    buttonHae.textContent = 'Hægri';
    buttonHae.onclick = () => {
        insertText('Eyrnaverkur hægra megin');
        closeModal(modal);
    };
    buttonsContainer.appendChild(buttonHae);

    const buttonVi = document.createElement('button');
    buttonVi.textContent = 'Vinstri';
    buttonVi.onclick = () => {
        insertText('Eyrnaverkur vinstra megin');
        closeModal(modal);
    };
    buttonsContainer.appendChild(buttonVi);

    const buttonBae = document.createElement('button');
    buttonBae.textContent = 'Beggja vegna';
    buttonBae.onclick = () => {
        insertText('Eyrnaverkur beggja vegna');
        closeModal(modal);
    };
    buttonsContainer.appendChild(buttonBae);

    modalContent.appendChild(buttonsContainer);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    document.addEventListener('keydown', handleEscapeKey);
}

function showHostiOptions() {
    const modal = document.createElement('div');
    modal.id = 'hostiOptionsModal';
    modal.className = 'modal';

    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';

    const message = document.createElement('p');
    message.textContent = 'Select the type of cough:';
    modalContent.appendChild(message);

    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'buttons-container';

    const options = ['Blautur', 'Þurr'];
    options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => handleHostiSelection(option);
        buttonsContainer.appendChild(button);
    });

    modalContent.appendChild(buttonsContainer);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    document.addEventListener('keydown', handleEscapeKey);
}

function handleHostiSelection(option) {
    closeModal(document.getElementById('hostiOptionsModal'));
    insertText(`${option} hósti`);
}
function createButtons(container, data) {
    if (!data || !Array.isArray(data)) {
        console.error('No valid data provided to create buttons.');
        return;
    }

    data.forEach(item => {
        console.log('Processing item:', item); // Debugging line
        const row = document.createElement('div');
        row.className = 'data-row';

        if (item.name) {
            const label = document.createElement('span');
            label.textContent = item.name;
            row.appendChild(label);
        }

        if (item.display && Array.isArray(item.display)) {
            item.display.forEach((displayText, index) => {
                createButton(row, item, displayText, index);
            });
        } else if (item.type === 'PlusMinus' && item.positive && item.negative) {
            createButton(row, item, '+', 0);
            createButton(row, item, '-', 1);
        } else if (item.type === 'GenderPrompt') {
            createButton(row, item, '+', 0);
            createButton(row, item, '-', 1);
        } else {
            console.error('No display data for item:', item); // Debugging line
        }

        container.appendChild(row);
        console.log('Row appended:', row); // Debugging line
    });
}

function createButton(row, item, displayText, index) {
    const button = document.createElement('button');
    button.textContent = displayText;
    console.log('Creating button:', displayText); // Debugging line

    if (item.name === 'Reykingar') {
        button.onclick = () => {
            if (displayText === 'Já') {
                handleReykingarYes();
            } else if (displayText === 'Nei') {
                handleReykingarNo();
            } else {
                insertText(item.output[index]);
            }
        };
    } else if (item.name === 'Eyrnaverkur') {
        button.onclick = () => {
            if (displayText === '+') {
                handleEyrnaverkurPositive();
            } else {
                insertText('Neitar eyrnaverk'); // Insert "Neitar eyrnaverk" when "-" is clicked
            }
        };
    } else if (item.type === 'GenderPrompt') {
        button.onclick = () => {
            if (displayText === '+') {
                showGenderPrompt('positive', item.name);
            } else {
                showGenderPrompt('negative', item.name);
            }
        };
    } else if (item.name === 'Hósti' && displayText === '+') {
        button.onclick = () => showHostiOptions();
    } else if (item.name === 'Meðferð' && displayText === 'Sýklalyf') {
        console.log('Attaching handleSyklalyfSelection to the Sýklalyf button'); // Debugging line
        button.onclick = () => handleSyklalyfSelection();
    } else {
        button.onclick = () => {
            if (item.type === 'PlusMinus') {
                insertText(index === 0 ? item.positive : item.negative);
            } else if (item.type === 'Medium') {
                insertText(item.output[index]);
            }
        };
    }

    row.appendChild(button);
}

function createHabitsSection(data) {
    const section = createSection('habits', 'Venjur');
    const container = section.querySelector('#habits');
    createButtons(container, data);
    return section;
}

function createSection(id, title) {
    const section = document.createElement('div');
    section.id = `${id}-section`;
    section.innerHTML = `<h2>${title}</h2><div id="${id}"></div>`;
    console.log('Creating section:', id, title); // Debugging line
    return section;
}

function createEinkenniSection(data) {
    console.log('Creating Einkenni Section with data:', data); // Debugging line
    const section = createSection('einkenni', 'Einkenni');
    const container = section.querySelector('#einkenni');
    createButtons(container, data);
    return section;
}

function createSkodunSection(data) {
    console.log('Creating Skodun Section with data:', data); // Debugging line
    const section = createSection('skodun', 'Skoðun');
    const container = section.querySelector('#skodun');
    createButtons(container, data);
    return section;
}

function createPlanSection(data) {
    console.log('Creating Plan Section with data:', data); // Debugging line
    const section = createSection('plan', 'Plan');
    const container = section.querySelector('#plan');
    createButtons(container, data);
    return section;
}

function loadPage(page) {
    const container = document.getElementById('content-section');
    container.innerHTML = '';

    let einkenniSection, skodunSection, planSection, timalengdSection, historyViralSection, mettunSection, habitsSection;

    if (page === 'Vírósa') {
        einkenniSection = createEinkenniSection(SymptomsViral);
        skodunSection = createSkodunSection(ExamsViral);
        planSection = createPlanSection(PlanViral);
        timalengdSection = createTimalengdSection(Duration);
        historyViralSection = createHistoryViralSection(historyViralData);
        mettunSection = createMettunSection(Saturation);
        habitsSection = createHabitsSection(HabitsViral);

        const leftColumn = document.createElement('div');
        leftColumn.className = 'column';
        leftColumn.appendChild(einkenniSection);
        leftColumn.appendChild(timalengdSection);
        leftColumn.appendChild(historyViralSection);
        leftColumn.appendChild(habitsSection);

        const middleColumn = document.createElement('div');
        middleColumn.className = 'column';
        middleColumn.appendChild(skodunSection);
        middleColumn.appendChild(mettunSection);

        const rightColumn = document.createElement('div');
        rightColumn.className = 'column';
        rightColumn.appendChild(planSection);

        const horizontalContainer = document.createElement('div');
        horizontalContainer.className = 'horizontal-sections';
        horizontalContainer.appendChild(leftColumn);
        horizontalContainer.appendChild(middleColumn);
        horizontalContainer.appendChild(rightColumn);

        container.appendChild(horizontalContainer);
    } else if (page === 'LUTS') {
        einkenniSection = createEinkenniSection(SymptomsUrinary);
        skodunSection = createSkodunSection(ExamsUrinary);
        planSection = createPlanSection(PlanUrinary);

        container.appendChild(einkenniSection);
        container.appendChild(skodunSection);
        container.appendChild(planSection);
    } else if (page === 'Bakverkur') {
        einkenniSection = createEinkenniSection(bakverkurData);
        skodunSection = createSkodunSection(ExamsViral);
        planSection = createPlanSection(PlanViral);

        container.appendChild(einkenniSection);
        container.appendChild(skodunSection);
        container.appendChild(planSection);
    } else {
        console.error('Unknown page:', page);
    }

    // Make titles clickable
    makeTitleButton('skodun', addSkoðun);
    makeTitleButton('plan', addPlan);
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

function createHistoryViralSection(data) {
    const section = createSection('historyViral', 'Heilsufar');
    const container = section.querySelector('#historyViral');
    createButtons(container, data);
    return section;
}

function createMettunSection(data) {
    const section = createSection('mettun', 'Mettun');
    const container = section.querySelector('#mettun');
    container.style.display = 'flex';
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

function createHabitsSection(data) {
    const section = createSection('habits', 'Venjur');
    const container = section.querySelector('#habits');
    createButtons(container, data);
    return section;
}



function closeModal(modal) {
    if (modal) {
        document.body.removeChild(modal);
        document.removeEventListener('keydown', handleEscapeKey);

        // Check if the modal being closed is the one from "Reykingar"
        if (modal.id === 'reykingarModal' && !reykingarFlag) {
            insertText('Reykir');
        }
    }
}


function handleEscapeKey(event) {
    if (event.key === 'Escape') {
        const modals = [
            'genderPromptModal', 
            'eyrnaverkurModal', 
            'reykingarModal', 
            'syklalyfModal',
            'hostiOptionsModal' // Added the new modal id here
        ];
        modals.forEach(modalId => {
            const modal = document.getElementById(modalId);
            if (modal) {
                closeModal(modal);
                if (modalId === 'hostiOptionsModal') {
                    insertText('Hósti');
                }
            }
        });
    }
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

function retrieveData() {
    const patientNumber = document.getElementById('retrievePatientNumber').value;
    if (patientNumber) {
        console.log(`Attempting to retrieve data for patient ${patientNumber}`);
        fetch(`https://radiant-river-64232-2d5ca1213bef.herokuapp.com/retrieve/${patientNumber}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                if (response.status === 404) {
                    alert('No data found for this patient number.');
                } else {
                    throw new Error('Network response was not ok');
                }
            }
            return response.json();
        })
        .then(data => {
            if (data) {
                const text = data.symptoms.join('. ') + '.';
                document.getElementById('journalTextbox').value = text;
            }
        })
        .catch(error => {
            console.error('Error retrieving data:', error);
            alert('An error occurred while retrieving data.');
        });
    } else {
        alert('Please enter a patient number.');
    }
}

function parseCode() {
    const code = prompt('Enter the generated code:');
    if (code) {
        try {
            const patientNumber = code.trim(); // Use the entered code as the patient number
            if (patientNumber) {
                document.getElementById('retrievePatientNumber').value = patientNumber;
                retrieveData();
            } else {
                throw new Error('Invalid code format');
            }
        } catch (e) {
            console.error('Error parsing code:', e);
            alert('Invalid code format.');
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    
    // Ensure default page load
    loadPage('Vírósa');

    const enterCodeButton = document.querySelector('#enterCodeButton');
    if (enterCodeButton) {
        enterCodeButton.addEventListener('click', parseCode);
    } else {
        console.error('Element with ID enterCodeButton not found.');
    }
});
