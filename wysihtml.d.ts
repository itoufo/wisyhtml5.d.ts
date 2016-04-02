nterface WysihtmlEditor {
  constructor: ( textareaElement:Element, config:Object ) => void;
  isCompatible: () => boolean;
  clear: () => WysihtmlEditor;
  getValue: () => string;
  setValue: () => string;
  focus: () => WysihtmlEditor;
  disable: () => WysihtmlEditor;
  enable: () => WysihtmlEditor;
  isEmpty: () => boolean;
  hasPlaceholderSet: () => boolean;
  isEmpty: () => boolean;

  /**
   * wysihtml5.lang.Dispatcher
   */
  observe: (eventName: string, handler: Function) => WysihtmlEditor
  on: (eventName: string, handler: Function) => WysihtmlEditor
  fire: (eventName: string, payload: any) => WysihtmlEditor
  stopObserving: (eventName:string, handler: Function) => WysihtmlEditor
}

interface Wysihtml extends TinyMceObservable {
  version: string;
  commands:   {};
  dom:        {},
  quirks:     {},
  toolbar:    {},
  lang:       {},
  selection:  {},
  views:      {},


  Editor: ( editorId: string, settings:Object) => WysihtmlEditor;
}

declare var wysihtml5:Wysihtml;
declare var wysihtml5ParserRules:Object;

