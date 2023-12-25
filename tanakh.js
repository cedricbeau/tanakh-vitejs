export function tanakh() {
    document.addEventListener('alpine:init', () => {
        Alpine.data('tanakh', () => ({
            title: '',
            text: [],
            chapter: 0,
            open: false,

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
            prevHandler: function() {
                if (this.chapter == 0) {
                    this.toggleChapter(this.text.length - 1);
                } else {
                    this.toggleChapter(this.chapter - 1);
                }
            },

            /**
             *
             */
            nextHandler: function() {
                if (this.chapter == this.text.length - 1) {
                    this.toggleChapter(1);
                } else {
                    this.toggleChapter(this.chapter + 1);
                }
            },

            // Tehilim

            closeTehilim() {
                this.chapter = 0;
            },

            openTikounHaklali() {
                this.chapter = 15;
            },

            displayTehilim: function(book) {
                const indices = this.getTehilimBook(book);
                const bookParts = document.querySelectorAll('.book-part');

                Array.from(bookParts).forEach((element, index) => {
                    element.style.display = indices.includes(index) ? 'block' : 'none';
                });
            },

            displayTehilimCycle: function(cycle) {
                const indices = this.getTehilimCycle(cycle);
                const CycleParts = document.querySelectorAll('.cycle-part');

                Array.from(CycleParts).forEach((element, index) => {
                    element.style.display = indices.includes(index) ? 'block' : 'none';
                });
            },

            getTehilimBook: function(book) {
                switch (book) {
                    case 1:
                    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40];
                    case 2:
                    return [41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71];
                    case 3:
                    return [72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88];
                    case 4:
                    return [89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105];
                    case 5:
                    return [106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149];
                    default:
                    console.error('Filtre inconnu');
                    return [];
                }
            },

            getTehilimCycle: function(cycle) {
                switch (cycle) {
                    case 1:
                    return [0,1,2,3,4,5,6,7,8];
                    case 2:
                    return [9,10,11,12,13,14,15,16];
                    case 3:
                    return [17,18,19,20,21];
                    case 4:
                    return [22,23,24,25,26,27];
                    case 5:
                    return [28,29,30,31,32,33];
                    case 6:
                    return [34,35,36,37];
                    case 7:
                    return [38,39,40,41,42];
                    case 8:
                    return [43,44,45,46,47];
                    case 9:
                    return [48,49,50,51,52,53];
                    case 10:
                    return [54,55,56,57,58];
                    case 11:
                    return [59,60,61,62,63,64];
                    case 12:
                    return [65,66,67];
                    case 13:
                    return [68,69,70];
                    case 14:
                    return [71,72,73,74,75];
                    case 15:
                    return [76,77];
                    case 16:
                    return [78,79,80,81];
                    case 17:
                    return [82,83,84,85,86];
                    case 18:
                    return [87,88];
                    case 19:
                    return [89,90,91,92,93,94,95];
                    case 20:
                    return [96,97,98,99,100,101,102];
                    case 21:
                    return [103,104];
                    case 22:
                    return [105,106];
                    case 23:
                    return [107,108,109,110,111];
                    case 24:
                    return [112,113,114,115,116,117];
                    case 25:
                    return [118];
                    case 26:
                    return [118];
                    case 27:
                    return [119,120,121,122,123,124,125,126,127,128,129,130,131,132,133];
                    case 28:
                    return [134,135,136,137,138];
                    case 29:
                    return [139,140,141,142,143];
                    case 30:
                    return [144,145,146,147,148,149];
                    default:
                    console.error('Filtre inconnu');
                    return [];
                }
            },
        }));
    });
}