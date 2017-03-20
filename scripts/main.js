/*//Gold Challenge - Assignment 6
var HIDDEN_DETAIL_CLASS = 'hidden-detail';
function hideDetails() {
    'use strict';
    document.body.classList.add(HIDDEN_DETAIL_CLASS);
}*/


//Gold Challenge Assignment 6
/*function showDetails() {
    'use strict';
    document.body.classList.remove(HIDDEN_DETAIL_CLASS);
}*/
(function(window) {
    'use strict';
    var FORM_SELECTOR = '[data-coffee-order="form"]';
    var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
    var App = window.App;
    var Truck = App.Truck;
    var DataStore = App.DataStore;
    var FormHandler = App.FormHandler;
    var CheckList = App.CheckList;

    var myTruck = new Truck('ncc-1701', new DataStore());
    window.myTruck = myTruck;

    var checkList = new CheckList(CHECKLIST_SELECTOR);
    checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));
    var formHandler = new FormHandler(FORM_SELECTOR);

    //Gold Challenge Assignment 6 - Initially hide details
    //hideDetails();


    /*
    bind( ) is used to guarantee that you get myTruck
    */
    formHandler.displaySlide();
    formHandler.addSubmitHandler(function(data) {
        myTruck.createOrder.call(myTruck, data);
        checkList.addRow.call(checkList, data);
    });

    console.log(formHandler);





})(window);
