<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My Phonebook</title>
    <link rel="stylesheet" href="{{ asset('./css/app.css')}}">
  </head>
  <body>
    <div class="" id="app">
      <!--Header component from the vue-->
      <Myheader></Myheader>
      <div class="container">
        <!--Router View-->
        <router-view></router-view>
        
      </div>
      <!--Footer component from the vue-->
      <Myfooter></Myfooter>
    </div>
  </body>
  <script src="{{ asset('./js/app.js') }}" charset="utf-8"></script>
</html>
