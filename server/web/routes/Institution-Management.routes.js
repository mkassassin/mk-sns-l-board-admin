module.exports = function(app) {

   var Controller = require('./../controller/Institution-Management.controller.js');


   app.post('/API/Institution-Management/InstitutionManagement_List', Controller.InstitutionManagement_List);
   app.post('/API/Institution-Management/InstitutionManagement_YearlyBatchesList', Controller.InstitutionManagement_YearlyBatchesList);
   app.post('/API/Institution-Management/InstitutionManagement_YearlyBatchesCreate', Controller.InstitutionManagement_YearlyBatchesCreate);
   app.post('/API/Institution-Management/InstitutionManagement_YearlyBatchView', Controller.InstitutionManagement_YearlyBatchView);

   
   app.post('/API/Institution-Management/InstitutionManagement_SemesterManagementsList', Controller.InstitutionManagement_SemesterManagementsList);
   app.post('/API/Institution-Management/InstitutionManagement_SemesterManagementsCreate', Controller.InstitutionManagement_SemesterManagementsCreate);
   app.post('/API/Institution-Management/InstitutionManagement_SemesterManagementsAsyncValidate', Controller.InstitutionManagement_SemesterManagementsAsyncValidate);
   app.post('/API/Institution-Management/InstitutionManagement_SemesterManagementView', Controller.InstitutionManagement_SemesterManagementView);

};