export class Button {
    private text: String;
    private image: any;
    private onClickCallback: Function;

    public constructor(text: String, image: String) {
        this.text = text;
        this.image = image;
    }

    public setOnClick(callback: Function): void {
        this.onClickCallback = callback; 
    }

    public getView(): any {
        let template: String = `<button class="btn btn-light border rounded kaartjesknop" 
        id="${this.text.toString().toLowerCase() + "id"}">
            
            <img src="${this.image}" id="categorieimg"/>
            <p id="buttontext">${this.text}</p>
        </button>`;

        console.log("knop aangemaakt!");
        return $(template)
            .on(
                "click",
                (e: any) => this.setOnClick(e)
            );
    }
}