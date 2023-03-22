/**
 * Module for main
 * @module main
 */

import { startTest } from './test1.js';

const startButton = document.getElementById('startButton');
startButton.addEventListener("click", startTest);
