import { useAccount, useEnsName } from 'wagmi';

export function Account() {
  const { address, connector } = useAccount();
  const { data: ensName } = useEnsName({ address });

  return (
    <div>
      {connector?.name}
      <br />
      {ensName ?? address}
      {ensName ? ` (${address})` : null}
    </div>
  );
}
