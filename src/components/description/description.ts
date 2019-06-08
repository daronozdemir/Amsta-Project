export class Description {
    
    private text: string;
    private onClickCallback: Function;

    public getDescription(): string{
        return this.text;
    }

    public setDescription(text: string){
        this.text = text;
    }

    public getView(): any {
        let template: String = `<div class="d-flex justify-content-around border border-warning">
                                    <p>
                                        ${this.text}
                                    </p>
                                </div>`;
        return $(template);
    }
}