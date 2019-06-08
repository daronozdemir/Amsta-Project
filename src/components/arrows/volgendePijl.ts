export class volgendePijl {
    private text: string;
    private onClickCallback: Function;

    public setOnClick(callback: Function): void {
        this.onClickCallback = callback;
    }

    public getView(): any {
        let template: String = 
            `<button class="btn btn-success step-btn btn-lg float-right">
                <i class="fa fa-arrow-circle-right"></i>
            </button>`;

        return $(template)
            .on(
                "click",
                (e: any) => this.setOnClick(e)
            );
    }
}


