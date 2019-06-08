import {Stappenplan} from "stappenplan";
import { volgendePijl } from "../components/arrows/volgendePijl";
import { vorigePijl } from "../components/arrows/vorigePijl";
import { Progressbar } from "../components/bar/progressbar";
import { Description } from "../components/description/description";
import { Image } from "../components/img/image";


export class Stap {
    
    private stapNaam: any;
    private description: any = new Description();
    private image: Image;

    constructor(description: any, image: any){
        this.setDescription(description);
        this.createImage(image);
    }

    public createImage(image: any): Image{
        this.image = new Image(image);
        return this.image;
    }
    
    public setDescription(description: any): any{
        this.description.setDescription(description);
        return this.description;
    }

    public showDescription(): any{
        return this.description.getView();
    }

    public showImage(): any{
        return this.image.getView();
    }

}
