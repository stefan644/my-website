const SymptomsViral = [
    { name: 'Flensueinkenni', type: 'PlusMinus', positive: 'Flensueinkenni', negative: 'Ekki flensueinkenni' },
    { name: 'Hálsbólga', type: 'PlusMinus', positive: 'Hálsbólga', negative: 'Ekki hálsbólga' },
    { name: 'Kvef', type: 'PlusMinus', positive: 'Kvef', negative: 'Ekki kvef' },
    {
        name: 'Hósti',
        type: 'options',
        display: ['+', '-'],
        options: [
            {
                display: '+',
                subOptions: [
                    { display: 'Blautur', output: 'Blautur hósti' },
                    { display: 'Þurr', output: 'Þurr hósti' }
                ]
            },
            {
                display: '-',
                output: 'Ekki hósti'
            }
        ]
    },
    { name: 'Hiti', type: 'PlusMinus', positive: 'Hiti', negative: 'Ekki hiti' },
    { name: 'Sinuseinkenni', type: 'PlusMinus', positive: 'Þrýstingur yfir ennisholum', negative: 'Ekki þrýstingur yfir ennisholum' },
    {
        name: 'Eyru',
        type: 'options',
        display: ['Verkur', 'Hella', 'Óþægindi', '-'],
        options: [
            {
                display: 'Verkur',
                subOptions: [
                    { display: 'Hægri', output: 'Verkur í hægra eyra' },
                    { display: 'Vinstri', output: 'Verkur í vinstra eyra' },
                    { display: 'Beggja vegna', output: 'Verkur í báðum eyrum' }
                ]
            },
            {
                display: 'Hella',
                subOptions: [
                    { display: 'Hægri', output: 'Hella í hægra eyra' },
                    { display: 'Vinstri', output: 'Hella í vinstra eyra' },
                    { display: 'Beggja vegna', output: 'Hella í báðum eyrum' }
                ]
            },
            {
                display: 'Óþægindi',
                subOptions: [
                    { display: 'Hægri', output: 'Óþægindi í hægra eyra' },
                    { display: 'Vinstri', output: 'Óþægindi í vinstra eyra' },
                    { display: 'Beggja vegna', output: 'Óþægindi í báðum eyrum' }
                ]
            },
            {
                display: '-',
                output: 'Ekki einkenni frá eyrum'
            }
        ]
    },
    { name: 'Slappleiki', type: 'PlusMinus', positive: 'Slappleiki', negative: 'Ekki áberandi slappleiki' },
    { name: 'Veikindi heima', type: 'PlusMinus', positive: 'Margir veikir á heimili', negative: 'Ekki aðrir veikir á heimili' }
];

const ExamsViral = [
    {
        name: 'Útlit',
        type: 'options',
        display: ['Lasleg/ur', '-'],
        options: [
            {
                display: 'Lasleg/ur',
                subOptions: [
                    { display: 'Laslegur', output: 'Laslegur að sjá' },
                    { display: 'Lasleg', output: 'Lasleg að sjá' }
                ]
            },
            {
                display: '-',
                subOptions: [
                    { display: 'Ekki bráðveikindalegur', output: 'Ekki bráðveikindalegur að sjá' },
                    { display: 'Ekki bráðveikindaleg', output: 'Ekki bráðveikindaleg að sjá' }
                ]
            }
        ]
    },
    { name: 'Háls - Roði', type: 'PlusMinus', positive: 'Roði í koki', negative: 'Ekki roði í koki' },
    { name: 'Háls - Gröftur', type: 'PlusMinus', positive: 'Gröftur á hálskirtlum', negative: 'Ekki gröftur á hálskirtlum' },
    { name: 'Stórir hálskirtlar', type: 'PlusMinus', positive: 'Hálskirtlar stórir', negative: 'Ekki áberandi stórir hálskirtlar' },
    { name: 'Eitlastækkanir', type: 'PlusMinus', positive: 'Eitlastækkanir á hálssvæði', negative: 'Ekki eitlastækkanir á hálssvæði' },
    { name: 'Lungnahlustun', type: 'Medium', display: ['Hrein', 'Slímhljóð basalt', 'Brak hæ', 'Brak vi'], output: ['Hrein vesiculer öndunarhljóð', 'Slímhljóð basalt', 'Brak hægra megin', 'Brak vinstra megin'] },
    { name: '-', type: 'Medium', display: ['Gróf', 'Obstrúktíf', 'Wheezing'], output: ['Gróf öndunarhljóð', 'Lengd útöndun', 'Wheezing'] },
    {
        name: 'Hljóðhimnur',
        type: 'options',
        display: ['Eðl', 'Roði'],
        options: [
            {
                display: 'Eðl',
                subOptions: [
                    { display: 'Hægri', output: 'Hljóðhimna hægra megin eðlileg' },
                    { display: 'Vinstri', output: 'Hljóðhimna vinstra megin eðlileg' },
                    { display: 'Beggja vegna', output: 'Hljóðhimnur eðlilegar beggja vegna' }
                ]
            },
            {
                display: 'Roði',
                subOptions: [
                    { display: 'Hægri', output: 'Roði á hægri hljóðhimnu' },
                    { display: 'Vinstri', output: 'Roði á vinstri hljóðhimnu' },
                    { display: 'Beggja vegna', output: 'Roði á hljóðhimnum beggja vegna' }
                ]
            }
        ]
    },
    {
        name: 'Hlust',
        type: 'options',
        display: ['Roði', 'Mergur'],
        options: [
            {
                display: 'Roði',
                subOptions: [
                    { display: 'Hægri', output: 'Roði í hlust hægra megin' },
                    { display: 'Vinstri', output: 'Roði í hlust vinstra megin' },
                    { display: 'Beggja vegna', output: 'Roði í hlust báðum megin' }
                ],
                cancelText: 'Roði í hlust'
            },
            {
                display: 'Mergur',
                subOptions: [
                    { display: 'Hægri', output: 'Eyrnamergur hægra megin' },
                    { display: 'Vinstri', output: 'Eyrnamergur vinstra megin' },
                    { display: 'Beggja vegna', output: 'Eyrnamergur beggja vegna' }
                ]
            }
        ]
    },
    { name: 'Streptest/CRP', type: 'Medium', display: ['Strep +', 'Strep -', 'CRP hátt', 'CRP lágt'], output: ['Streptest jákvætt', 'Streptest neikvætt', 'CRP hátt', 'CRP lágt'] }
];

