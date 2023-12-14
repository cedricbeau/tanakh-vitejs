import './style.css'
import { currentDate } from './currentDate.js'
import { torah } from './torah.js'
import Alpine from 'alpinejs'
window.Alpine = Alpine

currentDate();
torah();

Alpine.start()