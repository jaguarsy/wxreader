import { workspace } from 'vscode';

const configState = {
  get proxyPort() {
    return getConfig('wxReader.proxyPort') as number;
  },
  get scale() {
    return getConfig('wxReader.scale') as number;
  },
};

function getConfig(key: string) {
  return workspace.getConfiguration().get(key);
}

export { configState };
