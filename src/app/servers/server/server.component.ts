import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.data
        .subscribe(
          (data: Data)=>{
            this.server = data['server'];
          }
        )
    // this.server = this.serversService.getServer(parseInt(this.route.snapshot.params['id']));
    // this.route.params.subscribe(
    //   (params: Params) =>{
    //     this.server = this.serversService.getServer(parseInt(params['id']));
    //   }
    // )

  }

  onEdit(){
    // from /view1?page=1 to/view2?page=1
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'})
  }

}
