import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { Auth, Hub } from "aws-amplify";
import { apiClient } from "../services/apiservice";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  public loggedIn;
  public userName: string;
  public logo: string = "../assets/img/logo.png";
  userMenuItems = [{ title: "Log out" }];
  isOperator: boolean;
  constructor(
    public router: Router,
    private apiclient: apiClient,
  ) { }

  ngOnInit() {
    Auth.currentAuthenticatedUser().then((user_id_info) => {
      this.loggedIn = user_id_info;
      // call server to see if this user has been inserted in db or not. 
      // if so then get if he is operator. 
      Auth.currentSession().then((userinfo) => {
        var idtoken = userinfo.getIdToken();
        var decoded = idtoken.decodePayload();
        this.userName = decoded.given_name;
        this.apiclient.get_user(null, this.loggedIn.username).subscribe(user => {
          this.isOperator = user.is_operator;
          console.log(this.isOperator);
          if (user.social_id == null || user.is_operator == null) {
            user.social_id = this.loggedIn.username;
            user.name = this.userName;
            user.email = decoded.email;
            this.apiclient.post_user(user, null, this.loggedIn.username).subscribe(created_user => {
            });
          }
        });
      });
    });
  }

  onLogin() {
    Auth.federatedSignIn().then((x) => {
      this.updateMenuItems();
    });
  }

  onLogout() {
    Auth.signOut();
  }
  onCreateActivity() {
    this.router.navigate(["/dashboard"]);

  }

  updateMenuItems() {
    Auth.currentSession().then((x) => {
      var idtoken = x.getIdToken();
      var decoded = idtoken.decodePayload();
      this.userName = decoded.given_name;
    });
  }
}