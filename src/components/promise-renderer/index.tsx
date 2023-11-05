import { Suspense } from "react";

import Await from "../await";

type PromiseRendererProps<T> = {
  promise: Promise<T>;
  children: (data: T) => JSX.Element;
  skeleton: () => JSX.Element;
};

const PromiseRenderer = <T,>({
  promise,
  skeleton: Skeleton,
  children,
}: PromiseRendererProps<T>) => {
  return (
    <Suspense fallback={<Skeleton />}>
      <Await promise={promise}>{children}</Await>
    </Suspense>
  );
};

export default PromiseRenderer;
