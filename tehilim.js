export function tehilim() {
    document.addEventListener('alpine:init', () => {
        Alpine.data('tehilim', () => ({
            tehilimPath: '../datas/hagiographes/',
            tehilimFile: 'tehilim.json',
            title: '',
            text: [],
            books: [],
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

            /**
             *
             */
            getRange: function(originalArray, start, end) {

                return originalArray.reduce((acc, currentValue, currentIndex) => {
                    if (currentIndex >= start && currentIndex <= end) {
                        acc.push(currentValue);
                    }
                    return acc;
                }, []);
            },

            getBooks: function() {
                this.book1 = this.getRange(this.text, 0, 40)
            },
        }));
    });
}