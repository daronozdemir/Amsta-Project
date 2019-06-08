export class BeheerTemplate {

    public getView(): any {
        let template: String = `
        <div id="beheerTemplate" class="beheer-scherm">
            <div class="row">
                <div class="col-md-12">
                    <br />
                    <button class="btn btn-default" id="returnBtn">Overzicht</button>
                    <hr>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <br />
                    <div id="stapToevoegenMsg">

                    </div><br />
                    <div class="form-group">
                        <label>Nummer</label>
                        <input class="form-control" type="number" id="stapNr" min="0">
                    </div>
                    <div class="form-group">
                        <label>Omschrijving</label>
                        <input class="form-control" type="text" id="stapOmschrijving">
                    </div>
                    <div class="row">
                    <div class="col-md-8">
                        <label>Afbeelding</label>
                        <input class="form-control-file" id="stapImg" type="file">
                    </div>
                        <div class="col-md-4">
                            <label><br /><br /></label>
                            <button class="btn btn-default" id="stapToevoegenBtn">Toevoegen</button>
                        </div>
                    </div>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-md-12">
                    <table class="table" id="stappenOverzicht">
                        <thead class="thead-light">
                            <th>Nummer</th>
                            <th>Omschrijving</th>
                            <th>Afbeelding</th>
                            <th></th>
                        </thead>
                    </table>
                </div>
            </div>
        </div>`;

        return $(template);
    }

}