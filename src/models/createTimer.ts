import { Stappenplan } from "../models/stappenplan"
import { Description } from "../components/description/description";

export class createTimer {
    //next description
    // timer code :)
    //stappenplan: Stappenplan;
    public i: number = 0; // stapcounter maar voor timer test ( of dit ook i kan zijn)
    public q: number = 0; // timer blegh
    public seconds: number = 0;
    public startTime: any;
    public endTime: any;
    public timeDiff: any;
    public resetTime:any;
    public resetTimeDiff: any;
    public timeDiffCum: number[] = new Array(Description.length);

    public constructor () {
        // this.stappenplan = stappenplan;
        // 

    }
    
     start() {
        this.startTime = new Date();
    }

     end() {
        this.endTime = new Date();

        this.timeDiff = this.endTime - this.startTime;
        this.timeDiff /= 1000;
        this.seconds = Math.round(this.timeDiff);
    }

     resetTimer(){
        this.endTime = new Date();
        this.start();
    }
     PopUp(){
        if(window.confirm('Gefelicteerd met het beeindigen van het curriculum!\nJe resultaten zijn als volgt:\n'))
    location.href="../index.html";
    }
    
    // previous descriptios
     prevBut() {
        this.i--;
        this.q--;
        console.log("PreviousBackButton " + this.q);
        this.resetTimer();
    }

    
    
     nextBut(){        
    if(this.i>=1){
        this.end();
        this.start();
        console.log("i = :" + this.i);
        console.log(Description.length);
        if(this.timeDiff >= this.timeDiffCum[this.q]){
            var removed = this.timeDiffCum.splice(this.q,1,Math.round(this.timeDiff));
            console.log("added time difference " + this.timeDiffCum[this.q]+ " to stap " + this.i);
            console.log("removed is: " + removed);
        }else if(this.timeDiff <= this.timeDiffCum[this.q]){
            console.log("tijd niet opgeslagen, vorige tijd was " + this.timeDiffCum[this.q]);
            this.timeDiff = this.timeDiffCum[this.q];
            
            
        }               
       this.timeDiffCum[this.q] = Math.round(this.timeDiff);
       
        //console.log(timeDiffCum.length + " " + i + " " + description.length);
        console.log(this.timeDiffCum[this.q] + " Opgeslagen in stap " + this.i);
       
        this.q++; 
    }
    
    if(this.i == (Description.length)){

        for(var k = 0; k <= (this.timeDiffCum.length-1); k++){
           console.log("stap " + (k+1) + " " + this.timeDiffCum[k])
           }
           this.PopUp();               
       }
    }
}
