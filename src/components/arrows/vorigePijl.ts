export class vorigePijl {
    private text: String;
    private onClickCallback: Function;

    public setOnClick(callback: Function): void {
        this.onClickCallback = callback; 
    }

    public getView(): any {
        let template: String = 
            `<button class="btn step-btn btn-lg btn-danger float-left" id="prevstapbtnid">
                <i class="fa fa-arrow-circle-left"></i>
            </button>`;

        return $(template)
            .on(
                "click",
                (e: any) => this.setOnClick(e)
            );
    }
}