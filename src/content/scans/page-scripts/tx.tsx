import { store } from '@src/store'
import { isSupportParsers } from '@common/utils'
import { SCAN_PAGES } from '@common/constants'

import {
  genQuick2ParsersBtn,
  convertUTC2locale,
  genAlternativeBlockExplorersBtn,
  genTxFortaAlertTip
} from '../feat-scripts'

const initTxPageScript = async (chain: string) => {
  const {
    quick2Parsers,
    utc2locale,
    alternativeBlockExplorers,
    txnFortaAlert
  } = await store.get('options')
  if (quick2Parsers && isSupportParsers(chain)) genQuick2ParsersBtn(chain)
  if (utc2locale) convertUTC2locale(SCAN_PAGES.TX.name)
  if (alternativeBlockExplorers)
    genAlternativeBlockExplorersBtn(SCAN_PAGES.TX.name, chain)
  if (txnFortaAlert) genTxFortaAlertTip(chain)
}

export default initTxPageScript
