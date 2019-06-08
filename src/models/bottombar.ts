import { Controller } from "../controllers/controller";
import { TestUtils } from "utils/testutils";
import { Button } from "../components/buttons/button";
import { HomeButton } from '../components/buttons/homeButton';
import { Navbar } from '../components/navbar/navbar';
import { Title } from '../components/title/title';
import { ToevoegenButton } from "../components/buttons/ToevoegenButton";
import { LoginButton } from "../components/buttons/loginButton";

export class bottomBar {

    private onClickCallback: Function;
    
    public setOnClick(callback: Function): void {
        this.onClickCallback = callback;
    }

    public getHomeButton(): HomeButton{
        let hbutton: HomeButton = new HomeButton();
        return hbutton;
    }

    public getNavbar(): Navbar{
        let nBar: Navbar = new Navbar();
        return nBar;
    }

    public getTitle(): Title{
        let titel: Title = new Title();
        return titel;
    }
    
    public createToevoegenButton(): ToevoegenButton{
        let button: ToevoegenButton = new ToevoegenButton();
        return button;
    }

    public createLoginButton(): LoginButton{
        let button: LoginButton = new LoginButton();
        return button;
    }
}