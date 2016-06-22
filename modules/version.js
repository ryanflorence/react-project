import { log } from './LogUtils'
import { getPackageJSON } from './PackageUtils'

export default function version() {
  const pkg = getPackageJSON()
  log(pkg.version)
}
