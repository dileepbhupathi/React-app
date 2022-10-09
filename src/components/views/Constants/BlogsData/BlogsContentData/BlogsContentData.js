export const BlogData = [
    {
    header2: "Server Components",
    description:
      "We announced an experimental demo of React Server Components (RSC) in December 2020. Since then we’ve been finishing up its dependencies in React 18, and working on changes inspired by experimental feedback.",
    description1:
      "In particular, we’re abandoning the idea of having forked I/O libraries (eg react-fetch), and instead adopting an async/await model for better compatibility. This doesn’t technically block RSC’s release because you can also use routers for data fetching. Another change is that we’re also moving away from the file extension approach in favor of annotating boundaries.",
    description2:
      "We’re working together with Vercel and Shopify to unify bundler support for shared semantics in both Webpack and Vite. Before launch, we want to make sure that the semantics of RSCs are the same across the whole React ecosystem. This is the major blocker for reaching stable.",
    hr: ".",
  },
  {
    header2: "Asset Loading",
    description:
      "Currently, assets like scripts, external styles, fonts, and images are typically preloaded and loaded using external systems. This can make it tricky to coordinate across new environments like streaming, server components, and more. We’re looking at adding APIs to preload and load deduplicated external assets through React APIs that work in all React environments.",
    description1:
      "We’re also looking at having these support Suspense so you can have images, CSS, and fonts that block display until they’re loaded but don’t block streaming and concurrent rendering. This can help avoid “popcorning“ as the visuals pop and layout shifts.",
    hr: ".",
  },

  {
    header2: "Static Server Rendering Optimizations",
    description:
      "Static Site Generation (SSG) and Incremental Static Regeneration (ISR) are great ways to get performance for cacheable pages, but we think we can add features to improve performance of dynamic Server Side Rendering (SSR) – especially when most but not all of the content is cacheable. We’re exploring ways to optimize server rendering utilizing compilation and static passes.",
    hr: ".",
  },
  {
    header2: "React Optimizing Compiler",
    description:
      "We gave an early preview of React Forget at React Conf 2021. It’s a compiler that automatically generates the equivalent of useMemo and useCallback calls to minimize the cost of re-rendering, while retaining React’s programming model.",
    description1:
      "Recently, we finished a rewrite of the compiler to make it more reliable and capable. This new architecture allows us to analyze and memoize more complex patterns such as the use of local mutations, and opens up many new compile-time optimization opportunities beyond just being on par with memoization hooks.",
    description2:
      "We’re also working on a playground for exploring many aspects of the compiler. While the goal of the playground is to make development of the compiler easier, we think that it will make it easier to try it out and build intuition for what the compiler does. It reveals various insights into how it works under the hood, and live renders the compiler’s outputs as you type. This will be shipped together with the compiler when it’s released.",
    hr: ".",
  },
  {
    header2: "Offscreen",
    description:
      "Today, if you want to hide and show a component, you have two options. One is to add or remove it from the tree completely. The problem with this approach is that the state of your UI is lost each time you unmount, including state stored in the DOM, like scroll position.",
    description1:
      "The other option is to keep the component mounted and toggle the appearance visually using CSS. This preserves the state of your UI, but it comes at a performance cost, because React must keep rendering the hidden component and all of its children whenever it receives new updates.",
    description2:
      "Offscreen introduces a third option: hide the UI visually, but deprioritize its content. The idea is similar in spirit to the content-visibility CSS property: when content is hidden, it doesn’t need to stay in sync with the rest of the UI. React can defer the rendering work until the rest of the app is idle, or until the content becomes visible again.",
    description3:
      "Offscreen is a low level capability that unlocks high level features. Similar to React’s other concurrent features like startTransition, in most cases you won’t interact with the Offscreen API directly, but instead via an opinionated framework to implement patterns like:",
    list: [
      "Instant transitions. Some routing frameworks already prefetch data to speed up subsequent navigations, like when hovering over a link. With Offscreen, they’ll also be able to prerender the next screen in the background.",
      "Reusable state. Similarly, when navigating between routes or tabs, you can use Offscreen to preserve the state of the previous screen so you can switch back and pick up where you left off.",
      "Virtualized list rendering. When displaying large lists of items, virtualized list frameworks will prerender more rows than are currently visible. You can use Offscreen to prerender the hidden rows at a lower priority than the visible items in the list.",
      "Backgrounded content. We’re also exploring a related feature for deprioritizing content in the background without hiding it, like when displaying a modal overlay.",
    ],
    hr: ".",
  },
  {
    header2: "Transition Tracing",
    description:
      "Currently, React has two profiling tools. The original Profiler shows an overview of all the commits in a profiling session. For each commit, it also shows all components that rendered and the amount of time it took for them to render. We also have a beta version of a Timeline Profiler introduced in React 18 that shows when components schedule updates and when React works on these updates. Both of these profilers help developers identify performance problems in their code.",
    description1:
      "We’ve realized that developers don’t find knowing about individual slow commits or components out of context that useful. It’s more useful to know about what actually causes the slow commits. And that developers want to be able to track specific interactions (eg a button click, an initial load, or a page navigation) to watch for performance regressions and to understand why an interaction was slow and how to fix it.",
    description2:
      "We previously tried to solve this issue by creating an Interaction Tracing API, but it had some fundamental design flaws that reduced the accuracy of tracking why an interaction was slow and sometimes resulted in interactions never ending. We ended up removing this API because of these issues.",
    description3:
      "We are working on a new version for the Interaction Tracing API (tentatively called Transition Tracing because it is initiated via startTransition) that solves these problems.",
    hr: ".",
  },
  {
    header2: "New React Docs",
    description:
      "Last year, we announced the beta version of the new React documentation website. The new learning materials teach Hooks first and has new diagrams, illustrations, as well as many interactive examples and challenges. We took a break from that work to focus on the React 18 release, but now that React 18 is out, we’re actively working to finish and ship the new documentation.",
    description1:
      "We are currently writing a detailed section about effects, as we’ve heard that is one of the more challenging topics for both new and experienced React users. Synchronizing with Effects is the first published page in the series, and there are more to come in the following weeks. When we first started writing a detailed section about effects, we’ve realized that many common effect patterns can be simplified by adding a new primitive to React. We’ve shared some initial thoughts on that in the useEvent RFC. It is currently in early research, and we are still iterating on the idea. We appreciate the community’s comments on the RFC so far, as well as the feedback and contributions to the ongoing documentation rewrite. We’d specifically like to thank Harish Kumar for submitting and reviewing many improvements to the new website implementation.",
    description2: "Thanks to Sophie Alpert for reviewing this blog post!",
  },
];