const PlanViral = [
    { name: 'Greining', type: 'Medium', display: ['Strep', 'Vírósa', 'Eyrnabólga', 'Lungnabólga'], output: ['Strep throat', 'Vírósa', 'Eyrnabólga', 'Lungnabólga'] },
    { name: '-', type: 'Medium', display: ['Sinusitis', 'Bronchitis', 'Versnun á COPD', 'Astmi'], output: ['Sinusitis', 'Bronchitis', 'Versnun á COPD', 'Astmi'] },
    { name: '-', type: 'Medium', display: ['Mergur', 'Otitis externa'], output: ['Eyrnamergur', 'Otitis externa'] },
    {
        name: 'Meðferð',
        type: 'options',
        display: ['Ráðleggingar', 'Sýklalyf', 'Myndataka', 'Stuðningsmeðferð'],
        options: [
            { display: 'Ráðleggingar', output: 'Almennar ráðleggingar' },
            {
                display: 'Sýklalyf',
                subOptions: [
                    { display: 'azithromycin', output: 'Ráðlegg sýklalyf. Fer á azithromycin' },
                    { display: 'amoxin', output: 'Ráðlegg sýklalyf. Fer á amoxin' },
                    { display: 'spectracillin', output: 'Ráðlegg sýklalyf. Fer á spectracillin' },
                    { display: 'kaavepenin', output: 'Ráðlegg sýklalyf. Fer á kaavepenin' },
                    { display: 'keflex', output: 'Ráðlegg sýklalyf. Fer á keflex' }
                ]
            },
            { display: 'Myndataka', output: 'Ráðlegg myndatöku' },
            { display: 'Stuðningsmeðferð', output: 'Ráðlegg stuðningsmeðferð' }
        ]
    },
    {
        name: '-',
        type: 'options',
        display: ['Sýkladropar'],
        options: [
           {
                display: 'Sýkladropar',
                subOptions: [
                    { display: 'HTP', output: 'Ráðlegg sýkladropa. Set á HTP dropa' },
                    { display: 'Ciflox', output: 'Ráðlegg sýkladropa. Set á ciflox' }
                ]
            }
        ]
    },

    { name: '-', type: 'Medium', display: ['Slímlosandi', 'Kódein', 'Blóðprufa', 'BMT'], output: ['Reynum slímlosandi', 'Fær lyf við hósta', 'Panta blóðprufu', 'Vísa á bráðamóttöku'] },
    { name: '-', type: 'Medium', display: ['Nefstera', 'Púst', 'Merglosandi', 'Merghreinsun'], output: ['Ráðlegg nefstera', 'Ráðlegg púst', 'Ráðlegg merglosandi dropa, endurkoma í merghreinsun', 'Hreinsum út eyrnamerg'] },
    { name: 'Eftirfylgd', type: 'Medium', display: ['Endurmat pn', 'Endurmat ef versnar', 'Pantar símatíma', 'Heilsugæsla'], output: ['Endurmat pn', 'Endurmat ef versnar eða lagast ekki', 'Pantar sér símatíma til að fá niðurstöður', 'Eftirfylgd á sinni heilsugæslu'] },
    { name: '-', type: 'Medium', display: ['Gef tíma', 'Gef símatíma'], output: ['Gef tíma í endurkomu', 'Fær símatíma til eftirfylgdar'] }
];


