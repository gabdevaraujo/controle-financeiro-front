import { Lancamento } from './../model/Lancamento';
import { MenuItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html',
  styleUrls: ['./novo.component.css'],
})
export class NovoComponent implements OnInit {

  tipos!: Tipo[];
  subTipos!: SubTipo[];
  tipoSelecionado!: Tipo;
  buttonOptions!: MenuItem[];
  form!: FormGroup;
  lancamento!: Lancamento;


  constructor(
    private formBuilder: FormBuilder
  ) {
    this.tipos = [
      { name: 'Receita', code: 'RC' },
      { name: 'Investimento', code: 'IN' },
      { name: 'Despesa', code: 'DP' },
    ];

    this.subTipos = [
      { name: 'Salário', code: '1' },
      { name: 'Aluguel', code: '2' },
      { name: 'Pensão', code: '3' },
      { name: 'Horas Extras', code: '4' },
      { name: 'Outros', code: '5' },

    ];
  }

  ngOnInit(): void {
    this.buildButtonOptions();
    this.createForm();
  }

  save() {
    console.log(this.form.getRawValue());

  }

  update() {}

  delete() {}

  createForm() : FormGroup {
    this.form = this.formBuilder.group({
      tipo: [null, Validators.required],
      subTipo: [null, Validators.required],
      valor: [null, Validators.required],
      data: [null, Validators.required],
      detalhes: [null, Validators.required],
    })
    return this.form;
  }

  buildButtonOptions() {
    this.buttonOptions = [
      {
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => {
          this.update();
        },
      },
      {
        label: 'Delete',
        icon: 'pi pi-times',
        command: () => {
          this.delete();
        },
      },
      { label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io' },
      { separator: true },
      { label: 'Setup', icon: 'pi pi-cog', routerLink: ['/setup'] },
    ];
  }
}

interface Tipo {
  name: string;
  code: string;
}

interface SubTipo {
  name: string;
  code: string;
}
