export class ResponseModel<T> {
    
    constructor(private content: T) {
    }

    getContent(): T {
        return this.content;
    }
  
}