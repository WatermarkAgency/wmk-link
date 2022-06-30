import { convertPhone } from "./logic";

const phoneNumbers = [
  `1-800-279-TALK`,
  `1-844-493-8255`,
  `1-800-950-6264`,
  `1-877-542-SAFE`,
  `(844) 99‑WINGS`,
  `(877) 770‑9912`,
  `303.771.5675`,
  `1.800.272.3900`
];

const converted = [
  `18002798255`,
  `18444938255`,
  `18009506264`,
  `18775427233`,
  `8449994647`,
  `8777709912`,
  `3037715675`,
  `18002723900`
];

it("phone numbers get converted to dial-able number strings", () => {
  phoneNumbers.forEach((p, i) => {
    expect(convertPhone(p)).toEqual(converted[i]);
  });
});
