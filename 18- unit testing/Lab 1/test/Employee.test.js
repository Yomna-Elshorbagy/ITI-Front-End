const Employee = require("../js/Employee.js");

describe("Employee Class", () => {
  let emp;

  beforeEach(() => {
    emp = new Employee("yomna", 30, 4);
  });

  describe("constructor", () => {
    test("should set name, age, and yearsOfExp correctly", () => {
      expect(emp.name).toBe("yomna");
      expect(emp.age).toBe(30);
      expect(emp.yearsOfExp).toBe(4);
    });
  });

  describe("calculateSalary", () => {
    test("should return 5000 if yearsOfExp <= 5", () => {
      const salary = emp.calculateSalary();
      expect(salary).toBe(5000);
      expect(emp.salary).toBe(5000);
    });

    test("should return 9000 if yearsOfExp > 5", () => {
      const seniorEmp = new Employee("Sara", 40, 10);
      const salary = seniorEmp.calculateSalary();
      expect(salary).toBe(9000);
      expect(seniorEmp.salary).toBe(9000);
    });
  });

  describe("setSkills", () => {
    test("should set and return skills array", () => {
      const skills = emp.setSkills("JS", "Nodejs", "React");
      expect(skills).toEqual(["JS", "Nodejs", "React"]);
      expect(emp.skills).toHaveLength(3);
    });
  });

  describe("request time Off", () => {
    test("should deny request if validateDays returns false", () => {
      const mockHr = {
        validateDays: jest.fn(() => false),
        submitRequest: jest.fn(),
      };

      const result = emp.requestTimeOff(10, mockHr);

      expect(mockHr.validateDays).toHaveBeenCalledWith(10);
      expect(mockHr.submitRequest).not.toHaveBeenCalled();
      expect(result).toBe("Time off request denied: invalid number of days.");
    });

    test("should approve and submit request if validateDays returns true", () => {
      const mockHr = {
        validateDays: jest.fn(() => true),
        submitRequest: jest.fn(),
      };

      const result = emp.requestTimeOff(5, mockHr);

      expect(mockHr.validateDays).toHaveBeenCalledWith(5);
      expect(mockHr.submitRequest).toHaveBeenCalledWith("yomna", 5);
      expect(result).toBe("Time off request submitted successfully");
    });
  });
});
