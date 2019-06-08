export class InputStep {

    private stap: any;

    public getView(): any {
        let template: String = `
        <div class="nieuwestap">
            <h4>Stap: ${this.stap}</h4>
            <h2>Beschrijving:</h2>
            <textarea rows="4" cols="50" id="stapdescription${this.stap}"></textarea><br>
            <h2>Plaatje:</h2>
            <img id="stapprevimgid${this.stap}" src="#" alt="your image" /><br>
            <input type="file" name="fileToUpload" id="fileToUpload" id="stapimage${this.stap}"> <br>
            <button type="button" class="btn btn-danger verwijderstap"">Verwijder Stap</button>
        </div>`;

        return $(template);
    }

    public setStap(stap: any){
        this.stap = stap;
    }
}