import { Component, Inject } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private snack: MatSnackBar,
    private fb: FormBuilder,
    ){}



  //propriedades do formulário Template Driven Form
  nameTD: string = ""
  lastnameTD: string = ""
  usernameTD: string = ''
  cpfTD: number = 0
  phoneTD:string = ''
  adressTD: string = ''
  complementTD: string = ''
  passwordTD: string = ''
  checkpassTD: string = ''

submitMetodoTD(): void {
    console.log(`Name = ${this.nameTD}`)
    console.log(`Last Name = ${this.lastnameTD}`)
    console.log(`Username is = ${this.usernameTD}`)
    console.log(`Cpf is = ${this.cpfTD}`)
    console.log(`Phone number is = ${this.phoneTD}`)
    console.log(`Adress is = ${this.adressTD}`)
    console.log(`Complement is = ${this.complementTD}`)
    if (this.passwordTD == this.checkpassTD) {
      console.log('Senhas iguais !')
      this.snack.open('Você foi cadastrado!', 'ok', {duration: 3000})
    } else {
      console.log('Senha diferentes !')
      this.snack.open('Senhas diferentes', 'Tentar novamente')
    }
}

//Form Builder Lean
 personalData: FormGroup = this.fb.group({
  name: ['', [Validators.required]],
  lastname: ['', [Validators.required]],
  username: ['',[Validators.required, Validators.minLength(6)]],
  cpf: ['', [Validators.required, Validators.minLength(11)]],
  phone: ['', [Validators.required]],
  adress: ['', [Validators.required]],
  complement: [''],
  password: ['', [Validators.required, Validators.minLength(5)]],
  checkpass: ['', [Validators.required, Validators.minLength(5)]],
 })


  submitMetodo(): void {
    //console no FormGroup
    console.log(`Name = ${this.personalData.controls['name'].value}`)
    console.log(`Lastname = ${this.personalData.controls['lastname'].value}`)
    console.log(`Username = ${this.personalData.controls['username'].value}`)
    console.log(`CPF is = ${this.personalData.controls['cpf'].value}`)
    console.log(`Phone is = ${this.personalData.controls['phone'].value}`)
    console.log(`Adress is = ${this.personalData.controls['adress'].value}`)
    console.log(`Complement is = ${this.personalData.controls['complement'].value}`)
    console.log(this.personalData.controls['password'].value)
    console.log(this.personalData.controls['checkpass'].value)

    if (this.personalData.controls['password'].value == this.personalData.controls['checkpass'].value) {
      this.snack.open('Você foi cadastrado!', 'ok', {duration:8000})
    } else {
      this.snack.open('Senhas diferentes!', 'Redefinir senha')
    }
  }

}




