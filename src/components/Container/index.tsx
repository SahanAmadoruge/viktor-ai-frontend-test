import type { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Container: FC<Props> = ({ children }) => {
  return <div className="max-w-[1120px] m-auto py-10">{children}</div>;
};

export default Container;
