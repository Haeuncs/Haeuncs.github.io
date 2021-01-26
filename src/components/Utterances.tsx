import React, { createRef, useLayoutEffect } from "react";

const src = "https://utteranc.es/client.js";

export interface IUtterancesProps {
  repo: string;
  theme: string;
}

const Utterances: React.FC<IUtterancesProps> = React.memo(({ repo, theme }) => {
  const containerRef = createRef<HTMLDivElement>();

  useLayoutEffect(() => {
    const utterances = document.createElement("script");

    const attributes = {
      src,
      repo,
      theme,
      "issue-term": "pathname",
      label: "세상에마상에댓글이달렸다니",
      crossOrigin: "anonymous",
      async: "true",
    };

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });

    containerRef.current!.appendChild(utterances);
  }, [repo]);

  return <div ref={containerRef} />;
});

Utterances.displayName = "Utterances";

export default Utterances;
