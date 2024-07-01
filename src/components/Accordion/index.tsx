import React, { useState, useRef, useEffect } from "react";
import "./styles.less"; // 引入样式文件

interface AccordionProps {
  placement: "left" | "right" | "top" | "bottom";
  children: React.ReactNode;
  isOpen: boolean;
}

const Accordion: React.FC<AccordionProps> = ({
  placement,
  isOpen,
  children,
}) => {
  const [contentSize, setContentSize] = useState<number | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      if (placement === "left" || placement === "right") {
        setContentSize(contentRef.current.offsetWidth);
      } else {
        setContentSize(contentRef.current.offsetHeight);
      }
    }
  }, [isOpen, placement]);

  return (
    <div className={`accordion accordion-${placement}`}>
      <div
        className={`accordion-content ${isOpen ? "open" : ""}`}
        ref={contentRef}
        style={{
          maxWidth:
            placement === "left" || placement === "right"
              ? isOpen
                ? `${contentSize}px`
                : "0"
              : "none",
          maxHeight:
            placement === "top" || placement === "bottom"
              ? isOpen
                ? `${contentSize}px`
                : "0"
              : "none",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
