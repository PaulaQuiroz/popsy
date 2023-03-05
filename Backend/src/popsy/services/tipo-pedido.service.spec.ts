import { Test, TestingModule } from "@nestjs/testing";
import { TipoPedidoService } from "./tipo-pedido.service";

describe("TipoPedidoService", () => {
	let service: TipoPedidoService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [TipoPedidoService]
		}).compile();

		service = module.get<TipoPedidoService>(TipoPedidoService);
	});

	it("should be defined", () => {
		expect(service).toBeDefined();
	});
});
