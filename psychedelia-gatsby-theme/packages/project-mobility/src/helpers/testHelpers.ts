import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

// helper function for targeting classes
export const findByClass = (wrapper, className) => {
  return wrapper.find(`.${className}`);
};

// React 16 Enzyme Adapter Setup
Enzyme.configure({ adapter: new Adapter() });
export { shallow, mount, render };
export default Enzyme;
