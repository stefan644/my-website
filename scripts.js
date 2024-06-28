const SymptomsViral = [
    {
        name: '',
        type: 'options',
        display: ['Flensueinkenni', '-', 'Hálsbólga', '-', 'Kvef', '-', 'Hósti', '-'],
        options: [
            {
                display: 'Flensueinkenni',
                output: 'Flensueinkenni'
            },
            {
                display: '-',
                output: 'Ekki flensueinkenni'
            },
            {
                display: 'Hálsbólga',
                output: 'Hálsbólga'
            },
            {
                display: '-',
                output: 'Ekki hálsbólga'
            },
            {
                display: 'Kvef',
                output: 'Kvef'
            },
            {
                display: '-',
                output: 'Ekki kvef'
            },
            {
                display: 'Hósti',
                subOptions: [
                    { display: 'Hósti', output: 'Hósti' },
                    { display: 'Blautur', output: 'Blautur hósti' },
                    { display: 'Þurr', output: 'Þurr hósti' }
                ],
                cancelText: ''
            },
            {
                display: '-',
                output: 'Ekki verið með hósta'
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Takverkur', '-', 'Slappleiki', '-', 'Hæsi', '-', 'Munnangur', '-'],
        options: [
            {
                display: 'Takverkur',
                output: 'Fundið fyrir takverk'
            },
            {
                display: '-',
                output: 'Ekki fundið fyrir takverk'
            },
            {
                display: 'Slappleiki',
                output: 'Slappleiki'
            },
            {
                display: '-',
                output: 'Ekki áberandi slappleiki'
            },
            {
                display: 'Hæsi',
                output: 'Hæsi'
            },
            {
                display: '-',
                output: 'Ekki hæsi'
            },
            {
                display: 'Munnangur',
                output: 'Munnangur'
            },
            {
                display: '-',
                output: 'Ekki munnangur'
            }
        ]
    },

    
    {
        name: '',
        type: 'options',
        display: ['Hiti', '-', 'Nokkrir dagar', 'Dagar', 'Vikur', 'Mánuðir'],
        options: [
            
            
            {
                display: 'Hiti',
                subOptions: [
                    { display: 'Hiti', output: 'Verið með hita' },
                    { display: 'Hár hiti og rúmliggjandi', output: 'Verið með háan hita, mestu rúmliggjandi' },
                    { display: 'Hiti í byrjun veikinda', output: 'Hiti í byrjun veikinda en hann yfirstaðinn nú' },
                    { display: 'Ekki mælt', output: 'Upplifað sig með hita en ekki mælt sig' }
                ],
                cancelText: ''
            },
            {
                display: '-',
                output: 'Ekki fengið hita'
            },
            {
                display: 'Nokkrir dagar',
                output: 'Nokkra daga saga'
            },
            {
                display: 'Dagar',
                subOptions: [
                    { display: '1d', output: '1d saga' },
                    { display: '2d', output: '2d saga' },
                    { display: '3d', output: '3d saga' },
                    { display: '4d', output: '4d saga' },
                    { display: '5d', output: '5d saga' },
                    { display: '6d', output: '6d saga' }
                ],
                cancelText: ''
            },
            {
                display: 'Vikur',
                subOptions: [
                    { display: '1v', output: '1 vikna saga' },
                    { display: '1,5v', output: '1,5 vikna saga' },
                    { display: '2v', output: '2 vikna saga' },
                    { display: '3v', output: '3 vikna saga' }
    
                ],
                cancelText: ''
            },
            {
                display: 'Mánuðir',
                subOptions: [
                    { display: '1m', output: '1 mán saga' },
                    { display: '2m', output: '2 mán saga' },
                    { display: '3m', output: '3 mán saga' },
                    { display: '4m', output: '4 mán saga' },
                    { display: '5m', output: '5 mán saga' },
                    { display: '6m', output: '6 mán saga' }
    
                ],
                cancelText: ''
            }
            
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Sinusþrýstingur', '-'],
        options: [
            {
                display: 'Sinusþrýstingur',
                subOptions: [
                    { display: 'Hægra megin', output: 'Þrýstingur yfir ennisholum hægra megin' },
                    { display: 'Vinstra megin', output: 'Þrýstingur yfir ennisholum vinstra megin' },
                    { display: 'Beggja vegna', output: 'Þrýstingur yfir ennisholum beggja vegna' }
                ],
                cancelText: 'Þrýstingur yfir ennisholum'
            },
            {
                display: '-',
                output: 'Ekki þrýstingur yfir ennisholum'
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Eyrnaverkur', 'Hella', 'Óþægindi', '-'],
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
    {
        name: '',
        type: 'options',
        display: ['Veikindi heima', '-', 'Ferðalag', '-'], 
        options: [
            {
                display: 'Veikindi heima',
                output: 'Margir veikir á heimili'
            },
            {
                display: '-',
                output: 'Ekki aðrir veikir á heimili'
            },
            {
                display: 'Ferðalag',
                output: 'Var að koma út ferðalagi erlendis'
            },
            {
                display: '-',
                output: 'Ekki verið erlendis nýlega'
            }
        ]
    },
    {},{},{},
    {
        name: '',
        type: 'options',
        display: ['Ó.E. Eyrnaskoðun', 'Óvær', 'Toga', 'Eyrnabarn', 'Rör'],
        options: [
            {
                display: 'Ó.E. Eyrnaskoðun',
                output: 'Óska eftir að láta kíkja í eyru'
            },
            {
                display: 'Óvær',
                output: 'Verið óvær að nóttu til'
            },
            {
                display: 'Toga',
                output: 'Verið að toga mikið í eyru'
            },
            {
                display: 'Eyrnabarn',
                output: 'Eyrnabarn. Fengið tíðar eyrnabólgur'
            },
            {
                display: 'Rör',
                output: 'Með rör'
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Næring', '-'],
        options: [
            {
                display: 'Næring',
                subOptions: [
                    { display: 'Borðar vel', output: 'Borðar vel' },
                    { display: 'Drekkur vel', output: 'Drekkur vel' },
                    { display: 'Borðar og drekkur vel', output: 'Borðar og drekkur vel' }
                ],
                cancelText: 'Nærist vel'
            },
            {
                display: '-',
                subOptions: [
                    { display: 'Borðar lítið', output: 'Borðað lítið' },
                    { display: 'Drukkið lítið', output: 'Drukkið lítið' },
                    { display: 'Borðað og drukkið lítið', output: 'Borðað og drukkið lítið' }
                ],
                cancelText: 'Nærist illa'
            },
        ]
    }
    
];


const ExamsViral = [
    {
        name: '',
        type: 'options',
        display: ['Lasleg/ur', '-', 'Yfirþyngd'],
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
            },
            { display: 'Yfirþyngd', output: 'Er í yfirþyngd' }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Roði í koki', '-', 'Gröftur', '-', 'Stórir', '-'],
        options: [
            { display: '+', output: 'Roði í koki' },
            { display: '-', output: 'Ekki roði í koki' },
            { display: '+', output: 'Gröftur á hálskirtlum' },
            { display: '-', output: 'Ekki gröftur á hálskirtlum' },
            { display: '+', output: 'Hálskirtlar stórir' },
            { display: '-', output: 'Ekki áberandi stórir hálskirtlar' }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Eitlastækkanir', '-'],
        options: [
            { display: 'Eitlastækkanir', output: 'Eitlastækkanir á hálssvæði' },
            { display: '-', output: 'Ekki eitlastækkanir á hálssvæði' }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Lungnahlustun hrein', 'Slímhljóð basalt', 'Gróf', 'Obstrúktíf'],
        options: [
            { display: 'Hrein', output: 'Lungnahlustun hrein' },
            { display: 'Slímhljóð basalt', output: 'Lungnahlustun sýnir slímhljóð basalt' },
            { display: 'Gróf', output: 'Lungnahlustun sýnir gróf öndunarhljóð' },
            { display: 'Obstrúktíf', output: 'Lungnahlustun sýnir lengda útöndun' }
            
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Brak', 'Wheezing', 'Hrein a.ö.l.'],
        options: [
            {
                display: 'Brak',
                subOptions: [
                    { display: 'Brak hægra megin', output: 'Heyrist brak hægra megin basalt' },
                    { display: 'Brak vinstra megin', output: 'Heyrist brak vinstra megin basalt' },
                    { display: 'Brak basalt beggja vegna', output: 'Heyrist brak basalt beggja vegna' }
                ]
            },
            { display: 'Wheezing', output: 'Heyrist wheezing' },
            { display: 'Hrein a.ö.l.', output: 'Hrein a.ö.l.' }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Roði á hljóðhimnum', '-', 'Roði í hlust', '-', 'Mergur', '-'],
        options: [
           
            {
                display: 'Roði á hljóðhimnum',
                subOptions: [
                    { display: 'Hægri', output: 'Roði á hægri hljóðhimnu' },
                    { display: 'Vinstri', output: 'Roði á vinstri hljóðhimnu' },
                    { display: 'Beggja vegna', output: 'Roði á hljóðhimnum beggja vegna' }
                ]
            },
            {
                display: '-',
                subOptions: [
                    { display: 'Hægri', output: 'Hljóðhimna hægra megin eðlilega útlítandi' },
                    { display: 'Vinstri', output: 'Hljóðhimna vinstra megin eðlilega útlítandi' },
                    { display: 'Beggja vegna', output: 'Hljóðhimnur líta eðliega út beggja vegna' }
                ]
            },
            {
                display: 'Roði í hlust',
                subOptions: [
                    { display: 'Hægri', output: 'Roði í hlust hægra megin' },
                    { display: 'Vinstri', output: 'Roði í hlust vinstra megin' },
                    { display: 'Beggja vegna', output: 'Roði í hlustum beggja vegna' }
                ],
                cancelText: 'Roði í hlust'
            },
            {
                display: '-',
                subOptions: [
                    { display: 'Hægri', output: 'Ekki roði í hlust hægra megin' },
                    { display: 'Vinstri', output: 'Ekki roði í hlust vinstra megin' },
                    { display: 'Beggja vegna', output: 'Ekki að sjá roða í hlust hvorki hægra megin né vinstra megin' }
                ],
                cancelText: ''
            },
            {
                display: 'Mergur',
                subOptions: [
                    { display: 'Hægri', output: 'Eyrnamergur hægra megin' },
                    { display: 'Vinstri', output: 'Eyrnamergur vinstra megin' },
                    { display: 'Beggja vegna', output: 'Eyrnamergur beggja vegna' }
                ]
            },
            {
                display: '-',
                subOptions: [
                    { display: 'Hægri', output: 'Ekki áberandi eyrnamergur hægra megin' },
                    { display: 'Vinstri', output: 'Ekki áberandi eyrnamergur vinstra megin' },
                    { display: 'Beggja vegna', output: 'Ekki eyrnamergur' }
                ]
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Strep +', 'Strep -', 'CRP hátt', 'CRP lágt'],
        options: [
            { display: 'Strep +', output: 'Streptest jákvætt' },
            { display: 'Strep -', output: 'Streptest neikvætt' },
            { display: 'CRP hátt', output: 'CRP hátt' },
            { display: 'CRP lágt', output: 'CRP lágt' }
        ]
    }
];


const PlanViral = [
    {
        name: '',
        type: 'options',
        display: ['Strep', 'Vírósa', 'Eyrnabólga', 'Lungnabólga'],
        options: [
            { display: 'Strep', output: 'Strep throat' },
            { display: 'Vírósa', output: 'Vírósa' },
            { display: 'Eyrnabólga', output: 'Eyrnabólga' },
            { display: 'Lungnabólga', output: 'Lungnabólga' }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Sinusitis', 'Bronchitis', 'Versnun á COPD', 'Astmi'],
        options: [
            { display: 'Sinusitis', output: 'Sinusitis' },
            { display: 'Bronchitis', output: 'Bronchitis' },
            { display: 'Versnun á COPD', output: 'Versnun á COPD' },
            { display: 'Astmi', output: 'Astmi' }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Mergur', 'Otitis externa', 'Langvarandi einkenni'],
        options: [
            { display: 'Mergur', output: 'Eyrnamergur' },
            { display: 'Otitis externa', output: 'Otitis externa' },
            { display: 'Langvarandi einkenni', output: 'Einkenni langvarandi' }
        ]
    },
    {},{},{},
    {
        name: '',
        type: 'options',
        display: ['Ráðleggingar', 'Stuðningsmeðferð'],
        options: [
            { display: 'Ráðleggingar', output: 'Almennar ráðleggingar' },
            {
            display: 'Stuðningsmeðferð',
                subOptions: [
                    { display: 'Stuðningsmeðferð', output: 'Ráðlegg stuðningsmeðferð' },
                    { display: 'Slímlosandi', output: 'Reynum slímlosandi' },
                    { display: 'Kódein', output: 'Fær kódein við hósta' }
                ],
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Nefstera', 'Púst', 'Mergur', 'Sérfræðing'],
        options: [
            { display: 'Nefstera', output: 'Ráðlegg nefstera' },
            {
                display: 'Púst',
                subOptions: [
                    { display: 'ventolin', output: 'Ráðlegg púst. Set ventolin í gáttina' },
                    { display: 'flixotide', output: 'Ráðlegg púst. Set flixotide í gáttina' },
                    { display: 'ventolin+flixotide', output: 'Ráðlegg púst. Set ventolin og flixotide í gáttina' },
                    { display: 'seretide', output: 'Ráðlegg púst. Set seretide í gáttina' }
                ],
                cancelText: ''
            },
            {
                display: 'Mergur',
                subOptions: [
                    { display: 'Merglosandi', output: 'Ráðlegg merglosandi dropa, endurkoma í merghreinsun' },
                    { display: 'Merghreinsun', output: 'Hreinsum út eyrnamerg' }
                ],
                cancelText: ''
            },
            {
                display: 'Vísa á sérfræðing',
                subOptions: [
                    { display: 'HNE', output: 'Ráðlegg mat HNE læknis' }
                ]
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Sýklalyf', 'Sýkladropar', 'Leysir út ef lagast ekki', 'VVV'],
        options: [
            {
                display: 'Sýklalyf',
                subOptions: [
                    { display: 'azithromycin', output: 'Ráðlegg sýklalyf. Set azithromycin í gáttina' },
                    { display: 'amoxin', output: 'Ráðlegg sýklalyf. Set amoxin í gáttina' },
                    { display: 'spectracillin', output: 'Ráðlegg sýklalyf. Set spectracillin í gáttina' },
                    { display: 'kaavepenin', output: 'Ráðlegg sýklalyf. Set kaavepenin í gáttina' },
                    { display: 'keflex', output: 'Ráðlegg sýklalyf. Set keflex í gáttina' },
                    { display: 'VVV', output: 'Fær veikindavottorð' }
                ]
            },
            {
                display: 'Sýkladropar',
                subOptions: [
                    { display: 'HTP', output: 'Ráðlegg sýkladropa. Set HTP dropa í gáttina' },
                    { display: 'Ciflox', output: 'Ráðlegg sýkladropa. Set ciflox í gáttina' }
                ]
            },
            { display: 'Ef lagast ekki', output: 'Leysir út ef fer ekki skánandi á næstu dögum' },
            { display: 'VVV', output: 'Fær veikindavottorð' }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Myndataka', 'Blóðprufa', 'BMT'],
        options: [
            {
                display: 'Myndataka',
                subOptions: [
                    { display: 'RTG lungu', output: 'Ráðlegg rtg lungu' },
                    { display: 'TS sinusar', output: 'Ráðlegg TS af sinusum' }
                ]
            },
            { display: 'Blóðprufa', output: 'Panta blóðprufu' },
            { display: 'BMT', output: 'Vísa á bráðamóttöku' }
        ]
    },
    
    {},{},{},
    {
        name: '',
        type: 'options',
        display: ['Endurmat', 'Eftirfylgd'],
        options: [
            {
                display: 'Endurmat',
                subOptions: [
                    { display: 'Eftir þörfum', output: 'Endurmat eftir þörfum' },
                    { display: 'Ef versnar eða lagast ekki', output: 'Endurmat ef versnar eða lagast ekki' }
                ]
            },
            {
                display: 'Eftirfylgd',
                subOptions: [
                    { display: 'Pantar símatíma', output: 'Pantar sér símatíma til að fá niðurstöður' },
                    { display: 'Sinni heilsugæslu', output: 'Eftirfylgd á sinni heilsugæslu' },
                    { display: 'Bóka tíma', output: 'Gef tíma í endurkomu' },
                    { display: 'Bóka símatíma', output: 'Fær símatíma til eftirfylgdar' }
                ]
            }

        ]
    }
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
    { 
        name: '', 
        type: 'options', 
        display: ['Grunur um blöðrubólgu', 'Jákv stix heima', 'Fengið áður', '-'], 
        options: [
            { display: 'Grunur', output: 'Grunar sig vera með blöðrubólgu' },
            { display: 'Jákv stix heima', output: 'Jákv stix heima' },
            { display: 'Fengið áður', output: 'Þekkir einkennin' },
            { display: '-', output: 'Aldrei fengið áður' }
        ]
    },
    { 
        name: '', 
        type: 'options', 
        display: ['Óþægindi', '-', 'Sviði', '-', 'Tíð þvaglát', '-', 'Blóð', '-'], 
        options: [
            { display: 'Óþægindi', output: 'Óþægindi við þvaglát' },
            { display: '-', output: 'Neitar óþægindum við þvaglát' },
            { display: 'Sviði', output: 'Sviði við þvaglát' },
            { display: '-', output: 'Ekki sviði við þvaglát' },
            { display: 'Tíð þvaglát', output: 'Tíð þvaglát' },
            { display: '-', output: 'Ekki tíð þvaglát' },
            { display: 'Blóð', output: 'Blóð í þvagi' },
            { display: '-', output: 'Ekki blóð í þvagi' }

        ]
    },
    { 
        name: '', 
        type: 'options', 
        display: ['Hiti', '-', 'Bakverkur', '-', 'Slappleiki', '-'], 
        options: [
            { display: '+', output: 'Verið með hita' },
            { display: '-', output: 'Ekki fengið hita' },
            { display: 'Bakverkur', output: 'Bakverkur, nýtilkominn' },
            { display: '-', output: 'Ekki nýtilkominn bakverkur' },
            { display: 'Slappleiki', output: 'Verið með slappleika' },
            { display: '-', output: 'Ekki fundið fyrir slappleika' }
        ]
    },
    {},{},{},
    {
        name: '',
        type: 'options',
        display: ['Nokkrir dagar', 'Dagar', 'Vikur', 'Mánuðir'],
        options: [
            {
                display: 'Nokkrir dagar',
                output: 'Nokkra daga saga'
            },
            {
                display: 'Dagar',
                subOptions: [
                    { display: '1d', output: '1d saga' },
                    { display: '2d', output: '2d saga' },
                    { display: '3d', output: '3d saga' },
                    { display: '4d', output: '4d saga' },
                    { display: '5d', output: '5d saga' },
                    { display: '6d', output: '6d saga' }
                ],
                cancelText: ''
            },
            {
                display: 'Vikur',
                subOptions: [
                    { display: '1v', output: '1 vikna saga' },
                    { display: '1,5v', output: '1,5 vikna saga' },
                    { display: '2v', output: '2 vikna saga' },
                    { display: '3v', output: '3 vikna saga' }
    
                ],
                cancelText: ''
            },
            {
                display: 'Mánuðir',
                subOptions: [
                    { display: '1m', output: '1 mán saga' },
                    { display: '2m', output: '2 mán saga' },
                    { display: '3m', output: '3 mán saga' },
                    { display: '4m', output: '4 mán saga' },
                    { display: '5m', output: '5 mán saga' },
                    { display: '6m', output: '6 mán saga' }
    
                ],
                cancelText: ''
            }
            
        ]
    }
];


const ExamsUrinary = [
    {
        name: '',
        type: 'options',
        display: ['Lasleg/ur', '-', 'Yfirþyngd'],
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
            },
            { display: 'Yfirþyngd', output: 'Er í yfirþyngd' }
        ]
    },
    { 
        name: '', 
        type: 'options', 
        display: ['Bankeymsli', '-'], 
        options: [
            {
                display: 'Lasleg/ur',
                subOptions: [
                    { display: 'Bankeymsli hægra megin', output: 'Bankeymsli yfir nýrnastað hægra megin' },
                    { display: 'Bankeymsli vinstra megin', output: 'Bankeymsli yfir nýrnastað vinstra megin' }
                ]
            },
            { display: '-', output: 'Ekki bankeymsli yfir nýrnastað' }
        ]
    },
    { 
        name: '', 
        type: 'options', 
        display: ['Nítrít', '-', 'Hvít', '-'], 
        options: [
            { display: 'Nítrít', output: 'Jákv nítrít í þvagi' },
            { display: '-', output: 'Þvagstix hreint' },
            { display: 'Hvít', output: 'Hvít í þvagi' },
            { display: '-', output: 'Þvagstix hreint' }
        ]
    }
];


const PlanUrinary = [
    { 
        name: '', 
        type: 'options', 
        display: ['Blöðrubólga', 'Pyelonephritis', 'Prostatitis'], 
        options: [
            { display: 'Blöðrubólga', output: 'Grunur um blöðrubólgu' },
            { display: 'Pyelonephritis', output: 'Grunur um pyelonephritis' },
            { display: 'Prostatitis', output: 'Grunur um prostatitis' }
        ]
    },
    {},{},{},
    { 
        name: '', 
        type: 'options', 
        display: ['Ráðleggingar', 'Sýklalyf', 'Myndataka', 'Blóðprufa'], 
        options: [
            { display: 'Ráðleggingar', output: 'Almennar ráðleggingar' },

            {
                display: 'Sýklalyf',
                subOptions: [
                    { display: 'Idotrim', output: 'Ráðlegg sýklalyf. Set idotrim í gáttina' },
                    { display: 'Selexid', output: 'Ráðlegg sýklalyf. Set selexid í gáttina' },
                    { display: 'Furadantin', output: 'Ráðlegg sýklalyf. Set furadantin í gáttina' },
                    { display: 'Keflex', output: 'Ráðlegg sýklalyf. Set keflex í gáttina' },
                    { display: 'Síprox', output: 'Ráðlegg sýklalyf. Set siprox í gáttina' }
                ]
            },
            { display: 'Myndataka', output: 'Ráðlegg myndatöku' },
            {
                display: 'Myndataka',
                subOptions: [
                    { display: 'TS þvagfærayfirlit', output: 'Ráðlegg TS þvagfærayfirlit' }
                ]
            },
            { display: 'Blóðprufa', output: 'Panta blóðprufu' }
        ]
    },
    {},{},{},
    {
        name: '',
        type: 'options',
        display: ['Endurmat', 'Eftirfylgd'],
        options: [
            {
                display: 'Endurmat',
                subOptions: [
                    { display: 'Eftir þörfum', output: 'Endurmat eftir þörfum' },
                    { display: 'Ef versnar eða lagast ekki', output: 'Endurmat ef versnar eða lagast ekki' }
                ]
            },
            {
                display: 'Eftirfylgd',
                subOptions: [
                    { display: 'Pantar símatíma', output: 'Pantar sér símatíma til að fá niðurstöður' },
                    { display: 'Sinni heilsugæslu', output: 'Eftirfylgd á sinni heilsugæslu' },
                    { display: 'Bóka tíma', output: 'Gef tíma í endurkomu' },
                    { display: 'Bóka símatíma', output: 'Fær símatíma til eftirfylgdar' }
                ]
            }

        ]
    }
];


const HistoryUrinary = [
    { name: '', type: 'Medium', display: ['Hraust', 'HTN', 'DM', 'IHD', 'Offita', 'Áfengi'], output: ['Heilsuhraust/ur í gruninn', 'Saga um háþrýsting', 'Saga um sykursýki', 'Saga um kransæðasjúkdóm', 'Saga um offitu', 'Saga um áfengismisnotkun']},
    { name: '', type: 'Medium', display: ['Blöðrubólgur', 'Nýrnasjúkdóm', 'Nýrnasteinar', 'Prostatit'], output: ['Saga um endurteknar blöðrubólgur', 'Saga um nýrnasjúkdóm', 'Saga um nýrnasteina', 'Saga um prostatitis áður']},
    { name: '', type: 'Medium', display: ['Pyelonephritis', 'Ólétta', 'Ónæmisbælandi'], output: ['Saga um pyelonephritis', 'Ófrísk, gengin X vikur', 'Er á ónæmisbælandi meðferð']}
];

const SymptomsEye = [
    {
        name: '',
        type: 'options',
        display: ['Einkenni frá auga', 'Efra augnlok', 'Neðra augnlok'],
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
        name: '',
        type: 'options',
        display: ['Aðskotahlutur', 'Áverki'],
        options: [
            {
                display: 'Aðskotahlutur',
                subOptions: [
                    { display: 'Aðskotahlutur', output: 'Fékk aðskotahlut í augað' },
                    { display: 'Tréflís', output: 'Tréflís' },
                    { display: 'Járnflís', output: 'Járnflís' }
                ],
                cancelText: ''
            },
            {
                display: 'Áverki',
                subOptions: [
                    { display: 'Áverki', output: 'Áverki á auga' },
                    { display: 'Grein', output: 'Fékk grein í augað' },
                    { display: 'Fingur', output: 'Fékk fingur í augað' }
                ],
                cancelText: ''
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Aðskotahlutstilfinning', '-'],
        options: [
            { display: 'Aðskotahlutstilfinning', output: 'Finnur fyrir aðskotahlutstilfinningu' },
            { display: '-', output: 'Ekki aðskotahlutstilfinning' }
        ]
    },
    {
        name: '',
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
        name: '',
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
        name: '',
        type: 'options',
        display: ['Sjóntap', '-', 'Móðusjón', '-', 'Ljósfælni', '-', 'Verkur', '-'],
        options: [
            { display: 'Sjóntap', output: 'Lýsir versnun á sjón' },
            { display: '-', output: 'Sjón í lagi' },
            { display: 'Móðusjón', output: 'Lýsir móðusjón' },
            { display: '-', output: 'Neitar móðusjón' },
            { display: 'Ljósfælni', output: 'Lýsir ljósfælni' },
            { display: '-', output: 'Neitar ljósfælni' },
            { display: 'Verkur', output: 'Verkjar' },
            { display: '-', output: 'Neitar verk' }
        ]
    }
];
const ExamsEye = [
    {
        name: '',
        type: 'options',
        display: ['Deyfi og lita'],
        options: [
            { display: 'Deyfi og lita', output: 'Deyfi og lita' }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Glæra hrein', 'Injection', 'Aðskotahlutur', 'Rispa'],
        options: [
            { display: 'Hrein', output: 'Ekki roði í glæru' },
            { display: 'Injection', output: 'Conjunctival injection' },
            {
                display: 'Aðskotahlutur',
                subOptions: [
                    { display: 'Í glæru', output: 'Sést aðskotahlutur í glæru' },
                    { display: 'Á hornhimnu', output: 'Sést aðskotahlutur á hornhimnu' }
                ]
            },
            {
                display: 'Rispa',
                subOptions: [
                    { display: 'Í glæru', output: 'Sést rispa (litarupptaka) á glæru' },
                    { display: 'Á hornhimnu', output: 'Sést rispa (litarupptaka) á hornhimnu' }
                ]
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Roði á augnloki', 'Nabbi'],
        options: [
            { display: 'Roði', output: 'Roði' },
            {
                display: 'Nabbi',
                subOptions: [
                    { display: 'Að innanverðu', output: 'Gratarnabbi sést innanvert á augnloki' },
                    { display: 'Að utanverðu', output: 'Graftarnabbi sést utanvert á augnloki' }
                ]
            }
        ]
    }
];

const PlanEye = [
    {
        name: '',
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
        name: '',
        type: 'options',
        display: ['Aðskotahlutur', 'Rispa'],
        options: [
            { display: 'Aðskotahlutur', output: 'Aðskotahlutur í auga' },
            { display: 'Rispa', output: 'Rispa' }
        ]
    },
    {},{},{},
    {
        name: '',
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
        name: '',
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
    {},{},{},
    {
        name: '',
        type: 'options',
        display: ['Endurmat', 'Eftirfylgd'],
        options: [
            {
                display: 'Endurmat',
                subOptions: [
                    { display: 'Eftir þörfum', output: 'Endurmat eftir þörfum' },
                    { display: 'Ef versnar eða lagast ekki', output: 'Endurmat ef versnar eða lagast ekki' },
                    { display: 'Á morgun', output: 'Endurmat á morgun' },
                    { display: 'Eftir nokkra daga', output: 'Endurmat eftir nokkra daga' },
                    { display: 'Eftir helgi', output: 'Endurmat eftir helgi' },
                ]
            },
            {
                display: 'Eftirfylgd',
                subOptions: [
                    { display: 'Pantar símatíma', output: 'Pantar sér símatíma til að fá niðurstöður' },
                    { display: 'Sinni heilsugæslu', output: 'Eftirfylgd á sinni heilsugæslu' },
                    { display: 'Bóka tíma', output: 'Gef tíma í endurkomu' },
                    { display: 'Bóka símatíma', output: 'Fær símatíma til eftirfylgdar' }
                ]
            }

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

    // Add title
    const title = document.createElement('h3');
    title.textContent = 'Blóðþrýstingur';
    bpContainer.appendChild(title);

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
    submitButton.textContent = 'Bþr';
    submitButton.onclick = () => {
        const systolic = systolicInput.value;
        const diastolic = diastolicInput.value;
        if (systolic && diastolic) {
            insertText(`Bþr: ${systolic}/${diastolic} mmHg`);
        } else {
            alert('Please select values for systolic and diastolic.');
        }
    };

    bpContainer.appendChild(systolicContainer);
    bpContainer.appendChild(systolicSliderContainer);
    bpContainer.appendChild(diastolicContainer);
    bpContainer.appendChild(diastolicSliderContainer);
    bpContainer.appendChild(submitButton);

    container.appendChild(bpContainer);
}

function createPulseInterface(containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container with ID ${containerId} not found.`);
        return;
    }

    const pulseContainer = document.createElement('div');
    pulseContainer.className = 'pulse-container';

    // Add title
    const title = document.createElement('h3');
    title.textContent = 'Púls';
    pulseContainer.appendChild(title);

    const pulseInput = document.createElement('input');
    pulseInput.type = 'number';
    pulseInput.placeholder = 'Pulse';
    pulseInput.className = 'pulse-input';
    pulseInput.id = 'pulse-input';
    pulseInput.readOnly = true;

    const pulseButtonsContainer = document.createElement('div');
    pulseButtonsContainer.className = 'pulse-buttons-container';

    // Add buttons for pulse values from 50 to 100 in increments of 10
    for (let value = 50; value <= 100; value += 10) {
        const button = document.createElement('button');
        button.className = 'pulse-button';
        button.textContent = value;
        button.onclick = () => {
            pulseInput.value = value;
            pulseSlider.value = value;
            pulseValueDisplay.textContent = value;
        };
        pulseButtonsContainer.appendChild(button);
    }

    const pulseSliderContainer = document.createElement('div');
    pulseSliderContainer.className = 'pulse-slider-container';

    const pulseSliderLabel = document.createElement('label');
    pulseSliderLabel.textContent = 'Pulse';
    pulseSliderLabel.className = 'pulse-label';

    const pulseSlider = document.createElement('input');
    pulseSlider.type = 'range';
    pulseSlider.min = 30;
    pulseSlider.max = 200;
    pulseSlider.value = 80;
    pulseSlider.className = 'pulse-slider';
    pulseSlider.oninput = () => {
        pulseInput.value = pulseSlider.value;
        pulseValueDisplay.textContent = pulseSlider.value;
    };

    const pulseValueDisplay = document.createElement('span');
    pulseValueDisplay.className = 'pulse-value';
    pulseValueDisplay.textContent = pulseSlider.value;

    pulseSliderContainer.appendChild(pulseSliderLabel);
    pulseSliderContainer.appendChild(pulseSlider);
    pulseSliderContainer.appendChild(pulseValueDisplay);

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Púls';
    submitButton.onclick = () => {
        const pulse = pulseInput.value;
        if (pulse) {
            insertText(`Púls: ${pulse} bpm`);
        } else {
            alert('Please select a value for pulse.');
        }
    };

    pulseContainer.appendChild(pulseButtonsContainer);
    pulseContainer.appendChild(pulseSliderContainer);
    pulseContainer.appendChild(submitButton);

    container.appendChild(pulseContainer);
}



function createTemperatureInterface(containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container with ID ${containerId} not found.`);
        return;
    }

    const tempContainer = document.createElement('div');
    tempContainer.className = 'temperature-container';

    // Add title
    const title = document.createElement('h3');
    title.textContent = 'Hiti';
    tempContainer.appendChild(title);

    const tempInput = document.createElement('input');
    tempInput.type = 'number';
    tempInput.placeholder = 'Temperature (°C)';
    tempInput.className = 'temperature-input';
    tempInput.id = 'temperature-input';
    tempInput.readOnly = true;

    const tempValues = [35.0, 35.5, 36.0, 36.5, 37.0, 37.5, 38.0, 38.5, 39.0, 39.5, 40.0];

    const tempButtonsContainer = document.createElement('div');
    tempButtonsContainer.className = 'temp-buttons-container';

    tempValues.forEach(value => {
        const button = document.createElement('button');
        button.className = 'temp-button';
        button.textContent = value.toFixed(1);
        button.onclick = () => {
            tempInput.value = value.toFixed(1);
            tempSlider.value = value;
            tempValueDisplay.textContent = value.toFixed(1);
        };
        tempButtonsContainer.appendChild(button);
    });

    const tempSliderContainer = document.createElement('div');
    tempSliderContainer.className = 'temp-slider-container';

    const tempSliderLabel = document.createElement('label');
    tempSliderLabel.textContent = 'Temperature (°C)';
    tempSliderLabel.className = 'temp-label';

    const tempSlider = document.createElement('input');
    tempSlider.type = 'range';
    tempSlider.min = 35.0;
    tempSlider.max = 40.0;
    tempSlider.step = 0.1;
    tempSlider.value = 37.0;
    tempSlider.className = 'temp-slider';
    tempSlider.oninput = () => {
        tempInput.value = tempSlider.value;
        tempValueDisplay.textContent = tempSlider.value;
    };

    const tempValueDisplay = document.createElement('span');
    tempValueDisplay.className = 'temp-value';
    tempValueDisplay.textContent = tempSlider.value;

    tempSliderContainer.appendChild(tempSliderLabel);
    tempSliderContainer.appendChild(tempSlider);
    tempSliderContainer.appendChild(tempValueDisplay);

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Enter Temperature';
    submitButton.onclick = () => {
        const temperature = tempInput.value;
        if (temperature) {
            insertText(`Hiti: ${temperature}°C`);
        } else {
            alert('Please select a temperature value.');
        }
    };

    tempContainer.appendChild(tempButtonsContainer);
    tempContainer.appendChild(tempSliderContainer);
    tempContainer.appendChild(submitButton);

    container.appendChild(tempContainer);
}


function createOxygenSaturationInterface(containerId) {
    const container = document.getElementById(containerId);

    const oxygenSaturationContainer = document.createElement('div');
    oxygenSaturationContainer.className = 'oxygen-saturation-container';

    const title = document.createElement('h3');
    title.textContent = 'Mettun';
    oxygenSaturationContainer.appendChild(title);

    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'ox-sat-buttons-container';

    // Add buttons for oxygen saturation values from 100 to 90 in intervals of 1
    for (let value = 100; value >= 90; value--) {
        const button = document.createElement('button');
        button.className = 'ox-sat-button';
        button.textContent = value + '%';
        button.onclick = () => {
            slider.value = value;
            sliderValue.textContent = value + '%';
        };
        buttonsContainer.appendChild(button);
    }

    const sliderContainer = document.createElement('div');
    sliderContainer.className = 'ox-sat-slider-container';

    const sliderLabel = document.createElement('label');
    sliderLabel.className = 'ox-sat-label';
    sliderLabel.textContent = 'Adjust:';

    const slider = document.createElement('input');
    slider.type = 'range';
    slider.min = '85';
    slider.max = '100';
    slider.value = '100';
    slider.className = 'ox-sat-slider';
    
    const sliderValue = document.createElement('span');
    sliderValue.className = 'ox-sat-value';
    sliderValue.textContent = slider.value + '%';

    slider.oninput = function() {
        sliderValue.textContent = slider.value + '%';
    };

    const enterButton = document.createElement('button');
    enterButton.className = 'enter-button';
    enterButton.textContent = 'Enter';
    enterButton.onclick = function() {
        insertText('Mettar ' + slider.value + '%');
    };

    sliderContainer.appendChild(sliderLabel);
    sliderContainer.appendChild(slider);
    sliderContainer.appendChild(sliderValue);
    sliderContainer.appendChild(enterButton);
    
    oxygenSaturationContainer.appendChild(buttonsContainer);
    oxygenSaturationContainer.appendChild(sliderContainer);
    container.appendChild(oxygenSaturationContainer);
}



function createRespiratoryRateInterface(containerId) {
    const container = document.getElementById(containerId);

    const respiratoryRateContainer = document.createElement('div');
    respiratoryRateContainer.className = 'respiratory-rate-container';

    const title = document.createElement('h3');
    title.textContent = 'Öndunartíðni';
    respiratoryRateContainer.appendChild(title);

    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'resp-rate-buttons-container';

    // Add fewer buttons for respiratory rate values
    const respRateValues = [10, 15, 20, 25, 30];
    respRateValues.forEach(value => {
        const button = document.createElement('button');
        button.className = 'resp-rate-button';
        button.textContent = value;  // Just the value without "breaths/min"
        button.onclick = () => {
            slider.value = value;
            sliderValue.textContent = value + ' breaths/min';
        };
        buttonsContainer.appendChild(button);
    });

    const sliderContainer = document.createElement('div');
    sliderContainer.className = 'resp-rate-slider-container';

    const sliderLabel = document.createElement('label');
    sliderLabel.className = 'resp-rate-label';
    sliderLabel.textContent = 'Adjust:';

    const slider = document.createElement('input');
    slider.type = 'range';
    slider.min = '10';
    slider.max = '30';
    slider.value = '20';
    slider.className = 'resp-rate-slider';
    
    const sliderValue = document.createElement('span');
    sliderValue.className = 'resp-rate-value';
    sliderValue.textContent = slider.value + ' breaths/min';

    slider.oninput = function() {
        sliderValue.textContent = slider.value + ' breaths/min';
    };

    const enterButton = document.createElement('button');
    enterButton.className = 'enter-button';
    enterButton.textContent = 'Enter';
    enterButton.onclick = function() {
        insertText('ÖT: ' + slider.value);
    };

    sliderContainer.appendChild(sliderLabel);
    sliderContainer.appendChild(slider);
    sliderContainer.appendChild(sliderValue);
    sliderContainer.appendChild(enterButton);

    respiratoryRateContainer.appendChild(buttonsContainer);
    respiratoryRateContainer.appendChild(sliderContainer);
    container.appendChild(respiratoryRateContainer);
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
        //symptomsColumn.appendChild(durationSection);
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
        const habitsSection = createHabitsSection(Habits);

        const leftColumn = document.createElement('div');
        leftColumn.className = 'column';
        leftColumn.appendChild(einkenniSection);
    //  leftColumn.appendChild(timalengdSection);
        leftColumn.appendChild(historyViralSection);
        leftColumn.appendChild(habitsSection);

        const middleColumn = document.createElement('div');
        middleColumn.className = 'column';
        middleColumn.appendChild(skodunSection);
                
        addLifsmorkButton(middleColumn); // Append the button at the end
        

        const rightColumn = document.createElement('div');
        rightColumn.className = 'column';
        rightColumn.appendChild(planSection);

        const horizontalContainer = document.createElement('div');
        horizontalContainer.className = 'horizontal-sections';
        horizontalContainer.appendChild(leftColumn);
        horizontalContainer.appendChild(middleColumn);
        horizontalContainer.appendChild(rightColumn);

        container.appendChild(horizontalContainer);
 
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

function addLifsmorkButton(parentElement) {
    const lifsmorkButton = document.createElement('button');
    lifsmorkButton.textContent = 'Lífsmörk';
    lifsmorkButton.onclick = openLifsmorkModal;
    lifsmorkButton.className = 'lifsmork-button'; // Add a class for styling
    parentElement.appendChild(lifsmorkButton);
}

function openLifsmorkModal() {
    let modal = document.getElementById('lifsmorkModal');
    if (!modal) {
        const modalElement = document.createElement('div');
        modalElement.id = 'lifsmorkModal';
        modalElement.className = 'modal';
        modalElement.innerHTML = `
            <div class="modal-content">
                <span class="close-button" onclick="closeModal('lifsmorkModal')">&times;</span>
                <div id="lifsmorkContainer"></div>
            </div>
        `;
        document.body.appendChild(modalElement);
        modal = modalElement;
    } else {
        modal.style.display = 'flex';
    }
    const container = document.getElementById('lifsmorkContainer');
    container.innerHTML = ''; // Clear previous content
    createBloodPressureInterface('lifsmorkContainer');
    createPulseInterface('lifsmorkContainer');
    createOxygenSaturationInterface('lifsmorkContainer');
    createTemperatureInterface('lifsmorkContainer');
    createRespiratoryRateInterface('lifsmorkContainer');


    document.addEventListener('keydown', handleEscapeKey);
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

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.removeEventListener('keydown', handleEscapeKey);

        // Check if the modal being closed is the one from "Reykingar"
        if (modalId === 'reykingarModal' && !reykingarFlag) {
            insertText('Reykir');
        }
    }
}

window.onclick = function(event) {
    const modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            closeModal(modals[i].id);
        }
    }
};

function handleEscapeKey(event) {
    if (event.key === 'Escape') {
        const modals = [
            'genderPromptModal', 
            'eyrnaverkurModal', 
            'reykingarModal', 
            'syklalyfModal',
            'hostiOptionsModal',
            'lifsmorkModal' // Added the new modal id here
        ];
        modals.forEach(modalId => {
            const modal = document.getElementById(modalId);
            if (modal && modal.style.display === 'flex') {
                closeModal(modalId);
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

    // Add event listener for closing suboptions on clicking outside
    document.addEventListener('click', function(event) {
        const subOptionsContainer = document.querySelector('.popup-modal');
        const openButton = event.target.closest('button'); // Adjust the selector if needed
        
        // Check if the suboptions container is visible and the click is outside of it
        if (subOptionsContainer && !subOptionsContainer.contains(event.target) && !openButton) {
            subOptionsContainer.remove();
        }
    });
});