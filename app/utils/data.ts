const fga = {
  id: 'fga',
  name: 'Functional Gait Assessment',
  sections: [
    {
      type: 'question:single-choice',
      text: 'GAIT LEVEL SURFACE',
      sections: [
        {
          type: 'answer',
          text: 'Normal—Walks 6 m (20 ft) in less than 5.5 seconds, no assistive\ndevices, good speed, no evidence for imbalance, normal gait\npattern, deviates no more than 15.24 cm (6 in) outside of the\n30.48-cm (12-in) walkway width.',
          value_int: 3,
        },
        {
          type: 'answer',
          text: 'Mild impairment—Walks 6 m (20 ft) in less than 7 seconds but\ngreater than 5.5 seconds, uses assistive device, slower speed,\nmild gait deviations, or deviates 15.24–25.4 cm (6–10 in)\noutside of the 30.48-cm (12-in) walkway width.',
          value_int: 2,
        },
        {
          type: 'answer',
          text: 'Moderate impairment—Walks 6 m (20 ft), slow speed, abnormal\ngait pattern, evidence for imbalance, or deviates 25.4–\n38.1 cm (10–15 in) outside of the 30.48-cm (12-in) walkway\nwidth. Requires more than 7 seconds to ambulate 6 m (20 ft).',
          value_int: 1,
        },
        {
          type: 'answer',
          text: 'Severe impairment—Cannot walk 6 m (20 ft) without assistance,\nsevere gait deviations or imbalance, deviates greater than 38.1\ncm (15 in) outside of the 30.48-cm (12-in) walkway width or\nreaches and touches the wall.',
          value_int: 0,
        },
      ],
    },
    {
      type: 'question:single-choice',
      text: 'CHANGE IN GAIT SPEED',
      sections: [
        {
          type: 'answer',
          text: 'Normal—Able to smoothly change walking speed without loss of\nbalance or gait deviation. Shows a significant difference in\nwalking speeds between normal, fast, and slow speeds. Deviates\nno more than 15.24 cm (6 in) outside of the 30.48-cm\n(12-in) walkway width.',
          value_int: 3,
        },
        {
          type: 'answer',
          text: 'Mild impairment—Is able to change speed but demonstrates\nmild gait deviations, deviates 15.24–25.4 cm (6–10 in) outside\nof the 30.48-cm (12-in) walkway width, or no gait deviations but\nunable to achieve a significant change in velocity, or uses an\nassistive device.',
          value_int: 2,
        },
        {
          type: 'answer',
          text: 'Moderate impairment—Makes only minor adjustments to walking\nspeed, or accomplishes a change in speed with significant\ngait deviations, deviates 25.4–38.1 cm (10–15 in) outside the\n30.48-cm (12-in) walkway width, or changes speed but loses\nbalance but is able to recover and continue walking.',
          value_int: 1,
        },
        {
          type: 'answer',
          text: 'Severe impairment—Cannot change speeds, deviates greater\nthan 38.1 cm (15 in) outside 30.48-cm (12-in) walkway width,\nor loses balance and has to reach for wall or be caught.',
          value_int: 0,
        },
      ],
    },
    {
      type: 'question:single-choice',
      text: 'GAIT WITH HORIZONTAL HEAD TURNS',
      sections: [
        {
          type: 'answer',
          text: 'Normal—Performs head turns smoothly with no change in gait.\nDeviates no more than 15.24 cm (6 in) outside 30.48-cm (12-in)\nwalkway width.',
          value_int: 3,
        },
        {
          type: 'answer',
          text: 'Mild impairment—Performs head turns smoothly with slight\nchange in gait velocity (eg, minor disruption to smooth gait\npath), deviates 15.24–25.4 cm (6–10 in) outside 30.48-cm\n(12-in) walkway width, or uses an assistive device.',
          value_int: 2,
        },
        {
          type: 'answer',
          text: 'Moderate impairment—Performs head turns with moderate\nchange in gait velocity, slows down, deviates 25.4–38.1 cm\n(10–15 in) outside 30.48-cm (12-in) walkway width but recovers,\ncan continue to walk.',
          value_int: 1,
        },
        {
          type: 'answer',
          text: 'Severe impairment—Performs task with severe disruption of gait\n(eg, staggers 38.1 cm [15 in] outside 30.48-cm (12-in) walkway\nwidth, loses balance, stops, or reaches for wall).',
          value_int: 0,
        },
      ],
    },
    {
      type: 'question:single-choice',
      text: 'GAIT WITH VERTICAL HEAD TURNS',
      sections: [
        {
          type: 'answer',
          text: 'Normal—Performs head turns with no change in gait. Deviates\nno more than 15.24 cm (6 in) outside 30.48-cm (12-in) walkway\nwidth.',
          value_int: 3,
        },
        {
          type: 'answer',
          text: 'Mild impairment—Performs task with slight change in gait\nvelocity (eg, minor disruption to smooth gait path), deviates\n15.24–25.4 cm (6–10 in) outside 30.48-cm (12-in) walkway\nwidth or uses assistive device.',
          value_int: 2,
        },
        {
          type: 'answer',
          text: 'Moderate impairment—Performs task with moderate change in\ngait velocity, slows down, deviates 25.4–38.1 cm (10–15 in)\noutside 30.48-cm (12-in) walkway width but recovers, can\ncontinue to walk.',
          value_int: 1,
        },
        {
          type: 'answer',
          text: 'Severe impairment—Performs task with severe disruption of gait\n(eg, staggers 38.1 cm [15 in] outside 30.48-cm (12-in) walkway\nwidth, loses balance, stops, reaches for wall).',
          value_int: 0,
        },
      ],
    },
    {
      type: 'question:single-choice',
      text: 'GAIT AND PIVOT TURN',
      sections: [
        // {
        //   type: 'answer',
        //   text: 'Grading: Mark the highest category that applies.',
        //   value_int: null,
        // },
        {
          type: 'answer',
          text: 'Normal—Pivot turns safely within 3 seconds and stops quickly\nwith no loss of balance.',
          value_int: 3,
        },
        {
          type: 'answer',
          text: 'Mild impairment—Pivot turns safely in _3 seconds and stops\nwith no loss of balance, or pivot turns safely within 3 seconds\nand stops with mild imbalance, requires small steps to catch\nbalance.',
          value_int: 2,
        },
        {
          type: 'answer',
          text: 'Moderate impairment—Turns slowly, requires verbal cueing, or\nrequires several small steps to catch balance following turn and\nstop.',
          value_int: 1,
        },
        {
          type: 'answer',
          text: 'Severe impairment—Cannot turn safely, requires assistance to\nturn and stop.',
          value_int: 0,
        },
      ],
    },
    {
      type: 'question:single-choice',
      text: 'STEP OVER OBSTACLE',
      sections: [
        {
          type: 'answer',
          text: 'Normal—Is able to step over 2 stacked shoe boxes taped\ntogether (22.86 cm [9 in] total height) without changing gait\nspeed; no evidence of imbalance.',
          value_int: 3,
        },
        {
          type: 'answer',
          text: 'Mild impairment—Is able to step over one shoe box (11.43 cm\n[4.5 in] total height) without changing gait speed; no evidence\nof imbalance.',
          value_int: 2,
        },
        {
          type: 'answer',
          text: 'Moderate impairment—Is able to step over one shoe box (11.43\ncm [4.5 in] total height) but must slow down and adjust steps to\nclear box safely. May require verbal cueing.',
          value_int: 1,
        },
        {
          type: 'answer',
          text: 'Severe impairment—Cannot perform without assistance.\n(Continued)',
          value_int: 0,
        },
      ],
    },
    {
      type: 'question:single-choice',
      text: 'GAIT WITH NARROW BASE OF SUPPORT',
      sections: [
        {
          type: 'answer',
          text: 'Normal—Is able to ambulate for 10 steps heel to toe with no\nstaggering.',
          value_int: 3,
        },
        {
          type: 'answer',
          text: 'Mild impairment—Ambulates 7–9 steps.',
          value_int: 2,
        },
        {
          type: 'answer',
          text: 'Moderate impairment—Ambulates 4–7 steps.',
          value_int: 1,
        },
        {
          type: 'answer',
          text: 'Severe impairment—Ambulates less than 4 steps heel to toe or\ncannot perform without assistance.',
          value_int: 0,
        },
      ],
    },
    {
      type: 'question:single-choice',
      text: 'GAIT WITH EYES CLOSED',
      sections: [
        {
          type: 'answer',
          text: 'Normal—Walks 6 m (20 ft), no assistive devices, good speed,\nno evidence of imbalance, normal gait pattern, deviates no more\nthan 15.24 cm (6 in) outside 30.48-cm (12-in) walkway width.\nAmbulates 6 m (20 ft) in less than 7 seconds.',
          value_int: 3,
        },
        {
          type: 'answer',
          text: 'Mild impairment—Walks 6 m (20 ft), uses assistive device,\nslower speed, mild gait deviations, deviates 15.24–25.4 cm\n(6–10 in) outside 30.48-cm (12-in) walkway width. Ambulates\n6 m (20 ft) in less than 9 seconds but greater than 7 seconds.',
          value_int: 2,
        },
        {
          type: 'answer',
          text: 'Moderate impairment—Walks 6 m (20 ft), slow speed, abnormal\ngait pattern, evidence for imbalance, deviates 25.4–38.1\ncm (10–15 in) outside 30.48-cm (12-in) walkway width.\nRequires more than 9 seconds to ambulate 6 m (20 ft).',
          value_int: 1,
        },
        {
          type: 'answer',
          text: 'Severe impairment—Cannot walk 6 m (20 ft) without assistance,\nsevere gait deviations or imbalance, deviates greater than 38.1\ncm (15 in) outside 30.48-cm (12-in) walkway width or will not\nattempt task.',
          value_int: 0,
        },
      ],
    },
    {
      type: 'question:single-choice',
      text: 'AMBULATING BACKWARDS',
      sections: [
        {
          type: 'answer',
          text: 'Normal—Walks 6 m (20 ft), no assistive devices, good speed,\nno evidence for imbalance, normal gait pattern, deviates no\nmore than 15.24 cm (6 in) outside 30.48-cm (12-in) walkway\nwidth.',
          value_int: 3,
        },
        {
          type: 'answer',
          text: 'Mild impairment—Walks 6 m (20 ft), uses assistive device,\nslower speed, mild gait deviations, deviates 15.24–25.4 cm\n(6–10 in) outside 30.48-cm (12-in) walkway width.',
          value_int: 2,
        },
        {
          type: 'answer',
          text: 'Moderate impairment—Walks 6 m (20 ft), slow speed, abnormal\ngait pattern, evidence for imbalance, deviates 25.4–38.1\ncm (10–15 in) outside 30.48-cm (12-in) walkway width.',
          value_int: 1,
        },
        {
          type: 'answer',
          text: 'Severe impairment—Cannot walk 6 m (20 ft) without assistance,\nsevere gait deviations or imbalance, deviates greater than 38.1\ncm (15 in) outside 30.48-cm (12-in) walkway width or will not\nattempt task.',
          value_int: 0,
        },
      ],
    },
    {
      type: 'question:single-choice',
      text: 'STEPS',
      sections: [
        {
          type: 'answer',
          text: 'Normal—Alternating feet, no rail.',
          value_int: 3,
        },
        {
          type: 'answer',
          text: 'Mild impairment—Alternating feet, must use rail.',
          value_int: 2,
        },
        {
          type: 'answer',
          text: 'Moderate impairment—Two feet to a stair; must use rail.',
          value_int: 1,
        },
        {
          type: 'answer',
          text: 'Severe impairment—Cannot do safely.',
          value_int: 0,
        },
      ],
    },
  ],
};
export const templates = [fga];
