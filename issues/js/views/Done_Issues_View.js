import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.Done_IssuesId = params.id;
        this.setTitle("View Done Issues");
    }

    async getHtml() {
        return `
            <h1>Done Issues</h1>
            <p>You are view Done_Issues #${this.Done_IssuesId}.</p>
        `;
    }
}
