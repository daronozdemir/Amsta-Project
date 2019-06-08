import { Controller } from "../controllers/controller";
import { Progressbar } from "../components/bar/progressbar";
import { Navbar } from "../components/navbar/navbar";
import { bottomBar } from "../models/bottomBar";
import { categoryController } from "./categorycontroller";
import { HomeButton } from "../components/buttons/homeButton";
import { alertWindow } from "../components/window/alertWindow";

import { ToevoegenController } from "./toevoegencontroller";
import { LoginController } from "./LoginController";

export class bottomBarController extends Controller {

    private homePage: bottomBar;
    private homeknop: HomeButton;
    private alertKnop: alertWindow;

    protected setup(): void {
        
        this.homeknop = new HomeButton;
        this.homePage = new bottomBar();
        this.alertKnop = new alertWindow;

        var homePageDiv = $("<div>").attr("id", "bottombarid");
        var self = this;
        
        homePageDiv.append(this.homePage.getHomeButton().getView());
        homePageDiv.append(this.homePage.getNavbar().getView());
        homePageDiv.append(this.homePage.getTitle().getView());
        homePageDiv.append(this.homePage.createToevoegenButton().getView());
        $("body").append(homePageDiv);
        $("body").append(self.alertKnop.getView());

        homePageDiv.append(this.homePage.createLoginButton().getView());

        // functionality to homebutton
        $("#homeknop").click( function() {
            self.alertKnop.showModal(
                "Attentie!",
                "U heeft op de HomeKnop geklikt, weet u zeker dat u naar het HOMESCHERM wilt?",
                "OK!",
                "CANCEL!",
                (e) => {

                    self.alertKnop.hideModal();
                    // $("#container").empty();
                    // $("#container").append(
                    //     $("<div>").addClass("categorieid")
                    // );
                    location.href="../index.html";
                    
                },
                (e) => {
                }
            );
        });

        $("#plantoevoegenid").click(() => {
            $("#container").empty()
            new ToevoegenController()

        });

        $("#plantoevoegenid").click(() =>{
            $("#container").empty()
            new ToevoegenController()
        });

        $("#loginButton").click(() =>{
            $("#container").empty();
            new LoginController();
        });
    }
}