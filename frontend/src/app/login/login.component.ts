import { Component, OnInit } from '@angular/core';
import { TitleService } from '../core/services/title.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/components/common/messageservice';
import { AuthenticationService } from '../core/services/authentication.service';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  loading = false;
  error = '';
  redirectUrl: string;

  constructor(
    private titleService: TitleService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.redirectUrl = 'home';
    this.userService.logout();
    this.titleService.configuraTitulo('Login');
    this.formLogin = this.formBuilder.group({
      'username': new FormControl(''),
      'password': new FormControl('')
    })
  }

  logar() {
    console.log('reaizar login');
    this.authenticationService.login(this.formLogin.get('username').value, this.formLogin.get('password').value)
      .subscribe(
        result => {
          this.loading = false;

          if (result) {
            this.userService.login(result);
            this.navigateAfterSuccess();
          } else {
            this.error = 'O usuário ou senha está incorreto(a)';
            this.messageService.add({severity:'error', summary: 'MaisVIDA', detail:this.error});
          }
        },
        error => {
          this.error = 'O usuário ou senha está incorreto(a)';
          this.messageService.add({severity:'error', summary: 'MaisVIDA', detail:this.error});
          this.loading = false;
        }
      );
  }

  private navigateAfterSuccess() {
    if (this.userService.isAuthenticated()) {
      this.router.navigate([this.redirectUrl]);
    } else {
      this.router.navigate(['/']);
    }
  }  

}
