export class LoginButton {

    private text: String;
    private onClickCallback: Function;

    public setOnClick(callback: Function): void {
        this.onClickCallback = callback; 
    }

    public getView(): any {
        let template: String = `
        <button id="loginButton">Login</button>`;

        return $(template)
            .on(
                "click",
                (e: any) => this.setOnClick(e)
            );
    }
}