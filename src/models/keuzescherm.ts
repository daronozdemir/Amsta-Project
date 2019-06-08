import { KeuzeSchermTemplate } from "../components/keuzescherm/template";

export class KeuzeScherm {
    
    public createScherm(): any{
        let template = new KeuzeSchermTemplate();
        return template;
    }


}