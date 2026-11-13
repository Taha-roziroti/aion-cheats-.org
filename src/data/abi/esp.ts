import type { AbiPage } from './types';

export const esp: AbiPage = {
    slug: "/arena-breakout-infinite-esp/",

    seo: {
      title: "Arena Breakout Infinite ESP | Player & Loot",
      description:
        "Explore Arena Breakout Infinite ESP, including player, AI, inventory and loot displays. See the available visual options and settings."
    },

    h1: "Arena Breakout Infinite ESP",

    introduction: `
      Information is everything when moving through the environments of
      Arena Breakout Infinite. Players can be positioned around corners,
      AI opponents can occupy nearby areas, and valuable equipment can be
      hidden inside containers throughout the map.

      Arena Breakout Infinite ESP brings different visual information
      together through a configurable overlay. Player details, AI displays,
      weapon information, health indicators, inventory details and loot
      values are all part of the available visual feature collection.

      Whether you're exploring player ESP, comparing the available loot
      displays, or adjusting the appearance of your overlay, the ABI ESP
      feature set gives you several configuration options to work with.
    `,

    sections: [

      {
        heading: "Player ESP and In-Game Information",

        paragraphs: [
          `
            Player ESP is one of the central features of the Arena Breakout
            Infinite visual interface. It includes multiple display options
            that can show different types of information associated with
            players around the map.
          `,
          `
            The available options include player names, distance, health,
            weapon type, team index, view direction, and inventory information.
            Additional visual elements such as boxes, skeletons, head circles,
            and snaplines provide different ways to arrange the on-screen
            information.
          `,
          `
            These options make the ESP interface more flexible than a single
            fixed marker. You can explore the individual visual elements and
            focus on the information that best suits your preferred layout.
          `
        ],

        bullets: [
          "Player names and distance",
          "Health bars and weapon type",
          "Team index and view direction",
          "Box and skeleton displays",
          "Head circles and snaplines",
          "Inventory lists and price information"
        ]
      },

      {
        heading: "Arena Breakout Infinite AI ESP",

        paragraphs: [
          `
            Arena Breakout Infinite features both player-controlled
            opponents and AI activity. Having separate visual options
            for these categories makes the information displayed by
            the interface easier to organize.
          `,
          `
            AI ESP is included alongside Player ESP in the visual options.
            This gives the overlay another way to represent activity
            throughout a match while keeping the player-related settings
            available independently.
          `
        ]
      },

      {
        heading: "Loot ESP, Inventory and Item Values",

        paragraphs: [
          `
            In Arena Breakout Infinite, the value of a raid is closely
            connected to what you find and collect. Containers, equipment,
            and valuable objects all contribute to the decisions made
            throughout a match.
          `,
          `
            Loot-related visual options provide inventory and price
            information that can be reviewed through the interface.
            The world visual settings also include player corpse and
            AI corpse ESP, with price, maximum-distance, and
            minimum-price controls.
          `,
          `
            This collection is particularly useful for players interested
            in the item-information side of the game. Rather than displaying
            only basic markers, the available options include details
            that help distinguish the information being shown.
          `
        ]
      },

      {
        heading: "Understanding ESP and Wallhack Features",

        paragraphs: [
          `
            ESP and wallhack are commonly used to describe visual overlays
            that display information about the game environment beyond
            the ordinary on-screen view.

            Within the Arena Breakout Infinite feature set, these terms
            refer to the visual tools covering player, AI, inventory,
            and loot information.
          `,
          `
            The interface combines several display types so that individual
            elements can be explored and configured independently.
            This makes the visual feature collection a central part
            of the overall ABI product.
          `
        ]
      },

      {
        heading: "Visual Customization and Configuration",

        paragraphs: [
          `
            A useful interface should make the information you care about
            easy to distinguish. The available visual options include
            different indicators and display elements that can be arranged
            around your preferred presentation.
          `,
          `
            Additional controls include font size, crosshair settings,
            combat mode, and configuration management. Configurations can
            be created, saved, loaded, and deleted, making it easier to
            organize different arrangements of the available settings.
          `
        ]
      },

      {
        heading: "Cloud DMA and System Requirements",

        paragraphs: [
          `
            The ABI product lists Cloud DMA as required for full
            functionality on supported builds. The associated setup
            uses a single-PC Hyper-V environment.
          `,
          `
            Windows 10 and Windows 11 configurations are listed, together
            with HVCI, Core Isolation, TPM, and Secure Boot requirements.
            Review the dedicated Cloud DMA guide for the virtualization,
            memory, and additional service requirements.
          `
        ]
      }

    ],

    faqs: [

      {
        question: "What does Arena Breakout Infinite ESP show?",

        answer: `
          The visual options include player and AI ESP, names, distance,
          health bars, weapon type, team index, view direction, boxes,
          skeletons, snaplines, head circles, and inventory information.
        `
      },

      {
        question: "Does Arena Breakout Infinite ESP include loot ESP?",

        answer: `
          Yes. Inventory price information and world visual options
          include corpse-value displays, maximum-distance settings,
          and minimum-price filters.
        `
      },

      {
        question: "Is wallhack included with ABI ESP?",

        answer: `
          Wallhack-related visual functionality is included in the
          product's visual feature collection, alongside player,
          AI, inventory, and loot displays.
        `
      },

      {
        question: "Can I customize the ESP interface?",

        answer: `
          Yes. Available customization options include font size,
          display elements, crosshair settings, combat mode, and
          configuration management.
        `
      },

      {
        question: "Does ABI ESP require Cloud DMA?",

        answer: `
          Cloud DMA is listed as required for full functionality on
          supported builds. Review its dedicated page for setup details.
        `
      }

    ],

    internalLinks: [
      {
        text: "View the complete Arena Breakout Infinite cheat",
        href: "/"
      },
      {
        text: "Explore the Arena Breakout Infinite aimbot",
        href: "/arena-breakout-infinite-aimbot/"
      },
      {
        text: "Review Cloud DMA requirements",
        href: "/cloud-dma-for-arena-breakout-infinite/"
      }
    ],

    cta: {
      heading: "Explore the ABI ESP Feature Set",
      text:
        "Take a closer look at player information, loot displays and visual customization options.",
      button: "View Available Features",
      href: "/"
    }
  };
