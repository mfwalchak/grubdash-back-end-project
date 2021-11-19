<div markdown="fileTab.file.contents || fileTab.file.markdown" language="fileTab.file.language" class="markdown collapsed"><h1>Project: GrubDash</h1><blockquote>
<p>You've been hired as a back-end developer for a new startup called <em>GrubDash!</em><br>
As another developer works on the design and front-end experience, you have been tasked with setting up an API and building out specific routes so that<br>
the front-end developers demo out some initial design ideas to the big bosses.</p>
</blockquote>
<p>This project will test your ability to build API's with complex validation.<br>
To succeed at this project, you'll need to demonstrate that you can do the following:</p>
<ul>
<li>Run tests from the command line.</li>
<li>Use common middleware packages.</li>
<li>Receive requests through routes.</li>
<li>Access relevant information through route parameters.</li>
<li>Build an API following RESTful design principles.</li>
<li>Write custom middleware functions.</li>
</ul>
<p>You will not need to make any edits to HTML or CSS for this project.</p>
<h2>GrubDash Front End</h2><p>While it is not required, if you would like to see this project connected to a Front End Application, visit the following repository:</p>
<ul>
<li><a href="https://github.com/Thinkful-Ed/starter-grub-dash-front-end" target="_blank" rel="noopener">Starter Code: GrubDash Front End</a></li>
</ul>
<p>Instructions on how to get the Front End application up and running are included in the repository.</p>

