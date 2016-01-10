<?php include "partials/header.php" ?>

  <section class="ui segment container">
    <h2 class="ui header">Your Cart</h2>
    <div class="simpleCart_items"></div>

    <div class="ui divider"></div>
    <!-- <table class="ui striped table right aligned">
      <thead>
        <tr>
          <th  class="left aligned">Item</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="left aligned"><img class="ui tiny image floated left" src="imgs/run.jpg">About You</td>
          <td>1</td>
          <td>$1.08</td>
          <td><span class="ui button red tiny">Delete</span></td>
        </tr>
        <tr>
          <td class="left aligned">Light it up</td>
          <td>1</td>
          <td>$1.08</td>
          <td><span class="ui button red tiny">Delete</span></td>
        </tr>
        <tr>
          <td class="left aligned">Run</td>
          <td>1</td>
          <td>$1.08</td>
          <td><span class="ui button red tiny">Delete</span></td>
        </tr>
      </tbody>
    </table> -->

    <!-- show the cart -->

    <div class="ui basic segment">
      <h3 class="ui header">Total</h3>
      <div class="ui middle aligned list">
        <div class="item">
          Sub Total: <span class="simpleCart_total"></span>
        </div>
        <div class="item">
          Tax: <span class="simpleCart_tax"></span>
        </div>
        <div class="item">
          Total: <span class="simpleCart_grandTotal"></span>
        </div>
      </div>
    </div>

    <div class="ui button blue simpleCart_checkout">Checkout</div>
    <div class="ui button basic simpleCart_empty">Reset</div>
  </section>

<?php include "partials/footer.php" ?>
