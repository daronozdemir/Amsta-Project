export class ToevoegenTemplate {

    public getView(): any {
        let template: String = `
            <div id="toevoegenTemplate" class="toevoegen-scherm">
            <div class="row">
                <div class="col-md-12">
                    <br />
                    <button class="btn btn-default" id="returnBtn">Overzicht</button>
                    <hr>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <h4>Stappenplan toevoegen</h4>
                    <hr>
                    <div id="toevoegenMsg">

                    </div><br />
                    <div class="form-group">
                        <label>Naam</label>
                        <input class="form-control" type="text" id="planName">
                    </div>
                    <div class="form-group">
                        <label>Categorie</label>
                        <select class="form-control" id="planCategory">
                            <option selected disabled value="">Selecteer een categorie</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Afbeelding</label>
                        <input class="form-control-file" id="planImg" type="file">
                    </div>
                </div>
                <div class="col-md-12 text-right stappenplan-options">
                <a id="toevoegenBtn">Toevoegen</a>
                </div>
            </div>
        </div>`;

        return $(template);
    }

}