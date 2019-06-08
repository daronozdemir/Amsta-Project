import { Controller } from "./controller";
import { KeuzeScherm } from "../models/keuzescherm";
import { DataService } from "../services/DataService";
import { BeheerController } from "./beheercontroller";
import { VerwijderenController } from "./verwijderencontroller";
import { bottomBar } from "../models/bottomBar";
import { ToevoegenScherm } from "../models/toevoegenscherm";
import { ToevoegenController } from "./toevoegencontroller";

export class KeuzeschermController extends Controller {

    private scherm: KeuzeScherm;
    private homePage: bottomBar;
    private dataService: any;

    protected setup(): void {
         
        this.dataService = new DataService();
        this.scherm = new KeuzeScherm();
        this.homePage = new bottomBar();
        var self = this;

        $("#container").append(this.scherm.createScherm().getView())

        $("#stappenPlanVerwijderen").on('click', function(){
            $("#container").empty();
            new VerwijderenController();
        });

        $("#stappenPlanToevoegen").on('click', function(){
            $("#container").empty();
            new ToevoegenController();
        });

        this.dataService.getStappenplanList((data: any) => {
            data.forEach(function(item: any) {
                $("#stappenplanOverzicht").append(`
                    <tr>
                        <td>`+ item.plannaam +`</td>
                        <td>`+ item.catnaam +`</td>
                        <td><button class="btn btn-secondary stap-btn" data-plannaam="` + item.plannaam + `" id="beheerStappenplan">Beheer stappen</button></td>
                    </tr>
                `);
            });

            $(".stap-btn").on("click", (e) => {
                let plannaam = e.target.dataset.plannaam;

                $("#container").empty();
                let beheer = new BeheerController();
                beheer.planNaam = plannaam;
                beheer.setPlan();
            });
        });
      
    }
}