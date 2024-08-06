

// Almennt (General) / Vottorð (Certificates) / Rannsóknarniðurstöður (Study result) / Macró
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

// Viral symptoms
const SymptomsViral = [
    {
        name: '',
        type: 'options',
        display: ['Tímalengd einkenna'],
        options: [
            {
                display: 'Tímalengd einkenna',
                subOptions: [
                    { display: 'Nokkra daga', output: 'Nokkra daga saga' },
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
        display: ['Kvef', 'Hósti', 'Höfuðverkur'],
        options: [
            {
                display: 'Kvef',
                output: 'Kvef',
                onRightClickOutput: 'Ekki kvef'
            },
            {
                display: 'Hósti',
                subOptions: [
                    { display: 'NOS', output: 'Hósti' },
                    { display: 'Blautur', output: 'Blautur hósti' },
                    { display: 'Þurr', output: 'Þurr hósti' }
                ],
                onRightClickOutput: 'Ekki verið með hósta'
            },
            {
                display: 'Höfuðverkur',
                output: 'Lýsir höfuðverk',
                onRightClickOutput: 'Neitar höfuðverk'
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
        display: ['Sinuseinkenni', 'Þrýstingur', 'Verkur', 'Leiðni'],
        options: [
            {
                display: 'Sinuseinkenni',
                subOptions: [
                    { display: 'Hægra megin', output: 'Einkenni frá ennisholum hægra megin' },
                    { display: 'Vinstra megin', output: 'Einkenni frá ennisholum vinstra megin' },
                    { display: 'Beggja vegna', output: 'Einkenni frá ennisholum beggja vegna' }
                ],
                onRightClickOutput: 'Ekki þrýstingur yfir ennisholum'
            },
            { display: 'Þrýstingur', output: 'Þrýstingur', onRightClickOutput: 'Ekki þrýstingur'},
            { display: 'Verkur', output: 'Verkur', onRightClickOutput: 'Ekki verkur'},
            {
                display: 'Leiðni',
                subOptions: [
                    { display: 'Hægra eyra', output: 'Leiðir út í hægra eyra' },
                    { display: 'Vinstra eyra', output: 'Leiðir út í vinstra eyra' },
                    { display: 'Bæði', output: 'Leiðir út í bæði eyru' }
                ]
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Einkenni frá eyra', 'Óþægindi', 'Verkur', 'Hella',],
        options: [
            {
                display: 'Einkenni',
                subOptions: [
                    { display: 'Hægri', output: 'Einkenni frá hægra eyra' },
                    { display: 'Vinstri', output: 'Einkenni frá vinstra eyra' },
                    { display: 'Beggja vegna', output: 'Einkenni frá báðum eyrum' }
                ],
                onRightClickOutput: 'Ekki einkenni frá eyrum'
            },
            { display: 'Óþægindi', output: 'Óþægindi', onRightClickOutput: 'Ekki óþægindi'},
            { display: 'Verkur', output: 'Verkur', onRightClickOutput: 'Ekki verkur'},
            { display: 'Hella', output: 'Hella', onRightClickOutput: 'Ekki hella'}
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
        display: ['Ó.E. Eyrnaskoðun', 'Óvær', 'Toga', 'Eyrnabarn', 'Rör'],
        options: [
            {
                display: 'Ó.E. Eyrnaskoðun',
                output: 'Óska eftir að láta kíkja í eyru',
                onRightClickOutput: 'Vilja ekki láta kíkja í eyru'
            },
            {
                display: 'Óvær',
                output: 'Verið óvær að nóttu til',
                onRightClickOutput: 'Vær. Sefur vel á nóttunni'
            },
            {
                display: 'Toga',
                output: 'Verið að toga mikið í eyru',
                onRightClickOutput: 'Ekki verið að toga mikið í eyru'
            },
            {
                display: 'Eyrnabarn',
                output: 'Eyrnabarn. Fengið tíðar eyrnabólgur',
                onRightClickOutput: 'Ekki eyrnabarn'
            },
            {
                display: 'Rör',
                output: 'Með rör',
                onRightClickOutput: 'Ekki með rör'
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
                    { display: 'Borðar lítið', output: 'Borðar lítið' },
                    { display: 'Drukkið lítið', output: 'Drukkið lítið' },
                    { display: 'Borðað og drukkið lítið', output: 'Borðað og drukkið lítið' }
                    
                ],
                onRightClickSubOptions: [
                    { display: 'Borðar vel', output: 'Borðar vel' },
                    { display: 'Drekkur vel', output: 'Drekkur vel' },
                    { display: 'Borðar og drekkur vel', output: 'Borðar og drekkur vel' }
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
            {
                display: 'Eyrnabólga',
                subOptions: [
                    { display: 'Greining', output: 'Eyrnabólga' },
                    { display: 'Grunur', output: 'Grunur um eyrnabólgu' }
                ]
            },
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
        display: ['Bronchitis', 'Bronchiolitis', 'Versnun á COPD', 'Astmi'],
        options: [
            {
                display: 'Bronchitis',
                subOptions: [
                    { display: 'Greining', output: 'Bronchitis' },
                    { display: 'Grunur', output: 'Grunur um bronchitis' }
                ]
            },
            {
                display: 'Bronchiolitis',
                subOptions: [
                    { display: 'Greining', output: 'Bronchiolitis' },
                    { display: 'Grunur', output: 'Grunur um bronchiolitis' }
                ]
            },
            {
                display: 'Versnun á COPD',
                subOptions: [
                    { display: 'Greining', output: 'Versnun á COPD' },
                    { display: 'Grunur', output: 'Grunur um versnun á COPD' }
                ]
            },
            {
                display: 'Astmi',
                subOptions: [
                    { display: 'Greining', output: 'Astmi' },
                    { display: 'Grunur', output: 'Grunur um astma' }
                ]
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Strep', 'Mónó'],
        options: [
            {
                display: 'Strep',
                subOptions: [
                    { display: 'Greining', output: 'Strep throat' },
                    { display: 'Grunur', output: 'Grunur um strep throat' }
                ]
            },
            {
                display: 'Mónó',
                subOptions: [
                    { display: 'Greining', output: 'Mónónúkleósa' },
                    { display: 'Grunur', output: 'Grunur um mónónúkleósu' }
                ]
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Mergur', 'Otitis externa', 'Sinusitis', 'Langvarandi einkenni'],
        options: [
            {
                display: 'Mergur', output: 'Eyrnamergur', onRightClickOutput: 'Ekki eyrnamergur'
            },
            {
                display: 'Otitis externa',
                subOptions: [
                    { display: 'Greining', output: 'Otitis externa' },
                    { display: 'Grunur', output: 'Grunur um otitis externa' }
                ]
            },
            {
                display: 'Sinusitis',
                subOptions: [
                    { display: 'Greining', output: 'Sinusitis' },
                    { display: 'Grunur', output: 'Grunur um sinusitis' }
                ]
            },
            {
                display: 'Langvarandi einkenni', output: 'Einkenni langvarandi', onRightClickOutput: 'Stutt saga'                  
            }
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
                    { display: 'Stuðningsmeðferð', output: 'Stuðningsmeðferð' },
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
                    {
                        display: 'Bókar sjálfur',
                        subOptions: [
                            { display: 'Símatíma', output: 'Pantar sér símatíma til að fá niðurstöður' },
                            { display: 'Viðtalstíma', output: 'Pantar sér viðtalstíma í framhaldi' },
                            { display: 'Sinni heilsugæslu', output: 'Eftirfylgd á sinni heilsugæslu' }
                        ]
                    },
                    {
                        display: 'Gef tíma í endurkomu',
                        subOptions: [
                            { display: 'Símatíma', output: 'Fær símatíma til eftirfylgdar' },
                            { display: 'Viðtalstíma',
                                subOptions: [
                                    {display: 'NOS', output: 'Fær nýjan tíma til eftirfylgdar'},
                                    {display: 'Tvöfaldan', output: 'Fær tvöfaldan endurkomutíma'}
                                ]
                            }
                            
                        ]
                    }
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
                cancelText: '',
                onRightClickOutput: 'Ekki hraust/ur'
            },
            {
                display: 'HTN',
                output: 'Saga um háþrýsting',
                onRightClickOutput: 'Ekki saga um háþrýsting'
            },
            {
                display: 'DM',
                output: 'Saga um sykursýki',
                onRightClickOutput: 'Ekki saga um sykursýki'
            },
            {
                display: 'IHD',
                output: 'Saga um kransæðasjúkdóm',
                onRightClickOutput: 'Ekki saga um kransæðasjúkdóm'
            },
            {
                display: 'Offita',
                output: 'Saga um offitu',
                onRightClickOutput: 'Ekki saga um offitu'
            },
            {
                display: 'Áfengi',
                subOptions: [
                    { display: 'Áfengi', output: 'Saga um áfengismisnotkun' },
                    { display: 'Áfengi, meðferð, edrú', output: 'Saga um áfengismisnotkun. Farið í meðferð, nú edrú' },
                    { display: 'Áfengi, meðferð, drekkur enn', output: 'Saga um áfengismisnotkun. Farið í meðferð, drekkur enn' }
                ],
                onRightClickOutput: 'Ekki saga um áfengismisnotkun'
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Kæfisvefn', 'Nýrnasjúkdóm', 'Astmi', 'COPD'],
        options: [
            {
                display: 'Kæfisvefn',
                output: 'Saga um kæfisvefn',
                onRightClickOutput: 'Ekki saga um kæfisvefn'
            },
            {
                display: 'Nýrnasjúkdóm',
                output: 'Saga um nýrnasjúkdóm',
                onRightClickOutput: 'Ekki saga um nýrnasjúkdóm'
            },
            {
                display: 'Astmi',
                output: 'Saga um astma',
                onRightClickOutput: 'Ekki saga um astma'
            },
            {
                display: 'COPD',
                output: 'Saga um langvinna lungnateppu',
                onRightClickOutput: 'Ekki saga um langvinna lungnateppu'
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Sinusitar', 'Eyrnabólgur', 'Ólétta', 'Ónæmisbælandi'],
        options: [
            {
                display: 'Sinusitar',
                output: 'Saga um endurteknar kinnholusýkingar',
                onRightClickOutput: 'Ekki saga um endurteknar kinnholusýkingar'
            },
            {
                display: 'Eyrnabólgur',
                output: 'Saga um endurteknar eyrnabólgur',
                onRightClickOutput: 'Ekki saga um endurteknar eyrnabólgur'
            },
            {
                display: 'Ólétta',
                subOptions: [
                    { display: 'Fyrsta þriðjung', output: 'Ófrísk, á fyrsta þriðjungi meðgöngu' },
                    { display: 'Öðrum þriðjung', output: 'Ófrísk, á öðrum þriðjungi meðgöngu' },
                    { display: 'Þriðja þriðjung', output: 'Ófrísk, á þriðja þriðjungi meðgöngu' }
                ],
                onRightClickOutput: 'Ekki ófrísk'
            },
            {
                display: 'Ónæmisbælandi',
                output: 'Er á ónæmisbælandi meðferð',
                onRightClickOutput: 'Ekki á ónæmisbælandi meðferð'
            }
        ]
    }
];
// Rannsóknir = Studies (Bloodtests, imaging etc)
const RannsoknirViral = [
    {
        name: '',
        type: 'options',
        display: ['Strep', 'CRP'],
        options: [
            { display: 'Strep', output: 'Streptest jákvætt', onRightClickOutput: 'Streptest neikvætt' },
            {
                display: 'CRP',
                subOptions: [
                    {
                        display: 'CRP 0-50',
                        subOptions: Array.from({ length: 11 }, (_, i) => ({
                            display: `${i * 5}`,
                            output: `CRP: ${i * 5}`
                        }))
                    },
                    {
                        display: 'CRP 51-100',
                        subOptions: Array.from({ length: 10 }, (_, i) => ({
                            display: `${55 + i * 5}`,
                            output: `CRP: ${55 + i * 5}`
                        }))
                    },
                    {
                        display: 'CRP 101-150',
                        subOptions: Array.from({ length: 10 }, (_, i) => ({
                            display: `${105 + i * 5}`,
                            output: `CRP: ${105 + i * 5}`
                        }))
                    },
                    {
                        display: 'CRP 151-200',
                        subOptions: Array.from({ length: 10 }, (_, i) => ({
                            display: `${155 + i * 5}`,
                            output: `CRP: ${155 + i * 5}`
                        }))
                    },
                    {
                        display: 'CRP 201-250',
                        subOptions: Array.from({ length: 10 }, (_, i) => ({
                            display: `${205 + i * 5}`,
                            output: `CRP: ${205 + i * 5}`
                        }))
                    },
                    {
                        display: 'CRP 251-300',
                        subOptions: Array.from({ length: 10 }, (_, i) => ({
                            display: `${255 + i * 5}`,
                            output: `CRP: ${255 + i * 5}`
                        }))
                    }
                ],
                onRightClickOutput: 'CRP <5'
            }
        ]
    }
];
// Rauð Flögg = Red flags (Night sweats, weight loss etc)
const RaudFloggViral = [
    {
        name: '',
        type: 'options',
        display: ['Blóðhósti', 'Ljósfælni', 'Blóð í hægðum'],
        options: [
            { display: 'Þyngdartap', output: 'Lýsir þyngdartapi', onRightClickOutput: 'Ekki þyngdartap' },
            { display: 'Nætursviti', output: 'Lýsir auknum nætursvita', onRightClickOutput: 'Ekki aukinn nætursviti' },
            {
                display: 'Blóð í hægðum',
                subOptions: [
                    { display: 'Ferskt blóð á pappír', output: 'Lýsir fersku blóði á pappír' },
                    { 
                        display: 'Ferskt blóð í skál',
                        subOptions: [
                            { display: 'Lítið', output: 'Lýsir litlu magni af fersku blóði í skál' },
                            { display: 'Mikið', output: 'Lýsir miklu magni af fersku blóði í skál' }
                        ]
                    },
                    { display: 'Svartar hægðir', output: 'Verið með svartar hægðir' }
                ],
                onRightClickOutput: 'Ekki blóð í hægðum eða svartar hægðir'
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Hraðahindranir'],
        options: [
            { display: 'Hraðahindranir', output: 'Vont að fara yfir hraðahindranir', onRightClickOutput: 'Ekki vont að fara yfir hraðahindranir' }
        ]
    }
];


// Urinary symptoms
const SymptomsUrinary = [
    {
        name: '',
        type: 'options',
        display: ['Tímalengd einkenna'],
        options: [
            {
                display: 'Tímalengd einkenna',
                subOptions: [
                    { display: 'Nokkra daga', output: 'Nokkra daga saga' },
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
        display: ['Óþægindi', 'Sviði', 'Tíð þvaglát', 'Blóð', 'Lykt'],
        options: [
            { display: 'Óþægindi', output: 'Óþægindi við þvaglát', onRightClickOutput: 'Neitar óþægindum við þvaglát' },
            { display: 'Sviði', output: 'Sviði við þvaglát', onRightClickOutput: 'Ekki sviði við þvaglát' },
            { display: 'Tíð þvaglát', output: 'Tíð þvaglát', onRightClickOutput: 'Ekki tíð þvaglát' },
            { display: 'Blóð', output: 'Blóð í þvagi', onRightClickOutput: 'Ekki blóð í þvagi' },
            { display: 'Lykt', output: 'Vond lykt af þvagi', onRightClickOutput: 'Ekki fundið fyrir vondri lykt af þvagi' }
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
        display: ['Kynsjúkdómur', 'Útferð', 'Sár'],
        options: [
            {
                display: 'Kynsjúkdómur',
                subOptions: [
                    {
                        display: 'Grunur',
                        subOptions: [
                            { display: 'NOS', output: 'Grunur um kynsjúkdóm' },
                            { display: 'Klamydía', output: 'Grunur um klamydíu' },
                            { display: 'Lekandi', output: 'Grunur um lekanda' },
                            { display: 'Herpes', output: 'Grunur um herpes' }
                        ]
                    },
                    { display: 'ÓE kynsjúkdómaprófi', output: 'Óskar eftir kynsjúkdómaprófi' }
                ]
            },
            {
                display: 'Útferð',
                subOptions: [
                    { display: 'NOS', output: 'Aukin útferð' },
                    { display: 'Getnaðarlim', output: 'Útferð frá getnaðarlim' },
                    {
                        display: 'Leggöng',
                        subOptions: [
                            {
                                display: 'NOS',
                                subOptions: [
                                    { display: 'NOS', output: 'Útferð frá leggöngum' },
                                    { display: 'Glær', output: 'Útferð frá leggöngum. Glær' },
                                    { display: 'Hvítleit', output: 'Útferð frá leggöngum. Hvítleit' },
                                    { display: 'Gráleit', output: 'Útferð frá leggöngum. Gráleit' },
                                    { display: 'Grænleit', output: 'Útferð frá leggöngum. Grænleit' }
                                ]
                            },
                            {
                                display: 'Aukin',
                                subOptions: [
                                    { display: 'NOS', output: 'Útferð frá leggöngum. Aukin miðað við áður' },
                                    { display: 'Glær', output: 'Útferð frá leggöngum. Aukin miðað við áður. Glær' },
                                    { display: 'Hvítleit', output: 'Útferð frá leggöngum. Aukin miðað við áður. Hvítleit' },
                                    { display: 'Gráleit', output: 'Útferð frá leggöngum. Aukin miðað við áður. Gráleit' },
                                    { display: 'Grænleit', output: 'Útferð frá leggöngum. Aukin miðað við áður. Grænleit' }
                                ]
                            },
                            {
                                display: 'Illa lyktandi',
                                subOptions: [
                                    { display: 'NOS', output: 'Útferð frá leggöngum. Illa lyktandi' },
                                    { display: 'Glær', output: 'Útferð frá leggöngum. Illa lyktandi. Glær' },
                                    { display: 'Hvítleit', output: 'Útferð frá leggöngum. Illa lyktandi. Hvítleit' },
                                    { display: 'Gráleit', output: 'Útferð frá leggöngum. Illa lyktandi. Gráleit' },
                                    { display: 'Grænleit', output: 'Útferð frá leggöngum. Illa lyktandi. Grænleit' }
                                ]
                            }
                        ]
                    },
                    { display: 'Endaþarmur', output: 'Útferð frá endaþarmi' }
                ]
            },
            {
                display: 'Sár',
                subOptions: [
                    {
                        display: 'Penis',
                        subOptions: [
                            { display: 'NOS', output: 'Tekið eftir sári á penis' },
                            { display: 'Sársaukafullt', output: 'Tekið eftir sári á penis. Sársaukafullt' },
                            { display: 'Sársaukalítið', output: 'Tekið eftir sári á penis. Ekki mikill sársauki' },
                            { display: 'Enginn sársauki', output: 'Tekið eftir sári á penis. Enginn sársauki' }
                        ]
                    },
                    {
                        display: 'Vulva',
                        subOptions: [
                            { display: 'NOS', output: 'Tekið eftir sári á vulva' },
                            { display: 'Sársaukafullt', output: 'Tekið eftir sári á vulva. Sársaukafullt' },
                            { display: 'Sársaukalítið', output: 'Tekið eftir sári á vulva. Ekki mikill sársauki' },
                            { display: 'Enginn sársauki', output: 'Tekið eftir sári á vulva. Enginn sársauki' }
                        ]
                    },
                    {
                        display: 'Endaþarmur',
                        subOptions: [
                            { display: 'NOS', output: 'Tekið eftir sári á endaþarmi' },
                            { display: 'Sársaukafullt', output: 'Tekið eftir sári á endaþarmi. Sársaukafullt' },
                            { display: 'Sársaukalítið', output: 'Tekið eftir sári á endaþarmi. Ekki mikill sársauki' },
                            { display: 'Enginn sársauki', output: 'Tekið eftir sári á endaþarmi. Enginn sársauki' }
                        ]
                    }
                ]
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
                    { display: 'Greining', output: 'Blöðrubólga' },
                    { display: 'Grunur', output: 'Grunur um blöðrubólgu' }
                ]
            },
            {
                display: 'Pyelonephritis',
                subOptions: [
                    { display: 'Greining', output: 'Pyelonephritis' },
                    { display: 'Grunur', output: 'Grunur um pyelonephritis' }
                ]
            },
            {
                display: 'Prostatitis',
                subOptions: [
                    { display: 'Greining', output: 'Prostatitis' },
                    { display: 'Grunur', output: 'Grunur um prostatitis' }
                ]
            }
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
                    {
                        display: 'Bókar sjálfur',
                        subOptions: [
                            { display: 'Símatíma', output: 'Pantar sér símatíma til að fá niðurstöður' },
                            { display: 'Viðtalstíma', output: 'Pantar sér viðtalstíma í framhaldi' },
                            { display: 'Sinni heilsugæslu', output: 'Eftirfylgd á sinni heilsugæslu' }
                        ]
                    },
                    {
                        display: 'Gef tíma í endurkomu',
                        subOptions: [
                            { display: 'Símatíma', output: 'Fær símatíma til eftirfylgdar' },
                            { display: 'Viðtalstíma',
                                subOptions: [
                                    {display: 'NOS', output: 'Fær nýjan tíma til eftirfylgdar'},
                                    {display: 'Tvöfaldan', output: 'Fær tvöfaldan endurkomutíma'}
                                ]
                            }
                            
                        ]
                    }
                ]
            }

        ]
    }
];
const HistoryUrinary = [
    {
        name: '',
        type: 'options',
        display: ['Hraust', 'HTN', 'DM', 'IHD', 'Offita', 'Áfengi'],
        options: [
            {
                display: 'Hraust',
                subOptions: [
                    { display: 'Heilsuhraustur', output: 'Heilsuhraustur í gruninn' },
                    { display: 'Heilsuhraust', output: 'Heilsuhraust í gruninn' }
                ],
                onRightClickOutput: 'Ekki hraust'
            },
            {
                display: 'HTN',
                output: 'Saga um háþrýsting',
                onRightClickOutput: 'Ekki saga um háþrýsting'
            },
            {
                display: 'DM',
                output: 'Saga um sykursýki',
                onRightClickOutput: 'Ekki saga um sykursýki'
            },
            {
                display: 'IHD',
                output: 'Saga um kransæðasjúkdóm',
                onRightClickOutput: 'Ekki saga um kransæðasjúkdóm'
            },
            {
                display: 'Offita',
                output: 'Saga um offitu',
                onRightClickOutput: 'Ekki saga um offitu'
            },
            {
                display: 'Áfengi',
                output: 'Saga um áfengismisnotkun',
                onRightClickOutput: 'Ekki saga um áfengismisnotkun'
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Blöðrubólgur', 'Nýrnasjúkdóm', 'Nýrnasteinar', 'Prostatit'],
        options: [
            {
                display: 'Blöðrubólgur',
                output: 'Saga um endurteknar blöðrubólgur',
                onRightClickOutput: 'Ekki saga um endurteknar blöðrubólgur'
            },
            {
                display: 'Nýrnasjúkdóm',
                output: 'Saga um nýrnasjúkdóm',
                onRightClickOutput: 'Ekki saga um nýrnasjúkdóm'
            },
            {
                display: 'Nýrnasteinar',
                output: 'Saga um nýrnasteina',
                onRightClickOutput: 'Ekki saga um nýrnasteina'
            },
            {
                display: 'Prostatit',
                output: 'Saga um prostatitis áður',
                onRightClickOutput: 'Ekki saga um prostatitis'
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Pyelonephritis', 'Ólétta', 'Ónæmisbælandi'],
        options: [
            {
                display: 'Pyelonephritis',
                output: 'Saga um pyelonephritis',
                onRightClickOutput: 'Ekki saga um pyelonephritis'
            },
            {
                display: 'Ólétta',
                subOptions: [
                    { display: 'Fyrsta þriðjung', output: 'Ófrísk, á fyrsta þriðjungi meðgöngu' },
                    { display: 'Öðrum þriðjung', output: 'Ófrísk, á öðrum þriðjungi meðgöngu' },
                    { display: 'Þriðja þriðjung', output: 'Ófrísk, á þriðja þriðjungi meðgöngu' }
                ],
                onRightClickOutput: 'Ekki ófrísk'
            },
            {
                display: 'Ónæmisbælandi',
                output: 'Er á ónæmisbælandi meðferð',
                onRightClickOutput: 'Ekki á ónæmisbælandi meðferð'
            }
        ]
    }
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

// Augnvandamál (Eyeproblems)
const SymptomsEye = [
    {
        name: '',
        type: 'options',
        display: ['Tímalengd einkenna'],
        options: [
            {
                display: 'Tímalengd einkenna',
                subOptions: [
                    { display: 'Nokkra daga', output: 'Nokkra daga saga' },
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
        display: ['Einkenni frá auga', 'Augnlok'],
        options: [
            {
                display: 'Auga',
                subOptions: [
                    { display: 'Hægra', output: 'Einkenni frá hægra auga' },
                    { display: 'Vinstra', output: 'Einkenni frá vinstra auga' },
                    { display: 'Bæði', output: 'Einkenni frá báðum augum' }
                ],
                onRightClickOutput: 'Ekki einkenni frá augum'
            },
            
            {
                display: 'Augnlok',
                subOptions: [
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
                ],
                onRightClickOutput: 'Engin einkenni frá augnlokum'
            }
            
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Óþægindi', 'Roði', 'Nabbi'],
        options: [
            { display: 'Óþægindi', output: 'Óþægindi', onRightClickOutput: 'Ekki mikil óþægindi' },
            { display: 'Roði', output: 'Roði', onRightClickOutput: 'Ekki roði' },
            { display: 'Nabbi', output: 'Nabbi', onRightClickOutput: 'Ekki nabbi' }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Kláði', 'Rennsli'],
        options: [
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
        display: ['Aðskotahlutur', 'Áverki'],
        options: [
            {
                display: 'Aðskotahlutur',
                subOptions: [
                    { display: 'Grunur um aðskotahlut', output: 'Grunar að hafi fengið aðskotahlut í augað' },
                    { display: 'Aðskotahlutur', output: 'Fékk aðskotahlut í augað' },
                    { display: 'Tréflís', output: 'Fékk tréflís í augað' },
                    { display: 'Járnflís', output: 'Fékk járnflís í augað' }
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
                onRightClickOutput: 'Ekki áverkasaga'
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Nýleg veirusýking'],
        options: [
            {
                display: 'Nýleg veirusýking',
                output: 'Er að jafna sig á veirusýkingu',
                onRightClickOutput: 'Ekki nýleg veikindi'
            }
        ]
    },
    {},{},{},
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
        display: ['Conjunctival injection', 'Aðskotahlutur', 'Rispa'],
        options: [
            { display: 'Injection', output: 'Conjunctival injection', onRightClickOutput: 'Ekki roði í glæru' },
            {
                display: 'Aðskotahlutur',
                subOptions: [
                    { display: 'Í glæru', output: 'Sést aðskotahlutur í glæru' },
                    { display: 'Á hornhimnu', output: 'Sést aðskotahlutur á hornhimnu' }
                ],
                onRightClickOutput: 'Ekki að sjá aðskotahlut'
            },
            {
                display: 'Rispa',
                subOptions: [
                    {
                        display: 'Rispa',
                        subOptions: [
                            { display: 'Í glæru', output: 'Sést rispa á glæru' },
                            { display: 'Á hornhimnu', output: 'Sést rispa á hornhimnu' }
                        ],
                        onRightClickOutput: 'Ekki sést rispa eða merki um áverka'
                    },
                    {
                        display: 'Litarupptaka',
                        subOptions: [
                            { display: 'Í glæru', output: 'Sést aukin litarupptaka á glæru' },
                            { display: 'Á hornhimnu', output: 'Sést aukin litarupptaka á hornhimnu' }
                        ],
                        onRightClickOutput: 'Ekki sést rispa eða merki um áverka'
                    }
                ],
                onRightClickOutput: 'Ekki sést rispa í glæru eða á horhimnu'
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Roði á augnloki', 'Nabbi'],
        options: [
            { display: 'Roði á augnloki', output: 'Roði á augnloki', onRightClickOutput: 'Ekki áberandi roði á augnloki' },
            {
                display: 'Nabbi',
                subOptions: [
                    { display: 'Að innanverðu', output: 'Gratarnabbi sést innanvert á augnloki' },
                    { display: 'Að utanverðu', output: 'Graftarnabbi sést utanvert á augnloki' }
                ],
                onRightClickOutput: 'Ekki sjáanlegur graftarnabbi'
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
            { display: 'Blepharitis', 
                subOptions: [
                    { display: 'Greining', output: 'Blepharitis' },
                    { display: 'Grunur', output: 'Grunur um blepharitis' }
                ]
            },
            { display: 'Vogris', 
                subOptions: [
                    { display: 'Greining', output: 'Vogris' },
                    { display: 'Grunur', output: 'Grunur um vogris' }
                ]
            },
            {
                display: 'Conjunctivitis',
                subOptions: [
                    { display: 'Viral', subOptions: [
                        { display: 'Greining', output: 'Viral conjunctivitis' },
                        { display: 'Grunur', output: 'Grunur um viral conjunctivitis' }
                    ]},
                    { display: 'Bacterial', subOptions: [
                        { display: 'Greining', output: 'Bacterial conjunctivitis' },
                        { display: 'Grunur', output: 'Grunur um bacterial conjunctivitis' }
                    ]}
                ]
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Aðskotahlutur', 'Corneal abrasion'],
        options: [
            { display: 'Aðskotahlutur', 
                subOptions: [
                    { display: 'Greining', output: 'Aðskotahlutur í auga' },
                    { display: 'Grunur', output: 'Grunur um aðskotahlut í auga' }
                ]
            },
            { display: 'Corneal abrasion', 
                subOptions: [
                    { display: 'Greining', output: 'Corneal abrasion' },
                    { display: 'Grunur', output: 'Grunur um corneal abrasion' }
                ]
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Ofnæmi'],
        options: [
            {
                display: 'Ofnæmi',
                subOptions: [
                    {
                        display: 'Ofnæmi',
                        subOptions: [
                            { display: 'Greining', output: 'Ofnæmi' },
                            { display: 'Grunur', output: 'Grunur um ofnæmi' }
                        ]
                    },
                    {
                        display: 'Augu',
                        subOptions: [
                            { display: 'Greining', output: 'Ofnæmiseinkenni frá augum' },
                            { display: 'Grunur', output: 'Grunur um ofnæmiseinkenni frá augum' }
                        ]
                    },
                    {
                        display: 'Frjókornaofnæmi',
                        subOptions: [
                            { display: 'Greining', output: 'Frjókornaofnæmi' },
                            { display: 'Grunur', output: 'Grunur um frjókornaofnæmi' }
                        ]
                    },
                    {
                        display: 'Dýraofnæmi',
                        subOptions: [
                            { display: 'Greining', output: 'Dýraofnæmi' },
                            { display: 'Grunur', output: 'Grunur um dýraofnæmi' }
                        ]
                    }
                ]
            }
        ]
    },
    {},{},{},
    {
        name: '',
        type: 'options',
        display: ['Ráðleggingar', 'Sýkladropar', 'Ofnæmislyf'],
        options: [
            {
                display: 'Ráðleggingar',
                subOptions: [
                    { display: 'Almennar', output: 'Almennar ráðleggingar' },
                    { display: 'Heitir bakstrar', output: 'Ráðlegg heita bakstra' }
                ]
            },
            {
                display: 'Sýkladropar',
                subOptions: [
                    { display: 'Fucithalmic', output: 'Ráðlegg sýkladropa, set á fucithalmic' },
                    { display: 'Oftan chlora', output: 'Ráðlegg sýkladropa, set á oftan chlora' },
                    { display: 'Oftaquix', output: 'Ráðlegg sýkladropa, set á oftaquix' },
                    {
                        display: 'Ef þarf',
                        subOptions: [
                            { display: 'Fucithalmic', output: 'Set fucithalmic í gáttina, leysir út ef þarf' },
                            { display: 'Oftan chlora', output: 'Set oftan chlora í gáttina, leysir út ef þarf' },
                            { display: 'Oftaquix', output: 'Set oftaquix í gáttina, leysir út ef þarf' }
                        ],
                        cancelText: ''
                    }
                ],
                cancelText: ''
            }
            ,
            {
                display: 'Ofnæmislyf',
                subOptions: [
                    {
                        display: 'Augndropar',
                        subOptions: [
                            { display: 'Zaditen', output: 'Ráðlegg Zaditen ofnæmisaugndropa' },
                            { display: 'Livostin', output: 'Ráðlegg Livostin ofnæmisaugndropa' },
                            { display: 'Lomudal', output: 'Ráðlegg Lomudal ofnæmisaugndropa' },
                            { display: 'Opatanol', output: 'Ráðlegg Opatanol ofnæmisaugndropa' }
                        ]
                    },
                    {
                        display: 'Nefsterar',
                        subOptions: [
                            { display: 'Avamys', output: 'Ráðlegg Avamys nefstera' },
                            { display: 'Otrason', output: 'Ráðlegg Otrason nefstera' },
                            { display: 'Kalmente', output: 'Ráðlegg Kalmente nefstera' },
                            { display: 'Mometason apofri', output: 'Ráðlegg Mometason apofri nefstera' },
                            { display: 'Nasonex', output: 'Ráðlegg Nasonex nefstera' },
                            { display: 'Nasacort', output: 'Ráðlegg Nasacort nefstera' },
                            { display: 'Dymista', output: 'Ráðlegg Dymista nefstera' }
                        ]
                    },
                    {
                        display: 'Andhistamín',
                        subOptions: [
                            { display: 'Loritín', output: 'Ráðlegg Loritín ofnæmislyf' },
                            { display: 'Clarityn', output: 'Ráðlegg Clarityn ofnæmislyf' },
                            { display: 'Kestine', output: 'Ráðlegg Kestine ofnæmislyf' },
                            { display: 'Nefoxef', output: 'Ráðlegg Nefoxef ofnæmislyf' },
                            { display: 'Telfast', output: 'Ráðlegg Telfast ofnæmislyf' },
                            { display: 'Aerius', output: 'Ráðlegg Aerius ofnæmislyf' },
                            { display: 'Dasergin', output: 'Ráðlegg Dasergin ofnæmislyf' },
                            { display: 'Dasselta', output: 'Ráðlegg Dasselta ofnæmislyf' },
                            { display: 'Desloratadine', output: 'Ráðlegg Desloratadine ofnæmislyf' },
                            { display: 'Flynise', output: 'Ráðlegg Flynise ofnæmislyf' }
                        ]
                    },
                    {
                        display: 'Sterar',
                        subOptions: [
                            { display: 'Prednisolon - stuttur sterakúr', output: 'Ráðlegg 5 daga prednisolónkúr' }
                        ]
                    }
                ]
            }
        ]
    },    
    {
        name: '',
        type: 'options',
        display: ['Sting á','Fjarlægi aðskotahlut'],
        options: [
            { display: 'Sting á', output: 'Sting á graftarbólu'},
            { display: 'Fjarlægi aðskotahlut', output: 'Fjarlægi aðskotahlut'},
            
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
                    {
                        display: 'Ráðgerð endurkoma',
                        subOptions: [
                            { display: 'Eftir nokkra daga', output: 'Endurmat eftir nokkra daga' },
                            { display: 'Á morgun', output: 'Endurmat á morgun' },
                            { display: 'Eftir tvo daga', output: 'Endurmat eftir tvo daga'},
                            { display: 'Eftir þrjá daga', output: 'Endurmat eftir þrjá daga'},
                            { display: 'Eftir helgi', output: 'Endurmat eftir helgi' }
                        ]
                    }
                    
                ]
            },
            {
                display: 'Eftirfylgd',
                subOptions: [
                    {
                        display: 'Bókar sjálfur',
                        subOptions: [
                            { display: 'Símatíma', output: 'Pantar sér símatíma til að fá niðurstöður' },
                            { display: 'Viðtalstíma', output: 'Pantar sér viðtalstíma í framhaldi' },
                            { display: 'Sinni heilsugæslu', output: 'Eftirfylgd á sinni heilsugæslu' }
                        ]
                    },
                    {
                        display: 'Gef tíma í endurkomu',
                        subOptions: [
                            { display: 'Símatíma', output: 'Fær símatíma til eftirfylgdar' },
                            { display: 'Viðtalstíma',
                                subOptions: [
                                    {display: 'NOS', output: 'Fær nýjan tíma til eftirfylgdar'},
                                    {display: 'Tvöfaldan', output: 'Fær tvöfaldan endurkomutíma'}
                                ]
                            }
                            
                        ]
                    }
                ]
            }

        ]
    }
];

// Hjarta (Heart)
const SymptomsHeart = [
    {
        name: '',
        type: 'options',
        display: ['Tímalengd einkenna'],
        options: [
            {
                display: 'Tímalengd einkenna',
                subOptions: [
                    { display: 'Nokkra daga', output: 'Nokkra daga saga' },
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
        display: ['Háþrýstingur', 'Heimamælingar'],
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
                    { display: 'Kemur með', output: 'Kemur með heimamælingar' },
                    { display: 'Hækkaðar', output: 'Kemur með heimamælingar. Er oft að mælast yfir mörkum' },
                    { display: 'Eðlilegar', output: 'Kemur með heimamælingar. Flestar mælingar innan eðlilegra marka' },
                    {
                        display: 'Algeng gildi',
                        subOptions: [
                            ...Array.from({ length: 15 }, (_, i) => ({
                                display: `Systolic Low ${110 + i * 5}`,
                                subOptions: [
                                    ...Array.from({ length: 15 - i }, (_, j) => ({
                                        display: `Systolic High ${115 + i * 5 + j * 5}`,
                                        subOptions: [
                                            ...Array.from({ length: 9 }, (_, k) => ({
                                                display: `Diastolic Low ${70 + k * 5}`,
                                                subOptions: [
                                                    ...Array.from({ length: 9 - k }, (_, l) => ({
                                                        display: `Diastolic High ${75 + k * 5 + l * 5}`,
                                                        output: `Verið að mæla sig oft í kringum ${110 + i * 5}-${115 + i * 5 + j * 5}/${70 + k * 5}-${75 + k * 5 + l * 5}`
                                                    }))
                                                ]
                                            }))
                                        ]
                                    }))
                                ]
                            }))
                        ]
                    }
                ],
                onRightClickOutput: 'Engar heimamælingar'
            }
        ]
    }
    ,
    {
        name: '',
        type: 'options',
        display: ['Hjartsláttaróþægindi', 'Mæði', 'Slappleiki', 'Fótabjúg'],
        options: [
            { display: 'Hjartsláttaróþægindi', output: 'Fundið fyrir hjartsláttaróþægindum', onRightClickOutput: 'Ekki fundið fyrir hjartsláttaróþægindum'},
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
        display: ['Lasleg/ur', 'Yfirþyngd'],
        options: [
            { display: 'Lasleg/ur', output: 'Laslega útlítandi', onRightClickOutput: 'Ekki bráðveikindalegt útlit' },
            { display: 'Yfirþyngd', output: 'Er í yfirþyngd', onRightClickOutput: 'Ekki yfirþyngd' }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Hjartahlustun', 'Lungnahlustun'],
        options: [
            {
                display: 'Óhljóð',
                subOptions: [
                    {
                        display: 'Systólísk óhljóð',
                        subOptions: [
                            {
                                display: 'Óhljóð yfir ósæðarlokusvæði',
                                subOptions: [
                                    {
                                        display: 'Snemm systólískt',
                                        subOptions: [
                                            { display: 'Hávært', output: 'Heyrist hávært óhljóð í byrjun systólu yfir ósæðarlokusvæði' },
                                            { display: 'Áberandi', output: 'Heyrist áberandi óhljóð í byrjun systólu yfir ósæðarlokusvæði' },
                                            { display: 'Greinilegt', output: 'Heyrist greinilegt óhljóð í byrjun systólu yfir ósæðarlokusvæði' },
                                            { display: 'Lágvært', output: 'Heyrist lágvært óhljóð í byrjun systólu yfir ósæðarlokusvæði' }
                                        ]
                                    },
                                    {
                                        display: 'Mið systólískt',
                                        subOptions: [
                                            { display: 'Hávært', output: 'Heyrist hávært miðstystólískt óhljóð yfir ósæðarlokusvæði' },
                                            { display: 'Áberandi', output: 'Heyrist áberandi miðstystólískt óhljóð yfir ósæðarlokusvæði' },
                                            { display: 'Greinilegt', output: 'Heyrist greinilegt miðstystólískt óhljóð yfir ósæðarlokusvæði' },
                                            { display: 'Lágvært', output: 'Heyrist lágvært miðstystólískt óhljóð yfir ósæðarlokusvæði' }
                                        ]
                                    },
                                    {
                                        display: 'Lok systólu',
                                        subOptions: [
                                            { display: 'Hávært', output: 'Heyrist hávært óhljóð í lok systólu yfir ósæðarlokusvæði' },
                                            { display: 'Áberandi', output: 'Heyrist áberandi óhljóð í lok systólu yfir ósæðarlokusvæði' },
                                            { display: 'Greinilegt', output: 'Heyrist greinilegt óhljóð í lok systólu yfir ósæðarlokusvæði' },
                                            { display: 'Lágvært', output: 'Heyrist lágvært óhljóð í lok systólu yfir ósæðarlokusvæði' }
                                        ]
                                    },
                                    {
                                        display: 'Pan systólískt',
                                        subOptions: [
                                            { display: 'Hávært', output: 'Heyrist hávært pansystólískt óhljóð yfir ósæðarlokusvæði' },
                                            { display: 'Áberandi', output: 'Heyrist áberandi pansystólískt óhljóð yfir ósæðarlokusvæði' },
                                            { display: 'Greinilegt', output: 'Heyrist greinilegt pansystólískt óhljóð yfir ósæðarlokusvæði' },
                                            { display: 'Lágvært', output: 'Heyrist lágvært pansystólískt óhljóð yfir ósæðarlokusvæði' }
                                        ]
                                    }
                                ]
                            },
                            {
                                display: 'Óhljóð yfir míturlokusvæði',
                                subOptions: [
                                    {
                                        display: 'Snemm systólískt',
                                        subOptions: [
                                            { display: 'Hávært', output: 'Heyrist hávært óhljóð í byrjun systólu yfir míturlokusvæði' },
                                            { display: 'Áberandi', output: 'Heyrist áberandi óhljóð í byrjun systólu yfir míturlokusvæði' },
                                            { display: 'Greinilegt', output: 'Heyrist greinilegt óhljóð í byrjun systólu yfir míturlokusvæði' },
                                            { display: 'Lágvært', output: 'Heyrist lágvært óhljóð í byrjun systólu yfir míturlokusvæði' }
                                        ]
                                    },
                                    {
                                        display: 'Mið systólískt',
                                        subOptions: [
                                            { display: 'Hávært', output: 'Heyrist hávært miðstystólískt óhljóð yfir míturlokusvæði' },
                                            { display: 'Áberandi', output: 'Heyrist áberandi miðstystólískt óhljóð yfir míturlokusvæði' },
                                            { display: 'Greinilegt', output: 'Heyrist greinilegt miðstystólískt óhljóð yfir míturlokusvæði' },
                                            { display: 'Lágvært', output: 'Heyrist lágvært miðstystólískt óhljóð yfir míturlokusvæði' }
                                        ]
                                    },
                                    {
                                        display: 'Lok systólu',
                                        subOptions: [
                                            { display: 'Hávært', output: 'Heyrist hávært óhljóð í lok systólu yfir míturlokusvæði' },
                                            { display: 'Áberandi', output: 'Heyrist áberandi óhljóð í lok systólu yfir míturlokusvæði' },
                                            { display: 'Greinilegt', output: 'Heyrist greinilegt óhljóð í lok systólu yfir míturlokusvæði' },
                                            { display: 'Lágvært', output: 'Heyrist lágvært óhljóð í lok systólu yfir míturlokusvæði' }
                                        ]
                                    },
                                    {
                                        display: 'Pan systólískt',
                                        subOptions: [
                                            { display: 'Hávært', output: 'Heyrist hávært pansystólískt óhljóð yfir míturlokusvæði' },
                                            { display: 'Áberandi', output: 'Heyrist áberandi pansystólískt óhljóð yfir míturlokusvæði' },
                                            { display: 'Greinilegt', output: 'Heyrist greinilegt pansystólískt óhljóð yfir míturlokusvæði' },
                                            { display: 'Lágvært', output: 'Heyrist lágvært pansystólískt óhljóð yfir míturlokusvæði' }
                                        ]
                                    }
                                ]
                            },
                            {
                                display: 'Óhljóð yfir þríblöðkulokusvæði',
                                subOptions: [
                                    {
                                        display: 'Snemm systólískt',
                                        subOptions: [
                                            { display: 'Hávært', output: 'Heyrist hávært óhljóð í byrjun systólu yfir þríblöðkulokusvæði' },
                                            { display: 'Áberandi', output: 'Heyrist áberandi óhljóð í byrjun systólu yfir þríblöðkulokusvæði' },
                                            { display: 'Greinilegt', output: 'Heyrist greinilegt óhljóð í byrjun systólu yfir þríblöðkulokusvæði' },
                                            { display: 'Lágvært', output: 'Heyrist lágvært óhljóð í byrjun systólu yfir þríblöðkulokusvæði' }
                                        ]
                                    },
                                    {
                                        display: 'Mið systólískt',
                                        subOptions: [
                                            { display: 'Hávært', output: 'Heyrist hávært miðstystólískt óhljóð yfir þríblöðkulokusvæði' },
                                            { display: 'Áberandi', output: 'Heyrist áberandi miðstystólískt óhljóð yfir þríblöðkulokusvæði' },
                                            { display: 'Greinilegt', output: 'Heyrist greinilegt miðstystólískt óhljóð yfir þríblöðkulokusvæði' },
                                            { display: 'Lágvært', output: 'Heyrist lágvært miðstystólískt óhljóð yfir þríblöðkulokusvæði' }
                                        ]
                                    },
                                    {
                                        display: 'Lok systólu',
                                        subOptions: [
                                            { display: 'Hávært', output: 'Heyrist hávært óhljóð í lok systólu yfir þríblöðkulokusvæði' },
                                            { display: 'Áberandi', output: 'Heyrist áberandi óhljóð í lok systólu yfir þríblöðkulokusvæði' },
                                            { display: 'Greinilegt', output: 'Heyrist greinilegt óhljóð í lok systólu yfir þríblöðkulokusvæði' },
                                            { display: 'Lágvært', output: 'Heyrist lágvært óhljóð í lok systólu yfir þríblöðkulokusvæði' }
                                        ]
                                    },
                                    {
                                        display: 'Pan systólískt',
                                        subOptions: [
                                            { display: 'Hávært', output: 'Heyrist hávært pansystólískt óhljóð yfir þríblöðkulokusvæði' },
                                            { display: 'Áberandi', output: 'Heyrist áberandi pansystólískt óhljóð yfir þríblöðkulokusvæði' },
                                            { display: 'Greinilegt', output: 'Heyrist greinilegt pansystólískt óhljóð yfir þríblöðkulokusvæði' },
                                            { display: 'Lágvært', output: 'Heyrist lágvært pansystólískt óhljóð yfir þríblöðkulokusvæði' }
                                        ]
                                    }
                                ]
                            },
                            {
                                display: 'Óhljóð yfir lungnaslagæðarlokusvæði',
                                subOptions: [
                                    {
                                        display: 'Snemm systólískt',
                                        subOptions: [
                                            { display: 'Hávært', output: 'Heyrist hávært óhljóð í byrjun systólu yfir lungnaslagæðarlokusvæði' },
                                            { display: 'Áberandi', output: 'Heyrist áberandi óhljóð í byrjun systólu yfir lungnaslagæðarlokusvæði' },
                                            { display: 'Greinilegt', output: 'Heyrist greinilegt óhljóð í byrjun systólu yfir lungnaslagæðarlokusvæði' },
                                            { display: 'Lágvært', output: 'Heyrist lágvært óhljóð í byrjun systólu yfir lungnaslagæðarlokusvæði' }
                                        ]
                                    },
                                    {
                                        display: 'Mið systólískt',
                                        subOptions: [
                                            { display: 'Hávært', output: 'Heyrist hávært miðstystólískt óhljóð yfir lungnaslagæðarlokusvæði' },
                                            { display: 'Áberandi', output: 'Heyrist áberandi miðstystólískt óhljóð yfir lungnaslagæðarlokusvæði' },
                                            { display: 'Greinilegt', output: 'Heyrist greinilegt miðstystólískt óhljóð yfir lungnaslagæðarlokusvæði' },
                                            { display: 'Lágvært', output: 'Heyrist lágvært miðstystólískt óhljóð yfir lungnaslagæðarlokusvæði' }
                                        ]
                                    },
                                    {
                                        display: 'Lok systólu',
                                        subOptions: [
                                            { display: 'Hávært', output: 'Heyrist hávært óhljóð í lok systólu yfir lungnaslagæðarlokusvæði' },
                                            { display: 'Áberandi', output: 'Heyrist áberandi óhljóð í lok systólu yfir lungnaslagæðarlokusvæði' },
                                            { display: 'Greinilegt', output: 'Heyrist greinilegt óhljóð í lok systólu yfir lungnaslagæðarlokusvæði' },
                                            { display: 'Lágvært', output: 'Heyrist lágvært óhljóð í lok systólu yfir lungnaslagæðarlokusvæði' }
                                        ]
                                    },
                                    {
                                        display: 'Pan systólískt',
                                        subOptions: [
                                            { display: 'Hávært', output: 'Heyrist hávært pansystólískt óhljóð yfir lungnaslagæðarlokusvæði' },
                                            { display: 'Áberandi', output: 'Heyrist áberandi pansystólískt óhljóð yfir lungnaslagæðarlokusvæði' },
                                            { display: 'Greinilegt', output: 'Heyrist greinilegt pansystólískt óhljóð yfir lungnaslagæðarlokusvæði' },
                                            { display: 'Lágvært', output: 'Heyrist lágvært pansystólískt óhljóð yfir lungnaslagæðarlokusvæði' }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        display: 'Díastólísk óhljóð',
                        subOptions: [
                            {
                                display: 'Óhljóð yfir ósæðarlokusvæði',
                                subOptions: [
                                    {
                                        display: 'Snemm díastólískt',
                                        subOptions: [
                                            { display: 'Hávært', output: 'Heyrist hávært óhljóð í byrjun díastólu yfir ósæðarlokusvæði' },
                                            { display: 'Áberandi', output: 'Heyrist áberandi óhljóð í byrjun díastólu yfir ósæðarlokusvæði' },
                                            { display: 'Greinilegt', output: 'Heyrist greinilegt óhljóð í byrjun díastólu yfir ósæðarlokusvæði' },
                                            { display: 'Lágvært', output: 'Heyrist lágvært óhljóð í byrjun díastólu yfir ósæðarlokusvæði' }
                                        ]
                                    },
                                    {
                                        display: 'Mið díastólískt',
                                        subOptions: [
                                            { display: 'Hávært', output: 'Heyrist hávært miðdíastólískt óhljóð yfir ósæðarlokusvæði' },
                                            { display: 'Áberandi', output: 'Heyrist áberandi miðdíastólískt óhljóð yfir ósæðarlokusvæði' },
                                            { display: 'Greinilegt', output: 'Heyrist greinilegt miðdíastólískt óhljóð yfir ósæðarlokusvæði' },
                                            { display: 'Lágvært', output: 'Heyrist lágvært miðdíastólískt óhljóð yfir ósæðarlokusvæði' }
                                        ]
                                    },
                                    {
                                        display: 'Lok díastólu',
                                        subOptions: [
                                            { display: 'Hávært', output: 'Heyrist hávært óhljóð í lok díastólu yfir ósæðarlokusvæði' },
                                            { display: 'Áberandi', output: 'Heyrist áberandi óhljóð í lok díastólu yfir ósæðarlokusvæði' },
                                            { display: 'Greinilegt', output: 'Heyrist greinilegt óhljóð í lok díastólu yfir ósæðarlokusvæði' },
                                            { display: 'Lágvært', output: 'Heyrist lágvært óhljóð í lok díastólu yfir ósæðarlokusvæði' }
                                        ]
                                    },
                                    {
                                        display: 'Pan díastólískt',
                                        subOptions: [
                                            { display: 'Hávært', output: 'Heyrist hávært pandíastólískt óhljóð yfir ósæðarlokusvæði' },
                                            { display: 'Áberandi', output: 'Heyrist áberandi pandíastólískt óhljóð yfir ósæðarlokusvæði' },
                                            { display: 'Greinilegt', output: 'Heyrist greinilegt pandíastólískt óhljóð yfir ósæðarlokusvæði' },
                                            { display: 'Lágvært', output: 'Heyrist lágvært pandíastólískt óhljóð yfir ósæðarlokusvæði' }
                                        ]
                                    }
                                ]
                            },
                            {
                                display: 'Óhljóð yfir míturlokusvæði',
                                subOptions: [
                                    {
                                        display: 'Snemm díastólískt',
                                        subOptions: [
                                            { display: 'Hávært', output: 'Heyrist hávært óhljóð í byrjun díastólu yfir míturlokusvæði' },
                                            { display: 'Áberandi', output: 'Heyrist áberandi óhljóð í byrjun díastólu yfir míturlokusvæði' },
                                            { display: 'Greinilegt', output: 'Heyrist greinilegt óhljóð í byrjun díastólu yfir míturlokusvæði' },
                                            { display: 'Lágvært', output: 'Heyrist lágvært óhljóð í byrjun díastólu yfir míturlokusvæði' }
                                        ]
                                    },
                                    {
                                        display: 'Mið díastólískt',
                                        subOptions: [
                                            { display: 'Hávært', output: 'Heyrist hávært miðdíastólískt óhljóð yfir míturlokusvæði' },
                                            { display: 'Áberandi', output: 'Heyrist áberandi miðdíastólískt óhljóð yfir míturlokusvæði' },
                                            { display: 'Greinilegt', output: 'Heyrist greinilegt miðdíastólískt óhljóð yfir míturlokusvæði' },
                                            { display: 'Lágvært', output: 'Heyrist lágvært miðdíastólískt óhljóð yfir míturlokusvæði' }
                                        ]
                                    },
                                    {
                                        display: 'Lok díastólu',
                                        subOptions: [
                                            { display: 'Hávært', output: 'Heyrist hávært óhljóð í lok díastólu yfir míturlokusvæði' },
                                            { display: 'Áberandi', output: 'Heyrist áberandi óhljóð í lok díastólu yfir míturlokusvæði' },
                                            { display: 'Greinilegt', output: 'Heyrist greinilegt óhljóð í lok díastólu yfir míturlokusvæði' },
                                            { display: 'Lágvært', output: 'Heyrist lágvært óhljóð í lok díastólu yfir míturlokusvæði' }
                                        ]
                                    },
                                    {
                                        display: 'Pan díastólískt',
                                        subOptions: [
                                            { display: 'Hávært', output: 'Heyrist hávært pandíastólískt óhljóð yfir míturlokusvæði' },
                                            { display: 'Áberandi', output: 'Heyrist áberandi pandíastólískt óhljóð yfir míturlokusvæði' },
                                            { display: 'Greinilegt', output: 'Heyrist greinilegt pandíastólískt óhljóð yfir míturlokusvæði' },
                                            { display: 'Lágvært', output: 'Heyrist lágvært pandíastólískt óhljóð yfir míturlokusvæði' }
                                        ]
                                    }
                                ]
                            },
                            {
                                display: 'Óhljóð yfir þríblöðkulokusvæði',
                                subOptions: [
                                    {
                                        display: 'Snemm díastólískt',
                                        subOptions: [
                                            { display: 'Hávært', output: 'Heyrist hávært óhljóð í byrjun díastólu yfir þríblöðkulokusvæði' },
                                            { display: 'Áberandi', output: 'Heyrist áberandi óhljóð í byrjun díastólu yfir þríblöðkulokusvæði' },
                                            { display: 'Greinilegt', output: 'Heyrist greinilegt óhljóð í byrjun díastólu yfir þríblöðkulokusvæði' },
                                            { display: 'Lágvært', output: 'Heyrist lágvært óhljóð í byrjun díastólu yfir þríblöðkulokusvæði' }
                                        ]
                                    },
                                    {
                                        display: 'Mið díastólískt',
                                        subOptions: [
                                            { display: 'Hávært', output: 'Heyrist hávært miðdíastólískt óhljóð yfir þríblöðkulokusvæði' },
                                            { display: 'Áberandi', output: 'Heyrist áberandi miðdíastólískt óhljóð yfir þríblöðkulokusvæði' },
                                            { display: 'Greinilegt', output: 'Heyrist greinilegt miðdíastólískt óhljóð yfir þríblöðkulokusvæði' },
                                            { display: 'Lágvært', output: 'Heyrist lágvært miðdíastólískt óhljóð yfir þríblöðkulokusvæði' }
                                        ]
                                    },
                                    {
                                        display: 'Lok díastólu',
                                        subOptions: [
                                            { display: 'Hávært', output: 'Heyrist hávært óhljóð í lok díastólu yfir þríblöðkulokusvæði' },
                                            { display: 'Áberandi', output: 'Heyrist áberandi óhljóð í lok díastólu yfir þríblöðkulokusvæði' },
                                            { display: 'Greinilegt', output: 'Heyrist greinilegt óhljóð í lok díastólu yfir þríblöðkulokusvæði' },
                                            { display: 'Lágvært', output: 'Heyrist lágvært óhljóð í lok díastólu yfir þríblöðkulokusvæði' }
                                        ]
                                    },
                                    {
                                        display: 'Pan díastólískt',
                                        subOptions: [
                                            { display: 'Hávært', output: 'Heyrist hávært pandíastólískt óhljóð yfir þríblöðkulokusvæði' },
                                            { display: 'Áberandi', output: 'Heyrist áberandi pandíastólískt óhljóð yfir þríblöðkulokusvæði' },
                                            { display: 'Greinilegt', output: 'Heyrist greinilegt pandíastólískt óhljóð yfir þríblöðkulokusvæði' },
                                            { display: 'Lágvært', output: 'Heyrist lágvært pandíastólískt óhljóð yfir þríblöðkulokusvæði' }
                                        ]
                                    }
                                ]
                            },
                            {
                                display: 'Óhljóð yfir lungnaslagæðarlokusvæði',
                                subOptions: [
                                    {
                                        display: 'Snemm díastólískt',
                                        subOptions: [
                                            { display: 'Hávært', output: 'Heyrist hávært óhljóð í byrjun díastólu yfir lungnaslagæðarlokusvæði' },
                                            { display: 'Áberandi', output: 'Heyrist áberandi óhljóð í byrjun díastólu yfir lungnaslagæðarlokusvæði' },
                                            { display: 'Greinilegt', output: 'Heyrist greinilegt óhljóð í byrjun díastólu yfir lungnaslagæðarlokusvæði' },
                                            { display: 'Lágvært', output: 'Heyrist lágvært óhljóð í byrjun díastólu yfir lungnaslagæðarlokusvæði' }
                                        ]
                                    },
                                    {
                                        display: 'Mið díastólískt',
                                        subOptions: [
                                            { display: 'Hávært', output: 'Heyrist hávært miðdíastólískt óhljóð yfir lungnaslagæðarlokusvæði' },
                                            { display: 'Áberandi', output: 'Heyrist áberandi miðdíastólískt óhljóð yfir lungnaslagæðarlokusvæði' },
                                            { display: 'Greinilegt', output: 'Heyrist greinilegt miðdíastólískt óhljóð yfir lungnaslagæðarlokusvæði' },
                                            { display: 'Lágvært', output: 'Heyrist lágvært miðdíastólískt óhljóð yfir lungnaslagæðarlokusvæði' }
                                        ]
                                    },
                                    {
                                        display: 'Lok díastólu',
                                        subOptions: [
                                            { display: 'Hávært', output: 'Heyrist hávært óhljóð í lok díastólu yfir lungnaslagæðarlokusvæði' },
                                            { display: 'Áberandi', output: 'Heyrist áberandi óhljóð í lok díastólu yfir lungnaslagæðarlokusvæði' },
                                            { display: 'Greinilegt', output: 'Heyrist greinilegt óhljóð í lok díastólu yfir lungnaslagæðarlokusvæði' },
                                            { display: 'Lágvært', output: 'Heyrist lágvært óhljóð í lok díastólu yfir lungnaslagæðarlokusvæði' }
                                        ]
                                    },
                                    {
                                        display: 'Pan díastólískt',
                                        subOptions: [
                                            { display: 'Hávært', output: 'Heyrist hávært pandíastólískt óhljóð yfir lungnaslagæðarlokusvæði' },
                                            { display: 'Áberandi', output: 'Heyrist áberandi pandíastólískt óhljóð yfir lungnaslagæðarlokusvæði' },
                                            { display: 'Greinilegt', output: 'Heyrist greinilegt pandíastólískt óhljóð yfir lungnaslagæðarlokusvæði' },
                                            { display: 'Lágvært', output: 'Heyrist lágvært pandíastólískt óhljóð yfir lungnaslagæðarlokusvæði' }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ],
                onRightClickOutput: 'Hjartahlustun sýnir S1-S2 án auka- eða óhljóða'
            },
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
                onRightClickOutput: 'Lungnahlustun án athugasemda'
            }
            
        ]
    }
];
// Rannsóknir = Studies (Bloodtests, imaging etc)
const RannsoknirHeart = [
    {
        name: '',
        type: 'options',
        display: ['Hjartalínurit'],
        options: [
            {
                display: 'Hjartalínurit',
                subOptions: [
                    {
                        display: 'Anterior MI',
                        output: 'Hjartalínurit sýnir ST-hækkanir í V1-V4'
                    },
                    {
                        display: 'Inferior MI',
                        output: 'Hjartalínurit sýnir ST-hækkanir í II, III og aVF'
                    },
                    {
                        display: 'Lateral MI',
                        output: 'Hjartalínurit sýnir ST-hækkanir í I, aVL, V5 og V6'
                    },
                    {
                        display: 'Atrial fibrillation',
                        output: 'Hjartalínurit sýnir óreglulegan, hraðan takt, engin P-bylgja'
                    },
                    {
                        display: 'Ventricular tachycardia',
                        output: 'Hjartalínurit sýnir breiðkomplex tachycardiu'
                    },
                    {
                        display: 'Left bundle branch block',
                        output: 'Hjartalínurit sýnir breiða QRS-komplexa, ST-T breytingar'
                    },
                    {
                        display: 'Right bundle branch block',
                        output: 'Hjartalínurit sýnir breiða QRS-komplexa, M-mynstur í V1 og breiða S-bylgju í V6'
                    },
                    {
                        display: 'Supraventricular tachycardia',
                        output: 'Hjartalínurit sýnir mjósleglahraðtaktur, oft reglulegur'
                    },
                    {
                        display: 'Hyperkalemia',
                        output: 'Hjartalínurit sýnir háar T-bylgjur, breiða QRS-komplexa'
                    },
                    {
                        display: 'Hypokalemia',
                        output: 'Hjartalínurit sýnir flatar T-bylgjur, U-bylgjur'
                    }
                ],
                onRightClickOutput: 'Hjartalínurit sýnir reglulegan takt, eðlilegar P, QRS og T bylgjur. Ekki merki um ST breytingar'
            }
            
            
        ]
    }
];
const PlanHeart = [
    {
        name: '',
        type: 'options',
        display: ['Háþrýstingur', 'Brjóstverkur', 'Hjartsláttaróregla', 'Mæði'],
        options: [
            {
                display: 'Háþrýstingur',
                subOptions: [
                    { display: 'Háþrýstingur', output: 'Háþrýstingur' },
                    { display: 'Háþrýstingur + heimamælingar góðar', output: 'Háþrýstingur. Ásættanlegar heimamælingar' },
                    { display: 'Háþrýstingur + hækkaður á stofu', output: 'Háþrýstingur. Mælist of hár á stofu' }
                ],
                onRightClickOutput: 'Ekki háþrýstingur'
            },
            { 
                display: 'Brjóstverkur', 
                output: 'Brjóstverkur', 
                onRightClickOutput: 'Ekki brjóstverkur'
            },
            {
                display: 'Hjartsláttaróregla',
                subOptions: [
                    { display: 'Hjartsláttaróregla', output: 'Hjartsláttaróregla' },
                    { display: 'Gáttatif', output: 'Hjartsláttaróregla. Gáttatif' },
                    { display: 'Gáttaflökt', output: 'Hjartsláttaróregla. Gáttaflökt' },
                    { display: 'Ventricular tachycardia', output: 'Hjartsláttaróregla. Ventricular tachycardia' }
                ],
                onRightClickOutput: 'Ekki hjartsláttaróregla'
            },
            { 
                display: 'Mæði', 
                output: 'Mæði', 
                onRightClickOutput: 'Ekki mæði'
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Syncope', 'Orthopnea', 'Fótabjúgur'],
        options: [
            {
                display: 'Syncope',
                subOptions: [
                    { display: 'Cardiac syncope', output: 'Grunur um cardiac syncope' },
                    { display: 'Vasovagal syncope', output: 'Grunur um vasovagal syncope' }
                ],
                onRightClickOutput: 'Ekki syncope'
            },
            { 
                display: 'Orthopnea', 
                output: 'Orthopnea', 
                onRightClickOutput: 'Ekki orthopnea'
            },
            {
                display: 'Fótabjúgur',
                subOptions: [
                    { display: 'Vægur fótabjúgur', output: 'Fótabjúgur. Vægur fótabjúgur' },
                    { display: 'Miðlungs fótabjúgur', output: 'Fótabjúgur. Miðlungs fótabjúgur' },
                    { display: 'Mikill fótabjúgur', output: 'Fótabjúgur. Mikill fótabjúgur' }
                ],
                onRightClickOutput: 'Enginn fótabjúgur'
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Hjartabilun', 'Aortic stenosis', 'Mitral regurgitation'],
        options: [
            { 
                display: 'Hjartabilun', 
                subOptions: [
                    {
                        display: 'Grunur um',
                        output: 'Grunur um hjartabilun'
                    },
                    {
                        display: 'Hjartabilun',
                        output: 'Hjartabilun'
                    },
                    {
                        display: 'NYHA',
                        subOptions: [
                            { display: 'NYHA I', output: 'Hjartabilun. NYHA I: Engin einkenni við venjulega áreynslu' },
                            { display: 'NYHA II', output: 'Hjartabilun. NYHA II: Væg einkenni við venjulega áreynslu' },
                            { display: 'NYHA III', output: 'Hjartabilun. NYHA III: Miðlungs einkenni við litla áreynslu' },
                            { display: 'NYHA IV', output: 'Hjartabilun. NYHA IV: Alvarleg einkenni í hvíld' }
                        ]
                    }
                ],
                onRightClickOutput: 'Ekki hjartabilun'
            },
            { 
                display: 'Aortic stenosis', 
                output: 'Aortic stenosis', 
                onRightClickOutput: 'Ekki aortic stenosis'
            },
            { 
                display: 'Mitral regurgitation', 
                output: 'Mitral regurgitation', 
                onRightClickOutput: 'Ekki mitral regurgitation'
            }
        ]
    }
    ,
    {},{},{},
    {
        name: '',
        type: 'options',
        display: ['Heimamælingar', 'Hjartalínurit', 'Þvagprufa', 'Blóðprufa'],
        options: [
            { display: 'Heimamælingar', output: 'Ráðlegg heimamælingar. Mælir sig 2-3x á dag í nokkra daga' },
            { display: 'Hjartalínurit', output: 'Fær tíma í hjartalínurit' },
            { display: 'Þvagprufa', output: 'Fær tíma í þvagprufu' },
            { display: 'Blóðprufa', output: 'Fær tíma í blóðrannsókn' }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Blóðþrýstingslyf', 'Þvagræsilyf', 'Sérfræðing'],
        options: [
            {
                display: 'Blóðþrýstingslyf',
                subOptions: [
                    {
                        display: 'Hefjum meðferð',
                        subOptions: [
                            {
                                display: 'ACE hemlar',
                                subOptions: [
                                    {
                                        display: 'Ramipril',
                                        subOptions: [
                                            { display: '2.5 mg', output: 'Hefjum meðferð með Ramipril 2.5 mg' },
                                            { display: '5 mg', output: 'Hefjum meðferð með Ramipril 5 mg' },
                                            { display: '10 mg', output: 'Hefjum meðferð með Ramipril 10 mg' }
                                        ]
                                    },
                                    {
                                        display: 'Enalapril',
                                        subOptions: [
                                            { display: '5 mg', output: 'Hefjum meðferð með Enalapril 5 mg' },
                                            { display: '10 mg', output: 'Hefjum meðferð með Enalapril 10 mg' },
                                            { display: '20 mg', output: 'Hefjum meðferð með Enalapril 20 mg' }
                                        ]
                                    }
                                ]
                            },
                            {
                                display: 'ARB hemlar',
                                subOptions: [
                                    {
                                        display: 'Losartan',
                                        subOptions: [
                                            { display: '50 mg', output: 'Hefjum meðferð með Losartan 50 mg' },
                                            { display: '100 mg', output: 'Hefjum meðferð með Losartan 100 mg' }
                                        ]
                                    },
                                    {
                                        display: 'Valsartan',
                                        subOptions: [
                                            { display: '80 mg', output: 'Hefjum meðferð með Valsartan 80 mg' },
                                            { display: '160 mg', output: 'Hefjum meðferð með Valsartan 160 mg' }
                                        ]
                                    }
                                ]
                            },
                            {
                                display: 'Þvagræsilyf',
                                subOptions: [
                                    {
                                        display: 'Hydrochlorothiazide',
                                        subOptions: [
                                            { display: '12.5 mg', output: 'Hefjum meðferð með Hydrochlorothiazide 12.5 mg' },
                                            { display: '25 mg', output: 'Hefjum meðferð með Hydrochlorothiazide 25 mg' }
                                        ]
                                    }
                                ]
                            },
                            {
                                display: 'Beta blokkari',
                                subOptions: [
                                    {
                                        display: 'Atenolol',
                                        subOptions: [
                                            { display: '25 mg', output: 'Hefjum meðferð með Atenolol 25 mg' },
                                            { display: '50 mg', output: 'Hefjum meðferð með Atenolol 50 mg' },
                                            { display: '100 mg', output: 'Hefjum meðferð með Atenolol 100 mg' }
                                        ]
                                    },
                                    {
                                        display: 'Metoprolol',
                                        subOptions: [
                                            { display: '23.75 mg', output: 'Hefjum meðferð með Metoprolol 23.75 mg' },
                                            { display: '47.5 mg', output: 'Hefjum meðferð með Metoprolol 47.5 mg' },
                                            { display: '95 mg', output: 'Hefjum meðferð með Metoprolol 95 mg' },
                                            { display: '50 mg', output: 'Hefjum meðferð með Metoprolol 50 mg' },
                                            { display: '100 mg', output: 'Hefjum meðferð með Metoprolol 100 mg' },
                                            { display: '200 mg', output: 'Hefjum meðferð með Metoprolol 200 mg' }
                                        ]
                                    }
                                ]
                            },
                            {
                                display: 'Calcium channel blockers',
                                subOptions: [
                                    {
                                        display: 'Amlodipine',
                                        subOptions: [
                                            { display: '5 mg', output: 'Hefjum meðferð með Amlodipine 5 mg' },
                                            { display: '10 mg', output: 'Hefjum meðferð með Amlodipine 10 mg' }
                                        ]
                                    },
                                    {
                                        display: 'Diltiazem',
                                        subOptions: [
                                            { display: '120 mg', output: 'Hefjum meðferð með Diltiazem 120 mg' },
                                            { display: '180 mg', output: 'Hefjum meðferð með Diltiazem 180 mg' },
                                            { display: '240 mg', output: 'Hefjum meðferð með Diltiazem 240 mg' }
                                        ]
                                    }
                                ]
                            },
                            {
                                display: 'Samsett lyfjaform',
                                subOptions: [
                                    {
                                        display: 'Losartan + Hydrochlorothiazide',
                                        subOptions: [
                                            { display: '50/12.5 mg', output: 'Hefjum meðferð með Losartan 50 mg + Hydrochlorothiazide 12.5 mg' },
                                            { display: '100/25 mg', output: 'Hefjum meðferð með Losartan 100 mg + Hydrochlorothiazide 25 mg' }
                                        ]
                                    },
                                    {
                                        display: 'Valsartan + Hydrochlorothiazide',
                                        subOptions: [
                                            { display: '80/12.5 mg', output: 'Hefjum meðferð með Valsartan 80 mg + Hydrochlorothiazide 12.5 mg' },
                                            { display: '160/25 mg', output: 'Hefjum meðferð með Valsartan 160 mg + Hydrochlorothiazide 25 mg' }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        display: 'Viðbót',
                        subOptions: [
                            {
                                display: 'ACE hemlar',
                                subOptions: [
                                    {
                                        display: 'Ramipril',
                                        subOptions: [
                                            { display: '2.5 mg', output: 'Bæta við Ramipril 2.5 mg' },
                                            { display: '5 mg', output: 'Bæta við Ramipril 5 mg' },
                                            { display: '10 mg', output: 'Bæta við Ramipril 10 mg' }
                                        ]
                                    },
                                    {
                                        display: 'Enalapril',
                                        subOptions: [
                                            { display: '5 mg', output: 'Bæta við Enalapril 5 mg' },
                                            { display: '10 mg', output: 'Bæta við Enalapril 10 mg' },
                                            { display: '20 mg', output: 'Bæta við Enalapril 20 mg' }
                                        ]
                                    }
                                ]
                            },
                            {
                                display: 'ARB hemlar',
                                subOptions: [
                                    {
                                        display: 'Losartan',
                                        subOptions: [
                                            { display: '50 mg', output: 'Bæta við Losartan 50 mg' },
                                            { display: '100 mg', output: 'Bæta við Losartan 100 mg' }
                                        ]
                                    },
                                    {
                                        display: 'Valsartan',
                                        subOptions: [
                                            { display: '80 mg', output: 'Bæta við Valsartan 80 mg' },
                                            { display: '160 mg', output: 'Bæta við Valsartan 160 mg' }
                                        ]
                                    }
                                ]
                            },
                            {
                                display: 'Þvagræsilyf',
                                subOptions: [
                                    {
                                        display: 'Hydrochlorothiazide',
                                        subOptions: [
                                            { display: '12.5 mg', output: 'Bæta við Hydrochlorothiazide 12.5 mg' },
                                            { display: '25 mg', output: 'Bæta við Hydrochlorothiazide 25 mg' }
                                        ]
                                    }
                                ]
                            },
                            {
                                display: 'Beta blokkari',
                                subOptions: [
                                    {
                                        display: 'Atenolol',
                                        subOptions: [
                                            { display: '25 mg', output: 'Bæta við Atenolol 25 mg' },
                                            { display: '50 mg', output: 'Bæta við Atenolol 50 mg' },
                                            { display: '100 mg', output: 'Bæta við Atenolol 100 mg' }
                                        ]
                                    },
                                    {
                                        display: 'Metoprolol',
                                        subOptions: [
                                            { display: '23.75 mg', output: 'Bæta við Metoprolol 23.75 mg' },
                                            { display: '47.5 mg', output: 'Bæta við Metoprolol 47.5 mg' },
                                            { display: '95 mg', output: 'Bæta við Metoprolol 95 mg' },
                                            { display: '50 mg', output: 'Bæta við Metoprolol 50 mg' },
                                            { display: '100 mg', output: 'Bæta við Metoprolol 100 mg' },
                                            { display: '200 mg', output: 'Bæta við Metoprolol 200 mg' }
                                        ]
                                    }
                                ]
                            },
                            {
                                display: 'Calcium channel blockers',
                                subOptions: [
                                    {
                                        display: 'Amlodipine',
                                        subOptions: [
                                            { display: '5 mg', output: 'Bæta við Amlodipine 5 mg' },
                                            { display: '10 mg', output: 'Bæta við Amlodipine 10 mg' }
                                        ]
                                    },
                                    {
                                        display: 'Diltiazem',
                                        subOptions: [
                                            { display: '120 mg', output: 'Bæta við Diltiazem 120 mg' },
                                            { display: '180 mg', output: 'Bæta við Diltiazem 180 mg' },
                                            { display: '240 mg', output: 'Bæta við Diltiazem 240 mg' }
                                        ]
                                    }
                                ]
                            },
                            {
                                display: 'Samsett lyfjaform',
                                subOptions: [
                                    {
                                        display: 'Losartan + Hydrochlorothiazide',
                                        subOptions: [
                                            { display: '50/12.5 mg', output: 'Bæta við Losartan 50 mg + Hydrochlorothiazide 12.5 mg' },
                                            { display: '100/25 mg', output: 'Bæta við Losartan 100 mg + Hydrochlorothiazide 25 mg' }
                                        ]
                                    },
                                    {
                                        display: 'Valsartan + Hydrochlorothiazide',
                                        subOptions: [
                                            { display: '80/12.5 mg', output: 'Bæta við Valsartan 80 mg + Hydrochlorothiazide 12.5 mg' },
                                            { display: '160/25 mg', output: 'Bæta við Valsartan 160 mg + Hydrochlorothiazide 25 mg' }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        display: 'Aukum skammt',
                        subOptions: [
                            {
                                display: 'ACE hemlar',
                                subOptions: [
                                    {
                                        display: 'Ramipril',
                                        subOptions: [
                                            { display: '2.5 mg', output: 'Aukum skammt af Ramipril í 2.5 mg' },
                                            { display: '5 mg', output: 'Aukum skammt af Ramipril í 5 mg' },
                                            { display: '10 mg', output: 'Aukum skammt af Ramipril í 10 mg' }
                                        ]
                                    },
                                    {
                                        display: 'Enalapril',
                                        subOptions: [
                                            { display: '5 mg', output: 'Aukum skammt af Enalapril í 5 mg' },
                                            { display: '10 mg', output: 'Aukum skammt af Enalapril í 10 mg' },
                                            { display: '20 mg', output: 'Aukum skammt af Enalapril í 20 mg' }
                                        ]
                                    }
                                ]
                            },
                            {
                                display: 'ARB hemlar',
                                subOptions: [
                                    {
                                        display: 'Losartan',
                                        subOptions: [
                                            { display: '50 mg', output: 'Aukum skammt af Losartan í 50 mg' },
                                            { display: '100 mg', output: 'Aukum skammt af Losartan í 100 mg' }
                                        ]
                                    },
                                    {
                                        display: 'Valsartan',
                                        subOptions: [
                                            { display: '80 mg', output: 'Aukum skammt af Valsartan í 80 mg' },
                                            { display: '160 mg', output: 'Aukum skammt af Valsartan í 160 mg' }
                                        ]
                                    }
                                ]
                            },
                            {
                                display: 'Þvagræsilyf',
                                subOptions: [
                                    {
                                        display: 'Hydrochlorothiazide',
                                        subOptions: [
                                            { display: '12.5 mg', output: 'Aukum skammt af Hydrochlorothiazide í 12.5 mg' },
                                            { display: '25 mg', output: 'Aukum skammt af Hydrochlorothiazide í 25 mg' }
                                        ]
                                    }
                                ]
                            },
                            {
                                display: 'Beta blokkari',
                                subOptions: [
                                    {
                                        display: 'Atenolol',
                                        subOptions: [
                                            { display: '25 mg', output: 'Aukum skammt af Atenolol í 25 mg' },
                                            { display: '50 mg', output: 'Aukum skammt af Atenolol í 50 mg' },
                                            { display: '100 mg', output: 'Aukum skammt af Atenolol í 100 mg' }
                                        ]
                                    },
                                    {
                                        display: 'Metoprolol',
                                        subOptions: [
                                            { display: '23.75 mg', output: 'Aukum skammt af Metoprolol í 23.75 mg' },
                                            { display: '47.5 mg', output: 'Aukum skammt af Metoprolol í 47.5 mg' },
                                            { display: '95 mg', output: 'Aukum skammt af Metoprolol í 95 mg' },
                                            { display: '50 mg', output: 'Aukum skammt af Metoprolol í 50 mg' },
                                            { display: '100 mg', output: 'Aukum skammt af Metoprolol í 100 mg' },
                                            { display: '200 mg', output: 'Aukum skammt af Metoprolol í 200 mg' }
                                        ]
                                    }
                                ]
                            },
                            {
                                display: 'Calcium channel blockers',
                                subOptions: [
                                    {
                                        display: 'Amlodipine',
                                        subOptions: [
                                            { display: '5 mg', output: 'Aukum skammt af Amlodipine í 5 mg' },
                                            { display: '10 mg', output: 'Aukum skammt af Amlodipine í 10 mg' }
                                        ]
                                    },
                                    {
                                        display: 'Diltiazem',
                                        subOptions: [
                                            { display: '120 mg', output: 'Aukum skammt af Diltiazem í 120 mg' },
                                            { display: '180 mg', output: 'Aukum skammt af Diltiazem í 180 mg' },
                                            { display: '240 mg', output: 'Aukum skammt af Diltiazem í 240 mg' }
                                        ]
                                    }
                                ]
                            },
                            {
                                display: 'Samsett lyfjaform',
                                subOptions: [
                                    {
                                        display: 'Losartan + Hydrochlorothiazide',
                                        subOptions: [
                                            { display: '50/12.5 mg', output: 'Aukum skammt af Losartan 50 mg + Hydrochlorothiazide í 12.5 mg' },
                                            { display: '100/25 mg', output: 'Aukum skammt af Losartan 100 mg + Hydrochlorothiazide í 25 mg' }
                                        ]
                                    },
                                    {
                                        display: 'Valsartan + Hydrochlorothiazide',
                                        subOptions: [
                                            { display: '80/12.5 mg', output: 'Aukum skammt af Valsartan 80 mg + Hydrochlorothiazide í 12.5 mg' },
                                            { display: '160/25 mg', output: 'Aukum skammt af Valsartan 160 mg + Hydrochlorothiazide í 25 mg' }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        display: 'Lækka skammt',
                        subOptions: [
                            {
                                display: 'ACE hemlar',
                                subOptions: [
                                    {
                                        display: 'Ramipril',
                                        subOptions: [
                                            { display: '2.5 mg', output: 'Lækka skammt af Ramipril í 2.5 mg' },
                                            { display: '5 mg', output: 'Lækka skammt af Ramipril í 5 mg' },
                                            { display: '10 mg', output: 'Lækka skammt af Ramipril í 10 mg' }
                                        ]
                                    },
                                    {
                                        display: 'Enalapril',
                                        subOptions: [
                                            { display: '5 mg', output: 'Lækka skammt af Enalapril í 5 mg' },
                                            { display: '10 mg', output: 'Lækka skammt af Enalapril í 10 mg' },
                                            { display: '20 mg', output: 'Lækka skammt af Enalapril í 20 mg' }
                                        ]
                                    }
                                ]
                            },
                            {
                                display: 'ARB hemlar',
                                subOptions: [
                                    {
                                        display: 'Losartan',
                                        subOptions: [
                                            { display: '50 mg', output: 'Lækka skammt af Losartan í 50 mg' },
                                            { display: '100 mg', output: 'Lækka skammt af Losartan í 100 mg' }
                                        ]
                                    },
                                    {
                                        display: 'Valsartan',
                                        subOptions: [
                                            { display: '80 mg', output: 'Lækka skammt af Valsartan í 80 mg' },
                                            { display: '160 mg', output: 'Lækka skammt af Valsartan í 160 mg' }
                                        ]
                                    }
                                ]
                            },
                            {
                                display: 'Þvagræsilyf',
                                subOptions: [
                                    {
                                        display: 'Hydrochlorothiazide',
                                        subOptions: [
                                            { display: '12.5 mg', output: 'Lækka skammt af Hydrochlorothiazide í 12.5 mg' },
                                            { display: '25 mg', output: 'Lækka skammt af Hydrochlorothiazide í 25 mg' }
                                        ]
                                    }
                                ]
                            },
                            {
                                display: 'Beta blokkari',
                                subOptions: [
                                    {
                                        display: 'Atenolol',
                                        subOptions: [
                                            { display: '25 mg', output: 'Lækka skammt af Atenolol í 25 mg' },
                                            { display: '50 mg', output: 'Lækka skammt af Atenolol í 50 mg' },
                                            { display: '100 mg', output: 'Lækka skammt af Atenolol í 100 mg' }
                                        ]
                                    },
                                    {
                                        display: 'Metoprolol',
                                        subOptions: [
                                            { display: '23.75 mg', output: 'Lækka skammt af Metoprolol í 23.75 mg' },
                                            { display: '47.5 mg', output: 'Lækka skammt af Metoprolol í 47.5 mg' },
                                            { display: '95 mg', output: 'Lækka skammt af Metoprolol í 95 mg' },
                                            { display: '50 mg', output: 'Lækka skammt af Metoprolol í 50 mg' },
                                            { display: '100 mg', output: 'Lækka skammt af Metoprolol í 100 mg' },
                                            { display: '200 mg', output: 'Lækka skammt af Metoprolol í 200 mg' }
                                        ]
                                    }
                                ]
                            },
                            {
                                display: 'Calcium channel blockers',
                                subOptions: [
                                    {
                                        display: 'Amlodipine',
                                        subOptions: [
                                            { display: '5 mg', output: 'Lækka skammt af Amlodipine í 5 mg' },
                                            { display: '10 mg', output: 'Lækka skammt af Amlodipine í 10 mg' }
                                        ]
                                    },
                                    {
                                        display: 'Diltiazem',
                                        subOptions: [
                                            { display: '120 mg', output: 'Lækka skammt af Diltiazem í 120 mg' },
                                            { display: '180 mg', output: 'Lækka skammt af Diltiazem í 180 mg' },
                                            { display: '240 mg', output: 'Lækka skammt af Diltiazem í 240 mg' }
                                        ]
                                    }
                                ]
                            },
                            {
                                display: 'Samsett lyfjaform',
                                subOptions: [
                                    {
                                        display: 'Losartan + Hydrochlorothiazide',
                                        subOptions: [
                                            { display: '50/12.5 mg', output: 'Lækka skammt af Losartan 50 mg + Hydrochlorothiazide í 12.5 mg' },
                                            { display: '100/25 mg', output: 'Lækka skammt af Losartan 100 mg + Hydrochlorothiazide í 25 mg' }
                                        ]
                                    },
                                    {
                                        display: 'Valsartan + Hydrochlorothiazide',
                                        subOptions: [
                                            { display: '80/12.5 mg', output: 'Lækka skammt af Valsartan 80 mg + Hydrochlorothiazide í 12.5 mg' },
                                            { display: '160/25 mg', output: 'Lækka skammt af Valsartan 160 mg + Hydrochlorothiazide í 25 mg' }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                display: 'Þvagræsilyf',
                subOptions: [
                    {
                        display: 'Hefjum meðferð',
                        subOptions: [
                            {
                                display: 'Hydrochlorothiazide',
                                subOptions: [
                                    { display: '12.5 mg', output: 'Hefjum meðferð með Hydrochlorothiazide 12.5 mg' },
                                    { display: '25 mg', output: 'Hefjum meðferð með Hydrochlorothiazide 25 mg' }
                                ]
                            },
                            {
                                display: 'Furosemide',
                                subOptions: [
                                    { display: '20 mg', output: 'Hefjum meðferð með Furosemide 20 mg' },
                                    { display: '40 mg', output: 'Hefjum meðferð með Furosemide 40 mg' },
                                    { display: '80 mg', output: 'Hefjum meðferð með Furosemide 80 mg' }
                                ]
                            },
                            {
                                display: 'Spironolactone',
                                subOptions: [
                                    { display: '25 mg', output: 'Hefjum meðferð með Spironolactone 25 mg' },
                                    { display: '50 mg', output: 'Hefjum meðferð með Spironolactone 50 mg' },
                                    { display: '100 mg', output: 'Hefjum meðferð með Spironolactone 100 mg' }
                                ]
                            }
                        ]
                    },
                    {
                        display: 'Viðbót',
                        subOptions: [
                            {
                                display: 'Hydrochlorothiazide',
                                subOptions: [
                                    { display: '12.5 mg', output: 'Bæta við Hydrochlorothiazide 12.5 mg' },
                                    { display: '25 mg', output: 'Bæta við Hydrochlorothiazide 25 mg' }
                                ]
                            },
                            {
                                display: 'Furosemide',
                                subOptions: [
                                    { display: '20 mg', output: 'Bæta við Furosemide 20 mg' },
                                    { display: '40 mg', output: 'Bæta við Furosemide 40 mg' },
                                    { display: '80 mg', output: 'Bæta við Furosemide 80 mg' }
                                ]
                            },
                            {
                                display: 'Spironolactone',
                                subOptions: [
                                    { display: '25 mg', output: 'Bæta við Spironolactone 25 mg' },
                                    { display: '50 mg', output: 'Bæta við Spironolactone 50 mg' },
                                    { display: '100 mg', output: 'Bæta við Spironolactone 100 mg' }
                                ]
                            }
                        ]
                    },
                    {
                        display: 'Aukum skammt',
                        subOptions: [
                            {
                                display: 'Hydrochlorothiazide',
                                subOptions: [
                                    { display: '12.5 mg', output: 'Aukum skammt af Hydrochlorothiazide í 12.5 mg' },
                                    { display: '25 mg', output: 'Aukum skammt af Hydrochlorothiazide í 25 mg' }
                                ]
                            },
                            {
                                display: 'Furosemide',
                                subOptions: [
                                    { display: '20 mg', output: 'Aukum skammt af Furosemide í 20 mg' },
                                    { display: '40 mg', output: 'Aukum skammt af Furosemide í 40 mg' },
                                    { display: '80 mg', output: 'Aukum skammt af Furosemide í 80 mg' }
                                ]
                            },
                            {
                                display: 'Spironolactone',
                                subOptions: [
                                    { display: '25 mg', output: 'Aukum skammt af Spironolactone í 25 mg' },
                                    { display: '50 mg', output: 'Aukum skammt af Spironolactone í 50 mg' },
                                    { display: '100 mg', output: 'Aukum skammt af Spironolactone í 100 mg' }
                                ]
                            }
                        ]
                    },
                    {
                        display: 'Lækka skammt',
                        subOptions: [
                            {
                                display: 'Hydrochlorothiazide',
                                subOptions: [
                                    { display: '12.5 mg', output: 'Lækka skammt af Hydrochlorothiazide í 12.5 mg' },
                                    { display: '25 mg', output: 'Lækka skammt af Hydrochlorothiazide í 25 mg' }
                                ]
                            },
                            {
                                display: 'Furosemide',
                                subOptions: [
                                    { display: '20 mg', output: 'Lækka skammt af Furosemide í 20 mg' },
                                    { display: '40 mg', output: 'Lækka skammt af Furosemide í 40 mg' },
                                    { display: '80 mg', output: 'Lækka skammt af Furosemide í 80 mg' }
                                ]
                            },
                            {
                                display: 'Spironolactone',
                                subOptions: [
                                    { display: '25 mg', output: 'Lækka skammt af Spironolactone í 25 mg' },
                                    { display: '50 mg', output: 'Lækka skammt af Spironolactone í 50 mg' },
                                    { display: '100 mg', output: 'Lækka skammt af Spironolactone í 100 mg' }
                                ]
                            }
                        ]
                    }
                ]
            },            
            {
                display: 'Vísa á sérfræðing',
                subOptions: [
                    { display: 'Hjarta', output: 'Ráðlegg mat hjartalæknis' }
                ]
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Myndataka', 'BMT'],
        options: [
            {
                display: 'Myndataka',
                subOptions: [
                    { display: 'RTG lungu', output: 'Ráðlegg rtg lungu' },
                    { display: 'TS kransæðar', output: 'Ráðlegg TS af kransæðum' },
                    { display: 'TS lungu (skimun vegna reykinga)', output: 'Í ljósi reykingarsögu ráðlagt að fá TS af lungum til skimunar' }
                ]
            },
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
                    {
                        display: 'Bókar sjálfur',
                        subOptions: [
                            { display: 'Símatíma', output: 'Pantar sér símatíma til að fá niðurstöður' },
                            { display: 'Viðtalstíma', output: 'Pantar sér viðtalstíma í framhaldi' },
                            { display: 'Sinni heilsugæslu', output: 'Eftirfylgd á sinni heilsugæslu' }
                        ]
                    },
                    {
                        display: 'Gef tíma í endurkomu',
                        subOptions: [
                            { display: 'Símatíma', output: 'Fær símatíma til eftirfylgdar' },
                            { display: 'Viðtalstíma',
                                subOptions: [
                                    {display: 'NOS', output: 'Fær nýjan tíma til eftirfylgdar'},
                                    {display: 'Tvöfaldan', output: 'Fær tvöfaldan endurkomutíma'}
                                ]
                            }
                            
                        ]
                    }
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
            {
                display: 'Háþrýstingur',
                subOptions: [
                    { display: 'Saga um háþrýsting', output: 'Saga um háþrýsting' },
                    { display: 'Er að greinast', output: 'Er að greinast með háþrýsting' }
                ],
                onRightClickOutput: 'Ekki saga um háþrýsting'
            },
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
            {
                display: 'Sykursýki',
                subOptions: [
                    { display: 'Saga um sykursýki', output: 'Saga um sykursýki' },
                    { display: 'Er að greinast', output: 'Er að greinast með sykursýki' }
                ],
                onRightClickOutput: 'Ekki saga um sykursýki'
            },
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
const historyHeart = [
    {
        name: '',
        type: 'options',
        display: ['Hraust/ur', 'HTN', 'DM', 'IHD', 'Offita', 'Áfengi'],
        options: [
            {
                display: 'Hraust/ur',
                subOptions: [
                    { display: 'Hraust', output: 'Hraust í gruninn' },
                    { display: 'Hraustur', output: 'Hraustur í gruninn' }
                ],
                onRightClickOutput: 'Ekki hraust/ur'
            },
            {
                display: 'HTN',
                output: 'Saga um háþrýsting',
                onRightClickOutput: 'Ekki saga um háþrýsting'
            },
            {
                display: 'DM',
                output: 'Saga um sykursýki',
                onRightClickOutput: 'Ekki saga um sykursýki'
            },
            {
                display: 'IHD',
                output: 'Saga um kransæðasjúkdóm',
                onRightClickOutput: 'Ekki saga um kransæðasjúkdóm'
            },
            {
                display: 'Offita',
                output: 'Saga um offitu',
                onRightClickOutput: 'Ekki saga um offitu'
            },
            {
                display: 'Áfengi',
                output: 'Saga um áfengismisnotkun',
                onRightClickOutput: 'Ekki saga um áfengismisnotkun'
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Hjartabilun', 'Afib', 'Hjartsláttartruflanir', 'Stroke'],
        options: [
            {
                display: 'Hjartabilun',
                output: 'Saga um hjartabilun',
                onRightClickOutput: 'Ekki saga um hjartabilun'
            },
            {
                display: 'Afib',
                output: 'Saga um gáttatif',
                onRightClickOutput: 'Ekki saga um gáttatif'
            },
            {
                display: 'Hjartsláttartruflanir',
                output: 'Saga um hjartsláttartruflanir',
                onRightClickOutput: 'Ekki saga um hjartsláttartruflanir'
            },
            {
                display: 'Stroke',
                output: 'Saga um heilablóðfall',
                onRightClickOutput: 'Ekki saga um heilablóðfall'
            },
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['MVP', 'AS', 'Pericarditis', 'Endocarditis'],
        options: [
            {
                display: 'Mitral Valve Prolapse',
                output: 'Saga um mitral lokuleka',
                onRightClickOutput: 'Ekki saga um mitral lokuleka'
            },
            {
                display: 'Aortic Stenosis',
                output: 'Saga um ósæðarþrengsli',
                onRightClickOutput: 'Ekki saga um ósæðarþrengsli'
            },
            {
                display: 'Pericarditis',
                output: 'Saga um gollurshúsbólgu',
                onRightClickOutput: 'Ekki saga um gollurshúsbólgu'
            },
            {
                display: 'Endocarditis',
                output: 'Saga um endocarditis',
                onRightClickOutput: 'Ekki saga um endocarditis'
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['PAD', 'Ónæmisbælandi'],
        options: [
            
            {
                display: 'PAD',
                output: 'Saga um útæðasjúkdóm',
                onRightClickOutput: 'Ekki saga um útæðasjúkdóm'
            },
            {
                display: 'Ónæmisbælandi',
                output: 'Er á ónæmisbælandi meðferð',
                onRightClickOutput: 'Ekki á ónæmisbælandi meðferð'
            }
        ]
    }
];


// Meltingarvandamál (GI system)
const SymptomsMelting = [
    {
        name: '',
        type: 'options',
        display: ['Tímalengd einkenna'],
        options: [
            {
                display: 'Tímalengd einkenna',
                subOptions: [
                    { display: 'Nokkra daga', output: 'Nokkra daga saga' },
                    {
                        display: 'Klst',
                        subOptions: [
                            { display: '<1 klst', output: '<1 klst saga' },
                            { display: '1 klst', output: 'U.þ.b. 1 klst saga' },
                            { display: '2 klst', output: 'U.þ.b. 2 klst saga' },
                            { display: '3 klst', output: 'U.þ.b. 3 klst saga' },
                            { display: '4 klst', output: 'U.þ.b. 4 klst saga' },
                            { display: '5 klst', output: 'U.þ.b. 5 klst saga' },
                            { display: '6 klst', output: 'U.þ.b. 6 klst saga' },
                            { display: '7 klst', output: 'U.þ.b. 7 klst saga' },
                            { display: '8 klst', output: 'U.þ.b. 8 klst saga' },
                            { display: '9 klst', output: 'U.þ.b. 9 klst saga' },
                            { display: '10 klst', output: 'U.þ.b. 10 klst saga' },
                            { display: '11 klst', output: 'U.þ.b. 11 klst saga' },
                            { display: '12 klst', output: 'U.þ.b. 12 klst saga' }
                        ],
                        cancelText: ''
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
        display: ['Einkenni frá kvið', 'Character', 'Leiðni'],
        options: [
            {
                display: 'Einkenni frá kvið',
                subOptions: [
                    {
                        display: 'NOS',
                        output: 'Einkenni frá kvið'
                    },
                    {
                        display: 'Verkur',
                        subOptions: [
                            { display: 'NOS', output: 'Einkenni frá kvið. Verkur' },
                            { display: 'Dreift', output: 'Einkenni frá kvið. Verkur. Staðsett dreift yfir öllu kviðarholi' },
                            { display: 'Epigastric', output: 'Einkenni frá kvið. Verkur. Staðsett á epigastric svæði' },
                            { display: 'Hægri efri fjórðungur', output: 'Einkenni frá kvið. Verkur. Staðsett í hægri efri fjórðungi' },
                            { display: 'Vinstri efri fjórðungur', output: 'Einkenni frá kvið. Verkur. Staðsett í vinstri efri fjórðungi' },
                            { display: 'Periumbilical', output: 'Einkenni frá kvið. Verkur. Staðsett á periumbilical svæði' },
                            { display: 'Hægri neðri fjórðungur', output: 'Einkenni frá kvið. Verkur. Staðsett í hægri neðri fjórðungi' },
                            { display: 'Vinstri neðri fjórðungur', output: 'Einkenni frá kvið. Verkur. Staðsett í vinstri neðri fjórðungi' },
                            { display: 'Suprapubic', output: 'Einkenni frá kvið. Verkur. Staðsett á suprapubic svæði' }
                        ]
                    },
                    {
                        display: 'Meltingarónot',
                        subOptions: [
                            { display: 'NOS', output: 'Einkenni frá kvið. Meltingarónot' },
                            { display: 'Dreift', output: 'Einkenni frá kvið. Meltingarónot. Staðsett dreift yfir öllu kviðarholi' },
                            { display: 'Epigastric', output: 'Einkenni frá kvið. Meltingarónot. Staðsett á epigastric svæði' },
                            { display: 'Hægri efri fjórðungur', output: 'Einkenni frá kvið. Meltingarónot. Staðsett í hægri efri fjórðungi' },
                            { display: 'Vinstri efri fjórðungur', output: 'Einkenni frá kvið. Meltingarónot. Staðsett í vinstri efri fjórðungi' },
                            { display: 'Periumbilical', output: 'Einkenni frá kvið. Meltingarónot. Staðsett á periumbilical svæði' },
                            { display: 'Hægri neðri fjórðungur', output: 'Einkenni frá kvið. Meltingarónot. Staðsett í hægri neðri fjórðungi' },
                            { display: 'Vinstri neðri fjórðungur', output: 'Einkenni frá kvið. Meltingarónot. Staðsett í vinstri neðri fjórðungi' },
                            { display: 'Suprapubic', output: 'Einkenni frá kvið. Meltingarónot. Staðsett á suprapubic svæði' }
                        ]
                    }
                ],
                onRightClickOutput: 'Ekki fundið fyrir kviðverk'
            },
            {
                display: 'Character',
                subOptions: [
                    {
                        display: 'Visceral',
                        subOptions: [
                            { display: 'NOS', output: 'Visceral verkur' },
                            { display: 'Getur illa staðsett', output: 'Visceral verkur, getur illa staðsett' }
                        ]
                    },
                    { display: 'Sómatískur', output: 'Sómatískur verkur' },
                    { display: 'Stingandi', output: 'Stingandi verkur' },
                    { display: 'Brennandi', output: 'Brennandi verkur' },
                    { display: 'Krampakenndur', output: 'Krampakenndur verkur' },
                    { display: 'Þrýstingsverkur', output: 'Þrýstingsverkur' }
                ]
            },
            {
                display: 'Leiðni',
                subOptions: [
                    { display: 'Bak', output: 'Leiðir aftur í bak' },
                    { display: 'Herðablöð', output: 'Leiðir á milli herðablaða' },
                    { display: 'Hægri öxl', output: 'Leiðir í hægri öxl' },
                    { display: 'Vinstri öxl', output: 'Leiðir í vinstri öxl' },
                    { display: 'Háls', output: 'Leiðni upp í háls' },
                    { display: 'Efri hluti kviðar', output: 'Leiðir í efri hluta kviðar' },
                    { display: 'Neðri hluti kviðar', output: 'Leiðir í neðri hluta kviðar' },
                    { display: 'Nárasvæði', output: 'Leiðir niður í nára' }
                ],
                onRightClickOutput: 'Leiðir ekki'
            }
            
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Versnar við', 'Skánar við', 'Stigun verkja'],
        options: [
            {
                display: 'Versnar við',
                subOptions: [
                    { display: 'Áreynslu', output: 'Versnar við áreynslu' },
                    { display: 'Máltíð', output: 'Versnar við að borða' },
                    { display: 'Stress', output: 'Versnar við stress' },
                    { display: 'Liggja flatur', output: 'Versnar við að liggja flatur' },
                    { display: 'Kynging', output: 'Versnar við kyngingu' },
                    { display: 'Beygja sig fram', output: 'Versnar við að beygja sig fram' },
                    { display: 'Hreyfing', output: 'Versnar við hreyfingu' }
                ],
                onRightClickOutput: 'Ekkert sem gerir verkinn verri'
            },
            {
                display: 'Skánar við',
                subOptions: [
                    { display: 'Hvíld', output: 'Skánar við hvíld' },
                    { display: 'Máltíð', output: 'Skánar við máltíð' },
                    { display: 'Hægðalosun', output: 'Skánar við hægðalosun' },
                    { display: 'Sofa á hlið', output: 'Skánar við að sofa á hlið' },
                    { display: 'Hreyfingu', output: 'Skánar við hreyfingu' }
                ],
                onRightClickOutput: 'Ekkert sem gerir verkinn betri'
            },
            {
                display: 'Stigun verkja',
                subOptions: [
                    { display: '1 af 10', output: 'Stigar verkinn 1 af 10' },
                    { display: '2 af 10', output: 'Stigar verkinn 2 af 10' },
                    { display: '3 af 10', output: 'Stigar verkinn 3 af 10' },
                    { display: '4 af 10', output: 'Stigar verkinn 4 af 10' },
                    { display: '5 af 10', output: 'Stigar verkinn 5 af 10' },
                    { display: '6 af 10', output: 'Stigar verkinn 6 af 10' },
                    { display: '7 af 10', output: 'Stigar verkinn 7 af 10' },
                    { display: '8 af 10', output: 'Stigar verkinn 8 af 10' },
                    { display: '9 af 10', output: 'Stigar verkinn 9 af 10' },
                    { display: '10 af 10', output: 'Stigar verkinn 10 af 10' }
                ]
            }
        ]
    },    
    {
        name: '',
        type: 'options',
        display: ['Hægðatregða', 'Niðurgangur'],
        options: [
            {
                display: 'Hægðatregða',
                subOptions: [
                    { display: 'Hægðatregða', output: 'Hægðatregða' },
                    { display: 'Grunur um', output: 'Grunur um hægðatregðu' },
                    { display: 'Rembingur', output: 'Hægðatregða. Rembist mikið en kemur lítið' },
                    { display: 'Grunur + rembingur + slæmt mataræði', output: 'Grunur um hægðatregða. Rembist mikið en kemur lítið. Drekkur ekki mikið vatn. Trefjaneysla mætti vera betri' }
                ],
                onRightClickOutput: 'Ekki hægðatregða'
            },
            { display: 'Niðurgangur', output: 'Niðurgangur', onRightClickOutput: 'Ekki niðurgangur' }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Ógleði', 'Uppköst', 'Uppþemba'],
        options: [
            { display: 'Ógleði', output: 'Ógleði', onRightClickOutput: 'Ekki ógleði' },
            { display: 'Uppköst', output: 'Uppköst', onRightClickOutput: 'Ekki uppköst' },
            { display: 'Uppþemba', output: 'Uppþemba', onRightClickOutput: 'Ekki uppþemba' }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Brjóstsviði', 'Lystarleysi'],
        options: [
            { display: 'Brjóstsviði', output: 'Brjóstsviði', onRightClickOutput: 'Ekki brjóstsviði' },
            { display: 'Lystarleysi', output: 'Lýsir lystarleysi', onRightClickOutput: 'Ekki lystarleysi' }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Dyschezia'],
        options: [
            { display: 'Dyschezia', output: 'Verkir við hægðalosun', onRightClickOutput: 'Ekki verkir við hægðalosun' }
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
    }
];
const ExamsMelting = [
    {
        name: '',
        type: 'options',
        display: ['Ástand sjúklings', 'Vökvaástand'],
        options: [
            {
                display: 'Ástand sjúklings',
                subOptions: [
                    { display: 'Lasleg/ur', output: 'Laslega útlítandi', onRightClickOutput: 'Ekki bráðveikindalegt útlit' },
                    {
                        display: 'Verkjar',
                        subOptions: [
                            { display: 'KK', output: 'Virðist meðtekinn af verk', onRightClickOutput: 'Ekki meðtekinn af verk' },
                            { display: 'KVK', output: 'Virðist meðtekin af verk', onRightClickOutput: 'Ekki meðtekin af verk' }
                        ]
                    }
                    
                ],
                onRightClickSubOptions: [
                    { display: 'Ekki laslegt útlit', output: 'Ekki bráðveikindalegt útlit' },
                    {
                        display: 'Ekki meðtekin/n af verk',
                        subOptions: [
                            { display: 'KK', output: 'Ekki meðtekinn af verk' },
                            { display: 'KVK', output: 'Ekki meðtekin af verk' }
                        ]
                    }
                    
                ]
            },
            {
                display: 'Vökvaástand',
                subOptions: [
                    {
                        display: 'Þurrar slímhúðir',
                        output: 'Slímhúð í munni er þurr',
                    },
                    {
                        display: 'Háræðafylling lengd',
                        output: 'Lengd háræðafylling',
                    }
                ],
                onRightClickSubOptions: [
                    {
                        display: 'Rakar slímhúðir',
                        output: 'Rakar slímhúðir'
                    },
                    {
                        display: 'Háræðafylling eðlileg',
                        output: 'Eðlileg háræðafylling'
                    }
                ]
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Kviður - útlit', 'Garnahljóð', 'Bank', 'Þreifing', 'Sleppieymsli'],
        options: [
            {
                display: 'Kviður - útlit',
                subOptions: [
                    { display: 'Þaninn', output: 'Kviður þaninn' },
                    {
                        display: 'Ör',
                        subOptions: [
                            { display: 'Ör eftir botnlangatöku', output: 'Ör eftir botnlangatöku' },
                            { display: 'Ör eftir gallblöðrutöku', output: 'Ör eftir gallblöðrutöku' },
                            { display: 'Ör eftir aðgerð á kvið', output: 'Ör eftir aðgerð á kvið' }
                        ]
                    },
                    { display: 'Panniculus', output: 'Panniculus' }
                ],
                onRightClickSubOptions: [
                    { display: 'Óþaninn', output: 'Kviður óþaninn' },
                    { display: 'Engin ör', output: 'Engin ör' },
                    { display: 'Eðlilegt holdafar', output: 'Eðlilegt holdafar' }
                ]
            },
            {
                display: 'Garnahljóð',
                subOptions: [
                    { display: 'Engin garnahljóð', output: 'Engin garnahljóð heyrast' },
                    { display: 'Lífleg garnahljóð', output: 'Heyrast lífleg garnahljóð' },
                    { display: 'Minnkuð garnahljóð', output: 'Grunur um minnkuð garnahljóð' }
                ],
                onRightClickOutput: 'Garnahljóð til staðar'
            },
            {
                display: 'Bank',
                subOptions: [
                    { display: 'Dreift', output: 'Dreifð bankeymsli' },
                    { display: 'Hægri neðri', output: 'Bankeymsli yfir hægri neðri fjórðungi' },
                    { display: 'Vinstri neðri', output: 'Bankeymsli yfir vinstra neðri fjórðungi' },
                    { display: 'Hægri efri', output: 'Bankeymsli yfir hægri efri fjórðungi' },
                    { display: 'Vinstri efri', output: 'Bankeymsli yfir vinstra efri fjórðungi' },
                    { display: 'Epigastrium', output: 'Bankeymsli yfir epigastrium' },
                    { display: 'Suprapubic svæði', output: 'Bankeymsli yfir suprapubic svæði' }
                ],
                onRightClickOutput: 'Ekki bankeymsli'
            },
            {
                display: 'Þreifing',
                subOptions: [
                    {
                        display: 'Hægri neðri',
                        subOptions: [
                            { display: 'Létt þreifing', output: 'Eymsli í hægri neðri fjórðungi við létta þreifingu' },
                            { display: 'Miðlungs þreifing', output: 'Eymsli í hægri neðri fjórðungi við miðlungs þreifingu' },
                            { display: 'Djúpa þreifingu', output: 'Eymsli í hægri neðri fjórðungi við djúpa þreifingu' }
                        ]
                    },
                    {
                        display: 'Vinstri neðri',
                        subOptions: [
                            { display: 'Létt þreifing', output: 'Eymsli í vinstri neðri fjórðungi við létta þreifingu' },
                            { display: 'Miðlungs þreifing', output: 'Eymsli í vinstri neðri fjórðungi við miðlungs þreifingu' },
                            { display: 'Djúpa þreifingu', output: 'Eymsli í vinstri neðri fjórðungi við djúpa þreifingu' }
                        ]
                    },
                    {
                        display: 'Hægri efri',
                        subOptions: [
                            { display: 'Létt þreifing', output: 'Eymsli í hægri efri fjórðungi við létta þreifingu' },
                            { display: 'Miðlungs þreifing', output: 'Eymsli í hægri efri fjórðungi við miðlungs þreifingu' },
                            { display: 'Djúpa þreifingu', output: 'Eymsli í hægri efri fjórðungi við djúpa þreifingu' }
                        ]
                    },
                    {
                        display: 'Vinstri efri',
                        subOptions: [
                            { display: 'Létt þreifing', output: 'Eymsli í vinstri efri fjórðungi við létta þreifingu' },
                            { display: 'Miðlungs þreifing', output: 'Eymsli í vinstri efri fjórðungi við miðlungs þreifingu' },
                            { display: 'Djúpa þreifingu', output: 'Eymsli í vinstri efri fjórðungi við djúpa þreifingu' }
                        ]
                    },
                    {
                        display: 'Epigastrium',
                        subOptions: [
                            { display: 'Létt þreifing', output: 'Eymsli í epigastrium við létta þreifingu' },
                            { display: 'Miðlungs þreifing', output: 'Eymsli í epigastrium við miðlungs þreifingu' },
                            { display: 'Djúpa þreifingu', output: 'Eymsli í epigastrium við djúpa þreifingu' }
                        ]
                    },
                    {
                        display: 'Suprapubic svæði',
                        subOptions: [
                            { display: 'Létt þreifing', output: 'Eymsli yfir suprapubic svæði við létta þreifingu' },
                            { display: 'Miðlungs þreifing', output: 'Eymsli yfir suprapubic svæði við miðlungs þreifingu' },
                            { display: 'Djúpa þreifingu', output: 'Eymsli yfir suprapubic svæði við djúpa þreifingu' }
                        ]
                    }
                ],
                onRightClickOutput: 'Kviður mjúkur og eymslalaus við þreifingu'
            },
            {
                display: 'Sleppieymsli',
                subOptions: [
                    {
                        display: 'Direct',
                        output: 'Direct sleppieymsli'
                    },
                    {
                        display: 'Indirect',
                        output: 'Indirect sleppieymsli'
                    },
                    {
                        display: 'Direct og indirect',
                        output: 'Sleppieymsli, bæði direct og indirect'
                    }
                ],
                onRightClickOutput: 'Engin sleppieymsli'
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Murphy'],
        options: [
            { display: 'Murphy', output: 'Murphy teikn jákvætt', onRightClickOutput: 'Murphy teikn neikvætt' }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Endaþarmur - Útlit', 'Þreifing', 'Kvekkur', 'Hægðir/blóð'],
        options: [
            {
                display: 'Endaþarmur - Útlit',
                subOptions: [
                    {
                        display: 'Fissúra',
                        subOptions: [
                            { display: 'kl 1', output: 'Sést fissúra kl 1 á endaþarmi' },
                            { display: 'kl 2', output: 'Sést fissúra kl 2 á endaþarmi' },
                            { display: 'kl 3', output: 'Sést fissúra kl 3 á endaþarmi' },
                            { display: 'kl 4', output: 'Sést fissúra kl 4 á endaþarmi' },
                            { display: 'kl 5', output: 'Sést fissúra kl 5 á endaþarmi' },
                            { display: 'kl 6', output: 'Sést fissúra kl 6 á endaþarmi' },
                            { display: 'kl 7', output: 'Sést fissúra kl 7 á endaþarmi' },
                            { display: 'kl 8', output: 'Sést fissúra kl 8 á endaþarmi' },
                            { display: 'kl 9', output: 'Sést fissúra kl 9 á endaþarmi' },
                            { display: 'kl 10', output: 'Sést fissúra kl 10 á endaþarmi' },
                            { display: 'kl 11', output: 'Sést fissúra kl 11 á endaþarmi' },
                            { display: 'kl 12', output: 'Sést fissúra kl 12 á endaþarmi' }
                        ]
                    },
                    {
                        display: 'Sár',
                        subOptions: [
                            { display: 'kl 1', output: 'Sést sár kl 1 á endaþarmi' },
                            { display: 'kl 2', output: 'Sést sár kl 2 á endaþarmi' },
                            { display: 'kl 3', output: 'Sést sár kl 3 á endaþarmi' },
                            { display: 'kl 4', output: 'Sést sár kl 4 á endaþarmi' },
                            { display: 'kl 5', output: 'Sést sár kl 5 á endaþarmi' },
                            { display: 'kl 6', output: 'Sést sár kl 6 á endaþarmi' },
                            { display: 'kl 7', output: 'Sést sár kl 7 á endaþarmi' },
                            { display: 'kl 8', output: 'Sést sár kl 8 á endaþarmi' },
                            { display: 'kl 9', output: 'Sést sár kl 9 á endaþarmi' },
                            { display: 'kl 10', output: 'Sést sár kl 10 á endaþarmi' },
                            { display: 'kl 11', output: 'Sést sár kl 11 á endaþarmi' },
                            { display: 'kl 12', output: 'Sést sár kl 12 á endaþarmi' }
                        ]
                    },
                    {
                        display: 'Ytri gyllinæð',
                        subOptions: [
                            { display: 'kl 1', output: 'Sést ytri gyllinæð kl 1 á endaþarmi' },
                            { display: 'kl 2', output: 'Sést ytri gyllinæð kl 2 á endaþarmi' },
                            { display: 'kl 3', output: 'Sést ytri gyllinæð kl 3 á endaþarmi' },
                            { display: 'kl 4', output: 'Sést ytri gyllinæð kl 4 á endaþarmi' },
                            { display: 'kl 5', output: 'Sést ytri gyllinæð kl 5 á endaþarmi' },
                            { display: 'kl 6', output: 'Sést ytri gyllinæð kl 6 á endaþarmi' },
                            { display: 'kl 7', output: 'Sést ytri gyllinæð kl 7 á endaþarmi' },
                            { display: 'kl 8', output: 'Sést ytri gyllinæð kl 8 á endaþarmi' },
                            { display: 'kl 9', output: 'Sést ytri gyllinæð kl 9 á endaþarmi' },
                            { display: 'kl 10', output: 'Sést ytri gyllinæð kl 10 á endaþarmi' },
                            { display: 'kl 11', output: 'Sést ytri gyllinæð kl 11 á endaþarmi' },
                            { display: 'kl 12', output: 'Sést ytri gyllinæð kl 12 á endaþarmi' }
                        ]
                    },
                    {
                        display: 'Skin tag',
                        subOptions: [
                            { display: 'kl 1', output: 'Sést skin tag kl 1 á endaþarmi' },
                            { display: 'kl 2', output: 'Sést skin tag kl 2 á endaþarmi' },
                            { display: 'kl 3', output: 'Sést skin tag kl 3 á endaþarmi' },
                            { display: 'kl 4', output: 'Sést skin tag kl 4 á endaþarmi' },
                            { display: 'kl 5', output: 'Sést skin tag kl 5 á endaþarmi' },
                            { display: 'kl 6', output: 'Sést skin tag kl 6 á endaþarmi' },
                            { display: 'kl 7', output: 'Sést skin tag kl 7 á endaþarmi' },
                            { display: 'kl 8', output: 'Sést skin tag kl 8 á endaþarmi' },
                            { display: 'kl 9', output: 'Sést skin tag kl 9 á endaþarmi' },
                            { display: 'kl 10', output: 'Sést skin tag kl 10 á endaþarmi' },
                            { display: 'kl 11', output: 'Sést skin tag kl 11 á endaþarmi' },
                            { display: 'kl 12', output: 'Sést skin tag kl 12 á endaþarmi' }
                        ]
                    },
                    {
                        display: 'Varta',
                        subOptions: [
                            { display: 'kl 1', output: 'Sést varta kl 1 á endaþarmi' },
                            { display: 'kl 2', output: 'Sést varta kl 2 á endaþarmi' },
                            { display: 'kl 3', output: 'Sést varta kl 3 á endaþarmi' },
                            { display: 'kl 4', output: 'Sést varta kl 4 á endaþarmi' },
                            { display: 'kl 5', output: 'Sést varta kl 5 á endaþarmi' },
                            { display: 'kl 6', output: 'Sést varta kl 6 á endaþarmi' },
                            { display: 'kl 7', output: 'Sést varta kl 7 á endaþarmi' },
                            { display: 'kl 8', output: 'Sést varta kl 8 á endaþarmi' },
                            { display: 'kl 9', output: 'Sést varta kl 9 á endaþarmi' },
                            { display: 'kl 10', output: 'Sést varta kl 10 á endaþarmi' },
                            { display: 'kl 11', output: 'Sést varta kl 11 á endaþarmi' },
                            { display: 'kl 12', output: 'Sést varta kl 12 á endaþarmi' }
                        ]
                    }
                ],
                onRightClickOutput: 'Eðlilegt ytra útlit á endaþarmi. Engin sár, roði eða merki um lesionir.'
            },
            {
                display: 'Þreifing',
                subOptions: [
                    {
                        display: 'Tónus',
                        subOptions: [
                            { display: 'Aukinn', output: 'Aukinn tónus' },
                            { display: 'Minnkaður', output: 'Minnkaður tónus' }
                        ],
                        onRightClickOutput: 'Eðlilegur tónus'
                    },
                    { display: 'Eymsli', output: 'Eymsli við þreifingu' },
                    {
                        display: 'Fyrirferð',
                        subOptions: [
                            { display: 'Greinileg', output: 'Greinileg fyrirferð þreifast' },
                            { display: 'Grunur', output: 'Grunur um fyrirferð þreifast' },
                            { display: 'Get ekki útilokað', output: 'Get ekki útilokað fyrirferð við þreifingu' }
                        ]
                    },
                    { display: 'Hægðir', output: 'Hægðir þreifast í ampullu' }
                ],
                onRightClickSubOptions: [
                    { display: 'Án athugasemda', output: 'Innri þreifing án athugasemda. Engar fyrirferðir þreifast. Eðlilegur tónus' },
                    { display: 'Eðlilegur tónus', output: 'Eðlilegur tónus'},
                    { display: 'Eymslalaus', output: 'Engin eymsl við innri þreifingu' },
                    { display: 'Engar fyrirferðir', output: 'Engar fyrirferðir þreifast' }
                ]
            },
            {
                display: 'Kvekkur',
                subOptions: [
                    { display: 'Eymsli', output: 'Þreifieymsl við þreifingu á blöðruhálskirtli'},
                    { display: 'Óreglulegur', output: 'Blöðruhálskirtill þreifast óreglulegur í lögun'},
                    {
                        display: 'Stækkaður',
                        subOptions: [
                            { display: 'Greinilega', output: 'Blöðruhálskirtill greinilega stækkaður við þreifingu' },
                            { display: 'Grunur', output: 'Grunur um stækkaðan blöðruhálskirtil' },
                            { display: 'Get ekki útilokað', output: 'Get ekki útilokað stækkun blöðruhálskirtli' }
                        ]
                    },
                    {
                        display: 'Fyrirferð',
                        subOptions: [
                            { display: 'Greinileg', output: 'Þreifast greinileg fyrirferð á blöðruhálskirtli' },
                            { display: 'Grunur', output: 'Grunur um fyrirferð á blöðruhálskirtli' },
                            { display: 'Get ekki útilokað', output: 'Get ekki útilokað fyrirferð á blöðruhálskirtli' }
                        ]
                    },
                    
                    
                ],
                onRightClickSubOptions: [
                    { display: 'Eðlilegur', output: 'Blöðruhálskirtill þreifast eðlilegur í stærð og lögun. Takmörkuð eymsli. Engir hnútar.' },
                    { display: 'Eymslalaus', output: 'Eymslalaus blöðruhálskirtill' },
                    { display: 'Reglulegur', output: 'Reglulegur í lögun' },
                    { display: 'Engar fyrirferðir', output: 'Engar fyrirferðir þreifast á blöðruhálskirtli' }
                ]
            },
            {
                display: 'Hægðir/blóð',
                subOptions: [
                    {
                        display: 'Blóð',
                        subOptions: [
                            { display: 'Blóð á handska', output: 'Blóð á handska' },
                            { display: 'Ferskt blóð', output: 'Ferskt blóð' }
                        ]
                    },
                    { display: 'Svartar hægðir', output: 'Svartar hægðir' }
                ],
                onRightClickOutput: 'Eðlilegar hægðir, ekki blóð á handska'
                
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
            {
                display: 'Gastroenteritis',
                subOptions: [
                    { display: 'Greining', output: 'Gastroenteritis' },
                    { display: 'Grunur', output: 'Grunur um gastroenteritis' }
                ]
            },
            { display: 'Niðurgangur', output: 'Niðurgangur' },
            {
                display: 'Hægðatregða',
                subOptions: [
                    { display: 'Greining', output: 'Hægðatregða' },
                    { display: 'Grunur', output: 'Grunur um hægðatregðu' }
                ]
            },
            {
                display: 'Bakflæði',
                subOptions: [
                    { display: 'Greining', output: 'Bakflæði' },
                    { display: 'Grunur', output: 'Grunur um bakflæði' }
                ]
            }
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
                    { display: 'Greining', output: 'Gallsteinar' },
                    { display: 'Grunur', output: 'Grunur um gallsteina' }
                ]
            },
            {
                display: 'Diverticulitis',
                subOptions: [
                    { display: 'Greining', output: 'Diverticulitis' },
                    { display: 'Grunur', output: 'Grunur um diverticulitis' },
                    { display: 'Fullmótuð úrlausn', output: 'Grunur um diverticulitis. Fær viðeigandi ráðleggingar um meðferð. Ráðlegg fljótandi fæði fyrstu dagana. Ekki alltaf þörf á sýklalyfjum en set í gáttina, leysir út ef lagast ekki. Endurmat ef versnar' }
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
                            { display: 'Greining', output: 'Gyllinæð' },
                            { display: 'Grunur', output: 'Grunur um gyllinæð' }
                        ],
                        cancelText: ''
                    },
                    {
                        display: 'Anal fissúra',
                        subOptions: [
                            { display: 'Greining', output: 'Anal fissúra' },
                            { display: 'Grunur', output: 'Grunur um anal fissúru' }
                        ],
                        cancelText: ''
                    }
                    
                ]
            },
            {
                display: 'Botnlangi',
                subOptions: [
                    { display: 'Greining', output: 'Botnlangabólga' },
                    { display: 'Grunur', output: 'Grunur um botnlangabólgu' }
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
                    { display: 'Bakflæði', output: 'Fær viðeigandi ráðleggingar um bakflæði, hvað ber að forðast (áfengi, sterkan mat o.fl.) ásamant því hvenær ber að hafa samband'},
                    { display: 'Diverticulitis - Ráðl, fljótandi + sýklalyf ef þarf', output: 'Fær viðeigandi ráðleggingar um meðferð diverticulitis. Ráðlegg fljótandi fæði fyrstu dagana. Ekki alltaf þörf á sýklalyfjum en set í gáttina, leysir út ef lagast ekki. Endurmat ef versnar'}
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
        display: ['Sýklalyf', 'Verkjalyf', 'Bakflæðislyf'],
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
                display: 'Bakflæðislyf',
                subOptions: [
                    {
                        display: 'Reynum kúr',
                        subOptions: [
                            {
                                display: 'PPI',
                                subOptions: [
                                    { display: 'Omeprazol', output: 'Reynum kúr af PPI. Set omeprazol í gáttina' },
                                    { display: 'Esomeprazol', output: 'Reynum kúr af PPI. Set esomeprazol í gáttina' },
                                    { display: 'Lansoprazol', output: 'Reynum kúr af PPI. Set lansoprazol í gáttina' },
                                    { display: 'Pantoprazol', output: 'Reynum kúr af PPI. Set pantoprazol í gáttina' }
                                ]
                            },
                            {
                                display: 'H2-blokkari',
                                subOptions: [
                                    { display: 'Ranitidin', output: 'Reynum kúr af H2-blokkara. Set ranitidin í gáttina' },
                                    { display: 'Famotidin', output: 'Reynum kúr af H2-blokkara. Set famotidin í gáttina' }
                                ]
                            }
                        ]
                    },
                    {
                        display: 'Set á',
                        subOptions: [
                            {
                                display: 'PPI',
                                subOptions: [
                                    { display: 'Omeprazol', output: 'Set á PPI. Set omeprazol í gáttina' },
                                    { display: 'Esomeprazol', output: 'Set á PPI. Set esomeprazol í gáttina' },
                                    { display: 'Lansoprazol', output: 'Set á PPI. Set lansoprazol í gáttina' },
                                    { display: 'Pantoprazol', output: 'Set á PPI. Set pantoprazol í gáttina' }
                                ]
                            },
                            {
                                display: 'H2-blokkari',
                                subOptions: [
                                    { display: 'Ranitidin', output: 'Set á H2-blokkara. Set ranitidin í gáttina' },
                                    { display: 'Famotidin', output: 'Set á H2-blokkara. Set famotidin í gáttina' }
                                ]
                            }
                        ]
                    },
                    {
                        display: 'Bæti við',
                        subOptions: [
                            {
                                display: 'PPI',
                                subOptions: [
                                    { display: 'Omeprazol', output: 'Bæti við PPI. Set omeprazol í gáttina' },
                                    { display: 'Esomeprazol', output: 'Bæti við PPI. Set esomeprazol í gáttina' },
                                    { display: 'Lansoprazol', output: 'Bæti við PPI. Set lansoprazol í gáttina' },
                                    { display: 'Pantoprazol', output: 'Bæti við PPI. Set pantoprazol í gáttina' }
                                ]
                            },
                            {
                                display: 'H2-blokkari',
                                subOptions: [
                                    { display: 'Ranitidin', output: 'Bæti við H2-blokkara. Set ranitidin í gáttina' },
                                    { display: 'Famotidin', output: 'Bæti við H2-blokkara. Set famotidin í gáttina' }
                                ]
                            }
                        ]
                    }
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
        display: ['Myndataka', 'Blóðprufa', 'BMT', 'Sérfræðingur'],
        options: [
            {
                display: 'Myndataka',
                subOptions: [
                    { display: 'RTG kvið', output: 'Ráðlegg RTG kviðarhol' },
                    { display: 'TS kvið', output: 'Ráðlegg TS af kvið' },
                    { display: 'Ómskoðun LGB', output: 'Ráðlegg ómskoðun LGB. Sendi beiðni' }
                ]
            },
            { display: 'Blóðprufa', output: 'Panta blóðprufu' },
            { display: 'BMT', output: 'Vísa á bráðamóttöku' },
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
        display: ['Hægðasýni'],
        options: [
            {
                display: 'Hægðasýni',
                subOptions: [
                    { display: 'Ræktun', output: 'Ráðlegg að fá hægðasýni í ræktun' },
                    { display: 'Snýkjudýr', output: 'Ráðlegg að fá hægðasýni í snýkjudýraleit' },
                    { display: 'Ræktun og snýkjudýraleit', output: 'Ráðlegg að fá hægðasýni í ræktun og snýkjudýraleit' }
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
                    {
                        display: 'Bókar sjálfur',
                        subOptions: [
                            { display: 'Símatíma', output: 'Pantar sér símatíma til að fá niðurstöður' },
                            { display: 'Viðtalstíma', output: 'Pantar sér viðtalstíma í framhaldi' },
                            { display: 'Sinni heilsugæslu', output: 'Eftirfylgd á sinni heilsugæslu' }
                        ]
                    },
                    {
                        display: 'Gef tíma í endurkomu',
                        subOptions: [
                            { display: 'Símatíma', output: 'Fær símatíma til eftirfylgdar' },
                            { display: 'Viðtalstíma',
                                subOptions: [
                                    {display: 'NOS', output: 'Fær nýjan tíma til eftirfylgdar'},
                                    {display: 'Tvöfaldan', output: 'Fær tvöfaldan endurkomutíma'}
                                ]
                            }
                            
                        ]
                    }
                ]
            }

        ]
    }
];
const historyMelting = [
    {
        name: '',
        type: 'options',
        display: ['Hraust/ur', 'HTN', 'DM', 'IHD', 'Offita', 'Áfengi'],
        options: [
            {
                display: 'Hraust/ur',
                subOptions: [
                    { display: 'Hraust', output: 'Hraust í gruninn' },
                    { display: 'Hraustur', output: 'Hraustur í gruninn' }
                ],
                onRightClickOutput: 'Ekki hraust/ur'
            },
            {
                display: 'HTN',
                output: 'Saga um háþrýsting',
                onRightClickOutput: 'Ekki saga um háþrýsting'
            },
            {
                display: 'DM',
                output: 'Saga um sykursýki',
                onRightClickOutput: 'Ekki saga um sykursýki'
            },
            {
                display: 'IHD',
                output: 'Saga um kransæðasjúkdóm',
                onRightClickOutput: 'Ekki saga um kransæðasjúkdóm'
            },
            {
                display: 'Offita',
                output: 'Saga um offitu',
                onRightClickOutput: 'Ekki saga um offitu'
            },
            {
                display: 'Áfengi',
                output: 'Saga um áfengismisnotkun',
                onRightClickOutput: 'Ekki saga um áfengismisnotkun'
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Gallsteinar', 'Lifrarvandamál', 'Diverticulitis', 'IBD'],
        options: [
            {
                display: 'Gallsteinar',
                output: 'Saga um gallsteina',
                onRightClickOutput: 'Ekki saga um gallsteina'
            },
            {
                display: 'Lifrarvandamál',
                subOptions: [
                    { display: 'Cirrhosis', output: 'Er með skorpulifur', onRightClickOutput: 'Ekki saga um skorpulifur' },
                    { display: 'Hepatitis', output: 'Saga um lifrarbólgu', onRightClickOutput: 'Ekki saga um lifrarbólgu' }
                ]
            },
            {
                display: 'Diverticulitis',
                output: 'Saga um diverticulitis',
                onRightClickOutput: 'Ekki saga um diverticulitis'
            },
            {
                display: 'IBD',
                subOptions: [
                    { display: 'Crohn\'s Disease', output: 'Saga um Crohn\'s sjúkdóm', onRightClickOutput: 'Ekki saga um Crohn\'s sjúkdóm' },
                    { display: 'Ulcerative Colitis', output: 'Saga um sáraristilbólgu', onRightClickOutput: 'Ekki saga um sáraristilbólgu' }
                ]
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Krabbamein', 'Celiac Disease', 'Ólétta'],
        options: [
            {
                display: 'Krabbamein',
                subOptions: [
                    { display: 'Ristilkrabbamein', output: 'Saga um ristilkrabbamein', onRightClickOutput: 'Ekki saga um ristilkrabbamein' },
                    { display: 'Magakrabbamein', output: 'Saga um magakrabbamein', onRightClickOutput: 'Ekki saga um magakrabbamein' },
                    { display: 'Lifrarkrabbamein', output: 'Saga um lifrarkrabbamein', onRightClickOutput: 'Ekki saga um lifrarkrabbamein' }
                ]
            },
            {
                display: 'Celiac Disease',
                output: 'Saga um celiac sjúkdóm',
                onRightClickOutput: 'Ekki saga um celiac sjúkdóm'
            },
            {
                display: 'Ólétta',
                subOptions: [
                    { display: 'Fyrsta þriðjung', output: 'Ófrísk, á fyrsta þriðjungi meðgöngu' },
                    { display: 'Öðrum þriðjung', output: 'Ófrísk, á öðrum þriðjungi meðgöngu' },
                    { display: 'Þriðja þriðjung', output: 'Ófrísk, á þriðja þriðjungi meðgöngu' }
                ],
                onRightClickOutput: 'Ekki ófrísk'
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Ónæmisbælandi', 'Fæðuofnæmi', 'Lactose Intolerance'],
        options: [
            {
                display: 'Ónæmisbælandi',
                output: 'Er á ónæmisbælandi meðferð',
                onRightClickOutput: 'Ekki á ónæmisbælandi meðferð'
            },
            {
                display: 'Fæðuofnæmi',
                output: 'Saga um fæðuofnæmi',
                onRightClickOutput: 'Ekki saga um fæðuofnæmi'
            },
            {
                display: 'Lactose Intolerance',
                output: 'Saga um laktósaóþol',
                onRightClickOutput: 'Ekki saga um laktósaóþol'
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Magasár'],
        options: [
            {
                display: 'Magasár',
                subOptions: [
                    { display: 'Magasár', output: 'Saga um magasár', onRightClickOutput: 'Ekki saga um magasár' },
                    { display: 'Blæðandi magasár', output: 'Saga um blæðandi magasár', onRightClickOutput: 'Ekki saga um blæðandi magasár' },
                    { display: 'H. pylori', output: 'Saga um H. pylori sýkingu', onRightClickOutput: 'Ekki saga um H. pylori sýkingu' }
                ]
            }
        ]
    }
];
const RaudFloggMelting = [
    {
        name: '',
        type: 'options',
        display: ['Þyngdartap', 'Nætursviti', 'Blóð í hægðum'],
        options: [
            { display: 'Þyngdartap', output: 'Lýsir þyngdartapi', onRightClickOutput: 'Ekki þyngdartap' },
            { display: 'Nætursviti', output: 'Lýsir auknum nætursvita', onRightClickOutput: 'Ekki aukinn nætursviti' },
            {
                display: 'Blóð í hægðum',
                subOptions: [
                    { display: 'Ferskt blóð á pappír', output: 'Lýsir fersku blóði á pappír' },
                    { 
                        display: 'Ferskt blóð í skál',
                        subOptions: [
                            { display: 'Lítið', output: 'Lýsir litlu magni af fersku blóði í skál' },
                            { display: 'Mikið', output: 'Lýsir miklu magni af fersku blóði í skál' }
                        ]
                    },
                    { display: 'Svartar hægðir', output: 'Verið með svartar hægðir' }
                ],
                onRightClickOutput: 'Ekki blóð í hægðum eða svartar hægðir'
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Hraðahindranir'],
        options: [
            { display: 'Hraðahindranir', output: 'Vont að fara yfir hraðahindranir', onRightClickOutput: 'Ekki vont að fara yfir hraðahindranir' }
        ]
    }
];
// Lyf = Drugs
const LyfMelting = [
    {
        name: '',
        type: 'options',
        display: ['Omeprazol', 'Esomeprazol', 'Lansoprazol', 'Pantoprazol'],
        options: [
            {
                display: 'Omeprazol',
                subOptions: [
                    {
                        display: '10mg',
                        subOptions: [
                            { display: '1x1', output: 'Omeprazol 10mg 1x1' },
                            { display: '1x2', output: 'Omeprazol 10mg 1x2' },
                            { display: '1x3', output: 'Omeprazol 10mg 1x3' },
                            { display: '2x1', output: 'Omeprazol 10mg 2x1' },
                            { display: '2x2', output: 'Omeprazol 10mg 2x2' },
                            { display: '2x3', output: 'Omeprazol 10mg 2x3' }
                        ]
                    },
                    {
                        display: '20mg',
                        subOptions: [
                            { display: '1x1', output: 'Omeprazol 20mg 1x1' },
                            { display: '1x2', output: 'Omeprazol 20mg 1x2' },
                            { display: '1x3', output: 'Omeprazol 20mg 1x3' },
                            { display: '2x1', output: 'Omeprazol 20mg 2x1' },
                            { display: '2x2', output: 'Omeprazol 20mg 2x2' },
                            { display: '2x3', output: 'Omeprazol 20mg 2x3' }
                        ]
                    },
                    {
                        display: '40mg',
                        subOptions: [
                            { display: '1x1', output: 'Omeprazol 40mg 1x1' },
                            { display: '1x2', output: 'Omeprazol 40mg 1x2' },
                            { display: '1x3', output: 'Omeprazol 40mg 1x3' },
                            { display: '2x1', output: 'Omeprazol 40mg 2x1' },
                            { display: '2x2', output: 'Omeprazol 40mg 2x2' },
                            { display: '2x3', output: 'Omeprazol 40mg 2x3' }
                        ]
                    }
                ]
            },
            {
                display: 'Esomeprazol',
                subOptions: [
                    {
                        display: '20mg',
                        subOptions: [
                            { display: '1x1', output: 'Esomeprazol 20mg 1x1' },
                            { display: '1x2', output: 'Esomeprazol 20mg 1x2' },
                            { display: '1x3', output: 'Esomeprazol 20mg 1x3' },
                            { display: '2x1', output: 'Esomeprazol 20mg 2x1' },
                            { display: '2x2', output: 'Esomeprazol 20mg 2x2' },
                            { display: '2x3', output: 'Esomeprazol 20mg 2x3' }
                        ]
                    },
                    {
                        display: '40mg',
                        subOptions: [
                            { display: '1x1', output: 'Esomeprazol 40mg 1x1' },
                            { display: '1x2', output: 'Esomeprazol 40mg 1x2' },
                            { display: '1x3', output: 'Esomeprazol 40mg 1x3' },
                            { display: '2x1', output: 'Esomeprazol 40mg 2x1' },
                            { display: '2x2', output: 'Esomeprazol 40mg 2x2' },
                            { display: '2x3', output: 'Esomeprazol 40mg 2x3' }
                        ]
                    }
                ]
            },
            {
                display: 'Lansoprazol',
                subOptions: [
                    {
                        display: '15mg',
                        subOptions: [
                            { display: '1x1', output: 'Lansoprazol 15mg 1x1' },
                            { display: '1x2', output: 'Lansoprazol 15mg 1x2' },
                            { display: '1x3', output: 'Lansoprazol 15mg 1x3' },
                            { display: '2x1', output: 'Lansoprazol 15mg 2x1' },
                            { display: '2x2', output: 'Lansoprazol 15mg 2x2' },
                            { display: '2x3', output: 'Lansoprazol 15mg 2x3' }
                        ]
                    },
                    {
                        display: '30mg',
                        subOptions: [
                            { display: '1x1', output: 'Lansoprazol 30mg 1x1' },
                            { display: '1x2', output: 'Lansoprazol 30mg 1x2' },
                            { display: '1x3', output: 'Lansoprazol 30mg 1x3' },
                            { display: '2x1', output: 'Lansoprazol 30mg 2x1' },
                            { display: '2x2', output: 'Lansoprazol 30mg 2x2' },
                            { display: '2x3', output: 'Lansoprazol 30mg 2x3' }
                        ]
                    }
                ]
            },
            {
                display: 'Pantoprazol',
                subOptions: [
                    {
                        display: '20mg',
                        subOptions: [
                            { display: '1x1', output: 'Pantoprazol 20mg 1x1' },
                            { display: '1x2', output: 'Pantoprazol 20mg 1x2' },
                            { display: '1x3', output: 'Pantoprazol 20mg 1x3' },
                            { display: '2x1', output: 'Pantoprazol 20mg 2x1' },
                            { display: '2x2', output: 'Pantoprazol 20mg 2x2' },
                            { display: '2x3', output: 'Pantoprazol 20mg 2x3' }
                        ]
                    },
                    {
                        display: '40mg',
                        subOptions: [
                            { display: '1x1', output: 'Pantoprazol 40mg 1x1' },
                            { display: '1x2', output: 'Pantoprazol 40mg 1x2' },
                            { display: '1x3', output: 'Pantoprazol 40mg 1x3' },
                            { display: '2x1', output: 'Pantoprazol 40mg 2x1' },
                            { display: '2x2', output: 'Pantoprazol 40mg 2x2' },
                            { display: '2x3', output: 'Pantoprazol 40mg 2x3' }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Ranitidin', 'Famotidin', 'Loperamide', 'Dicyclomine'],
        options: [
            {
                display: 'Ranitidin',
                subOptions: [
                    {
                        display: '150mg',
                        subOptions: [
                            { display: '1x1', output: 'Ranitidin 150mg 1x1' },
                            { display: '1x2', output: 'Ranitidin 150mg 1x2' },
                            { display: '1x3', output: 'Ranitidin 150mg 1x3' },
                            { display: '2x1', output: 'Ranitidin 150mg 2x1' },
                            { display: '2x2', output: 'Ranitidin 150mg 2x2' },
                            { display: '2x3', output: 'Ranitidin 150mg 2x3' }
                        ]
                    },
                    {
                        display: '300mg',
                        subOptions: [
                            { display: '1x1', output: 'Ranitidin 300mg 1x1' },
                            { display: '1x2', output: 'Ranitidin 300mg 1x2' },
                            { display: '1x3', output: 'Ranitidin 300mg 1x3' },
                            { display: '2x1', output: 'Ranitidin 300mg 2x1' },
                            { display: '2x2', output: 'Ranitidin 300mg 2x2' },
                            { display: '2x3', output: 'Ranitidin 300mg 2x3' }
                        ]
                    }
                ]
            },
            {
                display: 'Famotidin',
                subOptions: [
                    {
                        display: '20mg',
                        subOptions: [
                            { display: '1x1', output: 'Famotidin 20mg 1x1' },
                            { display: '1x2', output: 'Famotidin 20mg 1x2' },
                            { display: '1x3', output: 'Famotidin 20mg 1x3' },
                            { display: '2x1', output: 'Famotidin 20mg 2x1' },
                            { display: '2x2', output: 'Famotidin 20mg 2x2' },
                            { display: '2x3', output: 'Famotidin 20mg 2x3' }
                        ]
                    },
                    {
                        display: '40mg',
                        subOptions: [
                            { display: '1x1', output: 'Famotidin 40mg 1x1' },
                            { display: '1x2', output: 'Famotidin 40mg 1x2' },
                            { display: '1x3', output: 'Famotidin 40mg 1x3' },
                            { display: '2x1', output: 'Famotidin 40mg 2x1' },
                            { display: '2x2', output: 'Famotidin 40mg 2x2' },
                            { display: '2x3', output: 'Famotidin 40mg 2x3' }
                        ]
                    }
                ]
            },
            {
                display: 'Loperamide',
                subOptions: [
                    {
                        display: '2mg',
                        subOptions: [
                            { display: '1x1', output: 'Loperamide 2mg 1x1' },
                            { display: '1x2', output: 'Loperamide 2mg 1x2' },
                            { display: '1x3', output: 'Loperamide 2mg 1x3' },
                            { display: '2x1', output: 'Loperamide 2mg 2x1' },
                            { display: '2x2', output: 'Loperamide 2mg 2x2' },
                            { display: '2x3', output: 'Loperamide 2mg 2x3' }
                        ]
                    }
                ]
            },
            {
                display: 'Dicyclomine',
                subOptions: [
                    {
                        display: '10mg',
                        subOptions: [
                            { display: '1x1', output: 'Dicyclomine 10mg 1x1' },
                            { display: '1x2', output: 'Dicyclomine 10mg 1x2' },
                            { display: '1x3', output: 'Dicyclomine 10mg 1x3' },
                            { display: '2x1', output: 'Dicyclomine 10mg 2x1' },
                            { display: '2x2', output: 'Dicyclomine 10mg 2x2' },
                            { display: '2x3', output: 'Dicyclomine 10mg 2x3' }
                        ]
                    },
                    {
                        display: '20mg',
                        subOptions: [
                            { display: '1x1', output: 'Dicyclomine 20mg 1x1' },
                            { display: '1x2', output: 'Dicyclomine 20mg 1x2' },
                            { display: '1x3', output: 'Dicyclomine 20mg 1x3' },
                            { display: '2x1', output: 'Dicyclomine 20mg 2x1' },
                            { display: '2x2', output: 'Dicyclomine 20mg 2x2' },
                            { display: '2x3', output: 'Dicyclomine 20mg 2x3' }
                        ]
                    }
                ]
            }
        ]
    }
];
const RannsoknirMelting = [
    {
        name: '',
        type: 'options',
        display: ['CRP'],
        options: [
            {
                display: 'CRP',
                subOptions: [
                    {
                        display: 'CRP 0-50',
                        subOptions: Array.from({ length: 11 }, (_, i) => ({
                            display: `${i * 5}`,
                            output: `CRP: ${i * 5}`
                        }))
                    },
                    {
                        display: 'CRP 51-100',
                        subOptions: Array.from({ length: 10 }, (_, i) => ({
                            display: `${55 + i * 5}`,
                            output: `CRP: ${55 + i * 5}`
                        }))
                    },
                    {
                        display: 'CRP 101-150',
                        subOptions: Array.from({ length: 10 }, (_, i) => ({
                            display: `${105 + i * 5}`,
                            output: `CRP: ${105 + i * 5}`
                        }))
                    },
                    {
                        display: 'CRP 151-200',
                        subOptions: Array.from({ length: 10 }, (_, i) => ({
                            display: `${155 + i * 5}`,
                            output: `CRP: ${155 + i * 5}`
                        }))
                    },
                    {
                        display: 'CRP 201-250',
                        subOptions: Array.from({ length: 10 }, (_, i) => ({
                            display: `${205 + i * 5}`,
                            output: `CRP: ${205 + i * 5}`
                        }))
                    },
                    {
                        display: 'CRP 251-300',
                        subOptions: Array.from({ length: 10 }, (_, i) => ({
                            display: `${255 + i * 5}`,
                            output: `CRP: ${255 + i * 5}`
                        }))
                    }
                ],
                onRightClickOutput: 'CRP <5'
            }
        ]
    }
];



// Stoðkerfi (Musculoskeletal system)
const SymptomsStodkerfi = [
    {
        name: '',
        type: 'options',
        display: ['Tímalengd einkenna'],
        options: [
            {
                display: 'Tímalengd einkenna',
                subOptions: [
                    { display: 'Nokkra daga', output: 'Nokkra daga saga' },
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
        display: ['Einkenni', 'Verkur', 'Bólga'],
        options: [
            {
                display: 'Einkenni',
                subOptions: [
                    {
                        display: 'Öxl',
                        subOptions: [
                            { display: 'Hægri', output: 'Einkenni frá hægri öxl' },
                            { display: 'Vinstri', output: 'Einkenni frá vinstri öxl' }
                        ]
                    },
                    {
                        display: 'Olnbogi',
                        subOptions: [
                            { display: 'Hægri', output: 'Einkenni frá hægri olnboga' },
                            { display: 'Vinstri', output: 'Einkenni frá vinstri olnboga' }
                        ]
                    },
                    {
                        display: 'Úlnliður',
                        subOptions: [
                            { display: 'Hægri', output: 'Einkenni frá hægri úlnlið' },
                            { display: 'Vinstri', output: 'Einkenni frá vinstri úlnlið' }
                        ]
                    },
                    {
                        display: 'Bak',
                        subOptions: [
                            { display: 'Bak', output: 'Einkenni frá baki' },
                            { display: 'Lendhrygg', output: 'Einkenni frá lendhrygg' },
                            { display: 'Brjósthrygg', output: 'Einkenni frá brjósthrygg' },
                            { display: 'Hálshrygg', output: 'Einkenni frá hálshrygg' }
                        ]
                    },
                    {
                        display: 'Mjöðm',
                        subOptions: [
                            { display: 'Hægri', output: 'Einkenni frá hægri mjöðm' },
                            { display: 'Vinstri', output: 'Einkenni frá vinstri mjöðm' }
                        ]
                    },
                    {
                        display: 'Hné',
                        subOptions: [
                            { display: 'Hægri', output: 'Einkenni frá hægra hné' },
                            { display: 'Vinstri', output: 'Einkenni frá vinstra hné' }
                        ]
                    },
                    {
                        display: 'Ökkli',
                        subOptions: [
                            { display: 'Hægri', output: 'Einkenni frá hægri ökkla' },
                            { display: 'Vinstri', output: 'Einkenni frá vinstri ökkla' }
                        ]
                    }
                ]
            },
            {display: 'Verkur', output: 'Verkur', onRightClickOutput: 'Ekki verkur'},
            {display: 'Bólga', output: 'Bólga', onRightClickOutput: 'Ekki bólga'}

        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Áverki', 'Leiðni'],
        options: [
            {
                display: 'Áverki',
                subOptions: [
                    { display: 'Rak sig í', output: 'Rak sig í' },
                    { display: 'Missteig sig', output: 'Missteig sig' }
                ],
                onRightClickOutput: 'Ekkert sem kom fyrir'
            },
            {
                display: 'Leiðni',
                subOptions: [
                    {
                        display: 'Leiðir niður fót',
                        subOptions: [
                            { display: 'Hægri', output: 'Leiðir niður hægri fót' },
                            { display: 'Vinstri', output: 'Leiðir niður vinstri fót' },
                            { display: 'Bæði', output: 'Leiðir niður báða fætur' }
                        ]
                    },
                    {
                        display: 'Leiðir út í hendi',
                        subOptions: [
                            { display: 'Hægri', output: 'Leiðir út í hægri hendi' },
                            { display: 'Vinstri', output: 'Leiðir út í vinstri hendi' },
                            { display: 'Bæði', output: 'Leiðir út í báðar hendur' }
                        ]
                    }
                ],
                onRightClickSubOptions: [
                    { display: 'Ekki leiðni niður fætur', output: 'Ekki leiðni niður fætur' },
                    { display: 'Ekki leiðni út í hendur', output: 'Ekki leiðni út í hendur' }
                ]
            }

        ]
    }
];
const ExamsStodkerfi = [
    // Knee Examination
    {
        name: '',
        type: 'options',
        display: ['Hné - Útlit', 'Þreifing', 'Hreyfigeta', 'Liðbönd', 'Mcmurray'],
        options: [
            {
                    
                        display: 'Hné - útlit',
                        subOptions: [
                            {
                                display: 'Bólga',
                                subOptions: [
                                    { display: 'Medialt', output: 'Bólga medialt á hné' },
                                    { display: 'Lateralt', output: 'Bólga lateralt á hné' },
                                    { display: 'Suprapatellart', output: 'Bólga suprapatellart' },
                                    { display: 'Infrapatellart', output: 'Bólga infrapatellart' }
                                ]
                            },
                            {
                                display: 'Bólga og roði',
                                subOptions: [
                                    { display: 'Medialt', output: 'Bólga og roði medialt á hné' },
                                    { display: 'Lateralt', output: 'Bólga og roði lateralt á hné' },
                                    { display: 'Suprapatellart', output: 'Bólga og roði suprapatellart' },
                                    { display: 'Infrapatellart', output: 'Bólga og roði infrapatellart' }
                                ]
                            },
                            {
                                display: 'Roði',
                                subOptions: [
                                    { display: 'Medialt', output: 'Roði medialt á hné' },
                                    { display: 'Lateralt', output: 'Roði lateralt á hné' },
                                    { display: 'Suprapatellart', output: 'Roði suprapatellart' },
                                    { display: 'Infrapatellart', output: 'Roði infrapatellart' }
                                ]
                            },
                            {
                                display: 'Blámi',
                                subOptions: [
                                    { display: 'Medialt', output: 'Blámi medialt á hné' },
                                    { display: 'Lateralt', output: 'Blámi lateralt á hné' },
                                    { display: 'Suprapatellart', output: 'Blámi suprapatellart' },
                                    { display: 'Infrapatellart', output: 'Blámi infrapatellart' }
                                ]
                            },
                            {
                                display: 'Vöðvarýrnun',
                                subOptions: [
                                    { display: 'Medialt', output: 'Vöðvarýrnun medialt á hné' },
                                    { display: 'Lateralt', output: 'Vöðvarýrnun lateralt á hné' },
                                    { display: 'Suprapatellart', output: 'Vöðvarýrnun suprapatellart' },
                                    { display: 'Infrapatellart', output: 'Vöðvarýrnun infrapatellart' }
                                ]
                            },
                            {
                                display: 'Ör',
                                subOptions: [
                                    { display: 'Medialt', output: 'Ör medialt á hné' },
                                    { display: 'Lateralt', output: 'Ör lateralt á hné' },
                                    { display: 'Suprapatellart', output: 'Ör suprapatellart' },
                                    { display: 'Infrapatellart', output: 'Ör infrapatellart' }
                                ]
                            }
                        ],
                        onRightClickOutput: 'Hné eðlilega útlítandi. Ekki áberandi bólgið'
                    
                
            },            
            {
                display: 'Þreifing',
                subOptions: [
                    {
                        display: 'Liðbil',
                        subOptions: [
                            { display: 'Innanvert', output: 'Eymsl yfir innanverðu liðbili' },
                            { display: 'Utanvert', output: 'Eymsl yfir utanverðu liðbili' }
                        ]
                    },
                    {
                        display: 'Patellar',
                        subOptions: [
                            { display: 'Infrapatellar', output: 'Eymsl infrapatellart' },
                            { display: 'Suprapatellar', output: 'Eymsl suprapatellart' }
                        ]
                    },
                    { display: 'Pes anserinus', output: 'Eymsl yfir pes anserinus' },
                    { display: 'Hnésbót', output: 'Eymsl yfir hnésbót' },
                    { display: 'Medial femoral epicondyle', output: 'Eymsl yfir medial femoral epicondyle' },
                    { display: 'Lateral femoral epicondyle', output: 'Eymsl yfir lateral femoral epicondyle' },
                    { display: 'Tibial tuberosity', output: 'Eymsl yfir tibial tuberosity' }
                ],
                onRightClickOutput: 'Engin eymsli við þreifingu'
            }
            ,
            {
                display: 'Hreyfigeta',
                subOptions: Array.from({ length: 7 }, (_, i) => ({
                    display: `Extension ${-10 + i * 5} gráður`,
                    subOptions: Array.from({ length: 13 }, (_, j) => ({
                        display: `Flexion ${90 + j * 5} gráður`,
                        output: `Nær ${-10 + i * 5} gráða extension. Nær ${90 + j * 5} gráða flexion.`
                    }))
                })),
                onRightClickOutput: 'Full hreyfigeta'
            },
            {
                display: 'Liðbandaprófun',
                subOptions: [
                    { display: 'MCL', output: 'Verkur og aukið laxitet við prófun á MCL' },
                    { display: 'LCL', output: 'Verkur og aukið laxitet við prófun á LCL' },
                    { display: 'ACL', output: 'Aukið laxitet við prófun á fremra krossbandi' },
                    { display: 'PCL', output: 'Aukið laxitet við prófun á aftara krossbandi' }
                ],
                onRightClickOutput: 'Liðbandaprófun eðlileg'
            },
            {
                display: 'Mcmurray',
                subOptions: [
                    { display: 'Jákvætt medialt', output: 'Mcmurray jákvætt medialt' },
                    { display: 'Jákvætt lateralt', output: 'Mcmurray jákvætt lateralt' },
                    { display: 'Jákvætt beggja vegna', output: 'Mcmurray jákvætt beggja vegna' }
                ],
                onRightClickOutput: 'Mcmurray neikvætt'
            }
        ]
    },

    // Back Examination
    {
        name: '',
        type: 'options',
        display: ['Bak - Útlit', 'Þreifing', 'Hreyfigeta', 'SLR'],
        options: [
            {
                        display: 'Bak - Útlit',
                        subOptions: [
                            {
                                display: 'Hryggskekkja',
                                subOptions: [
                                    {
                                        display: 'Scoliosis',
                                        subOptions: [
                                            { display: 'Til hægri', output: 'Scoliosis til hægri' },
                                            { display: 'Til vinstri', output: 'Scoliosis til vinstri' }
                                        ]
                                    },
                                    {
                                        display: 'Kyphosis',
                                        subOptions: [
                                            { display: 'Áberandi kyphosis', output: 'Áberandi kyphosis til staðar' }
                                        ]
                                    },
                                    {
                                        display: 'Lordosis',
                                        subOptions: [
                                            { display: 'Áberandi lordosis', output: 'Áberandi lordosis til staðar' }
                                        ]
                                    }
                                ]
                            },
                            {
                                display: 'Húðbreytingar',
                                subOptions: [
                                    { 
                                        display: 'Ör',
                                        subOptions: [
                                            {
                                                display: 'Efri hluti baks',
                                                subOptions: [
                                                    { display: 'Hægra herðablað', output: 'Ör á hægra herðablaði' },
                                                    { display: 'Vinstra herðablað', output: 'Ör á vinstra herðablaði' }
                                                ]
                                            },
                                            {
                                                display: 'Mið hluti baka',
                                                subOptions: [
                                                    { display: 'Miðjan bak', output: 'Ör á miðju baki' }
                                                ]
                                            },
                                            {
                                                display: 'Neðri hluti baka',
                                                subOptions: [
                                                    { display: 'Hægra mjóbak', output: 'Ör á hægra mjóbaki' },
                                                    { display: 'Vinstra mjóbak', output: 'Ör á vinstra mjóbaki' }
                                                ]
                                            }
                                        ]
                                    },
                                    { 
                                        display: 'Roði',
                                        subOptions: [
                                            {
                                                display: 'Efri hluti baka',
                                                subOptions: [
                                                    { display: 'Hægra herðablað', output: 'Roði á hægra herðablaði' },
                                                    { display: 'Vinstra herðablað', output: 'Roði á vinstra herðablaði' }
                                                ]
                                            },
                                            {
                                                display: 'Mið hluti baka',
                                                subOptions: [
                                                    { display: 'Miðjan bak', output: 'Roði á miðju baki' }
                                                ]
                                            },
                                            {
                                                display: 'Neðri hluti baka',
                                                subOptions: [
                                                    { display: 'Hægra mjóbak', output: 'Roði á hægra mjóbaki' },
                                                    { display: 'Vinstra mjóbak', output: 'Roði á vinstra mjóbaki' }
                                                ]
                                            }
                                        ]
                                    },
                                    { 
                                        display: 'Mar',
                                        subOptions: [
                                            {
                                                display: 'Efri hluti baka',
                                                subOptions: [
                                                    { display: 'Hægra herðablað', output: 'Mar á hægra herðablaði' },
                                                    { display: 'Vinstra herðablað', output: 'Mar á vinstra herðablaði' }
                                                ]
                                            },
                                            {
                                                display: 'Mið hluti baka',
                                                subOptions: [
                                                    { display: 'Miðjan bak', output: 'Mar á miðju baki' }
                                                ]
                                            },
                                            {
                                                display: 'Neðri hluti baka',
                                                subOptions: [
                                                    { display: 'Hægra mjóbak', output: 'Mar á hægra mjóbaki' },
                                                    { display: 'Vinstra mjóbak', output: 'Mar á vinstra mjóbaki' }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                display: 'Vöðvarýrnun',
                                subOptions: [
                                    { display: 'Paraspinalt', output: 'Vöðvarýrnun paraspinalt' },
                                    { display: 'Mjaðmavöðvar', output: 'Vöðvarýrnun í mjaðmavöðvum' },
                                    { display: 'Glutealvöðvar', output: 'Vöðvarýrnun í glutealvöðvum' }
                                ]
                            }
                        ],
                        onRightClickOutput: 'Hryggur eðlilega útlítandi. Engin áberandi frávik.'
                    },
            {
                display: 'Þreifing',
                subOptions: [
                    {
                        display: 'Hryggjartindar',
                        subOptions: [
                            {
                                display: 'Stakur',
                                subOptions: Array.from({ length: 7 }, (_, i) => ({
                                    display: `C${i + 1}`,
                                    output: `Þreifieymsl yfir hryggjartind ca C${i + 1}`
                                })).concat(Array.from({ length: 12 }, (_, i) => ({
                                    display: `T${i + 1}`,
                                    output: `Þreifieymsl yfir hryggjartind ca T${i + 1}`
                                }))).concat(Array.from({ length: 5 }, (_, i) => ({
                                    display: `L${i + 1}`,
                                    output: `Þreifieymsl yfir hryggjartind ca L${i + 1}`
                                })))
                            },
                            {
                                display: 'Bili',
                                subOptions: [
                                    {
                                        display: 'Cervical',
                                        subOptions: Array.from({ length: 7 }, (_, i) => ({
                                            display: `C${i + 1}`,
                                            subOptions: Array.from({ length: 7 - i }, (_, j) => ({
                                                display: `to C${i + 1 + j}`,
                                                output: `Þreifieymsl yfir hryggjartindum ca C${i + 1} til C${i + 1 + j}`
                                            }))
                                        }))
                                    },
                                    {
                                        display: 'Thoracic',
                                        subOptions: Array.from({ length: 12 }, (_, i) => ({
                                            display: `T${i + 1}`,
                                            subOptions: Array.from({ length: 12 - i }, (_, j) => ({
                                                display: `to T${i + 1 + j}`,
                                                output: `Þreifieymsl yfir hryggjartindum ca T${i + 1} til T${i + 1 + j}`
                                            }))
                                        }))
                                    },
                                    {
                                        display: 'Lumbar',
                                        subOptions: Array.from({ length: 5 }, (_, i) => ({
                                            display: `L${i + 1}`,
                                            subOptions: Array.from({ length: 5 - i }, (_, j) => ({
                                                display: `to L${i + 1 + j}`,
                                                output: `Þreifieymsl yfir hryggjartindum ca L${i + 1} til L${i + 1 + j}`
                                            }))
                                        }))
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        display: 'Paraspinalt',
                        subOptions: [
                            {
                                display: 'Lumbar',
                                subOptions: [
                                    { display: 'Hægri', output: 'Þreifieymsl paraspinalt á lumbar svæði hægra megin' },
                                    { display: 'Vinstri', output: 'Þreifieymsl paraspinalt á lumbar svæði vinstra megin' },
                                    { display: 'Beggja vegna', output: 'Þreifieymsl paraspinalt á lumbar svæði beggja vegna' }
                                ]
                            },
                            {
                                display: 'Thorax',
                                subOptions: [
                                    { display: 'Hægri', output: 'Þreifieymsl paraspinalt á thorax svæði hægra megin' },
                                    { display: 'Vinstri', output: 'Þreifieymsl paraspinalt á thorax svæði vinstra megin' },
                                    { display: 'Beggja vegna', output: 'Þreifieymsl paraspinalt á thorax svæði beggja vegna' }
                                ]
                            },
                            {
                                display: 'Cervical',
                                subOptions: [
                                    { display: 'Hægri', output: 'Þreifieymsl paraspinalt á cervical svæði hægra megin' },
                                    { display: 'Vinstri', output: 'Þreifieymsl paraspinalt á cervical svæði vinstra megin' },
                                    { display: 'Beggja vegna', output: 'Þreifieymsl paraspinalt á cervical svæði beggja vegna' }
                                ]
                            }
                        ]
                    },
                    {
                        display: 'Herðablaði',
                        subOptions: [
                            { display: 'Hægri', output: 'Þreifieymsl yfir hægri herðablaði' },
                            { display: 'Vinstri', output: 'Þreifieymsl yfir vinstri herðablaði' }
                        ]
                    },
                    {
                        display: 'Gluteal vöðvafestur',
                        subOptions: [
                            { display: 'Hægri', output: 'Þreifieymsl yfir gluteal vöðvafestum hægra megin' },
                            { display: 'Vinstri', output: 'Þreifieymsl yfir gluteal vöðvafestum vinstra megin' }
                        ]
                    }
                ],
                onRightClickOutput: 'Engin eymsli við þreifingu'
            },
            {
                display: 'Hreyfigeta',
                subOptions: [
                    { display: 'Takmörkuð vegna verkja', output: 'Hreyfigeta takmörkuð vegna verkja' },
                    { display: 'Stirðleiki við flexion', output: 'Stirðleiki við flexion. Nær ekki að setja fingur í gólf' },
                    { display: 'Stirðleiki við extension', output: 'Stirðleiki við extension' },
                    { display: 'Stirðleiki við lateral flexion', output: 'Stirðleiki við lateral flexion' },
                    { display: 'Stirðleiki við rotation', output: 'Stirðleiki við rotation' }
                ],
                onRightClickOutput: 'Full hreyfigeta á baki'
            },
            {
                display: 'SLR',
                subOptions: [
                    { display: 'Jákvætt hægra megin', output: 'SLR jákvætt hægra megin' },
                    { display: 'Jákvætt vinstra megin', output: 'SLR jákvætt vinstra megin' },
                    { display: 'Jákvætt beggja vegna', output: 'SLR jákvætt beggja vegna' }
                ],
                onRightClickOutput: 'SLR neikvætt'
            }
        ]
    },

    // Hip Examination
    {
        name: '',
        type: 'options',
        display: ['Skoðun á mjöðm'],
        options: [
            { display: 'Skoðun á mjöðm', output: 'Skoðun á mjöðm sýnir' }
        ]
    },
    // Ankle Examination
    {
        name: '',
        type: 'options',
        display: ['Ökkli - Útlit', 'Ottawa', 'Hreyfigeta'],
        options: [
            {
                display: 'Ökkli - Útlit',
                subOptions: [
                    {
                        display: 'Bólga',
                        subOptions: [
                            { display: 'Lateral malleolus', output: 'Bólga yfir lateral malleolus' },
                            { display: 'Medial malleolus', output: 'Bólga yfir medial malleolus' },
                            { display: 'Anterior ankle', output: 'Bólga framanvert á ökkla' },
                            { display: 'Posterior ankle', output: 'Bólga aftanvert á ökkla' }
                        ]
                    },
                    {
                        display: 'Mar',
                        subOptions: [
                            { display: 'Lateral malleolus', output: 'Mar yfir lateral malleolus' },
                            { display: 'Medial malleolus', output: 'Mar yfir medial malleolus' },
                            { display: 'Anterior ankle', output: 'Mar framanvert á ökkla' },
                            { display: 'Posterior ankle', output: 'Mar aftanvert á ökkla' }
                        ]
                    },
                    {
                        display: 'Bólga og Mar',
                        subOptions: [
                            { display: 'Lateral malleolus', output: 'Bólga og mar yfir lateral malleolus' },
                            { display: 'Medial malleolus', output: 'Bólga og mar yfir medial malleolus' },
                            { display: 'Anterior ankle', output: 'Bólga og mar framanvert á ökkla' },
                            { display: 'Posterior ankle', output: 'Bólga og mar aftanvert á ökkla' }
                        ]
                    }
                ],
                onRightClickOutput: 'Eðlilegt útlit. Ekki að sjá áberandi mar eða bólgu'
            },
            {
                display: 'Ottawa',
                subOptions: [
                    { display: 'Lateral malleolus', output: 'Þreifieymsl yfir lateral malleolus' },
                    { display: 'Medial malleolus', output: 'Þreifieymsl yfir medial malleolus' },
                    { display: 'Navicular bone', output: 'Þreifieymsl yfir navicular beini' },
                    { display: 'Base of 5th metatarsal', output: 'Þreifieymsl yfir bais metatarsal 5' },
                    {
                        display: 'Ástig',
                        subOptions: [
                            { display: 'Getur stigið í fótinn', output: 'Getur stigið í fótinn' },
                            { display: 'Getur ekki stigið í fótinn', output: 'Getur ekki stigið í fótinn' },
                            { display: 'Gat ekki stigið í fótinn beint eftir áverkann en getur stigið létt í nú', output: 'Gat ekki stigið í fótinn beint eftir áverkann en getur stigið létt í nú' }
                        ]
                    }
                ],
                onRightClickOutput: 'Ekki þreifieymsl yfir malleoli, navicular beini eða basis 5.a metatarsal. Getur stigið í fótinn'
            },
            {
                display: 'Hreyfigeta',
                subOptions: [
                    {
                        display: 'Dorsiflexion',
                        subOptions: Array.from({ length: 11 }, (_, i) => ({
                            display: `Dorsiflexion ${i * 5} gráður`,
                            output: `Nær ${i * 5} gráðu dorsiflexion`
                        }))
                    },
                    {
                        display: 'Plantarflexion',
                        subOptions: Array.from({ length: 11 }, (_, i) => ({
                            display: `Plantarflexion ${i * 5} gráður`,
                            output: `Nær ${i * 5} gráðu plantarflexion`
                        }))
                    },
                    {
                        display: 'Inversion',
                        subOptions: Array.from({ length: 11 }, (_, i) => ({
                            display: `Inversion ${i * 5} gráður`,
                            output: `Nær ${i * 5} gráðu inversion`
                        }))
                    },
                    {
                        display: 'Eversion',
                        subOptions: Array.from({ length: 11 }, (_, i) => ({
                            display: `Eversion ${i * 5} gráður`,
                            output: `Nær ${i * 5} gráðu eversion`
                        }))
                    }
                ],
                onRightClickOutput: 'Full hreyfigeta'
            }
            
        ]
    },
    // Shoulder Examination
    {
        name: '',
        type: 'options',
        display: ['Öxl - Útlit', 'Þreifing', 'Hreyfigeta'],
        options: [
            {
                display: 'Öxl - Útlit',
                subOptions: [
                    {
                        display: 'Öxl - Útlit',
                        subOptions: [
                            {
                                display: 'Samhverfa',
                                output: 'Ein öxl lítur öðruvísi út en hin að stærð, lögun eða stöðu, sem getur bent til vandamála eins og úr lið, vöðvarýrnun eða bólgu.'
                            },
                            {
                                display: 'Jöfnun',
                                output: 'Öxlin virðist færð úr stað, sem getur bent til úr lið eða subluxation.'
                            },
                            {
                                display: 'Vöðva magn og lögun',
                                subOptions: [
                                    { display: 'Rýrnun', output: 'Minnkað vöðvamagn, sem getur bent til taugaskaða eða notkunarleysis.' },
                                    { display: 'Hypertrophia', output: 'Aukið vöðvamagn, mögulega vegna ofnotkunar eða bótamechanisma.' }
                                ]
                            },
                            {
                                display: 'Húðbreytingar',
                                subOptions: [
                                    { display: 'Roði', output: 'Roði sem bendir til bólgu eða sýkingar.' },
                                    { display: 'Mar', output: 'Sem bendir til nýlegra áverka.' },
                                    { display: 'Ör', output: 'Nærvera skurðör eða gamalla áverkamerkja.' }
                                ]
                            },
                            {
                                display: 'Afbrigði',
                                output: 'Nærvera óeðlilegra útstæðna eða innfellinga, sem geta bent til brota, úr lið eða annarra byggingarfrávika.'
                            }
                        ],
                        
                    }
                ],
                onRightClickSubOptions: [
                    { display: 'Samhverft', output: 'Báðar axlir eru samhverfar að stærð, lögun og stöðu.' },
                    { display: 'Eðlileg jöfnun', output: 'Öxlin er í venjulegri líffærafræðilegri stöðu, með humeral höfuðið rétt stillt innan glenoid fossa.' },
                    { display: 'Eðlilegt vöðvamagn og lögun', output: 'Vöðvar umhverfis öxlina (deltoid, trapezius, rotator cuff vöðvar) eru vel skilgreindir og samhverfir.' },
                    { display: 'Eðlileg húð', output: 'Húðin yfir öxlinni er ómerkt, án litarbreytinga eða sára.' },
                    { display: 'Engin afbrigði', output: 'Engin sýnileg afbrigði.' }
                ]
            },
            {
                display: 'Þreifing',
                subOptions: [
                    { display: 'Framanvert', output: 'Þreifieymsl framanvert á axlarlið' },
                    { display: 'Aftanvert', output: 'Þreifieymsl aftanvert á axlarlið' },
                    { display: 'AC lið', output: 'Þreifieymsl yfir AC lið' },
                    {
                        display: 'Biceps sin',
                        subOptions: [
                            { display: 'Festu stuttu biceps sinar', output: 'Þreifieymsl yfir festu stuttu biceps sinar' },
                            { display: 'Löngu biceps sin', output: 'Þreifieymsl yfir löngu biceps sin' }
                        ]
                    },
                    { display: 'Supraspinatus', output: 'Þreifieymsl yfir supraspinatus' },
                    { display: 'Infraspinatus', output: 'Þreifieymsl yfir infraspinatus' },
                    { display: 'Subscapularis', output: 'Þreifieymsl yfir subscapularis' },
                    {
                        display: 'Deltoid Muscle',
                        subOptions: [
                            { display: 'Fremri', output: 'Þreifieymsl yfir anterior deltoid vöðva' },
                            { display: 'Miðjum', output: 'Þreifieymsl yfir miðjum deltoid vöðva' },
                            { display: 'Aftari', output: 'Þreifieymsl yfir aftari hluta deltoid vöðva' }
                        ]
                    },
                    {
                        display: 'Viðbein',
                        subOptions: [
                            {
                                display: 'Hnúður',
                                subOptions: [
                                    { display: 'Distal þriðjung', output: 'Þreifast hnúður á distal þriðjungi viðbeins' },
                                    { display: 'Miðju', output: 'Þreifast hnúður á miðju viðbeins' },
                                    { display: 'Proximal þriðjung', output: 'Þreifast hnúður á proximal þriðjungi viðbeins' }
                                ]
                            },
                            {
                                display: 'Eymsli',
                                subOptions: [
                                    { display: 'Distal þriðjung', output: 'Eymsli á distal þriðjungi viðbeins' },
                                    { display: 'Miðju', output: 'Eymsli á miðju viðbeins' },
                                    { display: 'Proximal þriðjung', output: 'Eymsli á proximal þriðjungi viðbeins' }
                                ]
                            },
                            {
                                display: 'Hnúður og eymsli',
                                subOptions: [
                                    { display: 'Distal þriðjung', output: 'Þreifast aumur hnúður á distal þriðjungi viðbeins' },
                                    { display: 'Miðju', output: 'Þreifast aumur hnúður á miðju viðbeins' },
                                    { display: 'Proximal þriðjung', output: 'Þreifast aumur hnúður á proximal þriðjungi viðbeins' }
                                ]
                            },
                            {
                                display: 'Aflögun',
                                subOptions: [
                                    { display: 'Distal þriðjung', output: 'Aflögun á distal þriðjungi viðbeins' },
                                    { display: 'Miðju', output: 'Aflögun á miðju viðbeini' },
                                    { display: 'Proximal þriðjung', output: 'Aflögun á proximal þriðjungi viðbeins' }
                                ]
                            }
                        ]
                    },
                    { display: 'Herðablað', output: 'Þreifieymsl yfir herðablað' }
                ],
                onRightClickSubOptions: [
                    { display: 'Engin eymsli', output: 'Engin eymsli við þreyfingu' }
                ]
            },            
            { display: 'Hreyfigeta', output: '', onRightClickOutput: 'Góð hreyfigeta' }
        ]
    }
];
const PlanStodkerfi = [
    {
        name: '',
        type: 'options',
        display: ['Öxl', 'Olnbogi', 'Úlnliður', 'Bak'],
        options: [
            {
                display: 'Öxl',
                subOptions: [
                    {
                        display: 'Tognun',
                        subOptions: [
                            { display: 'Grunur um tognun', output: 'Grunur um tognun á öxl' },
                            { display: 'Tognun', output: 'Tognun á öxl' }
                        ]
                    },
                    {
                        display: 'Slit',
                        subOptions: [
                            { display: 'Grunur um slit', output: 'Grunur um slit á öxl' },
                            { display: 'Slit', output: 'Slit á öxl' }
                        ]
                    },
                    {
                        display: 'Tendinitis',
                        subOptions: [
                            { display: 'Grunur um tendinitis', output: 'Grunur um tendinitis á öxl' },
                            { display: 'Tendinitis', output: 'Tendinitis á öxl' }
                        ]
                    },
                    {
                        display: 'Bursitis',
                        subOptions: [
                            { display: 'Grunur um bursitis', output: 'Grunur um bursitis á öxl' },
                            { display: 'Bursitis', output: 'Bursitis á öxl' }
                        ]
                    },
                    {
                        display: 'Impingement',
                        subOptions: [
                            { display: 'Grunur um impingement', output: 'Grunur um impingement á öxl' },
                            { display: 'Impingement', output: 'Impingement á öxl' }
                        ]
                    },
                    {
                        display: 'Dislocation',
                        subOptions: [
                            { display: 'Grunur um dislocation', output: 'Grunur um dislocation á öxl' },
                            { display: 'Dislocation', output: 'Dislocation á öxl' }
                        ]
                    }
                ]
            },
            {
                display: 'Olnbogi',
                subOptions: [
                    {
                        display: 'Tognun',
                        subOptions: [
                            { display: 'Grunur um tognun', output: 'Grunur um tognun á olnboga' },
                            { display: 'Tognun', output: 'Tognun á olnboga' }
                        ]
                    },
                    {
                        display: 'Slit',
                        subOptions: [
                            { display: 'Grunur um slit', output: 'Grunur um slit á olnboga' },
                            { display: 'Slit', output: 'Slit á olnboga' }
                        ]
                    },
                    {
                        display: 'Epicondylitis',
                        subOptions: [
                            {
                                display: 'Grunur um',
                                subOptions: [
                                    { display: 'Lateral', output: 'Grunur um lateral epicondylitis á olnboga' },
                                    { display: 'Medial', output: 'Grunur um medial epicondylitis á olnboga' }
                                ]
                            },
                            {
                                display: 'Epicondylitis',
                                subOptions: [
                                    { display: 'Lateral', output: 'Lateral epicondylitis á olnboga' },
                                    { display: 'Medial', output: 'Medial epicondylitis á olnboga' }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                display: 'Úlnliður',
                subOptions: [
                    {
                        display: 'Tognun',
                        subOptions: [
                            { display: 'Grunur um tognun', output: 'Grunur um tognun á úlnlið' },
                            { display: 'Tognun', output: 'Tognun á úlnlið' }
                        ]
                    },
                    {
                        display: 'Slit',
                        subOptions: [
                            { display: 'Grunur um slit', output: 'Grunur um slit á úlnlið' },
                            { display: 'Slit', output: 'Slit á úlnlið' }
                        ]
                    }
                ]
            },
            {
                display: 'Bak',
                subOptions: [
                    {
                        display: 'Tognun',
                        subOptions: [
                            { display: 'Grunur um tognun', output: 'Grunur um tognun á baki' },
                            { display: 'Tognun', output: 'Tognun á baki' }
                        ]
                    },
                    {
                        display: 'Slit',
                        subOptions: [
                            { display: 'Grunur um slit', output: 'Grunur um slit á baki' },
                            { display: 'Slit', output: 'Slit á baki' }
                        ]
                    },
                    {
                        display: 'Lumbago',
                        subOptions: [
                            { display: 'Lumbago', output: 'Lumbago á baki' }
                        ]
                    },
                    {
                        display: 'Brjósklos',
                        subOptions: [
                            { display: 'Grunur um brjósklos', output: 'Grunur um brjósklos á baki' },
                            { display: 'Brjósklos', output: 'Brjósklos á baki' }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Mjöðm', 'Hné', 'Ökkli'],
        options: [
            {
                display: 'Mjöðm',
                subOptions: [
                    {
                        display: 'Tognun',
                        subOptions: [
                            { display: 'Grunur um tognun', output: 'Grunur um tognun á mjöðm' },
                            { display: 'Tognun', output: 'Tognun á mjöðm' }
                        ]
                    },
                    {
                        display: 'Slit',
                        subOptions: [
                            { display: 'Grunur um slit', output: 'Grunur um slit á mjöðm' },
                            { display: 'Slit', output: 'Slit á mjöðm' }
                        ]
                    }
                ]
            },
            {
                display: 'Hné',
                subOptions: [
                    {
                        display: 'Tognun',
                        subOptions: [
                            { display: 'Grunur um tognun', output: 'Grunur um tognun á hné' },
                            { display: 'Tognun', output: 'Tognun á hné' }
                        ]
                    },
                    {
                        display: 'Slit',
                        subOptions: [
                            { display: 'Grunur um slit', output: 'Grunur um slit á hné' },
                            { display: 'Slit', output: 'Slit á hné' }
                        ]
                    }
                ]
            },
            {
                display: 'Ökkli',
                subOptions: [
                    {
                        display: 'Tognun',
                        subOptions: [
                            { display: 'Grunur um tognun', output: 'Grunur um tognun á ökkla' },
                            { display: 'Tognun', output: 'Tognun á ökkla' }
                        ]
                    },
                    {
                        display: 'Slit',
                        subOptions: [
                            { display: 'Grunur um slit', output: 'Grunur um slit á ökkla' },
                            { display: 'Slit', output: 'Slit á ökkla' }
                        ]
                    }
                ]
            }
        ]
    },
    {},{},{},
    {
        name: '',
        type: 'options',
        display: ['Ráðleggingar', 'Verkjalyf', 'Teygjubindi', 'Myndgreining'],
        options: [
            {
                display: 'Ráðleggingar',
                subOptions: [
                    { display: 'Almennar', output: 'Almennar ráðleggingar' },
                    { display: 'Tognun', output: 'Almennar ráðleggingar vegna tognunar. RICE' },
                    { display: 'Grunur um brjósklos', output: 'Almennar ráðleggingar vegna gruns um brjósklos í baki. Gengur yfirleitt yfir af sjálfu sér á 4-6 vikum. Ef lagast ekki á þeim tíma er ráðlögð segulómskoðun' }
                ]
            },
            {
                display: 'Verkjalyf',
                subOptions: [
                    { display: 'PN', output: 'Verkjalyf PN' },
                    { display: 'Íbúfen og panódíl', output: 'Ráðlegg verkjalyf. Íbúfen og panódíl.' },
                    { display: 'Cox2', output: 'Ráðlegg verkjalyf. Set cox2 hindra í gáttina' },
                    { display: 'Parkódín', output: 'Fær parkódín. Notar við slæmum verk og/eða fyrir nóttina.' }
                ]
            },
            {
                display: 'Teygjubindi',
                subOptions: [
                    { display: 'Kaupir sjálf/ur', output: 'Getur verið ráðlagt að nota teygjubindi. Getur keypt í apóteki eða stoðkerfaverslun' },
                    { display: 'Set', output: 'Set teygjubindi' }
                ]
            },
            {
                display: 'Myndgreining',
                subOptions: [
                    { display: 'Röntgen', output: 'Ráðlegg röntgenmynd' },
                    { display: 'TS', output: 'Ráðlegg tölvusneiðmynd' },
                    { display: 'Segulómun', output: 'Ráðlegg segulómun' },
                    { display: 'Ómskoðun', output: 'Ráðlegg ómskoðun' },
                    { display: 'RTG+Ómskoðun', output: 'Ráðlegg RTG+ómskoðun' }
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
                    {
                        display: 'Bókar sjálfur',
                        subOptions: [
                            { display: 'Símatíma', output: 'Pantar sér símatíma til að fá niðurstöður' },
                            { display: 'Viðtalstíma', output: 'Pantar sér viðtalstíma í framhaldi' },
                            { display: 'Sinni heilsugæslu', output: 'Eftirfylgd á sinni heilsugæslu' }
                        ]
                    },
                    {
                        display: 'Gef tíma í endurkomu',
                        subOptions: [
                            { display: 'Símatíma', output: 'Fær símatíma til eftirfylgdar' },
                            { display: 'Viðtalstíma',
                                subOptions: [
                                    {display: 'NOS', output: 'Fær nýjan tíma til eftirfylgdar'},
                                    {display: 'Tvöfaldan', output: 'Fær tvöfaldan endurkomutíma'}
                                ]
                            }
                            
                        ]
                    }
                ]
            }

        ]
    }
    
];

// Húðvandamál (Skin problems)
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

// Geð (Psychiatric problems)
const SymptomsGed = [
    {
        name: '',
        type: 'options',
        display: ['Tímalengd einkenna'],
        options: [
            {
                display: 'Tímalengd einkenna',
                subOptions: [
                    { display: 'Nokkra daga', output: 'Nokkra daga saga' },
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
        display: ['Þunglyndi', 'Kvíði'],
        options: [
            { display: 'Þunglyndi',
                subOptions: [
                    {display: 'NOS', output: 'Þunglyndiseinkenni'},
                    {display: 'Grunur', output: 'Grunar um þunglyndi'}
                    ],
                    onRightClickOutput: 'Neitar þunglyndiseinkennum'
            },
            { display: 'Kvíði',
                subOptions: [
                    {display: 'NOS', output: 'Kvíði'},
                    {display: 'Grunur', output: 'Grunar sig vera með kvíðaröskun'}
                    ],
                    onRightClickOutput: 'Neitar kvíða'
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Einangrun', 'Stuðningur', 'Félagsstaða'],
        options: [
            {
                display: 'Einangrun',
                output: 'Aukin félagsleg einangrun',
                onRightClickOutput: 'Ekki félagsleg einangrun. Hittir vini og fjölskyldu reglulega'
            },
            {
                display: 'Stuðningur',
                output: 'Ekki nægilega góður stuðningur heimafyrir',
                onRightClickSubOptions: [
                    { display: 'NOS', output: 'Er með góðan stuðning heimafyrir' },
                    { display: 'Maka', output: 'Er með góðan stuðning frá maka' },
                    { display: 'Foreldrum', output: 'Er með góðan stuðning frá foreldrum' },
                    { display: 'Vinum', output: 'Er með góðan stuðning frá vinum' }
                ]
            },
            {
                display: 'Félagsstaða',
                subOptions: [
                    { display: 'Í hjónabandi', output: 'Í hjónabandi' },
                    { display: 'Í sambúð', output: 'Í sambúð' },
                    { display: 'Einstæðingur', output: 'Einstæðingur' },
                    { display: 'Einstætt foreldri', output: 'Einstætt foreldri' },
                    { display: 'Býr hjá foreldrum', output: 'Býr hjá foreldrum' }
                ]
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['ADHD', 'Einbeiting', 'Gleymska', 'Ofvirkni'],
        options: [
            { 
                display: 'ADHD',
                subOptions: [
                    {display: 'Grunur', output: 'Grunar sig vera með ADHD'}
                    ],
                    onRightClickOutput: 'Neitar ADHD einkennum'
                
            },
            {
                display: 'Einbeiting',
                output: 'Lýsir einbeitingaörðugleikum',
                onRightClickOutput: 'Ekki áberandi einbeitingaörðugleikar'
            },
            {
                display: 'Gleymska',
                output: 'Á erfitt með að muna hluti',
                onRightClickOutput: 'Ekki áberandi minnisvandi'
            },
            {
                display: 'Ofvirkni',
                subOptions: [
                    { display: 'NOS', output: 'Lýsir þónokkri ofvirkni' },
                    { display: 'Í barnæsku', output: 'Var líklega með ofvirkni í barnæsku s.kv. foreldrum' },
                    { display: 'Í dag og í barnæsku', output: 'Lýsir þónokkri ofvirkni í dag. Einnig í barnæsku' }
                ],
                onRightClickOutput: 'Neitar ofvirknieinkennum'
            }
        ]
    }
];
const GedSkodunData = [
    {
        name: '',
        type: 'options',
        display: ['Framkoma', 'Útlit', 'Augnsamband', 'Talþrýstingur', 'Geðslag'],
        options: [
            {
                display: 'Framkoma',
                    subOptions: [
                        { display: 'Dónaleg', output: 'Dónaleg framkoma' },
                        { display: 'Aggressíf', output: 'Aggressíf framkoma' }
                    ],
                onRightClickOutput: 'Kemur vel fyrir'
            },
            {
                display: 'Útlit',
                subOptions: [
                    {
                        display: 'Illa hirt/ur',
                        subOptions: [
                            { display: 'KK', output: 'Illa hirtur' },
                            { display: 'KVK', output: 'Illa hirt' }
                        ]
                    },
                    {
                        display: 'Illa til fara',
                        output: 'Illa til fara'
                    },
                    {
                        display: 'Klæðaburður',
                        subOptions: [
                            { display: 'Slitnum fötum', output: 'Í slitnum fötum' }
                        ]
                    },
                    {
                        display: 'Hárgreiðsla',
                        subOptions: [
                            { display: 'Ógreitt hár', output: 'Ógreitt hár' },
                            { display: 'Skeggvöxtur', output: 'Mikill skeggvöxtur' }
                        ]
                    },
                    {
                        display: 'Lykt',
                        subOptions: [
                            { display: 'Reykingarlykt', output: 'Reykingarlykt' },
                            { display: 'Líkamslykt', output: 'Mikil líkamslykt' },
                            { display: 'Ilmefnalykt', output: 'Sterk ilmefnalykt' }
                        ]
                    }
                ],
                onRightClickOutput: 'Vel til fara.'
            },
            {
                display: 'Augnsamband',
                subOptions: [
                    {
                        display: 'Minnkað',
                        subOptions: [
                            { display: 'Aðeins', output: 'Aðeins minnkað augnsamband' },
                            { display: 'Mikið', output: 'Minnkað augnsamband. Myndar nánast aldrei augnsamband í viðtali' }
                        ]
                    },
                    {
                        display: 'Aukið',
                        subOptions: [
                            { display: 'Aðeins', output: 'Aðeins aukið augnsamband' },
                            { display: 'Mikið', output: 'Mikið aukið augnsamband. Starir' }
                        ]
                    }
                ],
                onRightClickOutput: 'Eðlilegt augnsamband'
            },
            {
                display: 'Talþrýstingur',
                subOptions: [
                    {
                        display: 'Minnkaður',
                        subOptions: [
                            { display: 'Aðeins', output: 'Aðeins minnkaður talþrýstingur' },
                            { display: 'Mikið', output: 'Mikið minnkaður talþrýstingur' }
                        ]
                    },
                    {
                        display: 'Aukinn',
                        subOptions: [
                            { display: 'Aðeins', output: 'Aðeins aukinn talþrýstingur' },
                            { display: 'Mikið', output: 'Mikið aukinn talþrýstingur' }
                        ]
                    }
                ],
                onRightClickOutput: 'Talþrýstingur í lagi'
            },
            {
                display: 'Geðslag',
                subOptions: [
                    { display: 'Hækkað', output: 'Hækkað geðslag' },
                    { display: 'Lækkað', output: 'Lækkað geðslag' }
                ],
                onRightClickOutput: 'Geðslag í lagi'
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Affekt', 'Geðrofseinkenni', 'Innsæi', 'Sjálfsvígshugsanir'],
        options: [
            {
                display: 'Affekt',
                subOptions: [
                    { display: 'Kvíðinn', output: 'Kvíðinn affekt' },
                    { display: 'Dapur', output: 'Dapur affekt' },
                    { display: 'Reiður', output: 'Reiður affekt' }
                ],
                onRightClickOutput: 'Affekt nokkuð eðlilegur'
            },
            {
                display: 'Geðrofseinkenni',
                output: 'Vaknar grunur um geðrofseinkenni',
                onRightClickOutput: 'Engin merki um geðrofseinkenni í viðtali'
            },
            {
                display: 'Innsæi',
                output: 'Virðist ekki með gott innsæi',
                onRightClickOutput: 'Virðist vera með gott innsæi'
            },
            {
                display: 'Sjálfsvígshugsanir',
                output: 'Lýsir sjálfsvígshugsunum',
                onRightClickOutput: 'Neitar sjálfsvígshugsunum'
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Fyrri sjálfsvígstilraunir'],
        options: [
            {
                display: 'Fyrri sjálfsvígshugsanir',
                subOptions: [
                    { display: '1x', output: 'Saga um fyrri sjálfsvígstilraun' },
                    { display: 'Oftar', output: 'Saga um fyrri sjálfsvígstilraunir. Oftar en 1x' }
                ],
                onRightClickOutput: 'Ekki saga um fyrri sjálfsvígstilraunir'
            }
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
        display: ['Andleg vanlíðan', 'Þunglyndi', 'Kvíði', 'OCD'],
        options: [
            {
                display: 'Andleg vanlíðan',
                output: 'Andleg vanlíðan'
            },
            {
                display: 'Þunglyndi',
                subOptions: [
                    { display: 'Grunur', output: 'Grunur um þunglyndi' },
                    { display: 'Greining', output: 'Þunglyndi' }
                ]
            },
            {
                display: 'Kvíði',
                subOptions: [
                    { display: 'Grunur', output: 'Grunur um kvíða' },
                    { display: 'Greining', output: 'Kvíði' }
                ]
            },
            {
                display: 'OCD',
                subOptions: [
                    { display: 'Grunur', output: 'Grunur um áráttu- og þráhyggjuröskun' },
                    { display: 'Greining', output: 'Áráttu og þráhyggjuröskun' }
                ]
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['ADHD', 'ADD', 'Svefnvandi'],
        options: [
            {
                display: 'ADHD',
                subOptions: [
                    { display: 'Grunur', output: 'Grunur um ADHD' },
                    { display: 'Greining', output: 'ADHD' }
                ]
            },
            {
                display: 'ADD',
                subOptions: [
                    { display: 'Grunur', output: 'Grunur um ADD' },
                    { display: 'Greining', output: 'ADD' }
                ]
            },
            {
                display: 'Svefnvandi', output: 'Svefnvandi'
            }
        ]
    },
    {},{},{},
    {
        name: '',
        type: 'options',
        display: ['Ráðleggingar', 'Sálfræðimeðferð', 'ADHD'],
        options: [
            {
                display: 'Ráðleggingar',
                subOptions: [
                    {
                        display: 'Val á meðferð við þunglyndi/kvíða',
                        output: 'Almennar ráðleggingar varðandi val á meðferð. Helstu valmöguleikar sálfræðiþjónusta og/eða lyfjameðferð'
                    },
                    {
                        display: 'SSRI',
                        output: 'Fær ráðleggingar varðandi verkunarmáta og mögulegar aukaverkanir SSRI lyfja. Lágmark 4 vikur til að meta árangur. Kvíði getur aukist tímabundið fyrstu 1-2 vikurnar áður en hann minnkar. Sumir upplifa flatneskju en ekki algilt. Getur haft neikvæð áhrif á kynhvöt.'
                    },
                    {
                        display: 'Svefnvandamál',
                        subOptions: [
                            { display: 'Svefnvenjur', output: 'Fær ráðleggingar varðandi svefnvanda. Ráðlagt að byrja með að skoða svefnvenjur. Lágmarka skjánotkun 2klst fyrir svefn, ekki hafa tæki inní svefnherbergi, gefa sér 15 mín í að sofna, ef sofnar ekki á þeim tíma ráðlagt að fara á fætur og gera rólegt aktívitet svo sem að lesa þar til þreyta skellur á' },
                            { display: 'Sálfræðimeðferð', output: 'Fær ráðleggingar varðandi svefnvanda. Ræðum um svefnvenjur. Getur verið ráðlagt að leita sálfræðiþjónustu á stofu, t.d. hjá betri svefn' }
                        ]
                    }
                ]
            },
            {
                display: 'Sálfræðimeðferð',
                subOptions: [
                    {
                        display: 'Ráðlegg',
                        subOptions: [
                            { 
                                display: 'Stofu', 
                                output: 'Ráðlegg að leita sálfræðimeðferðar á stofu' 
                            }
                        ]
                    },
                    {
                        display: 'Tilvísun',
                        subOptions: [
                            { 
                                display: 'Stofu', 
                                output: 'Geri tilvísun á sálfræðing á stofu' 
                            }
                        ]
                    }
                ]
            },
            {
                display: 'ADHD',
                subOptions: [
                    { 
                        display: 'Ráðleggingar um greiningu', 
                        output: 'Veiti ráðleggingar um meðferð- og greiningu ADHD. Fær viðeigandi blöð til skimunar ásamt tvöföldum endurkomutíma til að fara yfir niðurstöður og e.t.v. senda tilvísun' 
                    },
                    { 
                        display: 'Tilvísun heilsugæslan ADHD', 
                        output: 'Tilvísun á ADHD teymi heilsugæslunnar. Fyllum út matskvarða og sendi viðeigandi fylgiskjöl' 
                    }
                ]
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Þunglyndislyf', 'Svefnlyf'],
        options: [
          {
            display: 'Þunglyndislyf',
            subOptions: [
              {
                display: 'Hefja meðferð',
                subOptions: [
                  {
                    display: 'SSRI',
                    subOptions: [
                      {
                        display: 'Sertraline',
                        subOptions: [
                          {
                            display: '50mg',
                            output: 'Hefjum meðferð með Sertraline 50mg'
                          },
                          {
                            display: '100mg',
                            output: 'Hefjum meðferð með Sertraline 100mg'
                          }
                        ]
                      },
                      {
                        display: 'Escitalopram',
                        subOptions: [
                          {
                            display: '5mg',
                            output: 'Hefjum meðferð með Escitalopram 5mg'
                          },
                          {
                            display: '10mg',
                            output: 'Hefjum meðferð með Escitalopram 10mg'
                          }
                        ]
                      },
                      {
                        display: 'Citalopram',
                        subOptions: [
                          {
                            display: '10mg',
                            output: 'Hefjum meðferð með Citalopram 10mg'
                          },
                          {
                            display: '20mg',
                            output: 'Hefjum meðferð með Citalopram 20mg'
                          }
                        ]
                      },
                      {
                        display: 'Fluoxetine',
                        subOptions: [
                          {
                            display: '20mg',
                            output: 'Hefjum meðferð með Fluoxetine 20mg'
                          },
                          {
                            display: '40mg',
                            output: 'Hefjum meðferð með Fluoxetine 40mg'
                          }
                        ]
                      },
                      {
                        display: 'Paroxetine',
                        subOptions: [
                          {
                            display: '20mg',
                            output: 'Hefjum meðferð með Paroxetine 20mg'
                          },
                          {
                            display: '40mg',
                            output: 'Hefjum meðferð með Paroxetine 40mg'
                          }
                        ]
                      },
                      {
                        display: 'Fluvoxamine',
                        subOptions: [
                          {
                            display: '50mg',
                            output: 'Hefjum meðferð með Fluvoxamine 50mg'
                          },
                          {
                            display: '100mg',
                            output: 'Hefjum meðferð með Fluvoxamine 100mg'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    display: 'SNRI',
                    subOptions: [
                      {
                        display: 'Venlafaxine',
                        subOptions: [
                          {
                            display: '37.5mg',
                            output: 'Hefjum meðferð með Venlafaxine 37.5mg'
                          },
                          {
                            display: '75mg',
                            output: 'Hefjum meðferð með Venlafaxine 75mg'
                          }
                        ]
                      },
                      {
                        display: 'Duloxetine',
                        subOptions: [
                          {
                            display: '30mg',
                            output: 'Hefjum meðferð með Duloxetine 30mg'
                          },
                          {
                            display: '60mg',
                            output: 'Hefjum meðferð með Duloxetine 60mg'
                          }
                        ]
                      },
                      {
                        display: 'Desvenlafaxine',
                        subOptions: [
                          {
                            display: '50mg',
                            output: 'Hefjum meðferð með Desvenlafaxine 50mg'
                          },
                          {
                            display: '100mg',
                            output: 'Hefjum meðferð með Desvenlafaxine 100mg'
                          }
                        ]
                      },
                      {
                        display: 'Levomilnacipran',
                        subOptions: [
                          {
                            display: '20mg',
                            output: 'Hefjum meðferð með Levomilnacipran 20mg'
                          },
                          {
                            display: '40mg',
                            output: 'Hefjum meðferð með Levomilnacipran 40mg'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    display: 'Bupropion',
                    subOptions: [
                      {
                        display: '150mg',
                        output: 'Hefjum meðferð með Bupropion 150mg'
                      },
                      {
                        display: '300mg',
                        output: 'Hefjum meðferð með Bupropion 300mg'
                      }
                    ]
                  },
                  {
                    display: 'Mirtazapine',
                    subOptions: [
                      {
                        display: '15mg',
                        output: 'Hefjum meðferð með Mirtazapine 15mg'
                      },
                      {
                        display: '30mg',
                        output: 'Hefjum meðferð með Mirtazapine 30mg'
                      },
                      {
                        display: '45mg',
                        output: 'Hefjum meðferð með Mirtazapine 45mg'
                      }
                    ]
                  },
                  {
                    display: 'TCA',
                    subOptions: [
                      {
                        display: 'Amitriptyline',
                        subOptions: [
                          {
                            display: '25mg',
                            output: 'Hefjum meðferð með Amitriptyline 25mg'
                          },
                          {
                            display: '50mg',
                            output: 'Hefjum meðferð með Amitriptyline 50mg'
                          }
                        ]
                      },
                      {
                        display: 'Nortriptyline',
                        subOptions: [
                          {
                            display: '25mg',
                            output: 'Hefjum meðferð með Nortriptyline 25mg'
                          },
                          {
                            display: '50mg',
                            output: 'Hefjum meðferð með Nortriptyline 50mg'
                          }
                        ]
                      },
                      {
                        display: 'Imipramine',
                        subOptions: [
                          {
                            display: '25mg',
                            output: 'Hefjum meðferð með Imipramine 25mg'
                          },
                          {
                            display: '50mg',
                            output: 'Hefjum meðferð með Imipramine 50mg'
                          }
                        ]
                      },
                      {
                        display: 'Clomipramine',
                        subOptions: [
                          {
                            display: '25mg',
                            output: 'Hefjum meðferð með Clomipramine 25mg'
                          },
                          {
                            display: '50mg',
                            output: 'Hefjum meðferð með Clomipramine 50mg'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    display: 'MAOIs',
                    subOptions: [
                      {
                        display: 'Phenelzine',
                        output: 'Hefjum meðferð með Phenelzine'
                      },
                      {
                        display: 'Tranylcypromine',
                        output: 'Hefjum meðferð með Tranylcypromine'
                      },
                      {
                        display: 'Isocarboxazid',
                        output: 'Hefjum meðferð með Isocarboxazid'
                      },
                      {
                        display: 'Selegiline',
                        output: 'Hefjum meðferð með Selegiline'
                      }
                    ]
                  }
                ]
              },
              {
                display: 'Auka meðferð',
                subOptions: [
                  {
                    display: 'SSRI',
                    subOptions: [
                      {
                        display: 'Sertraline',
                        subOptions: [
                          {
                            display: '100mg',
                            output: 'Aukum Sertraline í 100mg'
                          },
                          {
                            display: '150mg',
                            output: 'Aukum Sertraline í 150mg'
                          },
                          {
                            display: '200mg',
                            output: 'Aukum Sertraline í 200mg'
                          }
                        ]
                      },
                      {
                        display: 'Escitalopram',
                        subOptions: [
                          {
                            display: '15mg',
                            output: 'Aukum Escitalopram í 15mg'
                          },
                          {
                            display: '20mg',
                            output: 'Aukum Escitalopram í 20mg'
                          }
                        ]
                      },
                      {
                        display: 'Citalopram',
                        subOptions: [
                          {
                            display: '30mg',
                            output: 'Aukum Citalopram í 30mg'
                          },
                          {
                            display: '40mg',
                            output: 'Aukum Citalopram í 40mg'
                          }
                        ]
                      },
                      {
                        display: 'Fluoxetine',
                        subOptions: [
                          {
                            display: '40mg',
                            output: 'Aukum Fluoxetine í 40mg'
                          },
                          {
                            display: '60mg',
                            output: 'Aukum Fluoxetine í 60mg'
                          }
                        ]
                      },
                      {
                        display: 'Paroxetine',
                        subOptions: [
                          {
                            display: '30mg',
                            output: 'Aukum Paroxetine í 30mg'
                          },
                          {
                            display: '40mg',
                            output: 'Aukum Paroxetine í 40mg'
                          }
                        ]
                      },
                      {
                        display: 'Fluvoxamine',
                        subOptions: [
                          {
                            display: '150mg',
                            output: 'Aukum Fluvoxamine í 150mg'
                          },
                          {
                            display: '200mg',
                            output: 'Aukum Fluvoxamine í 200mg'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    display: 'SNRI',
                    subOptions: [
                      {
                        display: 'Venlafaxine',
                        subOptions: [
                          {
                            display: '150mg',
                            output: 'Aukum Venlafaxine í 150mg'
                          },
                          {
                            display: '225mg',
                            output: 'Aukum Venlafaxine í 225mg'
                          }
                        ]
                      },
                      {
                        display: 'Duloxetine',
                        subOptions: [
                          {
                            display: '60mg',
                            output: 'Aukum Duloxetine í 60mg'
                          },
                          {
                            display: '90mg',
                            output: 'Aukum Duloxetine í 90mg'
                          }
                        ]
                      },
                      {
                        display: 'Desvenlafaxine',
                        subOptions: [
                          {
                            display: '75mg',
                            output: 'Aukum Desvenlafaxine í 75mg'
                          },
                          {
                            display: '100mg',
                            output: 'Aukum Desvenlafaxine í 100mg'
                          }
                        ]
                      },
                      {
                        display: 'Levomilnacipran',
                        subOptions: [
                          {
                            display: '40mg',
                            output: 'Aukum Levomilnacipran í 40mg'
                          },
                          {
                            display: '80mg',
                            output: 'Aukum Levomilnacipran í 80mg'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    display: 'Bupropion',
                    subOptions: [
                      {
                        display: '300mg',
                        output: 'Aukum Bupropion í 300mg'
                      }
                    ]
                  },
                  {
                    display: 'Mirtazapine',
                    subOptions: [
                      {
                        display: '30mg',
                        output: 'Aukum Mirtazapine í 30mg'
                      },
                      {
                        display: '45mg',
                        output: 'Aukum Mirtazapine í 45mg'
                      }
                    ]
                  },
                  {
                    display: 'TCA',
                    subOptions: [
                      {
                        display: 'Amitriptyline',
                        subOptions: [
                          {
                            display: '50mg',
                            output: 'Aukum Amitriptyline í 50mg'
                          },
                          {
                            display: '75mg',
                            output: 'Aukum Amitriptyline í 75mg'
                          }
                        ]
                      },
                      {
                        display: 'Nortriptyline',
                        subOptions: [
                          {
                            display: '50mg',
                            output: 'Aukum Nortriptyline í 50mg'
                          },
                          {
                            display: '75mg',
                            output: 'Aukum Nortriptyline í 75mg'
                          }
                        ]
                      },
                      {
                        display: 'Imipramine',
                        subOptions: [
                          {
                            display: '50mg',
                            output: 'Aukum Imipramine í 50mg'
                          },
                          {
                            display: '75mg',
                            output: 'Aukum Imipramine í 75mg'
                          }
                        ]
                      },
                      {
                        display: 'Clomipramine',
                        subOptions: [
                          {
                            display: '50mg',
                            output: 'Aukum Clomipramine í 50mg'
                          },
                          {
                            display: '75mg',
                            output: 'Aukum Clomipramine í 75mg'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    display: 'MAOIs',
                    subOptions: [
                      {
                        display: 'Phenelzine',
                        output: 'Aukum Phenelzine'
                      },
                      {
                        display: 'Tranylcypromine',
                        output: 'Aukum Tranylcypromine'
                      },
                      {
                        display: 'Isocarboxazid',
                        output: 'Aukum Isocarboxazid'
                      },
                      {
                        display: 'Selegiline',
                        output: 'Aukum Selegiline'
                      }
                    ]
                  }
                ]
              },
              {
                display: 'Lækka meðferð',
                subOptions: [
                  {
                    display: 'SSRI',
                    subOptions: [
                      {
                        display: 'Sertraline',
                        subOptions: [
                          {
                            display: '25mg',
                            output: 'Lækkum Sertraline í 25mg'
                          },
                          {
                            display: '50mg',
                            output: 'Lækkum Sertraline í 50mg'
                          },
                          {
                            display: '100mg',
                            output: 'Lækkum Sertraline í 100mg'
                          },
                          {
                            display: '150mg',
                            output: 'Lækkum Sertraline í 150mg'
                          }
                        ]
                      },
                      {
                        display: 'Escitalopram',
                        subOptions: [
                          {
                            display: '5mg',
                            output: 'Lækkum Escitalopram í 5mg'
                          },
                          {
                            display: '10mg',
                            output: 'Lækkum Escitalopram í 10mg'
                          }
                        ]
                      },
                      {
                        display: 'Citalopram',
                        subOptions: [
                          {
                            display: '10mg',
                            output: 'Lækkum Citalopram í 10mg'
                          },
                          {
                            display: '20mg',
                            output: 'Lækkum Citalopram í 20mg'
                          }
                        ]
                      },
                      {
                        display: 'Fluoxetine',
                        subOptions: [
                          {
                            display: '10mg',
                            output: 'Lækkum Fluoxetine í 10mg'
                          },
                          {
                            display: '20mg',
                            output: 'Lækkum Fluoxetine í 20mg'
                          }
                        ]
                      },
                      {
                        display: 'Paroxetine',
                        subOptions: [
                          {
                            display: '10mg',
                            output: 'Lækkum Paroxetine í 10mg'
                          },
                          {
                            display: '20mg',
                            output: 'Lækkum Paroxetine í 20mg'
                          }
                        ]
                      },
                      {
                        display: 'Fluvoxamine',
                        subOptions: [
                          {
                            display: '50mg',
                            output: 'Lækkum Fluvoxamine í 50mg'
                          },
                          {
                            display: '100mg',
                            output: 'Lækkum Fluvoxamine í 100mg'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    display: 'SNRI',
                    subOptions: [
                      {
                        display: 'Venlafaxine',
                        subOptions: [
                          {
                            display: '37.5mg',
                            output: 'Lækkum Venlafaxine í 37.5mg'
                          },
                          {
                            display: '75mg',
                            output: 'Lækkum Venlafaxine í 75mg'
                          }
                        ]
                      },
                      {
                        display: 'Duloxetine',
                        subOptions: [
                          {
                            display: '30mg',
                            output: 'Lækkum Duloxetine í 30mg'
                          },
                          {
                            display: '60mg',
                            output: 'Lækkum Duloxetine í 60mg'
                          }
                        ]
                      },
                      {
                        display: 'Desvenlafaxine',
                        subOptions: [
                          {
                            display: '50mg',
                            output: 'Lækkum Desvenlafaxine í 50mg'
                          },
                          {
                            display: '100mg',
                            output: 'Lækkum Desvenlafaxine í 100mg'
                          }
                        ]
                      },
                      {
                        display: 'Levomilnacipran',
                        subOptions: [
                          {
                            display: '20mg',
                            output: 'Lækkum Levomilnacipran í 20mg'
                          },
                          {
                            display: '40mg',
                            output: 'Lækkum Levomilnacipran í 40mg'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    display: 'Bupropion',
                    subOptions: [
                      {
                        display: '150mg',
                        output: 'Lækkum Bupropion í 150mg'
                      }
                    ]
                  },
                  {
                    display: 'Mirtazapine',
                    subOptions: [
                      {
                        display: '15mg',
                        output: 'Lækkum Mirtazapine í 15mg'
                      },
                      {
                        display: '30mg',
                        output: 'Lækkum Mirtazapine í 30mg'
                      }
                    ]
                  },
                  {
                    display: 'TCA',
                    subOptions: [
                      {
                        display: 'Amitriptyline',
                        subOptions: [
                          {
                            display: '25mg',
                            output: 'Lækkum Amitriptyline í 25mg'
                          },
                          {
                            display: '50mg',
                            output: 'Lækkum Amitriptyline í 50mg'
                          }
                        ]
                      },
                      {
                        display: 'Nortriptyline',
                        subOptions: [
                          {
                            display: '25mg',
                            output: 'Lækkum Nortriptyline í 25mg'
                          },
                          {
                            display: '50mg',
                            output: 'Lækkum Nortriptyline í 50mg'
                          }
                        ]
                      },
                      {
                        display: 'Imipramine',
                        subOptions: [
                          {
                            display: '25mg',
                            output: 'Lækkum Imipramine í 25mg'
                          },
                          {
                            display: '50mg',
                            output: 'Lækkum Imipramine í 50mg'
                          }
                        ]
                      },
                      {
                        display: 'Clomipramine',
                        subOptions: [
                          {
                            display: '25mg',
                            output: 'Lækkum Clomipramine í 25mg'
                          },
                          {
                            display: '50mg',
                            output: 'Lækkum Clomipramine í 50mg'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    display: 'MAOIs',
                    subOptions: [
                      {
                        display: 'Phenelzine',
                        output: 'Lækkum Phenelzine'
                      },
                      {
                        display: 'Tranylcypromine',
                        output: 'Lækkum Tranylcypromine'
                      },
                      {
                        display: 'Isocarboxazid',
                        output: 'Lækkum Isocarboxazid'
                      },
                      {
                        display: 'Selegiline',
                        output: 'Lækkum Selegiline'
                      }
                    ]
                  }
                ]
              },
              {
                display: 'Niðurtröppun',
                subOptions: [
                  {
                    display: 'SSRI',
                    subOptions: [
                      {
                        display: 'NOS',
                        output: 'Fær ráðleggingar við niðurtröppun SSRI lyfja'
                      },
                      {
                        display: 'Sertraline',
                        output: 'Fær ráðleggingar við að trappa út Sertraline'
                      },
                      {
                        display: 'Escitalopram',
                        output: 'Fær ráðleggingar við að trappa út Escitalopram'
                      },
                      {
                        display: 'Citalopram',
                        output: 'Fær ráðleggingar við að trappa út Citalopram'
                      },
                      {
                        display: 'Fluoxetine',
                        output: 'Fær ráðleggingar við að trappa út Fluoxetine'
                      },
                      {
                        display: 'Paroxetine',
                        output: 'Fær ráðleggingar við að trappa út Paroxetine'
                      },
                      {
                        display: 'Fluvoxamine',
                        output: 'Fær ráðleggingar við að trappa út Fluvoxamine'
                      }
                    ]
                  },
                  {
                    display: 'SNRI',
                    subOptions: [
                      {
                        display: 'NOS',
                        output: 'Fær ráðleggingar við niðurtröppun SNRI lyfja'
                      },
                      {
                        display: 'Venlafaxine',
                        output: 'Fær ráðleggingar við að trappa út Venlafaxine'
                      },
                      {
                        display: 'Duloxetine',
                        output: 'Fær ráðleggingar við að trappa út Duloxetine'
                      },
                      {
                        display: 'Desvenlafaxine',
                        output: 'Fær ráðleggingar við að trappa út Desvenlafaxine'
                      },
                      {
                        display: 'Levomilnacipran',
                        output: 'Fær ráðleggingar við að trappa út Levomilnacipran'
                      }
                    ]
                  },
                  {
                    display: 'Bupropion',
                    output: 'Fær ráðleggingar við að trappa út Bupropion'
                  },
                  {
                    display: 'Mirtazapine',
                    output: 'Fær ráðleggingar við að trappa út Mirtazapine'
                  },
                  {
                    display: 'TCA',
                    subOptions: [
                      {
                        display: 'NOS',
                        output: 'Fær ráðleggingar við niðurtröppun TCA lyfja'
                      },
                      {
                        display: 'Amitriptyline',
                        output: 'Fær ráðleggingar við að trappa út Amitriptyline'
                      },
                      {
                        display: 'Nortriptyline',
                        output: 'Fær ráðleggingar við að trappa út Nortriptyline'
                      },
                      {
                        display: 'Imipramine',
                        output: 'Fær ráðleggingar við að trappa út Imipramine'
                      },
                      {
                        display: 'Clomipramine',
                        output: 'Fær ráðleggingar við að trappa út Clomipramine'
                      }
                    ]
                  },
                  {
                    display: 'MAOIs',
                    subOptions: [
                      {
                        display: 'NOS',
                        output: 'Fær ráðleggingar við niðurtröppun MAOIs lyfja'
                      },
                      {
                        display: 'Phenelzine',
                        output: 'Fær ráðleggingar við að trappa út Phenelzine'
                      },
                      {
                        display: 'Tranylcypromine',
                        output: 'Fær ráðleggingar við að trappa út Tranylcypromine'
                      },
                      {
                        display: 'Isocarboxazid',
                        output: 'Fær ráðleggingar við að trappa út Isocarboxazid'
                      },
                      {
                        display: 'Selegiline',
                        output: 'Fær ráðleggingar við að trappa út Selegiline'
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            display: 'Svefnlyf',
            subOptions: [
              {
                display: 'Hefja meðferð',
                subOptions: [
                  {
                    display: 'Phenergan',
                    subOptions: [
                      {
                        display: '10mg',
                        output: 'Reynum Phenergan 10mg að kvöldi'
                      },
                      {
                        display: '25mg',
                        output: 'Reynum Phenergan 25mg að kvöldi'
                      }
                    ]
                  },
                  {
                    display: 'Atarax',
                    subOptions: [
                      {
                        display: '10mg',
                        output: 'Reynum Atarax 10mg að kvöldi'
                      },
                      {
                        display: '25mg',
                        output: 'Reynum Atarax 25mg að kvöldi'
                      }
                    ]
                  },
                  {
                    display: 'Quetiapine',
                    subOptions: [
                      {
                        display: '25mg',
                        output: 'Reynum Quetiapine 25mg að kvöldi'
                      },
                      {
                        display: '50mg',
                        output: 'Reynum Quetiapine 50mg að kvöldi'
                      }
                    ]
                  },
                  {
                    display: 'Melatonin',
                    subOptions: [
                      {
                        display: '3mg',
                        output: 'Reynum Melatonin 3mg að kvöldi'
                      },
                      {
                        display: '5mg',
                        output: 'Reynum Melatonin 5mg að kvöldi'
                      }
                    ]
                  },
                  {
                    display: 'Gabapentin',
                    subOptions: [
                      {
                        display: '100mg',
                        output: 'Reynum Gabapentin 100mg að kvöldi'
                      },
                      {
                        display: '300mg',
                        output: 'Reynum Gabapentin 300mg að kvöldi'
                      }
                    ]
                  },
                  {
                    display: 'Orfenadrin+paracetamol (Norgesic)',
                    subOptions: [
                      {
                        display: '35mg+450mg',
                        output: 'Reynum Orfenadrin+paracetamol (Norgesic) 35mg+450mg að kvöldi'
                      }
                    ]
                  },
                  {
                    display: 'Amitryptiline',
                    subOptions: [
                      {
                        display: '10mg',
                        output: 'Reynum Amitryptiline 10mg að kvöldi'
                      },
                      {
                        display: '25mg',
                        output: 'Reynum Amitryptiline 25mg að kvöldi'
                      }
                    ]
                  },
                  {
                    display: 'Zopiclone (Imovane)',
                    subOptions: [
                      {
                        display: '3.75mg',
                        output: 'Reynum Zopiclone (Imovane) 3.75mg að kvöldi'
                      },
                      {
                        display: '7.5mg',
                        output: 'Reynum Zopiclone (Imovane) 7.5mg að kvöldi'
                      }
                    ]
                  },
                  {
                    display: 'Zolpidem (Stilnoct)',
                    subOptions: [
                      {
                        display: '5mg',
                        output: 'Reynum Zolpidem (Stilnoct) 5mg að kvöldi'
                      },
                      {
                        display: '10mg',
                        output: 'Reynum Zolpidem (Stilnoct) 10mg að kvöldi'
                      }
                    ]
                  }
                ]
              },
              {
                display: 'Bæta við',
                subOptions: [
                  {
                    display: 'Phenergan',
                    subOptions: [
                      {
                        display: '10mg',
                        output: 'Prófum að bæta við Phenergan 10mg að kvöldi'
                      },
                      {
                        display: '25mg',
                        output: 'Prófum að bæta við Phenergan 25mg að kvöldi'
                      }
                    ]
                  },
                  {
                    display: 'Atarax',
                    subOptions: [
                      {
                        display: '10mg',
                        output: 'Prófum að bæta við Atarax 10mg að kvöldi'
                      },
                      {
                        display: '25mg',
                        output: 'Prófum að bæta við Atarax 25mg að kvöldi'
                      }
                    ]
                  },
                  {
                    display: 'Quetiapine',
                    subOptions: [
                      {
                        display: '25mg',
                        output: 'Prófum að bæta við Quetiapine 25mg að kvöldi'
                      },
                      {
                        display: '50mg',
                        output: 'Prófum að bæta við Quetiapine 50mg að kvöldi'
                      }
                    ]
                  },
                  {
                    display: 'Melatonin',
                    subOptions: [
                      {
                        display: '3mg',
                        output: 'Prófum að bæta við Melatonin 3mg að kvöldi'
                      },
                      {
                        display: '5mg',
                        output: 'Prófum að bæta við Melatonin 5mg að kvöldi'
                      }
                    ]
                  },
                  {
                    display: 'Gabapentin',
                    subOptions: [
                      {
                        display: '100mg',
                        output: 'Prófum að bæta við Gabapentin 100mg að kvöldi'
                      },
                      {
                        display: '300mg',
                        output: 'Prófum að bæta við Gabapentin 300mg að kvöldi'
                      }
                    ]
                  },
                  {
                    display: 'Orfenadrin+paracetamol (Norgesic)',
                    subOptions: [
                      {
                        display: '35mg+450mg',
                        output: 'Prófum að bæta við Orfenadrin+paracetamol (Norgesic) 35mg+450mg að kvöldi'
                      }
                    ]
                  },
                  {
                    display: 'Amitryptiline',
                    subOptions: [
                      {
                        display: '10mg',
                        output: 'Prófum að bæta við Amitryptiline 10mg að kvöldi'
                      },
                      {
                        display: '25mg',
                        output: 'Prófum að bæta við Amitryptiline 25mg að kvöldi'
                      }
                    ]
                  },
                  {
                    display: 'Zopiclone (Imovane)',
                    subOptions: [
                      {
                        display: '3.75mg',
                        output: 'Prófum að bæta við Zopiclone (Imovane) 3.75mg að kvöldi'
                      },
                      {
                        display: '7.5mg',
                        output: 'Prófum að bæta við Zopiclone (Imovane) 7.5mg að kvöldi'
                      }
                    ]
                  },
                  {
                    display: 'Zolpidem (Stilnoct)',
                    subOptions: [
                      {
                        display: '5mg',
                        output: 'Prófum að bæta við Zolpidem (Stilnoct) 5mg að kvöldi'
                      },
                      {
                        display: '10mg',
                        output: 'Prófum að bæta við Zolpidem (Stilnoct) 10mg að kvöldi'
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
      
,    
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
                    {
                        display: 'Bókar sjálfur',
                        subOptions: [
                            { display: 'Símatíma', output: 'Pantar sér símatíma til að fá niðurstöður' },
                            { display: 'Viðtalstíma', output: 'Pantar sér viðtalstíma í framhaldi' },
                            { display: 'Sinni heilsugæslu', output: 'Eftirfylgd á sinni heilsugæslu' }
                        ]
                    },
                    {
                        display: 'Gef tíma í endurkomu',
                        subOptions: [
                            { display: 'Símatíma',
                                subOptions: [
                                    {display: 'NOS', output: 'Fær símatíma til eftirfylgdar'},
                                    {display: 'Eftir 4 vikur', output: 'Fær símatíma eftir 4 vikur til eftirfylgdar'}
                                ]
                            },
                            { display: 'Viðtalstíma',
                                subOptions: [
                                    {display: 'NOS', output: 'Fær nýjan tíma til eftirfylgdar'},
                                    {display: 'Tvöfaldan', output: 'Fær tvöfaldan endurkomutíma'},
                                    {display: 'Eftir 4 vikur', output: 'Fær nýjan tíma eftir 4 vikur til eftirfylgdar'}
                                ]
                            }
                            
                        ]
                    }
                ]
            }

        ]
    }
];
const SIGECAPS = [
    {
        name: '',
        type: 'options',
        display: ['Svefn', 'Áhugi', 'Sektarkennd', 'Orka'],
        options: [
            {
                display: 'Svefn',
                subOptions: [
                    {
                        display: 'NOS',
                        output: 'Svefn í ólagi'
                    },
                    {
                        display: 'Aukinn',
                        output: 'Lýsir svefntruflunum. Sefur meira en áður'
                    },
                    {
                        display: 'Minnkaður',
                        output: 'Lýsir svefntruflunum. Sefur minna en áður'
                    }
                ],
                onRightClickOutput: 'Svefn í lagi'
            },
            {
                display: 'Áhugi',
                output: 'Lýsir áhugaleysi. Sinnir verr áhugamálum en áður',
                onRightClickOutput: 'Neitar áhugaleysi. Sinnir sínum áhugamálum'
            },
            {
                display: 'Sektarkennd',
                subOptions: [
                    {
                        display: 'NOS',
                        output: 'Finnur til aukinnar sektarkenndar'
                    },
                    {
                        display: 'Gagnvart fjölskyldu',
                        output: 'Finnur til sektarkenndar gagnvart fjölskyldu'
                    },
                    {
                        display: 'Gagnvart maka',
                        output: 'Finnur til sektarkenndar gagnvart maka'
                    },
                    {
                        display: 'Gagnvart börnum',
                        output: 'Finnur til sektarkenndar gagnvart börnum'
                    }
                ],
                onRightClickOutput: 'Ekki aukin sektarkennd'
            },
            {
                display: 'Orka',
                output: 'Orkuleysi',
                onRightClickOutput: 'Neitar orkuleysi'
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Einbeiting', 'Matarlyst', 'Psykomotor', 'Sjálfsvígshugsanir'],
        options: [
            {
                display: 'Einbeiting',
                output: 'Lýsir einbeitingarerfiðleikum',
                onRightClickOutput: 'Einbeiting í lagi'
            },
            {
                display: 'Matarlyst',
                subOptions: [
                    {
                        display: 'NOS',
                        output: 'Breytingar á matarlyst'
                    },
                    {
                        display: 'Aukin',
                        output: 'Lýsir aukinni matarlyst'
                    },
                    {
                        display: 'Minnkuð',
                        output: 'Lýsir minnkaðri matarlyst'
                    }
                ],
                onRightClickOutput: 'Matarlyst í lagi'
            },
            {
                display: 'Psykomotor',
                output: 'Grunur um psykomotor retardation. Segir fólk hafa tjáð sér að hreyfi sig mjög hægt',
                onRightClickOutput: 'Ekki grunur um psykomotor retardation'
            },
            {
                display: 'Sjálfsvígshugsanir',
                output: 'Lýsir sjálfsvígshugsunum',
                onRightClickOutput: 'Neitar sjálfsvígshugsunum'
            }
        ]
    }
    
];


// Tauga (Neurological)
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

// Innkirtla (Endocrine)
const SymptomsInnkirtla = [
    {
        name: '',
        type: 'options',
        display: ['Tímalengd einkenna'],
        options: [
            {
                display: 'Tímalengd einkenna',
                subOptions: [
                    { display: 'Nokkra daga', output: 'Nokkra daga saga' },
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
        display: ['Eftirlit', 'Sykurstjórnun'],
        options: [
            {
                display: 'Eftirlit',
                subOptions: [
                    { display: 'Sykursýkiseftirlit', output: 'Kemur í sykursýkiseftirlit' },
                    { display: 'Skjaldkirtilseftirlit', output: 'Eftirfylgd með skjaldkirtli' }
                ]
            },
            {
                "display": "Sykurstjórnun",
                "subOptions": [
                    {
                        "display": "Góð",
                        "subOptions": [
                            {
                                "display": "31-40 mmol/mol",
                                "subOptions": Array.from({ length: 10 }, (_, i) => {
                                    const mmol = 31 + i;
                                    const percent = (mmol === 31 ? 5.0 : mmol === 32 ? 5.1 : mmol === 33 ? 5.2 : mmol === 34 ? 5.3 : mmol === 36 ? 5.4 : mmol === 37 ? 5.5 : mmol === 38 ? 5.6 : mmol === 39 ? 5.7 : mmol === 40 ? 5.8 : 0).toFixed(1).replace('.', ',');
                                    return {
                                        display: `${mmol} mmol/mol (${percent}%)`,
                                        output: `Góð sykurstjórnun. Seinasta HbA1c ${mmol} mmol/mol (${percent}%).`
                                    };
                                })
                            },
                            {
                                "display": "41-50 mmol/mol",
                                "subOptions": Array.from({ length: 10 }, (_, i) => {
                                    const mmol = 41 + i;
                                    const percent = (mmol === 41 ? 5.9 : mmol === 42 ? 6.0 : mmol === 43 ? 6.1 : mmol === 44 ? 6.2 : mmol === 45 ? 6.3 : mmol === 46 ? 6.4 : mmol === 47 ? 6.5 : mmol === 48 ? 6.6 : mmol === 49 ? 6.7 : mmol === 50 ? 6.8 : 0).toFixed(1).replace('.', ',');
                                    return {
                                        display: `${mmol} mmol/mol (${percent}%)`,
                                        output: `Góð sykurstjórnun. Seinasta HbA1c ${mmol} mmol/mol (${percent}%).`
                                    };
                                })
                            },
                            {
                                "display": "51-53 mmol/mol",
                                "subOptions": Array.from({ length: 3 }, (_, i) => {
                                    const mmol = 51 + i;
                                    const percent = (mmol === 51 ? 6.9 : mmol === 52 ? 7.0 : mmol === 53 ? 7.0 : 0).toFixed(1).replace('.', ',');
                                    return {
                                        display: `${mmol} mmol/mol (${percent}%)`,
                                        output: `Góð sykurstjórnun. Seinasta HbA1c ${mmol} mmol/mol (${percent}%).`
                                    };
                                })
                            }
                        ]
                    },
                    {
                        "display": "Í lagi",
                        "subOptions": [
                            {
                                "display": "54-58 mmol/mol",
                                "subOptions": Array.from({ length: 5 }, (_, i) => {
                                    const mmol = 54 + i;
                                    const percent = (mmol === 54 ? 7.1 : mmol === 55 ? 7.2 : mmol === 56 ? 7.3 : mmol === 57 ? 7.4 : mmol === 58 ? 7.5 : 0).toFixed(1).replace('.', ',');
                                    return {
                                        display: `${mmol} mmol/mol (${percent}%)`,
                                        output: `Í lagi sykurstjórnun. Seinasta HbA1c ${mmol} mmol/mol (${percent}%)`
                                    };
                                })
                            }
                        ]
                    },
                    {
                        "display": "Ekki nægilega góð",
                        "subOptions": [
                            {
                                "display": "60-69 mmol/mol",
                                "subOptions": Array.from({ length: 10 }, (_, i) => {
                                    const mmol = 60 + i;
                                    const percent = (mmol === 60 ? 7.6 : mmol === 61 ? 7.7 : mmol === 62 ? 7.8 : mmol === 63 ? 7.9 : mmol === 64 ? 8.0 : mmol === 65 ? 8.1 : mmol === 66 ? 8.2 : mmol === 67 ? 8.3 : mmol === 68 ? 8.4 : mmol === 69 ? 8.5 : 0).toFixed(1).replace('.', ',');
                                    return {
                                        display: `${mmol} mmol/mol (${percent}%)`,
                                        output: `Ekki nægilega góð sykurstjórnun. Seinasta HbA1c ${mmol} mmol/mol (${percent}%)`
                                    };
                                })
                            }
                        ]
                    },
                    {
                        "display": "Léleg",
                        "subOptions": [
                            {
                                "display": "70-80 mmol/mol",
                                "subOptions": Array.from({ length: 11 }, (_, i) => {
                                    const mmol = 70 + i;
                                    const percent = (mmol === 70 ? 8.6 : mmol === 71 ? 8.7 : mmol === 72 ? 8.8 : mmol === 74 ? 8.9 : mmol === 75 ? 9.0 : mmol === 76 ? 9.1 : mmol === 77 ? 9.2 : mmol === 78 ? 9.3 : mmol === 79 ? 9.4 : mmol === 80 ? 9.5 : 0).toFixed(1).replace('.', ',');
                                    return {
                                        display: `${mmol} mmol/mol (${percent}%)`,
                                        output: `Léleg sykurstjórnun. Seinasta HbA1c ${mmol} mmol/mol (${percent}%)`
                                    };
                                })
                            },
                            {
                                "display": "81-90 mmol/mol",
                                "subOptions": Array.from({ length: 10 }, (_, i) => {
                                    const mmol = 81 + i;
                                    const percent = (mmol === 81 ? 9.6 : mmol === 83 ? 9.7 : mmol === 84 ? 9.8 : mmol === 85 ? 9.9 : mmol === 86 ? 10.0 : mmol === 87 ? 10.1 : mmol === 88 ? 10.2 : mmol === 89 ? 10.3 : mmol === 90 ? 10.4 : 0).toFixed(1).replace('.', ',');
                                    return {
                                        display: `${mmol} mmol/mol (${percent}%)`,
                                        output: `Léleg sykurstjórnun. Seinasta HbA1c ${mmol} mmol/mol (${percent}%)`
                                    };
                                })
                            },
                            {
                                "display": "91-100 mmol/mol",
                                "subOptions": Array.from({ length: 10 }, (_, i) => {
                                    const mmol = 91 + i;
                                    const percent = (mmol === 91 ? 10.5 : mmol === 92 ? 10.6 : mmol === 93 ? 10.7 : mmol === 94 ? 10.8 : mmol === 95 ? 10.9 : mmol === 96 ? 11.0 : mmol === 97 ? 11.1 : mmol === 98 ? 11.2 : mmol === 99 ? 11.3 : mmol === 100 ? 11.4 : 0).toFixed(1).replace('.', ',');
                                    return {
                                        display: `${mmol} mmol/mol (${percent}%)`,
                                        output: `Léleg sykurstjórnun. Seinasta HbA1c ${mmol} mmol/mol (${percent}%)`
                                    };
                                })
                            },
                            {
                                "display": "101-110 mmol/mol",
                                "subOptions": Array.from({ length: 10 }, (_, i) => {
                                    const mmol = 101 + i;
                                    const percent = (mmol === 101 ? 11.5 : mmol === 103 ? 11.6 : mmol === 104 ? 11.7 : mmol === 106 ? 11.8 : mmol === 107 ? 11.9 : mmol === 108 ? 12.0 : mmol === 109 ? 12.1 : mmol === 110 ? 12.2 : 0).toFixed(1).replace('.', ',');
                                    return {
                                        display: `${mmol} mmol/mol (${percent}%)`,
                                        output: `Léleg sykurstjórnun. Seinasta HbA1c ${mmol} mmol/mol (${percent}%)`
                                    };
                                })
                            },
                            {
                                "display": "111-120 mmol/mol",
                                "subOptions": Array.from({ length: 10 }, (_, i) => {
                                    const mmol = 111 + i;
                                    const percent = (mmol === 111 ? 12.3 : mmol === 112 ? 12.4 : mmol === 113 ? 12.5 : mmol === 114 ? 12.6 : mmol === 115 ? 12.7 : mmol === 116 ? 12.8 : mmol === 117 ? 12.9 : mmol === 119 ? 13.0 : mmol === 120 ? 13.1 : 0).toFixed(1).replace('.', ',');
                                    return {
                                        display: `${mmol} mmol/mol (${percent}%)`,
                                        output: `Léleg sykurstjórnun. Seinasta HbA1c ${mmol} mmol/mol (${percent}%)`
                                    };
                                })
                            },
                            {
                                "display": "121-131 mmol/mol",
                                "subOptions": Array.from({ length: 11 }, (_, i) => {
                                    const mmol = 121 + i;
                                    const percent = (mmol === 121 ? 13.2 : mmol === 122 ? 13.3 : mmol === 123 ? 13.4 : mmol === 125 ? 13.5 : mmol === 126 ? 13.6 : mmol === 127 ? 13.7 : mmol === 128 ? 13.8 : mmol === 130 ? 13.9 : mmol === 131 ? 14.0 : 0).toFixed(1).replace('.', ',');
                                    return {
                                        display: `${mmol} mmol/mol (${percent}%)`,
                                        output: `Léleg sykurstjórnun. Seinasta HbA1c ${mmol} mmol/mol (${percent}%)`
                                    };
                                })
                            }
                        ]
                    }
                ]
            }
        ]
    },    
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
    },
    {
        name: '',
        type: 'options',
        display: ['Blóðprufa'],
        options: [
            {
                display: 'Blóðprufa',
                subOptions: [
                    {
                        display: 'HbA1c',
                        subOptions: [
                            {
                                display: '20-30 mmol/L (4-6%)',
                                subOptions: Array.from({ length: 11 }, (_, i) => ({
                                    display: `${20 + i} mmol/L (4.${i}%)`,
                                    output: `HbA1c ${20 + i} mmol/L (4.${i}%)`
                                }))
                            },
                            {
                                display: '31-40 mmol/L (6-8%)',
                                subOptions: Array.from({ length: 10 }, (_, i) => ({
                                    display: `${31 + i} mmol/L (6.${i}%)`,
                                    output: `HbA1c ${31 + i} mmol/L (6.${i}%)`
                                }))
                            },
                            {
                                display: '41-50 mmol/L (8-10%)',
                                subOptions: Array.from({ length: 10 }, (_, i) => ({
                                    display: `${41 + i} mmol/L (8.${i}%)`,
                                    output: `HbA1c ${41 + i} mmol/L (8.${i}%)`
                                }))
                            },
                            {
                                display: '51-60 mmol/L (10-12%)',
                                subOptions: Array.from({ length: 10 }, (_, i) => ({
                                    display: `${51 + i} mmol/L (10.${i}%)`,
                                    output: `HbA1c ${51 + i} mmol/L (10.${i}%)`
                                }))
                            },
                            {
                                display: '61-70 mmol/L (12-14%)',
                                subOptions: Array.from({ length: 10 }, (_, i) => ({
                                    display: `${61 + i} mmol/L (12.${i}%)`,
                                    output: `HbA1c ${61 + i} mmol/L (12.${i}%)`
                                }))
                            },
                            {
                                display: '71-80 mmol/L (14-16%)',
                                subOptions: Array.from({ length: 10 }, (_, i) => ({
                                    display: `${71 + i} mmol/L (14.${i}%)`,
                                    output: `HbA1c ${71 + i} mmol/L (14.${i}%)`
                                }))
                            },
                            {
                                display: '81-90 mmol/L (16-18%)',
                                subOptions: Array.from({ length: 10 }, (_, i) => ({
                                    display: `${81 + i} mmol/L (16.${i}%)`,
                                    output: `HbA1c ${81 + i} mmol/L (16.${i}%)`
                                }))
                            },
                            {
                                display: '91-100 mmol/L (18-20%)',
                                subOptions: Array.from({ length: 10 }, (_, i) => ({
                                    display: `${91 + i} mmol/L (18.${i}%)`,
                                    output: `HbA1c ${91 + i} mmol/L (18.${i}%)`
                                }))
                            },
                            {
                                display: '101-110 mmol/L (20-22%)',
                                subOptions: Array.from({ length: 10 }, (_, i) => ({
                                    display: `${101 + i} mmol/L (20.${i}%)`,
                                    output: `HbA1c ${101 + i} mmol/L (20.${i}%)`
                                }))
                            },
                            {
                                display: '111-120 mmol/L (22-24%)',
                                subOptions: Array.from({ length: 10 }, (_, i) => ({
                                    display: `${111 + i} mmol/L (22.${i}%)`,
                                    output: `HbA1c ${111 + i} mmol/L (22.${i}%)`
                                }))
                            }
                        ]
                    },
                    {
                        display: 'T3',
                        subOptions: [
                            {
                                display: '0-10 pmol/L',
                                subOptions: Array.from({ length: 11 }, (_, i) => ({
                                    display: `${0 + i} pmol/L`,
                                    output: `T3 ${0 + i} pmol/L`
                                }))
                            },
                            {
                                display: '11-20 pmol/L',
                                subOptions: Array.from({ length: 10 }, (_, i) => ({
                                    display: `${11 + i} pmol/L`,
                                    output: `T3 ${11 + i} pmol/L`
                                }))
                            },
                            {
                                display: '21-30 pmol/L',
                                subOptions: Array.from({ length: 10 }, (_, i) => ({
                                    display: `${21 + i} pmol/L`,
                                    output: `T3 ${21 + i} pmol/L`
                                }))
                            }
                        ]
                    },
                    {
                        display: 'T4',
                        subOptions: [
                            {
                                display: '0-10 pmol/L',
                                subOptions: Array.from({ length: 11 }, (_, i) => ({
                                    display: `${0 + i} pmol/L`,
                                    output: `T4 ${0 + i} pmol/L`
                                }))
                            },
                            {
                                display: '11-20 pmol/L',
                                subOptions: Array.from({ length: 10 }, (_, i) => ({
                                    display: `${11 + i} pmol/L`,
                                    output: `T4 ${11 + i} pmol/L`
                                }))
                            },
                            {
                                display: '21-30 pmol/L',
                                subOptions: Array.from({ length: 10 }, (_, i) => ({
                                    display: `${21 + i} pmol/L`,
                                    output: `T4 ${21 + i} pmol/L`
                                }))
                            },
                            {
                                display: '31-40 pmol/L',
                                subOptions: Array.from({ length: 10 }, (_, i) => ({
                                    display: `${31 + i} pmol/L`,
                                    output: `T4 ${31 + i} pmol/L`
                                }))
                            },
                            {
                                display: '41-50 pmol/L',
                                subOptions: Array.from({ length: 10 }, (_, i) => ({
                                    display: `${41 + i} pmol/L`,
                                    output: `T4 ${41 + i} pmol/L`
                                }))
                            }
                        ]
                    },
                    {
                        display: 'TSH',
                        subOptions: [
                            {
                                display: '0-10 mU/L',
                                subOptions: Array.from({ length: 11 }, (_, i) => ({
                                    display: `${0 + i} mU/L`,
                                    output: `TSH ${0 + i} mU/L`
                                }))
                            },
                            {
                                display: '11-20 mU/L',
                                subOptions: Array.from({ length: 10 }, (_, i) => ({
                                    display: `${11 + i} mU/L`,
                                    output: `TSH ${11 + i} mU/L`
                                }))
                            },
                            {
                                display: '21-30 mU/L',
                                subOptions: Array.from({ length: 10 }, (_, i) => ({
                                    display: `${21 + i} mU/L`,
                                    output: `TSH ${21 + i} mU/L`
                                }))
                            },
                            {
                                display: '31-40 mU/L',
                                subOptions: Array.from({ length: 10 }, (_, i) => ({
                                    display: `${31 + i} mU/L`,
                                    output: `TSH ${31 + i} mU/L`
                                }))
                            },
                            {
                                display: '41-50 mU/L',
                                subOptions: Array.from({ length: 10 }, (_, i) => ({
                                    display: `${41 + i} mU/L`,
                                    output: `TSH ${41 + i} mU/L`
                                }))
                            },
                            {
                                display: '51-60 mU/L',
                                subOptions: Array.from({ length: 10 }, (_, i) => ({
                                    display: `${51 + i} mU/L`,
                                    output: `TSH ${51 + i} mU/L`
                                }))
                            },
                            {
                                display: '61-70 mU/L',
                                subOptions: Array.from({ length: 10 }, (_, i) => ({
                                    display: `${61 + i} mU/L`,
                                    output: `TSH ${61 + i} mU/L`
                                }))
                            },
                            {
                                display: '71-80 mU/L',
                                subOptions: Array.from({ length: 10 }, (_, i) => ({
                                    display: `${71 + i} mU/L`,
                                    output: `TSH ${71 + i} mU/L`
                                }))
                            },
                            {
                                display: '81-90 mU/L',
                                subOptions: Array.from({ length: 10 }, (_, i) => ({
                                    display: `${81 + i} mU/L`,
                                    output: `TSH ${81 + i} mU/L`
                                }))
                            },
                            {
                                display: '91-100 mU/L',
                                subOptions: Array.from({ length: 10 }, (_, i) => ({
                                    display: `${91 + i} mU/L`,
                                    output: `TSH ${91 + i} mU/L`
                                }))
                            }
                        ]
                    }
                ]
            }
        ]
    }
    
];
const PlanInnkirtla = [
    {
        name: '',
        type: 'options',
        display: ['Sykursýki', 'Skjaldkirtill'],
        options: [
            {
                display: 'Sykursýki',
                subOptions: [
                    {
                        display: 'NOS',
                        output: 'Sykursýki'
                    },
                    {
                        display: 'Týpa 1',
                        subOptions: [
                            {
                                display: 'Greining',
                                output: 'Sykursýki týpa 1'
                            },
                            {
                                display: 'Grunur',
                                output: 'Grunur um sykursýki týpu 1'
                            }
                        ]
                    },
                    {
                        display: 'Týpa 2',
                        subOptions: [
                            {
                                display: 'Greining',
                                output: 'Sykursýki týpa 2'
                            },
                            {
                                display: 'Grunur',
                                output: 'Grunur um sykursýki týpu 2'
                            }
                        ]
                    }
                ]
            },
            {
                display: 'Skjaldkirtill',
                subOptions: [
                    {
                        display: 'NOS',
                        output: 'Skjaldkirtilssjúkdómur'
                    },
                    {
                        display: 'Hyperthyroidism',
                        subOptions: [
                            {
                                display: 'Greining',
                                output: 'Hyperthyroidism'
                            },
                            {
                                display: 'Grunur',
                                output: 'Grunur um hyperthyroidism'
                            }
                        ]
                    },
                    {
                        display: 'Hypothyroidism',
                        subOptions: [
                            {
                                display: 'Greining',
                                output: 'Hypothyroidism'
                            },
                            {
                                display: 'Grunur',
                                output: 'Grunur um hypothyroidism'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {},{},{},
    {
        name: '',
        type: 'options',
        display: ['Sykursýkislyf', 'Skjaldkirtilslyf'],
        options: [
            {
                display: 'Sykursýkislyf',
                subOptions: [
                    {
                        display: 'Metformin',
                        subOptions: [
                            {
                                display: 'NOS',
                                output: 'Metformin'
                            },
                            {
                                display: 'Hefjum meðferð',
                                subOptions: [
                                    {
                                        display: '500 mg',
                                        subOptions: [
                                            { display: '1 tafla einu sinni á dag', output: 'Hefjum meðferð með Metformin 500 mg, 1 tafla einu sinni á dag' },
                                            { display: '1 tafla tvisvar á dag', output: 'Hefjum meðferð með Metformin 500 mg, 1 tafla tvisvar á dag' },
                                            { display: '2 töflur tvisvar á dag', output: 'Hefjum meðferð með Metformin 500 mg, 2 töflur tvisvar á dag' },
                                            { display: '1 tafla þrisvar á dag', output: 'Hefjum meðferð með Metformin 500 mg, 1 tafla þrisvar á dag' }
                                        ]
                                    },
                                    {
                                        display: '850 mg',
                                        subOptions: [
                                            { display: '1 tafla einu sinni á dag', output: 'Hefjum meðferð með Metformin 850 mg, 1 tafla einu sinni á dag' },
                                            { display: '1 tafla tvisvar á dag', output: 'Hefjum meðferð með Metformin 850 mg, 1 tafla tvisvar á dag' },
                                            { display: '2 töflur tvisvar á dag', output: 'Hefjum meðferð með Metformin 850 mg, 2 töflur tvisvar á dag' },
                                            { display: '1 tafla þrisvar á dag', output: 'Hefjum meðferð með Metformin 850 mg, 1 tafla þrisvar á dag' }
                                        ]
                                    },
                                    {
                                        display: '1000 mg',
                                        subOptions: [
                                            { display: '1 tafla einu sinni á dag', output: 'Hefjum meðferð með Metformin 1000 mg, 1 tafla einu sinni á dag' },
                                            { display: '1 tafla tvisvar á dag', output: 'Hefjum meðferð með Metformin 1000 mg, 1 tafla tvisvar á dag' },
                                            { display: '2 töflur tvisvar á dag', output: 'Hefjum meðferð með Metformin 1000 mg, 2 töflur tvisvar á dag' },
                                            { display: '1 tafla þrisvar á dag', output: 'Hefjum meðferð með Metformin 1000 mg, 1 tafla þrisvar á dag' }
                                        ]
                                    }
                                ]
                            },
                            {
                                display: 'Viðbót',
                                subOptions: [
                                    {
                                        display: '500 mg',
                                        subOptions: [
                                            { display: '1 tafla einu sinni á dag', output: 'Bætum við Metformin 500 mg, 1 tafla einu sinni á dag' },
                                            { display: '1 tafla tvisvar á dag', output: 'Bætum við Metformin 500 mg, 1 tafla tvisvar á dag' },
                                            { display: '2 töflur tvisvar á dag', output: 'Bætum við Metformin 500 mg, 2 töflur tvisvar á dag' },
                                            { display: '1 tafla þrisvar á dag', output: 'Bætum við Metformin 500 mg, 1 tafla þrisvar á dag' }
                                        ]
                                    },
                                    {
                                        display: '850 mg',
                                        subOptions: [
                                            { display: '1 tafla einu sinni á dag', output: 'Bætum við Metformin 850 mg, 1 tafla einu sinni á dag' },
                                            { display: '1 tafla tvisvar á dag', output: 'Bætum við Metformin 850 mg, 1 tafla tvisvar á dag' },
                                            { display: '2 töflur tvisvar á dag', output: 'Bætum við Metformin 850 mg, 2 töflur tvisvar á dag' },
                                            { display: '1 tafla þrisvar á dag', output: 'Bætum við Metformin 850 mg, 1 tafla þrisvar á dag' }
                                        ]
                                    },
                                    {
                                        display: '1000 mg',
                                        subOptions: [
                                            { display: '1 tafla einu sinni á dag', output: 'Bætum við Metformin 1000 mg, 1 tafla einu sinni á dag' },
                                            { display: '1 tafla tvisvar á dag', output: 'Bætum við Metformin 1000 mg, 1 tafla tvisvar á dag' },
                                            { display: '2 töflur tvisvar á dag', output: 'Bætum við Metformin 1000 mg, 2 töflur tvisvar á dag' },
                                            { display: '1 tafla þrisvar á dag', output: 'Bætum við Metformin 1000 mg, 1 tafla þrisvar á dag' }
                                        ]
                                    }
                                ]
                            },
                            {
                                display: 'Aukum skammt',
                                subOptions: [
                                    {
                                        display: '500 mg',
                                        subOptions: [
                                            { display: '1 tafla einu sinni á dag', output: 'Aukum skammt af Metformin í 500 mg, 1 tafla einu sinni á dag' },
                                            { display: '1 tafla tvisvar á dag', output: 'Aukum skammt af Metformin í 500 mg, 1 tafla tvisvar á dag' },
                                            { display: '2 töflur tvisvar á dag', output: 'Aukum skammt af Metformin í 500 mg, 2 töflur tvisvar á dag' },
                                            { display: '1 tafla þrisvar á dag', output: 'Aukum skammt af Metformin í 500 mg, 1 tafla þrisvar á dag' }
                                        ]
                                    },
                                    {
                                        display: '850 mg',
                                        subOptions: [
                                            { display: '1 tafla einu sinni á dag', output: 'Aukum skammt af Metformin í 850 mg, 1 tafla einu sinni á dag' },
                                            { display: '1 tafla tvisvar á dag', output: 'Aukum skammt af Metformin í 850 mg, 1 tafla tvisvar á dag' },
                                            { display: '2 töflur tvisvar á dag', output: 'Aukum skammt af Metformin í 850 mg, 2 töflur tvisvar á dag' },
                                            { display: '1 tafla þrisvar á dag', output: 'Aukum skammt af Metformin í 850 mg, 1 tafla þrisvar á dag' }
                                        ]
                                    },
                                    {
                                        display: '1000 mg',
                                        subOptions: [
                                            { display: '1 tafla einu sinni á dag', output: 'Aukum skammt af Metformin í 1000 mg, 1 tafla einu sinni á dag' },
                                            { display: '1 tafla tvisvar á dag', output: 'Aukum skammt af Metformin í 1000 mg, 1 tafla tvisvar á dag' },
                                            { display: '2 töflur tvisvar á dag', output: 'Aukum skammt af Metformin í 1000 mg, 2 töflur tvisvar á dag' },
                                            { display: '1 tafla þrisvar á dag', output: 'Aukum skammt af Metformin í 1000 mg, 1 tafla þrisvar á dag' }
                                        ]
                                    }
                                ]
                            },
                            {
                                display: 'Lækka skammt',
                                subOptions: [
                                    {
                                        display: '500 mg',
                                        subOptions: [
                                            { display: '1 tafla einu sinni á dag', output: 'Lækkum skammt af Metformin í 500 mg, 1 tafla einu sinni á dag' },
                                            { display: '1 tafla tvisvar á dag', output: 'Lækkum skammt af Metformin í 500 mg, 1 tafla tvisvar á dag' },
                                            { display: '2 töflur tvisvar á dag', output: 'Lækkum skammt af Metformin í 500 mg, 2 töflur tvisvar á dag' },
                                            { display: '1 tafla þrisvar á dag', output: 'Lækkum skammt af Metformin í 500 mg, 1 tafla þrisvar á dag' }
                                        ]
                                    },
                                    {
                                        display: '850 mg',
                                        subOptions: [
                                            { display: '1 tafla einu sinni á dag', output: 'Lækkum skammt af Metformin í 850 mg, 1 tafla einu sinni á dag' },
                                            { display: '1 tafla tvisvar á dag', output: 'Lækkum skammt af Metformin í 850 mg, 1 tafla tvisvar á dag' },
                                            { display: '2 töflur tvisvar á dag', output: 'Lækkum skammt af Metformin í 850 mg, 2 töflur tvisvar á dag' },
                                            { display: '1 tafla þrisvar á dag', output: 'Lækkum skammt af Metformin í 850 mg, 1 tafla þrisvar á dag' }
                                        ]
                                    },
                                    {
                                        display: '1000 mg',
                                        subOptions: [
                                            { display: '1 tafla einu sinni á dag', output: 'Lækkum skammt af Metformin í 1000 mg, 1 tafla einu sinni á dag' },
                                            { display: '1 tafla tvisvar á dag', output: 'Lækkum skammt af Metformin í 1000 mg, 1 tafla tvisvar á dag' },
                                            { display: '2 töflur tvisvar á dag', output: 'Lækkum skammt af Metformin í 1000 mg, 2 töflur tvisvar á dag' },
                                            { display: '1 tafla þrisvar á dag', output: 'Lækkum skammt af Metformin í 1000 mg, 1 tafla þrisvar á dag' }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        display: 'GLP-1 agonistar',
                        subOptions: [
                            {
                                display: 'Semaglutide',
                                subOptions: [
                                    {
                                        display: 'Hefjum meðferð',
                                        subOptions: [
                                            { display: '0.25 mg', output: 'Hefjum meðferð með Semaglutide 0.25 mg á viku' },
                                            { display: '0.5 mg', output: 'Hefjum meðferð með Semaglutide 0.5 mg á viku' },
                                            { display: '1 mg', output: 'Hefjum meðferð með Semaglutide 1 mg á viku' },
                                            { display: '1.7 mg', output: 'Hefjum meðferð með Semaglutide 1.7 mg á viku' },
                                            { display: '2.4 mg', output: 'Hefjum meðferð með Semaglutide 2.4 mg á viku' }
                                        ]
                                    },
                                    {
                                        display: 'Viðbót',
                                        subOptions: [
                                            { display: '0.25 mg', output: 'Bætum við Semaglutide 0.25 mg á viku' },
                                            { display: '0.5 mg', output: 'Bætum við Semaglutide 0.5 mg á viku' },
                                            { display: '1 mg', output: 'Bætum við Semaglutide 1 mg á viku' },
                                            { display: '1.7 mg', output: 'Bætum við Semaglutide 1.7 mg á viku' },
                                            { display: '2.4 mg', output: 'Bætum við Semaglutide 2.4 mg á viku' }
                                        ]
                                    },
                                    {
                                        display: 'Aukum skammt',
                                        subOptions: [
                                            { display: '0.25 mg', output: 'Aukum skammt af Semaglutide í 0.25 mg á viku' },
                                            { display: '0.5 mg', output: 'Aukum skammt af Semaglutide í 0.5 mg á viku' },
                                            { display: '1 mg', output: 'Aukum skammt af Semaglutide í 1 mg á viku' },
                                            { display: '1.7 mg', output: 'Aukum skammt af Semaglutide í 1.7 mg á viku' },
                                            { display: '2.4 mg', output: 'Aukum skammt af Semaglutide í 2.4 mg á viku' }
                                        ]
                                    },
                                    {
                                        display: 'Lækka skammt',
                                        subOptions: [
                                            { display: '0.25 mg', output: 'Lækkum skammt af Semaglutide í 0.25 mg á viku' },
                                            { display: '0.5 mg', output: 'Lækkum skammt af Semaglutide í 0.5 mg á viku' },
                                            { display: '1 mg', output: 'Lækkum skammt af Semaglutide í 1 mg á viku' },
                                            { display: '1.7 mg', output: 'Lækkum skammt af Semaglutide í 1.7 mg á viku' },
                                            { display: '2.4 mg', output: 'Lækkum skammt af Semaglutide í 2.4 mg á viku' }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        display: 'Thiazolidinediones',
                        subOptions: [
                            {
                                display: 'Pioglitazone',
                                subOptions: [
                                    {
                                        display: 'Hefjum meðferð',
                                        subOptions: [
                                            { display: '15 mg', output: 'Hefjum meðferð með Pioglitazone 15 mg' },
                                            { display: '30 mg', output: 'Hefjum meðferð með Pioglitazone 30 mg' },
                                            { display: '45 mg', output: 'Hefjum meðferð með Pioglitazone 45 mg' }
                                        ]
                                    },
                                    {
                                        display: 'Viðbót',
                                        subOptions: [
                                            { display: '15 mg', output: 'Bætum við Pioglitazone 15 mg' },
                                            { display: '30 mg', output: 'Bætum við Pioglitazone 30 mg' },
                                            { display: '45 mg', output: 'Bætum við Pioglitazone 45 mg' }
                                        ]
                                    },
                                    {
                                        display: 'Aukum skammt',
                                        subOptions: [
                                            { display: '15 mg', output: 'Aukum skammt af Pioglitazone í 15 mg' },
                                            { display: '30 mg', output: 'Aukum skammt af Pioglitazone í 30 mg' },
                                            { display: '45 mg', output: 'Aukum skammt af Pioglitazone í 45 mg' }
                                        ]
                                    },
                                    {
                                        display: 'Lækka skammt',
                                        subOptions: [
                                            { display: '15 mg', output: 'Lækkum skammt af Pioglitazone í 15 mg' },
                                            { display: '30 mg', output: 'Lækkum skammt af Pioglitazone í 30 mg' },
                                            { display: '45 mg', output: 'Lækkum skammt af Pioglitazone í 45 mg' }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        display: 'Sulfonylureas',
                        subOptions: [
                            {
                                display: 'Glipizide',
                                subOptions: [
                                    {
                                        display: 'Hefjum meðferð',
                                        subOptions: [
                                            { display: '2.5 mg', output: 'Hefjum meðferð með Glipizide 2.5 mg' },
                                            { display: '5 mg', output: 'Hefjum meðferð með Glipizide 5 mg' },
                                            { display: '10 mg', output: 'Hefjum meðferð með Glipizide 10 mg' }
                                        ]
                                    },
                                    {
                                        display: 'Viðbót',
                                        subOptions: [
                                            { display: '2.5 mg', output: 'Bætum við Glipizide 2.5 mg' },
                                            { display: '5 mg', output: 'Bætum við Glipizide 5 mg' },
                                            { display: '10 mg', output: 'Bætum við Glipizide 10 mg' }
                                        ]
                                    },
                                    {
                                        display: 'Aukum skammt',
                                        subOptions: [
                                            { display: '2.5 mg', output: 'Aukum skammt af Glipizide í 2.5 mg' },
                                            { display: '5 mg', output: 'Aukum skammt af Glipizide í 5 mg' },
                                            { display: '10 mg', output: 'Aukum skammt af Glipizide í 10 mg' }
                                        ]
                                    },
                                    {
                                        display: 'Lækka skammt',
                                        subOptions: [
                                            { display: '2.5 mg', output: 'Lækkum skammt af Glipizide í 2.5 mg' },
                                            { display: '5 mg', output: 'Lækkum skammt af Glipizide í 5 mg' },
                                            { display: '10 mg', output: 'Lækkum skammt af Glipizide í 10 mg' }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        display: 'DPP-4 hemlar',
                        subOptions: [
                            {
                                display: 'Sitagliptin',
                                subOptions: [
                                    {
                                        display: 'Hefjum meðferð',
                                        subOptions: [
                                            { display: '25 mg', output: 'Hefjum meðferð með Sitagliptin 25 mg' },
                                            { display: '50 mg', output: 'Hefjum meðferð með Sitagliptin 50 mg' },
                                            { display: '100 mg', output: 'Hefjum meðferð með Sitagliptin 100 mg' }
                                        ]
                                    },
                                    {
                                        display: 'Viðbót',
                                        subOptions: [
                                            { display: '25 mg', output: 'Bætum við Sitagliptin 25 mg' },
                                            { display: '50 mg', output: 'Bætum við Sitagliptin 50 mg' },
                                            { display: '100 mg', output: 'Bætum við Sitagliptin 100 mg' }
                                        ]
                                    },
                                    {
                                        display: 'Aukum skammt',
                                        subOptions: [
                                            { display: '25 mg', output: 'Aukum skammt af Sitagliptin í 25 mg' },
                                            { display: '50 mg', output: 'Aukum skammt af Sitagliptin í 50 mg' },
                                            { display: '100 mg', output: 'Aukum skammt af Sitagliptin í 100 mg' }
                                        ]
                                    },
                                    {
                                        display: 'Lækka skammt',
                                        subOptions: [
                                            { display: '25 mg', output: 'Lækkum skammt af Sitagliptin í 25 mg' },
                                            { display: '50 mg', output: 'Lækkum skammt af Sitagliptin í 50 mg' },
                                            { display: '100 mg', output: 'Lækkum skammt af Sitagliptin í 100 mg' }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        display: 'SGLT2 hemlar',
                        subOptions: [
                            {
                                display: 'Empagliflozin',
                                subOptions: [
                                    {
                                        display: 'Hefjum meðferð',
                                        subOptions: [
                                            { display: '10 mg', output: 'Hefjum meðferð með Empagliflozin 10 mg' },
                                            { display: '25 mg', output: 'Hefjum meðferð með Empagliflozin 25 mg' }
                                        ]
                                    },
                                    {
                                        display: 'Viðbót',
                                        subOptions: [
                                            { display: '10 mg', output: 'Bætum við Empagliflozin 10 mg' },
                                            { display: '25 mg', output: 'Bætum við Empagliflozin 25 mg' }
                                        ]
                                    },
                                    {
                                        display: 'Aukum skammt',
                                        subOptions: [
                                            { display: '10 mg', output: 'Aukum skammt af Empagliflozin í 10 mg' },
                                            { display: '25 mg', output: 'Aukum skammt af Empagliflozin í 25 mg' }
                                        ]
                                    },
                                    {
                                        display: 'Lækka skammt',
                                        subOptions: [
                                            { display: '10 mg', output: 'Lækkum skammt af Empagliflozin í 10 mg' },
                                            { display: '25 mg', output: 'Lækkum skammt af Empagliflozin í 25 mg' }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                display: 'Skjaldkirtilslyf',
                subOptions: [
                    {
                        display: 'Levothyroxine',
                        subOptions: [
                            {
                                display: 'Hefjum meðferð',
                                subOptions: [
                                    { display: '25 mcg', output: 'Hefjum meðferð með Levothyroxine 25 mcg' },
                                    { display: '50 mcg', output: 'Hefjum meðferð með Levothyroxine 50 mcg' },
                                    { display: '75 mcg', output: 'Hefjum meðferð með Levothyroxine 75 mcg' },
                                    { display: '100 mcg', output: 'Hefjum meðferð með Levothyroxine 100 mcg' },
                                    { display: '125 mcg', output: 'Hefjum meðferð með Levothyroxine 125 mcg' },
                                    { display: '150 mcg', output: 'Hefjum meðferð með Levothyroxine 150 mcg' }
                                ]
                            },
                            {
                                display: 'Viðbót',
                                subOptions: [
                                    { display: '25 mcg', output: 'Bætum við Levothyroxine 25 mcg' },
                                    { display: '50 mcg', output: 'Bætum við Levothyroxine 50 mcg' },
                                    { display: '75 mcg', output: 'Bætum við Levothyroxine 75 mcg' },
                                    { display: '100 mcg', output: 'Bætum við Levothyroxine 100 mcg' },
                                    { display: '125 mcg', output: 'Bætum við Levothyroxine 125 mcg' },
                                    { display: '150 mcg', output: 'Bætum við Levothyroxine 150 mcg' }
                                ]
                            },
                            {
                                display: 'Aukum skammt',
                                subOptions: [
                                    { display: '25 mcg', output: 'Aukum skammt af Levothyroxine í 25 mcg' },
                                    { display: '50 mcg', output: 'Aukum skammt af Levothyroxine í 50 mcg' },
                                    { display: '75 mcg', output: 'Aukum skammt af Levothyroxine í 75 mcg' },
                                    { display: '100 mcg', output: 'Aukum skammt af Levothyroxine í 100 mcg' },
                                    { display: '125 mcg', output: 'Aukum skammt af Levothyroxine í 125 mcg' },
                                    { display: '150 mcg', output: 'Aukum skammt af Levothyroxine í 150 mcg' }
                                ]
                            },
                            {
                                display: 'Lækka skammt',
                                subOptions: [
                                    { display: '25 mcg', output: 'Lækkum skammt af Levothyroxine í 25 mcg' },
                                    { display: '50 mcg', output: 'Lækkum skammt af Levothyroxine í 50 mcg' },
                                    { display: '75 mcg', output: 'Lækkum skammt af Levothyroxine í 75 mcg' },
                                    { display: '100 mcg', output: 'Lækkum skammt af Levothyroxine í 100 mcg' },
                                    { display: '125 mcg', output: 'Lækkum skammt af Levothyroxine í 125 mcg' },
                                    { display: '150 mcg', output: 'Lækkum skammt af Levothyroxine í 150 mcg' }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Fylgikvillar sykursýki', 'Rannsóknir'],
        options: [
            {
                display: 'Fylgikvillar sykursýki',
                subOptions: [
                    { display: 'Fótamein', output: 'Fótamein tengt sykursýki' },
                    { display: 'Nýrnavandamál', output: 'Nýrnavandamál tengd sykursýki' },
                    { display: 'Sjónvandamál', output: 'Sjónvandamál tengd sykursýki' },
                    { display: 'Taugaskemmdir', output: 'Taugaskemmdir tengdar sykursýki' }
                ]
            },
            {
                display: 'Rannsóknir',
                subOptions: [
                    { display: 'Blóðsykurmæling', output: 'Framkvæmum blóðsykurmælingu' },
                    { display: 'HbA1c', output: 'Framkvæmum HbA1c mælingu' },
                    { display: 'Skjaldkirtilspróf', output: 'Framkvæmum skjaldkirtilspróf' },
                    { display: 'Nýrnapróf', output: 'Framkvæmum nýrnapróf' },
                    { display: 'Blóðpróf', output: 'Framkvæmum blóðpróf' }
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
                    {
                        display: 'Bókar sjálfur',
                        subOptions: [
                            { display: 'Símatíma', output: 'Pantar sér símatíma til að fá niðurstöður' },
                            { display: 'Viðtalstíma', output: 'Pantar sér viðtalstíma í framhaldi' },
                            { display: 'Sinni heilsugæslu', output: 'Eftirfylgd á sinni heilsugæslu' }
                        ]
                    },
                    {
                        display: 'Gef tíma í endurkomu',
                        subOptions: [
                            { display: 'Símatíma', output: 'Fær símatíma til eftirfylgdar' },
                            { display: 'Viðtalstíma',
                                subOptions: [
                                    {display: 'NOS', output: 'Fær nýjan tíma til eftirfylgdar'},
                                    {display: 'Tvöfaldan', output: 'Fær tvöfaldan endurkomutíma'}
                                ]
                            }
                            
                        ]
                    }
                ]
            }

        ]
    }
];

const RannsoknirInnkirtla = [
    {
        name: '',
        type: 'options',
        display: ['HbA1c', 'T3', 'T4', 'TSH'],
        options: [
            {
                display: 'HbA1c',
                subOptions: [
                    {
                        display: '31-40 mmol/mol',
                        subOptions: [
                            { display: '31 mmol/mol (5.0%)', output: 'HbA1c 31 mmol/mol (5.0%)' },
                            { display: '32 mmol/mol (5.1%)', output: 'HbA1c 32 mmol/mol (5.1%)' },
                            { display: '33 mmol/mol (5.2%)', output: 'HbA1c 33 mmol/mol (5.2%)' },
                            { display: '34 mmol/mol (5.3%)', output: 'HbA1c 34 mmol/mol (5.3%)' },
                            { display: '36 mmol/mol (5.4%)', output: 'HbA1c 36 mmol/mol (5.4%)' },
                            { display: '37 mmol/mol (5.5%)', output: 'HbA1c 37 mmol/mol (5.5%)' },
                            { display: '38 mmol/mol (5.6%)', output: 'HbA1c 38 mmol/mol (5.6%)' },
                            { display: '39 mmol/mol (5.7%)', output: 'HbA1c 39 mmol/mol (5.7%)' },
                            { display: '40 mmol/mol (5.8%)', output: 'HbA1c 40 mmol/mol (5.8%)' }
                        ]
                    },
                    {
                        display: '41-50 mmol/mol',
                        subOptions: [
                            { display: '41 mmol/mol (5.9%)', output: 'HbA1c 41 mmol/mol (5.9%)' },
                            { display: '42 mmol/mol (6.0%)', output: 'HbA1c 42 mmol/mol (6.0%)' },
                            { display: '43 mmol/mol (6.1%)', output: 'HbA1c 43 mmol/mol (6.1%)' },
                            { display: '44 mmol/mol (6.2%)', output: 'HbA1c 44 mmol/mol (6.2%)' },
                            { display: '45 mmol/mol (6.3%)', output: 'HbA1c 45 mmol/mol (6.3%)' },
                            { display: '46 mmol/mol (6.4%)', output: 'HbA1c 46 mmol/mol (6.4%)' },
                            { display: '47 mmol/mol (6.5%)', output: 'HbA1c 47 mmol/mol (6.5%)' },
                            { display: '48 mmol/mol (6.6%)', output: 'HbA1c 48 mmol/mol (6.6%)' },
                            { display: '49 mmol/mol (6.7%)', output: 'HbA1c 49 mmol/mol (6.7%)' },
                            { display: '50 mmol/mol (6.8%)', output: 'HbA1c 50 mmol/mol (6.8%)' }
                        ]
                    },
                    {
                        display: '51-60 mmol/mol',
                        subOptions: [
                            { display: '51 mmol/mol (6.9%)', output: 'HbA1c 51 mmol/mol (6.9%)' },
                            { display: '53 mmol/mol (7.0%)', output: 'HbA1c 53 mmol/mol (7.0%)' },
                            { display: '54 mmol/mol (7.1%)', output: 'HbA1c 54 mmol/mol (7.1%)' },
                            { display: '55 mmol/mol (7.2%)', output: 'HbA1c 55 mmol/mol (7.2%)' },
                            { display: '56 mmol/mol (7.3%)', output: 'HbA1c 56 mmol/mol (7.3%)' },
                            { display: '57 mmol/mol (7.4%)', output: 'HbA1c 57 mmol/mol (7.4%)' },
                            { display: '58 mmol/mol (7.5%)', output: 'HbA1c 58 mmol/mol (7.5%)' },
                            { display: '60 mmol/mol (7.6%)', output: 'HbA1c 60 mmol/mol (7.6%)' }
                        ]
                    },
                    {
                        display: '61-70 mmol/mol',
                        subOptions: [
                            { display: '61 mmol/mol (7.7%)', output: 'HbA1c 61 mmol/mol (7.7%)' },
                            { display: '62 mmol/mol (7.8%)', output: 'HbA1c 62 mmol/mol (7.8%)' },
                            { display: '63 mmol/mol (7.9%)', output: 'HbA1c 63 mmol/mol (7.9%)' },
                            { display: '64 mmol/mol (8.0%)', output: 'HbA1c 64 mmol/mol (8.0%)' },
                            { display: '65 mmol/mol (8.1%)', output: 'HbA1c 65 mmol/mol (8.1%)' },
                            { display: '66 mmol/mol (8.2%)', output: 'HbA1c 66 mmol/mol (8.2%)' },
                            { display: '67 mmol/mol (8.3%)', output: 'HbA1c 67 mmol/mol (8.3%)' },
                            { display: '68 mmol/mol (8.4%)', output: 'HbA1c 68 mmol/mol (8.4%)' },
                            { display: '69 mmol/mol (8.5%)', output: 'HbA1c 69 mmol/mol (8.5%)' },
                            { display: '70 mmol/mol (8.6%)', output: 'HbA1c 70 mmol/mol (8.6%)' }
                        ]
                    },
                    {
                        display: '71-80 mmol/mol',
                        subOptions: [
                            { display: '71 mmol/mol (8.7%)', output: 'HbA1c 71 mmol/mol (8.7%)' },
                            { display: '72 mmol/mol (8.8%)', output: 'HbA1c 72 mmol/mol (8.8%)' },
                            { display: '74 mmol/mol (8.9%)', output: 'HbA1c 74 mmol/mol (8.9%)' },
                            { display: '75 mmol/mol (9.0%)', output: 'HbA1c 75 mmol/mol (9.0%)' },
                            { display: '76 mmol/mol (9.1%)', output: 'HbA1c 76 mmol/mol (9.1%)' },
                            { display: '77 mmol/mol (9.2%)', output: 'HbA1c 77 mmol/mol (9.2%)' },
                            { display: '78 mmol/mol (9.3%)', output: 'HbA1c 78 mmol/mol (9.3%)' },
                            { display: '79 mmol/mol (9.4%)', output: 'HbA1c 79 mmol/mol (9.4%)' },
                            { display: '80 mmol/mol (9.5%)', output: 'HbA1c 80 mmol/mol (9.5%)' }
                        ]
                    },
                    {
                        display: '81-90 mmol/mol',
                        subOptions: [
                            { display: '81 mmol/mol (9.6%)', output: 'HbA1c 81 mmol/mol (9.6%)' },
                            { display: '83 mmol/mol (9.7%)', output: 'HbA1c 83 mmol/mol (9.7%)' },
                            { display: '84 mmol/mol (9.8%)', output: 'HbA1c 84 mmol/mol (9.8%)' },
                            { display: '85 mmol/mol (9.9%)', output: 'HbA1c 85 mmol/mol (9.9%)' },
                            { display: '86 mmol/mol (10.0%)', output: 'HbA1c 86 mmol/mol (10.0%)' },
                            { display: '87 mmol/mol (10.1%)', output: 'HbA1c 87 mmol/mol (10.1%)' },
                            { display: '88 mmol/mol (10.2%)', output: 'HbA1c 88 mmol/mol (10.2%)' },
                            { display: '89 mmol/mol (10.3%)', output: 'HbA1c 89 mmol/mol (10.3%)' },
                            { display: '90 mmol/mol (10.4%)', output: 'HbA1c 90 mmol/mol (10.4%)' }
                        ]
                    },
                    {
                        display: '91-100 mmol/mol',
                        subOptions: [
                            { display: '91 mmol/mol (10.5%)', output: 'HbA1c 91 mmol/mol (10.5%)' },
                            { display: '92 mmol/mol (10.6%)', output: 'HbA1c 92 mmol/mol (10.6%)' },
                            { display: '93 mmol/mol (10.7%)', output: 'HbA1c 93 mmol/mol (10.7%)' },
                            { display: '94 mmol/mol (10.8%)', output: 'HbA1c 94 mmol/mol (10.8%)' },
                            { display: '95 mmol/mol (10.9%)', output: 'HbA1c 95 mmol/mol (10.9%)' },
                            { display: '96 mmol/mol (11.0%)', output: 'HbA1c 96 mmol/mol (11.0%)' },
                            { display: '97 mmol/mol (11.1%)', output: 'HbA1c 97 mmol/mol (11.1%)' },
                            { display: '98 mmol/mol (11.2%)', output: 'HbA1c 98 mmol/mol (11.2%)' },
                            { display: '99 mmol/mol (11.3%)', output: 'HbA1c 99 mmol/mol (11.3%)' },
                            { display: '100 mmol/mol (11.4%)', output: 'HbA1c 100 mmol/mol (11.4%)' }
                        ]
                    },
                    {
                        display: '101-110 mmol/mol',
                        subOptions: [
                            { display: '101 mmol/mol (11.5%)', output: 'HbA1c 101 mmol/mol (11.5%)' },
                            { display: '103 mmol/mol (11.6%)', output: 'HbA1c 103 mmol/mol (11.6%)' },
                            { display: '104 mmol/mol (11.7%)', output: 'HbA1c 104 mmol/mol (11.7%)' },
                            { display: '106 mmol/mol (11.8%)', output: 'HbA1c 106 mmol/mol (11.8%)' },
                            { display: '107 mmol/mol (11.9%)', output: 'HbA1c 107 mmol/mol (11.9%)' },
                            { display: '108 mmol/mol (12.0%)', output: 'HbA1c 108 mmol/mol (12.0%)' },
                            { display: '109 mmol/mol (12.1%)', output: 'HbA1c 109 mmol/mol (12.1%)' },
                            { display: '110 mmol/mol (12.2%)', output: 'HbA1c 110 mmol/mol (12.2%)' }
                        ]
                    },
                    {
                        display: '111-120 mmol/mol',
                        subOptions: [
                            { display: '111 mmol/mol (12.3%)', output: 'HbA1c 111 mmol/mol (12.3%)' },
                            { display: '112 mmol/mol (12.4%)', output: 'HbA1c 112 mmol/mol (12.4%)' },
                            { display: '113 mmol/mol (12.5%)', output: 'HbA1c 113 mmol/mol (12.5%)' },
                            { display: '114 mmol/mol (12.6%)', output: 'HbA1c 114 mmol/mol (12.6%)' },
                            { display: '115 mmol/mol (12.7%)', output: 'HbA1c 115 mmol/mol (12.7%)' },
                            { display: '116 mmol/mol (12.8%)', output: 'HbA1c 116 mmol/mol (12.8%)' },
                            { display: '117 mmol/mol (12.9%)', output: 'HbA1c 117 mmol/mol (12.9%)' },
                            { display: '119 mmol/mol (13.0%)', output: 'HbA1c 119 mmol/mol (13.0%)' },
                            { display: '120 mmol/mol (13.1%)', output: 'HbA1c 120 mmol/mol (13.1%)' }
                        ]
                    }
                ]
            },
            {
                display: 'T3',
                subOptions: [
                    {
                        display: '0-10 pmol/L',
                        subOptions: Array.from({ length: 11 }, (_, i) => ({
                            display: `${0 + i} pmol/L`,
                            output: `T3 ${0 + i} pmol/L`
                        }))
                    },
                    {
                        display: '11-20 pmol/L',
                        subOptions: Array.from({ length: 10 }, (_, i) => ({
                            display: `${11 + i} pmol/L`,
                            output: `T3 ${11 + i} pmol/L`
                        }))
                    },
                    {
                        display: '21-30 pmol/L',
                        subOptions: Array.from({ length: 10 }, (_, i) => ({
                            display: `${21 + i} pmol/L`,
                            output: `T3 ${21 + i} pmol/L`
                        }))
                    }
                ]
            },
            {
                display: 'T4',
                subOptions: [
                    {
                        display: '0-10 pmol/L',
                        subOptions: Array.from({ length: 11 }, (_, i) => ({
                            display: `${0 + i} pmol/L`,
                            output: `T4 ${0 + i} pmol/L`
                        }))
                    },
                    {
                        display: '11-20 pmol/L',
                        subOptions: Array.from({ length: 10 }, (_, i) => ({
                            display: `${11 + i} pmol/L`,
                            output: `T4 ${11 + i} pmol/L`
                        }))
                    },
                    {
                        display: '21-30 pmol/L',
                        subOptions: Array.from({ length: 10 }, (_, i) => ({
                            display: `${21 + i} pmol/L`,
                            output: `T4 ${21 + i} pmol/L`
                        }))
                    },
                    {
                        display: '31-40 pmol/L',
                        subOptions: Array.from({ length: 10 }, (_, i) => ({
                            display: `${31 + i} pmol/L`,
                            output: `T4 ${31 + i} pmol/L`
                        }))
                    },
                    {
                        display: '41-50 pmol/L',
                        subOptions: Array.from({ length: 10 }, (_, i) => ({
                            display: `${41 + i} pmol/L`,
                            output: `T4 ${41 + i} pmol/L`
                        }))
                    }
                ]
            },
            {
                display: 'TSH',
                subOptions: [
                    {
                        display: '0-10 mU/L',
                        subOptions: Array.from({ length: 11 }, (_, i) => ({
                            display: `${0 + i} mU/L`,
                            output: `TSH ${0 + i} mU/L`
                        }))
                    },
                    {
                        display: '11-20 mU/L',
                        subOptions: Array.from({ length: 10 }, (_, i) => ({
                            display: `${11 + i} mU/L`,
                            output: `TSH ${11 + i} mU/L`
                        }))
                    },
                    {
                        display: '21-30 mU/L',
                        subOptions: Array.from({ length: 10 }, (_, i) => ({
                            display: `${21 + i} mU/L`,
                            output: `TSH ${21 + i} mU/L`
                        }))
                    },
                    {
                        display: '31-40 mU/L',
                        subOptions: Array.from({ length: 10 }, (_, i) => ({
                            display: `${31 + i} mU/L`,
                            output: `TSH ${31 + i} mU/L`
                        }))
                    },
                    {
                        display: '41-50 mU/L',
                        subOptions: Array.from({ length: 10 }, (_, i) => ({
                            display: `${41 + i} mU/L`,
                            output: `TSH ${41 + i} mU/L`
                        }))
                    },
                    {
                        display: '51-60 mU/L',
                        subOptions: Array.from({ length: 10 }, (_, i) => ({
                            display: `${51 + i} mU/L`,
                            output: `TSH ${51 + i} mU/L`
                        }))
                    },
                    {
                        display: '61-70 mU/L',
                        subOptions: Array.from({ length: 10 }, (_, i) => ({
                            display: `${61 + i} mU/L`,
                            output: `TSH ${61 + i} mU/L`
                        }))
                    },
                    {
                        display: '71-80 mU/L',
                        subOptions: Array.from({ length: 10 }, (_, i) => ({
                            display: `${71 + i} mU/L`,
                            output: `TSH ${71 + i} mU/L`
                        }))
                    },
                    {
                        display: '81-90 mU/L',
                        subOptions: Array.from({ length: 10 }, (_, i) => ({
                            display: `${81 + i} mU/L`,
                            output: `TSH ${81 + i} mU/L`
                        }))
                    },
                    {
                        display: '91-100 mU/L',
                        subOptions: Array.from({ length: 10 }, (_, i) => ({
                            display: `${91 + i} mU/L`,
                            output: `TSH ${91 + i} mU/L`
                        }))
                    }
                ]
            }
        ]
    }
];
const LyfInnkirtla = [
    {
        name: '',
        type: 'options',
        display: ['Metformín', 'Insúlín', 'Sulfonylurea'],
        options: [
            {
                display: 'Metformín',
                subOptions: [
                    { 
                        display: '500 mg', 
                        subOptions: [
                            { display: 'Einu sinni á dag', output: 'Metformín 500 mg einu sinni á dag' },
                            { display: 'Tvisvar á dag', output: 'Metformín 500 mg tvisvar á dag' },
                            { display: 'Þrisvar á dag', output: 'Metformín 500 mg þrisvar á dag' }
                        ]
                    },
                    { 
                        display: '850 mg', 
                        subOptions: [
                            { display: 'Einu sinni á dag', output: 'Metformín 850 mg einu sinni á dag' },
                            { display: 'Tvisvar á dag', output: 'Metformín 850 mg tvisvar á dag' },
                            { display: 'Þrisvar á dag', output: 'Metformín 850 mg þrisvar á dag' }
                        ]
                    },
                    { 
                        display: '1000 mg', 
                        subOptions: [
                            { display: 'Einu sinni á dag', output: 'Metformín 1000 mg einu sinni á dag' },
                            { display: 'Tvisvar á dag', output: 'Metformín 1000 mg tvisvar á dag' },
                            { display: 'Þrisvar á dag', output: 'Metformín 1000 mg þrisvar á dag' }
                        ]
                    }
                ]
            },
            {
                display: 'Insúlín',
                subOptions: [
                    { 
                        display: 'Hratt virkt', 
                        subOptions: [
                            { 
                                display: 'Humalog', 
                                subOptions: [
                                    { display: '10 einingar', output: 'Humalog 10 einingar' },
                                    { display: '20 einingar', output: 'Humalog 20 einingar' },
                                    { display: '30 einingar', output: 'Humalog 30 einingar' }
                                ]
                            },
                            { 
                                display: 'Novolog', 
                                subOptions: [
                                    { display: '10 einingar', output: 'Novolog 10 einingar' },
                                    { display: '20 einingar', output: 'Novolog 20 einingar' },
                                    { display: '30 einingar', output: 'Novolog 30 einingar' }
                                ]
                            },
                            { 
                                display: 'Apidra', 
                                subOptions: [
                                    { display: '10 einingar', output: 'Apidra 10 einingar' },
                                    { display: '20 einingar', output: 'Apidra 20 einingar' },
                                    { display: '30 einingar', output: 'Apidra 30 einingar' }
                                ]
                            }
                        ]
                    },
                    { 
                        display: 'Stutt virkt', 
                        subOptions: [
                            { 
                                display: 'Venjulegt insúlín', 
                                subOptions: [
                                    { display: '10 einingar', output: 'Venjulegt insúlín 10 einingar' },
                                    { display: '20 einingar', output: 'Venjulegt insúlín 20 einingar' },
                                    { display: '30 einingar', output: 'Venjulegt insúlín 30 einingar' }
                                ]
                            }
                        ]
                    },
                    { 
                        display: 'Meðallangt virkt', 
                        subOptions: [
                            { 
                                display: 'NPH', 
                                subOptions: [
                                    { display: '10 einingar', output: 'NPH 10 einingar' },
                                    { display: '20 einingar', output: 'NPH 20 einingar' },
                                    { display: '30 einingar', output: 'NPH 30 einingar' }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                display: 'Langt virkt',
                subOptions: [
                    { 
                        display: 'Lantus', 
                        subOptions: [
                            { display: '10 einingar', output: 'Lantus 10 einingar' },
                            { display: '20 einingar', output: 'Lantus 20 einingar' },
                            { display: '30 einingar', output: 'Lantus 30 einingar' }
                        ]
                    },
                    { 
                        display: 'Levemir', 
                        subOptions: [
                            { display: '10 einingar', output: 'Levemir 10 einingar' },
                            { display: '20 einingar', output: 'Levemir 20 einingar' },
                            { display: '30 einingar', output: 'Levemir 30 einingar' }
                        ]
                    },
                    { 
                        display: 'Tresiba', 
                        subOptions: [
                            { display: '10 einingar', output: 'Tresiba 10 einingar' },
                            { display: '20 einingar', output: 'Tresiba 20 einingar' },
                            { display: '30 einingar', output: 'Tresiba 30 einingar' }
                        ]
                    }
                ]
            },
            {
                display: 'Sulfonylurea',
                subOptions: [
                    { 
                        display: 'Glipizid', 
                        subOptions: [
                            { display: '5 mg', output: 'Glipizid 5 mg einu sinni á dag' },
                            { display: '10 mg', output: 'Glipizid 10 mg tvisvar á dag' }
                        ]
                    },
                    { 
                        display: 'Glyburide', 
                        subOptions: [
                            { display: '5 mg', output: 'Glyburide 5 mg einu sinni á dag' },
                            { display: '10 mg', output: 'Glyburide 10 mg tvisvar á dag' }
                        ]
                    },
                    { 
                        display: 'Glimepiride', 
                        subOptions: [
                            { display: '1 mg', output: 'Glimepiride 1 mg einu sinni á dag' },
                            { display: '2 mg', output: 'Glimepiride 2 mg tvisvar á dag' },
                            { display: '4 mg', output: 'Glimepiride 4 mg tvisvar á dag' }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['DPP-4 hindrar', 'GLP-1 örvar', 'SGLT2 hindrar'],
        options: [
            {
                display: 'DPP-4 hindrar',
                subOptions: [
                    { 
                        display: 'Sitagliptin', 
                        subOptions: [
                            { display: '100 mg', output: 'Sitagliptin 100 mg einu sinni á dag' }
                        ]
                    },
                    { 
                        display: 'Saxagliptin', 
                        subOptions: [
                            { display: '5 mg', output: 'Saxagliptin 5 mg einu sinni á dag' }
                        ]
                    },
                    { 
                        display: 'Linagliptin', 
                        subOptions: [
                            { display: '5 mg', output: 'Linagliptin 5 mg einu sinni á dag' }
                        ]
                    }
                ]
            },
            {
                display: 'GLP-1 örvar',
                subOptions: [
                    {
                        display: 'Semaglutide',
                        subOptions: [
                            { display: '0,25 mg', output: 'Semaglutide 0,25 mg einu sinni í viku' },
                            { display: '0,5 mg', output: 'Semaglutide 0,5 mg einu sinni í viku' },
                            { display: '1 mg', output: 'Semaglutide 1 mg einu sinni í viku' },
                            { display: '1,7 mg', output: 'Semaglutide 1,7 mg einu sinni í viku' },
                            { display: '2,4 mg', output: 'Semaglutide 2,4 mg einu sinni í viku' }
                        ]
                    },
                    { 
                        display: 'Exenatide', 
                        subOptions: [
                            { display: '5 mcg', output: 'Exenatide 5 mcg tvisvar á dag' },
                            { display: '10 mcg', output: 'Exenatide 10 mcg tvisvar á dag' }
                        ]
                    },
                    { 
                        display: 'Liraglutide', 
                        subOptions: [
                            { display: '0,6 mg', output: 'Liraglutide 0,6 mg einu sinni á dag' },
                            { display: '1,2 mg', output: 'Liraglutide 1,2 mg einu sinni á dag' },
                            { display: '1,8 mg', output: 'Liraglutide 1,8 mg einu sinni á dag' }
                        ]
                    },
                    { 
                        display: 'Dulaglutide', 
                        subOptions: [
                            { display: '0,75 mg', output: 'Dulaglutide 0,75 mg einu sinni í viku' },
                            { display: '1,5 mg', output: 'Dulaglutide 1,5 mg einu sinni í viku' }
                        ]
                    }
                ]
            },
            {
                display: 'SGLT2 hindrar',
                subOptions: [
                    { 
                        display: 'Canagliflozin', 
                        subOptions: [
                            { display: '100 mg', output: 'Canagliflozin 100 mg einu sinni á dag' },
                            { display: '300 mg', output: 'Canagliflozin 300 mg einu sinni á dag' }
                        ]
                    },
                    { 
                        display: 'Dapagliflozin', 
                        subOptions: [
                            { display: '5 mg', output: 'Dapagliflozin 5 mg einu sinni á dag' },
                            { display: '10 mg', output: 'Dapagliflozin 10 mg einu sinni á dag' }
                        ]
                    },
                    { 
                        display: 'Empagliflozin', 
                        subOptions: [
                            { display: '10 mg', output: 'Empagliflozin 10 mg einu sinni á dag' },
                            { display: '25 mg', output: 'Empagliflozin 25 mg einu sinni á dag' }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Levothyroxine', 'Methimazole'],
        options: [
            {
                display: 'Levothyroxine',
                subOptions: [
                    { 
                        display: '25 mcg', 
                        subOptions: [
                            { display: 'Einu sinni á dag', output: 'Levothyroxine 25 mcg einu sinni á dag' }
                        ]
                    },
                    { 
                        display: '50 mcg', 
                        subOptions: [
                            { display: 'Einu sinni á dag', output: 'Levothyroxine 50 mcg einu sinni á dag' }
                        ]
                    },
                    { 
                        display: '75 mcg', 
                        subOptions: [
                            { display: 'Einu sinni á dag', output: 'Levothyroxine 75 mcg einu sinni á dag' }
                        ]
                    },
                    { 
                        display: '100 mcg', 
                        subOptions: [
                            { display: 'Einu sinni á dag', output: 'Levothyroxine 100 mcg einu sinni á dag' }
                        ]
                    },
                    { 
                        display: '125 mcg', 
                        subOptions: [
                            { display: 'Einu sinni á dag', output: 'Levothyroxine 125 mcg einu sinni á dag' }
                        ]
                    },
                    { 
                        display: '150 mcg', 
                        subOptions: [
                            { display: 'Einu sinni á dag', output: 'Levothyroxine 150 mcg einu sinni á dag' }
                        ]
                    },
                    { 
                        display: '175 mcg', 
                        subOptions: [
                            { display: 'Einu sinni á dag', output: 'Levothyroxine 175 mcg einu sinni á dag' }
                        ]
                    },
                    { 
                        display: '200 mcg', 
                        subOptions: [
                            { display: 'Einu sinni á dag', output: 'Levothyroxine 200 mcg einu sinni á dag' }
                        ]
                    }
                ]
            },
            {
                display: 'Methimazole',
                subOptions: [
                    { 
                        display: '5 mg', 
                        subOptions: [
                            { display: 'Einu sinni á dag', output: 'Methimazole 5 mg einu sinni á dag' }
                        ]
                    },
                    { 
                        display: '10 mg', 
                        subOptions: [
                            { display: 'Einu sinni á dag', output: 'Methimazole 10 mg einu sinni á dag' }
                        ]
                    },
                    { 
                        display: '20 mg', 
                        subOptions: [
                            { display: 'Einu sinni á dag', output: 'Methimazole 20 mg einu sinni á dag' }
                        ]
                    }
                ]
            }
        ]
    }
];



//Áfengi (Alcohol)
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
                    { display: '1 viku', output: 'Hefur drukkið daglega í u.þ.b. 1 viku' },
                    { display: '2 vikur', output: 'Hefur drukkið daglega í u.þ.b. 2 vikur' },
                    { display: '3 vikur', output: 'Hefur drukkið daglega í u.þ.b. 3 vikur' },
                    { display: '4 vikur', output: 'Hefur drukkið daglega í u.þ.b. 4 vikur' },
                    { display: '>1 mánuð', output: 'Hefur drukkið daglega í yfir 1 mánuð' },
                    { display: '>2 mánuði', output: 'Hefur drukkið daglega í yfir 2 mánuði' },
                    { display: '>3 mánuði', output: 'Hefur drukkið daglega í yfir 3 mánuði' },
                    { display: '>4 mánuði', output: 'Hefur drukkið daglega í yfir 4 mánuði' },
                    { display: '>5 mánuði', output: 'Hefur drukkið daglega í yfir 5 mánuði' },
                    { display: '>6 mánuði', output: 'Hefur drukkið daglega í yfir 6 mánuði' }
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

// Gigt (Rheumatology)
const SymptomsGigt = [
    {
        name: '',
        type: 'options',
        display: ['Verkir', 'Bólga', 'Stífleiki', 'Aukin hiti', 'Þreyta'],
        options: [
            { display: 'Verkir', output: 'Sjúklingur lýsir verkjum í liðamótum' },
            { display: 'Bólga', output: 'Sjúklingur lýsir bólgu í liðamótum' },
            { display: 'Stífleiki', output: 'Sjúklingur lýsir stífleika í liðamótum' },
            { display: 'Aukin hiti', output: 'Sjúklingur lýsir auknum hita í liðamótum' },
            { display: 'Þreyta', output: 'Sjúklingur lýsir almennri þreytu' }
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['Staðsetning'],
        options: [
          {
            display: 'Staðsetning',
            subOptions: [
              {
                display: 'DIP',
                subOptions: [
                  {
                    display: 'NOS',
                    output: 'Helstu liðir DIP-liðir'
                  },
                  {
                    display: 'PIP',
                    subOptions: [
                      {
                        display: 'NOS',
                        output: 'Helstu liðir DIP-liðir og PIP-liðir'
                      },
                      {
                        display: 'MCP',
                        subOptions: [
                          {
                            display: 'NOS',
                            output: 'Helstu liðir DIP-liðir, PIP-liðir og MCP-liðir'
                          },
                          {
                            display: 'Úlnlið',
                            subOptions: [
                              {
                                display: 'NOS',
                                output: 'Helstu liðir DIP-liðir, PIP-liðir, MCP-liðir og úlnliðir'
                              },
                              {
                                display: 'Olnboga',
                                subOptions: [
                                  {
                                    display: 'NOS',
                                    output: 'Helstu liðir DIP-liðir, PIP-liðir, MCP-liðir, úlnliðir og olnbogaliðir'
                                  },
                                  {
                                    display: 'Axlir',
                                    subOptions: [
                                      {
                                        display: 'NOS',
                                        output: 'Helstu liðir DIP-liðir, PIP-liðir, MCP-liðir, úlnliðir, olnbogaliðir og axlarliðir'
                                      },
                                      {
                                        display: 'Mjaðmir',
                                        subOptions: [
                                          {
                                            display: 'NOS',
                                            output: 'Helstu liðir DIP-liðir, PIP-liðir, MCP-liðir, úlnliðir, olnbogaliðir, axlarliðir og mjaðmarliðir'
                                          },
                                          {
                                            display: 'Hné',
                                            subOptions: [
                                              {
                                                display: 'NOS',
                                                output: 'Helstu liðir DIP-liðir, PIP-liðir, MCP-liðir, úlnliðir, olnbogaliðir, axlarliðir, mjaðmarliðir og hnéliðir'
                                              },
                                              {
                                                display: 'Ökkli',
                                                output: 'Helstu liðir DIP-liðir, PIP-liðir, MCP-liðir, úlnliðir, olnbogaliðir, axlarliðir, mjaðmarliðir, hnéliðir og ökklaliðir'
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                display: 'PIP',
                subOptions: [
                  {
                    display: 'NOS',
                    output: 'Helstu liðir PIP-liðir'
                  },
                  {
                    display: 'DIP',
                    subOptions: [
                      {
                        display: 'NOS',
                        output: 'Helstu liðir PIP-liðir og DIP-liðir'
                      },
                      {
                        display: 'MCP',
                        subOptions: [
                          {
                            display: 'NOS',
                            output: 'Helstu liðir PIP-liðir, DIP-liðir og MCP-liðir'
                          },
                          {
                            display: 'Úlnlið',
                            subOptions: [
                              {
                                display: 'NOS',
                                output: 'Helstu liðir PIP-liðir, DIP-liðir, MCP-liðir og úlnliðir'
                              },
                              {
                                display: 'Olnboga',
                                subOptions: [
                                  {
                                    display: 'NOS',
                                    output: 'Helstu liðir PIP-liðir, DIP-liðir, MCP-liðir, úlnliðir og olnbogaliðir'
                                  },
                                  {
                                    display: 'Axlir',
                                    subOptions: [
                                      {
                                        display: 'NOS',
                                        output: 'Helstu liðir PIP-liðir, DIP-liðir, MCP-liðir, úlnliðir, olnbogaliðir og axlarliðir'
                                      },
                                      {
                                        display: 'Mjaðmir',
                                        subOptions: [
                                          {
                                            display: 'NOS',
                                            output: 'Helstu liðir PIP-liðir, DIP-liðir, MCP-liðir, úlnliðir, olnbogaliðir, axlarliðir og mjaðmarliðir'
                                          },
                                          {
                                            display: 'Hné',
                                            subOptions: [
                                              {
                                                display: 'NOS',
                                                output: 'Helstu liðir PIP-liðir, DIP-liðir, MCP-liðir, úlnliðir, olnbogaliðir, axlarliðir, mjaðmarliðir og hnéliðir'
                                              },
                                              {
                                                display: 'Ökkli',
                                                output: 'Helstu liðir PIP-liðir, DIP-liðir, MCP-liðir, úlnliðir, olnbogaliðir, axlarliðir, mjaðmarliðir, hnéliðir og ökklaliðir'
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                display: 'MCP',
                subOptions: [
                  {
                    display: 'NOS',
                    output: 'Helstu liðir MCP-liðir'
                  },
                  {
                    display: 'DIP',
                    subOptions: [
                      {
                        display: 'NOS',
                        output: 'Helstu liðir MCP-liðir og DIP-liðir'
                      },
                      {
                        display: 'PIP',
                        subOptions: [
                          {
                            display: 'NOS',
                            output: 'Helstu liðir MCP-liðir, DIP-liðir og PIP-liðir'
                          },
                          {
                            display: 'Úlnlið',
                            subOptions: [
                              {
                                display: 'NOS',
                                output: 'Helstu liðir MCP-liðir, DIP-liðir, PIP-liðir og úlnliðir'
                              },
                              {
                                display: 'Olnboga',
                                subOptions: [
                                  {
                                    display: 'NOS',
                                    output: 'Helstu liðir MCP-liðir, DIP-liðir, PIP-liðir, úlnliðir og olnbogaliðir'
                                  },
                                  {
                                    display: 'Axlir',
                                    subOptions: [
                                      {
                                        display: 'NOS',
                                        output: 'Helstu liðir MCP-liðir, DIP-liðir, PIP-liðir, úlnliðir, olnbogaliðir og axlarliðir'
                                      },
                                      {
                                        display: 'Mjaðmir',
                                        subOptions: [
                                          {
                                            display: 'NOS',
                                            output: 'Helstu liðir MCP-liðir, DIP-liðir, PIP-liðir, úlnliðir, olnbogaliðir, axlarliðir og mjaðmarliðir'
                                          },
                                          {
                                            display: 'Hné',
                                            subOptions: [
                                              {
                                                display: 'NOS',
                                                output: 'Helstu liðir MCP-liðir, DIP-liðir, PIP-liðir, úlnliðir, olnbogaliðir, axlarliðir, mjaðmarliðir og hnéliðir'
                                              },
                                              {
                                                display: 'Ökkli',
                                                output: 'Helstu liðir MCP-liðir, DIP-liðir, PIP-liðir, úlnliðir, olnbogaliðir, axlarliðir, mjaðmarliðir, hnéliðir og ökklaliðir'
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                display: 'Úlnlið',
                subOptions: [
                  {
                    display: 'NOS',
                    output: 'Helstu liðir úlnliðir'
                  },
                  {
                    display: 'DIP',
                    subOptions: [
                      {
                        display: 'NOS',
                        output: 'Helstu liðir úlnliðir og DIP-liðir'
                      },
                      {
                        display: 'PIP',
                        subOptions: [
                          {
                            display: 'NOS',
                            output: 'Helstu liðir úlnliðir, DIP-liðir og PIP-liðir'
                          },
                          {
                            display: 'MCP',
                            subOptions: [
                              {
                                display: 'NOS',
                                output: 'Helstu liðir úlnliðir, DIP-liðir, PIP-liðir og MCP-liðir'
                              },
                              {
                                display: 'Olnboga',
                                subOptions: [
                                  {
                                    display: 'NOS',
                                    output: 'Helstu liðir úlnliðir, DIP-liðir, PIP-liðir, MCP-liðir og olnbogaliðir'
                                  },
                                  {
                                    display: 'Axlir',
                                    subOptions: [
                                      {
                                        display: 'NOS',
                                        output: 'Helstu liðir úlnliðir, DIP-liðir, PIP-liðir, MCP-liðir, olnbogaliðir og axlarliðir'
                                      },
                                      {
                                        display: 'Mjaðmir',
                                        subOptions: [
                                          {
                                            display: 'NOS',
                                            output: 'Helstu liðir úlnliðir, DIP-liðir, PIP-liðir, MCP-liðir, olnbogaliðir, axlarliðir og mjaðmarliðir'
                                          },
                                          {
                                            display: 'Hné',
                                            subOptions: [
                                              {
                                                display: 'NOS',
                                                output: 'Helstu liðir úlnliðir, DIP-liðir, PIP-liðir, MCP-liðir, olnbogaliðir, axlarliðir, mjaðmarliðir og hnéliðir'
                                              },
                                              {
                                                display: 'Ökkli',
                                                output: 'Helstu liðir úlnliðir, DIP-liðir, PIP-liðir, MCP-liðir, olnbogaliðir, axlarliðir, mjaðmarliðir, hnéliðir og ökklaliðir'
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                display: 'Olnboga',
                subOptions: [
                  {
                    display: 'NOS',
                    output: 'Helstu liðir olnbogaliðir'
                  },
                  {
                    display: 'DIP',
                    subOptions: [
                      {
                        display: 'NOS',
                        output: 'Helstu liðir olnbogaliðir og DIP-liðir'
                      },
                      {
                        display: 'PIP',
                        subOptions: [
                          {
                            display: 'NOS',
                            output: 'Helstu liðir olnbogaliðir, DIP-liðir og PIP-liðir'
                          },
                          {
                            display: 'MCP',
                            subOptions: [
                              {
                                display: 'NOS',
                                output: 'Helstu liðir olnbogaliðir, DIP-liðir, PIP-liðir og MCP-liðir'
                              },
                              {
                                display: 'Úlnlið',
                                subOptions: [
                                  {
                                    display: 'NOS',
                                    output: 'Helstu liðir olnbogaliðir, DIP-liðir, PIP-liðir, MCP-liðir og úlnliðir'
                                  },
                                  {
                                    display: 'Axlir',
                                    subOptions: [
                                      {
                                        display: 'NOS',
                                        output: 'Helstu liðir olnbogaliðir, DIP-liðir, PIP-liðir, MCP-liðir, úlnliðir og axlarliðir'
                                      },
                                      {
                                        display: 'Mjaðmir',
                                        subOptions: [
                                          {
                                            display: 'NOS',
                                            output: 'Helstu liðir olnbogaliðir, DIP-liðir, PIP-liðir, MCP-liðir, úlnliðir, axlarliðir og mjaðmarliðir'
                                          },
                                          {
                                            display: 'Hné',
                                            subOptions: [
                                              {
                                                display: 'NOS',
                                                output: 'Helstu liðir olnbogaliðir, DIP-liðir, PIP-liðir, MCP-liðir, úlnliðir, axlarliðir, mjaðmarliðir og hnéliðir'
                                              },
                                              {
                                                display: 'Ökkli',
                                                output: 'Helstu liðir olnbogaliðir, DIP-liðir, PIP-liðir, MCP-liðir, úlnliðir, axlarliðir, mjaðmarliðir, hnéliðir og ökklaliðir'
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                display: 'Axlir',
                subOptions: [
                  {
                    display: 'NOS',
                    output: 'Helstu liðir axlarliðir'
                  },
                  {
                    display: 'DIP',
                    subOptions: [
                      {
                        display: 'NOS',
                        output: 'Helstu liðir axlarliðir og DIP-liðir'
                      },
                      {
                        display: 'PIP',
                        subOptions: [
                          {
                            display: 'NOS',
                            output: 'Helstu liðir axlarliðir, DIP-liðir og PIP-liðir'
                          },
                          {
                            display: 'MCP',
                            subOptions: [
                              {
                                display: 'NOS',
                                output: 'Helstu liðir axlarliðir, DIP-liðir, PIP-liðir og MCP-liðir'
                              },
                              {
                                display: 'Úlnlið',
                                subOptions: [
                                  {
                                    display: 'NOS',
                                    output: 'Helstu liðir axlarliðir, DIP-liðir, PIP-liðir, MCP-liðir og úlnliðir'
                                  },
                                  {
                                    display: 'Olnboga',
                                    subOptions: [
                                      {
                                        display: 'NOS',
                                        output: 'Helstu liðir axlarliðir, DIP-liðir, PIP-liðir, MCP-liðir, úlnliðir og olnbogaliðir'
                                      },
                                      {
                                        display: 'Mjaðmir',
                                        subOptions: [
                                          {
                                            display: 'NOS',
                                            output: 'Helstu liðir axlarliðir, DIP-liðir, PIP-liðir, MCP-liðir, úlnliðir, olnbogaliðir og mjaðmarliðir'
                                          },
                                          {
                                            display: 'Hné',
                                            subOptions: [
                                              {
                                                display: 'NOS',
                                                output: 'Helstu liðir axlarliðir, DIP-liðir, PIP-liðir, MCP-liðir, úlnliðir, olnbogaliðir, mjaðmarliðir og hnéliðir'
                                              },
                                              {
                                                display: 'Ökkli',
                                                output: 'Helstu liðir axlarliðir, DIP-liðir, PIP-liðir, MCP-liðir, úlnliðir, olnbogaliðir, mjaðmarliðir, hnéliðir og ökklaliðir'
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                display: 'Mjaðmir',
                subOptions: [
                  {
                    display: 'NOS',
                    output: 'Helstu liðir mjaðmarliðir'
                  },
                  {
                    display: 'DIP',
                    subOptions: [
                      {
                        display: 'NOS',
                        output: 'Helstu liðir mjaðmarliðir og DIP-liðir'
                      },
                      {
                        display: 'PIP',
                        subOptions: [
                          {
                            display: 'NOS',
                            output: 'Helstu liðir mjaðmarliðir, DIP-liðir og PIP-liðir'
                          },
                          {
                            display: 'MCP',
                            subOptions: [
                              {
                                display: 'NOS',
                                output: 'Helstu liðir mjaðmarliðir, DIP-liðir, PIP-liðir og MCP-liðir'
                              },
                              {
                                display: 'Úlnlið',
                                subOptions: [
                                  {
                                    display: 'NOS',
                                    output: 'Helstu liðir mjaðmarliðir, DIP-liðir, PIP-liðir, MCP-liðir og úlnliðir'
                                  },
                                  {
                                    display: 'Olnboga',
                                    subOptions: [
                                      {
                                        display: 'NOS',
                                        output: 'Helstu liðir mjaðmarliðir, DIP-liðir, PIP-liðir, MCP-liðir, úlnliðir og olnbogaliðir'
                                      },
                                      {
                                        display: 'Axlir',
                                        subOptions: [
                                          {
                                            display: 'NOS',
                                            output: 'Helstu liðir mjaðmarliðir, DIP-liðir, PIP-liðir, MCP-liðir, úlnliðir, olnbogaliðir og axlarliðir'
                                          },
                                          {
                                            display: 'Hné',
                                            subOptions: [
                                              {
                                                display: 'NOS',
                                                output: 'Helstu liðir mjaðmarliðir, DIP-liðir, PIP-liðir, MCP-liðir, úlnliðir, olnbogaliðir, axlarliðir og hnéliðir'
                                              },
                                              {
                                                display: 'Ökkli',
                                                output: 'Helstu liðir mjaðmarliðir, DIP-liðir, PIP-liðir, MCP-liðir, úlnliðir, olnbogaliðir, axlarliðir, hnéliðir og ökklaliðir'
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                display: 'Hné',
                subOptions: [
                  {
                    display: 'NOS',
                    output: 'Helstu liðir hnéliðir'
                  },
                  {
                    display: 'DIP',
                    subOptions: [
                      {
                        display: 'NOS',
                        output: 'Helstu liðir hnéliðir og DIP-liðir'
                      },
                      {
                        display: 'PIP',
                        subOptions: [
                          {
                            display: 'NOS',
                            output: 'Helstu liðir hnéliðir, DIP-liðir og PIP-liðir'
                          },
                          {
                            display: 'MCP',
                            subOptions: [
                              {
                                display: 'NOS',
                                output: 'Helstu liðir hnéliðir, DIP-liðir, PIP-liðir og MCP-liðir'
                              },
                              {
                                display: 'Úlnlið',
                                subOptions: [
                                  {
                                    display: 'NOS',
                                    output: 'Helstu liðir hnéliðir, DIP-liðir, PIP-liðir, MCP-liðir og úlnliðir'
                                  },
                                  {
                                    display: 'Olnboga',
                                    subOptions: [
                                      {
                                        display: 'NOS',
                                        output: 'Helstu liðir hnéliðir, DIP-liðir, PIP-liðir, MCP-liðir, úlnliðir og olnbogaliðir'
                                      },
                                      {
                                        display: 'Axlir',
                                        subOptions: [
                                          {
                                            display: 'NOS',
                                            output: 'Helstu liðir hnéliðir, DIP-liðir, PIP-liðir, MCP-liðir, úlnliðir, olnbogaliðir og axlarliðir'
                                          },
                                          {
                                            display: 'Mjaðmir',
                                            subOptions: [
                                              {
                                                display: 'NOS',
                                                output: 'Helstu liðir hnéliðir, DIP-liðir, PIP-liðir, MCP-liðir, úlnliðir, olnbogaliðir, axlarliðir og mjaðmarliðir'
                                              },
                                              {
                                                display: 'Ökkli',
                                                output: 'Helstu liðir hnéliðir, DIP-liðir, PIP-liðir, MCP-liðir, úlnliðir, olnbogaliðir, axlarliðir, mjaðmarliðir og ökklaliðir'
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                display: 'Ökkli',
                subOptions: [
                  {
                    display: 'NOS',
                    output: 'Helstu liðir ökklaliðir'
                  },
                  {
                    display: 'DIP',
                    subOptions: [
                      {
                        display: 'NOS',
                        output: 'Helstu liðir ökklaliðir og DIP-liðir'
                      },
                      {
                        display: 'PIP',
                        subOptions: [
                          {
                            display: 'NOS',
                            output: 'Helstu liðir ökklaliðir, DIP-liðir og PIP-liðir'
                          },
                          {
                            display: 'MCP',
                            subOptions: [
                              {
                                display: 'NOS',
                                output: 'Helstu liðir ökklaliðir, DIP-liðir, PIP-liðir og MCP-liðir'
                              },
                              {
                                display: 'Úlnlið',
                                subOptions: [
                                  {
                                    display: 'NOS',
                                    output: 'Helstu liðir ökklaliðir, DIP-liðir, PIP-liðir, MCP-liðir og úlnliðir'
                                  },
                                  {
                                    display: 'Olnboga',
                                    subOptions: [
                                      {
                                        display: 'NOS',
                                        output: 'Helstu liðir ökklaliðir, DIP-liðir, PIP-liðir, MCP-liðir, úlnliðir og olnbogaliðir'
                                      },
                                      {
                                        display: 'Axlir',
                                        subOptions: [
                                          {
                                            display: 'NOS',
                                            output: 'Helstu liðir ökklaliðir, DIP-liðir, PIP-liðir, MCP-liðir, úlnliðir, olnbogaliðir og axlarliðir'
                                          },
                                          {
                                            display: 'Mjaðmir',
                                            subOptions: [
                                              {
                                                display: 'NOS',
                                                output: 'Helstu liðir ökklaliðir, DIP-liðir, PIP-liðir, MCP-liðir, úlnliðir, olnbogaliðir, axlarliðir og mjaðmarliðir'
                                              },
                                              {
                                                display: 'Hné',
                                                output: 'Helstu liðir ökklaliðir, DIP-liðir, PIP-liðir, MCP-liðir, úlnliðir, olnbogaliðir, axlarliðir, mjaðmarliðir og hnéliðir'
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
      
    
];
const ExamsGigt = [
    {
        name: '',
        type: 'options',
        display: ['Útlit', 'Hreyfigeta', 'Þreifieymsl'],
        options: [
            {
                display: 'Útlit',
                subOptions: [
                    { display: 'Bólga', output: 'Sést bólga í liðamótum' },
                    { display: 'Rautt', output: 'Liðamót eru rauð' }
                ],
                onRightClickSubOptions: [
                    { display: 'Eðlilegt', output: 'Útlit liðamóta er eðlilegt' }
                ]
            },
            {
                display: 'Hreyfigeta',
                subOptions: [
                    { display: 'Minnkuð', output: 'Minnkuð hreyfigeta í liðamótum' },
                    { display: 'Eðlileg', output: 'Eðlileg hreyfigeta í liðamótum' }
                ],
                onRightClickOutput: 'Full hreyfigeta'
            },
            {
                display: 'Þreifieymsl',
                subOptions: [
                    { display: 'Verkir við þreifingu', output: 'Verkir við þreifingu á liðamótum' },
                    { display: 'Engir verkir við þreifingu', output: 'Engir verkir við þreifingu á liðamótum' }
                ],
                onRightClickOutput: 'Engin eymsl við þreifingu'
            }
        ]
    }
];
const PlanGigt = [
    {
        name: '',
        type: 'options',
        display: ['Lyfjameðferð', 'Liðástungur', 'Fylgjast með þróun', 'Vísun til sérfræðings'],
        options: [
            {
                display: 'Lyfjameðferð',
                subOptions: [
                    { display: 'Bólgueyðandi lyf', output: 'Ávísun á bólgueyðandi lyf' },
                    { display: 'Sterar', output: 'Ávísun á stera' },
                    { display: 'Methotrexate', output: 'Ávísun á methotrexate' }
                ],
                onRightClickOutput: 'Engin lyfjameðferð'
            },
            { display: 'Liðástungur', output: 'Áform um liðástungu', onRightClickOutput: 'Engin þörf á liðástungu' },
            { display: 'Fylgjast með þróun', output: 'Áform um að fylgjast með þróun sjúkdóms', onRightClickOutput: 'Engin fylgni áformuð' },
            { display: 'Vísun til sérfræðings', output: 'Sjúkling vísað til gigtarlæknis', onRightClickOutput: 'Engin vísun til sérfræðings' }
        ]
    }
];



const LyfData = [
    {
        name: '',
        type: 'options',
        display: ['Blóðþrýstingslyf'],
        options: [
            {
                display: 'Blóðþrýstingslyf',
                subOptions: [
                    { display: 'NOS', output: 'Er á blóðþrýstingslyfjum' },
                    {
                        display: 'ACE-hemill',
                        subOptions: [
                            {
                                display: 'Ramipril',
                                subOptions: [
                                    {
                                        display: 'NOS',
                                        subOptions: [
                                            { display: 'NOS', output: 'Ramipril' },
                                            { display: 'Set á', output: 'Set á Ramipril' },
                                            { display: 'Bæti við', output: 'Bæti við Ramipril' },
                                            { display: 'Er á', output: 'Er á Ramipril' }
                                        ]
                                    },
                                    {
                                        display: '2.5mg',
                                        subOptions: [
                                            {
                                                display: 'NOS',
                                                subOptions: [
                                                    { display: 'NOS', output: 'Ramipril 2.5mg' },
                                                    { display: 'Set á', output: 'Set á Ramipril 2.5mg' },
                                                    { display: 'Bæti við', output: 'Bæti við Ramipril 2.5mg' },
                                                    { display: 'Er á', output: 'Er á Ramipril 2.5mg' }
                                                ]
                                            },
                                            {
                                                display: '1x1',
                                                subOptions: [
                                                    { display: 'NOS', output: 'Ramipril 2.5mg 1x1' },
                                                    { display: 'Set á', output: 'Set á Ramipril 2.5mg 1x1' },
                                                    { display: 'Bæti við', output: 'Bæti við Ramipril 2.5mg 1x1' },
                                                    { display: 'Er á', output: 'Er á Ramipril 2.5mg 1x1' }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        display: '5mg',
                                        subOptions: [
                                            {
                                                display: 'NOS',
                                                subOptions: [
                                                    { display: 'NOS', output: 'Ramipril 5mg' },
                                                    { display: 'Set á', output: 'Set á Ramipril 5mg' },
                                                    { display: 'Bæti við', output: 'Bæti við Ramipril 5mg' },
                                                    { display: 'Er á', output: 'Er á Ramipril 5mg' }
                                                ]
                                            },
                                            {
                                                display: '1x1',
                                                subOptions: [
                                                    { display: 'NOS', output: 'Ramipril 5mg 1x1' },
                                                    { display: 'Set á', output: 'Set á Ramipril 5mg 1x1' },
                                                    { display: 'Bæti við', output: 'Bæti við Ramipril 5mg 1x1' },
                                                    { display: 'Er á', output: 'Er á Ramipril 5mg 1x1' }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        display: '10mg',
                                        subOptions: [
                                            {
                                                display: 'NOS',
                                                subOptions: [
                                                    { display: 'NOS', output: 'Ramipril 10mg' },
                                                    { display: 'Set á', output: 'Set á Ramipril 10mg' },
                                                    { display: 'Bæti við', output: 'Bæti við Ramipril 10mg' },
                                                    { display: 'Er á', output: 'Er á Ramipril 10mg' }
                                                ]
                                            },
                                            {
                                                display: '1x1',
                                                subOptions: [
                                                    { display: 'NOS', output: 'Ramipril 10mg 1x1' },
                                                    { display: 'Set á', output: 'Set á Ramipril 10mg 1x1' },
                                                    { display: 'Bæti við', output: 'Bæti við Ramipril 10mg 1x1' },
                                                    { display: 'Er á', output: 'Er á Ramipril 10mg 1x1' }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        display: 'Angiotensin II receptor blocker (ARB)',
                        subOptions: [
                            {
                                display: 'Losartan',
                                subOptions: [
                                    {
                                        display: 'NOS',
                                        subOptions: [
                                            { display: 'NOS', output: 'Losartan' },
                                            { display: 'Set á', output: 'Set á Losartan' },
                                            { display: 'Bæti við', output: 'Bæti við Losartan' },
                                            { display: 'Er á', output: 'Er á Losartan' }
                                        ]
                                    },
                                    {
                                        display: '25mg',
                                        subOptions: [
                                            {
                                                display: 'NOS',
                                                subOptions: [
                                                    { display: 'NOS', output: 'Losartan 25mg' },
                                                    { display: 'Set á', output: 'Set á Losartan 25mg' },
                                                    { display: 'Bæti við', output: 'Bæti við Losartan 25mg' },
                                                    { display: 'Er á', output: 'Er á Losartan 25mg' }
                                                ]
                                            },
                                            {
                                                display: '1x1',
                                                subOptions: [
                                                    { display: 'NOS', output: 'Losartan 25mg 1x1' },
                                                    { display: 'Set á', output: 'Set á Losartan 25mg 1x1' },
                                                    { display: 'Bæti við', output: 'Bæti við Losartan 25mg 1x1' },
                                                    { display: 'Er á', output: 'Er á Losartan 25mg 1x1' }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        display: '50mg',
                                        subOptions: [
                                            {
                                                display: 'NOS',
                                                subOptions: [
                                                    { display: 'NOS', output: 'Losartan 50mg' },
                                                    { display: 'Set á', output: 'Set á Losartan 50mg' },
                                                    { display: 'Bæti við', output: 'Bæti við Losartan 50mg' },
                                                    { display: 'Er á', output: 'Er á Losartan 50mg' }
                                                ]
                                            },
                                            {
                                                display: '1x1',
                                                subOptions: [
                                                    { display: 'NOS', output: 'Losartan 50mg 1x1' },
                                                    { display: 'Set á', output: 'Set á Losartan 50mg 1x1' },
                                                    { display: 'Bæti við', output: 'Bæti við Losartan 50mg 1x1' },
                                                    { display: 'Er á', output: 'Er á Losartan 50mg 1x1' }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        display: '100mg',
                                        subOptions: [
                                            {
                                                display: 'NOS',
                                                subOptions: [
                                                    { display: 'NOS', output: 'Losartan 100mg' },
                                                    { display: 'Set á', output: 'Set á Losartan 100mg' },
                                                    { display: 'Bæti við', output: 'Bæti við Losartan 100mg' },
                                                    { display: 'Er á', output: 'Er á Losartan 100mg' }
                                                ]
                                            },
                                            {
                                                display: '1x1',
                                                subOptions: [
                                                    { display: 'NOS', output: 'Losartan 100mg 1x1' },
                                                    { display: 'Set á', output: 'Set á Losartan 100mg 1x1' },
                                                    { display: 'Bæti við', output: 'Bæti við Losartan 100mg 1x1' },
                                                    { display: 'Er á', output: 'Er á Losartan 100mg 1x1' }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        display: 'Beta-blokki',
                        subOptions: [
                            {
                                display: 'Metoprolol',
                                subOptions: [
                                    {
                                        display: 'NOS',
                                        subOptions: [
                                            { display: 'NOS', output: 'Metoprolol' },
                                            { display: 'Set á', output: 'Set á Metoprolol' },
                                            { display: 'Bæti við', output: 'Bæti við Metoprolol' },
                                            { display: 'Er á', output: 'Er á Metoprolol' }
                                        ]
                                    },
                                    {
                                        display: '25mg',
                                        subOptions: [
                                            {
                                                display: 'NOS',
                                                subOptions: [
                                                    { display: 'NOS', output: 'Metoprolol 25mg' },
                                                    { display: 'Set á', output: 'Set á Metoprolol 25mg' },
                                                    { display: 'Bæti við', output: 'Bæti við Metoprolol 25mg' },
                                                    { display: 'Er á', output: 'Er á Metoprolol 25mg' }
                                                ]
                                            },
                                            {
                                                display: '1x1',
                                                subOptions: [
                                                    { display: 'NOS', output: 'Metoprolol 25mg 1x1' },
                                                    { display: 'Set á', output: 'Set á Metoprolol 25mg 1x1' },
                                                    { display: 'Bæti við', output: 'Bæti við Metoprolol 25mg 1x1' },
                                                    { display: 'Er á', output: 'Er á Metoprolol 25mg 1x1' }
                                                ]
                                            },
                                            {
                                                display: '1x2',
                                                subOptions: [
                                                    { display: 'NOS', output: 'Metoprolol 25mg 1x2' },
                                                    { display: 'Set á', output: 'Set á Metoprolol 25mg 1x2' },
                                                    { display: 'Bæti við', output: 'Bæti við Metoprolol 25mg 1x2' },
                                                    { display: 'Er á', output: 'Er á Metoprolol 25mg 1x2' }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        display: '50mg',
                                        subOptions: [
                                            {
                                                display: 'NOS',
                                                subOptions: [
                                                    { display: 'NOS', output: 'Metoprolol 50mg' },
                                                    { display: 'Set á', output: 'Set á Metoprolol 50mg' },
                                                    { display: 'Bæti við', output: 'Bæti við Metoprolol 50mg' },
                                                    { display: 'Er á', output: 'Er á Metoprolol 50mg' }
                                                ]
                                            },
                                            {
                                                display: '1x1',
                                                subOptions: [
                                                    { display: 'NOS', output: 'Metoprolol 50mg 1x1' },
                                                    { display: 'Set á', output: 'Set á Metoprolol 50mg 1x1' },
                                                    { display: 'Bæti við', output: 'Bæti við Metoprolol 50mg 1x1' },
                                                    { display: 'Er á', output: 'Er á Metoprolol 50mg 1x1' }
                                                ]
                                            },
                                            {
                                                display: '1x2',
                                                subOptions: [
                                                    { display: 'NOS', output: 'Metoprolol 50mg 1x2' },
                                                    { display: 'Set á', output: 'Set á Metoprolol 50mg 1x2' },
                                                    { display: 'Bæti við', output: 'Bæti við Metoprolol 50mg 1x2' },
                                                    { display: 'Er á', output: 'Er á Metoprolol 50mg 1x2' }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        display: '100mg',
                                        subOptions: [
                                            {
                                                display: 'NOS',
                                                subOptions: [
                                                    { display: 'NOS', output: 'Metoprolol 100mg' },
                                                    { display: 'Set á', output: 'Set á Metoprolol 100mg' },
                                                    { display: 'Bæti við', output: 'Bæti við Metoprolol 100mg' },
                                                    { display: 'Er á', output: 'Er á Metoprolol 100mg' }
                                                ]
                                            },
                                            {
                                                display: '1x1',
                                                subOptions: [
                                                    { display: 'NOS', output: 'Metoprolol 100mg 1x1' },
                                                    { display: 'Set á', output: 'Set á Metoprolol 100mg 1x1' },
                                                    { display: 'Bæti við', output: 'Bæti við Metoprolol 100mg 1x1' },
                                                    { display: 'Er á', output: 'Er á Metoprolol 100mg 1x1' }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
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
    {
        name: '',
        type: 'options',
        display: ['Reykingar', 'Áfengi', 'Eiturlyf', 'Ofnæmi'],
        options: [
            {
                display: 'Reykingar',
                subOptions: [
                    {display: 'Reykir', output: 'Reykingasaga'},
                    {
                        display: '1-10 pakkaár',
                        subOptions: Array.from({ length: 10 }, (_, i) => ({
                            display: `${i + 1} pakkaár`,
                            output: `Reykir. ${i + 1} pakkaár að baki`
                        }))
                    },
                    {
                        display: '11-20 pakkaár',
                        subOptions: Array.from({ length: 10 }, (_, i) => ({
                            display: `${11 + i} pakkaár`,
                            output: `Reykir. ${11 + i} pakkaár að baki`
                        }))
                    },
                    {
                        display: '21-30 pakkaár',
                        subOptions: Array.from({ length: 10 }, (_, i) => ({
                            display: `${21 + i} pakkaár`,
                            output: `Reykir. ${21 + i} pakkaár að baki`
                        }))
                    },
                    {
                        display: '31-40 pakkaár',
                        subOptions: Array.from({ length: 10 }, (_, i) => ({
                            display: `${31 + i} pakkaár`,
                            output: `Reykir. ${31 + i} pakkaár að baki`
                        }))
                    },
                    {
                        display: '41-50 pakkaár',
                        subOptions: Array.from({ length: 10 }, (_, i) => ({
                            display: `${41 + i} pakkaár`,
                            output: `Reykir. ${41 + i} pakkaár að baki`
                        }))
                    },
                    {
                        display: '51-60 pakkaár',
                        subOptions: Array.from({ length: 10 }, (_, i) => ({
                            display: `${51 + i} pakkaár`,
                            output: `Reykir. ${51 + i} pakkaár að baki`
                        }))
                    }
                ],
                onRightClickSubOptions: [
                    {
                        display: 'Reykir ekki',
                        subOptions: [
                            {display: 'Reykir ekki', output: 'Reykir ekki'},
                            {
                                display: 'Hætti fyrir 1-10 árum',
                                subOptions: Array.from({ length: 10 }, (_, i) => ({
                                    display: `Hætti fyrir ${i + 1} árum`,
                                    subOptions: [
                                        {
                                            display: '1-10 pakkaár',
                                            subOptions: Array.from({ length: 10 }, (_, j) => ({
                                                display: `${j + 1} pakkaár`,
                                                output: `Reykir ekki. Hætti fyrir ${i + 1} árum. Reykti ${j + 1} pakkaár fram að því`
                                            }))
                                        },
                                        {
                                            display: '11-20 pakkaár',
                                            subOptions: Array.from({ length: 10 }, (_, j) => ({
                                                display: `${11 + j} pakkaár`,
                                                output: `Reykir ekki. Hætti fyrir ${i + 1} árum. Reykti ${11 + j} pakkaár fram að því`
                                            }))
                                        },
                                        {
                                            display: '21-30 pakkaár',
                                            subOptions: Array.from({ length: 10 }, (_, j) => ({
                                                display: `${21 + j} pakkaár`,
                                                output: `Reykir ekki. Hætti fyrir ${i + 1} árum. Reykti ${21 + j} pakkaár fram að því`
                                            }))
                                        },
                                        {
                                            display: '31-40 pakkaár',
                                            subOptions: Array.from({ length: 10 }, (_, j) => ({
                                                display: `${31 + j} pakkaár`,
                                                output: `Reykir ekki. Hætti fyrir ${i + 1} árum. Reykti ${31 + j} pakkaár fram að því`
                                            }))
                                        },
                                        {
                                            display: '41-50 pakkaár',
                                            subOptions: Array.from({ length: 10 }, (_, j) => ({
                                                display: `${41 + j} pakkaár`,
                                                output: `Reykir ekki. Hætti fyrir ${i + 1} árum. Reykti ${41 + j} pakkaár fram að því`
                                            }))
                                        },
                                        {
                                            display: '51-60 pakkaár',
                                            subOptions: Array.from({ length: 10 }, (_, j) => ({
                                                display: `${51 + j} pakkaár`,
                                                output: `Reykir ekki. Hætti fyrir ${i + 1} árum. Reykti ${51 + j} pakkaár fram að því`
                                            }))
                                        }
                                    ]
                                }))
                            },
                            {
                                display: 'Hætti fyrir 11-20 árum',
                                subOptions: Array.from({ length: 10 }, (_, i) => ({
                                    display: `Hætti fyrir ${11 + i} árum`,
                                    subOptions: [
                                        {
                                            display: '1-10 pakkaár',
                                            subOptions: Array.from({ length: 10 }, (_, j) => ({
                                                display: `${j + 1} pakkaár`,
                                                output: `Reykir ekki. Hætti fyrir ${11 + i} árum. Reykti ${j + 1} pakkaár fram að því`
                                            }))
                                        },
                                        {
                                            display: '11-20 pakkaár',
                                            subOptions: Array.from({ length: 10 }, (_, j) => ({
                                                display: `${11 + j} pakkaár`,
                                                output: `Reykir ekki. Hætti fyrir ${11 + i} árum. Reykti ${11 + j} pakkaár fram að því`
                                            }))
                                        },
                                        {
                                            display: '21-30 pakkaár',
                                            subOptions: Array.from({ length: 10 }, (_, j) => ({
                                                display: `${21 + j} pakkaár`,
                                                output: `Reykir ekki. Hætti fyrir ${11 + i} árum. Reykti ${21 + j} pakkaár fram að því`
                                            }))
                                        },
                                        {
                                            display: '31-40 pakkaár',
                                            subOptions: Array.from({ length: 10 }, (_, j) => ({
                                                display: `${31 + j} pakkaár`,
                                                output: `Reykir ekki. Hætti fyrir ${11 + i} árum. Reykti ${31 + j} pakkaár fram að því`
                                            }))
                                        },
                                        {
                                            display: '41-50 pakkaár',
                                            subOptions: Array.from({ length: 10 }, (_, j) => ({
                                                display: `${41 + j} pakkaár`,
                                                output: `Reykir ekki. Hætti fyrir ${11 + i} árum. Reykti ${41 + j} pakkaár fram að því`
                                            }))
                                        },
                                        {
                                            display: '51-60 pakkaár',
                                            subOptions: Array.from({ length: 10 }, (_, j) => ({
                                                display: `${51 + j} pakkaár`,
                                                output: `Reykir ekki. Hætti fyrir ${11 + i} árum. Reykti ${51 + j} pakkaár fram að því`
                                            }))
                                        }
                                    ]
                                }))
                            },
                            {
                                display: 'Hætti fyrir 21-30 árum',
                                subOptions: Array.from({ length: 10 }, (_, i) => ({
                                    display: `Hætti fyrir ${21 + i} árum`,
                                    subOptions: [
                                        {
                                            display: '1-10 pakkaár',
                                            subOptions: Array.from({ length: 10 }, (_, j) => ({
                                                display: `${j + 1} pakkaár`,
                                                output: `Reykir ekki. Hætti fyrir ${21 + i} árum. Reykti ${j + 1} pakkaár fram að því`
                                            }))
                                        },
                                        {
                                            display: '11-20 pakkaár',
                                            subOptions: Array.from({ length: 10 }, (_, j) => ({
                                                display: `${11 + j} pakkaár`,
                                                output: `Reykir ekki. Hætti fyrir ${21 + i} árum. Reykti ${11 + j} pakkaár fram að því`
                                            }))
                                        },
                                        {
                                            display: '21-30 pakkaár',
                                            subOptions: Array.from({ length: 10 }, (_, j) => ({
                                                display: `${21 + j} pakkaár`,
                                                output: `Reykir ekki. Hætti fyrir ${21 + i} árum. Reykti ${21 + j} pakkaár fram að því`
                                            }))
                                        },
                                        {
                                            display: '31-40 pakkaár',
                                            subOptions: Array.from({ length: 10 }, (_, j) => ({
                                                display: `${31 + j} pakkaár`,
                                                output: `Reykir ekki. Hætti fyrir ${21 + i} árum. Reykti ${31 + j} pakkaár fram að því`
                                            }))
                                        },
                                        {
                                            display: '41-50 pakkaár',
                                            subOptions: Array.from({ length: 10 }, (_, j) => ({
                                                display: `${41 + j} pakkaár`,
                                                output: `Reykir ekki. Hætti fyrir ${21 + i} árum. Reykti ${41 + j} pakkaár fram að því`
                                            }))
                                        },
                                        {
                                            display: '51-60 pakkaár',
                                            subOptions: Array.from({ length: 10 }, (_, j) => ({
                                                display: `${51 + j} pakkaár`,
                                                output: `Reykir ekki. Hætti fyrir ${21 + i} árum. Reykti ${51 + j} pakkaár fram að því`
                                            }))
                                        }
                                    ]
                                }))
                            },
                            {
                                display: 'Hætti fyrir 31-40 árum',
                                subOptions: Array.from({ length: 10 }, (_, i) => ({
                                    display: `Hætti fyrir ${31 + i} árum`,
                                    subOptions: [
                                        {
                                            display: '1-10 pakkaár',
                                            subOptions: Array.from({ length: 10 }, (_, j) => ({
                                                display: `${j + 1} pakkaár`,
                                                output: `Reykir ekki. Hætti fyrir ${31 + i} árum. Reykti ${j + 1} pakkaár fram að því`
                                            }))
                                        },
                                        {
                                            display: '11-20 pakkaár',
                                            subOptions: Array.from({ length: 10 }, (_, j) => ({
                                                display: `${11 + j} pakkaár`,
                                                output: `Reykir ekki. Hætti fyrir ${31 + i} árum. Reykti ${11 + j} pakkaár fram að því`
                                            }))
                                        },
                                        {
                                            display: '21-30 pakkaár',
                                            subOptions: Array.from({ length: 10 }, (_, j) => ({
                                                display: `${21 + j} pakkaár`,
                                                output: `Reykir ekki. Hætti fyrir ${31 + i} árum. Reykti ${21 + j} pakkaár fram að því`
                                            }))
                                        },
                                        {
                                            display: '31-40 pakkaár',
                                            subOptions: Array.from({ length: 10 }, (_, j) => ({
                                                display: `${31 + j} pakkaár`,
                                                output: `Reykir ekki. Hætti fyrir ${31 + i} árum. Reykti ${31 + j} pakkaár fram að því`
                                            }))
                                        },
                                        {
                                            display: '41-50 pakkaár',
                                            subOptions: Array.from({ length: 10 }, (_, j) => ({
                                                display: `${41 + j} pakkaár`,
                                                output: `Reykir ekki. Hætti fyrir ${31 + i} árum. Reykti ${41 + j} pakkaár fram að því`
                                            }))
                                        },
                                        {
                                            display: '51-60 pakkaár',
                                            subOptions: Array.from({ length: 10 }, (_, j) => ({
                                                display: `${51 + j} pakkaár`,
                                                output: `Reykir ekki. Hætti fyrir ${31 + i} árum. Reykti ${51 + j} pakkaár fram að því`
                                            }))
                                        }
                                    ]
                                }))
                            },
                            {
                                display: 'Hætti fyrir 41-50 árum',
                                subOptions: Array.from({ length: 10 }, (_, i) => ({
                                    display: `Hætti fyrir ${41 + i} árum`,
                                    subOptions: [
                                        {
                                            display: '1-10 pakkaár',
                                            subOptions: Array.from({ length: 10 }, (_, j) => ({
                                                display: `${j + 1} pakkaár`,
                                                output: `Reykir ekki. Hætti fyrir ${41 + i} árum. Reykti ${j + 1} pakkaár fram að því`
                                            }))
                                        },
                                        {
                                            display: '11-20 pakkaár',
                                            subOptions: Array.from({ length: 10 }, (_, j) => ({
                                                display: `${11 + j} pakkaár`,
                                                output: `Reykir ekki. Hætti fyrir ${41 + i} árum. Reykti ${11 + j} pakkaár fram að því`
                                            }))
                                        },
                                        {
                                            display: '21-30 pakkaár',
                                            subOptions: Array.from({ length: 10 }, (_, j) => ({
                                                display: `${21 + j} pakkaár`,
                                                output: `Reykir ekki. Hætti fyrir ${41 + i} árum. Reykti ${21 + j} pakkaár fram að því`
                                            }))
                                        },
                                        {
                                            display: '31-40 pakkaár',
                                            subOptions: Array.from({ length: 10 }, (_, j) => ({
                                                display: `${31 + j} pakkaár`,
                                                output: `Reykir ekki. Hætti fyrir ${41 + i} árum. Reykti ${31 + j} pakkaár fram að því`
                                            }))
                                        },
                                        {
                                            display: '41-50 pakkaár',
                                            subOptions: Array.from({ length: 10 }, (_, j) => ({
                                                display: `${41 + j} pakkaár`,
                                                output: `Reykir ekki. Hætti fyrir ${41 + i} árum. Reykti ${41 + j} pakkaár fram að því`
                                            }))
                                        },
                                        {
                                            display: '51-60 pakkaár',
                                            subOptions: Array.from({ length: 10 }, (_, j) => ({
                                                display: `${51 + j} pakkaár`,
                                                output: `Reykir ekki. Hætti fyrir ${41 + i} árum. Reykti ${51 + j} pakkaár fram að því`
                                            }))
                                        }
                                    ]
                                }))
                            },
                            {
                                display: 'Hætti fyrir 51-60 árum',
                                subOptions: Array.from({ length: 10 }, (_, i) => ({
                                    display: `Hætti fyrir ${51 + i} árum`,
                                    subOptions: [
                                        {
                                            display: '1-10 pakkaár',
                                            subOptions: Array.from({ length: 10 }, (_, j) => ({
                                                display: `${j + 1} pakkaár`,
                                                output: `Reykir ekki. Hætti fyrir ${51 + i} árum. Reykti ${j + 1} pakkaár fram að því`
                                            }))
                                        },
                                        {
                                            display: '11-20 pakkaár',
                                            subOptions: Array.from({ length: 10 }, (_, j) => ({
                                                display: `${11 + j} pakkaár`,
                                                output: `Reykir ekki. Hætti fyrir ${51 + i} árum. Reykti ${11 + j} pakkaár fram að því`
                                            }))
                                        },
                                        {
                                            display: '21-30 pakkaár',
                                            subOptions: Array.from({ length: 10 }, (_, j) => ({
                                                display: `${21 + j} pakkaár`,
                                                output: `Reykir ekki. Hætti fyrir ${51 + i} árum. Reykti ${21 + j} pakkaár fram að því`
                                            }))
                                        },
                                        {
                                            display: '31-40 pakkaár',
                                            subOptions: Array.from({ length: 10 }, (_, j) => ({
                                                display: `${31 + j} pakkaár`,
                                                output: `Reykir ekki. Hætti fyrir ${51 + i} árum. Reykti ${31 + j} pakkaár fram að því`
                                            }))
                                        },
                                        {
                                            display: '41-50 pakkaár',
                                            subOptions: Array.from({ length: 10 }, (_, j) => ({
                                                display: `${41 + j} pakkaár`,
                                                output: `Reykir ekki. Hætti fyrir ${51 + i} árum. Reykti ${41 + j} pakkaár fram að því`
                                            }))
                                        },
                                        {
                                            display: '51-60 pakkaár',
                                            subOptions: Array.from({ length: 10 }, (_, j) => ({
                                                display: `${51 + j} pakkaár`,
                                                output: `Reykir ekki. Hætti fyrir ${51 + i} árum. Reykti ${51 + j} pakkaár fram að því`
                                            }))
                                        }
                                    ]
                                }))
                            }
                        ]
                    },
                    {
                        display: 'Aldrei reykt',
                        output: 'Aldrei reykt'
                    }
                ]
            },
            {
                display: 'Áfengi',
                subOptions: [
                    
                    {
                        display: 'Drekkur áfengi',
                        output: 'Drekkur áfengi'
                    },
                    {
                        
                        display: 'Vikulega',
                        subOptions: [
                            
                            {
                                display: '0-10 einingar á viku',
                                subOptions: Array.from({ length: 11 }, (_, i) => ({
                                    display: `${i} einingar`,
                                    subOptions: [
                                        { 
                                            display: 'Bjór',
                                            subOptions: [
                                                { display: 'Daglega', output: `Drekkur u.þ.b. ${i} einingar á viku, aðalega bjór, daglega` },
                                                { display: 'Nær daglega', output: `Drekkur u.þ.b. ${i} einingar á viku, aðalega bjór, nær daglega` },
                                                { display: 'Í lotum', output: `Drekkur u.þ.b. ${i} einingar á viku, aðalega bjór, í lotum` },
                                                { display: 'Í lotum, aðalega um helgar', output: `Drekkur u.þ.b. ${i} einingar á viku, aðalega bjór, í lotum, aðalega um helgar` }
                                            ]
                                        },
                                        { 
                                            display: 'Vín',
                                            subOptions: [
                                                { display: 'Daglega', output: `Drekkur u.þ.b. ${i} einingar á viku, aðalega vín, daglega` },
                                                { display: 'Nær daglega', output: `Drekkur u.þ.b. ${i} einingar á viku, aðalega vín, nær daglega` },
                                                { display: 'Í lotum', output: `Drekkur u.þ.b. ${i} einingar á viku, aðalega vín, í lotum` },
                                                { display: 'Í lotum, aðalega um helgar', output: `Drekkur u.þ.b. ${i} einingar á viku, aðalega vín, í lotum, aðalega um helgar` }
                                            ]
                                        },
                                        { 
                                            display: 'Sterkt áfengi',
                                            subOptions: [
                                                { display: 'Daglega', output: `Drekkur u.þ.b. ${i} einingar á viku, aðalega sterkt áfengi, daglega` },
                                                { display: 'Nær daglega', output: `Drekkur u.þ.b. ${i} einingar á viku, aðalega sterkt áfengi, nær daglega` },
                                                { display: 'Í lotum', output: `Drekkur u.þ.b. ${i} einingar á viku, aðalega sterkt áfengi, í lotum` },
                                                { display: 'Í lotum, aðalega um helgar', output: `Drekkur u.þ.b. ${i} einingar á viku, aðalega sterkt áfengi, í lotum, aðalega um helgar` }
                                            ]
                                        }
                                    ]
                                }))
                            },
                            {
                                display: '11-20 einingar á viku',
                                subOptions: Array.from({ length: 10 }, (_, i) => ({
                                    display: `${11 + i} einingar`,
                                    subOptions: [
                                        { 
                                            display: 'Bjór',
                                            subOptions: [
                                                { display: 'Daglega', output: `Drekkur u.þ.b. ${11 + i} einingar á viku, aðalega bjór, daglega` },
                                                { display: 'Nær daglega', output: `Drekkur u.þ.b. ${11 + i} einingar á viku, aðalega bjór, nær daglega` },
                                                { display: 'Í lotum', output: `Drekkur u.þ.b. ${11 + i} einingar á viku, aðalega bjór, í lotum` },
                                                { display: 'Í lotum, aðalega um helgar', output: `Drekkur u.þ.b. ${11 + i} einingar á viku, aðalega bjór, í lotum, aðalega um helgar` }
                                            ]
                                        },
                                        { 
                                            display: 'Vín',
                                            subOptions: [
                                                { display: 'Daglega', output: `Drekkur u.þ.b. ${11 + i} einingar á viku, aðalega vín, daglega` },
                                                { display: 'Nær daglega', output: `Drekkur u.þ.b. ${11 + i} einingar á viku, aðalega vín, nær daglega` },
                                                { display: 'Í lotum', output: `Drekkur u.þ.b. ${11 + i} einingar á viku, aðalega vín, í lotum` },
                                                { display: 'Í lotum, aðalega um helgar', output: `Drekkur u.þ.b. ${11 + i} einingar á viku, aðalega vín, í lotum, aðalega um helgar` }
                                            ]
                                        },
                                        { 
                                            display: 'Sterkt áfengi',
                                            subOptions: [
                                                { display: 'Daglega', output: `Drekkur u.þ.b. ${11 + i} einingar á viku, aðalega sterkt áfengi, daglega` },
                                                { display: 'Nær daglega', output: `Drekkur u.þ.b. ${11 + i} einingar á viku, aðalega sterkt áfengi, nær daglega` },
                                                { display: 'Í lotum', output: `Drekkur u.þ.b. ${11 + i} einingar á viku, aðalega sterkt áfengi, í lotum` },
                                                { display: 'Í lotum, aðalega um helgar', output: `Drekkur u.þ.b. ${11 + i} einingar á viku, aðalega sterkt áfengi, í lotum, aðalega um helgar` }
                                            ]
                                        }
                                    ]
                                }))
                            },
                            {
                                display: '21-30 einingar á viku',
                                subOptions: Array.from({ length: 10 }, (_, i) => ({
                                    display: `${21 + i} einingar`,
                                    subOptions: [
                                        { 
                                            display: 'Bjór',
                                            subOptions: [
                                                { display: 'Daglega', output: `Drekkur u.þ.b. ${21 + i} einingar á viku, aðalega bjór, daglega` },
                                                { display: 'Nær daglega', output: `Drekkur u.þ.b. ${21 + i} einingar á viku, aðalega bjór, nær daglega` },
                                                { display: 'Í lotum', output: `Drekkur u.þ.b. ${21 + i} einingar á viku, aðalega bjór, í lotum` },
                                                { display: 'Í lotum, aðalega um helgar', output: `Drekkur u.þ.b. ${21 + i} einingar á viku, aðalega bjór, í lotum, aðalega um helgar` }
                                            ]
                                        },
                                        { 
                                            display: 'Vín',
                                            subOptions: [
                                                { display: 'Daglega', output: `Drekkur u.þ.b. ${21 + i} einingar á viku, aðalega vín, daglega` },
                                                { display: 'Nær daglega', output: `Drekkur u.þ.b. ${21 + i} einingar á viku, aðalega vín, nær daglega` },
                                                { display: 'Í lotum', output: `Drekkur u.þ.b. ${21 + i} einingar á viku, aðalega vín, í lotum` },
                                                { display: 'Í lotum, aðalega um helgar', output: `Drekkur u.þ.b. ${21 + i} einingar á viku, aðalega vín, í lotum, aðalega um helgar` }
                                            ]
                                        },
                                        { 
                                            display: 'Sterkt áfengi',
                                            subOptions: [
                                                { display: 'Daglega', output: `Drekkur u.þ.b. ${21 + i} einingar á viku, aðalega sterkt áfengi, daglega` },
                                                { display: 'Nær daglega', output: `Drekkur u.þ.b. ${21 + i} einingar á viku, aðalega sterkt áfengi, nær daglega` },
                                                { display: 'Í lotum', output: `Drekkur u.þ.b. ${21 + i} einingar á viku, aðalega sterkt áfengi, í lotum` },
                                                { display: 'Í lotum, aðalega um helgar', output: `Drekkur u.þ.b. ${21 + i} einingar á viku, aðalega sterkt áfengi, í lotum, aðalega um helgar` }
                                            ]
                                        }
                                    ]
                                }))
                            },
                            {
                                display: '31-40 einingar á viku',
                                subOptions: Array.from({ length: 10 }, (_, i) => ({
                                    display: `${31 + i} einingar`,
                                    subOptions: [
                                        { 
                                            display: 'Bjór',
                                            subOptions: [
                                                { display: 'Daglega', output: `Drekkur u.þ.b. ${31 + i} einingar á viku, aðalega bjór, daglega` },
                                                { display: 'Nær daglega', output: `Drekkur u.þ.b. ${31 + i} einingar á viku, aðalega bjór, nær daglega` },
                                                { display: 'Í lotum', output: `Drekkur u.þ.b. ${31 + i} einingar á viku, aðalega bjór, í lotum` },
                                                { display: 'Í lotum, aðalega um helgar', output: `Drekkur u.þ.b. ${31 + i} einingar á viku, aðalega bjór, í lotum, aðalega um helgar` }
                                            ]
                                        },
                                        { 
                                            display: 'Vín',
                                            subOptions: [
                                                { display: 'Daglega', output: `Drekkur u.þ.b. ${31 + i} einingar á viku, aðalega vín, daglega` },
                                                { display: 'Nær daglega', output: `Drekkur u.þ.b. ${31 + i} einingar á viku, aðalega vín, nær daglega` },
                                                { display: 'Í lotum', output: `Drekkur u.þ.b. ${31 + i} einingar á viku, aðalega vín, í lotum` },
                                                { display: 'Í lotum, aðalega um helgar', output: `Drekkur u.þ.b. ${31 + i} einingar á viku, aðalega vín, í lotum, aðalega um helgar` }
                                            ]
                                        },
                                        { 
                                            display: 'Sterkt áfengi',
                                            subOptions: [
                                                { display: 'Daglega', output: `Drekkur u.þ.b. ${31 + i} einingar á viku, aðalega sterkt áfengi, daglega` },
                                                { display: 'Nær daglega', output: `Drekkur u.þ.b. ${31 + i} einingar á viku, aðalega sterkt áfengi, nær daglega` },
                                                { display: 'Í lotum', output: `Drekkur u.þ.b. ${31 + i} einingar á viku, aðalega sterkt áfengi, í lotum` },
                                                { display: 'Í lotum, aðalega um helgar', output: `Drekkur u.þ.b. ${31 + i} einingar á viku, aðalega sterkt áfengi, í lotum, aðalega um helgar` }
                                            ]
                                        }
                                    ]
                                }))
                            },
                            {
                                display: '41-50 einingar á viku',
                                subOptions: Array.from({ length: 10 }, (_, i) => ({
                                    display: `${41 + i} einingar`,
                                    subOptions: [
                                        { 
                                            display: 'Bjór',
                                            subOptions: [
                                                { display: 'Daglega', output: `Drekkur u.þ.b. ${41 + i} einingar á viku, aðalega bjór, daglega` },
                                                { display: 'Nær daglega', output: `Drekkur u.þ.b. ${41 + i} einingar á viku, aðalega bjór, nær daglega` },
                                                { display: 'Í lotum', output: `Drekkur u.þ.b. ${41 + i} einingar á viku, aðalega bjór, í lotum` },
                                                { display: 'Í lotum, aðalega um helgar', output: `Drekkur u.þ.b. ${41 + i} einingar á viku, aðalega bjór, í lotum, aðalega um helgar` }
                                            ]
                                        },
                                        { 
                                            display: 'Vín',
                                            subOptions: [
                                                { display: 'Daglega', output: `Drekkur u.þ.b. ${41 + i} einingar á viku, aðalega vín, daglega` },
                                                { display: 'Nær daglega', output: `Drekkur u.þ.b. ${41 + i} einingar á viku, aðalega vín, nær daglega` },
                                                { display: 'Í lotum', output: `Drekkur u.þ.b. ${41 + i} einingar á viku, aðalega vín, í lotum` },
                                                { display: 'Í lotum, aðalega um helgar', output: `Drekkur u.þ.b. ${41 + i} einingar á viku, aðalega vín, í lotum, aðalega um helgar` }
                                            ]
                                        },
                                        { 
                                            display: 'Sterkt áfengi',
                                            subOptions: [
                                                { display: 'Daglega', output: `Drekkur u.þ.b. ${41 + i} einingar á viku, aðalega sterkt áfengi, daglega` },
                                                { display: 'Nær daglega', output: `Drekkur u.þ.b. ${41 + i} einingar á viku, aðalega sterkt áfengi, nær daglega` },
                                                { display: 'Í lotum', output: `Drekkur u.þ.b. ${41 + i} einingar á viku, aðalega sterkt áfengi, í lotum` },
                                                { display: 'Í lotum, aðalega um helgar', output: `Drekkur u.þ.b. ${41 + i} einingar á viku, aðalega sterkt áfengi, í lotum, aðalega um helgar` }
                                            ]
                                        }
                                    ]
                                }))
                            },
                            {
                                display: '51-60 einingar á viku',
                                subOptions: Array.from({ length: 10 }, (_, i) => ({
                                    display: `${51 + i} einingar`,
                                    subOptions: [
                                        { 
                                            display: 'Bjór',
                                            subOptions: [
                                                { display: 'Daglega', output: `Drekkur u.þ.b. ${51 + i} einingar á viku, aðalega bjór, daglega` },
                                                { display: 'Nær daglega', output: `Drekkur u.þ.b. ${51 + i} einingar á viku, aðalega bjór, nær daglega` },
                                                { display: 'Í lotum', output: `Drekkur u.þ.b. ${51 + i} einingar á viku, aðalega bjór, í lotum` },
                                                { display: 'Í lotum, aðalega um helgar', output: `Drekkur u.þ.b. ${51 + i} einingar á viku, aðalega bjór, í lotum, aðalega um helgar` }
                                            ]
                                        },
                                        { 
                                            display: 'Vín',
                                            subOptions: [
                                                { display: 'Daglega', output: `Drekkur u.þ.b. ${51 + i} einingar á viku, aðalega vín, daglega` },
                                                { display: 'Nær daglega', output: `Drekkur u.þ.b. ${51 + i} einingar á viku, aðalega vín, nær daglega` },
                                                { display: 'Í lotum', output: `Drekkur u.þ.b. ${51 + i} einingar á viku, aðalega vín, í lotum` },
                                                { display: 'Í lotum, aðalega um helgar', output: `Drekkur u.þ.b. ${51 + i} einingar á viku, aðalega vín, í lotum, aðalega um helgar` }
                                            ]
                                        },
                                        { 
                                            display: 'Sterkt áfengi',
                                            subOptions: [
                                                { display: 'Daglega', output: `Drekkur u.þ.b. ${51 + i} einingar á viku, aðalega sterkt áfengi, daglega` },
                                                { display: 'Nær daglega', output: `Drekkur u.þ.b. ${51 + i} einingar á viku, aðalega sterkt áfengi, nær daglega` },
                                                { display: 'Í lotum', output: `Drekkur u.þ.b. ${51 + i} einingar á viku, aðalega sterkt áfengi, í lotum` },
                                                { display: 'Í lotum, aðalega um helgar', output: `Drekkur u.þ.b. ${51 + i} einingar á viku, aðalega sterkt áfengi, í lotum, aðalega um helgar` }
                                            ]
                                        }
                                    ]
                                }))
                            }
                        ]
                    },
                    {
                        display: 'Daglegt meðaltal',
                        subOptions: Array.from({ length: 7 }, (_, i) => ({
                            display: `${i + 1} einingar á dag`,
                            subOptions: [
                                { 
                                    display: 'Bjór',
                                    subOptions: [
                                        { display: 'Daglega', output: `Drekkur u.þ.b. ${i + 1} einingar á dag (${(i + 1) * 7} einingar á viku), aðalega bjór, daglega` },
                                        { display: 'Nær daglega', output: `Drekkur u.þ.b. ${i + 1} einingar á dag (${(i + 1) * 7} einingar á viku), aðalega bjór, nær daglega` },
                                        { display: 'Í lotum', output: `Drekkur u.þ.b. ${i + 1} einingar á dag (${(i + 1) * 7} einingar á viku), aðalega bjór, í lotum` },
                                        { display: 'Í lotum, aðalega um helgar', output: `Drekkur u.þ.b. ${i + 1} einingar á dag (${(i + 1) * 7} einingar á viku), aðalega bjór, í lotum, aðalega um helgar` }
                                    ]
                                },
                                { 
                                    display: 'Vín',
                                    subOptions: [
                                        { display: 'Daglega', output: `Drekkur u.þ.b. ${i + 1} einingar á dag (${(i + 1) * 7} einingar á viku), aðalega vín, daglega` },
                                        { display: 'Nær daglega', output: `Drekkur u.þ.b. ${i + 1} einingar á dag (${(i + 1) * 7} einingar á viku), aðalega vín, nær daglega` },
                                        { display: 'Í lotum', output: `Drekkur u.þ.b. ${i + 1} einingar á dag (${(i + 1) * 7} einingar á viku), aðalega vín, í lotum` },
                                        { display: 'Í lotum, aðalega um helgar', output: `Drekkur u.þ.b. ${i + 1} einingar á dag (${(i + 1) * 7} einingar á viku), aðalega vín, í lotum, aðalega um helgar` }
                                    ]
                                },
                                { 
                                    display: 'Sterkt áfengi',
                                    subOptions: [
                                        { display: 'Daglega', output: `Drekkur u.þ.b. ${i + 1} einingar á dag (${(i + 1) * 7} einingar á viku), aðalega sterkt áfengi, daglega` },
                                        { display: 'Nær daglega', output: `Drekkur u.þ.b. ${i + 1} einingar á dag (${(i + 1) * 7} einingar á viku), aðalega sterkt áfengi, nær daglega` },
                                        { display: 'Í lotum', output: `Drekkur u.þ.b. ${i + 1} einingar á dag (${(i + 1) * 7} einingar á viku), aðalega sterkt áfengi, í lotum` },
                                        { display: 'Í lotum, aðalega um helgar', output: `Drekkur u.þ.b. ${i + 1} einingar á dag (${(i + 1) * 7} einingar á viku), aðalega sterkt áfengi, í lotum, aðalega um helgar` }
                                    ]
                                }
                            ]
                        }))
                    }
                ],
                onRightClickOutput: 'Neitar áfengisdrykkju'
            },            
            {
                display: 'Eiturlyf',
                subOptions: generateInitialDrugOptions(),
                onRightClickOutput: 'Neitar eiturlyfjanotkun'
            },
            {
                display: 'Ofnæmi',
                subOptions: [
                    {
                        display: 'Penisillin',
                        subOptions: [
                            { display: 'NOS', output: 'Penisillinofnæmi' },
                            { display: 'Bráðaofnæmi', output: 'Staðfest bráðaofnæmi fyrir penisillin' },
                            {
                                display: 'Grunur',
                                subOptions: [
                                    { display: 'NOS', output: 'Grunur um penisillinofnæmi' },
                                    { display: 'Öndunarfæraeinkenni', output: 'Grunur um penisillinofnæmi. Fengið öndunarfæraeinkenni' },
                                    { display: 'Útbrot', output: 'Grunur um penisillinofnæmi. Fékk útbrot. Ekki kláði eða öndunarfæraeinkenni' },
                                    { display: 'Útbrot og kláði', output: 'Grunur um penisillinofnæmi. Fékk útbrot og kláða' },
                                    { display: 'Öndunrafæraeinkenni, útbrot og kláði', output: 'Grunur um penisillinofnæmi. Fékk öndunarfæraeinkenni, útbrot og kláða' }
                                ]
                            }
                        ]
                    },
                    { display: 'Sulfa', output: 'Sulfaofnæmi' }
                ],
                onRightClickSubOptions: [
                    { display: 'Engin þekkt ofnæmi', output: 'Engin þekkt ofnæmi' },
                    { display: 'Engin þekkt lyfjaofnæmi', output: 'Engin þekkt lyfjaofnæmi' },
                    { display: 'Ekki penisillinofnæmi', output: 'Ekki penisillinofnæmi' },
                    { display: 'Ekki sulfaofnæmi', output: 'Ekki sulfaofnæmi' }
                ]
            }
            
        ]
    },
    {
        name: '',
        type: 'options',
        display: ['BMI'],
        options: [
            {
                display: 'BMI',
                subOptions: [
                    {
                        display: '150-160 cm',
                        subOptions: Array.from({ length: 11 }, (_, i) => ({
                            display: `${150 + i} cm`,
                            subOptions: Array.from({ length: 14 }, (_, j) => ({
                                display: `${40 + j * 10}-${49 + j * 10} kg`,
                                subOptions: Array.from({ length: 10 }, (_, k) => ({
                                    display: `${40 + j * 10 + k} kg`,
                                    output: `Hæð ${150 + i}cm. Þyngd ${40 + j * 10 + k}kg. BMI: ${calculateBMI(150 + i, 40 + j * 10 + k)}`
                                }))
                            }))
                        }))
                    },
                    {
                        display: '161-170 cm',
                        subOptions: Array.from({ length: 10 }, (_, i) => ({
                            display: `${161 + i} cm`,
                            subOptions: Array.from({ length: 14 }, (_, j) => ({
                                display: `${40 + j * 10}-${49 + j * 10} kg`,
                                subOptions: Array.from({ length: 10 }, (_, k) => ({
                                    display: `${40 + j * 10 + k} kg`,
                                    output: `Hæð ${161 + i}cm. Þyngd ${40 + j * 10 + k}kg. BMI: ${calculateBMI(161 + i, 40 + j * 10 + k)}`
                                }))
                            }))
                        }))
                    },
                    {
                        display: '171-180 cm',
                        subOptions: Array.from({ length: 10 }, (_, i) => ({
                            display: `${171 + i} cm`,
                            subOptions: Array.from({ length: 14 }, (_, j) => ({
                                display: `${40 + j * 10}-${49 + j * 10} kg`,
                                subOptions: Array.from({ length: 10 }, (_, k) => ({
                                    display: `${40 + j * 10 + k} kg`,
                                    output: `Hæð ${171 + i}cm. Þyngd ${40 + j * 10 + k}kg. BMI: ${calculateBMI(171 + i, 40 + j * 10 + k)}`
                                }))
                            }))
                        }))
                    },
                    {
                        display: '181-190 cm',
                        subOptions: Array.from({ length: 10 }, (_, i) => ({
                            display: `${181 + i} cm`,
                            subOptions: Array.from({ length: 14 }, (_, j) => ({
                                display: `${40 + j * 10}-${49 + j * 10} kg`,
                                subOptions: Array.from({ length: 10 }, (_, k) => ({
                                    display: `${40 + j * 10 + k} kg`,
                                    output: `Hæð ${181 + i}cm. Þyngd ${40 + j * 10 + k}kg. BMI: ${calculateBMI(181 + i, 40 + j * 10 + k)}`
                                }))
                            }))
                        }))
                    },
                    {
                        display: '191-200 cm',
                        subOptions: Array.from({ length: 10 }, (_, i) => ({
                            display: `${191 + i} cm`,
                            subOptions: Array.from({ length: 14 }, (_, j) => ({
                                display: `${40 + j * 10}-${49 + j * 10} kg`,
                                subOptions: Array.from({ length: 10 }, (_, k) => ({
                                    display: `${40 + j * 10 + k} kg`,
                                    output: `Hæð ${191 + i}cm. Þyngd ${40 + j * 10 + k}kg. BMI: ${calculateBMI(191 + i, 40 + j * 10 + k)}`
                                }))
                            }))
                        }))
                    },
                    {
                        display: '201-210 cm',
                        subOptions: Array.from({ length: 10 }, (_, i) => ({
                            display: `${201 + i} cm`,
                            subOptions: Array.from({ length: 14 }, (_, j) => ({
                                display: `${40 + j * 10}-${49 + j * 10} kg`,
                                subOptions: Array.from({ length: 10 }, (_, k) => ({
                                    display: `${40 + j * 10 + k} kg`,
                                    output: `Hæð ${201 + i}cm. Þyngd ${40 + j * 10 + k}kg. BMI: ${calculateBMI(201 + i, 40 + j * 10 + k)}`
                                }))
                            }))
                        }))
                    }
                ]
            }
        ]
    }
];
const LifsmorkData = [
    {
        name: '',
        type: 'options',
        display: ['Lífsmörk'],
        options: [
            {
                display: 'Lífsmörk',
                output: 'OPEN_LIFSMORK_MODAL' // Special command to recognize in the handleButtonClick function
            }
        ]
    }
];


// Here I am trying to generate a text that says something like "Patient uses amphetamines. Also cocain and marijuana".
// User 
function generateInitialDrugOptions() {
    const drugs = ['Kannabis', 'Amfetamín', 'Kókaín', 'Sveppir', 'LSD', 'Ópíöt', 'Benzolyf'];
    return [
        {
            display: 'Eiturlyfjanotkun',
            output: 'Játar eiturlyfjanotkun'
        },
        ...drugs.map(drug => ({
            display: drug,
            subOptions: generateNestedDrugOptions(drug, drugs.filter(d => d !== drug), [drug])
        }))
    ];
}
function generateNestedDrugOptions(selectedDrug, remainingDrugs, selectedDrugs) {
    if (selectedDrugs.length >= 6) {
        return [];
    }

    return [
        {
            display: selectedDrug,
            output: formatDrugUsageOutput(selectedDrugs)
        },
        ...remainingDrugs.map(drug => ({
            display: drug,
            subOptions: generateNestedDrugOptions(drug, remainingDrugs.filter(d => d !== drug), [...selectedDrugs, drug])
        }))
    ];
}
function formatDrugUsageOutput(selectedDrugs) {
    const initial = selectedDrugs[0];
    const additional = selectedDrugs.slice(1);
    const additionalText = additional.length 
        ? `Einnig ${additional.slice(0, -1).map(formatDrug).join(', ')}${additional.length > 1 ? ' og ' : ''}${formatDrug(additional[additional.length - 1])}.`
        : '';
    return `Játar ${formatDrug(initial)}notkun. ${additionalText}`;
}
function formatDrug(drug) {
    return drug === 'LSD' ? 'LSD' : drug.toLowerCase();
}

// BMI calc (BMI button in Habits calls this function)
function calculateBMI(height, weight) {
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    return bmi.toFixed(1).replace('.', ','); // Replace dot with comma for BMI
}


// Lífsmörk modals (Vital signs)
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


// Createbuttons
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
            const label = document.createElement('div'); // Changed from 'span' to 'div'
            label.textContent = item.name;
            label.className = 'item-label'; // Added a class for styling
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
            if (selectedOption.output === 'OPEN_LIFSMORK_MODAL') {
                openLifsmorkModal(); // Open the Lífsmörk modal
            } else if (selectedOption.subOptions) {
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
function createPopup(event, selectedOption, button, isRightClick = false, depth = 0) {
    // Create a new popup modal
    const popup = document.createElement('div');
    popup.className = 'popup-modal';
    popup.dataset.depth = depth;

    // Position the popup next to the button
    const rect = button.getBoundingClientRect();
    popup.style.position = 'absolute';
    popup.style.top = `${rect.top + window.scrollY}px`;
    popup.style.left = `${rect.right + window.scrollX}px`;
    popup.style.backgroundColor = 'white';
    popup.style.border = '1px solid #ccc';
    popup.style.padding = '10px';
    popup.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    popup.style.zIndex = '1000';

    // Function to create a button in the popup
    const createPopupButton = (popup, subOption, parentButton, depth) => {
        const btn = document.createElement('button');
        btn.textContent = subOption.display;
        btn.style.display = 'block';
        btn.style.margin = '5px 0';
        btn.onclick = (e) => {
            e.stopPropagation(); // Prevent closing popup on button click

            if (subOption.subOptions) {
                // Remove existing sub-popup if any
                const existingSubPopup = document.querySelector(`.sub-popup-modal[data-depth="${depth + 1}"]`);
                if (existingSubPopup) {
                    existingSubPopup.remove();
                }

                // Create a new sub-popup modal for nested suboptions
                const subPopup = document.createElement('div');
                subPopup.className = 'sub-popup-modal';
                subPopup.dataset.depth = depth + 1;

                // Position the sub-popup next to the parent button
                const parentRect = parentButton.getBoundingClientRect();
                subPopup.style.position = 'absolute';
                subPopup.style.top = `${parentRect.top + window.scrollY}px`;
                subPopup.style.left = `${parentRect.right + window.scrollX}px`;
                subPopup.style.backgroundColor = 'white';
                subPopup.style.border = '1px solid #ccc';
                subPopup.style.padding = '10px';
                subPopup.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
                subPopup.style.zIndex = '1000';

                // Add nested subOptions to the sub-popup
                subOption.subOptions.forEach(nestedSubOption => {
                    createPopupButton(subPopup, nestedSubOption, btn, depth + 1);
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
                const existingSubPopup = document.querySelector(`.sub-popup-modal[data-depth="${depth}"]`);
                if (existingSubPopup) {
                    existingSubPopup.remove();
                }
                popup.remove(); // Close the main popup
            }
        };
        popup.appendChild(btn);
    };

    // Add subOptions to the popup
    if (isRightClick) {
        selectedOption.onRightClickSubOptions.forEach(subOption => {
            createPopupButton(popup, subOption, button, depth);
        });
    } else {
        selectedOption.subOptions.forEach(subOption => {
            createPopupButton(popup, subOption, button, depth);
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


// Generate the different sections
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
function createRannsoknirSection(data) {
    console.log('Creating Rannsoknir Section with data:', data); // Debugging line
    const section = createSection('rannsoknir', 'Rannsóknir');
    const container = section.querySelector('#rannsoknir');
    createButtons(container, data);
    return section;
}
function createLifsmorkSection(data) {
    console.log('Creating Lífsmörk Section with data:', data); // Debugging line
    const section = createSection('lifsmork', 'Lífsmörk');
    const container = section.querySelector('#lifsmork');
    createButtons(container, data);
    return section;
}
function createRaudFloggSection(data) {
    console.log('Creating Raud Flögg Section with data:', data); // Debugging line
    const section = createSection('raudflogg', 'Rauð Flögg');
    const container = section.querySelector('#raudflogg');
    createButtons(container, data);
    return section;
}
function createLyfSection(data) {
    console.log('Creating Lyf Section with data:', data); // Debugging line
    const section = createSection('lyf', 'Lyf');
    const container = section.querySelector('#lyf');
    createButtons(container, data);
    return section;
}
 function createRiskHeartSection(data) {
    console.log('Creating Risk Section with data:', data); // Debugging line
    const section = createSection('riskheart', 'Áhættuþættir Kransæðasjúkdóms');
    const container = section.querySelector('#riskheart');
    createButtons(container, data);
    return section;
}
function createRiskUrinarySection(data) {
    console.log('Creating Risk Section with data:', data); // Debugging line
    const section = createSection('riskurinary', 'Áhættuþættir þvagblöðrukrabbameins');
    const container = section.querySelector('#riskurinary');
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
function createSIGECAPSSection(data) {
    console.log('Creating SIGECAPS Section with data:', data); // Debugging line
    const section = createSection('sigecaps', 'SIGECAPS');
    const container = section.querySelector('#sigecaps');
    createButtons(container, data);
    return section;
}
function createGedSkodunSection(data) {
    console.log('Creating Geð Skoðun Section with data:', data); // Debugging line
    const section = createSection('gedskodun', 'Skoðun');
    const container = section.querySelector('#gedskodun');
    createButtons(container, data);
    return section;
}


// Load sections depending on page
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
        const lifsmorkSection = createLifsmorkSection(LifsmorkData);
        const rannsoknirSection = createRannsoknirSection(RannsoknirViral);

        const leftColumn = document.createElement('div');
        leftColumn.className = 'column';
        leftColumn.appendChild(einkenniSection);
    //  leftColumn.appendChild(timalengdSection);
        leftColumn.appendChild(historyViralSection);
        leftColumn.appendChild(habitsSection);

        const middleColumn = document.createElement('div');
        middleColumn.className = 'column';
        middleColumn.appendChild(skodunSection);
        middleColumn.appendChild(lifsmorkSection);
        middleColumn.appendChild(rannsoknirSection);
                
        

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
        const historyMeltingSection = createHistoryViralSection(historyMelting);
        const habitsSection = createHabitsSection(Habits);
        const rannsoknirSection = createRannsoknirSection(RannsoknirMelting);
        const lifsmorkSection = createLifsmorkSection(LifsmorkData);
        const raudFloggSection = createRaudFloggSection(RaudFloggMelting);
        const lyfSection = createLyfSection(LyfMelting);

        const leftColumn = document.createElement('div');
        leftColumn.className = 'column';
        leftColumn.appendChild(einkenniSection);
        leftColumn.appendChild(raudFloggSection);
        leftColumn.appendChild(historyMeltingSection);
        leftColumn.appendChild(lyfSection);
        leftColumn.appendChild(habitsSection);
        

        const middleColumn = document.createElement('div');
        middleColumn.className = 'column';
        middleColumn.appendChild(skodunSection);
        middleColumn.appendChild(lifsmorkSection); // Add this line
        middleColumn.appendChild(rannsoknirSection);
        
        

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
        const RiskHeartSection = createRiskHeartSection(RiskFactorsHeart);
        const CHADSVASCSection = createCHADSVASCSection(CHADSVASCHeart);
        const historyHeartSection = createHistoryViralSection(historyHeart);
        const lifsmorkSection = createLifsmorkSection(LifsmorkData);
        const rannsoknirSection = createRannsoknirSection(RannsoknirHeart);
        const lyfSection = createLyfSection(LyfData);


        const leftColumn = document.createElement('div');
        leftColumn.className = 'column';
        leftColumn.appendChild(einkenniSection);
    //  leftColumn.appendChild(timalengdSection);
      leftColumn.appendChild(RiskHeartSection)
      leftColumn.appendChild(CHADSVASCSection)
      leftColumn.appendChild(historyHeartSection)
      leftColumn.appendChild(lyfSection);
    //    leftColumn.appendChild(historyViralSection);
        leftColumn.appendChild(habitsSection);

        const middleColumn = document.createElement('div');
        middleColumn.className = 'column';
        middleColumn.appendChild(skodunSection);
        middleColumn.appendChild(lifsmorkSection);
        middleColumn.appendChild(rannsoknirSection);
        
        

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
        const sigecapsSection = createSIGECAPSSection(SIGECAPS); // Add SIGECAPS section
        const gedSkodunSection = createGedSkodunSection(GedSkodunData); // Add this line

        const leftColumn = document.createElement('div');
        leftColumn.className = 'column';
        leftColumn.appendChild(einkenniSection);
        leftColumn.appendChild(sigecapsSection); // Append SIGECAPS section to left column

        const middleColumn = document.createElement('div');
        middleColumn.className = 'column';
        middleColumn.appendChild(gedSkodunSection); // Add this line
        //middleColumn.appendChild(skodunSection);

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
    } else if (page === 'Gigt') {
        const einkenniSection = createEinkenniSection(SymptomsGigt);
        const skodunSection = createSkodunSection(ExamsGigt);
        const planSection = createPlanSection(PlanGigt);

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
    }  else if (page === 'Innkirtla') {
        const einkenniSection = createEinkenniSection(SymptomsInnkirtla);
        const skodunSection = createSkodunSection(ExamsInnkirtla);
        const planSection = createPlanSection(PlanInnkirtla);
        const rannsoknirSection = createRannsoknirSection(RannsoknirInnkirtla);
        const lyfSection = createLyfSection(LyfInnkirtla); // Add this line

        const leftColumn = document.createElement('div');
        leftColumn.className = 'column';
        leftColumn.appendChild(einkenniSection);
        leftColumn.appendChild(lyfSection); // Add this line

        const middleColumn = document.createElement('div');
        middleColumn.className = 'column';
        middleColumn.appendChild(skodunSection);
        middleColumn.appendChild(rannsoknirSection);

        const rightColumn = document.createElement('div');
        rightColumn.className = 'column';
        rightColumn.appendChild(planSection);

        const horizontalContainer = document.createElement('div');
        horizontalContainer.className = 'horizontal-sections';
        horizontalContainer.appendChild(leftColumn);
        horizontalContainer.appendChild(middleColumn);
        horizontalContainer.appendChild(rightColumn);

        container.appendChild(horizontalContainer);
    }   else {
        console.error('Unknown page:', page);
    }

    // Make titles clickable
    makeTitleButton('skodun', addSkoðun);
    makeTitleButton('plan', addPlan);
    makeTitleButton('riskheart', addRiskFactors);
    makeTitleButton('CHADSVASC', addCHADSVASC);
    makeTitleButton('riskurinary', addRiskBladderCancer);
    makeTitleButton('habits', addHabits);
    makeTitleButton('historyViral', addHeilsufar);
    makeTitleButton('rannsoknir', addRannsoknir);
    makeTitleButton('lyf', addLyf);
    makeTitleButton('lifsmork', addLifsmork);
    makeTitleButton('raudflogg', addRaudFlogg);
    makeTitleButton('sigecaps', addSIGECAPS);
    makeTitleButton('gedskodun', addGedSkodun);
}




// Textbox manipulation functions
let textHistory = [];
function insertText(text) {
    const textbox = document.getElementById('journalTextbox');
    textHistory.push(textbox.value); // Save current state before modification

    // Check if the textbox is empty
    if (textbox.value.trim() === '') {
        textbox.value = text.replace(/\.$/, '');
    } else {
        // Check the last character(s) of the current text in the textbox
        let currentText = textbox.value.trimEnd();

        if (currentText.endsWith('.')) {
            if (!currentText.endsWith('. ')) {
                currentText += ' ';
            }
        } else if (currentText.endsWith(': ')) {
            // Do nothing, keep ": " as it is
        } else if (currentText.endsWith(':')) {
            currentText += ' ';
        } else {
            currentText = currentText.replace(/\s+$/, ''); // Remove trailing spaces
            currentText += '. ';
        }

        // Add the new text
        textbox.value = currentText + text.replace(/\.$/, '') + '. ';
    }

    // Scroll to the bottom
    textbox.scrollTop = textbox.scrollHeight;

    // Set focus to the textbox and move the cursor to the end only if not already focused
    if (document.activeElement !== textbox) {
        textbox.focus();
        textbox.setSelectionRange(textbox.value.length, textbox.value.length);
    }
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
    textbox.focus();
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



// Title buttons (Sk:, Á/P:, CHADSVASC:, Áhættuþættir kransæðasjúkdóma: etc...)
function makeTitleButton(sectionId, callback) {
    const sectionTitle = document.querySelector(`#${sectionId}-section h2`);
    if (sectionTitle) {
        sectionTitle.style.cursor = 'pointer';
        sectionTitle.addEventListener('click', callback);
    }
}


function addSkoðun() {
    const textbox = document.getElementById('journalTextbox');
    textHistory.push(textbox.value); // Save current state before adding
    textbox.value += '\n\nSk: ';
    textbox.scrollTop = textbox.scrollHeight; // Scroll to the bottom
    // Set focus to the textbox and move the cursor to the end only if not already focused
    if (document.activeElement !== textbox) {
        textbox.focus();
        textbox.setSelectionRange(textbox.value.length, textbox.value.length);
    }
}
function addPlan() {
    const textbox = document.getElementById('journalTextbox');
    textHistory.push(textbox.value); // Save current state before adding
    textbox.value += '\n\nÁ/P: ';
    textbox.scrollTop = textbox.scrollHeight; // Scroll to the bottom
    // Set focus to the textbox and move the cursor to the end only if not already focused
    if (document.activeElement !== textbox) {
        textbox.focus();
        textbox.setSelectionRange(textbox.value.length, textbox.value.length);
    }
}
function addRiskFactors() {
    const textbox = document.getElementById('journalTextbox');
    textHistory.push(textbox.value); // Save current state before adding
    textbox.value += '\n\nÁhættuþættir kransæðasjúkdóms: ';
    textbox.scrollTop = textbox.scrollHeight; // Scroll to the bottom
    // Set focus to the textbox and move the cursor to the end only if not already focused
    if (document.activeElement !== textbox) {
        textbox.focus();
        textbox.setSelectionRange(textbox.value.length, textbox.value.length);
    }
}
function addCHADSVASC() {
    const textbox = document.getElementById('journalTextbox');
    textHistory.push(textbox.value); // Save current state before adding
    textbox.value += '\n\nCHADSVASC: ';
    textbox.scrollTop = textbox.scrollHeight; // Scroll to the bottom
    // Set focus to the textbox and move the cursor to the end only if not already focused
    if (document.activeElement !== textbox) {
        textbox.focus();
        textbox.setSelectionRange(textbox.value.length, textbox.value.length);
    }
}
function addRiskBladderCancer() {
    const textbox = document.getElementById('journalTextbox');
    textHistory.push(textbox.value); // Save current state before adding
    textbox.value += '\n\nÁhættuþættir þvagblöðrukrabbamein: ';
    textbox.scrollTop = textbox.scrollHeight; // Scroll to the bottom
    // Set focus to the textbox and move the cursor to the end only if not already focused
    if (document.activeElement !== textbox) {
        textbox.focus();
        textbox.setSelectionRange(textbox.value.length, textbox.value.length);
    }
}
function addHabits() {
    const textbox = document.getElementById('journalTextbox');
    textHistory.push(textbox.value); // Save current state before adding
    textbox.value += '\n\nVenjur: ';
    textbox.scrollTop = textbox.scrollHeight; // Scroll to the bottom
    // Set focus to the textbox and move the cursor to the end only if not already focused
    if (document.activeElement !== textbox) {
        textbox.focus();
        textbox.setSelectionRange(textbox.value.length, textbox.value.length);
    }
}
function addHeilsufar() {
    const textbox = document.getElementById('journalTextbox');
    textHistory.push(textbox.value); // Save current state before adding
    textbox.value += '\n\nHeilsufar: ';
    textbox.scrollTop = textbox.scrollHeight; // Scroll to the bottom
    // Set focus to the textbox and move the cursor to the end only if not already focused
    if (document.activeElement !== textbox) {
        textbox.focus();
        textbox.setSelectionRange(textbox.value.length, textbox.value.length);
    }
}
function addRannsoknir() {
    const textbox = document.getElementById('journalTextbox');
    textHistory.push(textbox.value); // Save current state before adding
    textbox.value += '\n\nRannsóknir: ';
    textbox.scrollTop = textbox.scrollHeight; // Scroll to the bottom
    // Set focus to the textbox and move the cursor to the end only if not already focused
    if (document.activeElement !== textbox) {
        textbox.focus();
        textbox.setSelectionRange(textbox.value.length, textbox.value.length);
    }
}
function addLyf() {
    const textbox = document.getElementById('journalTextbox');
    textHistory.push(textbox.value); // Save current state before adding
    textbox.value += '\n\nLyf: ';
    textbox.scrollTop = textbox.scrollHeight; // Scroll to the bottom
    // Set focus to the textbox and move the cursor to the end only if not already focused
    if (document.activeElement !== textbox) {
        textbox.focus();
        textbox.setSelectionRange(textbox.value.length, textbox.value.length);
    }
}
function addLifsmork() {
    const textbox = document.getElementById('journalTextbox');
    textHistory.push(textbox.value); // Save current state before adding
    textbox.value += '\n\nLífsmörk: ';
    textbox.scrollTop = textbox.scrollHeight; // Scroll to the bottom
    // Set focus to the textbox and move the cursor to the end only if not already focused
    if (document.activeElement !== textbox) {
        textbox.focus();
        textbox.setSelectionRange(textbox.value.length, textbox.value.length);
    }
}
function addRaudFlogg() {
    const textbox = document.getElementById('journalTextbox');
    textHistory.push(textbox.value); // Save current state before adding
    textbox.value += '\n\nRauð Flögg: ';
    textbox.scrollTop = textbox.scrollHeight; // Scroll to the bottom
    // Set focus to the textbox and move the cursor to the end only if not already focused
    if (document.activeElement !== textbox) {
        textbox.focus();
        textbox.setSelectionRange(textbox.value.length, textbox.value.length);
    }
}
function addSIGECAPS(output) {
    const textbox = document.getElementById('journalTextbox');
    textHistory.push(textbox.value); // Save current state before adding
    textbox.value += '\n\nSIGECAPS: ';
    textbox.scrollTop = textbox.scrollHeight; // Scroll to the bottom
    // Set focus to the textbox and move the cursor to the end only if not already focused
    if (document.activeElement !== textbox) {
        textbox.focus();
        textbox.setSelectionRange(textbox.value.length, textbox.value.length);
    }
}
function addGedSkodun() {
    const textbox = document.getElementById('journalTextbox');
    textHistory.push(textbox.value); // Save current state before adding
    textbox.value += '\n\nGeðskoðun: ';
    textbox.scrollTop = textbox.scrollHeight; // Scroll to the bottom
    // Set focus to the textbox and move the cursor to the end only if not already focused
    if (document.activeElement !== textbox) {
        textbox.focus();
        textbox.setSelectionRange(textbox.value.length, textbox.value.length);
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