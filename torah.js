export function torah() {
    document.addEventListener('alpine:init', () => {
        Alpine.data('torah', () => ({
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