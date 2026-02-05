"use client";

import ScrollReveal, {
  StaggerContainer,
  StaggerItem,
} from "../components/ScrollReveal";

interface Tweet {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  url: string;
  content: React.ReactNode;
}

const tweets: Tweet[] = [
  {
    id: "jacob",
    name: "Jacob Colling",
    handle: "@JacobColling",
    avatar: "https://browserbase.com/assets/profile_pictures/jacobcolling.jpg",
    url: "https://x.com/JacobColling/status/1876736737969389995",
    content: "Loving 🅱️ so far. Awesome product!",
  },
  {
    id: "mykhailo",
    name: "Mykhailo Sorochuk",
    handle: "@sir4K_zen",
    avatar: "https://browserbase.com/assets/profile_pictures/sir4K_zen.jpg",
    url: "https://x.com/sir4K_zen/status/1930668405033472242",
    content: (
      <>
        Looks solid! Love the flexibility of{" "}
        <a
          href="https://x.com/Stagehanddev"
          target="_blank"
          rel="noopener noreferrer"
        >
          @stagehanddev
        </a>
        . Makes automation so much easier.
      </>
    ),
  },
  {
    id: "lyes",
    name: "Lyes",
    handle: "@Chikor_Zi",
    avatar: "https://browserbase.com/assets/profile_pictures/chikor.jpg",
    url: "https://x.com/Chikor_Zi/status/1928922480028139659",
    content: (
      <>
        <a
          href="https://x.com/browserbase"
          target="_blank"
          rel="noopener noreferrer"
        >
          @browserbase
        </a>{" "}
        has a goated UI ngl. their team cooks
      </>
    ),
  },
  {
    id: "vinicius",
    name: "Vinicius Dallacqua",
    handle: "@viniciusdallacq",
    avatar:
      "https://browserbase.com/assets/profile_pictures/viniciusdallacqua.jpg",
    url: "https://x.com/viniciusdallacq/status/1899820451557249269",
    content: (
      <>
        <a
          href="https://x.com/browserbase"
          target="_blank"
          rel="noopener noreferrer"
        >
          @browserbase
        </a>{" "}
        and{" "}
        <a
          href="https://x.com/Stagehanddev"
          target="_blank"
          rel="noopener noreferrer"
        >
          @stagehanddev
        </a>{" "}
        are really good. Natural integration with Playwright is just 🔥
      </>
    ),
  },
  {
    id: "dux",
    name: "Dux",
    handle: "@Duxxcoda",
    avatar: "https://browserbase.com/assets/profile_pictures/Duxxcoda.jpg",
    url: "https://x.com/Duxxcoda/status/1923118525524156453",
    content: "oh wow this is cool, imma plug this in shortly",
  },
  {
    id: "yahia",
    name: "yahiabakour",
    handle: "@mynameisyahia",
    avatar: "https://browserbase.com/assets/profile_pictures/mynameisyahia.jpg",
    url: "https://x.com/mynameisyahia/status/1822673507899019617",
    content: (
      <>
        So happy to finally cancel{" "}
        <a
          href="https://x.com/browserless"
          target="_blank"
          rel="noopener noreferrer"
        >
          @browserless
        </a>{" "}
        and move to{" "}
        <a
          href="https://x.com/browserbase"
          target="_blank"
          rel="noopener noreferrer"
        >
          @browserbase
        </a>
        <br />
        <br />
        Saved $160 monthly just like that
      </>
    ),
  },
  {
    id: "james",
    name: "James Cham",
    handle: "@jamescham",
    avatar: "https://browserbase.com/assets/profile_pictures/jamescham.jpg",
    url: "https://x.com/jamescham/status/1819496742506975377",
    content: (
      <>
        Not an investor but the right answer to your question is often{" "}
        <a
          href="https://x.com/browserbase"
          target="_blank"
          rel="noopener noreferrer"
        >
          @browserbase
        </a>
        . (
        <a
          href="https://x.com/theamberyang"
          target="_blank"
          rel="noopener noreferrer"
        >
          @theamberyang
        </a>{" "}
        was right!)
      </>
    ),
  },
  {
    id: "idan",
    name: "Idan",
    handle: "@IdanP70",
    avatar: "https://browserbase.com/assets/profile_pictures/IdanP70.jpg",
    url: "https://x.com/IdanP70/status/1928216092586991695",
    content: "You are awesome guys, you are building something big here 🚀🚀🚀",
  },
  {
    id: "nico",
    name: "Nico Albanese",
    handle: "@nicoalbanese10",
    avatar:
      "https://browserbase.com/assets/profile_pictures/nicoalbanese10.jpg",
    url: "https://x.com/nicoalbanese10/status/1846289014036267376",
    content: (
      <>
        give your AI SDK applications access to the web with{" "}
        <a
          href="https://x.com/browserbase"
          target="_blank"
          rel="noopener noreferrer"
        >
          @browserbase
        </a>
        <br />
        this is incredible - can&apos;t wait to play around with this
      </>
    ),
  },
  {
    id: "marcus",
    name: "Marcus for Peace",
    handle: "@MarcusForPeace",
    avatar:
      "https://browserbase.com/assets/profile_pictures/marcusforpeace.jpg",
    url: "https://x.com/MarcusForPeace/status/1814470271958692235",
    content: (
      <>
        If you are building in consumer AI, you better be using{" "}
        <a
          href="https://x.com/browserbase"
          target="_blank"
          rel="noopener noreferrer"
        >
          @browserbase
        </a>
        .
      </>
    ),
  },
  {
    id: "youness",
    name: "youness",
    handle: "@blanklob",
    avatar: "https://browserbase.com/assets/profile_pictures/youness.jpg",
    url: "https://x.com/blanklob/status/1883855834809307529",
    content: (
      <>
        i tried a{" "}
        <a
          href="https://x.com/browserbase"
          target="_blank"
          rel="noopener noreferrer"
        >
          @browserbase
        </a>{" "}
        script with shopify admin this weekend for some day to day ops like
        creating discounts and adding theme sections, it&apos;s phenomenal.
      </>
    ),
  },
  {
    id: "tejas",
    name: "Tejas Kumar",
    handle: "@TejasKumar_",
    avatar: "https://browserbase.com/assets/profile_pictures/TejasKumar_.jpg",
    url: "https://x.com/TejasKumar_/status/1825954052741673359",
    content: (
      <>
        I am very bullish on{" "}
        <a
          href="https://x.com/browserbase"
          target="_blank"
          rel="noopener noreferrer"
        >
          @browserbase
        </a>
        .
      </>
    ),
  },
  {
    id: "aaron",
    name: "Aaron Francis",
    handle: "@aarondfrancis",
    avatar: "https://browserbase.com/assets/profile_pictures/aarondfrancis.jpg",
    url: "https://x.com/aarondfrancis/status/1927507887653339513",
    content:
      "I just started using this and it's unreal. Combined with live debug urls, sheesh",
  },
  {
    id: "theemao",
    name: "TheAICoder",
    handle: "@theemao",
    avatar: "https://browserbase.com/assets/profile_pictures/theemao.jpg",
    url: "https://x.com/theemao/status/1926823171610575316",
    content:
      "oof DIY scraping setups are rough. moving to browserbase makes total sense.",
  },
  {
    id: "vivek",
    name: "Vivek Nayyar",
    handle: "@VivekNayyar09",
    avatar: "https://browserbase.com/assets/profile_pictures/VivekNayyar09.jpg",
    url: "https://x.com/VivekNayyar09/status/1925842835690971169",
    content: "This is really cool",
  },
  {
    id: "samuel",
    name: "Samuel Denty",
    handle: "@samueldenty",
    avatar: "https://browserbase.com/assets/profile_pictures/samueldenty.jpg",
    url: "https://x.com/samueldenty/status/1923520723777355872",
    content: (
      <>
        <a
          href="https://x.com/browserbase"
          target="_blank"
          rel="noopener noreferrer"
        >
          @browserbase
        </a>{" "}
        is cool
      </>
    ),
  },
];

