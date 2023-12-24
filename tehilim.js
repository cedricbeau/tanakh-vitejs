export function tehilim() {
    document.addEventListener('alpine:init', () => {
        Alpine.data('tehilim', () => ({
            tehilimPath: '../datas/hagiographes/',
            tehilimFile: 'tehilim.json',
            title: '',
            text: [],
            chapter: 0,
            open: false,

            /**
             *
             */
            loadTehilim() {
                fetch(`${this.tehilimPath}${this.tehilimFile}`)
                .then(response => response.json())
                .then(json => {
                    this.title = json.title;
                    this.text = json.text;
                })
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
            },

            displayTehilim: function(book) {
                const indiceBook = this.getTehilim(book);
                const bookParts = document.querySelectorAll('.book-part');

                Array.from(bookParts).forEach((element, index) => {
                  if (indiceBook.includes(index)) {
                    element.style.display = 'block';
                  } else {
                    element.style.display = 'none';
                  }
                });
            },

            getTehilim: function(book) {
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
            }
        }));
    });
}