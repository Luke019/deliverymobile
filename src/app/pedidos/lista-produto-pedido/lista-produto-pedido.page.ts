import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { OnInit, Component } from '@angular/core';
import { PedidoService } from 'src/app/pedidos/shared/pedido.service';

@Component({
  selector: 'app-lista-produto-pedido',
  templateUrl: './lista-produto-pedido.page.html',
  styleUrls: ['./lista-produto-pedido.page.scss'],
})
export class ListaProdutoPedidoPage implements OnInit {
  produtos: Observable<any[]>

  constructor(private route: ActivatedRoute, private pedidoService: PedidoService) { }

  ngOnInit() {
    let key = this.route.snapshot.paramMap.get('key');
    if (key) {
      this.produtos = this.pedidoService.getAllProdutos(key);
    }
  }

}
