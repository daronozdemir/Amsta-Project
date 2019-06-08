export class StapButton {
    private buttonText: string;
    private color: string;
    private onClick: Function;

    constructor(buttonText: string, color: string) {
        this.buttonText = buttonText;
        this.color = color;
    }

    public setOnClick(onClick: Function) {
        this.onClick = onClick;
    } 

    public getView(): any {
        const templateButton = `<button> ${this.buttonText} </button>`;

        return $(templateButton)
            .on(
                "click",
                (e: any) => this.onClick(e)
            )
    }


}
