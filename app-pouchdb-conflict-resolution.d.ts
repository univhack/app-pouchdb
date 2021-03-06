/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   app-pouchdb-conflict-resolution.html
 */

/// <reference path="../polymer/types/polymer.d.ts" />
/// <reference path="pouchdb.d.ts" />

/**
 * `app-pouchdb-conflict-resolution` enables declarative configuration of conflict
 * resolution strategies ordered by logical relationships in the DOM. Currently
 * two basic strategies are supported: `firstWriteWins` and `lastWriteWins`.
 *
 * To use `app-pouchdb-conflict-resolution`, simply include the element somewhere
 * in a document subtree at or above the ShadowRoot of an `app-pouchdb-document`
 * or `app-pouchdb-query`:
 *
 * ```html
 * <app-pouchdb-conflict-resolution
 *     strategy="lastWriteWins">
 * </app-pouchdb-conflict-resolution>
 * <app-pouchdb-document
 *     db-name="cats"
 *     doc-id="parsnip">
 * </app-pouchdb-document>
 * ```
 *
 * When a conflict occurs, the `app-pouchdb-document` will request fire an event
 * to notify of the conflict and request a resolution strategy. The
 * `app-pouchdb-conflict-resolution` element listens at its nearest ShadowRoot
 * boundary for conflict notifications, and responds to them as needed with a
 * configured strategy.
 */
interface AppPouchdbConflictResolutionElement extends Polymer.Element {

  /**
   * The name of the strategy to use to reslve the conflict. Supported
   * strategies are `firstWriteWins` (the default) and `lastWriteWins`.
   */
  strategy: string|null|undefined;

  /**
   * By default, this element stops propagation of any conflict events
   * that it is able to handle. If set to `true`, the element will allow
   * such events to continue propagating, opening the possibility that
   * another conflict resolution strategy higher up the document tree will
   * superseed this one.
   */
  allowAncestralResolution: boolean|null|undefined;
  created(): void;
  attached(): void;
  detached(): void;
  resolveConflict(event: any): any;
  firstWriteWins(db: any, method: any, doc: any, error: any): any;
  lastWriteWins(db: any, method: any, doc: any, error: any): any;
}

interface HTMLElementTagNameMap {
  "app-pouchdb-conflict-resolution": AppPouchdbConflictResolutionElement;
}
