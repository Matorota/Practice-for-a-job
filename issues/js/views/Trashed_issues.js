import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Trashed_issues");
    }

    async getHtml() {
        return `
            <h1>Trashed issues</h1>
            <p>Manage your privacy and configuration.</p>
        `;
    }
}