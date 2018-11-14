module.exports = function(applications){
    applications.get('/' ,  function(req , res){

        applications.app.controllers.indexController.index(applications,req ,res);
    });
}
    