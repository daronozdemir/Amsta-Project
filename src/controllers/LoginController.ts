import { Controller } from "./controller";
import { LoginScherm } from "../models/loginscherm";
import { DataService } from "../services/DataService";

import { KeuzeschermController } from "./keuzeschermcontroller";

export class LoginController extends Controller {

    private scherm: LoginScherm;
    private dataService: any;

    protected setup(): void {
        
        this.scherm = new LoginScherm();

        $("#container").append(this.scherm.createScherm().getView());
        
        let dataService = new DataService();
        $("#loginButtonSubmit").on('click', function(){
            let naam = $("#naam").val();
            let wachtwoord = $("#wachtwoord").val();

            dataService.postLogin([naam, wachtwoord], function(res: any) {
                let result = JSON.parse(res);

                if (result.authorization === true) {
                    $("#container").empty();
                    new KeuzeschermController();                    
                } else {
                    $("#loginMessage").addClass("error").text("Gebruikersnaam en/of wachtwoord is incorrect");
                }
            });
        })
    }
}