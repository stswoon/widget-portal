import { FC, memo } from "react";
import { Box, Container } from "@mui/material";
import { marked } from "marked";

interface HtmlWidgetProps {
  content: string;
}

export const HtmlWidget: FC<HtmlWidgetProps> = memo(({ content }) => {
  const contentHtml = marked.parse(content) as string;
  return (
    <Container maxWidth="xl" className="taHtmlWidget">
      <Box
        dangerouslySetInnerHTML={{ __html: contentHtml }}
        border={1}
        borderRadius={5}
        padding={4}
      />
    </Container>
  );
});

HtmlWidget.displayName = "HtmlWidget";
