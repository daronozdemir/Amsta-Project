export class Progressbar {
    private currentValue: any = 0;

    public setCurrentValue(currentValue: Number): void{
        this.currentValue = currentValue;
    }   

    public increaseValue(inValue: any){
        this.currentValue += inValue;
        $(".progress-bar").animate({width: this.currentValue + "%"}, 200);
    }

    public decreaseValue(inValue: any){
        this.currentValue = this.currentValue - inValue;

        $(".progress-bar").animate({width: this.currentValue + "%"}, 200);
    }


    public getView(): any {
        let template: string = `<div class="progress">
        <div class="progress-bar progress-bar-striped progress-bar-animated" 
        role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" 
        style="width: 0%"></div></div>`;

        return $(template)
    }
}