import { Test, TestingModule } from "@nestjs/testing";
import { FactorConversionController } from "./factor-conversion.controller";

describe("FactorConversionController", () => {
	let controller: FactorConversionController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [FactorConversionController]
		}).compile();

		controller = module.get<FactorConversionController>(FactorConversionController);
	});

	it("should be defined", () => {
		expect(controller).toBeDefined();
	});
});
