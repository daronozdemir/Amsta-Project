import { Controller } from "controller";
import { Stappenplan } from "../models/stappenplan";
import { Description } from "../components/description/description";
import { Stap } from "../models/stap";
import { Progressbar } from "../components/bar/progressbar";
import { Stapteller } from "../components/teller/stapteller";
import { DataService } from "../services/DataService";

export class StappenplanController extends Controller {

    private stappenplan: any;       // stappenplan
    private dataService: any;       // dataservice
    private stappenArray: any[]     // descriptions

    protected setup(): void {
        var self = this;
        this.stappenArray = [];
        
        this.stappenplan = new Stappenplan();
        this.dataService = new DataService();
        
        // clicking on a stappenplan will show the roadmap
        $(document).on('click', ".stappenplankaartje", function(){
            self.stappenArray = []
            self.getStap($(this).text().replace(/\s+/g, ''), function() {
                self.stappenplan.createStappenplan(self.stappenArray);
            })
            $("#container").empty()
        })
    }

    // get the step(s) from the db
    public getStap(planNaam: any, callback: Function): any {
        var self = this;
        this.dataService.getDescriptions(planNaam, (data: any) => {
            console.log(data);
            for(var i = 0; i < data.length; i++){
                self.stappenArray.push(data[i]);
            }
            callback();
        });
    }
}