<p><zoomable-image zoom-disabled="expandable &amp;&amp; !expanded"><!----> <div class="zoomable-image-scrollbox" ng-transclude="" ng-dblclick="$ctrl.autoZoom($event)" tooltip="" tooltip-position="top" scroll-on-drag="$ctrl.enabled &amp;&amp; $ctrl.zoomed" tabindex="0"><img src="https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/1fc7f916e2146e659f7934a73b103e25-home.png" alt="Home Screen of GrubDash Front End"></div></zoomable-image></p>
<p>Again, it is not necessary to connect the Front End to successfully complete this project.</p>
<h2>Project setup</h2><p>Follow the instructions below to get this project up and running on your own machine:</p>
<ul>
<li>Download the Qualified assignment files to your computer.</li>
<li>Run <code>npm install</code> to install the project and run <code>git init</code> to initialize a git repository.</li>
</ul>
<h2>Running tests</h2><p>To run the tests, you can run the following command:</p>
<div class="language-tabset"><div class="language-tab language-bash"><pre><code class="lang-bash">npm test
</code></pre>
</div></div><h2>Instructions</h2><p>Your goal for this checkpoint is to get the tests to pass.<br>
To do so, you will be creating a server to access two resources, <code>dishes</code> and <code>orders</code> in addition to error handling.<br>
Your server should follow the structure you've learned in the course. Complete the following tasks to pass the tests and this assignment.</p>
<h3>Existing files</h3><table>
<thead>
<tr>
<th>file path</th>
<th>description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>src/app.js</code></td>
<td>Contains the Express application. You will not need to make changes to this file.</td>
</tr>
<tr>
<td><code>src/data/dishes-data.js</code></td>
<td>Contains the dishes data. This is the shape of the dish data that the API will send and receive. You can add or remove dishes if you like.</td>
</tr>
<tr>
<td><code>src/data/orders-data.js</code></td>
<td>Contains the orders data. This is the shape of the order data that the API will send and receive. You can add or remove orders if you like.</td>
</tr>
<tr>
<td><code>src/dishes/dishes.controller.js</code></td>
<td>Add middleware and handlers for dishes to this file, then export the functions for use by the router.</td>
</tr>
<tr>
<td><code>src/dishes/dishes.router.js</code></td>
<td>Add routes and attach handlers to the router exported by this file.</td>
</tr>
<tr>
<td><code>src/errors/errorHandler.js</code></td>
<td>Exports the error handler function for use by the Express application.</td>
</tr>
<tr>
<td><code>src/errors/methodNotAllowed.js</code></td>
<td>Exports the 405 Method Not Allowed handler function for use by the Express application.</td>
</tr>
<tr>
<td><code>src/errors/notFound.js</code></td>
<td>Exports the 404 Not Found handler function for use by the Express application.</td>
</tr>
<tr>
<td><code>src/orders/orders.controller.js</code></td>
<td>Add middleware and handlers for orders to this file, then export the functions for use by the router.</td>
</tr>
<tr>
<td><code>src/orders/orders.router.js</code></td>
<td>Add routes and attach handlers to the router exported by this file.</td>
</tr>
<tr>
<td><code>src/server.js</code></td>
<td>Contains the server code. You will not need to make changes to this file.</td>
</tr>
<tr>
<td><code>src/utils/nextId.js</code></td>
<td>Exports the <code>nextId</code> function. Use this function anytime you need to assign a new <code>id</code>. You will not need to make changes to this file.</td>
</tr>
<tr>
<td><code>test/dishes-router.test.js</code></td>
<td>Tests for the dishes router. You will not need to make changes to this file.</td>
</tr>
<tr>
<td><code>test/order-router.test.js</code></td>
<td>Tests for the orders router. You will not need to make changes to this file.</td>
</tr>
<tr>
<td><code>test/make-test-app.js</code></td>
<td>Function used by the tests. You will not need to make changes to this file.</td>
</tr>
</tbody>
</table>
<h3>Tasks</h3><ol>
<li>In the <code>src/dishes/dishes.controller.js</code> file, add handlers and middleware functions to create, read, update, and list dishes. Note that dishes cannot be deleted.</li>
<li>In the <code>src/dishes/dishes.router.js</code> file, add two routes: <code>/dishes</code>, and <code>/dishes/:dishId</code> and attach the handlers (create, read, update, and list) exported from <code>src/dishes/dishes.controller.js</code>.</li>
<li>In the <code>src/orders/orders.controller.js</code> file, add handlers and middleware functions to create, read, update, delete, and list orders.</li>
<li>In the <code>src/orders/orders.router.js</code> file, add two routes: <code>/orders</code>, and <code>/orders/:orderId</code> and attach the handlers (create, read, update, delete, and list) exported from <code>src/orders/orders.controller.js</code>.</li>
<li>Anytime you need to assign a new <code>id</code> to an order or dish, use the <code>nextId</code> function exported from <code>src/utils/nextId.js</code></li>
</ol>
<h3>Routes</h3><p>To complete this project, you will create the following routes:</p>
<h4>GET /dishes</h4><p>This route will respond with a list of all existing dish data.</p>
<p><strong>Example Request</strong></p>
<pre><code>GET http://localhost:5000/dishes
</code></pre><p><strong>Example Response</strong></p>
<div class="language-tabset"><div class="language-tab language-json"><pre><code class="lang-json">{
  <span class="hljs-string">"data"</span>: [
    {
      <span class="hljs-string">"id"</span>: <span class="hljs-string">"d351db2b49b69679504652ea1cf38241"</span>,
      <span class="hljs-string">"name"</span>: <span class="hljs-string">"Dolcelatte and chickpea spaghetti"</span>,
      <span class="hljs-string">"description"</span>: <span class="hljs-string">"Spaghetti topped with a blend of dolcelatte and fresh chickpeas"</span>,
      <span class="hljs-string">"price"</span>: <span class="hljs-number">19</span>,
      <span class="hljs-string">"image_url"</span>: <span class="hljs-string">"https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?h=530&amp;w=350"</span>
    }
  ]
}
</code></pre>
</div></div><h4>POST /dishes</h4><p>This route will save the dish and respond with the newly created dish.</p>
<h5>Validation:</h5><p>If any of the following validations fail, respond with a status code of 400 and an error message.</p>
<table>
<thead>
<tr>
<th>Validation</th>
<th>Error message</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>name</code> property is missing</td>
<td>Dish must include a name</td>
</tr>
<tr>
<td><code>name</code> property is empty <code>""</code></td>
<td>Dish must include a name</td>
</tr>
<tr>
<td><code>description</code> property is missing</td>
<td>Dish must include a description</td>
</tr>
<tr>
<td><code>description</code> property is empty <code>""</code></td>
<td>Dish must include a description</td>
</tr>
<tr>
<td><code>price</code> property is missing</td>
<td>Dish must include a price</td>
</tr>
<tr>
<td><code>price</code> property 0 or less</td>
<td>Dish must have a price that is an integer greater than 0</td>
</tr>
<tr>
<td><code>price</code> property is not an integer</td>
<td>Dish must have a price that is an integer greater than 0</td>
</tr>
<tr>
<td><code>image_url</code> property is missing</td>
<td>Dish must include a image_url</td>
</tr>
<tr>
<td><code>image_url</code> property is empty <code>""</code></td>
<td>Dish must include a image_url</td>
</tr>
</tbody>
</table>
<p><strong>Example Request</strong></p>
<pre><code>POST http://localhost:5000/dishes
</code></pre><p>Body:</p>
<div class="language-tabset"><div class="language-tab language-json"><pre><code class="lang-json">{
  <span class="hljs-string">"data"</span>: {
    <span class="hljs-string">"name"</span>: <span class="hljs-string">"Dolcelatte and chickpea spaghetti"</span>,
    <span class="hljs-string">"description"</span>: <span class="hljs-string">"Spaghetti topped with a blend of dolcelatte and fresh chickpeas"</span>,
    <span class="hljs-string">"price"</span>: <span class="hljs-number">19</span>,
    <span class="hljs-string">"image_url"</span>: <span class="hljs-string">"https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?h=530&amp;w=350"</span>
  }
}
</code></pre>
</div></div><p><strong>Example Response</strong></p>
<p>Status 201</p>
<div class="language-tabset"><div class="language-tab language-json"><pre><code class="lang-json">{
  <span class="hljs-string">"data"</span>: {
    <span class="hljs-string">"id"</span>: <span class="hljs-string">"d351db2b49b69679504652ea1cf38241"</span>,
    <span class="hljs-string">"name"</span>: <span class="hljs-string">"Dolcelatte and chickpea spaghetti"</span>,
    <span class="hljs-string">"description"</span>: <span class="hljs-string">"Spaghetti topped with a blend of dolcelatte and fresh chickpeas"</span>,
    <span class="hljs-string">"price"</span>: <span class="hljs-number">19</span>,
    <span class="hljs-string">"image_url"</span>: <span class="hljs-string">"https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?h=530&amp;w=350"</span>
  }
}
</code></pre>
</div></div><h4>GET /dishes/:dishId</h4><p>This route will respond with the dish where <code>id === :dishId</code>, or return 404 if no matching dish is found.</p>
<p><strong>Example Request</strong></p>
<pre><code>GET http://localhost:5000/dishes/3c637d011d844ebab1205fef8a7e36ea
</code></pre><p><strong>Example Response</strong></p>
<p>Status 200</p>
<div class="language-tabset"><div class="language-tab language-json"><pre><code class="lang-json">{
  <span class="hljs-string">"data"</span>: {
    <span class="hljs-string">"id"</span>: <span class="hljs-string">"d351db2b49b69679504652ea1cf38241"</span>,
    <span class="hljs-string">"name"</span>: <span class="hljs-string">"Dolcelatte and chickpea spaghetti"</span>,
    <span class="hljs-string">"description"</span>: <span class="hljs-string">"Spaghetti topped with a blend of dolcelatte and fresh chickpeas"</span>,
    <span class="hljs-string">"price"</span>: <span class="hljs-number">19</span>,
    <span class="hljs-string">"image_url"</span>: <span class="hljs-string">"https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?h=530&amp;w=350"</span>
  }
}
</code></pre>
</div></div><h4>PUT /dishes/:dishId</h4><p>This route will update the dish where <code>id === :dishId</code>, or return 404 if no matching dish is found.</p>
<h5>Validation:</h5><p>The update validation must include all of the same validation as the POST /dishes route, plus the following:</p>
<table>
<thead>
<tr>
<th>Validation</th>
<th>Error message</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>:dishId</code> does not exist</td>
<td><code>Dish does not exist: $dishId}.</code></td>
</tr>
<tr>
<td><code>id</code> in the body does not match <code>:dishId</code> in the route</td>
<td><code>Dish id does not match route id. Dish: ${id}, Route: ${dishId}</code></td>
</tr>
</tbody>
</table>
<blockquote>
<p><strong>Note</strong>: The <code>id</code> property is not <em>required</em> in the body of the request, but if it is present it must match <code>:dishId</code> from the route.</p>
</blockquote>
<p><strong>Example Request</strong></p>
<pre><code>PUT http://localhost:5000/dishes/3c637d011d844ebab1205fef8a7e36ea
</code></pre><p>Body:</p>
<div class="language-tabset"><div class="language-tab language-json"><pre><code class="lang-json">{
  <span class="hljs-string">"data"</span>: {
    <span class="hljs-string">"id"</span>: <span class="hljs-string">"3c637d011d844ebab1205fef8a7e36ea"</span>,
    <span class="hljs-string">"name"</span>: <span class="hljs-string">"Century Eggs"</span>,
    <span class="hljs-string">"description"</span>: <span class="hljs-string">"Whole eggs preserved in clay and ash for a few months"</span>,
    <span class="hljs-string">"image_url"</span>: <span class="hljs-string">"some-valid-url"</span>,
    <span class="hljs-string">"price"</span>: <span class="hljs-string">"17"</span>
  }
}
</code></pre>
</div></div><p><strong>Example Response</strong></p>
<div class="language-tabset"><div class="language-tab language-json"><pre><code class="lang-json">{
  <span class="hljs-string">"data"</span>: {
    <span class="hljs-string">"id"</span>: <span class="hljs-string">"3c637d011d844ebab1205fef8a7e36ea"</span>,
    <span class="hljs-string">"name"</span>: <span class="hljs-string">"Century Eggs"</span>,
    <span class="hljs-string">"description"</span>: <span class="hljs-string">"Whole eggs preserved in clay and ash for a few months"</span>,
    <span class="hljs-string">"image_url"</span>: <span class="hljs-string">"some-valid-url"</span>,
    <span class="hljs-string">"price"</span>: <span class="hljs-string">"17"</span>
  }
}
</code></pre>
</div></div><h4>GET /orders</h4><p>This route will respond with a list of all existing order data.</p>
<p><strong>Example Request</strong></p>
<pre><code>GET http://localhost:5000/orders
</code></pre><p><strong>Example Response</strong><br>
Status 200</p>
<div class="language-tabset"><div class="language-tab language-json"><pre><code class="lang-json">{
  <span class="hljs-string">"data"</span>: [
    {
      <span class="hljs-string">"id"</span>: <span class="hljs-string">"5a887d326e83d3c5bdcbee398ea32aff"</span>,
      <span class="hljs-string">"deliverTo"</span>: <span class="hljs-string">"308 Negra Arroyo Lane, Albuquerque, NM"</span>,
      <span class="hljs-string">"mobileNumber"</span>: <span class="hljs-string">"(505) 143-3369"</span>,
      <span class="hljs-string">"status"</span>: <span class="hljs-string">"delivered"</span>,
      <span class="hljs-string">"dishes"</span>: [
        {
          <span class="hljs-string">"id"</span>: <span class="hljs-string">"d351db2b49b69679504652ea1cf38241"</span>,
          <span class="hljs-string">"name"</span>: <span class="hljs-string">"Dolcelatte and chickpea spaghetti"</span>,
          <span class="hljs-string">"description"</span>: <span class="hljs-string">"Spaghetti topped with a blend of dolcelatte and fresh chickpeas"</span>,
          <span class="hljs-string">"image_url"</span>: <span class="hljs-string">"https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?h=530&amp;w=350"</span>,
          <span class="hljs-string">"price"</span>: <span class="hljs-number">19</span>,
          <span class="hljs-string">"quantity"</span>: <span class="hljs-number">2</span>
        }
      ]
    }
  ]
}
</code></pre>
</div></div><h4>POST /orders</h4><p>This route will save the order and respond with the newly created order.</p>
<h5>Validation:</h5><p>If any of the following validations fail, respond with a status code of 400 and an error message.</p>
<table>
<thead>
<tr>
<th>Validation</th>
<th>Error message</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>deliverTo</code> property is missing</td>
<td>Order must include a deliverTo</td>
</tr>
<tr>
<td><code>deliverTo</code> property is empty <code>""</code></td>
<td>Order must include a deliverTo</td>
</tr>
<tr>
<td><code>mobileNumber</code> property is missing</td>
<td>Order must include a mobileNumber</td>
</tr>
<tr>
<td><code>mobileNumber</code> property is empty <code>""</code></td>
<td>Order must include a mobileNumber</td>
</tr>
<tr>
<td><code>dishes</code> property is missing</td>
<td>Order must include a dish</td>
</tr>
<tr>
<td><code>dishes</code> property is not an array</td>
<td>Order must include at least one dish</td>
</tr>
<tr>
<td><code>dishes</code> array is empty</td>
<td>Order must include at least one dish</td>
</tr>
<tr>
<td>a dish <code>quantity</code> property is missing</td>
<td><code>Dish ${index} must have a quantity that is an integer greater than 0</code></td>
</tr>
<tr>
<td>a dish <code>quantity</code> property is zero or less</td>
<td><code>Dish ${index} must have a quantity that is an integer greater than 0</code></td>
</tr>
<tr>
<td>a dish <code>quantity</code> property is not an integer</td>
<td><code>Dish ${index} must have a quantity that is an integer greater than 0</code></td>
</tr>
</tbody>
</table>
<p><strong>Example Request</strong></p>
<pre><code>POST http://localhost:5000/orders
</code></pre><p>Body:</p>
<div class="language-tabset"><div class="language-tab language-json"><pre><code class="lang-json">{
  <span class="hljs-string">"data"</span>: {
    <span class="hljs-string">"deliverTo"</span>: <span class="hljs-string">"308 Negra Arroyo Lane, Albuquerque, NM"</span>,
    <span class="hljs-string">"mobileNumber"</span>: <span class="hljs-string">"(505) 143-3369"</span>,
    <span class="hljs-string">"status"</span>: <span class="hljs-string">"delivered"</span>,
    <span class="hljs-string">"dishes"</span>: [
      {
        <span class="hljs-string">"id"</span>: <span class="hljs-string">"d351db2b49b69679504652ea1cf38241"</span>,
        <span class="hljs-string">"name"</span>: <span class="hljs-string">"Dolcelatte and chickpea spaghetti"</span>,
        <span class="hljs-string">"description"</span>: <span class="hljs-string">"Spaghetti topped with a blend of dolcelatte and fresh chickpeas"</span>,
        <span class="hljs-string">"image_url"</span>: <span class="hljs-string">"https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?h=530&amp;w=350"</span>,
        <span class="hljs-string">"price"</span>: <span class="hljs-number">19</span>,
        <span class="hljs-string">"quantity"</span>: <span class="hljs-number">2</span>
      }
    ]
  }
}
</code></pre>
</div></div><blockquote>
<p><strong>Note</strong>: Each dish in the Order's <code>dishes</code> property is a complete copy of the dish, rather than a reference to the dish by id. This is so the order does not change retroactively if the dish data is updated some time after the order is created.</p>
</blockquote>
<p><strong>Example Response</strong></p>
<p>Status 201</p>
<div class="language-tabset"><div class="language-tab language-json"><pre><code class="lang-json">{
  <span class="hljs-string">"data"</span>: {
    <span class="hljs-string">"id"</span>: <span class="hljs-string">"5a887d326e83d3c5bdcbee398ea32aff"</span>,
    <span class="hljs-string">"deliverTo"</span>: <span class="hljs-string">"308 Negra Arroyo Lane, Albuquerque, NM"</span>,
    <span class="hljs-string">"mobileNumber"</span>: <span class="hljs-string">"(505) 143-3369"</span>,
    <span class="hljs-string">"status"</span>: <span class="hljs-string">"delivered"</span>,
    <span class="hljs-string">"dishes"</span>: [
      {
        <span class="hljs-string">"id"</span>: <span class="hljs-string">"d351db2b49b69679504652ea1cf38241"</span>,
        <span class="hljs-string">"name"</span>: <span class="hljs-string">"Dolcelatte and chickpea spaghetti"</span>,
        <span class="hljs-string">"description"</span>: <span class="hljs-string">"Spaghetti topped with a blend of dolcelatte and fresh chickpeas"</span>,
        <span class="hljs-string">"image_url"</span>: <span class="hljs-string">"https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?h=530&amp;w=350"</span>,
        <span class="hljs-string">"price"</span>: <span class="hljs-number">19</span>,
        <span class="hljs-string">"quantity"</span>: <span class="hljs-number">2</span>
      }
    ]
  }
}
</code></pre>
</div></div><h4>GET /orders/:orderId</h4><p>This route will respond with the order where <code>id === :orderId</code>, or return 404 if no matching order is found.</p>
<p><strong>Example Request</strong></p>
<pre><code>GET http://localhost:5000/orders/f6069a542257054114138301947672ba
</code></pre><p><strong>Example Response</strong></p>
<p>Status 200</p>
<div class="language-tabset"><div class="language-tab language-json"><pre><code class="lang-json">{
  <span class="hljs-string">"data"</span>: {
    <span class="hljs-string">"id"</span>: <span class="hljs-string">"f6069a542257054114138301947672ba"</span>,
    <span class="hljs-string">"deliverTo"</span>: <span class="hljs-string">"1600 Pennsylvania Avenue NW, Washington, DC 20500"</span>,
    <span class="hljs-string">"mobileNumber"</span>: <span class="hljs-string">"(202) 456-1111"</span>,
    <span class="hljs-string">"status"</span>: <span class="hljs-string">"out-for-delivery"</span>,
    <span class="hljs-string">"dishes"</span>: [
      {
        <span class="hljs-string">"id"</span>: <span class="hljs-string">"90c3d873684bf381dfab29034b5bba73"</span>,
        <span class="hljs-string">"name"</span>: <span class="hljs-string">"Falafel and tahini bagel"</span>,
        <span class="hljs-string">"description"</span>: <span class="hljs-string">"A warm bagel filled with falafel and tahini"</span>,
        <span class="hljs-string">"image_url"</span>: <span class="hljs-string">"https://images.pexels.com/photos/4560606/pexels-photo-4560606.jpeg?h=530&amp;w=350"</span>,
        <span class="hljs-string">"price"</span>: <span class="hljs-number">6</span>,
        <span class="hljs-string">"quantity"</span>: <span class="hljs-number">1</span>
      }
    ]
  }
}
</code></pre>
</div></div><h4>PUT /orders/:orderId</h4><p>This route will update the order where <code>id === :orderId</code>, or return 404 if no matching order is found.</p>
<h5>Validation:</h5><p>The update validation must include all of the same validation as the POST /orders route, plus the following:</p>
<table>
<thead>
<tr>
<th>Validation</th>
<th>Error message</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>id</code> of body does not match <code>:orderId</code> from the route</td>
<td>Order id does not match route id. Order: ${id}, Route: ${orderId}.</td>
</tr>
<tr>
<td><code>status</code> property is missing</td>
<td>Order must have a status of pending, preparing, out-for-delivery, delivered</td>
</tr>
<tr>
<td><code>status</code> property is empty</td>
<td>Order must have a status of pending, preparing, out-for-delivery, delivered</td>
</tr>
<tr>
<td><code>status</code> property of the existing order === "delivered"</td>
<td>A delivered order cannot be changed</td>
</tr>
</tbody>
</table>
<blockquote>
<p><em>Note</em>: The <code>id</code> property is not <em>required</em> in the body of the request, but if it is present it must match <code>:orderId</code> from the route.</p>
</blockquote>
<p><strong>Example Request</strong></p>
<pre><code>PUT http://localhost:5000/orders/3c637d011d844ebab1205fef8a7e36ea
</code></pre><p>Body:</p>
<div class="language-tabset"><div class="language-tab language-json"><pre><code class="lang-json">{
  <span class="hljs-string">"data"</span>: {
    <span class="hljs-string">"deliverTo"</span>: <span class="hljs-string">"Rick Sanchez (C-132)"</span>,
    <span class="hljs-string">"mobileNumber"</span>: <span class="hljs-string">"(202) 456-1111"</span>,
    <span class="hljs-string">"status"</span>: <span class="hljs-string">"delivered"</span>,
    <span class="hljs-string">"dishes"</span>: [
      {
        <span class="hljs-string">"id"</span>: <span class="hljs-string">"90c3d873684bf381dfab29034b5bba73"</span>,
        <span class="hljs-string">"name"</span>: <span class="hljs-string">"Falafel and tahini bagel"</span>,
        <span class="hljs-string">"description"</span>: <span class="hljs-string">"A warm bagel filled with falafel and tahini"</span>,
        <span class="hljs-string">"image_url"</span>: <span class="hljs-string">"https://images.pexels.com/photos/4560606/pexels-photo-4560606.jpeg?h=530&amp;w=350"</span>,
        <span class="hljs-string">"price"</span>: <span class="hljs-number">6</span>,
        <span class="hljs-string">"quantity"</span>: <span class="hljs-number">1</span>
      }
    ]
  }
}
</code></pre>
</div></div><p><strong>Example Response</strong></p>
<div class="language-tabset"><div class="language-tab language-json"><pre><code class="lang-json">{
  <span class="hljs-string">"data"</span>: {
    <span class="hljs-string">"id"</span>: <span class="hljs-string">"f6069a542257054114138301947672ba"</span>,
    <span class="hljs-string">"deliverTo"</span>: <span class="hljs-string">"Rick Sanchez (C-132)"</span>,
    <span class="hljs-string">"mobileNumber"</span>: <span class="hljs-string">"(202) 456-1111"</span>,
    <span class="hljs-string">"status"</span>: <span class="hljs-string">"delivered"</span>,
    <span class="hljs-string">"dishes"</span>: [
      {
        <span class="hljs-string">"id"</span>: <span class="hljs-string">"90c3d873684bf381dfab29034b5bba73"</span>,
        <span class="hljs-string">"name"</span>: <span class="hljs-string">"Falafel and tahini bagel"</span>,
        <span class="hljs-string">"description"</span>: <span class="hljs-string">"A warm bagel filled with falafel and tahini"</span>,
        <span class="hljs-string">"image_url"</span>: <span class="hljs-string">"https://images.pexels.com/photos/4560606/pexels-photo-4560606.jpeg?h=530&amp;w=350"</span>,
        <span class="hljs-string">"price"</span>: <span class="hljs-number">6</span>,
        <span class="hljs-string">"quantity"</span>: <span class="hljs-number">1</span>
      }
    ]
  }
}
</code></pre>
</div></div><h4>DELETE /orders/:orderId</h4><p>This route will delete the order where <code>id === :orderId</code>, or return 404 if no matching order is found.</p>
<h5>Validation:</h5><p>The delete method must include the following validation:</p>
<table>
<thead>
<tr>
<th>Validation</th>
<th>Error message</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>status</code> property of the order !== "pending"</td>
<td>An order cannot be deleted unless it is pending</td>
</tr>
</tbody>
</table>
<p><strong>Example Request</strong></p>
<pre><code>DELETE http://localhost:5000/dishes/3c637d011d844ebab1205fef8a7e36ea
</code></pre><p><strong>Example Response</strong><br>
Status 204 and no response body.</p>
<p><strong>Note:</strong> In addition to needing to pass the tests and requirements in the instructions here, please review the Rubric Requirements for the human-graded part of this project in your Thinkful curriculum page.</p>
</div>