export class InputScherm {

    private stap: any;

    public getView(): any {
        let template: String = `
        <div id="loginScreen">
            <div>
                <input type="text" id="naam" placeholder="Gebruiksernaam">
            </div>
            <div>
                <input type="password" id="wachtwoord" placeholder="Wachtwoord">
            </div>
            <div>
                <button id="loginButtonSubmit">Inloggen</button>
            </div>
            <div id="loginMessage"></div>
        </div>`;

        return $(template);
    }

}