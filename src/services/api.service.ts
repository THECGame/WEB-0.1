import { APIRequest } from './api.request';
import Axios from 'axios';

export class APIService {
  private static instance: APIService;

  private constructor() { }

  public httpGet<T>(uri: string): APIRequest<T> {
    return new APIRequest<T>('GET', uri, this);
  }

  public httpPost<T>(uri: string): APIRequest<T> {
    return new APIRequest<T>('POST', uri, this);
  }

  protected async getHeaders<T>(
    apiRequest: APIRequest<T>,
  ): Promise<{}> {
    const headers = {
      'Content-Type': 'application/json',
    };

    apiRequest.getHeaders().forEach((value, key) => {
      //@ts-ignore
      headers[key] = value;
    });

    return headers;
  }

  public async doApiCall<T>(
    apiRequest: APIRequest<T>,
  ): Promise<{ body: any; headers: Headers; status: number }> {
    const url = this.getURL(apiRequest) as any;
    console.log("url he", url);
    const method = apiRequest.getMethod() as any;
    const body = apiRequest.getBody();
    const headers = (await this.getHeaders(apiRequest)) as any;
    return await Axios({
      method: method,
      url: url,
      headers: headers,
      data: body,
    })
      .then(async (response: any) => {
        console.log({ response });
        const body = await response.data;
        const headers = response.headers;
        const status = response.status;
        return { body, headers, status };
      })
      .catch(async (e: any) => {
        console.log('Error on api call, url: ' + url + ' Error: ' + e);
        //ResultCode
        return Promise.reject(e);
      });
  }

  protected getURL<T>(apiRequest: APIRequest<T>) {
    let url = apiRequest.getURL();
    const params = apiRequest.getQueryParams();
    if (params) {
      url = url + '?' + params;
    }

    return url;
  }

  public static getInstance() {
    if (!this.instance) {
      this.instance = new APIService();
    }

    return this.instance;
  }

}