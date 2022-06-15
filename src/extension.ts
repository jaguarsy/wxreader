import {
  window,
  ExtensionContext,
} from 'vscode';
import ReaderViewProvider from './readerView';
import { startProxy } from './server/proxy';
import { configState } from './utils/config';

let proxy: any;
export function activate(context: ExtensionContext) {
  proxy = startProxy(configState.proxyPort);

  const readerViewProvider = new ReaderViewProvider(context.extensionUri);
  window.registerWebviewViewProvider('wxReader.readerView', readerViewProvider, {
    webviewOptions: {
      retainContextWhenHidden: true,
    },
  });
}

export function deactivate() {
  if (proxy) {
    proxy.close();
  }
}
