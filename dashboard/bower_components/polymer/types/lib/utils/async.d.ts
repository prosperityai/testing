/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   lib/utils/async.html
 */

/// <reference path="boot.d.ts" />

declare namespace Polymer {

  /**
   * Module that provides a number of strategies for enqueuing asynchronous
   * tasks.  Each sub-module provides a standard `run(fn)` interface that returns a
   * handle, and a `cancel(handle)` interface for canceling async tasks before
   * they run.
   */
  namespace Async {

    /**
     * Async interface wrapper around `setTimeout`.
     */
    namespace timeOut {


      /**
       * Returns a sub-module with the async interface providing the provided
       * delay.
       *
       * @returns An async timeout interface
       */
      function after(delay?: number): AsyncInterface;


      /**
       * Enqueues a function called in the next task.
       *
       * @returns Handle used for canceling task
       */
      function run(fn: Function, delay?: number): number;


      /**
       * Cancels a previously enqueued `timeOut` callback.
       */
      function cancel(handle: number): void;
    }

    /**
     * Async interface wrapper around `requestAnimationFrame`.
     */
    namespace animationFrame {


      /**
       * Enqueues a function called at `requestAnimationFrame` timing.
       *
       * @returns Handle used for canceling task
       */
      function run(fn: (p0: number) => void): number;


      /**
       * Cancels a previously enqueued `animationFrame` callback.
       */
      function cancel(handle: number): void;
    }

    /**
     * Async interface wrapper around `requestIdleCallback`.  Falls back to
     * `setTimeout` on browsers that do not support `requestIdleCallback`.
     */
    namespace idlePeriod {


      /**
       * Enqueues a function called at `requestIdleCallback` timing.
       *
       * @returns Handle used for canceling task
       */
      function run(fn: (p0: IdleDeadline) => void): number;


      /**
       * Cancels a previously enqueued `idlePeriod` callback.
       */
      function cancel(handle: number): void;
    }

    /**
     * Async interface for enqueuing callbacks that run at microtask timing.
     *
     * Note that microtask timing is achieved via a single `MutationObserver`,
     * and thus callbacks enqueued with this API will all run in a single
     * batch, and not interleaved with other microtasks such as promises.
     * Promises are avoided as an implementation choice for the time being
     * due to Safari bugs that cause Promises to lack microtask guarantees.
     */
    namespace microTask {


      /**
       * Enqueues a function called at microtask timing.
       *
       * @returns Handle used for canceling task
       */
      function run(callback?: Function): number;


      /**
       * Cancels a previously enqueued `microTask` callback.
       */
      function cancel(handle: number): void;
    }
  }
}
