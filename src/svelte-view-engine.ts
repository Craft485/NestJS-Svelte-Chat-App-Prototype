/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { identity } from 'rxjs';

export function svelteViewEngine(filePath: string, options: any, next) {
  const Component = require(filePath).default;
  let { html, head, css } = Component.render(options);
  if (css.code) {
    head = `${head}<style>${css.code}</style>`;
  }
  next(null, html.replace('%head%', head));
}
