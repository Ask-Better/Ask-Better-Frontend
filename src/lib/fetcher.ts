type ErrorHandler = (error: Error) => void;

class Fetcher {
  private url: URL | RequestInfo;
  private errorHandlers: { [key: number]: ErrorHandler };
  private init?: RequestInit;

  constructor(url: URL | RequestInfo, init?: RequestInit) {
    this.url = url;
    this.errorHandlers = {};
    this.init = init;
  }

  setErrHandler(statusCode: number, handler: ErrorHandler) {
    this.errorHandlers[statusCode] = handler;
    return this;
  }

  async sfetch(callback: (data: any) => void) {
    return fetch(this.url, this.init).then((response) => {
      if (response.ok) {
        return response.json().then((data) => callback(data));
      } else {
        const error = new Error(response.statusText);
        const errorHandler = this.errorHandlers[response.status];

        if (this.errorHandlers[response.status]) {
          errorHandler(error);
        } else {
          throw error;
        }
      }
    });
  }
}

export default Fetcher;