const historyViralData = [
    {
        name: '',
        type: 'options',
        display: ['Hraust/ur', 'HTN', 'DM', 'IHD', 'Offita', 'Áfengi'],
        options: [
            {
                display: 'Hraust/ur',
                subOptions: [
                    { display: 'Hraustur', output: 'Hraustur í gruninn' },
                    { display: 'Hraust', output: 'Hraust í gruninn' }
                ],
                cancelText: ''
            },
            {
                display: 'HTN',
                output: 'Saga um háþrýsting'
            },
            {
                display: 'DM',
                output: 'Saga um sykursýki'
            },
            {
                display: 'IHD',
                output: 'Saga um kransæðasjúkdóm'
            },
            {
                display: 'Offita',
                output: 'Saga um offitu'
            },
            {
                display: 'Áfengi',
                output: 'Saga um áfengismisnotkun'
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Kæfisvefn', 'Nýrnasjúkdóm', 'Astmi', 'COPD'],
        options: [
            { display: 'Kæfisvefn', output: 'Saga um kæfisvefn' },
            { display: 'Nýrnasjúkdóm', output: 'Saga um nýrnasjúkdóm' },
            { display: 'Astmi', output: 'Saga um astma' },
            { display: 'COPD', output: 'Saga um langvinna lungnateppu' }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Sinusitar', 'Eyrnabólgur', 'Ólétta', 'Ónæmisbælandi'],
        options: [
            { display: 'Sinusitar', output: 'Saga um endurteknar kinnholusýkingar' },
            { display: 'Eyrnabólgur', output: 'Saga um endurteknar eyrnabólgur' },
            { display: 'Ólétta', output: 'Ófrísk, gengin X vikur' },
            { display: 'Ónæmisbælandi', output: 'Er á ónæmisbælandi meðferð' }
        ]
    }
];

/* const RedFlagViral = [
    { name: 'Hnakkastífleiki', type: 'PlusMinus', positive: 'Lýsir', negative: 'Ekki roði í koki' },
    { name: 'Ljósfælni', type: 'PlusMinus', positive: 'Lýsir ljósfælni', negative: 'Ekki ljósfælni' }

];
*/
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

const HistoryUrinary = [
    { name: '', type: 'Medium', display: ['Hraust', 'HTN', 'DM', 'IHD', 'Offita', 'Áfengi'], output: ['Heilsuhraust/ur í gruninn', 'Saga um háþrýsting', 'Saga um sykursýki', 'Saga um kransæðasjúkdóm', 'Saga um offitu', 'Saga um áfengismisnotkun']},
    { name: '', type: 'Medium', display: ['Blöðrubólgur', 'Nýrnasjúkdóm', 'Nýrnasteinar', 'Prostatit'], output: ['Saga um endurteknar blöðrubólgur', 'Saga um nýrnasjúkdóm', 'Saga um nýrnasteina', 'Saga um prostatitis áður']},
    { name: '', type: 'Medium', display: ['Pyelonephritis', 'Ólétta', 'Ónæmisbælandi'], output: ['Saga um pyelonephritis', 'Ófrísk, gengin X vikur', 'Er á ónæmisbælandi meðferð']}
];

const SymptomsEye = [
    {
        name: 'Einkenni',
        type: 'options',
        display: ['Auga', 'Efra augnlok', 'Neðra augnlok'],
        options: [
            {
                display: 'Auga',
                subOptions: [
                    { display: 'Hægra', output: 'Einkenni frá hægra auga' },
                    { display: 'Vinstra', output: 'Einkenni frá vinstra auga' },
                    { display: 'Bæði', output: 'Einkenni frá báðum augum' }
                ],
                cancelText: ''
            },
            {
                display: 'Efra augnlok',
                subOptions: [
                    { display: 'Hægra', output: 'Einkenni frá hægra efra augnloki' },
                    { display: 'Vinstra', output: 'Einkenni frá vinstra efra augnloki' }
                ],
                cancelText: ''
            },
            {
                display: 'Neðra augnlok',
                subOptions: [
                    { display: 'Hægra', output: 'Einkenni frá hægra neðra augnloki' },
                    { display: 'Vinstra', output: 'Einkenni frá vinstra neðra augnloki' }
                ],
                cancelText: ''
            }
        ]
    },
    {
        name: '-',
        type: 'options',
        display: ['Flís'],
        options: [
            { display: 'Flís', output: 'Fékk flís í augað' }
        ]
    },
    {
        name: '-',
        type: 'options',
        display: ['Roði', 'Nabbi', 'Kláði', 'Rennsli'],
        options: [
            { display: 'Roði', output: 'Roði' },
            { display: 'Nabbi', output: 'Nabbi' },
            { display: 'Kláði', output: 'Kláði' },
            { display: 'Rennsli', output: 'Aukin táramyndun' }
        ]
    },
    {
        name: 'Aðskotahlutur',
        type: 'options',
        display: ['Aðskotahlutstilfinning', '-'],
        options: [
            { display: 'Aðskotahlutstilfinning', output: 'Aðskotahlutstilfinning' },
            { display: '-', output: 'Ekki aðskotahlutstilfinning' }
        ]
    },
    {
        name: '-',
        type: 'options',
        display: ['Gröftur', '-', 'Límd', '-'],
        options: [
            { display: 'Gröftur', output: 'Lekur gröftur' },
            { display: '-', output: 'Ekki gröftur' },
            { display: 'Límd', output: 'Augnlok límd saman á morgnanna' },
             { display: '-', output: 'Augnlok ekki límd saman á morgnanna' }
        ]
    },
    {
        name: 'Rauð flögg',
        type: 'options',
        display: ['Sjóntap', '-', 'Móðusjón', '-'],
        options: [
            { display: 'Sjóntap', output: 'Lýsir versnun á sjón' },
            { display: '-', output: 'Sjón í lagi' },
            { display: 'Móðusjón', output: 'Lýsir móðusjón' },
            { display: '-', output: 'Neitar móðusjón' }
        ]
    },
    {
        name: '-',
        type: 'options',
        display: ['Ljósfælni', '-', 'Verkur', '-'],
        options: [
            { display: 'Ljósfælni', output: 'Lýsir ljósfælni' },
            { display: '-', output: 'Neitar ljósfælni' },
            { display: 'Verkur', output: 'Verkjar' },
            { display: '-', output: 'Neitar verk' }
        ]
    }
];
const ExamsEye = [
    {
        name: 'Prepp',
        type: 'options',
        display: ['Deyfi og lita'],
        options: [
            { display: 'Deyfi og lita', output: 'Deyfi og lita' }
        ]
    },
    {
        name: 'Glæra',
        type: 'options',
        display: ['Hrein', 'Injection', 'Aðskotahlutur'],
        options: [
            { display: 'Hrein', output: 'Ekki roði í glæru' },
            { display: 'Injection', output: 'Conjunctival injection' },
            { display: 'Aðskotahlutur', output: 'Sést aðskotahlutur' }
        ]
    },
    {
        name: 'Augnlok',
        type: 'options',
        display: ['Roði', 'Nabbi'],
        options: [
            { display: 'Roði', output: 'Roði' },
            { display: 'Nabbi', output: 'Graftarnabbi' }
        ]
    }
];

const PlanEye = [
    {
        name: 'Greining',
        type: 'options',
        display: ['Blepharitis', 'Vogris', 'Conjunctivitis'],
        options: [
            { display: 'Blepharitis', output: 'Blepharitis' },
            { display: 'Vogris', output: 'Vogris' },
            {
                display: 'Conjunctivitis',
                subOptions: [
                    { display: 'Viral', output: 'Grunur um viral conjunctivitis' },
                    { display: 'Bacterial', output: 'Grunur um bacterial conjunctivitis' }
                ],
                cancelText: 'Conjunctivitis'
            }
        ]
    },
    {
        name: '-',
        type: 'options',
        display: ['Aðskotahlutur'],
        options: [
            { display: 'Aðskotahlutur', output: 'Aðskotahlutur í auga' }
        ]
    },
    {
        name: 'Meðferð',
        type: 'options',
        display: ['Heitir bakstrar', 'Sýkladropar (ef þarf)', 'Sting á'],
        options: [
            { display: 'Heitir bakstrar', output: 'Ráðlegg heita bakstra'},
            {
                display: 'Sýkladropar (ef þarf)',
                subOptions: [
                    { display: 'Fucithalmic', output: 'Set fucithalmic í gáttina, leysir út ef þarf' },
                    { display: 'Oftan chlora', output: 'Set oftan chlora í gáttina, leysir út ef þarf' }
                ],
                cancelText: ''
            },
            { display: 'Sting á', output: 'Sting á graftarbólu'}
        ]
    },
    {
        name: '-',
        type: 'options',
        display: ['Fjarlægi aðskotahlut', 'Sýkladropar'],
        options: [
            { display: 'Fjarlægi aðskotahlut', output: 'Fjarlægi aðskotahlut'},
            {
                display: 'Sýkladropar',
                subOptions: [
                    { display: 'Fucithalmic', output: 'Ráðlegg sýkladropa, set á fucithalmic' },
                    { display: 'Oftan chlora', output: 'Ráðlegg sýkladropa, set á oftan chlora' }
                ],
                cancelText: ''
            }
        ]
    },
    {
        name: 'Eftirfylgd',
        type: 'options',
        display: ['Endurkoma PN', 'Endurkoma ef lagast ekki'],
        options: [
            { display: 'Endurkoma PN', output: 'Endurkoma pn' },
            { display: 'Endurkoma ef lagast ekki', output: 'Endurkoma ef lagast ekki eða versnar' }
        ]
    }
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

const Habits = [
    { name: 'Reykingar', type: 'Reykingar', display: ['Já', 'Nei', 'Aldrei'], output: ['Reykir. X pakkaár að baki', 'Reykir ekki. Hætti fyrir X árum. Reykti Y pakkaár fram að því', 'Aldrei reykt'] },
    { name: 'Áfengi', type: 'Medium', display: ['Já', 'Nei'], output: ['Drekkur áfengi', 'Neitar áfengisdrykkju'] },
    { name: 'Eiturlyf', type: 'Medium', display: ['Já', 'Nei'], output: ['Játar eiturlyfjanotkun', 'Neitar eiturlyfjanotkun'] },
    { name: 'Ofnæmi', type: 'Medium', display: ['Penisillin', 'Sulfa'], output: ['Penisillinofnæmi', 'Sulfaofnæmi'] }
];

function createBloodPressureInterface(containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container with ID ${containerId} not found.`);
        return;
    }

    const bpContainer = document.createElement('div');
    bpContainer.className = 'blood-pressure-container';

    const systolicInput = document.createElement('input');
    systolicInput.type = 'number';
    systolicInput.placeholder = 'Systolic';
    systolicInput.className = 'blood-pressure-input';
    systolicInput.id = 'systolic-input';
    systolicInput.readOnly = true;

    const diastolicInput = document.createElement('input');
    diastolicInput.type = 'number';
    diastolicInput.placeholder = 'Diastolic';
    diastolicInput.className = 'blood-pressure-input';
    diastolicInput.id = 'diastolic-input';
    diastolicInput.readOnly = true;

    const systolicContainer = document.createElement('div');
    systolicContainer.className = 'bp-buttons-container';

    const diastolicContainer = document.createElement('div');
    diastolicContainer.className = 'bp-buttons-container';

    const systolicValues = [90, 100, 110, 120, 130, 140, 150, 160];
    const diastolicValues = [60, 70, 80, 90, 100, 110];

    systolicValues.forEach(value => {
        const button = document.createElement('button');
        button.className = 'bp-button';
        button.textContent = value;
        button.onclick = () => {
            systolicInput.value = value;
            systolicSlider.value = value;
            systolicValueDisplay.textContent = value;
        };
        systolicContainer.appendChild(button);
    });

    diastolicValues.forEach(value => {
        const button = document.createElement('button');
        button.className = 'bp-button';
        button.textContent = value;
        button.onclick = () => {
            diastolicInput.value = value;
            diastolicSlider.value = value;
            diastolicValueDisplay.textContent = value;
        };
        diastolicContainer.appendChild(button);
    });

    const systolicSliderContainer = document.createElement('div');
    systolicSliderContainer.className = 'bp-slider-container';

    const systolicSliderLabel = document.createElement('label');
    systolicSliderLabel.textContent = 'Systolic';
    systolicSliderLabel.className = 'bp-label';

    const systolicSlider = document.createElement('input');
    systolicSlider.type = 'range';
    systolicSlider.min = 80;
    systolicSlider.max = 200;
    systolicSlider.value = 120;
    systolicSlider.className = 'bp-slider';
    systolicSlider.oninput = () => {
        systolicInput.value = systolicSlider.value;
        systolicValueDisplay.textContent = systolicSlider.value;
    };

    const systolicValueDisplay = document.createElement('span');
    systolicValueDisplay.className = 'bp-value';
    systolicValueDisplay.textContent = systolicSlider.value;

    systolicSliderContainer.appendChild(systolicSliderLabel);
    systolicSliderContainer.appendChild(systolicSlider);
    systolicSliderContainer.appendChild(systolicValueDisplay);

    const diastolicSliderContainer = document.createElement('div');
    diastolicSliderContainer.className = 'bp-slider-container';

    const diastolicSliderLabel = document.createElement('label');
    diastolicSliderLabel.textContent = 'Diastolic';
    diastolicSliderLabel.className = 'bp-label';

    const diastolicSlider = document.createElement('input');
    diastolicSlider.type = 'range';
    diastolicSlider.min = 40;
    diastolicSlider.max = 120;
    diastolicSlider.value = 80;
    diastolicSlider.className = 'bp-slider';
    diastolicSlider.oninput = () => {
        diastolicInput.value = diastolicSlider.value;
        diastolicValueDisplay.textContent = diastolicSlider.value;
    };

    const diastolicValueDisplay = document.createElement('span');
    diastolicValueDisplay.className = 'bp-value';
    diastolicValueDisplay.textContent = diastolicSlider.value;

    diastolicSliderContainer.appendChild(diastolicSliderLabel);
    diastolicSliderContainer.appendChild(diastolicSlider);
    diastolicSliderContainer.appendChild(diastolicValueDisplay);

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Enter BP';
    submitButton.onclick = () => {
        const systolic = systolicInput.value;
        const diastolic = diastolicInput.value;
        if (systolic && diastolic) {
            insertText(`Bþr: ${systolic}/${diastolic} mmHg`);
        } else {
            alert('Please select both systolic and diastolic values.');
        }
    };

    bpContainer.appendChild(document.createTextNode('Select Systolic:'));
    bpContainer.appendChild(systolicContainer);
    bpContainer.appendChild(systolicSliderContainer);
    bpContainer.appendChild(document.createTextNode('Select Diastolic:'));
    bpContainer.appendChild(diastolicContainer);
    bpContainer.appendChild(diastolicSliderContainer);
    bpContainer.appendChild(submitButton);

    container.appendChild(bpContainer);
}



let reykingarFlag = false;

function handleReykingarYes() {
    console.log('handleReykingarYes called'); // Debugging line
    reykingarFlag = false; // Reset flag
    const packs = prompt('Enter the number of pack-years:');
    if (packs !== null) {
        insertText(`Reykir. ${packs} pakkaár að baki`);
        reykingarFlag = true; // Set flag if additional input is provided
        console.log('Reykingar flag set to true'); // Debugging line
    } else {
        insertText('Reykir'); // Insert default text if prompt is cancelled
        console.log('Reykingar flag remains false'); // Debugging line
    }
}

function handleReykingarNo() {
    console.log('handleReykingarNo called'); // Debugging line
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

function handleSideSelectionEyru(side, actionType) {
    let textToInsert = '';
    if (actionType === 'Verkur') {
        if (side === 'Hægri') {
            textToInsert = 'Verkur í hægra eyra';
        } else if (side === 'Vinstri') {
            textToInsert = 'Verkur í vinstra eyra';
        } else if (side === 'Beggja vegna') {
            textToInsert = 'Eyrnaverkur beggja vegna';
        }
    } else if (actionType === 'Hella') {
        if (side === 'Hægri') {
            textToInsert = 'Hella í hægra eyra';
        } else if (side === 'Vinstri') {
            textToInsert = 'Hella í vinstra eyra';
        } else if (side === 'Beggja vegna') {
            textToInsert = 'Hella fyrir báðum eyrum';
        }
    } else if (actionType === 'Óþægindi') {
        if (side === 'Hægri') {
            textToInsert = 'Óþægindi frá hægra eyra';
        } else if (side === 'Vinstri') {
            textToInsert = 'Óþægindi frá vinstra eyra';
        } else if (side === 'Beggja vegna') {
            textToInsert = 'Óþægindi frá báðum eyrum';
        }
    }
    insertText(textToInsert);
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

function handlePregnancyWeeks() {
    console.log('handlePregnancyWeeks called'); // Debugging line
    const weeks = prompt('Enter the number of weeks of pregnancy (between 6-43):');
    if (weeks !== null) {
        const weeksNumber = parseInt(weeks, 10);
        if (weeksNumber >= 6 && weeksNumber <= 43) {
            console.log(`Valid input: ${weeksNumber} weeks`); // Debugging line
            insertText(`Ólétta, gengin ${weeksNumber} vikur`);
        } else {
            alert('Please enter a valid number of weeks between 6 and 43.');
        }
    }
}
let isFirstLungnahlustunClick = true; // Flag to track first click for Lungnahlustun
let inLungnahlustunContext = false; // Flag to track context of Lungnahlustun

// Mapping for special cases where grammar needs adjustment
const specialCases = {
    'obstrúktíf': 'lengda útöndun',
    // Add other special cases here if needed
};

function createButton(row, item, displayText, index, context) {
    const button = document.createElement('button');
    button.textContent = displayText;

    button.onclick = (event) => {
        // Remove any existing popup
        const existingPopup = document.querySelector('.popup-modal');
        if (existingPopup) {
            existingPopup.remove();
        }

        if (item.type === 'options') {
            // Find the selected option
            const selectedOption = item.options[index];

            if (selectedOption) {
                if (selectedOption.subOptions) {
                    // Create a new popup modal
                    const popup = document.createElement('div');
                    popup.className = 'popup-modal';

                    // Position the popup next to the button
                    const rect = event.target.getBoundingClientRect();
                    popup.style.position = 'absolute';
                    popup.style.top = `${rect.bottom + window.scrollY}px`;
                    popup.style.left = `${rect.left + window.scrollX}px`;
                    popup.style.backgroundColor = 'white';
                    popup.style.border = '1px solid #ccc';
                    popup.style.padding = '10px';
                    popup.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
                    popup.style.zIndex = '1000';

                    // Function to create a button in the popup
                    const createPopupButton = (popup, text, onClick) => {
                        const btn = document.createElement('button');
                        btn.textContent = text;
                        btn.style.display = 'block';
                        btn.style.margin = '5px 0';
                        btn.onclick = () => {
                            onClick();
                            popup.remove();
                        };
                        popup.appendChild(btn);
                    };

                    // Add subOptions to the popup
                    selectedOption.subOptions.forEach(subOption => {
                        createPopupButton(popup, subOption.display, () => insertText(subOption.output));
                    });

                    // Append the popup to the document body
                    document.body.appendChild(popup);

                    // Close popup when clicking outside
                    const cancelAction = () => {
                        if (selectedOption.cancelText) {
                            insertText(selectedOption.cancelText);
                        }
                        popup.remove();
                    };

                    document.addEventListener('click', (e) => {
                        if (!popup.contains(e.target) && e.target !== button) {
                            cancelAction();
                        }
                    }, { once: true });

                    // Close popup on escape key
                    document.addEventListener('keydown', (e) => {
                        if (e.key === 'Escape') {
                            cancelAction();
                        }
                    }, { once: true });

                } else if (selectedOption.output) {
                    // Directly insert output for buttons without subOptions
                    insertText(selectedOption.output);
                } else if (selectedOption.negative && displayText === '-') {
                    // Insert the negative output for '-' buttons
                    insertText(selectedOption.negative);
                }
            }
        } else {
            // Default behavior for other buttons
            if (item.name === 'Eyru' && displayText === '-') {
                insertText('Ekki einkenni frá eyrum');
            } else if (item.name === 'Eyru') {
                handleEyruSelection(displayText);
            } else if (item.name === 'Eyrnaverkur') {
                if (displayText === '+') {
                    handleEyrnaverkurPositive();
                } else {
                    insertText('Neitar eyrnaverk');
                }
            } else if (item.type === 'GenderPrompt') {
                if (displayText === '+') {
                    showGenderPrompt('positive', item.name);
                } else {
                    showGenderPrompt('negative', item.name);
                }
            } else if (item.name === 'Hósti' && displayText === '+') {
                showHostiOptions();
            } else if (item.name === 'Meðferð' && displayText === 'Sýklalyf') {
                handleSyklalyfSelection(context);
            } else if (displayText.includes('Ófrísk, gengin')) {
                handlePregnancyWeeks();
            } else if (item.name === 'Lungnahlustun' || (inLungnahlustunContext && item.name === '-')) {
                inLungnahlustunContext = true;
                let textToInsert = item.output[index];
                if (isFirstLungnahlustunClick) {
                    if (specialCases[displayText.toLowerCase()]) {
                        textToInsert = `Lungnahlustun sýnir ${specialCases[displayText.toLowerCase()]}`;
                    } else {
                        textToInsert = `Lungnahlustun sýnir ${textToInsert.charAt(0).toLowerCase() + textToInsert.slice(1)}`;
                    }
                    isFirstLungnahlustunClick = false;
                }
                insertText(textToInsert);
            } else if (item.name === 'Hljóðhimnur' && (displayText === 'Roði' || displayText === 'Eðl' || displayText === 'Mergur')) {
                showSideSelectionModal(item, displayText, index);
            } else if (item.name === 'Reykingar') {
                if (displayText === 'Já') {
                    handleReykingarYes();
                } else if (displayText === 'Nei') {
                    handleReykingarNo();
                } else if (displayText === 'Aldrei') {
                    insertText('Aldrei reykt');
                }
            } else if (item.type === 'PlusMinus') {
                insertText(index === 0 ? item.positive : item.negative);
            } else if (item.type === 'Medium') {
                insertText(item.output[index]);
            } else if (displayText === '-' && selectedOption.negative) {
                insertText(selectedOption.negative);
            }
        }
    };

    row.appendChild(button);
}

function showSideSelectionModal(item, displayText, index) {
    const modal = document.createElement('div');
    modal.id = 'sideSelectionModal';
    modal.className = 'modal';

    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';

    const message = document.createElement('p');
    message.textContent = 'Select side:';
    modalContent.appendChild(message);

    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'buttons-container';

    const sides = ['Hægri', 'Vinstri', 'Beggja vegna'];
    sides.forEach(side => {
        const button = document.createElement('button');
        button.textContent = side;
        button.onclick = () => {
            handleSideSelection(side, item, displayText, index);
            closeModal(modal);
        };
        buttonsContainer.appendChild(button);
    });

    modalContent.appendChild(buttonsContainer);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    document.addEventListener('keydown', handleEscapeKey);
}

function handleSideSelection(side, item, displayText, index) {
    let textToInsert = '';
    if (displayText === 'Roði') {
        if (side === 'Hægri') {
            textToInsert = 'Roði á hægri hljóðhimnu';
        } else if (side === 'Vinstri') {
            textToInsert = 'Roði á vinstri hljóðhimnu';
        } else if (side === 'Beggja vegna') {
            textToInsert = 'Roði á hljóðhimnum beggja vegna';
        }
    } else if (displayText === 'Eðl') {
        if (side === 'Hægri') {
            textToInsert = 'Hljóðhimna hægra megin eðlileg';
        } else if (side === 'Vinstri') {
            textToInsert = 'Hljóðhimna vinstra megin eðlileg';
        } else if (side === 'Beggja vegna') {
            textToInsert = 'Hljóðhimnur eðlilegar beggja vegna';
        }
    } else if (displayText === 'Mergur') {
        if (side === 'Hægri') {
            textToInsert = 'Eyrnamergur hægra megin';
        } else if (side === 'Vinstri') {
            textToInsert = 'Eyrnamergur vinstra megin';
        } else if (side === 'Beggja vegna') {
            textToInsert = 'Eyrnamergur beggja vegna';
        }
    }
    insertText(textToInsert);
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

    if (page === 'LUTS') {
        const symptomsSection = createEinkenniSection(SymptomsUrinary);
        const examsSection = createSkodunSection(ExamsUrinary);
        const planSection = createPlanSection(PlanUrinary);
        const durationSection = createTimalengdSection(Duration);
        const historySection = createHistoryViralSection(HistoryUrinary);
        const habitsSection = createHabitsSection(Habits);  // Add this line

        const symptomsColumn = document.createElement('div');
        symptomsColumn.className = 'column';
        symptomsColumn.appendChild(symptomsSection);
        symptomsColumn.appendChild(durationSection);
        symptomsColumn.appendChild(historySection);

        const examsColumn = document.createElement('div');
        examsColumn.className = 'column';
        examsColumn.appendChild(examsSection);
        examsColumn.appendChild(habitsSection);  // Add this line

        const planColumn = document.createElement('div');
        planColumn.className = 'column';
        planColumn.appendChild(planSection);

        const horizontalContainer = document.createElement('div');
        horizontalContainer.className = 'horizontal-sections';
        horizontalContainer.appendChild(symptomsColumn);
        horizontalContainer.appendChild(examsColumn);
        horizontalContainer.appendChild(planColumn);

        container.appendChild(horizontalContainer);
    } else if (page === 'Auga') {
        const symptomsSection = createEinkenniSection(SymptomsEye);
        const examsSection = createSkodunSection(ExamsEye);
        const planSection = createPlanSection(PlanEye);

        const symptomsColumn = document.createElement('div');
        symptomsColumn.className = 'column';
        symptomsColumn.appendChild(symptomsSection);

        const examsColumn = document.createElement('div');
        examsColumn.className = 'column';
        examsColumn.appendChild(examsSection);

        const planColumn = document.createElement('div');
        planColumn.className = 'column';
        planColumn.appendChild(planSection);

        const horizontalContainer = document.createElement('div');
        horizontalContainer.className = 'horizontal-sections';
        horizontalContainer.appendChild(symptomsColumn);
        horizontalContainer.appendChild(examsColumn);
        horizontalContainer.appendChild(planColumn);

        container.appendChild(horizontalContainer);
    } else if (page === 'Vírósa') {
        const einkenniSection = createEinkenniSection(SymptomsViral);
        const skodunSection = createSkodunSection(ExamsViral);
        const planSection = createPlanSection(PlanViral);
        const timalengdSection = createTimalengdSection(Duration);
        const historyViralSection = createHistoryViralSection(historyViralData);
        const mettunSection = createMettunSection(Saturation);
        const habitsSection = createHabitsSection(Habits);

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
        
                // Add placeholder for blood pressure section
                const bpSection = document.createElement('div');
                bpSection.id = 'blood-pressure-section';
                middleColumn.appendChild(bpSection);

        

        

        const rightColumn = document.createElement('div');
        rightColumn.className = 'column';
        rightColumn.appendChild(planSection);

        const horizontalContainer = document.createElement('div');
        horizontalContainer.className = 'horizontal-sections';
        horizontalContainer.appendChild(leftColumn);
        horizontalContainer.appendChild(middleColumn);
        horizontalContainer.appendChild(rightColumn);

        container.appendChild(horizontalContainer);

        // Create blood pressure interface
        createBloodPressureInterface('blood-pressure-section');
    } else if (page === 'Bakverkur') {
        const einkenniSection = createEinkenniSection(bakverkurData);
        const skodunSection = createSkodunSection(ExamsViral);
        const planSection = createPlanSection(PlanViral);

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

    // Create the "nokkra daga" button separately
    const nokkraDagaButton = document.createElement('button');
    nokkraDagaButton.textContent = 'Nokkra daga';
    nokkraDagaButton.classList.add('nokkra-daga-button');
    nokkraDagaButton.onclick = () => insertText('Nokkra daga saga'); // Adjust the output text as needed
    container.appendChild(nokkraDagaButton);

    // Create and append the days container
    const daysContainer = document.createElement('div');
    daysContainer.className = 'timalengd-group';
    container.appendChild(daysContainer);

    // Create and append the weeks container
    const weeksContainer = document.createElement('div');
    weeksContainer.className = 'timalengd-group';
    container.appendChild(weeksContainer);

    // Create and append the months container
    const monthsContainer = document.createElement('div');
    monthsContainer.className = 'timalengd-group';
    container.appendChild(monthsContainer);

    // Create and append the other buttons to their respective containers
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
        const modal = document.getElementById('sideSelectionModal');
        if (modal) {
            closeModal(modal);
        }

        // Include any other existing logic for escape key handling here
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
    isFirstLungnahlustunClick = true; // Reset flag on erase
    inLungnahlustunContext = false; // Reset context on erase
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