export default function TweetWallSection() {
  return (
    <section className="tweet-wall" id="developer-love">
      <ScrollReveal className="tweet-wall__title-wrapper" y={20}>
        <h2 className="tweet-wall__title">Developer love</h2>
      </ScrollReveal>
      <StaggerContainer className="tweet-wall__columns" staggerDelay={0.03}>
        {tweets.map((tweet) => (
          <StaggerItem key={tweet.id}>
            <article className="tweet-wall__tweet">
              <a
                href={tweet.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Read more on Twitter"
                className="tweet-wall__avatar-link"
              >
                <img
                  src={tweet.avatar}
                  alt={`${tweet.name} profile`}
                  width={48}
                  height={48}
                />
              </a>
              <a
                href={tweet.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Read more on Twitter"
                className="tweet-wall__author"
              >
                <span>{tweet.name}</span>
                <span>{tweet.handle}</span>
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  aria-hidden="true"
                >
                  <title>X logo</title>
                  <path
                    d="M11.4393 9.31641L17.0702 2.771H15.7358L10.8466 8.45429L6.94151 2.771H2.4375L8.3427 11.3651L2.4375 18.229H3.77191L8.93511 12.2273L13.0591 18.229H17.5631L11.439 9.31641H11.4393ZM9.61165 11.4409L9.01333 10.5851L4.25271 3.77552H6.30229L10.1442 9.27105L10.7425 10.1268L15.7365 17.2702H13.6869L9.61165 11.4412V11.4409Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <p>{tweet.content}</p>
            </article>
          </StaggerItem>
        ))}
        <div className="tweet-wall__gradient" />
      </StaggerContainer>
    </section>
  );
}
