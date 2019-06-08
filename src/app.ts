import { categoryController } from "./controllers/categorycontroller";
import { bottomBarController } from "./controllers/bottombarcontroller";
import { StappenplanController } from './controllers/stappenplancontroller';
import { Stappenplan } from "./models/stappenplan";
import { DataService } from "./services/DataService";

export class App {

    private static standard: any;
    private static categoryController: any;
    private static stappenplanController: any;

    public static main(): void {
        
        App.standard = new bottomBarController();

        $("#bottombarid").insertBefore($("#container"));

        new categoryController();
        new StappenplanController();

    }
}