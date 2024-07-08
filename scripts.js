const Vottord = [
    
    {
        name: '',
        type: 'options',
        display: ['Sjúkraþjálfun', 'VVV'],
        options: [
            {
                display: 'Sjúkraþjálfun',
                subOptions: [
                    { display: 'Endurnýjun', output: 'Endurnýjun á sjúkraþjálfunarbeiðni' }
                ],
                cancelText: ''
            },
            {
                display: 'VVV',
                subOptions: [
                    { display: 'Framlenging', output: 'Framlengi VVV' }
                ],
                cancelText: ''
            }
        ]
    }
    
];
const RannsoknData = [
    {
        name: '',
        type: 'options',
        display: ['Þvagrannsókn', 'Option 2'],
        options: [
            {
                display: 'Þvagrannsókn',
                subOptions: [
                    { display: 'Stix jákvætt', output: 'Þvagstix jákvætt' },
                    { display: 'Hár hiti og rúmliggjandi', output: 'Verið með háan hita, mestu rúmliggjandi' },
                    { display: 'Hiti í byrjun veikinda', output: 'Hiti í byrjun veikinda en hann yfirstaðinn nú' },
                    { display: 'Ekki mælt', output: 'Upplifað sig með hita en ekki mælt sig' }
                ],
                onRightClickOutput: 'Ekki fengið hita'
            },
            { display: 'Option 2', output: 'Output for Option 2' }
        ]
    }
];

