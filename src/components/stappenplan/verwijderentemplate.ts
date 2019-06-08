export class VerwijderenTemplate {

    public getView(): any {
        let template: String = `
        <div id="stappenplanActionTemplate">
            <div class="row">
                <div class="col-md-12">
                    <br />
                    <button class="btn btn-default" id="returnBtn">Overzicht</button>
                    <hr>
                </div>
            </div>
            <h4>Stappenplan verwijderen</h4>
            <hr>
            <label>Stappenplan:</label>
            <select class="form-control" id="stappenplanOptions">
                <option disabled selected value="default">Selecteer een stappenplan</option>
            </select>
            <button id="verwijderenButton" disabled>Verwijderen</button>
        </div>`;

        return $(template);
    }

}