import { Stap } from "stap";
import { Button } from "../components/buttons/button";
import { vorigePijl } from "../components/arrows/vorigePijl";
import { volgendePijl } from "../components/arrows/volgendePijl";
import { Progressbar } from "../components/bar/progressbar";
import { Description } from "../components/description/description";
import { Stapteller } from "../components/teller/stapteller";
import { StapButton } from "../components/buttons/stapButton";
import { StappenplanButton } from "../components/buttons/stappenplanButton";

export class Stappenplan {

    private name: string;
    private image: any;
    private description: Description;
    private backArrow: vorigePijl;
    private nextArrow: volgendePijl;
    private progressBar: Progressbar;
    private stapCounter: Number;
    private steps: Stap[];

    public createStappenplanButton(name: any, image: any): any {
        let stappenplanButton: StappenplanButton = new StappenplanButton(name, image);
        return stappenplanButton;
    }

    public createStappenplan(object: any[]): void {

        // stapcounter
        var i = 0;
        var self = this;
        console.log(object[i]);

        var newStap = new Stap(object[i].omschrijving, object[i].stapimg);

        // create progressbar
        var progressbar = new Progressbar();
        progressbar.setCurrentValue(0);
        var descriptionLength: any = object.length - 1;
        var stepPercentage: any = 100 / (descriptionLength);

        // create stapcount
        var stapcount = new Stapteller();
        stapcount.setMax(descriptionLength);
        if (i >= 0 && i <= descriptionLength) {
            stapcount.setCurrent(i);
        }

        // create image
        var stapImageView = newStap.showImage();
        $(stapImageView).attr("id", "stapimg");

        // assign some objects to it
        var stappenplanDiv = $("<div>");

        // append objects to html
        stappenplanDiv.append(newStap.showDescription());
        stappenplanDiv.append(stapImageView);
        stappenplanDiv.append(progressbar.getView());
        stappenplanDiv.append(stapcount.getView());
        stappenplanDiv.append(new volgendePijl().getView());
        stappenplanDiv.append(new vorigePijl().getView());
        $("#container").append(stappenplanDiv);
        $(".btn-danger").hide();

        // next description
        $(".btn-success").click(() => {
            if (i == 0) {
                $(".btn-danger").show();
            }
            if (i < object.length - 1) {
                i++;
                console.log(i);

                $(".justify-content-around").remove();
                $("h3").remove();
                $("#stapimg").remove();  // new stapimg

                let newStap = new Stap(object[i].omschrijving, object[i].stapimg)

                progressbar.increaseValue(stepPercentage);
                stapcount.setCurrent(i);

                var showimg = newStap.showImage();
                $(showimg).attr("id", "stapimg");

                stappenplanDiv.append(newStap.showDescription());
                stappenplanDiv.append(showimg);
                stappenplanDiv.append(stapcount.getView());
            }

            if (i == object.length - 1) {
                $(".btn-success").hide();
            }
            // felicitatie check if felicitatie exist and if i equals last step
            if (i == descriptionLength && !($("#felicitatie").length)) {
                $("#container").append(
                    $("<img>").attr("src", "../../img/Confettii2.gif").attr("id", "felicitatie")
                );
            } else {
                $("body").remove("#felicitatie");
            }
        });

        // prev description
        $(".btn-danger").click(() => {
            if (i > 0 && i <= descriptionLength) {
                i--;
                console.log(i);

                // remove everything on click
                $(".justify-content-around").remove();
                $("h3").remove();
                $("#felicitatie").remove();
                $("#stapimg").remove();
                $(".btn-success").show();

                let newStap = new Stap(object[i].omschrijving, object[i].stapimg)

                progressbar.decreaseValue(stepPercentage);
                stapcount.setCurrent(i);

                var showimg = newStap.showImage();
                $(showimg).attr("id", "stapimg");

                stappenplanDiv.append(newStap.showDescription());
                stappenplanDiv.append(showimg);
                stappenplanDiv.append(stapcount.getView());
            }
            if (i == 0) {
                $(".btn-danger").hide();
            }

        });

        // reset i
        $(".circle").click(() => {
            console.log(i);
            i = 0;
        });

    }
}