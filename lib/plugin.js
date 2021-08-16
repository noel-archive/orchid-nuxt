/**
 * Copyright (c) 2021 Noelware
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import * as orchid from '@augu/orchid';

const log = (...messages) => console.debug('[orchid]', ...messages);

export default (ctx, inject) => {
  // base url
  const options = JSON.parse('<%= JSON.stringify(options) %>');
  const client = new orchid.HttpClient(JSON.parse(options));

  const shouldPatch = orchid.HttpMethods.map((s) => `$${s}`).slice(0, 7);
  shouldPatch.push('$use', '$serializer');

  for (const p of shouldPatch) {
    client[p] = client[p.slice(1)].bind(client);
  }

  log('Injected client into context.');
  ctx.$orchid = client;
  inject('$orchid', client);
};
