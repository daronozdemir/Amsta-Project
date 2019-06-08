import { Category } from "./category";
import { ToevoegenTemplate } from "../components/stappenplan/toevoegentemplate";

export class ToevoegenScherm {

    public createToevoegenScherm(): any {
        let toevoegenTemplate = new ToevoegenTemplate();
        return toevoegenTemplate.getView();
    }

}