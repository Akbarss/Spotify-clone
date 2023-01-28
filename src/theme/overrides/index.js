//
import Typography from './Typography';
import CssBaseline from './CssBaseline';


// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme) {
  return Object.assign(
    Typography(theme),
    CssBaseline(theme),
  );
}
