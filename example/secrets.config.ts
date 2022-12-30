type MySecret = Array<{ herNumber: string }>;

export default {
  secrets: [
    {
      secretKey: "HerNumber",

      // when call `useSiphon` we're got this body
      body: [] as Array<MySecret>
    }
  ]
};