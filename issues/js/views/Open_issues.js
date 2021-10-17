import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Open issues");
    }

    async getHtml() {
        return `
            <h1>Hello user!!! </h1>
            <p>
                These are your open issues
            </p>
        `;
    }
}