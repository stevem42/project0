.container {
	display: flex;
	flex-wrap: wrap;
}

.container > div {
	background-color: springgreen;
	font-size: 20px;
	margin: 20px;
	padding: 20px;
	width: 20px;
}



cssfile.cscc

$variable_name: property;

ul {
	font-size: 14px;
	color: $variable_name;
}

ol {
	font-size: 18px;
	color: variable_name;
	
}

To compile -          sass filename.scss filename.css                    will create or overwrite the filename

To watch the file and recompile automatically -          sass --watch filename.scss:filename.css


