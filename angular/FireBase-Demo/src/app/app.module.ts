import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AppComponent } from "./app.component";
import { AngularFirestore } from "@angular/fire/firestore";
import { FormsModule } from "@angular/forms";

const config = {
  apiKey: "AIzaSyB52GtL33-RRooRt3oEE3q7k9Ycnm5RDjA",
  authDomain: "fir-1b409.firebaseapp.com",
  databaseURL: "https://fir-1b409.firebaseio.com",
  projectId: "fir-1b409",
  storageBucket: "fir-1b409.appspot.com",
  messagingSenderId: "812981704970",
  appId: "1:812981704970:web:7246e26f0294caec6e42f3",
  measurementId: "G-LF3GW1M0K8"
};
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule {}
