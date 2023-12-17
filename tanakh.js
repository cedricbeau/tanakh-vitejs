export function tanakh() {
    document.addEventListener('alpine:init', () => {
        Alpine.data('tanakh', () => ({
            title: '',
            text: [],
            chapter: 0,
            open: false,
            tehilimDay1: [0,1,2,3,4,5,6,7,8],
            tehilimDay2: [9,10,11,12,13,14,15,16],
            tehilimDay3: [17,18,19,20,21],
            tehilimDay4: [22,23,24,25,26,27],
            tehilimDay5: [28,29,30,31,3,33],
            tehilimDay6: [34,35,36,37],
            tehilimDay7: [38,39,40,41,42],
            tehilimDay8: [43,44,45,46,47],
            tehilimDay9: [48,49,50,51,52,53],
            tehilimDay10: [54,55,56,57,58],
            tehilimDay11: [59,60,61,62,63,64],
            tehilimDay12: [65,66,67],
            tehilimDay13: [68,69,70],
            tehilimDay14: [71,72,73,74,75],
            tehilimDay15: [76,77],
            tehilimDay16: [78,79,80,81],
            tehilimDay17: [82,83,84,85,86],
            tehilimDay18: [87,88],
            tehilimDay19: [89,90,91,92,93,94,95],
            tehilimDay20: [96,97,98,99,100,101,102],
            tehilimDay21: [103,104],
            tehilimDay22: [105,106],
            tehilimDay23: [107,108,109,110,111],
            tehilimDay24: [112,113,114,115,116,117],
            tehilimDay25: [118],
            tehilimDay26: [118],
            tehilimDay27: [119,120,121,122,123,124,125,126,127,128,129,130,131,132,133],
            tehilimDay28: [134,135,136,137,138],
            tehilimDay29: [139,140,141,142,143],
            tehilimDay30: [144,145,146,147,148,149],
            tehilimBook1: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40],
            tehilimBook2: [41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71],
            tehilimBook3: [72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88],
            tehilimBook4: [89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105],
            tehilimBook5: [106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149],
            tikounHaklali: [15, 31, 40, 41, 58, 76, 89, 104, 136, 149],
            torah: [
                {
                    id: 'berechit',
                    name: 'Berechit - Genèse',
                    resume: 'La création, le début de l\'humanité et les histoires des patriarches et des matriarches.',
                    url: './torah/berechit.json'
                },
                {
                    id: 'chemot',
                    name: 'Chemot - Exode',
                    resume: 'L\'esclavage des Israélites en Égypte, la rédemption miraculeuse, le don de la Torah et la construction du Mishkan (Tabernacle).',
                    url: './torah/chemot.json'
                },
                {
                    id: 'vayiqra',
                    name: 'Vayiqra - Lévithique',
                    resume: 'Lois du culte sacrificiel dans le Mishkan (tabernacle), la pureté rituelle et d\'autres sujets comme l\'agriculture, l\'éthique et les vacances.',
                    url: './torah/vayiqra.json'
                },
                {
                    id: 'bamidbar',
                    name: 'Bamidbar - Nombres',
                    resume: 'Des errances des Israélites dans le désert, le recensement, la rébellion, les espions et la guerre, entrecoupés de lois.',
                    url: './torah/bamidbar.json'
                },
                {
                    id: 'devarim',
                    name: 'Devarim - Deutéronome',
                    resume: 'Derniers discours de Moïse, rappelant les événements du désert, examinant les anciennes lois, introduisant de nouvelles et appelant à la fidélité à Dieu.',
                    url: './torah/devarim.json'
                }
            ],
            prophetes: [
                {
                    id: 'yehoshoua',
                    name: 'Yehoshoua - Josué',
                    resume: 'Les Israélites entrent en Israël, le conquièrent et s\'y installent sous la direction de Josué.',
                    url: './prophetes/yehoshoua.json'
                },
                {
                    id: 'shoftim',
                    name: 'Shoftim - Juges',
                    resume: 'Cycles de péché, d\'oppression étrangère, de repentance et de rédemption par des dirigeants désignés par Dieu.',
                    url: './prophetes/shoftim.json'
                },
                {
                    id: 'shmouel-1',
                    name: 'Shmouel 1 - Samuel 1',
                    resume: 'Le prophète Samuel, l\'avènement de la monarchie avec le règne de Saül et l\'ascension du jeune David.',
                    url: './prophetes/shmouel-1.json'
                },
                {
                    id: 'shmouel-2',
                    name: 'Shmouel 2 - Samuel 2',
                    resume: 'Les triomphes et les défis du roi David alors qu\'il établit un royaume uni avec Jérusalem pour capitale.',
                    url: './prophetes/shmouel-2.json'
                },
                {
                    id: 'melakhim-1',
                    name: 'Melakhim 1 - Rois 1',
                    resume: 'La royauté de Salomon, la construction du Temple, un schisme dans le royaume et Élie le prophète.',
                    url: './prophetes/melakhim-1.json'
                },
                {
                    id: 'melakhim-2',
                    name: 'Melakhim 2 - Rois 2',
                    resume: 'Histoires et miracles du prophète Elisée, déclin des royaumes d\'Israël et destruction du Temple.',
                    url: './prophetes/melakhim-2.json'
                },
                {
                    id: 'yeshayahou',
                    name: 'Yeshayahou - Isaïe',
                    resume: 'Critique de la corruption religieuse, appel au changement et description d\'un avenir utopique.',
                    url: './prophetes/yeshayahou.json'
                },
                {
                    id: 'yrmeyahou',
                    name: 'Yrmeyahou - Jérémie',
                    resume: 'Avertissements de la destruction de Jérusalem et appels à la repentance, largement rejetés par le peuple, dont certains le torturent et le persécutent.',
                    url: './prophetes/yrmeyahou.json'
                },
                {
                    id: 'yehezqel',
                    name: 'Yehezqel - Ézéchiel',
                    resume: 'Symbolisme dramatique véhiculant des reproches ou de l\'espoir, et visions d\'un futur Temple.',
                    url: './prophetes/yehezqel.json'
                },
                {
                    id: 'hoshea',
                    name: 'Hoshéa - Osée',
                    resume: 'Réprimande d\'Israël pour avoir abandonné Dieu, comparant leur relation à celle d\'amants infidèles.',
                    url: './prophetes/hoshea.json'
                },
                {
                    id: 'yoel',
                    name: 'Yoël - Joël',
                    resume: 'Une invasion de sauterelles, un appel à la repentance et une promesse de jugement pour les oppresseurs d\'Israël.',
                    url: './prophetes/yoel.json'
                },
                {
                    id: 'amos',
                    name: 'Amos',
                    resume: 'Condamnation de l\'oppression et de l\'arrogance des nations et d\'Israël, et appel à la réforme.',
                    url: './prophetes/amos.json'
                },
                {
                    id: 'ovadia',
                    name: 'Ovadia - Abdias',
                    resume: 'Le livre le plus court du Tanakh, avec seulement 21 versets, prédisant la chute du royaume d\'Edom.',
                    url: './prophetes/ovadia.json'
                },
                {
                    id: 'yona',
                    name: 'Yona - Jonas',
                    resume: 'Un grand poisson avale Jonas lorsqu\'il tente d\'échapper à sa mission de prophétie, et Jonas se repent.',
                    url: './prophetes/yona.json'
                },
                {
                    id: 'mikha',
                    name: 'Mikha - Michée',
                    resume: 'Les reproches adressés à Israël et à ses dirigeants pour le manque de sincérité de leur culte rituel, et les appels à la justice et à la bonté.',
                    url: './prophetes/mikha.json'
                },
                {
                    id: 'nahoum',
                    name: 'Nahoum - Nahum',
                    resume: 'Prophétie festive sur la chute de l\'empire assyrien, oppresseur d\'Israël.',
                    url: './prophetes/nahoum.json'
                },
                {
                    id: 'havaqouq',
                    name: 'Havaqouq - Habacuc',
                    resume: 'Charge à Dieu d\'expliquer le succès injuste des Babyloniens, la réponse de Dieu et une prière.',
                    url: './prophetes/havaqouq.json'
                },
                {
                    id: 'tsephania',
                    name: 'Tsephania - Sophonie',
                    resume: 'Avertissements de la destruction que Dieu fera subir aux infidèles et appels à la justice et à l\'humilité.',
                    url: './prophetes/tsephania.json'
                },
                {
                    id: 'haggai',
                    name: 'Haggaï - Aggée',
                    resume: 'Des appels urgents à construire le second temple et des descriptions de sa gloire future.',
                    url: './prophetes/haggai.json'
                },
                {
                    id: 'zekharia',
                    name: 'Zekharia - Zacharie',
                    resume: 'Des visions symboliques de la rédemption, expliquées par des anges, et des descriptions de la fin des temps.',
                    url: './prophetes/zekharia.json'
                },
                {
                    id: 'malakhi',
                    name: 'Malakhi - Malachie',
                    resume: 'Critique du culte rituel fallacieux et des descriptions des bénédictions futures de Dieu.',
                    url: './prophetes/malakhi.json'
                }
            ],
            hagiographes: [
                {
                    id: 'tehilim',
                    name: 'Tehilim - Psaumes',
                    resume: 'Poèmes de désespoir, d\'espoir, de gratitude et de supplication à Dieu, attribués à David et à d\'autres.',
                    url: './hagiographes/tehilim.json'
                },
                {
                    id: 'mishlei',
                    name: 'Mishlei - Proverbes',
                    resume: 'Conseils pour vivre une vie sage, morale et juste, sous forme de poèmes et de courtes déclarations.',
                    url: './hagiographes/mishlei.json'
                },
                {
                    id: 'iyov',
                    name: 'Iyov - Job',
                    resume: 'Satan convainc Dieu de frapper un homme juste d\'une tragédie, suscitant ainsi des conversations sur la souffrance.',
                    url: './hagiographes/iyov.json'
                },
                {
                    id: 'shir-hashirim',
                    name: 'Shir Hashirim - Cantique des cantiques',
                    resume: 'Conversations poétiques de deux amants, traditionnellement lues comme une métaphore de Dieu et d\'Israël.',
                    url: './hagiographes/shir-hashirim.json'
                },
                {
                    id: 'routh',
                    name: 'Routh - Ruth',
                    resume: 'Une veuve moabite reste fidèle à sa belle-mère et à Israël, et prend un nouveau départ.',
                    url: './hagiographes/routh.json'
                },
                {
                    id: 'eikha',
                    name: 'Eikha - Lamentations',
                    resume: 'Se lamente sur la destruction de Jérusalem et cherche des explications théologiques.',
                    url: './hagiographes/eikha.json'
                },
                {
                    id: 'qohelet',
                    name: 'Qohelet - Ecclésiaste',
                    resume: 'Une exploration du sens de la vie, de la mort, de la futilité et de la finalité.',
                    url: './hagiographes/qohelet.json'
                },
                {
                    id: 'esther',
                    name: 'Esther',
                    resume: 'Esther devient reine de Perse et déjoue un complot visant à détruire les Juifs, instaurant ainsi la fête de Pourim.',
                    url: './hagiographes/esther.json'
                },
                {
                    id: 'daniel',
                    name: 'Daniel',
                    resume: 'Un conseiller juif des rois babyloniens interprète des rêves et échappe miraculeusement au danger.',
                    url: './hagiographes/daniel.json'
                },
                {
                    id: 'hoshea',
                    name: 'Hoshea - Ezra',
                    resume: 'Reconstruction du Temple après des décennies d\'exil et de renouveau religieux sous la conduite d\'Ezra le scribe.',
                    url: './hagiographes/hoshea.json'
                },
                {
                    id: 'nehemiah',
                    name: 'Nehemiah',
                    resume: 'Reconstruction des murs de Jérusalem et engagement de la nation à respecter les commandements.',
                    url: './hagiographes/nehemiah.json'
                },
                {
                    id: 'chroniques-1',
                    name: 'Chroniques 1',
                    resume: 'Récit d\'événements de la Torah et des premiers prophètes, avec une attention particulière pour le roi David.',
                    url: './hagiographes/chroniques-1.json'
                },
                {
                    id: 'chroniques-2',
                    name: 'Chroniques 2',
                    resume: 'Raconte les événements des prophètes, depuis Salomon jusqu\'à la destruction du premier temple.',
                    url: './hagiographes/chroniques-2.json'
                }
            ],

            /**
             *
             */
            loadSefer(defaultSefer) {
                fetch(defaultSefer)
                .then(response => response.json())
                .then(json => {
                    this.title = json.title;
                    this.text = json.text;
                })
            },

            /**
             *
             */
            openSefer() {
                this.open = true;
                document.body.classList.add('overflow-y-hidden');
            },

            /**
             *
             */
            closeSefer() {
                this.open = false;
                this.text = [];
                this.chapter = 0;
                document.body.classList.remove('overflow-y-hidden');
            },

            closeTehilim() {
                this.chapter = 0;
            },

            openTikounHaklali() {
                this.chapter = 15;
            },

            /**
             *
             */
            toggleChapter (index) {
                this.chapter = index;
            },

            /**
             *
             */
            chapterActive (chapter) {
                return chapter === this.chapter;
            },

            /**
             *
             */
            prevHandler: function(e) {
                if (this.chapter == 0) {
                    this.toggleChapter(this.text.length - 1);
                } else {
                    this.toggleChapter(this.chapter - 1);
                }
            },

            /**
             *
             */
            nextHandler: function(e) {
                if (this.chapter == this.text.length - 1) {
                    this.toggleChapter(1);
                } else {
                    this.toggleChapter(this.chapter + 1);
                }
            }
        }));
    });
}