#!/usr/bin/env bash

DIR="$HOME/.config/eww"

change_panel() {
	cat "$DIR"/theme/"${panel}.scss" > "$DIR"/colors.scss

feh --bg-fill "$DIR"/wallpapers/"$bg"
}

killall eww
eww open-many transparent bar  &

change_panel1() {
	cat "$DIR"/theme/"${panel1}.yuck" > "$DIR"/modules.yuck
}	
###################################################################
####################################################################
####################################################################
change_panel2() {
	cat "$DIR"/theme/"${panel2}.scss" > "$DIR"/colors.scss
	
feh --bg-fill "$DIR"/wallpapers/"$bg"	
}

change_panel3() {
	cat "$DIR"/theme/"${panel3}.yuck" > "$DIR"/modules.yuck
}	
################################################################
################################################################

if  [[ "$1" = "--blue-dark" ]]; then
	panel="blue-dark"
	panel1="modules0"
	bg="AIR.jpg"
	change_panel
	change_panel1
	
elif [[ "$1" = "--blue-light" ]]; then
	panel2="blue-light"
	panel3="blue-light"
	bg="BRNCH.jpeg"
	change_panel2
	change_panel3
	
else
	cat <<- _EOF_
	No option specified, Available options:
	_EOF_
fi
