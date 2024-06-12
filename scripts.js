function insertText(text) {
    const textbox = document.getElementById('journalTextbox');
    textbox.value += text + '. ';
}

function eraseText() {
    const textbox = document.getElementById('journalTextbox');
    textbox.value = '';
}

function addSkoðun() {
    const textbox = document.getElementById('journalTextbox');
    textbox.value += '\n\nSk: ';
}

function addPlan() {
    const textbox = document.getElementById('journalTextbox');
    textbox.value += '\n\nÁ/P: ';
}

function copyText() {
    const textbox = document.getElementById('journalTextbox');
    textbox.select();
    document.execCommand('copy');
}

function insertMettun() {
    const select = document.getElementById('mettunSelect');
    const value = select.options[select.selectedIndex].value;
    insertText(value);
    select.selectedIndex = 0; // Reset dropdown to default
}

function insertPuls() {
    const input = document.getElementById('pulsInput');
    const value = input.value;
    if (value) {
        insertText('Púls ' + value);
        input.value = ''; // Reset input to default
    }
}

function insertBpr() {
    const input = document.getElementById('bprInput');
    const value = input.value;
    if (value) {
        insertText('Bþr ' + value);
        input.value = ''; // Reset input to default
    }
}

function loadPage(page) {
    console.log("Loading page:", page); // Debugging log
    let content = '';
    if (page === 'page1') {
        content = `
            <div class="left-column">
                <div id="einkenniTable" class="flex-item full-width">
                    <h2>Einkenni</h2>
                    <table class="responsive-table">
                        <tr>
                            <th colspan="2">Vírósueinkenni</th>
                            <th>Tímalengd</th>
                        </tr>
                        <tr>
                            <td onclick="insertText('Hálsbólga')">Hálsbólga</td>
                            <td onclick="insertText('Ekki hálsbólga')">Ekki hálsbólga</td>
                            <td onclick="insertText('1d saga')">1d saga</td>
                        </tr>
                        <tr>
                            <td onclick="insertText('Kvef')">Kvef</td>
                            <td onclick="insertText('Ekki kvef')">Ekki kvef</td>
                            <td onclick="insertText('2d saga')">2d saga</td>
                        </tr>
                        <tr>
                            <td onclick="insertText('Hósti')">Hósti</td>
                            <td onclick="insertText('Ekki hósti')">Ekki hósti</td>
                            <td onclick="insertText('3d saga')">3d saga</td>
                        </tr>
                        <tr>
                            <td onclick="insertText('Uppgangur')">Uppgangur</td>
                            <td onclick="insertText('Ekki uppgangur')">Ekki uppgangur</td>
                            <td onclick="insertText('4d saga')">4d saga</td>
                        </tr>
                        <tr>
                            <td onclick="insertText('Þurr')">Þurr</td>
                            <td onclick="insertText('Blautur')">Blautur</td>
                            <td onclick="insertText('5d saga')">5d saga</td>
                        </tr>
                        <tr>
                            <td onclick="insertText('Þurr hósti')">Þurr hósti</td>
                            <td onclick="insertText('Blautur hósti')">Blautur hósti</td>
                            <td onclick="insertText('6d saga')">6d saga</td>
                        </tr>
                        <tr>
                            <td onclick="insertText('Hiti')">Hiti</td>
                            <td onclick="insertText('Ekki hiti')">Ekki hiti</td>
                            <td onclick="insertText('1 vikna saga')">1 vikna saga</td>
                        </tr>
                        <tr>
                            <td onclick="insertText('Verkir yfir ennisholum')">Verkir yfir ennisholum</td>
                            <td onclick="insertText('Ekki verkir yfir ennisholum')">Ekki verkir yfir ennisholum</td>
                            <td onclick="insertText('1,5 vikna saga')">1,5 vikna saga</td>
                        </tr>
                        <tr>
                            <td onclick="insertText('Þrýstingur yfir ennisholum')">Þrýstingur yfir ennisholum</td>
                            <td onclick="insertText('Ekki þrýstingur yfir ennisholum')">Ekki þrýstingur yfir ennisholum</td>
                            <td onclick="insertText('2 vikna saga')">2 vikna saga</td>
                        </tr>
                        <tr>
                            <td onclick="insertText('Eyrnaverkur hægra megin')">Eyrnaverkur hægra megin</td>
                            <td onclick="insertText('Neitar einkennum frá eyrum')">Neitar einkennum frá eyrum</td>
                            <td onclick="insertText('3 vikna saga')">3 vikna saga</td>
                        </tr>
                        <tr>
                            <td onclick="insertText('Eyrnaverkur vinstra megin')">Eyrnaverkur vinstra megin</td>
                            <td></td>
                            <td onclick="insertText('1 mán saga')">1 mán saga</td>
                        </tr>
                        <tr>
                            <td onclick="insertText('Eyrnaverkur beggja vegna')">Eyrnaverkur beggja vegna</td>
                            <td></td>
                            <td onclick="insertText('2 mán saga')">2 mán saga</td>
                        </tr>
                        <tr>
                            <td onclick="insertText('Slappleiki')">Slappleiki</td>
                            <td onclick="insertText('Ekki áberandi slappleiki')">Ekki áberandi slappleiki</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td onclick="insertText('Margir veikir á heimili')">Margir veikir á heimili</td>
                            <td onclick="insertText('Enginn annar veikur í kringum hann')">Enginn annar veikur í kringum hann</td>
                            <td></td>
                        </tr>
                    </table>
                </div>
                <div id="skodunTable" class="flex-item full-width">
                    <h2>Skoðun</h2>
                    <table class="responsive-table">
                        <tr>
                            <th colspan="2">Skoðun</th>
                        </tr>
                        <tr>
                            <td onclick="insertText('Laslegur að sjá')">Laslegur að sjá</td>
                            <td onclick="insertText('Ekki bráðveikindalegur að sjá')">Ekki bráðveikindalegur að sjá</td>
                        </tr>
                        <tr>
                            <td onclick="insertText('Lasleg að sjá')">Lasleg að sjá</td>
                            <td onclick="insertText('Ekki bráðveikindaleg að sjá')">Ekki bráðveikindaleg að sjá</td>
                        </tr>
                        <tr>
                            <td onclick="insertText('Dálítill roði í koki')">Dálítill roði í koki</td>
                            <td onclick="insertText('Ekki roði í koki')">Ekki roði í koki</td>
                        </tr>
                        <tr>
                            <td onclick="insertText('Gröftur á hálskirtlum')">Gröftur á hálskirtlum</td>
                            <td onclick="insertText('Ekki gröftur á hálskirtlum')">Ekki gröftur á hálskirtlum</td>
                        </tr>
                        <tr>
                            <td onclick="insertText('Hálskirtlar stórir')">Hálskirtlar stórir</td>
                            <td onclick="insertText('Ekki áberandi stórir hálskirtlar')">Ekki áberandi stórir hálskirtlar</td>
                        </tr>
                        <tr>
                            <td onclick="insertText('Vægar eitlastækkanir á hálsi')">Vægar eitlastækkanir á hálsi</td>
                            <td onclick="insertText('Ekki eitlastækkanir á hálsi')">Ekki eitlastækkanir á hálsi</td>
                        </tr>
                        <tr>
                            <td onclick="insertText('Slímhljóð basalt við lungnahlustu')">Slímhljóð basalt við lungnahlustu</td>
                            <td onclick="insertText('Lungnahlustun hrein')">Lungnahlustun hrein</td>
                        </tr>
                        <tr>
                            <td onclick="insertText('Hljóðhimna hægra megin eðlileg')">Hljóðhimna hægra megin eðlileg</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td onclick="insertText('Hljóðhimna vinstra megin eðlileg')">Hljóðhimna vinstra megin eðlileg</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td onclick="insertText('Roði á hægri hljóðhimnu')">Roði á hægri hljóðhimnu</td>
                            <td onclick="insertText('Eyrnamergur hægra megin')">Eyrnamergur hægra megin</td>
                        </tr>
                        <tr>
                            <td onclick="insertText('Roði á vinstri hljóðhimnu')">Roði á vinstri hljóðhimnu</td>
                            <td onclick="insertText('Eyrnamergur vinstra megin')">Eyrnamergur vinstra megin</td>
                        </tr>
                        <tr>
                            <td onclick="insertText('Kviður mjúkur og eymslalaus')">Kviður mjúkur og eymslalaus</td>
                            <td></td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="right-column">
                <div class="input-container flex-item">
                    <h2>LM</h2>
                    <label for="mettunSelect">Mettun:</label>
                    <select id="mettunSelect" onchange="insertMettun()">
                        <option value="" disabled selected>Select Mettun</option>
                        <option value="Mettun 100%">100%</option>
                        <option value="Mettun 99%">99%</option>
                        <option value="Mettun 98%">98%</option>
                        <option value="Mettun 97%">97%</option>
                        <option value="Mettun 96%">96%</option>
                        <option value="Mettun 95%">95%</option>
                        <option value="Mettun 94%">94%</option>
                        <option value="Mettun 93%">93%</option>
                        <option value="Mettun 92%">92%</option>
                        <option value="Mettun 91%">91%</option>
                        <option value="Mettun 90%">90%</option>
                        <option value="Mettun 89%">89%</option>
                        <option value="Mettun 88%">88%</option>
                        <option value="Mettun 87%">87%</option>
                        <option value="Mettun 86%">86%</option>
                        <option value="Mettun 85%">85%</option>
                    </select>
                    <label for="pulsInput">Púls:</label>
                    <input type="number" id="pulsInput" min="20" max="240" onblur="insertPuls()" onkeydown="if (event.key === 'Enter') insertPuls()">
                    <label for="bprInput">Bþr:</label>
                    <input type="text" id="bprInput" onblur="insertBpr()" onkeydown="if (event.key === 'Enter') insertBpr()">
                </div>
                <div id="planTable" class="flex-item full-width">
                    <h2>Plan</h2>
                    <table class="responsive-table">
                        <tr>
                            <th>Plan</th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <td onclick="insertText('Strep throat')">Strep throat</td>
                            <td onclick="insertText('Almennar ráðleggingar')">Almennar ráðleggingar</td>
                            <td onclick="insertText('Endurmat ef versnar')">Endurmat ef versnar</td>
                        </tr>
                        <tr>
                            <td onclick="insertText('Vírósa')">Vírósa</td>
                            <td onclick="insertText('Ráðlegg sýklalyf')">Ráðlegg sýklalyf</td>
                            <td onclick="insertText('Endurkoma pn')">Endurkoma pn</td>
                        </tr>
                        <tr>
                            <td onclick="insertText('Eyrnabólga')">Eyrnabólga</td>
                            <td onclick="insertText('Ráðlegg myndatöku')">Ráðlegg myndatöku</td>
                            <td onclick="insertText('Pantar sér símatíma til að fá niðurstöður')">Pantar sér símatíma til að fá niðurstöður</td>
                        </tr>
                        <tr>
                            <td onclick="insertText('Lungnabólga')">Lungnabólga</td>
                            <td onclick="insertText('Set á keflex')">Set á keflex</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td onclick="insertText('Langvarandi hósti')">Langvarandi hósti</td>
                            <td onclick="insertText('Set á amoxin')">Set á amoxin</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td onclick="insertText('Langvarandi hósti')">Langvarandi hósti</td>
                            <td onclick="insertText('Set á kavepenin')">Set á kavepenin</td>
                            <td></td>
                        </tr>
                    </table>
                </div>
            </div>
        `;
    }
    document.getElementById('content').innerHTML = content;
}