import { CatOptions } from '@/cats/interface/cats-options'
import styles from '../cats.module.scss'

const CatsOptions = ({
  isEnabled: enable,
  onSetEnabled,
  autoRefresh,
  onSetAutoRefresh
}: CatOptions) => {
  return (
    <div className={styles.catsOptions}>
      <label>
        <input
          type='checkbox'
          name='Enabled'
          checked={enable}
          onChange={(e) => onSetEnabled(e.target.checked)}
        />
        Enabled
      </label>
      <label>
        <input
          type='checkbox'
          name='Auto-refresh every'
          checked={autoRefresh}
          onChange={(e) => onSetAutoRefresh(e.target.checked)}
        />
        Auto-refresh every 5 second
      </label>
    </div>
  )
}

export default CatsOptions
