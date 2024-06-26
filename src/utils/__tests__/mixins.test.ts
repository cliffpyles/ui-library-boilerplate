import { parseMetricToNum } from "../mixins";

afterAll(() => {
  vi.clearAllMocks();
});

describe("Mixins parseMetricToNum", () => {
  global.console = {
    warn: vi.fn(),
  };

  test('converts "12px" to 12', () => {
    const warn = vi.spyOn(global.console, "warn");
    const number = parseMetricToNum("12px");

    expect(number).toBe(12);
    expect(warn).not.toHaveBeenCalled();
  });

  test('converts "12.5px" to 12', () => {
    const number = parseMetricToNum("12.5px");

    expect(number).toBe(12.5);
  });

  test('converts "12px 20px" to 12 & warns about usage', () => {
    const warn = vi.spyOn(global.console, "warn");
    const number = parseMetricToNum("12px 20px");

    expect(number).toBe(12);
    expect(warn).toHaveBeenCalledWith('Invalid single measurement value: "12px 20px"');
  });
});
