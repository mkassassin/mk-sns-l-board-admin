module.exports = function(app) {

   var Controller = require('./../../Controllers/Admin-Panel/Staffs.controller');

   app.post('/API/Staffs/Staff_Create', Controller.Staff_Create);
   app.post('/API/Staffs/Staff_List', Controller.Staff_List);
   app.post('/API/Staffs/InstitutionBased_StaffsList', Controller.InstitutionBased_StaffsList);
   app.post('/API/Staffs/DepartmentBased_StaffsList', Controller.DepartmentBased_StaffsList);
   app.post('/API/Staffs/InstitutionAndRollBased_StaffsSimpleList', Controller.InstitutionAndRollBased_StaffsSimpleList);
   app.post('/API/Staffs/DepartmentBased_StaffsSimpleList', Controller.DepartmentBased_StaffsSimpleList);
   app.post('/API/Staffs/Staff_View', Controller.Staff_View);
};