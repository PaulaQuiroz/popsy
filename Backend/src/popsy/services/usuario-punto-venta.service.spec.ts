import { Test, TestingModule } from "@nestjs/testing";
import { UsuarioPuntoVentaService } from "./usuario-punto-venta.service";

describe("UsuarioPuntoVentaService", () => {
	let service: UsuarioPuntoVentaService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [UsuarioPuntoVentaService]
		}).compile();

		service = module.get<UsuarioPuntoVentaService>(UsuarioPuntoVentaService);
	});

	it("should be defined", () => {
		expect(service).toBeDefined();
	});
});
