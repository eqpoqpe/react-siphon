type MySecret = Array<{ herNumber: string }>;

export default {
  secrets: [
    {
      secretKey: "",

      // when call `useSiphon` we're got this body
      body: [] as Array<MySecret>
    }
  ]
};