import DropDownList, { DropDownList as Template } from "./DropDownList.js";

export default {
  title: "Basic/Dropdown", // 스토리 분류 및 컴포넌트 이름
  component: Template, // 테스트할 컴포넌트(ItemBox)
  parameters: {
    backgrounds: {
      default: { value: "light" },
    },
  },
  controls: { hideNoControlsWarning: true },
};

export const WithDropDownList = (args) => <DropDownList {...args} />;
WithDropDownList.args = {
  text1: "안녕하세요!",
  text2: "상품 리스트",
  text3: "북마크 리스트",
};
