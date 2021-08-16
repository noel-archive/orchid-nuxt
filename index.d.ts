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
import Vue from 'vue';

interface NuxtOrchidInstance extends orchid.HttpClient {
  $get(url: string): orchid.Request;
  $get(url: Omit<orchid.HttpRequestOptions, 'method'>): Request;
  $get(url: string, options?: Omit<orchid.HttpRequestOptions, 'method' | 'url'>): Request;

  $put(url: string): orchid.Request;
  $put(url: Omit<orchid.HttpRequestOptions, 'method'>): Request;
  $put(url: string, options?: Omit<orchid.HttpRequestOptions, 'method' | 'url'>): Request;

  $post(url: string): orchid.Request;
  $post(url: Omit<orchid.HttpRequestOptions, 'method'>): Request;
  $post(url: string, options?: Omit<orchid.HttpRequestOptions, 'method' | 'url'>): Request;

  $head(url: string): orchid.Request;
  $head(url: Omit<orchid.HttpRequestOptions, 'method'>): Request;
  $head(url: string, options?: Omit<orchid.HttpRequestOptions, 'method' | 'url'>): Request;

  $trace(url: string): orchid.Request;
  $trace(url: Omit<orchid.HttpRequestOptions, 'method'>): Request;
  $trace(url: string, options?: Omit<orchid.HttpRequestOptions, 'method' | 'url'>): Request;

  $patch(url: string): orchid.Request;
  $patch(url: Omit<orchid.HttpRequestOptions, 'method'>): Request;
  $patch(url: string, options?: Omit<orchid.HttpRequestOptions, 'method' | 'url'>): Request;

  $del(url: string): orchid.Request;
  $del(url: Omit<orchid.HttpRequestOptions, 'method'>): Request;
  $del(url: string, options?: Omit<orchid.HttpRequestOptions, 'method' | 'url'>): Request;

  $request(url: string): orchid.Request;
  $request(url: orchid.HttpRequestOptions): orchid.Request;
  $request(url: string, method: orchid.HttpMethod): orchid.Request;
  $request(url: string, method: Omit<orchid.HttpRequestOptions, 'method' | 'url'>): orchid.Request;
  $request(
    url: string,
    method: orchid.HttpMethod,
    options: Omit<orchid.HttpRequestOptions, 'method' | 'url'>
  ): orchid.Request;

  $use(middleware: orchid.Middleware<orchid.MiddlewareType> | orchid.MultiMiddleware<orchid.MiddlewareType>): void;
  $serializer(contentType: string, serializer: orchid.Serializer<unknown>): void;
}

declare module '@nuxt/vue-app' {
  interface Context {
    $orchid: NuxtOrchidInstance;
  }

  interface NuxtAppOptions {
    $orchid: NuxtOrchidInstance;
  }
}

// Nuxt 2.9+
declare module '@nuxt/types' {
  interface Context {
    $orchid: NuxtOrchidInstance;
  }

  interface NuxtAppOptions {
    $orchid: NuxtOrchidInstance;
  }

  interface Configuration {
    orchid?: orchid.HttpClientOptions;
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $orchid: NuxtOrchidInstance;
  }
}
