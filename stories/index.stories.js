import { storiesOf, html, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import { DileRoundedButton } from '../dile-rounded-button.js';
import '../dile-rounded-button.js';

import readme from '../README.md';

storiesOf('dile-rounded-button', module)
  .addDecorator(withKnobs)
  .add(
    'Simple button',
    () => html`
      <dile-rounded-button>Click Here</dile-rounded-button>
      `,
  )
  .add(
    'Customized button',
    () => html`
      <style>
        .customized {
          --dile-rounded-button-background-color: #004c3c;
          --dile-rounded-button-text-color: #cff;
          --dile-rounded-button-hover-background-color: #3ff;
          --dile-rounded-button-hover-text-color: #000;
          --dile-rounded-button-animation-time: 1s;
          --dile-rounded-button-height: 20px;
        }
      </style>
      <dile-rounded-button class="customized">Click Here</dile-rounded-button>
      `,
  )
  .add(
    'Disabled button',
    () => html`
      <dile-rounded-button disabled id="elButton" @dile-rounded-button-click=${

        () => {
          console.log('click');
        }

      }>Disabled button</dile-rounded-button>
      <button @click=${

        () => {
          document.getElementById('elButton').disabled = false;
        }

      }>Remove disabled</button>
      `,
  )
  .add('Documentation', () => withClassPropertiesKnobs(DileRoundedButton), { notes: { markdown: readme } })
