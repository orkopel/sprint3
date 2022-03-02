import { utilService } from "../../../services/util-service.js";

export default {
    props: ['mail'],
    template: `
        <section class="mail-preview">
            <p>
                <strong>{{mail.from}}</strong> 
                <strong>{{shortSubject}}</strong>
                <span>
                    {{shortBody}}
                </span>

            </p>

        </section>
    `,
    data() {
        return {}
    },
    created() {},
    methods: {

    },
    computed: {
        shortSubject() {
            return utilService.shortingSentences(this.mail.subject, 2)
        },
        shortBody() {
            return utilService.shortingSentences(this.mail.body, 4)
        }
    }
}