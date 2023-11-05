import ErrorFallback from "./error-fallback";

const Await = async <T,>({
  promise,
  children,
}: {
  promise: Promise<T>;
  children: (data: T) => JSX.Element;
}) => {
  try {
    const data = await promise;
    return children(data);
  } catch (error) {
    return <ErrorFallback />;
  }
};

export default Await;
