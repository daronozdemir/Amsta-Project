import {Button} from "../components/buttons/button";
import { volgendePijl } from "../components/arrows/volgendePijl";
import { vorigePijl } from "../components/arrows/vorigepijl";
import { Stappenplan } from "./stappenplan";

export class Category {

    private name: String;
    private image: String;
    private onClickCallback: Function;


    public setName(name: String): any{
        this.name = name;
    }

    public getName(): any{
        return this.name;
    }
    
    public createKaartje(name: any, image: any): Button{
        let kaartje: Button = new Button(name, image);
        return kaartje;
    }

    public setOnClick(callback: Function): void {
        this.onClickCallback = callback; 
    }

    private createStappenplanKaartje(object: any[]): void {

        // create parent div for stappenplannen
        var stappenplan: any = $("<div>")
            .addClass("row")
            .attr("id", "stappenplanid");

        for (let i = 0; i < object.length; i++) {
            // bootstrap class for positioning
            var stappenplanPos = $("<div>").addClass("col-md-3");

            // a to append identifying buttons to
            var stappenplanA = $("<a>").attr("id", object[i].plannaam
                .toLowerCase()
                .toString());

            // create button
            var createStappenplanButton = new Stappenplan()
                .createStappenplanButton(object[i].plannaam, object[i].img)
                .getView();

            // append children to parents
            $(stappenplanA).append(createStappenplanButton);
            $(stappenplanPos).append(stappenplanA);
            $(stappenplan).append(stappenplanPos);
        }

        $("#container").html(stappenplan);
    }

    private createCategoryKaartje(objects: any[]) {

        var categorie: any = $("<div>").attr("id", "categorieid").addClass("row");

        // create divs for categories
        for (var i = 0; i < objects.length; i++) {
            // create a
            var categorieA = $("<a>").attr("id", objects[i].catnaam
                .toLowerCase() + "kaartje")

            // create div for every button
            var categorieClass = $("<div>")
                .addClass("col-md-3");

            // create new viewable category buttons
            let newCategory = this.createKaartje(objects[i].catnaam, objects[i].img)
                .getView();

            $(categorie).append(categorieClass);    // in the main div an div
            $(categorieClass).append(categorieA);   // in the div an A
            $(categorieA).append(newCategory);      // in the A a button
        }

        $("#container").html(categorie);          // append the main div to container
    }
}