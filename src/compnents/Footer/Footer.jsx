//styles
import styles from './Footer.module.css'

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHourglassStart} from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <div className={styles.wrapper}>
        <p>"Efficiency is doing things right, effectiveness is doing the right things." </p>
        

        <FontAwesomeIcon icon={faHourglassStart} />
    </div>
  )
}
