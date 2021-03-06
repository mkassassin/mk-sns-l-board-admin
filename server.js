var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var path = require('path');

var ErrorManagement = require('./server/handling/ErrorHandling.js');

var port = process.env.PORT || 5000;
var app = express();


// Process On Every Error
   process.setMaxListeners(0);
   process.on('unhandledRejection', (reason, promise) => {
      console.log(reason);
      ErrorManagement.ErrorHandling.ErrorLogCreation('', '', '', reason);
      console.error("'Un Handled Rejection' Error Log File - " + new Date().toLocaleDateString());
   });
   process.on('uncaughtException', function (err) {
      console.log(err);
      ErrorManagement.ErrorHandling.ErrorLogCreation('', '', '', err.toString());
      console.error(" 'Un Caught Exception' Error Log File - " + new Date().toLocaleDateString());
   });


// DB Connection
   mongoose.connect('mongodb://kathiraashi:kathir143@ds255403.mlab.com:55403/sns-leaderboard');
   mongoose.connection.on('error', function(err) {
      ErrorManagement.ErrorHandling.ErrorLogCreation('', 'Mongodb Connection Error', 'Server.js', err);
   });
   mongoose.connection.once('open', function() {
      console.log('DB Connectivity, Success!');
   });


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/API/Uploads', express.static('Uploads'));
// Admin Panel
      require('./server/web/routes/Admin-Panel/Admin/RegisterAndLogin.routes.js')(app);
      // Admin
      require('./server/web/routes/Admin-Panel/Admin/AdminManagement.routes.js')(app);
      // Students
      require('./server/web/routes/Admin-Panel/Students.routes.js')(app);
      // Staff's
      require('./server/web/routes/Admin-Panel/Staffs.routes.js')(app);
      // Activities
      require('./server/web/routes/Admin-Panel/Activities.routes.js')(app);
      // Levels
      require('./server/web/routes/Admin-Panel/Levels.routes.js')(app);
      // Institution Management
      require('./server/web/routes/Admin-Panel/Institution-Management.routes.js')(app);
      // Tutor Management
      require('./server/web/routes/Admin-Panel/Tutor-Management.routes.js')(app);
      // Current Semesters
      require('./server/web/routes/Admin-Panel/Current-Semesters.routes.js')(app);
      // Configuration
      require('./server/web/routes/Admin-Panel/Configuration/Institution.routes.js')(app);
      require('./server/web/routes/Admin-Panel/Configuration/Department.routes.js')(app);
      require('./server/web/routes/Admin-Panel/Configuration/Course.routes.js')(app);
      require('./server/web/routes/Admin-Panel/Configuration/Activity_Config/ActivityLevel.routes.js')(app);
      require('./server/web/routes/Admin-Panel/Configuration/Activity_Config/AchievementType.routes.js')(app);
      require('./server/web/routes/Admin-Panel/Configuration/Activity_Config/RedemptionMethod.routes.js')(app);
      require('./server/web/routes/Admin-Panel/Configuration/Subject.routes.js')(app);

// Student Panel
      // Register And Login
      require('./server/web/routes/Student-Panel/RegisterAndLogin.routes.js')(app);
      require('./server/web/routes/Student-Panel/Activities.routes.js')(app);



   app.use(express.static(__dirname + '/view/dist/view/'));

   app.use(function(req, res) {
      res.sendFile(path.join(__dirname, '/view/dist/view', 'index.html'));
   });


app.get('*', function(req, res){
    res.send('This is Server Side Page');
});


app.listen(port, function(){
  console.log('Listening on port ' + port);
});