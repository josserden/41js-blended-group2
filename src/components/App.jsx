import { Gallery } from './gallery/Gallery';
import data from './gallery/data';

export const App = () => {
  return (
    <>
      <Gallery items={data} />
    </>
  );
};
