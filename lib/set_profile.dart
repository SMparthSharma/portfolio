import 'package:get/get.dart';
import 'package:get/get_state_manager/get_state_manager.dart';

class SingUpController extends GetxController{
  var isProfilePicPathSet= false.obs;
  var profilePicPath ="".obs;
  void setProfileImagePath(String path){
    profilePicPath.value=path;
    isProfilePicPathSet.value=true;
  }

}
class Info {
  var name="Enter your name";
  var domain="Enter your domain";
  var collegeName="Enter college name";
  var github="Enter your github ";
  var linkedin="Enter your linkedin";
  var email="Enter your email";
  var number="Enter your number";
  var about=" ";
  Info(this.name,this.linkedin,this.github,this.about,this.collegeName,this.domain,this.email,this.number);
}