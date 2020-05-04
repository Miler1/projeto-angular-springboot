import { Component, OnInit, Inject, Input } from '@angular/core';
import { PessoaService } from '../../../_services/pessoa.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, DateAdapter, MAT_DATE_FORMATS, MatSnackBar, MatDatepickerInputEvent } from '@angular/material';
import Pessoa from '../../../models/pessoa';
import { EventEmitterService } from '../../../_services/event-emitter.service';
import { AppDateAdapter, APP_DATE_FORMATS } from '../../../format-datepicker';
import * as moment from 'moment';
import { promise } from 'protractor';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css'],
  providers: [
    {provide: DateAdapter, useClass: AppDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS}
  ]
})
export class EditDialogComponent implements OnInit {
  form: FormGroup;
  pessoa: Pessoa;
  estados = [];
  submitted: boolean;
  cpfMask = [/[0-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
  cepMask = [/[0-9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/,];
  telefoneMask = ['(', /[0-9]/, /\d/, ')', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  // @Input() _dateValue;
  constructor(private pessoaService: PessoaService, 
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private _snackBar: MatSnackBar) { this.pessoa = data }
    
  ngOnInit() {
    this.form = this.fb.group({
      nome: new FormControl(this.pessoa.nome, Validators.required),
      cpf: new FormControl(this.pessoa.cpf, Validators.required),
      dataNascimento: new FormControl(new Date(this.pessoa.dataNascimento), Validators.required),
      endereco: new FormControl(this.pessoa.endereco),
      bairro: new FormControl(this.pessoa.bairro),
      cidade: new FormControl(this.pessoa.cidade),
      uf: new FormControl(this.pessoa.uf),
      cep: new FormControl(this.pessoa.cep),
      email: new FormControl(this.pessoa.email),
      telefone: new FormControl(this.pessoa.telefone),
      skype: new FormControl(this.pessoa.skype)
    });
    this.onGetUF();
  }

  dateFormat(date) {
    if (date != "Invalid Date") {
      let data = JSON.parse(JSON.stringify(date));
      let str = data.replace(/[T]/g, " ").replace(/.000Z/, "");
      return str;
    }
  }

  hasError = (controlName: string, errorName: string) =>{
    return this.form.controls[controlName].hasError(errorName);
  }

  onGetUF() {
    this.pessoaService.getUf()
    .subscribe(
        data => {
          this.estados = data;
        },
        error => alert(error),
        () => console.log("acesso a webapi get ok...")
    );
  }

  save(_id = null) {
    let dataNascimento;
    if (this.form.get('dataNascimento').value != "Invalid Date") {
      dataNascimento = this.dateFormat(this.form.get('dataNascimento').value);
    } else {
      dataNascimento = null;
    }
     
    let p: any = {
      nome: this.form.get('nome').value,
      cpf: this.form.get('cpf').value.replace(/[.-]/g, ""),
      dataNascimento: dataNascimento,
      endereco: this.form.get('endereco').value,
      bairro: this.form.get('bairro').value,
      cidade: this.form.get('cidade').value,
      uf: this.form.get('uf').value,
      cep: this.form.get('cep').value,
      email: this.form.get('email').value,
      telefone: this.form.get('telefone').value,
      skype: this.form.get('skype').value
    };

    if (_id > 0) {
      this.pessoaService
      .updatePessoa(_id, p)
      .subscribe(
        data => {
          this.pessoa = data as Pessoa;
          this.submitted = true;
          this._snackBar.open('Registro alterado com sucesso!', 'Fechar');
          EventEmitterService.get('reloadData').emit();
        },
        response => {
          console.log(response)
          if (response.status == 0) {
            this._snackBar.open('Servidor está fora do ar!', 'Fechar');
          } else if (response.status == 400 || response.status == 403 || response.status == 404) {
            this._snackBar.open(response.error.message, "Fechar");          
          } else if (response.status == 500) {
            this._snackBar.open(response.error.message, "Fechar");          
          } 
        });
    } else {
      this.pessoaService
        .createPessoa(p)
        .subscribe(
          data => {
          this.submitted = true;
          this._snackBar.open('Novo registro inserido com sucesso!', 'Fechar');
          EventEmitterService.get('reloadData').emit();
        },
        response => {
          console.log(response)
          this.submitted = false;
          if (response.status == 0) {
            this._snackBar.open('Servidor está fora do ar!', 'Fechar'); 
          } else if (response.status == 400 || response.status == 403 || response.status == 404) {
            this._snackBar.open(response.error.message, "Fechar");          
          } else if (response.status == 500) {
            this._snackBar.open(response.error.message, "Fechar");          
          } 
      });
    }
    this.close();
  }

  close() {
    this.dialogRef.close();
  }

}
