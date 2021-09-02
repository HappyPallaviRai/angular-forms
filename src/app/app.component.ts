import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("myForm", { static: false }) myForm: NgForm;
  optionSelect = "pro";
  isEmail;
  isOptions;
  isPassword;
  subscriptions = ["basic", "Advanced", "pro"];
  user = {
    email: "",
    subscription: "",
    password: "",
  };
  isSubmit;

  onSubmit() {
    this.isSubmit = true;
    console.log(this.myForm);
    this.user.email = this.myForm.value.email;
    this.user.subscription = this.myForm.value.options;
    this.user.password = this.myForm.value.password;
  }
}
