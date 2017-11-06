console.log('js sourced');


var myApp = angular.module('myApp', []);
myApp.controller('MessageController', function($http){ 

var vm = this;
var message = [];
vm.newMessage = function(newM){
    console.log('submit button clicked', newM);
    $http.post('/message', newM).then(function(response){
        console.log('/post succesful');
        vm.getMessages();
    }).catch(function(error){
        console.log('failure on /post')
    })
}

vm.getMessages = function(){
    $http.get('/message').then(function (response) {
        console.log('Success!');
        vm.message = response.data;
    }).catch(function (error) {
        console.log('Failure!', error);
    });
}
vm.getMessages();

    
    //my attempt at using angular.copy() to prevent username from populating in all username fields
vm.newReply = function(newR){
console.log('test');  
console.log(newR.username);
var replyName = newR.username;
var replyCopy = angular.copy(replyName);

}

});
