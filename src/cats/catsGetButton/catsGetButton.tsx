import { type CatsButton } from '../interface/cats-button'
import styles from '../cats.module.scss'

const CatsButton = ({ fetchCatsData, isEnabled }: CatsButton) => {
  return (
    <button
      onClick={fetchCatsData}
      className={styles.catsButton}
      disabled={isEnabled}
    >
      Get cat
    </button>
  )
}
export default CatsButton
