(() => {
    // create a component first
    const videoComponent = {

      template: `
      <div class="flex-video"><video autoplay  loop id="myVideo">
      <source src="../video/OntarioSummerPromoVid.mp4" type="video/mp4">
      </video></div>



      `
    }

    const landingComponent = {
        template: `

        <div class="header-container grid-x">
<h2 class="hidden">Header Container</h2>

  <div class="large-1 medium-1 cell"></div>
      <div class="large-6 medium-6 small-8 cell motive-box">
<h2 class="header-header">FIND YOURSELF AT HOME</h2>
<p class="header-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<router-link :to="{ path: '/signup'}"><a class="button success">Sign up</a>
</router-link>
        </div>
          <div class="large-4 medium-4  cell"></div>
        </div>

        `  ,


        created: function() {
            console.log('component created');
        },

        methods: {

        }
    }

    const activitiesComponent = {
        template: `
        <div class="activities-container grid-x"><h2 class="hidden">Activities container</h2>

      <div class="auto cell"></div>  <div class="what-do large-10 cell">
<h2 class="what-do-header">What do YOU want to do?</h2>
<p class="what-do-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div><div class="auto cell"></div>


        <div class="camping large-12 cell">
        <router-link :to="{ path: '/camping'}"><h2 class="activities-header">CAMPING
</h2></router-link>

        </div>


        <div class="water-sports large-12 cell">
        <router-link :to="{ path: '/watersports'}"><h2 class="activities-header">WATER SPORTS
        </h2></router-link>
        </div>


        <div class="trails large-12 cell">
        <router-link :to="{ path: '/trails'}"><h2 class="activities-header">TRAILS
        </h2></router-link>
        </div>


        <div class="amusement large-12 cell">
        <router-link :to="{ path: '/amusement'}"><h2 class="activities-header">AMUSEMENT
        </h2></router-link>
        </div>


        <div class="underwater-adventures large-12 cell">
        <router-link :to="{ path: '/underwateradventures'}"><h2 class="activities-header">UNDERWATER ADVENTURES
        </h2></router-link>
        </div>


        <div class="caving large-12 cell">
        <router-link :to="{ path: '/caving'}"><h2 class="activities-header">CAVING
        </h2></router-link>
        </div>



        </div>

        `
    }

    const signupComponent = {
      template: `
      <div class="signup-container large-10 medium-10 small-10 cell">
      <h1 style="text-align:center;">Subscribe to our newsletter</h1>
      <form>
              <label style="text-align:center;" for="country">Country:</label>
              <input v-model="input.country" style="text-align:center;" type="text" id="country" name="country" value="" placeholder="Country" required>

              <label style="text-align:center;" for="firstname">First Name:</label>
              <input v-model="input.firstname" type="text" style="text-align:center;" id="firstname" name="firstname" value="" placeholder="First Name" required>

              <label style="text-align:center;" for="lastname">Last Name:</label>
              <input v-model="input.lastname" type="text" style="text-align:center;" id="lastname" name="lastname" value="" placeholder="Last Name" required>

              <label style="text-align:center;" for="email">Email:</label>
              <input v-model="input.email" type="email" style="text-align:center;" id="email" name="email" value="" placeholder="Email Address" required>

              <button v-on:click="signup()" type="submit" name="submit" class="button success">Submit</button>

      </form>
      </div>
      `,


         data() {
             return {
                 input: {
                     country: "",
                     firstname: "",
                     lastname: "",
                     email: ""
                 }
             }
         },


         methods: {
             signup() {
                 console.log('attempting to sign up');

                 if (this.input.country != "" && this.input.firstname != "" && this.input.lastname != "" && this.input.email != "") {

                     let url = `./admin/sign-up.php`;

                     const formData = new FormData();

                     formData.append("country", this.input.country);
                     formData.append("firstname", this.input.firstname);
                     formData.append("lastname", this.input.lastname);
                     formData.append("email", this.input.email);

                     fetch(url, {
                         method: 'POST',
                         body: formData
                     })
                         .then(res => res.json())
                         .then(data => {
                             if (data == "Signup Failed") {
                                 console.log('login attempt failed');
                                 return;
                             } else {

                             }

                         })
                     .catch(function(error) {
                         console.log(error);
                     })

                 } else {
                     console.log('blank forms');
                 }
             }
         }
       }


    const campingComponent = {
        template: `

        <div class="grid-x">   <div class="large-12 cell camping-mod-bg"><h2 class="camping-mod-bg-text">CAMPING </h2></div>
<div class="large-10 cell mod-container">
        <div class="large-6 cell"> <h2 class="mod-header">Heading</h2> <p class="mod-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> </div>
        <div class="auto cell"></div>
 <div class="large-4 cell"> <a class="button success">More Info</a>
        </div>  


        <div class="large-6 cell"> <h2 class="mod-header">header</h2> <p class="mod-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> </div>
        <div class="auto cell"></div>
 <div class="large-4 cell"> <a class="button success">More Info</a>
        </div>  


        <div class="large-6 cell"> 
        <h2 class="mod-header">header</h2> 
        <p class="mod-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
 </div>
<div class="auto cell"></div>
 <div class="large-4 cell"> <a class="button success">More Info</a>
        </div>
</div>
  </div>

        `
    }

    const watersportsComponent = {
        template: `

        <div class="grid-x">   <div class="large-12 cell watersports-mod-bg"><h2 class="camping-mod-bg-text">WATER SPORTS </h2></div>
        <div class="large-10 cell mod-container">
        <div class="large-6 cell"> <h2 class="mod-header">Heading</h2> <p class="mod-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> </div>
        <div class="auto cell"></div>
 <div class="large-4 cell"> <a class="button success">More Info</a>
        </div>  


        <div class="large-6 cell"> <h2 class="mod-header">header</h2> <p class="mod-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> </div>
        <div class="auto cell"></div>
 <div class="large-4 cell"> <a class="button success">More Info</a>
        </div>  


        <div class="large-6 cell"> 
        <h2 class="mod-header">header</h2> 
        <p class="mod-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
 </div>
        <div class="auto cell"></div>
 <div class="large-4 cell"> <a class="button success">More Info</a>
        </div>
        </div>
  </div>

        `
    }

    const trailsComponent = {
        template: `

        <div class="grid-x">   <div class="large-12 cell trails-mod-bg"><h2 class="camping-mod-bg-text">TRAILS </h2></div>
        <div class="large-10 cell mod-container">
        <div class="large-6 cell"> <h2 class="mod-header">Heading</h2> <p class="mod-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> </div>
        <div class="auto cell"></div>
 <div class="large-4 cell"> <a class="button success">More Info</a>
        </div>  


        <div class="large-6 cell"> <h2 class="mod-header">header</h2> <p class="mod-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> </div>
        <div class="auto cell"></div>
 <div class="large-4 cell"> <a class="button success">More Info</a>
        </div>  


        <div class="large-6 cell"> 
        <h2 class="mod-header">header</h2> 
        <p class="mod-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
 </div>
        <div class="auto cell"></div>
 <div class="large-4 cell"> <a class="button success">More Info</a>
        </div>
        </div>
  </div>
        `
    }

    const amusementComponent = {
        template: `
        <div class="grid-x">   <div class="large-12 cell amusement-mod-bg"><h2 class="camping-mod-bg-text">AMUSEMENT</h2></div>
        <div class="large-10 cell mod-container">
        <div class="large-6 cell"> <h2 class="mod-header">Heading</h2> <p class="mod-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> </div>
        <div class="auto cell"></div>
 <div class="large-4 cell"> <a class="button success">More Info</a>
        </div>  


        <div class="large-6 cell"> <h2 class="mod-header">header</h2> <p class="mod-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> </div>
        <div class="auto cell"></div>
 <div class="large-4 cell"> <a class="button success">More Info</a>
        </div>  


        <div class="large-6 cell"> 
        <h2 class="mod-header">header</h2> 
        <p class="mod-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
 </div>
        <div class="auto cell"></div>
 <div class="large-4 cell"> <a class="button success">More Info</a>
        </div>
        </div>
  </div>

        `
    }

    const underwateradventuresComponent = {
        template: `
        <div class="grid-x">   <div class="large-12 cell underwater-mod-bg"><h2 class="camping-mod-bg-text">UNDERWATER ADVENTURES </h2></div>
        <div class="large-10 cell mod-container">
        <div class="large-6 cell"> <h2 class="mod-header">Heading</h2> <p class="mod-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> </div>
        <div class="auto cell"></div>
 <div class="large-4 cell"> <a class="button success">More Info</a>
        </div>  


        <div class="large-6 cell"> <h2 class="mod-header">header</h2> <p class="mod-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> </div>
        <div class="auto cell"></div>
 <div class="large-4 cell"> <a class="button success">More Info</a>
        </div>  


        <div class="large-6 cell"> 
        <h2 class="mod-header">header</h2> 
        <p class="mod-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
 </div>
        <div class="auto cell"></div>
 <div class="large-4 cell"> <a class="button success">More Info</a>
        </div>
        </div>
  </div>

        `
    }

    const cavingComponent = {
        template:   `

        <div class="grid-x">   <div class="large-12 cell caving-mod-bg"><h2 class="camping-mod-bg-text">CAVING </h2></div>
        <div class="large-10 cell mod-container">
        <div class="large-6 cell"> <h2 class="mod-header">Heading</h2> <p class="mod-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> </div>
        <div class="auto cell"></div>
 <div class="large-4 cell"> <a class="button success">More Info</a>
        </div>  


        <div class="large-6 cell"> <h2 class="mod-header">header</h2> <p class="mod-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> </div>
        <div class="auto cell"></div>
 <div class="large-4 cell"> <a class="button success">More Info</a>
        </div>  


        <div class="large-6 cell"> 
        <h2 class="mod-header">header</h2> 
        <p class="mod-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
 </div>
        <div class="auto cell"></div>
 <div class="large-4 cell"> <a class="button success">More Info</a>
        </div>
        </div>
  </div>

        `
    }

    // routes are the path you're taking through the application
    // www.google.ca is a route; it's the route to the home page
    // www.sumpinsumpin/contact is the route to a contact page, etc
    // each route gets mapped to a component that you define
    // and that component gets rendered in the <router-view> element
    const routes = [
        { path: '/', name: 'landing', component: landingComponent },
        { path: '/landing', name: 'landing', component: landingComponent },
        { path: '/activities', name: 'activities', component: activitiesComponent },
        { path: '/signup', name: 'signup', component: signupComponent },
        { path: '/camping', name: 'camping', component: campingComponent },
        { path: '/watersports', name: 'camping', component: watersportsComponent },
        { path: '/trails', name: 'camping', component: trailsComponent },
        { path: '/amusement', name: 'camping', component: amusementComponent },
        { path: '/underwateradventures', name: 'camping', component: underwateradventuresComponent },
        { path: '/video', name: 'video', component: videoComponent },
        { path: '/caving', name: 'camping', component: cavingComponent }


    ]

    const router = new VueRouter({
        routes
    });

    // then your vue instance
    const vm = new Vue({
        el: "#app",

        data: {
            testmessage: "sup"
        },

        methods: {
            calledOnParent() {
                console.log("This method lives in the main VM and was called from a component");
            }
        },

        created: function() {
            console.log("this is the main vue instance");
        },

        components: {

          'landingcomponent' : landingComponent,
          'activitiescomponent' : activitiesComponent,
          'signupcomponent' : signupComponent,
          'campingcomponent' : campingComponent,
          'watersportscomponent' : watersportsComponent,
          'trailscomponent' : trailsComponent,
          'amusementcomponent' : amusementComponent,
          'underwateradventurescomponent' : underwateradventuresComponent,
          'cavingcomponent' : cavingComponent,
          'videocomponent' : videoComponent




        },

        router: router
    });

})();
