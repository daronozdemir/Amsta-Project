import { Controller } from "./controller";
import { ToevoegenScherm } from "../models/toevoegenscherm";
import { DataService } from "../services/DataService";

import { KeuzeschermController } from "./keuzeschermcontroller";

export class ToevoegenController extends Controller {

    private scherm: any;
    private dataService: any;

    protected setup(): void {

        this.scherm = new ToevoegenScherm();
        this.dataService = new DataService();

        this.scherm = this.scherm.createToevoegenScherm();
        $("#container").append(this.scherm);

        // load categories
        this.dataService.getCategory((res: any) => {
            res.forEach((item: any) => {
                $("#planCategory").append($("<option></option>").attr("value",item.catnaam).text(item.catnaam)); 
            });
        });

        /**
         * Add a new stappenplan to the database
         * Handle the input
         */
        $("#toevoegenBtn").on('click', () => {

            // get values from input
            let planName = ($("#planName").val() as string).trim();
            let planCategory = $("#planCategory").val();
            let planImg = $("#planImg").prop("files")[0];
            
            // check if input is valid
            if (planName == '' || planCategory == null || planImg.length === 0) {
                $("#toevoegenMsg").html("<div class='error'>Laat geen velden leeg</div>");
            } else {
                $("#toevoegenMsg").empty();

                let fileType = planImg["type"];
                var ValidImageTypes = ["image/gif", "image/jpeg", "image/png"];
                
                // check if image is legit
                if ($.inArray(fileType, ValidImageTypes) < 0) {
                    $("#toevoegenMsg").html("<div class='error'>Bestand is geen afbeelding (gif, jpeg, png)</div>");
                } else {

                    // append to formdata
                    var formData = new FormData();
                    formData.append("planName", planName);
                    formData.append("planCategory", (planCategory as any));
                    formData.append("planImage", planImg);

                    // send the data to the database
                    this.dataService.createStappenPlan(formData, (res: any) => {
                        if (res.status) {
                            $("#toevoegenMsg").html("<div class='success'>Succesvol het stappenplan: " + $("#planName").val() + " toegevoegd");
                            $("#planName").val('');
                            $("#planCategory").val('');
                            $("#planImg").replaceWith($("#planImg").val('').clone(true));
                        } else {
                            $("#toevoegenMsg").html("<div class='error'>Stappenplan is niet toegevoegd");
                        }
                    });
                }
            }
        });

        $("#returnBtn").on('click', () => {
            $("#container").empty();
            new KeuzeschermController();
        });

    }

}
