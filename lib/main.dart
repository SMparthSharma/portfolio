import 'package:flutter/material.dart';
import 'package:get/get_navigation/src/root/get_material_app.dart';
import 'package:portfolio/edit.dart';
import 'home.dart';

void main() {
  runApp( GetMaterialApp(
    routes: {
      "/": (context)=>Home(),
     // "/home":(context)=>Home()
    }
  ));
}

