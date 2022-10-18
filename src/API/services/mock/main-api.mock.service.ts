import { SliderModel } from "../../models/SliderModel";

export class MainApiMockService {
    static exampleGetData(): Promise<SliderModel> {
        const mockResponse: SliderModel = {};

        return new Promise<SliderModel>(resolve => {
            setTimeout(() => {
                resolve(mockResponse);
            }, 1000);
        });
    }
}
