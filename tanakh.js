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