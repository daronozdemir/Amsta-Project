import { BeheerTemplate } from "../components/stappenplan/beheertemplate";

export class BeheerScherm {

    public createBeheerScherm(): any {
        let toevoegenTemplate = new BeheerTemplate();
        return toevoegenTemplate.getView();
    }
    
}