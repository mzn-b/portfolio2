import { Stack, Typography } from "@mui/material";
import { FC } from "react";

export type ParagraphType = {
  text: string;
  image?: string;
};

export const Section: FC<{ paragraphs: ParagraphType[]; title?: string }> = ({
  title,
  paragraphs,
}) => {
  return (
    <Stack spacing={1}>
      {title && <Typography variant="h2">{title}</Typography>}
      {paragraphs.map((paragraph) => {
        return <ParagraphWithImage paragraph={paragraph} />;
      })}
    </Stack>
  );
};

const ParagraphWithImage: FC<{ paragraph: ParagraphType }> = ({
  paragraph,
}) => {
  return <Typography variant="body1">{paragraph.text}</Typography>;
};
