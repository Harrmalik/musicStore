<!doctype html>

<html lang="en">
<head>
 <meta charset="utf-8">

 <title>Simple Music Store</title>

 <!--                            SCRIPT FILES                                                         -->
 <script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/1.12.3/semantic.min.js"></script>
 <script src="js/simpleCart.min.js"></script>
 <script src="js/cart.js"></script>

 <!--                            CSS FILES                                                         -->
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.0/semantic.min.css">
 <link rel="stylesheet" href="css/styles.css">

 <!--[if lt IE 9]>
 <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
 <![endif]-->
</head>

<body>
 <header class="sixteen wide column">
    <nav class="ui four item menu">
      <h2 class="ui header item">Simple Music Store</h2>
      <a class="item" href="index.php">Home</a>
      <div class="ui dropdown item">
        <span class="simpleCart_total"></span> Checkout <i class="dropdown icon"></i>
        <div class="menu">
          <div class="simpleCart_items item"></div>
          <a class="item blue" href="checkout.php">Checkout</a>
        </div>
      </div>
   </nav>
   <br>
 </header>
