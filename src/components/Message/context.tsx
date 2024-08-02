import React, { useContext, createContext, FC } from "react";

type MessageContext = {
  message?: string;
};

interface Props {
  children?: React.ReactNode
}

export const initialMessage: MessageContext = {
  message: undefined,
};

const messageContext = createContext<MessageContext>(initialMessage);

export const useMessage = (): MessageContext =>
  useContext<MessageContext>(messageContext);

export const MessageProvider: FC<Props> = ({ children }): JSX.Element => (
  <messageContext.Provider value={initialMessage}>
    {children}
  </messageContext.Provider>
);
