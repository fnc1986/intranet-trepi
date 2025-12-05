import type { ConfigType } from '@plone/registry';
import type { BlockConfigBase } from '@plone/types';
import ClimaBlockInfo from 'volto-trepi-intranet/components/Blocks/Clima';

declare module '@plone/types' {
  // Altera a interface BlocksConfigData para incluir o bloco de Clima
  export interface BlocksConfigData {
    climaBlock: BlockConfigBase;
  }
}

function installLocalBlocks(config: ConfigType) {
  // Instala o bloco de Clima
  config.blocks.blocksConfig.climaBlock = ClimaBlockInfo;
  return config;
}
