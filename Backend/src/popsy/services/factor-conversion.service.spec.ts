import { Test, TestingModule } from "@nestjs/testing";
import { FactorConversionService } from "./factor-conversion.service";

describe("FactorConversionService", () => {
	let service: FactorConversionService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [FactorConversionService]
		}).compile();

		service = module.get<FactorConversionService>(FactorConversionService);
	});

	it("should be defined", () => {
		expect(service).toBeDefined();
	});
});
