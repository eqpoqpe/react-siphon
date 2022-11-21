export declare type SiphonOptions = {
  success(res: any): void;
  fail(err: any): void;
  invalid(err: any): void;
};
export declare function Siphon(options: SiphonOptions): void;