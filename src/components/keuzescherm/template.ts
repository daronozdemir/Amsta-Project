export class KeuzeSchermTemplate {

    private stap: any;

    public getView(): any {
        let template: String = `
        <div class="overzicht">
            <div class="stappenPlanOptions">
                <button class="btn btn-default" id='stappenPlanToevoegen'>Stappenplan toevoegen</button>
                <button class="btn btn-default" id='stappenPlanVerwijderen'>Stappenplan verwijderen</button>
            </div>
            <table class="table" id="stappenplanOverzicht">
                <thead class="thead-light">
                    <tr>
                        <th>Stappenplan</th>
                        <th>Categorie</th>
                        <th style="width: 100px;"></th>
                    </tr>
                </thead>
            </table>
        </div>
        `;
        

        return $(template);
    }

}