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

<!-- footer{
  margin-top: 21px;
  text-align: center;
  background-color: silver;
  border-top: 1px solid black;
  line-height: 30px;
  margin-bottom: :10px;
} -->




<!-- /* .items{
 padding-left:30px;
 padding-bottom:80px;
 margin-top:40px;
}
.jackie {
 margin-top:50px;
} */
.notes {
 padding-left: 100px;
}

.sub {
 margin-left: 170px;
 margin-top:30px;
}

#eachComment {
 margin-left: 170px;
 padding-left: 100px;
}
.note {
 padding-left: 100px;
 margin-left:2
} -->


 <!-- css file. product details


<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Product Details</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">

        <style>

        .star-rating {
        direction: rtl;
        display: inline-block;
        padding: 20px
      }

        .star-rating input[type=radio] {
            display: none
        }

    .star-rating label {
        color: #bbb;
        font-size: 18px;
        padding: 0;
        cursor: pointer;
        -webkit-transition: all .3s ease-in-out;
        transition: all .3s ease-in-out
    }

    .star-rating label:hover,
    .star-rating label:hover ~ label,
    .star-rating input[type=radio]:checked ~ label {
        color: #f2b600
    }
    #eachComment{
         padding:4%;
    }


    .banner{
      text-align: center;
      border-bottom: 1px solid black;
      position: relative;
      height: 70px;
      background-color: #EA601D;
    }

    .brand {
      position: relative;
      top: 10px;
      color: white;
      font-size: 2em;
    }

     .items1 {
     padding-left:20px;
     text-align:center;
     /* padding-bottom:80px; */
     /* margin-top:40px; */
   }

   .backs{
     text-align:left;
   }

   .sub1{
      /* padding-left: 40px; */
     /* margin-left: 90px; */
       /* margin-bottom:1px; */
      /* margin-right:70px; */
      /* padding:10px; */
      margin-left:30px;
      /* float:left;
      clear:both; */

     /* display:flex; */
   }

   .sub2{
     display: flex;
     margin:15px;
   }

   .sub3 , .sub4{
     /* text-align: center; */
     /* padding-left: 430px; */
     margin-left:50px;
     /* float:right; */
   }

   .sub3{
     float:right;
   }

   .items {
     margin-top:10px;
   }


   /* .items1, .backs {
     float:right;
   } */



   .info {
     text-align: center;
     color: white;
     background-color: silver;
     border-top: 1px solid black;
     line-height: 30px;
     /* margin:0px; */
     padding: 5px 0;
   }

   .enter {
     margin-bottom:20px;
   }


   /* .commentary {
     margin-bottom:15px;
   } */

    /* .notes {
      margin-top:10px;
    } */

   /* .jackie {
     margin-top:50px;
   } */ */
    /* .notes {
     padding-left: 100px;
   }
   .items .backs {

   }

   .sub {
     margin-left: 170px;
     margin-top:30px;
   }

   #eachComment {
     margin-left: 170px;
     padding-left: 100px;
   }
   .note {
     padding-left: 100px;
     margin-left:2
   } */

   /* .users {
     margin-left: 100px;
   } */


   /* .items .backs {
     float:right;
   } */

    /* .a {
      text-decoration: none;
      color: black;
} */

.jackie{
  margin-top:1px;
}

.image1 {
  margin-top:0px;

}

