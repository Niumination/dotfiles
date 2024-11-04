#!/usr/bin/env bash

SDIR="$HOME/.config/eww/scripts"
DIR="$HOME/.config/eww/menu"

if  [[ "$1" = "--gotham" ]]; then
	theme="pro-dark-blur"
	
elif  [[ "$1" = "--pro-dark" ]]; then
	theme="pro-dark"
	
elif  [[ "$1" = "--pro-medium-dark" ]]; then
	theme="pro-light-blur"	

elif  [[ "$1" = "--pro-light" ]]; then
	theme="pro-light"

elif  [[ "$1" = "--blue-dark" ]]; then
	theme="blue-dark"	

elif  [[ "$1" = "--blue-light" ]]; then
	theme="blue-light"		
	
else
	rofi -e "No theme specified."
	exit 1
fi

# Launch Rofi
MENU="$(rofi -no-config -no-lazy-grab -sep "|" -dmenu -i -p '' \
-theme $DIR/$theme/styles.rasi \
<<< " blue-dark| blue-light|")"
            case "$MENU" in
				*pro_dark) "$SDIR"/styles.sh --pro_dark ;;
				*pro_dark_glass) "$SDIR"/styles.sh --pro_dark_glass ;;
				*pro_light_glass) "$SDIR"/styles.sh --pro_light_glass ;;
				*pro_light) "$SDIR"/styles.sh --pro_light ;;
				*blue-dark) "$SDIR"/styles.sh --blue-dark ;;
                *blue-light) "$SDIR"/styles.sh --blue-light ;;
            
            esac
