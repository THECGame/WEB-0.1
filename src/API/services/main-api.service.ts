import { APIConfigService } from '../APIConfigService';
import { APIURLs } from '../consts/APIURLs';
import { APIService } from '../../services/api.service';
import { SliderModel } from '../models/SliderModel';
import { MainApiMockService } from './mock/main-api.mock.service';

export class ProfileApiService {

    static exampleGetData(): Promise<SliderModel> {
        
        if (APIConfigService.getIsMock()) {
            return MainApiMockService.exampleGetData();
        }

        const url = APIURLs.BASE_URL;

        return APIService.getInstance()
            .httpGet<SliderModel>(url)
            .execute()
            .then(response => response.getContent());
    }

}
