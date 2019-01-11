<!-- # Project


display: flex;
flex-direction: row;
overflow-x: scroll;
margin-top:30px;
padding: 90px;
max-width: 250%;
max-height:520px;
margin-bottom: 30px;
margin-top:20px;
margin-left: 30px;
padding-left: 90px;
margin-right: 70px;



height= "275" width="275"

margin:1%;
text-align: center;
align-content: center;
border: 1px solid black;
height:auto;
width: 30%;
margin:40px;


text-align: center;
align-content: center;
height: auto;
width: 50%;
padding:20px;
margin-bottom: 30px;
padding-right: 30px;
overflow-x:visible;




<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Add to
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="/get_postItem/<%=users.id%>">Post item</a>
    <a class="dropdown-item" href="#">Add to cart</a>
    <a class="dropdown-item" href="/wishlist/<%=users.id%>">Add to wishlist</a>
  </div>
</div>




<div class="container">
    <h3><%=items.item_name %></h3>
      <div>
          <img src="<%=items.img_url%>" alt='image of products' height= "275" width="275">
      </div>
       <div>
          <p>Description: <%= items.description%></p>
       </div>
</div>




<div class="container">
    <% for(let i = 0; i<items.length; i++){ %>
        <div class="card">
        <h3><%= items[i].name %></h3>
        <div><img src="<%=items[i].img_url%>" alt='image of products' height= "275" width="275"></div>
         <p>Description: <%= items.description%></p>
        <div><a class="btn btn-secondary btn-sm btn-block" href="/product_details/<%=items[i].id%>">Product Details</a></div>
        <button type="button" class="btn-sm">Add to cart</button>
        <button type="button" class="btn-sm">Delete</button>
        </div>
    <% } %>
</div>

<div>
   <button type="button" class="btn-sm">Add to cart</button>
</div>
<div class="deletion">
  <button type="button" name="button">Delete</button>
</div>










<main>
    <a href="/logout">Logout</a>
    <section class="login">
        <h1>Login</h1>

     <form class="needs-validation" novalidate>
      <div class="form-row">
        <div class="col-md-4 mb-3">
          <label for="validationCustom01">First name</label>
          <input type="text" class="form-control" id="validationCustom01" placeholder="First name" value="Mark" required>
          <div class="valid-feedback">
            Looks good!
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <label for="validationCustom02">Last name</label>
          <input type="text" class="form-control" id="validationCustom02" placeholder="Last name" value="Otto" required>
          <div class="valid-feedback">
            Looks good!
          </div>
        </div>
      </div>
      </form>
    </section>










    <section class="register">
        <h1>Register</h1>

<form class="needs-validation" novalidate>
<div class="form-row">
<div class="col-md-4 mb-3">
  <label for="validationCustom01">First name</label>
  <input type="text" class="form-control" id="validationCustom01" placeholder="First name" value="Mark" required>
  <div class="valid-feedback">
    Looks good!
  </div>
</div>
<div class="col-md-4 mb-3">
  <label for="validationCustomUsername">Username</label>
  <div class="input-group">
    <div class="input-group-prepend">
      <span class="input-group-text" id="inputGroupPrepend">@</span>
    </div>
    <input type="text" class="form-control" id="validationCustomUsername" placeholder="Username" aria-describedby="inputGroupPrepend" required>
    <div class="invalid-feedback">
      Please choose a username.
    </div>
  </div>
</div>
</div>
<div class="form-row">
<div class="col-md-4 mb-4">
  <label for="validationCustom03">City</label>
  <input type="text" class="form-control" id="validationCustom03" placeholder="City" required>
  <div class="invalid-feedback">
    Please provide a valid city.
  </div>
</div>
<div class="col-md-4 mb-3">
  <label for="validationCustom04">State</label>
  <input type="text" class="form-control" id="validationCustom04" placeholder="State" required>
  <div class="invalid-feedback">
    Please provide a valid state.
  </div>
</div>
</div>
<div class="form-row">
<div class="col-md-4 mb-4">
  <label for="validationCustom03">City</label>
  <input type="text" class="form-control" id="validationCustom03" placeholder="City" required>
  <div class="invalid-feedback">
    Please provide a valid city.
  </div>
