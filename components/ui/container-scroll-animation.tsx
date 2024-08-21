"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { useIsMobile } from "@/app/hooks/useIsMobile";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const isMobile = useIsMobile();

  const scaleDimensions = () => {
    return isMobile ? [1, 1] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="xs:h-[40rem] md:h-[80rem] flex items-center justify-center relative md:p-20"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-20 w-full relative"
        style={
          !isMobile
            ? {
                perspective: "1000px",
              }
            : {}
        }
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center py-20 md:py-0"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  const [isMobile] = React.useState(false);

  return (
    <motion.div
      style={
        !isMobile
          ? {
              rotateX: rotate,
              scale,
            }
          : { rotateX: 0, scale: 1 }
      }
      className="w-full -mt-20 lg:-mt-12 mx-auto h-full lg:h-[40rem]"
    >
      <div className="h-full w-full overflow-hidden">{children}</div>
    </motion.div>
  );
};
