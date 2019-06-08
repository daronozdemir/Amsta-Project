export class Stapteller {

    private current: any;
    private max: any;

    public setCurrent(current: any): any {
        this.current = current;
    }

    public setMax(max: any): any{
        this.max = max;
    }

    public getView(): any {
        let template: String = `<h3 id="stapcount">${this.current}/${this.max}</h3>`;

        return $(template);
    }


}