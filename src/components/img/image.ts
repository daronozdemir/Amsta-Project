export class Image {
    
    private onClickCallback: Function;
    private image: any;

    constructor(image: any){
        this.image = image;
    }

    public getView(): any {
        let template: string = `<img src="${this.image}"/>`;

        return $(template);
    }
}