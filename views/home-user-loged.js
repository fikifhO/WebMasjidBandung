<!DOCTYPE html>
<html>
<head>
	<link rel="shortcut icon" type="image/png" href="/../images/favicon.png"/>
	<link rel="shortcut icon" type="image/png" href="/../images/favicon.png"/>
	<% include partials/head.ejs %>
	<title><%= title %></title>
</head>
<body>
		<nav class="navbar navbar-inverse">
						<ul class="nav navbar-nav">
							<li><a><img src="/../images/favicon1.png" style="height:20px;"></a></li>
							<li><a href="#">Home</a></li>
							<li><a href="profil">Profil Mesjid/Mushola</a></li>
							<li><a href="kegiatan">Kegiatan</a></li>
						</ul>

						<!--<ul class="nav navbar-nav navbar-right">
							<li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
						</ul>-->
					</div>
				</div>
			</nav>
	<div class="jumbotron">
  <div class="container text-center">
  </div>
</div>

<div class="container">
	<div class="row">
		<div class="col-sm-8">
			<div id="myCarousel" class="carousel slide" data-ride="carousel">
				<!--Indicators-->
				<ol>
					<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
					<li data-target="#myCarousel" data-slide-to="1"></li>
				</ol>
				<!--Wrapper For Slide-->
				<div class="carousel-inner" role="listbox">
					<div class="item active">
						<img src="/../images/ilmumuwall.png" style="background-size: cover;">
					</div>
					<div class="item">
						<img src="/../images/larikecil.jpg" style="background-size: cover;">
					</div>
					<div class="item">
						<img src="/../images/mukmin.png" style="background-size: cover;">
					</div>
					<div class="item">
						<img src="/../images/Berubah.jpg" style="background-size: cover;">
					</div>
					<div class="item">
						<img src="/../images/ulama.jpg" style="background-size: cover;">
					</div>
				</div>
				<!--Left and Right Control-->
				<a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
					<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
					<span class="sr-only">Previous</span>
				</a>
				<a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
        			<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        			<span class="sr-only">Next</span>
      			</a>
      		<div class="search-form">
			<form>
			<input class="search" type="search" placeholder="">
			<input class="button" type="submit" value="Cari">
	   		</form>
			</div>
		</div>
	</div>
		<div class="row-login" id="pwd-container">
			<div class="col-md-4">
			</div>
			<div class="col-md-4">
			  
			 </div>

		  </div>

	 	<!--<div class="col-sm-4" style="float: right;">
   		 	<div class="well">
      	 	<p>Some text..</p>
    	</div>-->
	</div>
<div class="sidebar-update">

</div>
<div class="col-sm-4">

</div>
<div class="col-sm-3">
	<img id="myImg" src="/../images/map1.png" alt="Trolltunga, Norway" style="width:240px ;height: 220px; margin-top: 11px; margin-left: 8px; margin-top: 15px">

<!-- The Modal -->
<div id="myModal" class="modal">
	<div class="mapouter">
	<div class="gmap_canvas">
		<iframe width="782" height="481" id="gmap_canvas" src="https://maps.google.com/maps?q=masjid di kecamatan cibiru&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
		</iframe>
	<a href="https://www.webdesign-muenchen-pb.de">zur webseite</a>
	</div>
	<style>
	.mapouter{overflow:hidden;height:481px;width:782px;margin-left: 260px;}
	.gmap_canvas {background:none!important;height:481px;width:782px;}
	</style>
</div>
	<span class="close">&times;</span>
  <div id="caption"></div>
</div>
</div>
</div>
<div class="footer">
</div>
	<% include partials/scripts.ejs %>
</body>
</html>
