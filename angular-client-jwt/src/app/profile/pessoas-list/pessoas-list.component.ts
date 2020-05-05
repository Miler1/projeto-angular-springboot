import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PessoaService } from '../../_services/pessoa.service';
import Pessoa from '../../models/pessoa';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { 
  MatDialogConfig, 
  MatDialog,
  MatTableDataSource, 
  MatSort, 
  MatPaginator, 
  DateAdapter,
  MAT_DATE_FORMATS,
  MatSnackBar} from '@angular/material';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { EventEmitterService } from '../../_services/event-emitter.service';
import { NgxSpinnerService } from "ngx-spinner";
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2'; // ES6 Modules or TypeScript
import { AppDateAdapter, APP_DATE_FORMATS } from '../../format-datepicker';
// import { NotificationsService } from 'angular2-notifications';


@Component({
  selector: 'app-pessoas-list',
  templateUrl: './pessoas-list.component.html',
  styleUrls: ['./pessoas-list.component.css'],
  providers:[DatePipe,
    {provide: DateAdapter, useClass: AppDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS}]
})
export class PessoasListComponent implements OnInit, AfterViewInit {

  pessoa: Pessoa;
  pessoas: Observable<Pessoa[]>;
  submitted = false;
  estados = [];
  closeResult: string;
  reload: boolean;
  angForm: FormGroup;
  dataSource = new MatTableDataSource<Pessoa>();
  displayedColumns: string[] = ['id', 'nome', 'cpf', 'endereco', 'bairro', 'cidade', 'uf', 'cep', 'email', 'telefone', 'skype', 'actions_upd', 'actions_del'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  renderedData: Pessoa[];

  constructor(private pessoaService: PessoaService, 
              private fb: FormBuilder, 
              public dialog: MatDialog,
              private spinner: NgxSpinnerService,
              public datepipe: DatePipe,
              private _snackBar: MatSnackBar) { 
    EventEmitterService.get('reloadData').subscribe(data => this.reloadData());
  }

  ngOnInit() {
    this.reloadData();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
    this.dataSource.filter.fontcolor('#fff');
  }

  deletePessoa(id) {
    Swal.fire({
      // title: 'Pergunta',
      text: 'Deseja deletar este registro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não'
    }).then((result) => {
      if (result.value) {
        this.pessoaService.deletePessoa(id)
        .subscribe(
        data => {
          this.reloadData();
        },
        response => {
          if (response.status == 0) {
            this._snackBar.open('Servidor está fora do ar!', 'Fechar');
          } else if (response.status == 400 || response.status == 403 || response.status == 404) {
            this._snackBar.open(response.error.message, "Fechar");          
          } else if (response.status == 500) {
            this._snackBar.open(response.error.message, "Fechar");          
          } 
        });
        Swal.fire(
          'Deletado!',
          'Este registro foi deletado com sucesso!',
          'success'
        )
      }
    });
  }

  reloadData() {
    this.spinner.show();
    this.pessoas = this.pessoaService.getPessoasList();
    this.pessoas.subscribe(data => {
      if (data != null)
        this.dataSource.data = data as Pessoa[];
    });
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

  openDialog(pessoa = null) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    if (pessoa != undefined) {
      dialogConfig.data = {
        id: pessoa.id,
        nome: pessoa.nome,
        cpf: pessoa.cpf,
        dataNascimento: pessoa.dataNascimento,
        endereco: pessoa.endereco,
        bairro: pessoa.bairro,
        cidade: pessoa.cidade,
        uf: pessoa.uf,
        cep: pessoa.cep,
        email: pessoa.email,
        telefone: pessoa.telefone,
        skype: pessoa.skype
      }
    } else {
      dialogConfig.data = {
        id: '',
        nome: '',
        cpf: '',
        dataNascimento: '',
        endereco: '',
        bairro: '',
        cidade: '',
        uf: '',
        cep: '',
        email: '',
        telefone: '',
        skype: ''
      }
    }

    this.dialog.open(EditDialogComponent, dialogConfig);
    
  }

}