const SymptomsViral = [
    {
        name: '',
        type: 'options',
        display: ['Flensueinkenni', 'Hálsbólga'],
        options: [
            {
                display: 'Flensueinkenni',
                output: 'Flensueinkenni',
                onRightClickOutput: 'Ekki flensueinkenni'
            },
            {
                display: 'Hálsbólga',
                output: 'Hálsbólga',
                onRightClickOutput: 'Ekki hálsbólga'
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Kvef', 'Hósti'],
        options: [
            {
                display: 'Kvef',
                output: 'Kvef',
                onRightClickOutput: 'Ekki kvef'
            },
            {
                display: 'Hósti',
                subOptions: [
                    { display: 'Hósti', output: 'Hósti' },
                    { display: 'Blautur', output: 'Blautur hósti' },
                    { display: 'Þurr', output: 'Þurr hósti' }
                ],
                onRightClickOutput: 'Ekki verið með hósta'
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Takverkur', 'Slappleiki'],
        options: [
            {
                display: 'Takverkur',
                output: 'Fundið fyrir takverk',
                onRightClickOutput: 'Ekki fundið fyrir takverk'
            },
            {
                display: 'Slappleiki',
                output: 'Slappleiki',
                onRightClickOutput: 'Ekki áberandi slappleiki'
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Hæsi', 'Munnangur'],
        options: [
            {
                display: 'Hæsi',
                output: 'Hæsi',
                onRightClickOutput: 'Ekki hæsi'
            },
            {
                display: 'Munnangur',
                output: 'Munnangur',
                onRightClickOutput: 'Ekki munnangur'
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Hiti'],
        options: [
            {
                display: 'Hiti',
                subOptions: [
                    { display: 'Hiti', output: 'Verið með hita' },
                    { display: 'Hár hiti og rúmliggjandi', output: 'Verið með háan hita, mestu rúmliggjandi' },
                    { display: 'Hiti í byrjun veikinda', output: 'Hiti í byrjun veikinda en hann yfirstaðinn nú' },
                    { display: 'Ekki mælt', output: 'Upplifað sig með hita en ekki mælt sig' }
                ],
                onRightClickOutput: 'Ekki fengið hita'
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Sinusþrýstingur', 'Leiðni'],
        options: [
            {
                display: 'Sinusþrýstingur',
                subOptions: [
                    { display: 'Hægra megin', output: 'Þrýstingur yfir ennisholum hægra megin' },
                    { display: 'Vinstra megin', output: 'Þrýstingur yfir ennisholum vinstra megin' },
                    { display: 'Beggja vegna', output: 'Þrýstingur yfir ennisholum beggja vegna' }
                ],
                onRightClickOutput: 'Ekki þrýstingur yfir ennisholum'
            },
            {
                display: 'Leiðni',
                subOptions: [
                    { display: 'Hægra eyra', output: 'Leiðir út í hægra eyra' },
                    { display: 'Vinstra eyra', output: 'Leiðir út í vinstra eyra' }
                ]
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Eyrnaverkur', 'Hella', 'Óþægindi'],
        options: [
            {
                display: 'Verkur',
                subOptions: [
                    { display: 'Hægri', output: 'Verkur í hægra eyra' },
                    { display: 'Vinstri', output: 'Verkur í vinstra eyra' },
                    { display: 'Beggja vegna', output: 'Verkur í báðum eyrum' }
                ],
                onRightClickOutput: 'Ekki einkenni frá eyrum'
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
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Veikindi heima', 'Ferðalag'],
        options: [
            {
                display: 'Veikindi heima',
                output: 'Margir veikir á heimili',
                onRightClickOutput: 'Ekki aðrir veikir á heimili'
            },
            {
                display: 'Ferðalag',
                output: 'Var að koma út ferðalagi erlendis',
                onRightClickOutput: 'Ekki verið erlendis nýlega'
            }
        ]
    },
    {},
    {},
    {},
    {
        name: '',
        type: 'options',
        display: ['Tímalengd einkenna'],
        options: [
            {
                display: 'Tímalengd einkenna',
                subOptions: [
                    {
                        display: 'Dagar',
                        subOptions: [
                            
                            { display: 'Nokkrir dagar', output: 'Nokkra daga saga' },
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
                            { display: 'Nokkrar vikur', output: 'Nokkra vikna saga' },
                            { display: 'Margar vikur', output: 'Margra vikna saga' },
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
                            { display: 'Nokkrir mánuðir', output: 'Nokkra mánaða saga' },
                            { display: 'Margir mánuðir', output: 'Margra mánaða saga' },
                            { display: '1m', output: '1 mán saga' },
                            { display: '2m', output: '2 mán saga' },
                            { display: '3m', output: '3 mán saga' },
                            { display: '4m', output: '4 mán saga' },
                            { display: '5m', output: '5 mán saga' },
                            { display: '6m', output: '6 mán saga' }
                            
                        ],
                        cancelText: ''
                    },
                    {
                        display: 'Ár',
                        subOptions: [
                            { display: '1 ár', output: '1 ár saga' },
                            { display: '2 ár', output: '2 ára saga' },
                            { display: '3 ár', output: '3 ára saga' },
                            { display: 'Nokkur ár', output: 'Verið í nokkur ár' },
                            { display: 'Mörg ár', output: 'Verið í mörg ár' }
                        ],
                        cancelText: ''
                    }
                ],
                cancelText: ''
            }
        ]
    },
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
        display: ['Næring'],
        options: [
            {
                display: 'Næring',
                subOptions: [
                    { display: 'Borðar vel', output: 'Borðar vel' },
                    { display: 'Drekkur vel', output: 'Drekkur vel' },
                    { display: 'Borðar og drekkur vel', output: 'Borðar og drekkur vel' }
                ],
                onRightClickSubOptions: [
                    { display: 'Borðar lítið', output: 'Borðar lítið' },
                    { display: 'Drukkið lítið', output: 'Drukkið lítið' },
                    { display: 'Borðað og drukkið lítið', output: 'Borðað og drukkið lítið' }
                ],
                cancelText: ''
            }
        ]
    }
];
const ExamsViral = [
    {
        name: '',
        type: 'options',
        display: ['Lasleg/ur', 'Yfirþyngd'],
        options: [
            { display: 'Lasleg/ur', output: 'Laslega útlítandi', onRightClickOutput: 'Ekki bráðveikindalegt útlit' },
            { display: 'Yfirþyngd', output: 'Er í yfirþyngd', onRightClickOutput: 'Ekki yfirþyngd' }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Roði í koki', 'Gröftur', 'Stórir'],
        options: [
            { display: 'Roði í koki', output: 'Roði í koki', onRightClickOutput: 'Ekki roði í koki' },
            { display: 'Gröftur á hálskirtlum', output: 'Gröftur á hálskirtlum', onRightClickOutput: 'Ekki gröftur á hálskirtlum' },
            { display: 'Hálskirtlar stórir', output: 'Hálskirtlar stórir', onRightClickOutput: 'Ekki áberandi stórir hálskirtlar' }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Eitlastækkanir'],
        options: [
            { display: 'Eitlastækkanir', output: 'Eitlastækkanir á hálssvæði', onRightClickOutput: 'Ekki eitlastækkanir á hálssvæði' }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Lungnahlustun'],
        options: [
            {
                display: 'Lungnahlustun',
                subOptions: [
                    { display: 'Hrein', output: 'Lungnahlustun, hrein. Eðlileg vesiculer öndunarhljóð' },
                    { display: 'Slímhljóð basalt', output: 'Lungnahlustun sýnir slímhljóð basalt' },
                    { display: 'Obstrúktíf', output: 'Lungnahlustun sýnir lengda útöndun' },
                    { display: 'Gróf', output: 'Lungnahlustun sýnir gróf öndunarhljóð' },
                    { display: 'Gróf, ronchi og lengd útöndun', output: 'Lungnahlustun sýnir gróf öndunarhljóð, ronchi og lengda útöndun' },
                    { display: 'Brak hægra megin basalt', output: 'Heyrist brak hægra megin basalt' },
                    { display: 'Brak vinstra megin basalt', output: 'Heyrist brak vinstra megin basalt' }
                ],
                onRightClickOutput: 'Lungnahlustun hrein'
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Roði á hljóðhimnum', 'Roði í hlust', 'Mergur'],
        options: [
            {
                display: 'Roði á hljóðhimnum',
                subOptions: [
                    { display: 'Hægri', output: 'Roði á hægri hljóðhimnu' },
                    { display: 'Vinstri', output: 'Roði á vinstri hljóðhimnu' },
                    { display: 'Beggja vegna', output: 'Roði á hljóðhimnum beggja vegna' }
                ],
                onRightClickOutput: 'Ekki roði á hljóðhimnum'
            },
            {
                display: 'Roði í hlust',
                subOptions: [
                    { display: 'Hægri', output: 'Roði í hlust hægra megin' },
                    { display: 'Vinstri', output: 'Roði í hlust vinstra megin' },
                    { display: 'Beggja vegna', output: 'Roði í hlustum beggja vegna' }
                ],
                onRightClickOutput: 'Ekki roði í hlust'
            },
            {
                display: 'Mergur',
                subOptions: [
                    { display: 'Hægri', output: 'Eyrnamergur hægra megin' },
                    { display: 'Vinstri', output: 'Eyrnamergur vinstra megin' },
                    { display: 'Beggja vegna', output: 'Eyrnamergur beggja vegna' }
                ],
                onRightClickOutput: 'Ekki eyrnamergur'
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Strep', 'CRP'],
        options: [
            { display: 'Strep', output: 'Streptest jákvætt', onRightClickOutput: 'Streptest neikvætt' },
            { display: 'CRP', output: 'CRP hátt', onRightClickOutput: 'CRP lágt' }
        ]
    }
];
const PlanViral = [
    {
        name: '',
        type: 'options',
        display: ['Hósti', 'Vírósa', 'Eyrnabólga', 'Lungnabólga'],
        options: [
            { display: 'Hósti', output: 'Hósti' },
            { display: 'Vírósa', output: 'Vírósa' },
            { display: 'Eyrnabólga', output: 'Eyrnabólga' },
            {
                display: 'Lungnabólga',
                    subOptions: [
                        { display: 'Lungnabólga', output: 'Lungnabólga' },
                        { display: 'Grunur', output: 'Grunur um lungnabólgu' }
                    ],
                }
        ]
    },
    {
        name: '',
        type: 'options',
        display: [ 'Bronchitis', 'Bronchiolitis', 'Versnun á COPD', 'Astmi'],
        options: [
            { display: 'Bronchitis', output: 'Bronchitis' },
            { display: 'Bronchiolitis', output: 'Bronchiolitis' },
            { display: 'Versnun á COPD', output: 'Versnun á COPD' },
            { display: 'Astmi', output: 'Astmi' }
        ]
    },
    {
        name: '',
        type: 'options',
        display: [ 'Strep', 'Mónó'],
        options: [
            
            { display: 'Strep', output: 'Strep throat' },
            { display: 'Mónó', output: 'Grunur um mónónúkleósu' }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Mergur', 'Otitis externa', 'Sinusitis', 'Langvarandi einkenni'],
        options: [
            { display: 'Mergur', output: 'Eyrnamergur' },
            {
                display: 'Otitis externa',
                subOptions: [
                    { display: 'Otitis externa', output: 'Otitis externa' },
                    { display: 'Grunur um otitis externa', output: 'Grunur um otitis externa' }
                ]
            },
            { display: 'Sinusitis', output: 'Sinusitis' },
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
                    { display: 'Hitalækkandi', output: 'Hitalækkandi eftir þörfum' },
                    { display: 'Slímlosandi', output: 'Reynum slímlosandi' },
                    { display: 'Kódein', output: 'Fær kódein við hósta' }
                ],
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Stera', 'Nefstera', 'Púst', 'Mergur', 'Sérfræðing'],
        options: [
            { display: 'Stera', output: 'Set á stuttan sterakúr' },
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
                    { display: 'HNE', output: 'Ráðlegg mat HNE læknis' },
                    { display: 'HNE í framhaldi', output: 'Ráðlegg mat HNE læknis í framhaldi' },
                    { display: 'Tilvísun', output: 'Geri tilvísun' }
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
                    { display: 'keflex', output: 'Ráðlegg sýklalyf. Set keflex í gáttina' }
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
        display: ['Einkenni við þvaglát', 'Jákv stix heima', 'Fengið áður'],
        options: [
            {
                display: 'Einkenni við þvaglát',
                subOptions: [
                    { display: 'Einkenni við þvaglát', output: 'Einkenni við þvaglát' },
                    {display: 'Grunur um blöðrubólgu', output: 'Grunar sig vera með blöðrubólgu'}
                    
                ],
                cancelText: ''
            },
            { display: 'Jákv stix heima', output: 'Jákv stix heima', onRightClickOutput: 'Neikv stix heima' },
            { display: 'Fengið áður', output: 'Þekkir einkennin', onRightClickOutput: 'Aldrei fengið áður' }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Óþægindi', 'Sviði', 'Tíð þvaglát', 'Blóð'],
        options: [
            { display: 'Óþægindi', output: 'Óþægindi við þvaglát', onRightClickOutput: 'Neitar óþægindum við þvaglát' },
            { display: 'Sviði', output: 'Sviði við þvaglát', onRightClickOutput: 'Ekki sviði við þvaglát' },
            { display: 'Tíð þvaglát', output: 'Tíð þvaglát', onRightClickOutput: 'Ekki tíð þvaglát' },
            { display: 'Blóð', output: 'Blóð í þvagi', onRightClickOutput: 'Ekki blóð í þvagi' }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Hiti', 'Bakverkur', 'Slappleiki'],
        options: [
            { display: 'Hiti', output: 'Verið með hita', onRightClickOutput: 'Ekki fengið hita' },
            { display: 'Bakverkur', output: 'Bakverkur, nýtilkominn', onRightClickOutput: 'Ekki nýtilkominn bakverkur' },
            { display: 'Slappleiki', output: 'Verið með slappleika', onRightClickOutput: 'Ekki fundið fyrir slappleika' }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Niðurstöður rannsókna'],
        options: [

            {
                display: 'Niðurstöður rannsókna',
                subOptions: [
                    { display: 'Niðurstöður þvagstix', output: 'Niðurstöður þvagstix'},
                    { display: 'Niðurstöður þvagræktun', output: 'Niðurstöður þvagræktun'}
                    
                ],
                cancelText: ''
            }
            
        ]
    },
    {},
    {},
    {},
    {
        name: '',
        type: 'options',
        display: ['Tímalengd einkenna'],
        options: [
            {
                display: 'Tímalengd einkenna',
                subOptions: [
                    {
                        display: 'Dagar',
                        subOptions: [
                            
                            { display: 'Nokkrir dagar', output: 'Nokkra daga saga' },
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
                            { display: 'Nokkrar vikur', output: 'Nokkra vikna saga' },
                            { display: 'Margar vikur', output: 'Margra vikna saga' },
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
                            { display: 'Nokkrir mánuðir', output: 'Nokkra mánaða saga' },
                            { display: 'Margir mánuðir', output: 'Margra mánaða saga' },
                            { display: '1m', output: '1 mán saga' },
                            { display: '2m', output: '2 mán saga' },
                            { display: '3m', output: '3 mán saga' },
                            { display: '4m', output: '4 mán saga' },
                            { display: '5m', output: '5 mán saga' },
                            { display: '6m', output: '6 mán saga' }
                            
                        ],
                        cancelText: ''
                    },
                    {
                        display: 'Ár',
                        subOptions: [
                            { display: '1 ár', output: '1 ár saga' },
                            { display: '2 ár', output: '2 ára saga' },
                            { display: '3 ár', output: '3 ára saga' },
                            { display: 'Nokkur ár', output: 'Verið í nokkur ár' },
                            { display: 'Mörg ár', output: 'Verið í mörg ár' }
                        ],
                        cancelText: ''
                    }
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
        display: ['Lasleg/ur'],
        options: [
            { display: 'Lasleg/ur', output: 'Laslega útlítandi', onRightClickOutput: 'Ekki bráðveikindalegt útlit' }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Bankeymsli'],
        options: [
            {
                display: 'Bankeymsli',
                subOptions: [
                    { display: 'Bankeymsli hægra megin', output: 'Bankeymsli yfir nýrnastað hægra megin' },
                    { display: 'Bankeymsli vinstra megin', output: 'Bankeymsli yfir nýrnastað vinstra megin' }
                ],
                onRightClickOutput: 'Ekki bankeymsli yfir nýrnastað'
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Þvagstix', 'Þvagræktun', 'Næmi'],
        options: [
            {
                display: 'Þvagstix',
                subOptions: [
                    { display: 'Jákvætt stix', output: 'Þvagstix jákvætt' },
                    { display: 'Nítrít', output: 'Jákvæð nítrít í þvagi' },
                    { display: 'Hvít', output: 'Hvít í þvagi' }
                ],
                onRightClickSubOptions: [
                    { display: 'Þvagstix hreint', output: 'Þvagstix hreint' },
                    { display: 'Nítrít neikv', output: 'Nítrít neikvæð í þvagi' },
                    { display: 'Hvít neikv', output: 'Hvít neikvæð í þvagi' }
                ]
            },
            {
                display: 'Þvagræktun',
                subOptions: [
                    { display: 'E. coli', output: 'Ræktast E. coli' },
                    { display: 'Klebsiella', output: 'Ræktast Klebsiella' },
                    { display: 'Proteus', output: 'Ræktast Proteus' },
                    { display: 'Enterococcus', output: 'Ræktast Enterococcus' },
                    { display: 'Pseudomonas', output: 'Ræktast Pseudomonas' },
                    { display: 'Staphylococcus saprophyticus', output: 'Ræktast Staphylococcus saprophyticus' }
                ],
                onRightClickSubOptions: [
                    { display: 'Þvagræktun neikvæð', output: 'Þvagræktun neikvæð' }
                ]
            },
            {
                display: 'Næmi',
                subOptions: [
                    { display: 'Pivmecillinam', output: 'Næmi fyrir Pivmecillinam' },
                    { display: 'Amoxicillin', output: 'Næmi fyrir Amoxicillin' },
                    { display: 'Cefalexin', output: 'Næmi fyrir Cefalexin' },
                    { display: 'Trimethoprim', output: 'Næmi fyrir Trimethoprim' },
                    { display: 'Nitrofurantoin', output: 'Næmi fyrir Nitrofurantoin' },
                    { display: 'Ciprofloxacin', output: 'Næmi fyrir Ciprofloxacin' }
                ],
                onRightClickSubOptions: [
                    { display: 'Pivmecillinam', output: 'Ónæm fyrir Pivmecillinam' },
                    { display: 'Amoxicillin', output: 'Ónæm fyrir Amoxicillin' },
                    { display: 'Cefalexin', output: 'Ónæm fyrir Cefalexin' },
                    { display: 'Trimethoprim', output: 'Ónæm fyrir Trimethoprim' },
                    { display: 'Nitrofurantoin', output: 'Ónæm fyrir Nitrofurantoin' },
                    { display: 'Ciprofloxacin', output: 'Ónæm fyrir Ciprofloxacin' }
                ]
            }
        ]
    }
];
const PlanUrinary = [
    { 
        name: '', 
        type: 'options', 
        display: ['Blöðrubólga', 'Pyelonephritis', 'Prostatitis'], 
        options: [
            {
                display: 'Blöðrubólga',
                subOptions: [
                    { display: 'Blöðrubólga', output: 'Blöðrubólga' },
                    { display: 'Grunur um blöðrubólgu', output: 'Grunur um blöðrubólgu' }
                ]
            },
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
            {
                display: 'Myndataka',
                subOptions: [
                    { display: 'TS þvagfærayfirlit', output: 'Ráðlegg TS þvagfærayfirlit' }
                ]
            },
            { display: 'Blóðprufa', output: 'Panta blóðprufu' }
        ]
    },
    { 
        name: '', 
        type: 'options', 
        display: ['Þvagrannsókn'], 
        options: [
            {
                display: 'Þvagrannsókn',
                subOptions: [
                    { display: 'Stix og ræktun', output: 'Sendi beiðni í stix og ræktun. Skilar þvagprufu í afgreiðslu' },
                    { display: 'Þvagstix', output: 'Ráðlegg þvagstix. Skilar þvagprufu í afgreiðslu' }
                ]
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
const RiskfactorsUrinary = [
    {
        name: '',
        type: 'options',
        display: ['Reykingar', 'Karlkyn', 'Aldur>35', 'Fjölskyldusaga'],
        options: [
            { display: 'Reykingar', output: 'Saga um reykingar', onRightClickOutput: 'Ekki saga um reykingar' },
            { display: 'Karlkyn', output: 'Karlkyn', onRightClickOutput: 'Ekki karlkyn' },
            { display: 'Aldur>35', output: 'Aldur > 35 ára', onRightClickOutput: 'Aldur ≤ 35 ára' },
            {
                display: 'Fjölskyldusaga',
                subOptions: [
                    { display: 'Þvagblöðrukrabbamein', output: 'Fjölskyldusaga um krabbamein í þvagblöðru' },
                    { display: 'Blöðruhálskirtilskrabbamein', output: 'Fjölskyldusaga um blöðruhálskirtilskrabbamein' }
                ],
                onRightClickOutput: 'Ekki fjölskyldusaga um þvagblöðru- eða blöðruhálskirtilskrabbamein'
            }
        ]
    }
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
                onRightClickOutput: 'Ekki einkenni frá auga'
            },
            {
                display: 'Efra augnlok',
                subOptions: [
                    { display: 'Hægra', output: 'Einkenni frá hægra efra augnloki' },
                    { display: 'Vinstra', output: 'Einkenni frá vinstra efra augnloki' }
                ],
                onRightClickOutput: 'Ekki einkenni frá efra augnloki'
            },
            {
                display: 'Neðra augnlok',
                subOptions: [
                    { display: 'Hægra', output: 'Einkenni frá hægra neðra augnloki' },
                    { display: 'Vinstra', output: 'Einkenni frá vinstra neðra augnloki' }
                ],
                onRightClickOutput: 'Ekki einkenni frá neðra augnloki'
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
                onRightClickOutput: 'Ekki fengið aðskotahlut í augað'
            },
            {
                display: 'Áverki',
                subOptions: [
                    { display: 'Áverki', output: 'Áverki á auga' },
                    { display: 'Grein', output: 'Fékk grein í augað' },
                    { display: 'Fingur', output: 'Fékk fingur í augað' }
                ],
                onRightClickOutput: 'Ekki fengið áverka á auga'
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Aðskotahlutstilfinning'],
        options: [
            { display: 'Aðskotahlutstilfinning', output: 'Finnur fyrir aðskotahlutstilfinningu', onRightClickOutput: 'Ekki aðskotahlutstilfinning' }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Roði', 'Nabbi', 'Kláði', 'Rennsli'],
        options: [
            { display: 'Roði', output: 'Roði', onRightClickOutput: 'Ekki roði' },
            { display: 'Nabbi', output: 'Nabbi', onRightClickOutput: 'Ekki nabbi' },
            { display: 'Kláði', output: 'Kláði', onRightClickOutput: 'Ekki kláði' },
            { display: 'Rennsli', output: 'Aukin táramyndun', onRightClickOutput: 'Ekki aukin táramyndun' }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Gröftur', 'Límd'],
        options: [
            { display: 'Gröftur', output: 'Lekur gröftur', onRightClickOutput: 'Ekki gröftur' },
            { display: 'Límd', output: 'Augnlok límd saman á morgnanna', onRightClickOutput: 'Augnlok ekki límd saman á morgnanna' }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Sjóntap', 'Móðusjón', 'Ljósfælni', 'Verkur'],
        options: [
            { display: 'Sjóntap', output: 'Lýsir versnun á sjón', onRightClickOutput: 'Sjón í lagi' },
            { display: 'Móðusjón', output: 'Lýsir móðusjón', onRightClickOutput: 'Neitar móðusjón' },
            { display: 'Ljósfælni', output: 'Lýsir ljósfælni', onRightClickOutput: 'Neitar ljósfælni' },
            { display: 'Verkur', output: 'Verkjar', onRightClickOutput: 'Neitar verk' }
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
const SymptomsHeart = [
    {
        name: '',
        type: 'options',
        display: ['Nokkrir dagar', 'Dagar', 'Vikur', 'Mánuðir'],
        options: [
            {
                display: 'Nokkrir dagar',
                output: 'Nokkra daga saga',
                onRightClickOutput: 'Ekki nokkra daga saga'
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
                onRightClickOutput: 'Ekki daga saga'
            },
            {
                display: 'Vikur',
                subOptions: [
                    { display: '1v', output: '1 vikna saga' },
                    { display: '1,5v', output: '1,5 vikna saga' },
                    { display: '2v', output: '2 vikna saga' },
                    { display: '3v', output: '3 vikna saga' },
                    { display: 'Margar', output: 'Margra vikna saga' }
                ],
                onRightClickOutput: 'Ekki vikna saga'
            },
            {
                display: 'Mánuðir',
                subOptions: [
                    { display: '1m', output: '1 mán saga' },
                    { display: '2m', output: '2 mán saga' },
                    { display: '3m', output: '3 mán saga' },
                    { display: '4m', output: '4 mán saga' },
                    { display: '5m', output: '5 mán saga' },
                    { display: '6m', output: '6 mán saga' },
                    { display: 'Margir', output: 'Margra mánaða saga' }
                ],
                onRightClickOutput: 'Ekki mánuða saga'
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Háþrýstingur', 'Heimamælingar', 'Hjartsláttaróþægindi'],
        options: [
            {
                display: 'Háþrýstingur',
                subOptions: [
                    { display: 'Eftirfylgd', output: 'Eftirfylgd með háþrýstingi' },
                    { display: 'Grunur um háþrýsting', output: 'Grunur um háþrýsting. Mælt þrýstinginn hækkaðan heimafyrir' }
                ],
                onRightClickOutput: 'Ekki saga um háþrýsting'
            },
            {
                display: 'Heimamælingar',
                subOptions: [
                    { display: 'Heimamælingar', output: 'Kemur með heimamælingar' },
                    { display: 'Hækkaðar', output: 'Kemur með heimamælingar. Er oft að mælast yfir mörkum' },
                    { display: 'Eðlilegar', output: 'Kemur með heimamælingar. Flestar mælingar innan eðlilegra marka' }
                ],
                onRightClickOutput: 'Engar heimamælingar'
            },
            {
                display: 'Hjartsláttaróþægindi',
                subOptions: [
                    { display: 'Hjartsláttaróþægindi', output: 'Fundið fyrir hjartsláttaróþægindum' },
                    { display: 'Hækkaðar', output: 'Kemur með heimamælingar. Er oft að mælast yfir mörkum' },
                    { display: 'Eðlilegar', output: 'Kemur með heimamælingar. Flestar mælingar innan eðlilegra marka' }
                ],
                onRightClickOutput: 'Ekki fundið fyrir hjartsláttaróþægindum'
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Mæði', 'Slappleiki', 'Fótabjúg'],
        options: [
            {
                display: 'Mæði',
                subOptions: [
                    { display: 'Mæði', output: 'Játar mæði' },
                    { display: 'Meira en áður', output: 'Mæðist meira en áður' },
                    { display: 'Mæði við áreynslu', output: 'Lýsir mæði við áreynslu' }
                ],
                onRightClickOutput: 'Neitar mæði'
            },
            { display: 'Slappleiki', output: 'Fundið fyrir auknum slappleika', onRightClickOutput: 'Ekki fundið fyrir auknum slappleika' },
            { display: 'Fótabjúg', output: 'Verið með bjúg á fótum', onRightClickOutput: 'Neitar bjúg á fótum' }
        ]
    },
    {},
    {},
    {},
    {
        name: '',
        type: 'options',
        display: ['Brjóstverkur', 'Tegund', 'Staðsettning', 'Leiðni'],
        options: [
            { display: 'Brjóstverkur', output: 'Fundið fyrir bjóstverk', onRightClickOutput: 'Ekki fundið fyrir bjóstverk' },
            {
                display: 'Tegund',
                subOptions: [
                    { display: 'Þyngsli', output: 'Lýsir þyngslum' },
                    { display: 'Stíngandi', output: 'Lýsir sem stíngandi' },
                    { display: 'Sviði', output: 'Lýsir sem sviða' },
                    { display: 'Brennandi', output: 'Lýsir sem brennandi' }
                ],
                onRightClickOutput: ''
            },
            {
                display: 'Staðsettning',
                subOptions: [
                    { display: 'Miðri bringu', output: 'Staðsett yfir miðju bringubeini' },
                    { display: 'Epigastrium', output: 'Staðsett í epigastrium' },
                    { display: 'Hjartastað', output: 'Staðsett yfir hjartastað' }
                ],
                onRightClickOutput: ''
            },
            {
                display: 'Leiðni',
                subOptions: [
                    { display: 'Vinstri hendi', output: 'Leiðir út í vinstri hendi' },
                    { display: 'Kjálka', output: 'Leiðir út í kjálka' },
                    { display: 'Bak', output: 'Leiðir aftur í bak' }
                ],
                onRightClickOutput: 'Verkurinn leiðir ekki'
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Áreynslutengdur', 'Onset', 'Gerst áður', 'Versnar við'],
        options: [
            { display: 'Áreynslutengdur', output: 'Kemur við áreynslu', onRightClickOutput: 'Ekki tengdur áreynslu' },
            {
                display: 'Onset',
                subOptions: [
                    { display: '<30 mín>', output: 'Einkenni byrjuðu fyrir <30 mínútúm>' },
                    { display: '30 mín - 1klst', output: 'Einkenni byrjuðu fyrir innan við klst' },
                    { display: '2 klst>', output: 'Einkenni byrjuðu fyrir u.þ.b. 2 klst síðan' },
                    { display: '3 klst', output: 'Einkenni byrjuðu fyrir u.þ.b. 3 klst síðan' }
                ],
                onRightClickOutput: ''
            },
            { display: 'Gerst áður', output: 'Kannast við verkinn', onRightClickOutput: 'Ekki fengið svona einkenni áður' },
            {
                display: 'Versnar við',
                subOptions: [
                    { display: 'Öndun', output: 'Verkurinn versnar við að anda djúpt' },
                    { display: 'Hreyfingu', output: 'Verkurinn er stöðubundinn, versnar við ákveðnar hreyfingar' },
                    { display: 'Ekkert', output: 'Ekkert sem gerir verkinn betri eða verri' }
                ],
                onRightClickOutput: 'Ekkert sem gerir verkinn betri eða verri'
            }
        ]
    }
];
const ExamsHeart = [
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
        display: ['Hjartahlustun eðlileg', 'Óhljóð'],
        options: [
            { display: 'Hjartahlustun eðlileg', output: 'Hjartahlustun sýnir S1-S2 án auka- eða óhljóða' },
            {
                display: 'Óhljóð',
                subOptions: [
                    { display: 'Systólískt', output: 'Við hjartahlustun heyrist systólískt óhljóð' }
                ]
            }
        ]
    },
    {},{},{},
    {
        name: '',
        type: 'options',
        display: ['EKG eðl'],
        options: [
            { display: 'EKG eðl', output: 'Hjartalínurit sýnir sinus takt án bráðra breytinga' }
        ]
    }
];
const PlanHeart = [
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
const RiskFactorsHeart = [
    {
        name: '',
        type: 'options',
        display: ['Reykingar', 'Háþrýstingur', 'Obesity'],
        options: [
            { display: 'Reykingar', output: 'Reykingasaga', onRightClickOutput: 'Ekki reykingasaga' },
            { display: 'Háþrýstingur', output: 'Saga um háþrýsting', onRightClickOutput: 'Ekki saga um háþrýsting' },
            {
                display: 'Obesity',
                subOptions: [
                    { display: 'Yfirþyngd', output: 'Er í yfirþyngd' },
                    { display: 'Obesity BMI > 30', output: 'Er í yfirþyngd, BMI > 30' },
                    { display: 'Obesity BMI > 35', output: 'Er í yfirþyngd, BMI > 35' }
                ],
                onRightClickOutput: 'Ekki í yfirþyngd'
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Sykursýki', 'Blóðfituröskun', 'Fjölskyldusaga'],
        options: [
            { display: 'Sykursýki', output: 'Er með sykursýki 2', onRightClickOutput: 'Ekki sykursýki' },
            { display: 'Blóðfituröskun', output: 'Er með blóðfituröskun', onRightClickOutput: 'Ekki þekkt blóðfituröskun' },
            { display: 'Fjölskyldusaga', output: 'Fjölskyldusaga um hjarta- og æðasjúkdóm', onRightClickOutput: 'Neikvæð ættarsaga' }
        ]
    }
];
const CHADSVASCHeart = [
    {
        name: '',
        type: 'options',
        display: ['Aldur','Kyn', 'Hjartabilun', 'Háþrýstingur'],
        options: [
            {
                display: 'Aldur',
                subOptions: [
                    { display: '<65', output: 'Aldur <65 (+0)' },
                    { display: '65-74', output: 'Aldur milli 65-74 (+1)' },
                    { display: 'Aldur >74', output: 'Aldur >74 (+2)' }
                ],
                cancelText: ''
            },
            {
                display: 'Kyn',
                subOptions: [
                    { display: 'KK', output: 'Karlkyn (+0)' },
                    { display: 'Kvk', output: 'Kvenkyn (+1)' }
                ],
                cancelText: ''
            },
            {
                display: 'Hjartabilun',
                subOptions: [
                    { display: 'Saga um CHF', output: 'Saga um hjartabilun (+1)' },
                    { display: 'Ekki saga um CHF', output: 'Ekki saga um hjartabilun (+0)' }
                ],
                cancelText: ''
            },
            {
                display: 'Háþrýsting',
                subOptions: [
                    { display: 'Saga um háþrýsting', output: 'Saga um háþrýsting (+1)' },
                    { display: 'Ekki saga um háþrýsting', output: 'Ekki saga háþrýsting (+0)' }
                ],
                cancelText: ''
            }
        ]              
    },
    {
        name: '',
        type: 'options',
        display: ['TIA/STROKE', 'Æðasjúkdóm', 'Sykursýki'],
        options: [
           
            {
                display: 'TIA/STROKE',
                subOptions: [
                    { display: 'Fengið TIA', output: 'Saga um TIA (+2)' },
                    { display: 'Fengið stroke', output: 'Saga um heilablóðfall (+2)' },
                    { display: 'Ekki fengið TIA/stroke', output: 'Ekki saga um TIA eða heilablóðfall (+0)' }
                ],
                cancelText: ''
            },
            {
                display: 'Æðasjúkdóm',
                subOptions: [
                    { display: 'Kransæðasjúkdóm', output: 'Saga um kransæða sjúkdóm (+1)' },
                    { display: 'Útæðasjúkdóm', output: 'Saga um útæðasjúkdóm (+1)' },
                    { display: 'Hvorugt', output: 'Ekki saga um kransæða eða útæðasjúkdóm (+0)' }
                ],
                cancelText: ''
            },
            {
                display: 'Sykursýki',
                subOptions: [
                    { display: 'Saga um sykursýki', output: 'Saga um sykursýki (+1)' },
                    { display: 'Ekki saga um sykursýki', output: 'Ekki saga um sykursýki (+0)' }
                ],
                cancelText: ''
            }
        ]              
    }
    
];
const SymptomsMelting = [
    {
        name: '',
        type: 'options',
        display: ['Ógleði', 'Uppköst'],
        options: [
            { display: 'Ógleði', output: 'Ógleði' },
            { display: 'Uppköst', output: 'Uppköst' }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Niðurgangur', 'Hægðatregða'],
        options: [
            { display: 'Niðurgangur', output: 'Niðurgangur' },
            { display: 'Hægðatregða', output: 'Hægðatregða' }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Magaverkir', 'Uppþemba'],
        options: [
            { display: 'Magaverkir', output: 'Magaverkir' },
            { display: 'Uppþemba', output: 'Uppþemba' }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Brjóstsviði', 'Matarlystarleysi'],
        options: [
            { display: 'Brjóstsviði', output: 'Brjóstsviði' },
            { display: 'Matarlystarleysi', output: 'Matarlystarleysi' }
        ]
    }
];
const ExamsMelting = [
    {
        name: '',
        type: 'options',
        display: ['Ástand sjúklings', 'Slímhúð í munni', 'Háræðafylling'],
        options: [
            { display: 'Ástand sjúklings', output: 'Sjúklingur virðist í bráðum verkjum', onRightClickOutput: 'Sjúklingur virðist ekki í bráðum verkjum' },
            { display: 'Slímhúð í munni', output: 'Slímhúð í munni er þurr', onRightClickOutput: 'Slímhúð í munni er eðlileg' },
            { display: 'Háræðafylling', output: 'Aukin háræðafylling', onRightClickOutput: 'Eðlileg háræðafylling' }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Þaninn', 'Hlustun á kvið', 'Þreifing á kvið', 'Bank', 'Sleppieymsli'],
        options: [
            {
                display: 'Þaninn',
                subOptions: [
                    { display: 'Þaninn', output: 'Kviður þaninn' }
                ],
                onRightClickOutput: 'Kviður óþaninn'
            },
            {
                display: 'Garnahljóð',
                subOptions: [
                    { display: 'Garnahljóð til staðar', output: 'Garnahljóð til staðar' },
                    { display: 'Engin garnahljóð', output: 'Ekki heyrast garnahljóð' }
                ],
                onRightClickOutput: 'Hlustun á kvið sýnir eðlileg garnahljóð'
            },
            {
                display: 'Þreifing',
                subOptions: [
                    { display: 'Mjúkur kviður', output: 'Kviður mjúkur' },
                    { display: 'Eymslalaus', output: 'Kviður mjúkur' },
                    { display: 'Spenntur kviður', output: 'Þreifing á kvið sýnir spenntan kvið' },
                    { display: 'Eymsli við þreifingu', output: 'Þreifing á kvið sýnir eymsli við þreifingu' },
                    { display: 'Eymsli í hægri neðri fjórðungi', output: 'Þreifing á kvið sýnir eymsli í hægri neðri fjórðungi' },
                    { display: 'Eymsli í vinstra neðri fjórðungi', output: 'Þreifing á kvið sýnir eymsli í vinstra neðri fjórðungi' },
                    { display: 'Eymsli í epigastrium', output: 'Þreifing á kvið sýnir eymsli í epigastrium' },
                    { display: 'Eymsli í suprapubic svæði', output: 'Þreifing á kvið sýnir eymsli í suprapubic svæði' },
                    { display: 'Peritoneal merki', output: 'Þreifing á kvið sýnir peritoneal merki' }
                ],
                onRightClickOutput: 'Mjúkur og eymslalaus við þreifingu'
            },
            {
                display: 'Bank',
                subOptions: [
                    { display: 'Eymsli við bank', output: 'Eymsli við bank' },
                    { display: 'Engin eymsli við bank', output: 'Engin eymsli við bank' }
                ],
                onRightClickOutput: 'Bank sýnir engin eymsli'
            },
            {
                display: 'Sleppieymsli',
                subOptions: [
                    { display: 'Já', output: 'Sleppieymsli til staðar' },
                    { display: 'Nei', output: 'Sleppieymsli ekki til staðar' }
                ],
                onRightClickOutput: 'Sleppieymsli ekki til staðar'
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Endaþarmsskoðun'],
        options: [
            {
                display: 'Endaþarmsskoðun',
                subOptions: [
                    { display: 'Eðlilegt', output: 'Endaþarmsskoðun sýnir eðlilegt ástand' },
                    { display: 'Blóð á hanska', output: 'Endaþarmsskoðun sýnir blóð á hanska' },
                    { display: 'Hægðir í ampullu', output: 'Endaþarmsskoðun sýnir hægðir í ampullu' },
                    { display: 'Engar hægðir í ampullu', output: 'Endaþarmsskoðun sýnir engar hægðir í ampullu' }
                ],
                onRightClickOutput: 'Endaþarmsskoðun sýnir eðlilegt ástand'
            }
        ]
    }
];

const PlanMelting = [
    {
        name: '',
        type: 'options',
        display: ['Gastroenteritis', 'Niðurgangur', 'Hægðatregða', 'Bakflæði'],
        options: [
            { display: 'Gastroenteritis', output: 'Gastroenteritis' },
            { display: 'Niðurgangur', output: 'Niðurgangur' },
            {
                display: 'Hægðatregða',
                subOptions: [
                    { display: 'Hægðatregða', output: 'Hægðatregða' },
                    { display: 'Grunur um hægðatregðu', output: 'Grunur um hægðatregðu' }
                ]
            },
            { display: 'Bakflæði', output: 'Bakflæði' }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Gallsteinar', 'Diverticulitis', 'Endaþarmur', 'Botnlangi'],
        options: [
            {
                display: 'Gallsteinar',
                subOptions: [
                    { display: 'Gallsteinar', output: 'Gallsteinar' },
                    { display: 'Grunur um gallsteina', output: 'Grunur um gallsteina' }
                ]
            },
            {
                display: 'Diverticulitis',
                subOptions: [
                    { display: 'Diverticulitis', output: 'Diverticulitis' },
                    { display: 'Grunur um diverticulitis', output: 'Grunur um diverticulitis' }
                ]
            },
            {
                display: 'Endaþarmur',
                subOptions: [
                    { display: 'Óþægindi frá endaþarmi', output: 'Óþægindi frá endaþarmi'},
                    { display: 'Blæðing úr endaþarmi', output: 'Blæðing úr endaþarmi'},
                    {
                        display: 'Gyllinæð',
                        subOptions: [
                            { display: 'Gyllinæð', output: 'Gyllinæð' },
                            { display: 'Grunur um gyllinæð', output: 'Grunur um gyllinæð' }
                        ],
                        cancelText: ''
                    },
                    {
                        display: 'Anal fissúra',
                        subOptions: [
                            { display: 'Anal fissúra', output: 'Anal fissúra' },
                            { display: 'Grunur um anal fissúru', output: 'Grunur um anal fissúru' }
                        ],
                        cancelText: ''
                    }
                    
                ]
            },
            {
                display: 'Botnlangi',
                subOptions: [
                    { display: 'Botnlangi', output: 'Botnlangabólga' },
                    { display: 'Grunur um botnlangabólgu', output: 'Grunur um botnlangabólgu' }
                ]
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Kviðverkur', 'Uppköst'],
        options: [
            { display: 'Kviðverkur', output: 'Kviðverkur' },
            { display: 'Uppköst', output: 'Uppköst' }
        ]
    },
    {},{},{},
    {
        name: '',
        type: 'options',
        display: ['Ráðleggingar', 'Stuðningsmeðferð'],
        options: [
            {
                display: 'Ráðleggingar',
                subOptions: [
                    { display: 'Almennar', output: 'Almennar ráðleggingar'},
                    { display: 'Mataræði', output: 'Fær viðeigandi fræðslu um mataræði'},
                    { display: 'Hægðatregða', output: 'Fær viðeigandi ráðleggingar um trefja- og vökvainntöku. Rætt um helstu hægðalyf'},
                    { display: 'Diverticulitis - Ráðl, fljótandi + sýklalyf ef þarf', output: 'Fær viðeigandi ráðleggingar um meðferð diverticulitis. Ráðlegg fljótandi fæði fyrstu dagana. Ekki alltaf þörf á sýklalyfjum en set í gáttina, leysir út ef lagast ekki'}
                ]
            },
            {
                display: 'Stuðningsmeðferð',
                subOptions: [
                    { display: 'Loperamide', output: 'Ráðlegg loperamide við niðurgangi' },
                    { display: 'Vökvi', output: 'Ráðlegg að drekka vel til að viðhalda vökva- og saltjafnvægi' },
                    { display: 'Góðgerlar', output: 'Ráðlegg góðgerla til að bæta meltingu' }
                ]
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Sýklalyf', 'Verkjalyf', 'Sérfræðingur'],
        options: [
            {
                display: 'Sýklalyf',
                subOptions: [
                    { display: 'Amoxicillin', output: 'Ráðlegg sýklalyf. Set amoxicillin í gáttina' },
                    { display: 'Spectracillin', output: 'Ráðlegg sýklalyf. Set spectracillin í gáttina' },
                    { display: 'Metronidazole', output: 'Ráðlegg sýklalyf. Set metronidazole í gáttina' },
                    { display: 'Metronidazole + spectracillin', output: 'Ráðlegg sýklalyf. Set metronidazole og spectracillin í gáttina' },
                    { display: 'Ciprofloxacin', output: 'Ráðlegg sýklalyf. Set ciprofloxacin í gáttina' }
                    
                ]
            },
            {
                display: 'Verkjalyf',
                subOptions: [
                    { display: 'Verkjalyf', output: 'Ráðlegg verkjalyf' },
                    { display: 'Paracetamol + Ibuprofen', output: 'Ráðlegg paracetamol og ibuprofen saman' },
                    { display: 'Paracetamol', output: 'Ráðlegg paracetamol' },
                    { display: 'Ibuprofen', output: 'Ráðlegg ibuprofen' },
                    { display: 'Parkódín', output: 'Set parkódín í gáttina. Upplýsi um aukaverkanir og ávanabindandi hættu. Notar sparlega' }
                ]
            },
            {
                display: 'Sérfræðingur',
                subOptions: [
                    { display: 'Meltingarlækni', output: 'Ráðlegg mat meltingarlæknis' },
                    { display: 'Tilvísun', output: 'Sendi tilvísun' }
                ]
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Hægðalyf', 'Gyllinæðarlyf'],
        options: [
            {
                display: 'Hægðalyf',
                subOptions: [
                    { display: 'Movicol 4v', output: 'Set movicol í gáttina. Ráðlegg 4v kúr' },
                    { display: 'Magnesia', output: 'Set magnesia í gáttina' },
                    { display: 'Sorbitol', output: 'Reynum sorbitol við hægðatregðu' }
                    
                ]
            },
            {
                display: 'Gyllinæðarlyf',
                subOptions: [
                    { display: 'Doloproct', output: 'Set doloproct í gáttina' },
                    { display: 'Xyloproct', output: 'Set xyloproct í gáttina' }
                ]
            }
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
                    { display: 'TS kvið', output: 'Ráðlegg TS af kvið' },
                    { display: 'Ómskoðun LGB', output: 'Ráðlegg ómskoðun LGB. Sendi beiðni' }
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
const SymptomsStodkerfi = [
    {
        name: '',
        type: 'options',
        display: ['Bakverkir', 'Öxlaverkir'],
        options: [
            { display: 'Bakverkir', output: 'Bakverkir' },
            { display: 'Öxlaverkir', output: 'Öxlaverkir' }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Hnéverkir', 'Úlnliðsverkir'],
        options: [
            { display: 'Hnéverkir', output: 'Hnéverkir' },
            { display: 'Úlnliðsverkir', output: 'Úlnliðsverkir' }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Hálsverkir', 'Mjaðmaverkir'],
        options: [
            { display: 'Hálsverkir', output: 'Hálsverkir' },
            { display: 'Mjaðmaverkir', output: 'Mjaðmaverkir' }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Vöðvaverkir', 'Liðverkir'],
        options: [
            { display: 'Vöðvaverkir', output: 'Vöðvaverkir' },
            { display: 'Liðverkir', output: 'Liðverkir' }
        ]
    }
];
const ExamsStodkerfi = [
    {
        name: '',
        type: 'options',
        display: ['Skoðun á baki', 'Skoðun á öxl'],
        options: [
            { display: 'Skoðun á baki', output: 'Skoðun á baki sýnir' },
            { display: 'Skoðun á öxl', output: 'Skoðun á öxl sýnir' }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Skoðun á hné', 'Skoðun á úlnlið'],
        options: [
            { display: 'Skoðun á hné', output: 'Skoðun á hné sýnir' },
            { display: 'Skoðun á úlnlið', output: 'Skoðun á úlnlið sýnir' }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Skoðun á hálsi', 'Skoðun á mjöðm'],
        options: [
            { display: 'Skoðun á hálsi', output: 'Skoðun á hálsi sýnir' },
            { display: 'Skoðun á mjöðm', output: 'Skoðun á mjöðm sýnir' }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Skoðun á vöðvum', 'Skoðun á liðum'],
        options: [
            { display: 'Skoðun á vöðvum', output: 'Skoðun á vöðvum sýnir' },
            { display: 'Skoðun á liðum', output: 'Skoðun á liðum sýnir' }
        ]
    }
];
const PlanStodkerfi = [
    {
        name: '',
        type: 'options',
        display: ['Ráðleggingar', 'Verkjalyf', 'Bólgueyðandi lyf', 'Líkamsþjálfun', 'Tilvísun'],
        options: [
            { display: 'Ráðleggingar', output: 'Veita ráðleggingar um hvíld og aðstoð' },
            {
                display: 'Verkjalyf',
                subOptions: [
                    { display: 'Paracetamol', output: 'Ávísun á Paracetamol' },
                    { display: 'Íbúprófen', output: 'Ávísun á Íbúprófen' },
                    { display: 'Kódein', output: 'Ávísun á Kódein' }
                ]
            },
            { display: 'Bólgueyðandi lyf', output: 'Ávísun á bólgueyðandi lyf' },
            {
                display: 'Líkamsþjálfun',
                subOptions: [
                    { display: 'Þjálfunaræfingar', output: 'Ráðlegg þjálfunaræfingar' },
                    { display: 'Sjúkraþjálfun', output: 'Vísa til sjúkraþjálfara' }
                ]
            },
            {
                display: 'Tilvísun',
                subOptions: [
                    { display: 'Röntgenmynd', output: 'Panta röntgenmynd' },
                    { display: 'MTR', output: 'Panta MTR' },
                    { display: 'Ortopedi', output: 'Vísa til ortopeda' }
                ]
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Eftirfylgd', 'Frekar rannsóknir'],
        options: [
            { display: 'Eftirfylgd', output: 'Panta eftirfylgdartíma' },
            { display: 'Frekar rannsóknir', output: 'Íhuga frekari rannsóknir ef einkenni versna' }
        ]
    }
];
const SymptomsHud = [
    {
        name: '',
        type: 'options',
        display: ['Sýking', 'Staðsetning'],
        options: [
            {
                display: 'Grunur um sýkingu',
                subOptions: [
                    {
                        display: 'Andlit',
                        output: 'Grunur um sýkingu í andlit'
                    },
                    {
                        display: 'Háls',
                        output: 'Grunur um sýkingu í háls'
                    },
                    {
                        display: 'Búk',
                        output: 'Grunur um sýkingu í búk'
                    },
                    {
                        display: 'Upphandlegg',
                        subOptions: [
                            { display: 'Hægra megin', output: 'Grunur um sýkingu í hægra upphandlegg' },
                            { display: 'Vinstra megin', output: 'Grunur um sýkingu í vinstra upphandlegg' }
                        ],
                        cancelText: 'Grunur um sýkingu í upphandlegg'
                    },
                    {
                        display: 'Framhandlegg',
                        subOptions: [
                            { display: 'Hægra megin', output: 'Grunur um sýkingu í hægra framhandlegg' },
                            { display: 'Vinstra megin', output: 'Grunur um sýkingu í vinstra framhandlegg' }
                        ],
                        cancelText: 'Grunur um sýkingu í framhandlegg'
                    },
                    {
                        display: 'Hendi',
                        subOptions: [
                            { display: 'Hægra megin', output: 'Grunur um sýkingu í hægri hendi' },
                            { display: 'Vinstra megin', output: 'Grunur um sýkingu í vinstri hendi' }
                        ],
                        cancelText: 'Grunur um sýkingu í hendi'
                    },
                    {
                        display: 'Fingur',
                        subOptions: [
                            { display: 'Hægri fingur 1', output: 'Grunur um sýkingu í fingur 1 hægra megin' },
                            { display: 'Hægri fingur 2', output: 'Grunur um sýkingu í fingur 2 hægra megin' },
                            { display: 'Hægri fingur 3', output: 'Grunur um sýkingu í fingur 3 hægra megin' },
                            { display: 'Hægri fingur 4', output: 'Grunur um sýkingu í fingur 4 hægra megin' },
                            { display: 'Hægri fingur 5', output: 'Grunur um sýkingu í fingur 5 hægra megin' },
                            { display: 'Vinstri fingur 1', output: 'Grunur um sýkingu í fingur 1 vinstra megin' },
                            { display: 'Vinstri fingur 2', output: 'Grunur um sýkingu í fingur 2 vinstra megin' },
                            { display: 'Vinstri fingur 3', output: 'Grunur um sýkingu í fingur 3 vinstra megin' },
                            { display: 'Vinstri fingur 4', output: 'Grunur um sýkingu í fingur 4 vinstra megin' },
                            { display: 'Vinstri fingur 5', output: 'Grunur um sýkingu í fingur 5 vinstra megin' }
                        ],
                        cancelText: 'Grunur um sýkingu í fingri'
                    },
                    {
                        display: 'Læri',
                        subOptions: [
                            { display: 'Hægra megin', output: 'Grunur um sýkingu í hægra læri' },
                            { display: 'Vinstra megin', output: 'Grunur um sýkingu í vinstra læri' }
                        ],
                        cancelText: 'Grunur um sýkingu í læri'
                    },
                    {
                        display: 'Fótlegg',
                        subOptions: [
                            { display: 'Hægra megin', output: 'Grunur um sýkingu í hægra fótlegg' },
                            { display: 'Vinstra megin', output: 'Grunur um sýkingu í vinstra fótlegg' }
                        ],
                        cancelText: 'Grunur um sýkingu í fótlegg'
                    },
                    {
                        display: 'Fót',
                        subOptions: [
                            { display: 'Hægra megin', output: 'Grunur um sýkingu í hægri fót' },
                            { display: 'Vinstra megin', output: 'Grunur um sýkingu í vinstri fót' }
                        ],
                        cancelText: 'Grunur um sýkingu í fót'
                    },
                    {
                        display: 'Tá',
                        subOptions: [
                            { display: 'Hægri tá 1', output: 'Grunur um sýkingu í tá 1 hægra megin' },
                            { display: 'Hægri tá 2', output: 'Grunur um sýkingu í tá 2 hægra megin' },
                            { display: 'Hægri tá 3', output: 'Grunur um sýkingu í tá 3 hægra megin' },
                            { display: 'Hægri tá 4', output: 'Grunur um sýkingu í tá 4 hægra megin' },
                            { display: 'Hægri tá 5', output: 'Grunur um sýkingu í tá 5 hægra megin' },
                            { display: 'Vinstri tá 1', output: 'Grunur um sýkingu í tá 1 vinstra megin' },
                            { display: 'Vinstri tá 2', output: 'Grunur um sýkingu í tá 2 vinstra megin' },
                            { display: 'Vinstri tá 3', output: 'Grunur um sýkingu í tá 3 vinstra megin' },
                            { display: 'Vinstri tá 4', output: 'Grunur um sýkingu í tá 4 vinstra megin' },
                            { display: 'Vinstri tá 5', output: 'Grunur um sýkingu í tá 5 vinstra megin' }
                        ],
                        cancelText: 'Grunur um sýkingu í tá'
                    }
                ],
                cancelText: 'Grunur um sýkingu'
            },
            {
                display: 'Staðsetning',
                subOptions: [
                    { display: 'Innanvert', output: 'Innanvert' },
                    { display: 'Utanvert', output: 'Utanvert' },
                    { display: 'Distalt', output: 'Distalt' },
                    { display: 'Proximalt', output: 'Proximalt' },
                    { display: 'Dreift', output: 'Dreift' }
                ],
                cancelText: ''
            }
            
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Sýking', 'Útbrot', 'Kláði'],
        options: [
            {
                display: 'Sýking',
                subOptions: [
                    { display: 'Fingri', output: 'Grunur um sýkingu í fingri' },
                    { display: 'Hendi', output: 'Blautur hósti' },
                    { display: 'Tá', output: 'Þurr hósti' }
                ],
                cancelText: ''
            },
            { display: 'Útbrot', output: 'Útbrot' },
            { display: 'Kláði', output: 'Kláði' }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Útbrot', 'Kláði'],
        options: [
            { display: 'Útbrot', output: 'Útbrot' },
            { display: 'Kláði', output: 'Kláði' }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Sársauki', 'Roði'],
        options: [
            { display: 'Sársauki', output: 'Sársauki' },
            { display: 'Roði', output: 'Roði' }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Bólga', 'Þurrkur'],
        options: [
            { display: 'Bólga', output: 'Bólga' },
            { display: 'Þurrkur', output: 'Þurrkur' }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Breytingar á húðlit', 'Sár'],
        options: [
            { display: 'Breytingar á húðlit', output: 'Breytingar á húðlit' },
            { display: 'Sár', output: 'Sár' }
        ]
    }
];
const ExamsHud = [
    {
        name: '',
        type: 'options',
        display: ['Skoðun á húð', 'Þreifing á húð'],
        options: [
            { display: 'Skoðun á húð', output: 'Skoðun á húð sýnir' },
            { display: 'Þreifing á húð', output: 'Þreifing á húð sýnir' }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Biopsia', 'Skoðun á nöglum'],
        options: [
            { display: 'Biopsia', output: 'Biopsia pantað' },
            { display: 'Skoðun á nöglum', output: 'Skoðun á nöglum sýnir' }
        ]
    }
];
const PlanHud = [
    {
        name: '',
        type: 'options',
        display: ['Ráðleggingar', 'Lyf', 'Tilvísun'],
        options: [
            { display: 'Ráðleggingar', output: 'Veita ráðleggingar um húðmeðferð' },
            {
                display: 'Lyf',
                subOptions: [
                    { display: 'Sterakrem', output: 'Ávísun á sterakrem' },
                    { display: 'Sýklalyf', output: 'Ávísun á sýklalyf' },
                    { display: 'Andhistamín', output: 'Ávísun á andhistamín' }
                ]
            },
            {
                display: 'Tilvísun',
                subOptions: [
                    { display: 'Húðsjúkdómalæknir', output: 'Vísa til húðsjúkdómalæknis' },
                    { display: 'Sérfræðingur', output: 'Vísa til sérfræðings' }
                ]
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Eftirfylgd', 'Frekar rannsóknir'],
        options: [
            { display: 'Eftirfylgd', output: 'Panta eftirfylgdartíma' },
            { display: 'Frekar rannsóknir', output: 'Íhuga frekari rannsóknir ef einkenni versna' }
        ]
    }
];
const SymptomsGed = [
    {
        name: '',
        type: 'options',
        display: ['Þunglyndi', 'Kvíði'],
        options: [
            { display: 'Þunglyndi', output: 'Þunglyndi' },
            { display: 'Kvíði', output: 'Kvíði' }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Svefnleysi', 'Pirringur'],
        options: [
            { display: 'Svefnleysi', output: 'Svefnleysi' },
            { display: 'Pirringur', output: 'Pirringur' }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Ofsakvíði', 'Sjálfsvígshugsanir'],
        options: [
            { display: 'Ofsakvíði', output: 'Ofsakvíði' },
            { display: 'Sjálfsvígshugsanir', output: 'Sjálfsvígshugsanir' }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Minnisleysi', 'Ranghugmyndir'],
        options: [
            { display: 'Minnisleysi', output: 'Minnisleysi' },
            { display: 'Ranghugmyndir', output: 'Ranghugmyndir' }
        ]
    }
];
const ExamsGed = [
    {
        name: '',
        type: 'options',
        display: ['Mat á geðheilsu', 'Geðskoðun'],
        options: [
            { display: 'Mat á geðheilsu', output: 'Mat á geðheilsu sýnir' },
            { display: 'Geðskoðun', output: 'Geðskoðun sýnir' }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Sjálfsvígsmat', 'Áhættuþættir'],
        options: [
            { display: 'Sjálfsvígsmat', output: 'Sjálfsvígsmat framkvæmt' },
            { display: 'Áhættuþættir', output: 'Áhættuþættir greindir' }
        ]
    }
];
const PlanGed = [
    {
        name: '',
        type: 'options',
        display: ['Ráðleggingar', 'Lyf', 'Sálfræðimeðferð', 'Tilvísun'],
        options: [
            { display: 'Ráðleggingar', output: 'Veita ráðleggingar um geðheilsu' },
            {
                display: 'Lyf',
                subOptions: [
                    { display: 'Þunglyndislyf', output: 'Ávísun á þunglyndislyf' },
                    { display: 'Kvíðastillandi lyf', output: 'Ávísun á kvíðastillandi lyf' },
                    { display: 'Svefnlyf', output: 'Ávísun á svefnlyf' }
                ]
            },
            { display: 'Sálfræðimeðferð', output: 'Vísa í sálfræðimeðferð' },
            {
                display: 'Tilvísun',
                subOptions: [
                    { display: 'Geðlæknir', output: 'Vísa til geðlæknis' },
                    { display: 'Sérfræðingur', output: 'Vísa til sérfræðings' }
                ]
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Eftirfylgd', 'Frekar mat'],
        options: [
            { display: 'Eftirfylgd', output: 'Panta eftirfylgdartíma' },
            { display: 'Frekar mat', output: 'Íhuga frekari mat ef einkenni versna' }
        ]
    }
];
const SymptomsTauga = [
    {
        name: '',
        type: 'options',
        display: ['Höfuðverkur', 'Svimi'],
        options: [
            { display: 'Höfuðverkur', output: 'Höfuðverkur' },
            { display: 'Svimi', output: 'Svimi' }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Minnisleysi', 'Stjórnleysi í útlimum'],
        options: [
            { display: 'Minnisleysi', output: 'Minnisleysi' },
            { display: 'Stjórnleysi í útlimum', output: 'Stjórnleysi í útlimum' }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Dofi', 'Krampar'],
        options: [
            { display: 'Dofi', output: 'Dofi' },
            { display: 'Krampar', output: 'Krampar' }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Taltruflanir', 'Sjóntruflanir'],
        options: [
            { display: 'Taltruflanir', output: 'Taltruflanir' },
            { display: 'Sjóntruflanir', output: 'Sjóntruflanir' }
        ]
    }
];
const ExamsTauga = [
    {
        name: '',
        type: 'options',
        display: ['Taugaskoðun', 'Heilarit'],
        options: [
            { display: 'Taugaskoðun', output: 'Taugaskoðun sýnir' },
            { display: 'Heilarit', output: 'Heilarit pantað' }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Tölvusneiðmynd', 'Magnetic Resonance Imaging (MRI)'],
        options: [
            { display: 'Tölvusneiðmynd', output: 'Tölvusneiðmynd af heila pantað' },
            { display: 'Magnetic Resonance Imaging (MRI)', output: 'MRI af heila pantað' }
        ]
    }
];
const PlanTauga = [
    {
        name: '',
        type: 'options',
        display: ['Ráðleggingar', 'Lyf', 'Tilvísun'],
        options: [
            { display: 'Ráðleggingar', output: 'Veita ráðleggingar um taugasjúkdóm' },
            {
                display: 'Lyf',
                subOptions: [
                    { display: 'Taugaverkjalækkandi lyf', output: 'Ávísun á taugaverkjalækkandi lyf' },
                    { display: 'Krampastillandi lyf', output: 'Ávísun á krampastillandi lyf' }
                ]
            },
            {
                display: 'Tilvísun',
                subOptions: [
                    { display: 'Taugasérfræðingur', output: 'Vísa til taugasérfræðings' },
                    { display: 'Sérfræðingur', output: 'Vísa til sérfræðings' }
                ]
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Eftirfylgd', 'Frekar rannsóknir'],
        options: [
            { display: 'Eftirfylgd', output: 'Panta eftirfylgdartíma' },
            { display: 'Frekar rannsóknir', output: 'Íhuga frekari rannsóknir ef einkenni versna' }
        ]
    }
];
const SymptomsInnkirtla = [
    {
        name: '',
        type: 'options',
        display: ['Þreyta', 'Þyngdarbreytingar'],
        options: [
            { display: 'Þreyta', output: 'Þreyta' },
            { display: 'Þyngdarbreytingar', output: 'Þyngdarbreytingar' }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Sviti', 'Þorsti'],
        options: [
            { display: 'Sviti', output: 'Sviti' },
            { display: 'Þorsti', output: 'Þorsti' }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Hárlos', 'Húðþurrkur'],
        options: [
            { display: 'Hárlos', output: 'Hárlos' },
            { display: 'Húðþurrkur', output: 'Húðþurrkur' }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Skjálfti', 'Þunglyndi'],
        options: [
            { display: 'Skjálfti', output: 'Skjálfti' },
            { display: 'Þunglyndi', output: 'Þunglyndi' }
        ]
    }
];
const ExamsInnkirtla = [
    {
        name: '',
        type: 'options',
        display: ['Blóðprufa', 'Hormonamæling'],
        options: [
            { display: 'Blóðprufa', output: 'Blóðprufa pantað' },
            { display: 'Hormonamæling', output: 'Hormonamæling pantað' }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Sykurmæling', 'Þvagprufa'],
        options: [
            { display: 'Sykurmæling', output: 'Sykurmæling pantað' },
            { display: 'Þvagprufa', output: 'Þvagprufa pantað' }
        ]
    }
];
const PlanInnkirtla = [
    {
        name: '',
        type: 'options',
        display: ['Ráðleggingar', 'Lyf', 'Tilvísun'],
        options: [
            { display: 'Ráðleggingar', output: 'Veita ráðleggingar um innkirtlasjúkdóm' },
            {
                display: 'Lyf',
                subOptions: [
                    { display: 'Insúlín', output: 'Ávísun á insúlín' },
                    { display: 'Skjaldkirtilslyf', output: 'Ávísun á skjaldkirtilslyf' }
                ]
            },
            {
                display: 'Tilvísun',
                subOptions: [
                    { display: 'Innkirtlasérfræðingur', output: 'Vísa til innkirtlasérfræðings' },
                    { display: 'Sérfræðingur', output: 'Vísa til sérfræðings' }
                ]
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Eftirfylgd', 'Frekar rannsóknir'],
        options: [
            { display: 'Eftirfylgd', output: 'Panta eftirfylgdartíma' },
            { display: 'Frekar rannsóknir', output: 'Íhuga frekari rannsóknir ef einkenni versna' }
        ]
    }
];
const SymptomsAlcoholism = [
    {
        name: '',
        type: 'options',
        display: ['Áfengisvandi', 'Fyrri saga'],
        options: [
            {
                display: 'Áfengisvandi',
                subOptions: [
                    { display: 'Leitar vegna áfengisvanda', output: 'Leitar vegna áfengisvanda' },
                    { display: 'Áfengisvandi', output: 'Áfengisvandi' }
                ]
            },
            { display: 'Saga um áfengisvandamál', output: 'Saga um áfengisvandamál', onRightClickOutput: 'Ekki fyrri saga um áfengisvandamál' }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Magn', 'Tímalengd', 'Síðasta drykkja'],
        options: [
            {
                display: 'Magn',
                subOptions: [
                    { display: '1-2 drykkir/dag', output: 'Drekkur 1-2 áfenga drykki á dag' },
                    { display: '3-5 drykkir/dag', output: 'Drekkur 3-5 áfenga drykki á dag' },
                    { display: '6-8 drykkir/dag', output: 'Drekkur 6-8 áfenga drykki á dag' },
                    { display: '8-10 drykkir/dag', output: 'Drekkur 8-10 áfenga drykki á dag' },
                    { display: '10-12 drykkir/dag', output: 'Drekkur 10-12 áfenga drykki á dag' },
                    { display: '>12 drykkir/dag', output: 'Drekkur meira en en 12 áfenga drykki á dag' },
                ]
            },
            {
                display: 'Tímalengd',
                subOptions: [
                    { display: '1-2 vikur', output: 'Hefur drukkið daglega í 1-2 vikur' },
                    { display: '3-4 vikur', output: 'Hefur drukkið daglega í 3-4 vikur' },
                    { display: '1-2 mánuðir', output: 'Hefur drukkið daglega í 1-2 mánuði' },
                    { display: '3-6 mánuðir', output: 'Hefur drukkið daglega í 3-6 mánuði' },
                    { display: '6+ mánuðir', output: 'Hefur drukkið daglega í yfir 6 mánuði' }
                ]
            },
            {
                display: 'Síðasta drykkja',
                subOptions: [
                    { display: 'Innan síðustu klukkustundar', output: 'Drakk síðast fyrir innan við klukkustund' },
                    { display: '1-3 klukkustundir síðan', output: 'Drakk síðast fyrir 1-3 klukkustundum' },
                    { display: '4-12 klukkustundir síðan', output: 'Drakk síðast fyrir 4-12 klukkustundum' },
                    { display: '12-24 klukkustundir síðan', output: 'Drakk síðast fyrir 12-24 klukkustundum' },
                    { display: '1-2 dagar síðan', output: 'Drakk síðast fyrir 1-2 dögum' },
                    { display: '3-4 dagar síðan', output: 'Drakk síðast fyrir 3-4 dögum' },
                    { display: '5-7 dagar síðan', output: 'Drakk síðast fyrir 5-7 dögum' },
                    { display: 'Fyrir meira en viku síðan', output: 'Drakk síðast fyrir meira en viku síðan' }
                ]
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Ógleði og uppköst', 'Skjálfti'],
        options: [
            { display: 'Ógleði og uppköst', output: 'Lýsir ógleði og uppköstum', onRightClickOutput: 'Neitar ógleði og uppköstum' },
            { display: 'Skjálfti', output: 'Lýsir auknum skjálfta', onRightClickOutput: 'Neitar skjálfta' }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Svitamyndun', 'Kvíði'],
        options: [
            { display: 'Aukin svitamyndun', output: 'Lýsir aukinni svitamyndun', onRightClickOutput: 'Neitar aukinni svitamyndun' },
            { display: 'Aukinn kvíði', output: 'Lýsir auknum kvíða', onRightClickOutput: 'Neitar auknum kvíða' }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Heyrnarofskynjanir', 'Sjóntruflanir', 'Skyntruflanir'],
        options: [
            { display: 'Heyrnarofskynjanir', output: 'Lýsir heyrnarofskynjunum', onRightClickOutput: 'Neitar heyrnarofskynjunum' },
            { display: 'Sjóntruflanir', output: 'Lýsir sjóntruflunum', onRightClickOutput: 'Neitar sjóntruflunum' },
            { display: 'Skyntruflanir', output: 'Lýsir skyntruflunum', onRightClickOutput: 'Neitar skyntruflunum' }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Höfuðverkur', 'Ruglástand'],
        options: [
            { display: 'Höfuðverkur', output: 'Kvartar yfir höfuðverk', onRightClickOutput: 'Neitar höfuðverk' },
            { display: 'Ruglástand', output: 'Lýsir ruglástandi', onRightClickOutput: 'Neitar ruglástandi' }
        ]
    }
    
];
const ExamsAlcoholism = [
    {
        name: '',
        type: 'options',
        display: ['Skjálfti', 'Svitamyndun'],
        options: [
            { display: 'Skjálfti', output: 'Skjálfti til staðar', onRightClickOutput: 'Enginn skjálfti til staðar' },
            { display: 'Svitamyndun', output: 'Aukin svitamyndun', onRightClickOutput: 'Ekki áberandi aukin svitamyndun' }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Æsingur', 'Ruglástand'],
        options: [
            { display: 'Æsingur', output: 'Skjólstæðingur er æstur', onRightClickOutput: 'Rólegur' },
            { display: 'Ruglástand', output: 'Í ruglástandi', onRightClickOutput: 'Rökréttur og skýr í framkomu' }
        ]
    }
];
const PlanAlcoholism = [
    {
        name: '',
        type: 'options',
        display: ['Áfengisfráhvörf', 'Alvarleiki'],
        options: [
            { display: 'Áfengisfráhvörf', output: 'Áfengisfráhvörf' },
            {
                display: 'Alvarleiki',
                subOptions: [
                    { display: 'Mild fráhvarfseinkenni', output: 'Mild fráhvarfseinkenni' },
                    { display: 'Miðlungs fráhvarfseinkenni', output: 'Miðlungs fráhvarfseinkenni' },
                    { display: 'Mikil fráhvarfseinkenni', output: 'Nokkuð alvarleg fráhvarfseinkenni' }
                ]
            }
        ]
    },
    {},{},{},
    {
        name: '',
        type: 'options',
        display: ['Afeitrun', 'Fráhvarfsmeðferð'],
        options: [
            {
                display: 'Afeitrun',
                subOptions: [
                    { display: 'Hættir að drekka', output: 'Ætlar að hætta allri áfengisneyslu', onRightClickOutput: '' }
                ]
            },
            {
                display: 'Fráhvarfsmeðferð',
                subOptions: [
                    { display: 'Chlordiazepoxide', output: 'Ráðlegg meðferð með Chlordiazepoxide (leiðbeiningar s.kv. uptodate). Dagur 1: 50mg á 6klst fresti (200 mg heildarskammtur). Dagur 2: 50mg á 8klst fresti (150 mg heildarskammtur). Dagur 3: 50mg á 12klst fresti (100 mg heildarskammtur). Dagur 4: 50mg fyrir svefn (50 mg heildarskammtur)', onRightClickOutput: '' },
                    { display: 'Diazepam', output: 'Ráðlegg meðferð með Diazepam (leiðbeiningar s.kv. uptodate). Dagur 1: 10 mg á 6klst fresti (40 mg heildarskammtur). Dagur 2: 10 mg á 8klst fresti (30 mg heildarskammtur). Dagur 3: 10 mg á 12klst fresti (20 mg heildarskammtur). Dagur 4: 10 mg fyrir svefn (10 mg heildarskammtur)', onRightClickOutput: '' },
                    { display: 'Gabapentin', output: 'Ráðlegg meðferð með Gabapentin (leiðbeiningar s.kv. uptodate). Dagur 1: 300 mg á 6klst fresti (1200 mg heildarskammtur). Dagur 2: 300 mg á 8klst fresti (900 mg heildarskammtur). Dagur 3: 300 mg á 12klst fresti (600 mg heildarskammtur). Dagur 4: 300 mg fyrir svefn (300 mg heildarskammtur)', onRightClickOutput: '' }
                ]
            }
        ]
    },
    {},{},{},
    {
        name: '',
        type: 'options',
        display: ['BMT'],
        options: [
            {
                display: 'BMT',
                subOptions: [
                    { display: 'Vísa á bráðamóttöku', output: 'Vísa á bráðamóttöku' },
                    { display: 'Vísa á bráðamóttöku geðsviðs', output: 'Vísa á bráðamóttöku geðsviðs' }
                ]
            }
        ]
    },
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
                    { display: 'Sjúklingur mun hafa samband við Vog', output: 'Sjúklingur mun hafa samband við Vog' },
                    { display: 'Sjúklingur er í sambandi við Vog', output: 'Sjúklingur er í sambandi við Vog' },
                    { display: 'Pantar símatíma', output: 'Pantar sér símatíma til að fá niðurstöður' },
                    { display: 'Sinni heilsugæslu', output: 'Eftirfylgd á sinni heilsugæslu' },
                    { display: 'Bóka tíma', output: 'Gef tíma í endurkomu' },
                    { display: 'Bóka símatíma', output: 'Fær símatíma til eftirfylgdar' }
                ]
            }

        ]
    }
];





const Timi = [{
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
                { display: '3v', output: '3 vikna saga' },
                { display: 'Margar', output: 'Margra vikna saga' }

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
                { display: '6m', output: '6 mán saga' },
                { display: 'Margir', output: 'Margra mánaða saga'}

            ],
            cancelText: ''
        }
        
    ]
}];
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
        } else {
            console.error('No display data for item:', item); // Debugging line
        }

        container.appendChild(row);
        console.log('Row appended:', row); // Debugging line
    });
}

function createButton(row, item, displayText, index, context) {
    const button = document.createElement('button');
    button.textContent = displayText;

    // Left click event
    button.onclick = (event) => handleButtonClick(event, item, displayText, index, button);

    // Right click event
    button.oncontextmenu = (event) => {
        event.preventDefault(); // Prevent the context menu from appearing
        handleButtonRightClick(event, item, displayText, index, button);
    };

    row.appendChild(button);
}

function handleButtonClick(event, item, displayText, index, button) {
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
                createPopup(event, selectedOption, button);
            } else if (selectedOption.output) {
                insertText(selectedOption.output);
            }
        }
    } else {
        // Default behavior for other buttons
        handleDefaultButtonClick(item, displayText, index);
    }
}

function handleButtonRightClick(event, item, displayText, index, button) {
    // Remove any existing popup
    const existingPopup = document.querySelector('.popup-modal');
    if (existingPopup) {
        existingPopup.remove();
    }

    if (item.type === 'options') {
        // Find the selected option
        const selectedOption = item.options[index];

        if (selectedOption) {
            if (selectedOption.onRightClickSubOptions) {
                createPopup(event, selectedOption, button, true);
            } else if (selectedOption.onRightClickOutput) {
                insertText(selectedOption.onRightClickOutput);
            }
        }
    } else {
        // Default behavior for other buttons
        handleDefaultButtonRightClick(item, displayText);
    }
}

function createPopup(event, selectedOption, button, isRightClick = false) {
    // Create a new popup modal
    const popup = document.createElement('div');
    popup.className = 'popup-modal';

    // Position the popup next to the button
    const rect = button.getBoundingClientRect();
    popup.style.position = 'absolute';
    popup.style.top = `${rect.bottom + window.scrollY}px`;
    popup.style.left = `${rect.left + window.scrollX}px`;
    popup.style.backgroundColor = 'white';
    popup.style.border = '1px solid #ccc';
    popup.style.padding = '10px';
    popup.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    popup.style.zIndex = '1000';

    // Function to create a button in the popup
    const createPopupButton = (popup, subOption, parentPopup) => {
        const btn = document.createElement('button');
        btn.textContent = subOption.display;
        btn.style.display = 'block';
        btn.style.margin = '5px 0';
        btn.onclick = (e) => {
            e.stopPropagation(); // Prevent closing popup on button click

            if (subOption.subOptions) {
                // Remove existing sub-popup if any
                const existingSubPopup = document.querySelector('.sub-popup-modal');
                if (existingSubPopup) {
                    existingSubPopup.remove();
                }

                // Create a new sub-popup modal for nested suboptions
                const subPopup = document.createElement('div');
                subPopup.className = 'sub-popup-modal';

                // Position the sub-popup next to the button
                const rect = btn.getBoundingClientRect();
                subPopup.style.position = 'absolute';
                subPopup.style.top = `${rect.bottom + window.scrollY}px`;
                subPopup.style.left = `${rect.right + window.scrollX}px`;
                subPopup.style.backgroundColor = 'white';
                subPopup.style.border = '1px solid #ccc';
                subPopup.style.padding = '10px';
                subPopup.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
                subPopup.style.zIndex = '1000';

                // Add nested subOptions to the sub-popup
                subOption.subOptions.forEach(nestedSubOption => {
                    createPopupButton(subPopup, nestedSubOption, subPopup);
                });

                // Append the sub-popup to the document body
                document.body.appendChild(subPopup);

                // Close sub-popup and parent popup when clicking outside
                document.addEventListener('click', (e) => {
                    if (!subPopup.contains(e.target) && e.target !== btn) {
                        subPopup.remove();
                        popup.remove(); // Close the parent popup when sub-popup is closed
                    }
                }, { once: true });

            } else if (subOption.output) {
                insertText(subOption.output);
                const existingSubPopup = document.querySelector('.sub-popup-modal');
                if (existingSubPopup) {
                    existingSubPopup.remove();
                }
                if (parentPopup) {
                    parentPopup.remove(); // Close the parent popup
                }
                popup.remove(); // Close the main popup
            }
        };
        popup.appendChild(btn);
    };

    // Add subOptions to the popup
    if (isRightClick) {
        selectedOption.onRightClickSubOptions.forEach(subOption => {
            createPopupButton(popup, subOption);
        });
    } else {
        selectedOption.subOptions.forEach(subOption => {
            createPopupButton(popup, subOption, popup);
        });
    }

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
}

function handleDefaultButtonClick(item, displayText, index) {
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

function handleDefaultButtonRightClick(item, displayText) {
    if (item.name === 'Eyru' && displayText === '-') {
        insertText('Engin einkenni frá eyrum');
    } else if (item.name === 'Eyru') {
        handleEyruRightClick(displayText);
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






let isFirstLungnahlustunClick = true; // Flag to track first click for Lungnahlustun
let inLungnahlustunContext = false; // Flag to track context of Lungnahlustun
// Mapping for special cases where grammar needs adjustment
const specialCases = {
    'obstrúktíf': 'lengda útöndun',
    // Add other special cases here if needed
};



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
 function createRiskSection(data) {
    console.log('Creating Risk Section with data:', data); // Debugging line
    const section = createSection('risk', 'Áhættuþættir Kransæðasjúkdóms');
    const container = section.querySelector('#risk');
    createButtons(container, data);
    return section;
}
function createRiskUrinarySection(data) {
    console.log('Creating Risk Section with data:', data); // Debugging line
    const section = createSection('risk', 'Áhættuþættir þvagblöðrukrabbameins');
    const container = section.querySelector('#risk');
    createButtons(container, data);
    return section;
}
function createCHADSVASCSection(data) {
    console.log('Creating CHADSVASC Section with data:', data); // Debugging line
    const section = createSection('CHADSVASC', 'CHADS-VASc');
    const container = section.querySelector('#CHADSVASC');
    createButtons(container, data);
    return section;
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
function createVottordSection(data) {
    console.log('Creating Vottord Section with data:', data); // Debugging line
    const section = createSection('vottord', 'Vottorð');
    const container = section.querySelector('#vottord');
    createButtons(container, data);
    return section;
}
function createRannsoknSection(data) {
    console.log('Creating Rannsokn Section with data:', data); // Debugging line
    const section = createSection('rannsokn', 'Rannsóknarniðurstöður');
    const container = section.querySelector('#rannsokn');
    createButtons(container, data);
    return section;
}



function loadPage(page) {
    const container = document.getElementById('content-section');
    container.innerHTML = '';

    if (page === 'Þvag') {
        const symptomsSection = createEinkenniSection(SymptomsUrinary);
        const examsSection = createSkodunSection(ExamsUrinary);
        const planSection = createPlanSection(PlanUrinary);
        const durationSection = createTimalengdSection(Duration);
        const historySection = createHistoryViralSection(HistoryUrinary);
        const habitsSection = createHabitsSection(Habits);
        const RiskUrinarySection = createRiskUrinarySection (RiskfactorsUrinary);

        const symptomsColumn = document.createElement('div');
        symptomsColumn.className = 'column';
        symptomsColumn.appendChild(symptomsSection);
        //symptomsColumn.appendChild(durationSection);
        symptomsColumn.appendChild(RiskUrinarySection);
        symptomsColumn.appendChild(historySection);
        symptomsColumn.appendChild(habitsSection);  // Add this line


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
    } else if (page === 'Áfengi') {
        const symptomsSection = createEinkenniSection(SymptomsAlcoholism);
        const examsSection = createSkodunSection(ExamsAlcoholism);
        const planSection = createPlanSection(PlanAlcoholism);

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
 
    } else if (page === 'Almennt') {
        const einkenniSection = createEinkenniSection(SymptomsViral);
        const skodunSection = createSkodunSection(ExamsViral);
        const planSection = createPlanSection(PlanViral);
        const timalengdSection = createTimalengdSection(Duration);
        const historyViralSection = createHistoryViralSection(historyViralData);
        const habitsSection = createHabitsSection(Habits);
        const vottordSection = createVottordSection(Vottord);
        const rannsoknSection = createRannsoknSection(RannsoknData); // Assuming you have RannsoknData

        const leftColumn = document.createElement('div');
        leftColumn.className = 'column';
       
        leftColumn.appendChild(vottordSection);
        leftColumn.appendChild(rannsoknSection); // Add the rannsokn section here

        const middleColumn = document.createElement('div');
        middleColumn.className = 'column';
       // middleColumn.appendChild(skodunSection);
                
        

        const rightColumn = document.createElement('div');
        rightColumn.className = 'column';
      //  rightColumn.appendChild(planSection);

        const horizontalContainer = document.createElement('div');
        horizontalContainer.className = 'horizontal-sections';
        horizontalContainer.appendChild(leftColumn);
        horizontalContainer.appendChild(middleColumn);
        horizontalContainer.appendChild(rightColumn);

        container.appendChild(horizontalContainer);
        



        
        
        
        
        
        
        
        

        

        //container.appendChild(horizontalContainer); 
    } else if (page === 'Melting') {
        const einkenniSection = createEinkenniSection(SymptomsMelting);
        const skodunSection = createSkodunSection(ExamsMelting);
        const planSection = createPlanSection(PlanMelting);

        const leftColumn = document.createElement('div');
        leftColumn.className = 'column';
        leftColumn.appendChild(einkenniSection);

        const middleColumn = document.createElement('div');
        middleColumn.className = 'column';
        middleColumn.appendChild(skodunSection);

        const rightColumn = document.createElement('div');
        rightColumn.className = 'column';
        rightColumn.appendChild(planSection);

        const horizontalContainer = document.createElement('div');
        horizontalContainer.className = 'horizontal-sections';
        horizontalContainer.appendChild(leftColumn);
        horizontalContainer.appendChild(middleColumn);
        horizontalContainer.appendChild(rightColumn);

        container.appendChild(horizontalContainer);
    } else if (page === 'Hjarta') {
        const einkenniSection = createEinkenniSection(SymptomsHeart);
        const skodunSection = createSkodunSection(ExamsHeart);
        const planSection = createPlanSection(PlanHeart);
        //const timalengdSection = createTimalengdSection(Duration);
       // const historyViralSection = createHistoryViralSection(historyViralData);
        const habitsSection = createHabitsSection(Habits);
        const RiskSection = createRiskSection(RiskFactorsHeart);
        const CHADSVASCSection = createCHADSVASCSection(CHADSVASCHeart);


        const leftColumn = document.createElement('div');
        leftColumn.className = 'column';
        leftColumn.appendChild(einkenniSection);
    //  leftColumn.appendChild(timalengdSection);
      leftColumn.appendChild(RiskSection)
      leftColumn.appendChild(CHADSVASCSection)
    //    leftColumn.appendChild(historyViralSection);
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
 
    } else if (page === 'Stodkerfi') {
        const einkenniSection = createEinkenniSection(SymptomsStodkerfi);
        const skodunSection = createSkodunSection(ExamsStodkerfi);
        const planSection = createPlanSection(PlanStodkerfi);

        const leftColumn = document.createElement('div');
        leftColumn.className = 'column';
        leftColumn.appendChild(einkenniSection);

        const middleColumn = document.createElement('div');
        middleColumn.className = 'column';
        middleColumn.appendChild(skodunSection);

        const rightColumn = document.createElement('div');
        rightColumn.className = 'column';
        rightColumn.appendChild(planSection);

        const horizontalContainer = document.createElement('div');
        horizontalContainer.className = 'horizontal-sections';
        horizontalContainer.appendChild(leftColumn);
        horizontalContainer.appendChild(middleColumn);
        horizontalContainer.appendChild(rightColumn);

        container.appendChild(horizontalContainer);
    } else if (page === 'Hud') {
        const einkenniSection = createEinkenniSection(SymptomsHud);
        const skodunSection = createSkodunSection(ExamsHud);
        const planSection = createPlanSection(PlanHud);

        const leftColumn = document.createElement('div');
        leftColumn.className = 'column';
        leftColumn.appendChild(einkenniSection);

        const middleColumn = document.createElement('div');
        middleColumn.className = 'column';
        middleColumn.appendChild(skodunSection);

        const rightColumn = document.createElement('div');
        rightColumn.className = 'column';
        rightColumn.appendChild(planSection);

        const horizontalContainer = document.createElement('div');
        horizontalContainer.className = 'horizontal-sections';
        horizontalContainer.appendChild(leftColumn);
        horizontalContainer.appendChild(middleColumn);
        horizontalContainer.appendChild(rightColumn);

        container.appendChild(horizontalContainer);
    } else if (page === 'Ged') {
        const einkenniSection = createEinkenniSection(SymptomsGed);
        const skodunSection = createSkodunSection(ExamsGed);
        const planSection = createPlanSection(PlanGed);

        const leftColumn = document.createElement('div');
        leftColumn.className = 'column';
        leftColumn.appendChild(einkenniSection);

        const middleColumn = document.createElement('div');
        middleColumn.className = 'column';
        middleColumn.appendChild(skodunSection);

        const rightColumn = document.createElement('div');
        rightColumn.className = 'column';
        rightColumn.appendChild(planSection);

        const horizontalContainer = document.createElement('div');
        horizontalContainer.className = 'horizontal-sections';
        horizontalContainer.appendChild(leftColumn);
        horizontalContainer.appendChild(middleColumn);
        horizontalContainer.appendChild(rightColumn);

        container.appendChild(horizontalContainer);
    } else if (page === 'Tauga') {
        const einkenniSection = createEinkenniSection(SymptomsTauga);
        const skodunSection = createSkodunSection(ExamsTauga);
        const planSection = createPlanSection(PlanTauga);

        const leftColumn = document.createElement('div');
        leftColumn.className = 'column';
        leftColumn.appendChild(einkenniSection);

        const middleColumn = document.createElement('div');
        middleColumn.className = 'column';
        middleColumn.appendChild(skodunSection);

        const rightColumn = document.createElement('div');
        rightColumn.className = 'column';
        rightColumn.appendChild(planSection);

        const horizontalContainer = document.createElement('div');
        horizontalContainer.className = 'horizontal-sections';
        horizontalContainer.appendChild(leftColumn);
        horizontalContainer.appendChild(middleColumn);
        horizontalContainer.appendChild(rightColumn);

        container.appendChild(horizontalContainer);
    } else if (page === 'Innkirtla') {
        const einkenniSection = createEinkenniSection(SymptomsInnkirtla);
        const skodunSection = createSkodunSection(ExamsInnkirtla);
        const planSection = createPlanSection(PlanInnkirtla);

        const leftColumn = document.createElement('div');
        leftColumn.className = 'column';
        leftColumn.appendChild(einkenniSection);

        const middleColumn = document.createElement('div');
        middleColumn.className = 'column';
        middleColumn.appendChild(skodunSection);

        const rightColumn = document.createElement('div');
        rightColumn.className = 'column';
        rightColumn.appendChild(planSection);

        const horizontalContainer = document.createElement('div');
        horizontalContainer.className = 'horizontal-sections';
        horizontalContainer.appendChild(leftColumn);
        horizontalContainer.appendChild(middleColumn);
        horizontalContainer.appendChild(rightColumn);

        container.appendChild(horizontalContainer);
    }  else {
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


function makeTitleButton(sectionId, callback) {
    const sectionTitle = document.querySelector(`#${sectionId}-section h2`);
    if (sectionTitle) {
        sectionTitle.style.cursor = 'pointer';
        sectionTitle.addEventListener('click', callback);
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