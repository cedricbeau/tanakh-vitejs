import './style.css'
import { currentDate } from './currentDate.js'
import { tanakh } from './tanakh.js'
import Alpine from 'alpinejs'
window.Alpine = Alpine

currentDate();
tanakh();

Alpine.start()