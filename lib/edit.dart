import 'package:flutter/material.dart';

class Edit extends StatefulWidget {

  @override
  State<Edit> createState() => _EditState();
}

class _EditState extends State<Edit> {
  late TextEditingController controllerName;
  String name="";
  @override
  void initState(){
    super.initState();
    controllerName = TextEditingController();
  }
  @override
  void dispose(){
    controllerName.dispose();
    super.dispose();

  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(backgroundColor: Color(0xFF2D3250),
      appBar: AppBar(title: Text("Edit profile",style: TextStyle(color: Colors.white),),backgroundColor: Colors.transparent,
              centerTitle: true,
        leading: IconButton(onPressed: (){}, icon: Icon(Icons.arrow_back,color: Colors.white,),),
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
                          Expanded(child: TextField(cursorColor: Colors.white,
                            decoration: InputDecoration(prefixIcon: Icon(Icons.abc,color: Colors.orange,),
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
                          Expanded(child: TextField(
                            decoration: InputDecoration(prefixIcon: Icon(Icons.home,color: Colors.orange,),
                                hintText: "Enter college Name",
                                hintStyle: TextStyle(color: Colors.white70),
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
                          Expanded(child: TextField(
                            decoration: InputDecoration(prefixIcon: Icon(Icons.home,color: Colors.orange,),
                                hintText: "Enter college Name",
                                hintStyle: TextStyle(color: Colors.white70),
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
                          Expanded(child: TextField(
                            decoration: InputDecoration(prefixIcon: Icon(Icons.home,color: Colors.orange,),
                                hintText: "Enter college Name",
                                hintStyle: TextStyle(color: Colors.white70),
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
                          Expanded(child: TextField(
                            decoration: InputDecoration(prefixIcon: Icon(Icons.home,color: Colors.orange,),
                                hintText: "Enter college Name",
                                hintStyle: TextStyle(color: Colors.white70),
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
                          Expanded(child: TextField(
                            decoration: InputDecoration(prefixIcon: Icon(Icons.home,color: Colors.orange,),
                                hintText: "Enter college Name",
                                hintStyle: TextStyle(color: Colors.white70),
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
                          Expanded(child: TextField(
                            decoration: InputDecoration(prefixIcon: Icon(Icons.home,color: Colors.orange,),
                                hintText: "Enter college Name",
                                hintStyle: TextStyle(color: Colors.white70),
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
                          Expanded(child: TextField(
                            decoration: InputDecoration(prefixIcon: Icon(Icons.home,color: Colors.orange,),
                                hintText: "Enter college Name",
                                hintStyle: TextStyle(color: Colors.white70),
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
      ],
      ),
    ),
    );
  }
}
