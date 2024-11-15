import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { LoadsView } from 'src/sections/loads/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {`Blog - ${CONFIG.appName}`}</title>
      </Helmet>

      <LoadsView />
    </>
  );
}
