//! work in progrss
type ErrorHandler = (resCode: number) => void;
type Fetcher = (
  input: URL | RequestInfo,
  init?: RequestInit,
  errHandler?: ErrorHandler
) => Promise<Response | undefined>;

const fetcher: Fetcher = async (
  input: URL | RequestInfo,
  init?: RequestInit,
  errHandler?: ErrorHandler
) => {
  const response = await fetch(input, init);

  // if the response is ok, return the response
  if (response.ok) return response;

  // otherwise, call the error handler and return undefined
  if (errHandler) errHandler(response.status);
  return undefined;
};
