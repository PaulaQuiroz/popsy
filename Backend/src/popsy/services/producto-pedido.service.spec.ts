import { Test, TestingModule } from "@nestjs/testing";
import { ProductoPedidoService } from "./producto-pedido.service";

describe("ProductoPedidoService", () => {
	let service: ProductoPedidoService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [ProductoPedidoService]
		}).compile();

		service = module.get<ProductoPedidoService>(ProductoPedidoService);
	});

	it("should be defined", () => {
		expect(service).toBeDefined();
	});
});
