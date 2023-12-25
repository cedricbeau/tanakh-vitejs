export function tanakh() {
    document.addEventListener('alpine:init', () => {
        Alpine.data('tanakh', () => ({
            title: '',
            text: [],
            chapter: 0,
            open: false,
            books: {},
            cycle: {},

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

            displayTehilim: function(selector, indices) {
                const parts = document.querySelectorAll(selector);

                Array.from(parts).forEach((element, index) => {
                    element.style.display = indices.includes(index) ? 'block' : 'none';
                });
            },

            displayTehilimBook: function(book) {
                const indices = this.getTehilimBook(book);
                this.displayTehilim('.book-part', indices);
            },

            displayTehilimCycle: function(cycle) {
                const indices = this.getTehilimCycle(cycle);
                this.displayTehilim('.cycle-part', indices);
            },

            getTehilimBook: function(book) {
                const tehilimBookIndices = this.books;

                return tehilimBookIndices[book] || [];
            },

            getTehilimCycle: function(cycle) {
                const tehilimCycleIndices = this.cycle;

                return tehilimCycleIndices[cycle] || [];
            },
        }));
    });
}