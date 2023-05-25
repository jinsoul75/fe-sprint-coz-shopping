import DropDownList, { DropDownList as Template } from "./DropDownList.js";

export default {
  title: "Basic/ItemBox", // 스토리 분류 및 컴포넌트 이름
  component: Template, // 테스트할 컴포넌트(ItemBox)
  parameters: {
    backgrounds: {
      default: { value: "light" },
    },
  },
  controls: { hideNoControlsWarning: true },
};

export const CustomDropDownList = (args) => <DropDownList {...args} />
CustomDropDownList.args = {
  text1: "",
  text2: "",
  text3: "",
};