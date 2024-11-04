"use strict";
// Import
import Gdk from 'gi://Gdk';
import GLib from 'gi://GLib';
import App from 'resource:///com/github/Aylur/ags/app.js'
import * as Utils from 'resource:///com/github/Aylur/ags/utils.js'
// Stuff
import userOptions from './modules/.configuration/user_options.js';
// Widgets Sideleft
import { Bar, BarCornerTopleft, BarCornerTopright } from './modules/bar/main.js';
import SideLeft from './modules/sideleft/main.js';
import { COMPILED_STYLE_DIR } from './init.js';

// Widget Sideright
import SideRight from './modules/sideright/main.js';


// Start stuff
handleStyles(true);

const Windows = () => [
    SideLeft(),
// siderigt
    SideRight(),
];


App.config({
    windows: Windows(),
});

