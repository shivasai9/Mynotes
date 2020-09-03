import { Component, OnInit } from "@angular/core";
import { FirebaseApp } from "@angular/fire";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { AngularFirestore } from "@angular/fire/firestore";
import { Subscription } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  subs: Subscription;
  names;
  data = { name: "", age: "" };
  // names$: AngularFireList<any[]>;
  constructor(public db: AngularFireDatabase) {}
  ngOnInit() {
    this.names = this.db.list("/users").valueChanges();
    // this.names.subscribe(data => {
    //   console.log("data", data);
    // });
    // this.db.object("/users").set({});
  }
  submit() {
    console.log("==========");
    this.db.object(`/users/${this.data["name"]}`).update(this.data);
    this.data = { name: "", age: "" };
  }
  // doc.subscribe(data => {
  //   this.names = data;
  // });
}
