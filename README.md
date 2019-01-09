# Project


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
