import { type CatsButton } from '@/cats/interface/cats-button'
import styles from '@/cats/cats.module.scss'

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
