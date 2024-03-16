// /** @type { import('@storybook/react').Preview } */
// const preview = {
//   parameters: {
//     actions: { argTypesRegex: "^on[A-Z].*" },
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/,
//       },
//     },
//   },
// };

// export default preview;


import '../src/index.css';

/**
 * Configures Storybook to log the actions( onArchiveTask and onPinTask )
 * in the UI. Actions allows us to create callbacks that appear in the 
 * actions panel of the Storybook UI when clicked. So when we build a 
 * pin button, we’ll be able to determine if a button click is successful 
 * in the UI.
 * @date 3/15/2024 - 10:21:00 AM
 * 
 * @type { import('@storybook/react').Preview }
 */
const preview = {
  /**👇 
   * parameters are typically used to control the behavior of Storybook's 
   * features and addons. In our case, we're going to use them to configure 
   * how the actions (mocked callbacks) are handled.
   * @date 3/15/2024 - 10:15:08 AM
   *
   * @type {*}
   */
  parameters: {
    /** 
     * actions allows us to create callbacks that appear in the actions panel 
     * of the Storybook UI when clicked. So when we build a pin button, we’ll 
     * be able to determine if a button click is successful in the UI.
     * 
     * By default, if not overridden in Task.stories.js, the action will get logged
     * in the actions panel when it fires. The behavior from the real story does 
     * not get duplicated, but rather replaced.
     */
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