</div>
<div class="col-md-4 mb-3">
  <label for="validationCustom04">State</label>
  <input type="text" class="form-control" id="validationCustom04" placeholder="State" required>
  <div class="invalid-feedback">
    Please provide a valid state.
  </div>
</div>
</div>

</form>






        <!-- <form action="/register" method="POST">
            <input type="text" name="name" placeholder="Name">
            <input type="text" name="email" placeholder="email">
            <input type="password" name="password" placeholder="Password">
            <input type="password" name="confirm_password" placeholder="Confirm Password">
            <input type="string" name="venmo" placeholder="Venmo Account">
            <input type="string" name="address" placeholder="address">
            <button type="submit">Submit</button>
        </form> -->
    <!-- </section>
</main>
</body>
</html> -->





<!-- <form action="/register" method="POST">
    <input type="text" name="name" placeholder="Name">
    <input type="text" name="email" placeholder="email">
    <input type="password" name="password" placeholder="Password">
    <input type="password" name="confirm_password" placeholder="Confirm Password">
    <input type="string" name="venmo" placeholder="Venmo Account">
    <input type="string" name="address" placeholder="address">
    <button type="submit">Submit</button>
</form> -->











<!-- <body>
    <main>
        <a class="log" href="/logout">Logout</a>
        <section class="login">
            <h2>Login</h2>
            <form action="/login" method="POST">
              <div class="form-group row log">
                <label for="inputEmail3" class="col-sm-1 col-form-label"> Email</label>
                <div class="col-sm-4">
                  <input type="email" class="form-control"  placeholder="Email">
                </div>
              </div>
              <div class="form-group row log">
                <label for="inputPassword3" class="col-sm-1 col-form-label">Password</label>
                <div class="col-sm-4">
                  <input type="password" class="form-control"  placeholder="Password">
                </div>
              </div>
              <button type="submit" class="btn btn-primary">Log in</button>
            </form>
        </section>


        <section class="register">
            <h2>Register</h2>

      <form action="/register" method="POST">
      <div class="form-row">
        <div class="form-group col-md-3 reg">
          <label for="inputEmail4">Email</label>
          <input type="text" class="form-control" id="inputEmail4" placeholder="Name">
        </div>
        <div class="form-group col-md-3 reg">
          <label for="inputPassword4">Password</label>
          <input type="email" class="form-control" id="inputPassword4" placeholder="Email">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-3 reg">
            <label for="inputAddress">Address</label>
            <input type="password" class="form-control" id="inputAddress" placeholder="Password">
      </div>
      <div class="form-group col-md-3 reg">
          <label for="inputAddress">Address</label>
          <input type="password" class="form-control" id="inputAddress" placeholder="Confirm Password">
      </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-3 reg">
          <label for="inputCity">Venmo Account</label>
          <input type="text" class="form-control" id="inputCity" placeholder="Venmo Account">
        </div>
        <div class="form-group col-md-3">
          <label for="inputCity">Address</label>
          <input type="text" class="form-control" id="inputCity" placeholder="Address">
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Sign in</button>
 </form>









        </section>
    </main>
</body> -->









<!-- <style media="screen">
  .login {
     padding:40px;
      margin-bottom:0px;
      margin:1px;
  }
    .register{
      padding:40px;
      margin-top: 15px;
    }
    .log{
      color: black;
      text-decoration: none;
      margin-top: 20px;

    }

</style> -->




<!-- <div><a class="btn btn-secondary btn-sm btn-block" href="/delete/item/from/wishlist/<%= items[i].id %>">Delete from Wishlist</a></div> -->








<!-- <main>
<a href="/logout">Logout</a>
<section class="login">
   <h1>Login</h1>
   <form action="/login" method="POST">
       <input type="text" name="email" placeholder="Email">
       <input type="password" name="password" placeholder="Password">
       <button type="submit">Submit</button>
   </form>
</section>

<section class="register">
   <h1>Register</h1>
   <form action="/register" method="POST">
       <input type="text" name="name" placeholder="Name">
       <input type="text" name="email" placeholder="Email">
       <input type="password" name="password" placeholder="Password">
       <input type="password" name="password-confirm" placeholder="Confirm Password">
       <button type="submit">Submit</button>
   </form>
</section>
</main> --> -->

footer{
  margin-top: 21px;
  text-align: center;
  background-color: silver;
  border-top: 1px solid black;
  line-height: 30px;
  margin-bottom: :10px;
}
