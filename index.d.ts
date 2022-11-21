export declare type SiphonOptions = {
  success(res: any): void;

  // server status error
  fail(err: any): void;

  // network error or URL invalided
  invalid(err: any): void;
};
export declare function Siphon(options: SiphonOptions): void;