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