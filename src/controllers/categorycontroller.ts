import { Stappenplan } from '../models/stappenplan';
import { Controller } from "../controllers/controller";
import { Category } from "../models/category"
import { StappenplanController } from "stappenplancontroller";
import jQuery from "jquery";
import { DataService } from '../services/DataService';

export class categoryController extends Controller {

    private categoryInstance: any;
    private dataService: any;
    private stappenplan: any;
    private plancontroller: any;
    private categories: any[];
    private stappenplannen: any[] = [];

    protected setup(): void {

        var self = this;

        // arrays
        this.categories = [];
        this.stappenplannen = [];

        // create instances
        this.stappenplan = new Stappenplan();
        this.dataService = new DataService();
        this.categoryInstance = new Category();

        // create categories
        this.getCategory(() => {
            this.categoryInstance.createCategoryKaartje(this.categories);
        });

        // create stappenplannen
        $(document).on('click', '#categorieid .col-md-3', function(){
            self.stappenplannen = []
            self.getStappenplanKaartjes($(this).text().replace(/\s+/g, ''), () => {
                self.categoryInstance
                .createStappenplanKaartje(self.stappenplannen);
                })
            $("#container").empty()
            
        })
    }

    /**
     * get categories from db
     * @param callback wait for response on request from server
     */
    private getCategory(callback: Function) {
        this.dataService.getCategory((data: any) => {
            for (var i = 0; i < data.length; i++) {
                this.categories.push(data[i]);
            }
            callback();
        });
    }   

    /**
     * get stappenplannen from db
     * @param categoryName choose the stappenplannen from which category 
     * @param callback wait for response on request from server
     */
    private getStappenplanKaartjes(categoryName: any, callback: Function){
        this.dataService.getStappenplan(
            categoryName,
            (data: any) => {
            for (var i = 0; i < data.length; i++) {
                this.stappenplannen.push(data[i]);
            }
            callback();
        });
    }

}
