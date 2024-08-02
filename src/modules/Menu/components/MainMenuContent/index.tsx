import React from "react";
import { useMenu } from "../../../../modules/Menu/components/CompactMenu/context";
import Title from "../../../../modules/Menu/components/Title";

interface Props {
  children?: React.ReactNode
}

const MainMenuContent: React.FC<Props> = ({ children }) => {
  const { view, getCurrentItem } = useMenu();
  const currentItem = getCurrentItem();
  return (
    <section
      className={`flex-auto w-7/12 bg-white sm:block ${
        view === "content" ? "" : "hidden"
      }`}
    >
      {currentItem?.label && <Title title={currentItem.label} />}
      {children}
    </section>
  );
};

export default MainMenuContent;
