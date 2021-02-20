const app = {
    data() {
        return {
            img: [{
                url: 'https://images.unsplash.com/photo-1512441933491-7b8cc442ed32?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                text: 'Forest at night',
                fav: true
            },
            {
                url: 'https://images.unsplash.com/photo-1445711005973-54fe2a103826?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                text: 'Forest in the morning',
                fav: false
            },
            {
                url: 'https://images.unsplash.com/photo-1613050447501-b8602a8213b3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                text: 'Reject Humanity',
                fav: false
            },
            {
                url: 'https://images.unsplash.com/photo-1611152774197-944b89c25231?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                text: 'Ruturn to Monke',
                fav: false
            },
            ],
            svg :"http://www.w3.org/2000/svg",
            searchButton: true,
            searchBox: false,
            search: '',
            canvas: false,
            notFound: false,
            zoomIn: '',
            shown: false
        }
    },
    methods: {
        likeImg(index) {
            this.img[index].fav = !this.img[index].fav;
        },
        showBar(){
            this.searchBox = !this.searchBox;
            this.searchButton = !this.searchButton;
            this.search = '';
        },
        cancel(){
            this.canvas = false;
        },
        zoomImg(index){
            this.zoomIn = this.img[index].url;
        },
        shownImg(){
            this.shown = !this.shown;
        }
    },
    computed: {
        count() {
            return this.img.filter(t => t.fav).length;
        },
        total(){
            return this.img.length;
        },
        filterPhoto(){
            this.notFound = false;
            if(this.search == ''){
                return this.img
            } else {
                ft = this.img.filter(a => a.text.toLowerCase().includes(this.search.toLowerCase()));
                if(ft.length == 0){
                    this.notFound = true;
                } else {
                    return ft;
                }
            }
        }
    }
}

mountedApp = Vue.createApp(app).mount('#app')