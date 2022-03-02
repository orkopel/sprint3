export default {
    props: ['note'],
    template: `
        <section class="note-preview">
            <text :note="note" v-if="isTextType"></text>
            <img v-if=imgType"> 
            <div>{{note.type}}</div>
        </section>
    `,
    data() {
        return {
            currType: this.note.type,
            isTextType: false,
            isImgType: false
        }
    },
    created() {
if (currType === 'text') isTextType =true;

    },
    methods: {},
    computed: {
        currType(){
            return this.note.type
        }
    }
}