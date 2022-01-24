import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { OktaAuth } from "@okta/okta-auth-js";
import { BehaviorSubject } from "rxjs";
import OktaSignIn from '@okta/okta-signin-widget';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';


var strRedirectUrl = "https://192.168.1.210:4200/en";
var strPostLogoutUrl = "https://192.168.1.210:4200/en";
var strClientID = "0oa18tefheexDDijM1d7";
var strIssuer = "https://csm-apac.oktapreview.com/oauth2/default";
var strBaseURL = "https://csm-apac.oktapreview.com/";

//Github pages variables
// var strRedirectUrl = "https://mortpanda.github.io/okta-siw-hibp-v2/en";
// var strPostLogoutUrl = "https://mortpanda.github.io/okta-siw-hibp-v2/en";
// var strClientID = "0oa18tefheexDDijM1d7";
// var strIssuer = "https://csm-apac.oktapreview.com/oauth2/default";
// var strBaseURL = "https://csm-apac.oktapreview.com/";

//Github upload
// var strRedirectUrl = "{{Redirect URL}}";
// var strPostLogoutUrl = "{{Post logout URL}}";
// var strClientID = "{{Client ID}}";
// var strIssuer = "{{Issuer URL}}";
// var strBaseURL = "{{Base URL}}";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private authClient = new OktaAuth({
    issuer: strIssuer,
    clientId: strClientID,
  });

  public isAuthenticated = new BehaviorSubject<boolean>(false);
  public strstateToken;
  public oktaSignIn;
  public idToken;
  constructor(private router: Router) {}

  async checkAuthenticated() {
    const authenticated = await this.authClient.session.exists();
    this.isAuthenticated.next(authenticated);
    return authenticated;
  }

  async login(username: string, password: string) {
    
    const transaction = await this.authClient.signIn({ username, password });
    
            var element = document.getElementById("loginpage");
            element.parentNode.removeChild(element);
            

            this.strstateToken = transaction.data.stateToken;
            
            //Uses the state token to perform MFA authentication using a newly created widget
            var oktaSignIn = new OktaSignIn({
              clientId: strClientID,
              baseUrl: strBaseURL,
              language: 'en',
              redirectUri: strRedirectUrl,
              colors: {
                  brand: '#00297A',
                },
              stateToken: this.strstateToken,
              postLogoutRedirectUri: strPostLogoutUrl,
              authParams: {
                issuer: strIssuer,
                responseMode: 'fragment',
                responseType: ['token','id_token'],
                scopes: ['openid', 'email', 'profile'],
                pkce: false

                },
            });
            
              oktaSignIn.authClient.token.getUserInfo().then(function(user) {
              console.log("Hello, " + user.email + "! You are *still* logged in! :)");
              //document.getElementById("logout").style.display = 'block';
            }, function(error) {
              oktaSignIn.showSignInToGetTokens({
                el: '#okta-widget-container'
              }).then(function(tokens) {
                oktaSignIn.authClient.tokenManager.setTokens(tokens);
                oktaSignIn.remove();
      
                const idToken = tokens.idToken;
                const accessToken = tokens.accessToken;
                console.log("Hello, " + idToken.claims.email + "! You just logged in! :)");
                console.log(idToken);
                console.log(accessToken);


                return  oktaSignIn.authClient.token.getUserInfo(accessToken,idToken)
                .then(function(user) {
                  // user has details about the user
                  console.log(JSON.stringify(user));
                  window.location.replace(strRedirectUrl);
                })
                .catch(function(err) {
                  // handle OAuthError or AuthSdkError (AuthSdkError will be thrown if app is in OAuthCallback state)
                });

              }).catch(function(err) {
                console.error(err);
              });
            });
  }

  OktaLogout(bar?: string){ 
    this.authClient.tokenManager.clear();
    this.authClient.signOut({postLogoutRedirectUri : strPostLogoutUrl,idToken: this.idToken});
    location.reload();
}
            
}
