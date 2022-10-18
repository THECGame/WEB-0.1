import { ResponseModel } from './response.model';
import { APIService } from './api.service';
import { APIURLs } from '../API/consts/APIURLs';
import { LoadingSwither } from '../utils/loading-switcher';

export type HTTPMethod = 'GET' | 'POST';

export class APIRequest<T> {
  // tslint:disable-next-line:no-any
  private body: any = null;
  private queryParameters = new Map<string, string>();
  private headers = new Map<string, string>();
  private useToken = true;

  public constructor(
    private method: HTTPMethod,
    private uri: string,
    private apiService: APIService,
  ) { }

  public setBody<U>(body: U): this {
    this.body = body;

    return this;
  }

  public addHeader(key: string, value: string) {
    this.headers.set(key, value);

    return this;
  }

  public getHeaders(): Map<string, string> {
    return this.headers;
  }

  public setUseToken(useToken = false): this {
    this.useToken = useToken;

    return this;
  }


  public setQueryParameters(queryParameters: Map<string, string>): this {
    this.queryParameters = queryParameters;

    return this;
  }

  public execute(): Promise<ResponseModel<T>> {
    LoadingSwither.ShowLoading();
    return this.apiService.doApiCall(this).then(response => {
      const responseData = response.body;
      LoadingSwither.HidehowLoading();
      return new ResponseModel(
        responseData,
      );
    });
  }

  public getURL(): string {
    return APIURLs.BASE_URL + this.uri;
  }

  public getUseToken(): boolean {
    return this.useToken;
  }

  public getQueryParams(): string {
    const queries: string[] = [];
    this.queryParameters.forEach((value, key) => {
      queries.push(key + '=' + value);
    });

    return queries.join('&');
  }

  public getMethod(): string {
    return this.method;
  }

  public getBody(): any {
    return this.body;
  }
}