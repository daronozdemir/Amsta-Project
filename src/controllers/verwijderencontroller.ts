import { Controller } from "./controller";
import { VerwijderenScherm } from "../models/verwijderenscherm";
import { DataService } from "../services/DataService";

import { KeuzeschermController } from "./keuzeschermcontroller";

export class VerwijderenController extends Controller {

    private scherm: VerwijderenScherm;
    private dataService: any;

    protected setup(): void {
        
        this.dataService = new DataService();
        this.scherm = new VerwijderenScherm();
        $("#container").append(this.scherm.createScherm().getView());

        this.dataService.getStappenplanList((data: any) => {
            data.forEach(function(item: any) {
                $("#stappenplanOptions").append($("<option></option>").attr("value", item.plannaam).text(item.plannaam)); 
            });
            let selectedStappenPlan: any = '';
            $("#stappenplanOptions").on("change", (e) => {
                selectedStappenPlan = $("#stappenplanOptions").val();
                $('#verwijderenButton').prop('disabled', false);           
            });

            $("#verwijderenButton").on("click", () => {
                if (confirm('Weet u zeker dat u het stappenplan ' + selectedStappenPlan + ' wilt verwijderen?')){
                    this.dataService.deletePlan(selectedStappenPlan, function(res: any) {
                        if (res.deleted) {
                            $("#stappenplanOptions option").each((index, option) => {
                                if ((option as any).value === selectedStappenPlan) {
                                    $("#stappenplanOptions option")[index].remove();
                                    $("#stappenplanOptions").val('default');
                                    $('#verwijderenButton').prop('disabled', true);
                                }
                            });
                        }
                    });
                }
            });  
        });

        $("#returnBtn").on('click', () => {
            $("#container").empty();
            new KeuzeschermController();
        });
    }
}