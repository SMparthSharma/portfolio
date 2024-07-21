import 'dart:io';
import 'dart:ui';

import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:get/get.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:image_picker/image_picker.dart';
import 'package:portfolio/edit.dart';
import 'package:portfolio/set_profile.dart';
class Home  extends StatefulWidget {

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  SingUpController singUpController= Get.put(SingUpController());
  SingUpController singUpController1= Get.find();

  File? pickedFile;

  ImagePicker imagePicker=ImagePicker();

  @override
  Widget build(BuildContext context) {
   Map info = (ModalRoute.of(context)!.settings.arguments ??{}) as Map;
   print(info['domain']);

    return Scaffold(backgroundColor: Color(0xFF083033),
      body: SingleChildScrollView(
        child: Align(
          child: SafeArea(
            child: Padding(
              padding: const EdgeInsets.only(top: 30, left: 20),
              child: Column(
                children: <Widget>[
                  Row(
                    children: <Widget>[
                      Stack(
                        children: [
                         Obx (()=>CircleAvatar(radius: 50,
                            backgroundImage:singUpController1.isProfilePicPathSet.value==true?FileImage(File(singUpController1.profilePicPath.value))as ImageProvider: AssetImage("Images/propic.jfif"),)),
                          Positioned(
                              bottom: 0, left: 65,
                              child: IconButton(onPressed: () {
                                print("object");
                                showModalBottomSheet(context: context,
                                    builder: (context) => bottomSheet());
                              },
                                icon: const Icon(Icons.camera,color: Colors.amber,),)),
                        ],
        
                      ),
                      Padding(
                        padding: const EdgeInsets.only(left: 10),
                        child: Container(
                          height: 100,width: 230,
        
                          child: Column(
                            children: [
                              Padding(
                                padding: const EdgeInsets.only(left: 200),
                                child: SizedBox(height: 25,
                                  child: IconButton(onPressed: (){Navigator.push(context, MaterialPageRoute(builder: (context)=>Edit()));},
                                      icon: Icon(Icons.edit_note,color: Colors.amber,)),
                                ),
                              ),
        
                              Expanded(
                                child: AutoSizeText('${info['name']}', style: GoogleFonts.roboto(
                                    textStyle: const TextStyle(
                                        fontSize: 35, fontWeight: FontWeight.bold,color: Colors.white)),
                                  overflow: TextOverflow.ellipsis,
                                  maxLines: 1,
                                  minFontSize: 30,
                                ),
                              ),
                              const Text("Android developer", style: TextStyle(fontSize: 17,
                                  fontWeight: FontWeight.bold,color: Colors.white),)
                            ],
                          ),
                        ),
                      ),
        
                    ],
                  ),
                  SizedBox(height: 50,),
                  Container(height: 80,
                      child: Text("College Name",style: TextStyle(fontSize: 20,color: Colors.white),)),
        
                  Container(height: 80,
                      child: Text("Github Id",style: TextStyle(fontSize: 20,color: Colors.white),)),
        
                  Container(height: 80,
                      child: Text("Linkedin Id",style: TextStyle(fontSize: 20,color: Colors.white),)),
        
                  Container(
                      height: 80,
                      child: Text("Email Id",style: TextStyle(fontSize: 20,color: Colors.white),)),
        
                  Container(
                      height: 80,
                      child: Text("mobile number",style: TextStyle(fontSize: 20,color: Colors.white),)),
        
                  Text("About Me",style: TextStyle(fontSize: 20,color: Color(0xFF6D9773)),),
                  SizedBox(height: 15,),
                  Text("Your “About me” page forms the first impression of a company or product, puts a name and a face to your business, and gives website visitor the opportunity to develop a connection with you (a good reason for a visitor to stay on your website!), and it is your best chance to convert more visits to enquiries/more enquiries to customers.",
                    style: TextStyle(fontSize: 15,color: Color(0xFFBB8A52)),
                    overflow: TextOverflow.ellipsis,
                    maxLines: 5,
                  ),
                ],
        
              ),
            ),
          ),
        ),
      ),
    );

  }

  Widget bottomSheet() {
    return Container(
      color: Colors.black,
      height: 200,
      width: double.infinity,
      child: Column(
        children: [
          SizedBox(height: 20,),
          Text("Select Profile Image",style: GoogleFonts.roboto(textStyle: TextStyle(color: Colors.white,fontWeight: FontWeight.bold,fontSize: 20)),),
          SizedBox(height: 40,),
          Row(mainAxisAlignment: MainAxisAlignment.center,
            children: [
              InkWell(
                child: Column(
                  children: [
                    Icon(Icons.image,color: Colors.white,size: 40,),
                    SizedBox(height: 10,),
                    Text("Gallery",style: GoogleFonts.roboto(textStyle: TextStyle(color: Colors.white,fontWeight: FontWeight.bold)),)
                  ],
                ),
                onTap: (){
                  print("Image");
                  takeImage(ImageSource.gallery);
                },
              ),
              SizedBox(width: 80,),
              InkWell(
                child: Column(
                  children: [
                    Icon(Icons.camera,color: Colors.white,size: 40,),
                    SizedBox(height: 10,),
                    Text("Camera",style: GoogleFonts.roboto(textStyle: TextStyle(color: Colors.white,fontWeight: FontWeight.bold)),)
                  ],
                ),
                onTap: (){
                  print("camera");
                  takeImage(ImageSource.camera);
                },
              ),
            ],
          )
        ],
      ),
    );
  }

  Future takeImage(ImageSource source) async {
    final pickedImage=await imagePicker.pickImage(source: source,imageQuality: 100);

    pickedFile =File(pickedImage!.path);
    singUpController1.setProfileImagePath(pickedFile!.path);
    Get.back();
  }
}

