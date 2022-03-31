import React from "react";

import { Text } from "react-native";

interface Props {
  data: {
    nome: string;
    likes: number;
  };
}

export function Friend({ data }: Props) {
  return (
    <Text>
      {data.nome} - Likes {data.likes}
    </Text>
  );
}
