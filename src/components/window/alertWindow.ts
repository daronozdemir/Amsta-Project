type ModalCallback = (e: any) => void;

export class alertWindow {
    private onClickCallback: Function;

    public getView(): any {
        let template: string = `
        <div class="modal fade" id="myModal" role="dialog">
              <div class="modal-dialog">
                <div class="modal-content">
                
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Modal Title</h4>
                  </div>
                
                  <div class="modal-body">
                    <p>Modal body text will go here.</p>
                  </div>
                  
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary modal-cancel" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary modal-ok">Save changes</button>
                  </div> 
                </div>
               </div> 
            </div>
            
          </div>    `

        return $(template);
    }

    public showModal(
        title: string,
        text: string, 
        okButton: string = undefined, 
        cancelButton: string = undefined, 
        okCallback:ModalCallback = undefined, 
        cancelCallback: ModalCallback = undefined
    ): void {
        $("#myModal .modal-title").text(title);
        $("#myModal .modal-body").text(text);
        $("#myModal .modal-ok").text(okButton);

        if(cancelButton == undefined) {
            $("#myModal .modal-cancel").hide();
        }
else {
            $("#myModal .modal-cancel").show().text(cancelButton);

            $("#myModal .modal-cancel").off();

            if(cancelCallback != undefined) {
                $("#myModal .modal-cancel").off().on("click", cancelCallback);
            }
        }

        if(okButton == undefined) {
            $("#myModal .modal-ok").hide();

        }
        else {
            $("#myModal .modal-ok").show().text(okButton);

            $("#myModal .modal-ok").off();

            if(okCallback != undefined) {
                $("#myModal .modal-ok").off().on("click", okCallback);
            }
        }

        $("#myModal").modal("show");
    }

    public hideModal() : void {
        $("#myModal").modal("hide");
    }
}