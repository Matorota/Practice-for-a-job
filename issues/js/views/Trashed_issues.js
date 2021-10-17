import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Trashed_issues");
    }

    async getHtml() {
        return `
            <h1>Trashed issues</h1>
            <p>Your Trashed Issues.</p>
        `;
    }
}