/* eslint-disable react/no-unescaped-entities */
import { useLocale, useTranslations } from "next-intl";
import Code from "./Code";
import Pill from "./Pill";
import { useScramble } from "use-scramble";
import { delay, motion } from "framer-motion";
import { resumes } from "@/app/constants/resume";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Spotlight } from "@/components/ui/spotlight";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Header = () => {
  const locale = useLocale();
  const t = useTranslations("Hero");

  const openResume = () => {
    window.open(resumes[locale]);
  };
  const scrambleSpeed = 0.5;
  const { ref: jp, replay: replayJp } = useScramble({
    text: "バックエンド開発者",
    speed: scrambleSpeed,
  });
  const { ref: latin, replay: replayLatin } = useScramble({
    text: t("back"),
    speed: scrambleSpeed,
  });

  return (
    <section id="hero" className="mb-[120px] md:mb-[100px]">
      <div className="text-lg font-thin text-center uppercase text-nowrap font-martian text-comment-grey-darker lg:text-sm xs:text-xs sm:hidden">
        <span
          style={{ textOrientation: "upright", writingMode: "vertical-rl" }}
          ref={latin}
          onMouseOver={replayLatin}
          onFocus={replayLatin}
          className="absolute left-3 xl:-left-1 bottom-5 "
        ></span>
        <span
          style={{ textOrientation: "upright", writingMode: "vertical-rl" }}
          ref={jp}
          onMouseOver={replayJp}
          onFocus={replayJp}
          className="absolute right-3 xs:-right-2 lg:-right-1   top-14 tracking-[0.4rem]"
        ></span>
      </div>
      <motion.div
        initial="hidden"
        animate={"visible"}
        variants={container}
        className="relative flex flex-col items-center justify-center mb-3 text-center"
      >
        {/* <Spotlight
        className="-top-20 left-[600px] md:left-60 md:-top-20"
        fill="#808080"
      /> */}
        <h1 className="text-5xl sm:text-4xl xs:text-2xl xxs:text-xl font-bold flex items-center flex-col justify-center  leading-[84px] text-nowrap text-comment-grey w-fit">
          <motion.div
            variants={item}
            className="relative flex items-center gap-6 lg:gap-4 xs:gap-3"
          >
            {t("iAm")} <span className="gradient_hero">Jagadheesh M</span>
            <Pill src={"/images/profile_pic.png"} />
            <span className="absolute -right-6 xs:-right-3">,</span>
          </motion.div>

          <motion.div
            variants={item}
            className="flex items-center gap-6 lg:gap-4 xs:gap-3"
          >
            <span className="gradient_hero">{t("backend")}</span>
            <Pill /> {t("developer")}
          </motion.div>

          {locale != "pt-BR" && (
            <motion.div
              variants={item}
              className="flex items-center gap-6 lg:gap-4 xs:gap-3"
            >
              {t("basedIn")} <span className="gradient_hero">India</span>
              <Pill src={"/images/tucano.jpg"} />
            </motion.div>
          )}
        </h1>
        <motion.h6
          variants={item}
          className="px-9 text-comment-grey pt-3 pb-8 max-w-[53rem] lg:text-sm sm:text-xs xs:text-[10px] xxs:text-[8px]"
        >
          {t("hello")}
        </motion.h6>
        <motion.div
          variants={item}
          className="flex justify-center w-full items-center gap-4 mt-3 lg:text-sm sm:text-xs xs:text-[10px] xxs:text-[8px] md:flex-col xs:justify-center xs:gap-1"
        >
          <a
            href="#contact"
            className="h-full p-2 align-middle bg-white rounded-full shadow-inner dark:bg-black xxs:p-1 px-9 outline-1 outline-black/10 dark:outline-white/10 outline outline-offset-2 hover:opacity-80 w-fit md:w-full shadow-black/15 dark:shadow-white/20"
          >
            {t("idea")}
          </a>
          <div className="flex items-center gap-4 xs:gap-2">
            <a
              onClick={openResume}
              className="h-full p-2 transition-all rounded-md cursor-pointer hover:border-zinc-700 w-fit hover:scale-105"
            >
              {t("cv")}
            </a>
            <a
              href="https://github.com/jaga-live"
              target="_blank"
              className="group"
            >
              <span
                style={{ maskImage: `url("/images/github_cta.svg")` }}
                className="block size-[18px] xs:size-3 sm:size-4 bg-black  dark:bg-white svgMask group-hover:opacity-80 cursor-pointer"
              ></span>{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/jaga-live/"
              target="_blank"
              className="group"
            >
              <span
                style={{ maskImage: `url("/images/linkedin_cta.svg")` }}
                className="block size-[18px]  xs:size-3 sm:size-4 bg-black  dark:bg-white svgMask group-hover:opacity-80 cursor-pointer"
              ></span>{" "}
            </a>
          </div>
        </motion.div>
      </motion.div>
      {/* <motion.div className="size-full" initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.6}}>
          <Code />
        </motion.div> */}
    </section>
  );
};

export default Header;
