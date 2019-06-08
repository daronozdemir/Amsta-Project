import { Stappenplan } from "../models/stappenplan";
import { Stap } from "../models/stap";
import { ToevoegenController } from "../controllers/toevoegencontroller";

export class DataService {

    private data: any[];

    public getDescriptions(type: String, callback: Function): void {
        $.get("https://team9.amsta-hva.tk/src/Back-End/stappen/stapread.php?plannaam=" + type,
            function (data: any) {
                var result = JSON.parse(data).records;
                callback(result);
            }
        );
    }

    public getCategory(callback: Function): void {
        $.get("https://team9.amsta-hva.tk/src/Back-End/categorie/read.php",
            function (data: any) {
                var result = JSON.parse(data).records;
                callback(result);
            }
        );
    }

    public createStappenPlan(toevoegenData: Object, callback: Function): void {
        // $.post("https://team9.amsta-hva.tk/src/Back-End/stappenplan/create.php", {data: toevoegenData}, function(data) {
        //     callback(data);
        // });
        $.ajax({
            url: 'https://team9.amsta-hva.tk/src/Back-End/stappenplan/create.php',
            data: toevoegenData,
            processData: false,
            contentType: false,
            type: 'POST',
            success: function(data){
                callback(JSON.parse(data))
            }
        });
    }

    public createStap(stapData: Object, callback: Function): void {
        $.ajax({
            url: 'https://team9.amsta-hva.tk/src/Back-End/stappen/stapcreate.php',
            data: stapData,
            processData: false,
            contentType: false,
            type: 'POST',
            success: function(data){
                console.log(data);
                callback(JSON.parse(data))
            }
        });
    }

    public deleteStap(stapData: Object, callback: Function): void {
        $.post("https://team9.amsta-hva.tk/src/Back-End/stappen/stapdelete.php", {data: stapData}, function( data ) {
            var result = JSON.parse(data);
            callback(result);
        });
    }

    public getStappenplan(catnaam: String, callback: Function): void {
        $.get("https://team9.amsta-hva.tk/src/Back-End/stappenplan/read.php?catnaam=" + catnaam,
        function (data: any) {
                var result = JSON.parse(data).records;
                callback(result);
            }
        );
    }


    public getStappenplanList(callback: Function): void {
        $.get("https://team9.amsta-hva.tk/src/Back-End/stappenplan/list.php",
        function (data: any) {
                var result = JSON.parse(data);
                callback(result);
            }
        );
    }

    public postLogin(loginData: any, callback: Function): void {
        $.post("https://team9.amsta-hva.tk/src/Back-End/login/login.php", {data: loginData}, function( data ) {
            callback(data);
        });
    }

    public deletePlan(planNaam: string, callback: Function): void {
        $.post("https://team9.amsta-hva.tk/src/Back-End/stappenplan/delete.php", {plan: planNaam}, function( data ) {
            var result = JSON.parse(data);
            callback(result);
        });
    }
}