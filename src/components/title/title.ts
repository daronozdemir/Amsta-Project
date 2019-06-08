export class Title{
    public getView(): any {
        let template: String = `<div id="pronesiadiv"><h1 id="pronesiatitel">Pronesia</h1></div>`;

        return $(template);
    }
}