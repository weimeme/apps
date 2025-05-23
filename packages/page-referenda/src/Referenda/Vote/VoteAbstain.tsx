// Copyright 2017-2025 @polkadot/app-democracy authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { BN } from '@polkadot/util';
import type { VoteTypeProps as Props } from '../types.js';

import React, { useEffect, useState } from 'react';

import { Modal, VoteValue } from '@polkadot/react-components';

import { useTranslation } from '../../translate.js';

function VoteAbstain ({ accountId, id, onChange }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();
  const [balanceAbstain, setBalanceAbstain] = useState<BN | undefined>();
  const [balanceAye, setBalanceAye] = useState<BN | undefined>();
  const [balanceNay, setBalanceNay] = useState<BN | undefined>();

  useEffect((): void => {
    onChange([id, {
      SplitAbstain: {
        abstain: balanceAbstain,
        aye: balanceAye,
        nay: balanceNay
      }
    }]);
  }, [balanceAbstain, balanceAye, balanceNay, id, onChange]);

  return (
    <Modal.Columns hint={t('The value of the balance that is to be split to the abstain, aye and nay parts of the vote')}>
      <VoteValue
        accountId={accountId}
        autoFocus
        label={t('abstain vote value')}
        onChange={setBalanceAbstain}
      />
      <VoteValue
        accountId={accountId}
        autoFocus
        label={t('aye vote value')}
        noDefault
        onChange={setBalanceAye}
      />
      <VoteValue
        accountId={accountId}
        label={t('nay vote value')}
        noDefault
        onChange={setBalanceNay}
      />
    </Modal.Columns>
  );
}

export default React.memo(VoteAbstain);
