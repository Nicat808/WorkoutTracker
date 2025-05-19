export const muscleNames = {
  LATS: {
    name: { scientificalName: "Latissimus dorsi", generalName: "Lats" },

    parts: {},
  },
  Shoulders: {
    name: { scientificalName: "Deltoid", generalName: "Shoulders" },
    parts: {
      FrontDelts: {
        name: {
          scientificalName: "Anterior Deltoid",
          generalName: "Front delts",
        },
      },
      SideDelts: {
        name: {
          scientificalName: "Lateral Deltoid",
          generalName: "Side delts",
        },
      },
      RearDelts: {
        name: {
          scientificalName: "Posterior Deltoid",
          generalName: "Rear delts",
        },
      },
    },
  },
  Chest: {
    name: { scientificalName: "Pectoralis major", generalName: "Chest" },
    parts: {
      UpperChest: {
        name: {
          scientificalName: "Clavicular head",
          generalName: "Upper chest",
        },
      },
      LowerChest: {
        name: { scientificalName: "Sternal head", generalName: "Lower chest" },
      },
    },
  },
  Biceps: {
    name: { scientificalName: "Biceps brachii", generalName: "Biceps" },
    parts: {
      ShortHead: {
        name: {
          scientificalName: "Biceps brachii",
          generalName: "Biceps short head (inner)",
        },
      },
      LongHead: {
        name: {
          scientificalName: "Biceps brachii",
          generalName: "Biceps long head (outer)",
        },
      },
    },
  },
  Triceps: {
    name: { scientificalName: "Triceps brachii", generalName: "Triceps" },
    parts: {
      LateralHead: {
        name: {
          scientificalName: "Triceps lateral head",
          generalName: "Triceps short head",
        },
      },
      LongHead: {
        name: {
          scientificalName: "Triceps long head",
          generalName: "Triceps long head",
        },
      },
      MedialHead: {
        name: {
          scientificalName: "Triceps medial head",
          generalName: "Triceps middle head",
        },
      },
    },
  },
};
