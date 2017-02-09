// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var pictureApp =angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.directives','app.services', 'ngCordova'])

.config(function($ionicConfigProvider, $sceDelegateProvider){
  

  $sceDelegateProvider.resourceUrlWhitelist([ 'self','*://www.youtube.com/**', '*://player.vimeo.com/video/**']);

})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

/*
  This directive is used to disable the "drag to open" functionality of the Side-Menu
  when you are dragging a Slider component.
*/
.directive('disableSideMenuDrag', ['$ionicSideMenuDelegate', '$rootScope', function($ionicSideMenuDelegate, $rootScope) {
    return {
        restrict: "A",  
        controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {

            function stopDrag(){
              $ionicSideMenuDelegate.canDragContent(false);
            }

            function allowDrag(){
              $ionicSideMenuDelegate.canDragContent(true);
            }

            $rootScope.$on('$ionicSlides.slideChangeEnd', allowDrag);
            $element.on('touchstart', stopDrag);
            $element.on('touchend', allowDrag);
            $element.on('mousedown', stopDrag);
            $element.on('mouseup', allowDrag);

        }]
    };
}])

/*
  This directive is used to open regular and dynamic href links inside of inappbrowser.
*/
.directive('hrefInappbrowser', function() {
  return {
    restrict: 'A',
    replace: false,
    transclude: false,
    link: function(scope, element, attrs) {
      var href = attrs['hrefInappbrowser'];

      attrs.$observe('hrefInappbrowser', function(val){
        href = val;
      });
      
      element.bind('click', function (event) {

        window.open(href, '_system', 'location=yes');

        event.preventDefault();
        event.stopPropagation();

      });
    }
  };
});
pictureApp.controller("cameraController", function($scope, $cordovaCamera, $cordovaImagePicker){

  $scope.takePicture = function() {
        var options = { 
            quality : 75, 
            destinationType : Camera.DestinationType.DATA_URL, 
            sourceType : Camera.PictureSourceType.CAMERA, 
            allowEdit : true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 300,
            targetHeight: 300,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false
        };
 
        $cordovaCamera.getPicture(options).then(function(imageData) {
            $scope.imgURI = "data:image/jpeg;base64," + imageData;
        }, function(err) {
            // An error occured. Show a message to the user
        });
    }
    $scope.getPicture = function() { 
      
        // Image picker will load images according to these settings
    var options = {
        maximumImagesCount: 1, // Max number of selected images, I'm using only one for this example
        width: 800,
        height: 800,
        quality: 80      
    };
 
    $cordovaImagePicker.getPictures(options).then(function (results) {
                // Loop through acquired images
        for (var i = 0; i < results.length; i++) {
             $scope.imgURI = results[i];   // Print image URI
        }
    }, function(error) {
        console.log('Error: ' + JSON.stringify(error));    // In case of error
    });
}
});


  var like_state_for_one = false;
  var like_state_for_two = false;
function addLikesToOne(){
  if (like_state_for_one == false){
  var like = document.getElementById('instagram-button7');
  //console.log(like_counts).innerHTML;
  var total_likes = Number(like.innerHTML);
  var like_counts = total_likes + 1;
  like.innerHTML = like_counts;

  like_state_for_one = true;
  console.log(like_state_for_one);
}
  else {
    var like = document.getElementById('instagram-button7');
    var total_likes = Number(like.innerHTML);
    var like_counts = total_likes - 1;
    like.innerHTML = like_counts; 
    like_state_for_one= false;
    console.log(like_state_for_one);
  }
}

function addLikesToTwo(){
  if (like_state_for_two == false){
  var like = document.getElementById('instagram-button8');
  //console.log(like_counts).innerHTML;
  var total_likes = Number(like.innerHTML);
  var like_counts = total_likes + 1;
  like.innerHTML = like_counts;

  like_state_for_two = true;
  console.log(like_state_for_two);
}
  else {
    var like = document.getElementById('instagram-button8');
    var total_likes = Number(like.innerHTML);
    var like_counts = total_likes - 1;
    like.innerHTML = like_counts; 
    like_state_for_two= false;
    console.log(like_state_for_two);
  }
}

function postComment(){
  var comment = document.getElementById('commentId');
  var commentContent = comment.value;
  console.log(commentContent);
  var existingComment = document.getElementById('commented');
  var existingCommentContent = existingComment.innerHTML;
  console.log(existingCommentContent);
  existingComment.innerHTML = existingCommentContent + '<br>' + commentContent;
}