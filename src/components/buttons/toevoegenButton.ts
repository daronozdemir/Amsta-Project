export class ToevoegenButton {

    private text: String;
    private onClickCallback: Function;

    public setOnClick(callback: Function): void {
        this.onClickCallback = callback; 
    }

    public getView(): any {
        let template: String = `
        <button id="plantoevoegenid">
            <p id="menutext">Stappenplan toevoegen</p>
        </button>`;

        return $(template)
            .on(
                "click",
                (e: any) => this.setOnClick(e)
            );
    }
}