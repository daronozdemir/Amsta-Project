export class InputScherm {

    private stap: any;

    public getView(): any {
        let template: String = `
        <div id="toevoegenstappenplannen">
            <form>
            <p>kaartjesplaatje:</p>
                <div id="newplanid">
                    <h4>plannaam:</h4>
                    <input type="text" name="plannaam" id="plannaam"><br>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span name="categorie">Kies Categorie</span>
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Koken</a>
                            <a class="dropdown-item" href="#">Corvee</a>
                            <a class="dropdown-item" href="#">Creatief</a>
                            <a class="dropdown-item" href="#">Gymnastiek</a>
                        </div>
                    </div>
                    <img id="planimg" src="#" alt="your image"/><br>
                    <input type="file" name="fileToUpload" id="fileToUpload"> 
                    
                    <button id="submitid" type="submit" value="SEND POST">Maak Stappenplan</button>
                    
                    <button type="button" class="btn btn-primary" id="volgendestaptoevoegenid">Nieuwe Stap</button>
                    
                </div>
            </form>
        </div>
       `;

        return $(template);
    }

}