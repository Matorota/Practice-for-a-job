import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Done_Issues");
    }

    async getHtml() {
        return `
            <h1>Done Issues</h1>
            <p>You are viewing Done Issues!</p>
       

        `;
    }
    

}
