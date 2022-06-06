import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GamingAdmin';

  showHead: boolean = false;

  constructor(private router: Router) {

    // on route change to '/login', set the variable showHead to false
      router.events.forEach((event) => {
        if (event instanceof NavigationStart) {
          if (event['url'] == '/login') {
            this.showHead = false;
          } else {
            // console.log("NU")
            this.showHead = true;
          }
        }
      });


      

      if(localStorage.getItem("password")!="oussamaadmin"){
        this.router.navigate(['login']);
      }


    }

    logout(){
      localStorage.removeItem("password");
      this.router.navigate(['login']);
    }

    

}