a{
  color:black;
  float:left;
}


    </style>


    </head>
  <body>
      <div class="banner">
          <i class="fas fa-shopping-cart fa-md"></i>
          <span class="brand">Shopright</span>
      </div>

 <section class="items1">
    <span><a  class ="backs" href="/protected">back</a></span>

    <div class="items">
        <h5 class="jackie"><%=items.item_name%></h5><br>
        <div class="image1"><img src="<%=items.img_url%>" alt='image of products' height= "275" width="275"></div>
        <div><p>Description:<%=items.description%></p></div>
    </div>
 <div class="comments">

   <h5 class="display-6">NOTES:</h5>

   <% for(let i=0; i<comments.length; i++){ %>
     <div id="eachComment">
       <div class= "note"><strong><%= comments[i].users_name%></strong></div>
       <%   if (comments[i].rating === 5 ) {%>
         <i class="active fa fa-star" aria-hidden="true"></i>
         <i class="active fa fa-star" aria-hidden="true"></i>
         <i class="active fa fa-star" aria-hidden="true"></i>
         <i class="active fa fa-star" aria-hidden="true"></i>
         <i class="active fa fa-star" aria-hidden="true"></i>
         <% } else if (comments[i].rating === 4) {%>
           <i class="active fa fa-star" aria-hidden="true"></i>
           <i class="active fa fa-star" aria-hidden="true"></i>
           <i class="active fa fa-star" aria-hidden="true"></i>
           <i class="active fa fa-star" aria-hidden="true"></i>
           <% } else if (comments[i].rating === 3) {%>
             <i class="active fa fa-star" aria-hidden="true"></i>
             <i class="active fa fa-star" aria-hidden="true"></i>
             <i class="active fa fa-star" aria-hidden="true"></i>
             <% } else if (comments[i].rating === 2) {%>
               <i class="active fa fa-star" aria-hidden="true"></i>
               <i class="active fa fa-star" aria-hidden="true"></i>
               <% } else if (comments[i].rating === 1) {%>
                 <i class="active fa fa-star" aria-hidden="true"></i>
                 <% } %>

                 <div class= "notes"><%= comments[i].comment_content%></div>
                 <div><small><%= comments[i].created_at%></small></div>
               </div>
               <% } %>
 </div>

    <form  class ="commentary" action="/product_comments/<%=items.id%>" method="post">

    <!-- <div class= "users"><%=users.name%></div> -->

    <div class="star-rating">
    <input id="star-5" type="radio" name="rating" value="5">
    <label for="star-5" title="5 stars">
            <i class="active fa fa-star" aria-hidden="true"></i>
    </label>
    <input id="star-4" type="radio" name="rating" value="4">
    <label for="star-4" title="4 stars">
            <i class="active fa fa-star" aria-hidden="true"></i>
    </label>
    <input id="star-3" type="radio" name="rating" value="3">
    <label for="star-3" title="3 stars">
            <i class="active fa fa-star" aria-hidden="true"></i>
    </label>
    <input id="star-2" type="radio" name="rating" value="2">
    <label for="star-2" title="2 stars">
            <i class="active fa fa-star" aria-hidden="true"></i>
    </label>
    <input id="star-1" type="radio" name="rating" value="1">
    <label for="star-1" title="1 star">
            <i class="active fa fa-star" aria-hidden="true"></i>
    </label>
    </div>

    <input  class="enter" type="text" name="comments" placeholder="Enter your comment" style="width: 600px; height: 100px;"><br>
    <input type="submit" class="btn btn-primary btn-sm sub1">
    </form>

      <div class="sub2">
        <div class ="sub3">
          <form action='/add_to_shopping_cart/<%=items.id%>' method="POST">
            <button id ="button1" class="btn-sm btn-primary" ><i class="fas fa-cart-plus"></i> Add to Cart</button>
          </form>
        </div>

        <div class ="sub4">
          <form action='/add_to_wish_list/<%=items.id%>' method="POST">
            <button id=button2  class="btn-sm btn-primary" ><i class="fas fa-star"></i></i> Add to Wish Lists</button>
          </form>
        </div>
      </div>

    <!-- <form class="" action="/get_wishlist/<%=users.id%>" method="post">
          <button type="submit">Add to Wish Lists</button>
    </form> -->




  </section>
  <footer  class="info">
      <span>&copy; Copyright 2019 Ed & Jun</span>
  </footer>


  </body>
</html> -->
