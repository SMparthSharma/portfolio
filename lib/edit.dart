import 'package:flutter/material.dart';
import 'package:material_design_icons_flutter/material_design_icons_flutter.dart';


class Edit extends StatelessWidget {

  late TextEditingController controllerName=TextEditingController();

  late TextEditingController controllerDomain=TextEditingController();

  late TextEditingController controllerCollege=TextEditingController();

  late TextEditingController controllerGithub=TextEditingController();

  late TextEditingController controllerLinkedIn=TextEditingController();

  late TextEditingController controllerEmail=TextEditingController();

  late TextEditingController controllerPhone=TextEditingController();

  late TextEditingController controllerAboutMe=TextEditingController();

@override
  Widget build(BuildContext context) {
    return Scaffold(backgroundColor: Color(0xFF2D3250),
      appBar: AppBar(title: Text("Edit profile",style: TextStyle(color: Colors.white),),backgroundColor: Colors.transparent,
              centerTitle: true,
        leading: IconButton(onPressed: (){Navigator.pop(context);},
          icon: Icon(Icons.arrow_back,color: Colors.white,),),

        actions: [IconButton(onPressed: (){
          Navigator.popAndPushNamed(context, '/home',arguments: {"name":controllerName,"domain":controllerDomain,"college":controllerCollege,"git":controllerGithub,"link":controllerLinkedIn,"email":controllerEmail,"number":controllerPhone,"about":controllerAboutMe});
        },
            icon: Icon(Icons.check,color: Colors.white,))],
    ),
    body: SingleChildScrollView(
      child: Column(
                children: [ SizedBox(height: 50,),
                  Padding(
                    padding: const EdgeInsets.all( 8.0),
                    child: Container(
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.all(Radius.circular(50))
                      ),
                      height: 50,
                      width: 350,
                      child: Row(
                        children: [
                         // Icon(Icons.home,color: Colors.white70,),
                          Expanded(child: TextField(controller: controllerName,
                            keyboardType: TextInputType.name,
                            cursorColor: Colors.white,
                            style: TextStyle(color: Colors.white),
                            decoration: InputDecoration(prefixIcon: Icon(Icons.abc,color: Colors.orange,),
                              focusedBorder:OutlineInputBorder(borderRadius: BorderRadius.circular(50),
                              borderSide: BorderSide(color: Colors.amber,width: 2)
                              ),
                                border: OutlineInputBorder(borderRadius: BorderRadius.circular(50)),
                              hintText: "Enter Your Name",hintStyle: TextStyle(color: Colors.white30)
                            ),
                          ))
                        ],
                      ),
      
                    ),
      
      
                  ),
                  SizedBox(height: 10,),
                  Padding(
                    padding: const EdgeInsets.all( 8.0),
                    child: Container(
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.all(Radius.circular(50))
                      ),
                      height: 50,
                      width: 350,
                      child: Row(
                        children: [
                          //Icon(Icons.home,color: Colors.white70,),
                          Expanded(child: TextField(controller: controllerDomain,
                            cursorColor: Colors.white,
                            style: TextStyle(color: Colors.white),
                            decoration: InputDecoration(prefixIcon: Icon(Icons.density_large_sharp,color: Colors.orange,),
                                hintText: "Domain",
                                hintStyle: TextStyle(color: Colors.white30),
                                focusColor: Colors.amber,
                                focusedBorder:OutlineInputBorder(borderRadius: BorderRadius.circular(50),
                                    borderSide: BorderSide(color: Colors.amber,width: 2)
                                ),
                              border: OutlineInputBorder(borderRadius: BorderRadius.circular(50))
                            ),
                          ))
                        ],
                      ),
      
                    ),
      
      
                  ),
                  SizedBox(height: 10,),
                  Padding(
                    padding: const EdgeInsets.all( 8.0),
                    child: Container(
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.all(Radius.circular(50))
                      ),
                      height: 50,
                      width: 350,
                      child: Row(
                        children: [
                          //Icon(Icons.home,color: Colors.white70,),
                          Expanded(child: TextField(controller: controllerCollege,
                            style: TextStyle(color: Colors.white),
                            cursorColor: Colors.white,
                            decoration: InputDecoration(prefixIcon: Icon(Icons.school_outlined,color: Colors.orange,),
                                hintText: "Enter college Name",
                                hintStyle: TextStyle(color: Colors.white30),
                                focusColor: Colors.amber,
                                focusedBorder:OutlineInputBorder(borderRadius: BorderRadius.circular(50),
                                    borderSide: BorderSide(color: Colors.amber,width: 2)
                                ),
                                border: OutlineInputBorder(borderRadius: BorderRadius.circular(50))
                            ),
                          ))
                        ],
                      ),
      
                    ),
      
      
                  ),
                  SizedBox(height: 10,),
                  Padding(
                    padding: const EdgeInsets.all( 8.0),
                    child: Container(
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.all(Radius.circular(50))
                      ),
                      height: 50,
                      width: 350,
                      child: Row(
                        children: [
                          //Icon(Icons.home,color: Colors.white70,),
                          Expanded(child: TextField(style: TextStyle(color: Colors.white),cursorColor: Colors.white,controller: controllerGithub,
                            decoration: InputDecoration(prefixIcon: Icon(MdiIcons.github,color: Colors.orange,),
                                hintText: "Enter Github ID",
                                hintStyle: TextStyle(color: Colors.white30),
                                focusColor: Colors.amber,
                                focusedBorder:OutlineInputBorder(borderRadius: BorderRadius.circular(50),
                                    borderSide: BorderSide(color: Colors.amber,width: 2)
                                ),
                                border: OutlineInputBorder(borderRadius: BorderRadius.circular(50))
                            ),
                          ))
                        ],
                      ),
      
                    ),
      
      
                  ),
                  SizedBox(height: 10,),
                  Padding(
                    padding: const EdgeInsets.all( 8.0),
                    child: Container(
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.all(Radius.circular(50))
                      ),
                      height: 50,
                      width: 350,
                      child: Row(
                        children: [
                          //Icon(Icons.home,color: Colors.white70,),
                          Expanded(child: TextField(style: TextStyle(color: Colors.white),cursorColor: Colors.white,controller: controllerLinkedIn,
                            decoration: InputDecoration(prefixIcon: Icon(MdiIcons.linkedin,color: Colors.orange,),
                                hintText: "Enter LinkedIn ID",
                                hintStyle: TextStyle(color: Colors.white30),
                                focusColor: Colors.amber,
                                focusedBorder:OutlineInputBorder(borderRadius: BorderRadius.circular(50),
                                    borderSide: BorderSide(color: Colors.amber,width: 2)
                                ),
                                border: OutlineInputBorder(borderRadius: BorderRadius.circular(50))
                            ),
                          ))
                        ],
                      ),
      
                    ),
      
      
                  ),
                  SizedBox(height: 10,),
                  Padding(
                    padding: const EdgeInsets.all( 8.0),
                    child: Container(
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.all(Radius.circular(50))
                      ),
                      height: 50,
                      width: 350,
                      child: Row(
                        children: [
                          //Icon(Icons.home,color: Colors.white70,),
                          Expanded(child: TextField(controller: controllerEmail,
                            keyboardType: TextInputType.emailAddress,
                            style: TextStyle(color: Colors.white),
                            cursorColor: Colors.white,
                            decoration: InputDecoration(prefixIcon: Icon(Icons.email_outlined,color: Colors.orange,),
                                hintText: "Enter Email",
                                hintStyle: TextStyle(color: Colors.white30),
                                focusColor: Colors.amber,
                                focusedBorder:OutlineInputBorder(borderRadius: BorderRadius.circular(50),
                                    borderSide: BorderSide(color: Colors.amber,width: 2)
                                ),
                                border: OutlineInputBorder(borderRadius: BorderRadius.circular(50))
                            ),
                          ))
                        ],
                      ),
      
                    ),
      
      
                  ),
                  SizedBox(height: 10,),
                  Padding(
                    padding: const EdgeInsets.all( 8.0),
                    child: Container(
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.all(Radius.circular(50))
                      ),
                      height: 50,
                      width: 350,
                      child: Row(
                        children: [

                          Expanded(child: TextField(controller:controllerPhone ,
                            keyboardType: TextInputType.number,
                            style: TextStyle(color: Colors.white),
                            cursorColor: Colors.white,
                            decoration: InputDecoration(prefixIcon: Icon(Icons.phone,color: Colors.orange,),
                                hintText: "Enter college Phone Number",
                                hintStyle: TextStyle(color: Colors.white30),
                                focusColor: Colors.amber,
                                focusedBorder:OutlineInputBorder(borderRadius: BorderRadius.circular(50),
                                    borderSide: BorderSide(color: Colors.amber,width: 2)
                                ),
                                border: OutlineInputBorder(borderRadius: BorderRadius.circular(50))
                            ),
                          ))
                        ],
                      ),
      
                    ),
      
      
                  ),
                  SizedBox(height: 10,),
                  Padding(
                    padding: const EdgeInsets.all( 8.0),
                    child: Container(
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.all(Radius.circular(50))
                      ),
                      height: 50,
                      width: 350,
                      child: Row(
                        children: [
                          //Icon(Icons.home,color: Colors.white70,),
                          Expanded(child: TextField(style: TextStyle(color: Colors.white),cursorColor: Colors.white,controller: controllerAboutMe,
                            decoration: InputDecoration(prefixIcon: Icon(Icons.question_mark_outlined,color: Colors.orange,),
                                hintText: "About Me",
                                hintStyle: TextStyle(color: Colors.white30),

                                focusedBorder:OutlineInputBorder(borderRadius: BorderRadius.circular(50),
                                    borderSide: BorderSide(color: Colors.amber,width: 2)
                                ),
                                border: OutlineInputBorder(borderRadius: BorderRadius.circular(50))
                            ),
                          ))
                        ],
                      ),
      
                    ),
      
      
                  ),
      ],
      ),
    ),
    );
  }
}
