import { UniformPlayground, UniformPlaygroundProps } from '@uniformdev/canvas-next-rsc';
import { componentResolver } from '../../canvas/index';
export const runtime = 'edge';

export default function PlaygroundPage(props: { searchParams: UniformPlaygroundProps['searchParams'] }) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  return <UniformPlayground {...props} resolveComponent={componentResolver} />;
}
