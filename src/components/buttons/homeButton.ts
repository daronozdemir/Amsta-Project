export class HomeButton {

    private onClickCallback: Function;
        
    public setOnClick(callback: Function): void {
        this.onClickCallback = callback; 

    }
    
    public getView(): any {
        let template: string = 
        `<div class="bottom"> 
            <a id="homeknop">
                <button class="circle"><i class="fa fa-home"></i></button>
            </a>
        </div>`;

        return $(template)
            .on(
                "click", 
                (e: any) => this.setOnClick(e)
            );
    }
}