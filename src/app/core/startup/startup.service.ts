import { Injectable, Injector, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { zip } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MenuService, SettingsService, TitleService, ALAIN_I18N_TOKEN } from '@delon/theme';
import { DA_SERVICE_TOKEN, ITokenService } from '@delon/auth';
import { ACLService } from '@delon/acl';

import { NzIconService } from 'ng-zorro-antd';
import { ICONS_AUTO } from '../../../style-icons-auto';
import { ICONS } from '../../../style-icons';

/**
 * 用于应用启动时
 * 一般用来获取应用所需要的基础数据等
 */
@Injectable()
export class StartupService {
  constructor(
    iconSrv: NzIconService,
    private menuService: MenuService,
    private settingService: SettingsService,
    private aclService: ACLService,
    private titleService: TitleService,
    @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService,
    private httpClient: HttpClient,
    private injector: Injector
  ) {
    iconSrv.addIcon(...ICONS_AUTO, ...ICONS);
  }

  // private viaHttp(resolve: any, reject: any) {
  //   zip(
  //     this.httpClient.get('assets/tmp/app-data.json')
  //   ).pipe(
  //     // 接收其他拦截器后产生的异常消息
  //     catchError(([appData]) => {
  //         resolve(null);
  //         return [appData];
  //     })
  //   ).subscribe(([appData]) => {
  //     this.aclService.setRole(['user']);
  //     console.log(this.aclService.data)
  //     // application data
  //     const res: any = appData;
  //     // 应用信息：包括站点名、描述、年份
  //     this.settingService.setApp(res.app);
  //     // 用户信息：包括姓名、头像、邮箱地址
  //     this.settingService.setUser(res.user);
  //     // ACL：设置权限为user
  //     // 初始化菜单
  //     this.menuService.add(res.menu);
  //     // 设置页面标题的后缀
  //     this.titleService.suffix = res.app.name;
  //   },
  //   () => { },
  //   () => {
  //     resolve(null);
  //   });
  // }

  private viaMock(resolve: any, reject: any) {
    let tokenData = this.tokenService.get();
    // if (!tokenData.token) {
    //   this.injector.get(Router).navigateByUrl('/passport/login');
    //   resolve({});
    //   return;
    // }
    if (!tokenData.token) {
      this.tokenService.set({
        token: '9527',
        id: 10000,
        time: +new Date(),
        // acl: ['tourist'],
        info: {
          name: '游客',
          avatar: './assets/tmp/img/3.png',
          email: 'somebody@nuc.edu.cn',
        }
      });
      tokenData = this.tokenService.get(); // 这里语句的意思是 重新获取tokenData的值
    }
    // mock
    this.httpClient.get('http://10.170.170.131:4200/assets/tmp/app-data.json')
    .subscribe(appData => {
      console.log('运行一次');
         // application data
      const res: any = appData;
      // 应用信息：包括站点名、描述、年份
      this.settingService.setApp(res.app);
      // 用户信息：包括姓名、头像、邮箱地址
      console.log(tokenData.info);
      this.settingService.setUser(tokenData.info);
      // ACL：设置角色
      this.aclService.setRole(tokenData.acl);
      // 初始化菜单
      this.menuService.add(res.menu);
      // 设置页面标题的后缀
      this.titleService.suffix = res.app.name;
      this.titleService.prefix = res.app.name;
      // 折叠菜
      this.settingService.layout.collapsed = true;
    },
       () => { },
       () => {
         resolve();
       });
  }

  load(): Promise<any> {
    // only works with promises
    // https://github.com/angular/angular/issues/15088
    return new Promise((resolve, reject) => {
      // http
      // this.viaHttp(resolve, reject);
      // mock：请勿在生产环境中这么使用，viaMock 单纯只是为了模拟一些数据使脚手架一开始能正常运行
      this.viaMock(resolve, reject);

    });
  }
}
