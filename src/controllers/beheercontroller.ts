import { Controller } from "./controller";
import { BeheerScherm } from "../models/beheerscherm";
import { DataService } from "../services/DataService";
import { KeuzeschermController } from "./keuzeschermcontroller";

export class BeheerController extends Controller {

    private scherm: any;
    private dataService: any;

    // private stap: any;
    public planNaam: any;

    protected setup(): void {

        this.scherm = new BeheerScherm();
        this.dataService = new DataService();

        this.scherm = this.scherm.createBeheerScherm();
        $("#container").append(this.scherm);
    }

    public setPlan() {
        let planNaam = this.planNaam;
        this.dataService.getDescriptions(this.planNaam, (data: any) => {
            if (data) {
                data.forEach(function(item: any) {
                    $("#stappenOverzicht").append(`
                        <tr>
                            <td>`+ item.stapnr +`</td>
                            <td>`+ item.omschrijving +`</td>
                            <td><img class="stap-thumb-img" src="`+ item.stapimg +`"></td>
                            <td><button class="btn btn-warning verwijderStapBtn" data-stapnr="` + item.stapnr + `" data-plannaam="` + planNaam + `" id="verwijderStapBtn">Verwijder</button></td>
                        </tr>
                    `);
                });

                $(".verwijderStapBtn").on('click', (e) => {
                    this.deletePlan(e);
                });
            }
        });

        $("#stapToevoegenBtn").on('click', () => {
            let stapNr = ($("#stapNr").val() as string).trim();
            let stapOmschrijving = ($("#stapOmschrijving").val() as string).trim();
            let stapImg = $("#stapImg").prop("files")[0];

            if (stapNr == '' || stapOmschrijving == '' || stapImg.length === 0) {
                $("#stapToevoegenMsg").html("<div class='error'>Laat geen velden leeg</div>");
            } else {
                $("#stapToevoegenMsg").empty();

                let fileType = stapImg["type"];
                var ValidImageTypes = ["image/gif", "image/jpeg", "image/png"];

                if ($.inArray(fileType, ValidImageTypes) < 0) {
                    $("#stapToevoegenMsg").html("<div class='error'>Bestand is geen afbeelding (gif, jpeg, png)</div>");
                } else {
                    var formData = new FormData();
                    formData.append("stapNr", stapNr);
                    formData.append("stapOmschrijving", (stapOmschrijving as any));
                    formData.append("planNaam", this.planNaam);
                    formData.append("stapImg", stapImg);

                    this.dataService.createStap(formData, (res: any) => {
                        if (res.status) {
                            $("#stapToevoegenMsg").html("<div class='success'>Succesvol de stap: " + stapOmschrijving + " toegevoegd");
                            $("#stappenOverzicht").append(`
                                <tr>
                                    <td>`+ stapNr +`</td>
                                    <td>`+ stapOmschrijving +`</td>
                                    <td><img class="stap-thumb-img" src="https://team9.amsta-hva.tk/img/`+ stapImg.name +`"></td>
                                    <td><button class="btn btn-warning verwijderStapBtn" data-stapnr="` + stapNr + `" data-plannaam="` + planNaam + `" id="verwijderStapBtn">Verwijder</button></td>
                                </tr>
                            `);

                            $(".verwijderStapBtn").on('click', (e) => {
                                this.deletePlan(e);
                            });
                        } else {
                            $("#stapToevoegenMsg").html("<div class='error'>Stappenplan is niet toegevoegd");
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

    public deletePlan(e: any) {
        let stapData = {
            plannaam: e.target.dataset.plannaam,
            stapnr: e.target.dataset.stapnr
        };

        this.dataService.deleteStap(stapData, (data: any) => {
            if (data) {
                if (data.status === true) {
                    e.currentTarget.parentElement.parentElement.remove();
                }
            }
        });
    }

}