define([

], function (

) {
	'use strict';

	/*---Вкладка Логотип*/
	//Лого
	const brandLogo = {
		label: "Логотип",
		type: "string",
		component: "media",
		layoutRef: "brandLogo",
		ref: "brandLogo",
	}
	/*-------------------------------------------------*/

	/*---Вкладка About*/
	//Информация о виджете
	const about = {
		label: "About",
		type: "items",
		items: {
			info: {
				component: "text",
				label:
					`Developed by Iskaliev Alex/JSamurai
						_______________________________
						instagram: @alex_iskaliev
						_______________________________
						email: iskaliev.alex@outlook.com
						_______________________________
				 		Extension: QS_app_settings
						_______________________________
						Bundle:
						_______________________________
				 		Team:
						_______________________________`,
			}
		}
	};
	/*-------------------------------------------------*/

	/*Вкладка Заголовок листа*/
	//Скрыть заголовок листа
	const titleHide = {
		label: "Отображение",
		type: "boolean",
		component: "switch",
		ref: "titleHide",
		defaultValue: false,
		options: [
			{
				value: true,
				label: "Скрыть"
			},
			{
				value: false,
				label: "Показать"
			},
		],
	};

	//Фон заголовка
	const titleBackgroundColor = {
		label: "Цвет фона (HEX/RGB/RGBA)",
		type: "string",
		ref: "titleBackgroundColor",
		defaultValue: "#f2f2f2",
		expression: "optional",
		show: function (data) {
			return !data.titleHide;
		}
	};

	//Шрифт текста на листе
	const titleFontFamily = {
		label: 'Семейство шрифтов',
		type: 'string',
		component: 'dropdown',
		ref: 'titleFontFamily',
		defaultValue: 'Source Sans Pro',
		options: [
			{
				value: "Source Sans Pro",
				label: "Source-Sans-Pro"
			},
			{
				value: "RobotoBlack",
				label: "Roboto-Black"
			},
			{
				value: "RobotoBlackItalic",
				label: "Roboto-Black-Italic"
			},
			{
				value: "RobotoBold",
				label: "Roboto-Bold"
			},
			{
				value: "RobotoBoldItalic",
				label: "Roboto-Bold-Italic"
			},
			{
				value: "RobotoItalic",
				label: "Roboto-Italic"
			},
			{
				value: "RobotoLight",
				label: "Roboto-Light"
			},
			{
				value: "RobotoLightItalic",
				label: "Roboto-Light-Italic"
			},
			{
				value: "RobotoMedium",
				label: "Roboto-Medium"
			},
			{
				value: "RobotoMediumItalic",
				label: "Roboto-Medium-Italic"
			},
			{
				value: "RobotoRegular",
				label: "Roboto-Regular"
			},
			{
				value: "RobotoThin",
				label: "Roboto-Thin"
			},
			{
				value: "RobotoThinItalic",
				label: "Roboto-Thin-Italic"
			},
		],
	};

	//Тип шрифта
	const titleFontType = {
		label: 'Тип шрифта',
		type: 'string',
		component: "dropdown",
		ref: 'titleFontType',
		defaultValue: 'sans-serif',
		options: [
			{
				value: "sans-serif",
				label: "sans-serif",
				tooltip: "обычные шрифты без засечек"
			},
			{
				value: "serif",
				label: "serif",
				tooltip: "обычные шрифты с засечками"
			},
			{
				value: "monospace",
				label: "monospace",
				tooltip: "шрифты фиксированной ширины"
			},
			{
				value: "cursive",
				label: "cursive",
				tooltip: "шрифты, имитирующие почерк"
			},
			{
				value: "fantasy",
				label: "fantasy",
				tooltip: "декоративные шрифты, для названий и т.д.."
			}
		],
	};

	//Стиль шрифта
	const titleFontStyle = {
		label: 'Стиль шрифта',
		type: 'string',
		component: "buttongroup",
		ref: 'titleFontStyle',
		defaultValue: '',
		options: [
			{
				value: "normal",
				label: "Normal",
				tooltip: "font-style: normal"
			},
			{
				value: "italic",
				label: "Italic",
				tooltip: "font-style: italic"
			},
			{
				value: "oblique",
				label: "Oblique",
				tooltip: "font-style: oblique"
			}
		],
	};

	//Толщина шрифта
	const titleFontWight = {
		label: 'Начертание шрифта (Тип/значение)',
		type: 'string',
		ref: 'titleFontWight',
		defaultValue: '',
		expression: "optional",
	};

	//Размер шрифта
	const titleSize = {
		label: `Размер шрифта, px`,
		type: "number",
		component: "slider",
		ref: "titleSize",
		defaultValue: 23,
		min: 1,
		max: 45,
		step: 1,
	};

	//Цвет заголовка
	const titleColor = {
		label: "Цвет текста (HEX/RGB/RGBA)",
		type: "string",
		ref: "titleColor",
		defaultValue: '',
		expression: "optional",
		show: function (data) {
			return !data.titleHide;
		}
	};

	//Положение заголовка
	const titlePosition = {
		label: "Положение заголовка",
		type: "string",
		component: "buttongroup",
		ref: "titlePosition",
		defaultValue: '',
		options: [
			{
				value: "left",
				label: "Слева",
				tooltip: "Расположить слева"
			},
			{
				value: "center",
				label: "Центр",
				tooltip: "Расположить по центру"
			},
			{
				value: "right",
				label: "Справа",
				tooltip: "Расположить справа"
			}
		],
		show: function (data) {
			return !data.titleHide;
		}
	};
	/*--------------------------------------------------*/

	/*Вкладка Лист*/
	//Фон листа
	const sheetBackgroundColor = {
		label: 'Цвет фона (HEX/RGB/RGBA)',
		type: 'string',
		ref: "sheetBackgroundColor",
		defaultValue: '#f2f2f2',
		expression: "optional",
	};

	//Шрифт текста на листе
	const sheetFontFamily = {
		label: 'Семейство шрифтов',
		type: 'string',
		component: 'dropdown',
		ref: 'sheetFontFamily',
		defaultValue: 'Source Sans Pro',
		options: [
			{
				value: "Source Sans Pro",
				label: "Source-Sans-Pro"
			},
			{
				value: "RobotoBlack",
				label: "Roboto-Black"
			},
			{
				value: "RobotoBlackItalic",
				label: "Roboto-Black-Italic"
			},
			{
				value: "RobotoBold",
				label: "Roboto-Bold"
			},
			{
				value: "RobotoBoldItalic",
				label: "Roboto-Bold-Italic"
			},
			{
				value: "RobotoItalic",
				label: "Roboto-Italic"
			},
			{
				value: "RobotoLight",
				label: "Roboto-Light"
			},
			{
				value: "RobotoLightItalic",
				label: "Roboto-Light-Italic"
			},
			{
				value: "RobotoMedium",
				label: "Roboto-Medium"
			},
			{
				value: "RobotoMediumItalic",
				label: "Roboto-Medium-Italic"
			},
			{
				value: "RobotoRegular",
				label: "Roboto-Regular"
			},
			{
				value: "RobotoThin",
				label: "Roboto-Thin"
			},
			{
				value: "RobotoThinItalic",
				label: "Roboto-Thin-Italic"
			},
		],
	};

	//Тип шрифта
	const sheetFontType = {
		label: 'Тип шрифта',
		type: 'string',
		component: "dropdown",
		ref: 'sheetFontType',
		defaultValue: 'sans-serif',
		options: [
			{
				value: "sans-serif",
				label: "sans-serif",
				tooltip: "обычные шрифты без засечек"
			},
			{
				value: "serif",
				label: "serif",
				tooltip: "обычные шрифты с засечками"
			},
			{
				value: "monospace",
				label: "monospace",
				tooltip: "шрифты фиксированной ширины"
			},
			{
				value: "cursive",
				label: "cursive",
				tooltip: "шрифты, имитирующие почерк"
			},
			{
				value: "fantasy",
				label: "fantasy",
				tooltip: "декоративные шрифты, для названий и т.д.."
			}
		],
	};

	//Толщина шрифта
	const sheetFontWight = {
		label: 'Начертание шрифта (Тип/значение)',
		type: 'string',
		ref: 'sheetFontWight',
		defaultValue: '',
		expression: "optional",
	};

	//Стиль шрифта
	const sheetFontStyle = {
		label: 'Стиль шрифта',
		type: 'string',
		component: "buttongroup",
		ref: 'sheetFontStyle',
		defaultValue: '',
		options: [
			{
				value: "normal",
				label: "Normal",
				tooltip: "font-style: normal"
			},
			{
				value: "italic",
				label: "Italic",
				tooltip: "font-style: italic"
			},
			{
				value: "oblique",
				label: "Oblique",
				tooltip: "font-style: oblique"
			}
		],
	};

	//Цвет шрифта
	const sheetFontColor = {
		label: 'Цвет текста (HEX/RGB/RGBA)',
		type: 'string',
		ref: "sheetFontColor",
		defaultValue: '',
		expression: "optional",
	};

	//Расстояние между виджетами
	const sheetObjectGap = {
		label: "Расстояние между виджетами",
		type: "number",
		component: "slider",
		ref: "sheetObjectGap",
		defaultValue: 2,
		min: 0,
		max: 20,
		step: 0.5,
	}
	/*--------------------------------------------------*/

	/*Вкладка Виджеты*/
	/*Оболочка виджета*/

	//Цвет фона оболочки
	const objectWrapperBackgroundColor = {
		label: 'Цвет фона оболочки (HEX/RGB/RGBA)',
		type: 'string',
		ref: "objectWrapperBackgroundColor",
		defaultValue: '',
		expression: "optional",
	}

	//Тень от виджета
	const objectFilterDropShadowTitle = {
		label: "Тень от виджета",
		component: "text"
	}
	const objectFilterDropShadowOffsetX = {
		label: "Offset-X, px",
		type: "string",
		ref: "objectFilterDropShadowOffsetX",
		defaultValue: '0',
		expression: "optional",
	}
	const objectFilterDropShadowOffsetY = {
		label: "Offset-Y, px",
		type: "string",
		ref: "objectFilterDropShadowOffsetY",
		defaultValue: '0',
		expression: "optional",
	}
	const objectFilterDropShadowBlurRadius = {
		label: "Blur-Radius, px",
		type: "string",
		ref: "objectFilterDropShadowBlurRadius",
		defaultValue: '0',
		expression: "optional",
	}
	const objectFilterDropShadowColor = {
		label: "Цвет тени",
		type: "string",
		ref: "objectFilterDropShadowColor",
		defaultValue: '#fff',
		expression: "optional",
	}

	//Радиус оболочки виджета
	const objectWrapperBorderRadius = {
		label: `Радиус, px`,
		type: "number",
		component: "slider",
		ref: "objectWrapperBorderRadius",
		defaultValue: 4,
		min: 0,
		max: 20,
		step: 0.5,
	}

	//Обводка оболочки виджета
	const objectWrapperBorder = {
		label: "Обводка оболочки виджета",
		component: "text"
	}
	const objectWrapperBorderWidth = {
		label: "Толщина обводки",
		type: "number",
		component: "slider",
		ref: "objectWrapperBorderWidth",
		defaultValue: 0,
		min: 0,
		max: 20,
		step: 0.5,
	}
	const objectWrapperBorderType = {
		label: 'Тип обводки',
		type: 'string',
		component: "dropdown",
		ref: 'objectWrapperBorderType',
		defaultValue: 'none',
		options: [
			{
				value: "none",
				label: "none",
			},
			{
				value: "hidden",
				label: "hidden",
			},
			{
				value: "dotted",
				label: "dotted",
			},
			{
				value: "dashed",
				label: "dashed",
			},
			{
				value: "solid",
				label: "solid",
			},
			{
				value: "double",
				label: "double",
			},
			{
				value: "groove",
				label: "groove",
			},
			{
				value: "ridge",
				label: "ridge",
			},
			,
			{
				value: "inset",
				label: "inset",
			},
			,
			{
				value: "outset",
				label: "outset",
			},
		],
	}
	const objectWrapperBorderColor = {
		label: "Цвет обводки",
		type: "string",
		ref: "objectWrapperBorderColor",
		defaultValue: '#fff',
		expression: "optional",
	}
	/*--------------------------------------------------*/

	/*Виджет*/

	//Фон виджета
	const objectBackgroundColor = {
		label: "Цвет фона",
		type: "string",
		ref: "objectBackgroundColor",
		defaultValue: '#fff',
		expression: "optional",
	}

	//Радиус виджета
	const objectBorderRadius = {
		label: `Радиус, px`,
		type: "number",
		component: "slider",
		ref: "objectBorderRadius",
		defaultValue: 4,
		min: 0,
		max: 20,
		step: 0.5,
	}

	//Обводка виджета
	const objectBorder = {
		label: "Обводка виджета",
		component: "text"
	}
	const objectBorderWidth = {
		label: "Толщина обводки",
		type: "number",
		component: "slider",
		ref: "objectBorderWidth",
		defaultValue: 0,
		min: 0,
		max: 20,
		step: 0.5,
	}
	const objectBorderType = {
		label: 'Тип обводки',
		type: 'string',
		component: "dropdown",
		ref: 'objectBorderType',
		defaultValue: 'none',
		options: [
			{
				value: "none",
				label: "none",
			},
			{
				value: "hidden",
				label: "hidden",
			},
			{
				value: "dotted",
				label: "dotted",
			},
			{
				value: "dashed",
				label: "dashed",
			},
			{
				value: "solid",
				label: "solid",
			},
			{
				value: "double",
				label: "double",
			},
			{
				value: "groove",
				label: "groove",
			},
			{
				value: "ridge",
				label: "ridge",
			},
			,
			{
				value: "inset",
				label: "inset",
			},
			,
			{
				value: "outset",
				label: "outset",
			},
		],
	}
	const objectBorderColor = {
		label: "Цвет обводки",
		type: "string",
		ref: "objectBorderColor",
		defaultValue: '#fff',
		expression: "optional",
	}
	/*--------------------------------------------------*/

	/*Заголовок виджета*/
	//Цвет фона
	const objectTitleBackgroundColor = {
		label: "Фон заголовка",
		type: "string",
		ref: "objectTitleBackgroundColor",
		defaultValue: '#fff',
		expression: "optional",
	}

	//Отступ слева
	const objectTitlePaddingLeft = {
		label: "Отступ слева",
		type: "number",
		component: "slider",
		ref: "objectTitlePaddingLeft",
		defaultValue: 0,
		min: 0,
		max: 100,
		step: 0.5,
	}

	//Отступ сверху
	const objectTitlePaddingTop = {
		label: "Отступ сверху",
		type: "number",
		component: "slider",
		ref: "objectTitlePaddingTop",
		defaultValue: 0,
		min: 0,
		max: 100,
		step: 0.5,
	}

	//Семейство шрифтов
	const objectTitleFontFamily = {
		label: 'Семейство шрифтов',
		type: 'string',
		component: 'dropdown',
		ref: 'objectTitleFontFamily',
		defaultValue: 'Source Sans Pro',
		options: [
			{
				value: "Source Sans Pro",
				label: "Source-Sans-Pro"
			},
			{
				value: "RobotoBlack",
				label: "Roboto-Black"
			},
			{
				value: "RobotoBlackItalic",
				label: "Roboto-Black-Italic"
			},
			{
				value: "RobotoBold",
				label: "Roboto-Bold"
			},
			{
				value: "RobotoBoldItalic",
				label: "Roboto-Bold-Italic"
			},
			{
				value: "RobotoItalic",
				label: "Roboto-Italic"
			},
			{
				value: "RobotoLight",
				label: "Roboto-Light"
			},
			{
				value: "RobotoLightItalic",
				label: "Roboto-Light-Italic"
			},
			{
				value: "RobotoMedium",
				label: "Roboto-Medium"
			},
			{
				value: "RobotoMediumItalic",
				label: "Roboto-Medium-Italic"
			},
			{
				value: "RobotoRegular",
				label: "Roboto-Regular"
			},
			{
				value: "RobotoThin",
				label: "Roboto-Thin"
			},
			{
				value: "RobotoThinItalic",
				label: "Roboto-Thin-Italic"
			},
		],
	};

	//Тип шрифта
	const objectTitleFontType = {
		label: 'Тип шрифта',
		type: 'string',
		component: "dropdown",
		ref: 'objectTitleFontType',
		defaultValue: 'sans-serif',
		options: [
			{
				value: "sans-serif",
				label: "sans-serif",
				tooltip: "обычные шрифты без засечек"
			},
			{
				value: "serif",
				label: "serif",
				tooltip: "обычные шрифты с засечками"
			},
			{
				value: "monospace",
				label: "monospace",
				tooltip: "шрифты фиксированной ширины"
			},
			{
				value: "cursive",
				label: "cursive",
				tooltip: "шрифты, имитирующие почерк"
			},
			{
				value: "fantasy",
				label: "fantasy",
				tooltip: "декоративные шрифты, для названий и т.д.."
			}
		],
	};

	//Толщина шрифта
	const objectTitleFontWight = {
		label: 'Начертание шрифта (Тип/значение)',
		type: 'string',
		ref: 'objectTitleFontWight',
		defaultValue: '',
		expression: "optional",
	};

	//Стиль шрифта
	const objectTitleFontStyle = {
		label: 'Стиль шрифта',
		type: 'string',
		component: "buttongroup",
		ref: 'objectTitleFontStyle',
		defaultValue: '',
		options: [
			{
				value: "normal",
				label: "Normal",
				tooltip: "font-style: normal"
			},
			{
				value: "italic",
				label: "Italic",
				tooltip: "font-style: italic"
			},
			{
				value: "oblique",
				label: "Oblique",
				tooltip: "font-style: oblique"
			}
		],
	};

	//Цвет шрифта
	const objectTitleFontColor = {
		label: 'Цвет текста (HEX/RGB/RGBA)',
		type: 'string',
		ref: "objectTitleFontColor",
		defaultValue: '',
		expression: "optional",
	};

	//Размер шрифта
	const objectTitleFontSize = {
		label: 'Размер шрифта, px',
		type: 'string',
		ref: "objectTitleFontSize",
		defaultValue: '',
		expression: "optional",
	};
	/*--------------------------------------------------*/

	/*Подзаголовок виджета*/
	//Цвет фона
	const objectSubTitleBackgroundColor = {
		label: "Фон подзаголовка",
		type: "string",
		ref: "objectSubTitleBackgroundColor",
		defaultValue: '#fff',
		expression: "optional",
	}

	//Отступ слева
	const objectSubTitlePaddingLeft = {
		label: "Отступ слева",
		type: "number",
		component: "slider",
		ref: "objectSubTitlePaddingLeft",
		defaultValue: 0,
		min: 0,
		max: 100,
		step: 0.5,
	}

	//Отступ сверху
	const objectSubTitlePaddingTop = {
		label: "Отступ сверху",
		type: "number",
		component: "slider",
		ref: "objectSubTitlePaddingTop",
		defaultValue: 0,
		min: 0,
		max: 100,
		step: 0.5,
	}

	//Семейство шрифтов
	const objectSubTitleFontFamily = {
		label: 'Семейство шрифтов',
		type: 'string',
		component: 'dropdown',
		ref: 'objectSubTitleFontFamily',
		defaultValue: 'Source Sans Pro',
		options: [
			{
				value: "Source Sans Pro",
				label: "Source-Sans-Pro"
			},
			{
				value: "RobotoBlack",
				label: "Roboto-Black"
			},
			{
				value: "RobotoBlackItalic",
				label: "Roboto-Black-Italic"
			},
			{
				value: "RobotoBold",
				label: "Roboto-Bold"
			},
			{
				value: "RobotoBoldItalic",
				label: "Roboto-Bold-Italic"
			},
			{
				value: "RobotoItalic",
				label: "Roboto-Italic"
			},
			{
				value: "RobotoLight",
				label: "Roboto-Light"
			},
			{
				value: "RobotoLightItalic",
				label: "Roboto-Light-Italic"
			},
			{
				value: "RobotoMedium",
				label: "Roboto-Medium"
			},
			{
				value: "RobotoMediumItalic",
				label: "Roboto-Medium-Italic"
			},
			{
				value: "RobotoRegular",
				label: "Roboto-Regular"
			},
			{
				value: "RobotoThin",
				label: "Roboto-Thin"
			},
			{
				value: "RobotoThinItalic",
				label: "Roboto-Thin-Italic"
			},
		],
	};

	//Тип шрифта
	const objectSubTitleFontType = {
		label: 'Тип шрифта',
		type: 'string',
		component: "dropdown",
		ref: 'objectSubTitleFontType',
		defaultValue: 'sans-serif',
		options: [
			{
				value: "sans-serif",
				label: "sans-serif",
				tooltip: "обычные шрифты без засечек"
			},
			{
				value: "serif",
				label: "serif",
				tooltip: "обычные шрифты с засечками"
			},
			{
				value: "monospace",
				label: "monospace",
				tooltip: "шрифты фиксированной ширины"
			},
			{
				value: "cursive",
				label: "cursive",
				tooltip: "шрифты, имитирующие почерк"
			},
			{
				value: "fantasy",
				label: "fantasy",
				tooltip: "декоративные шрифты, для названий и т.д.."
			}
		],
	};

	//Толщина шрифта
	const objectSubTitleFontWight = {
		label: 'Начертание шрифта (Тип/значение)',
		type: 'string',
		ref: 'objectSubTitleFontWight',
		defaultValue: '',
		expression: "optional",
	};

	//Стиль шрифта
	const objectSubTitleFontStyle = {
		label: 'Стиль шрифта',
		type: 'string',
		component: "buttongroup",
		ref: 'objectSubTitleFontStyle',
		defaultValue: '',
		options: [
			{
				value: "normal",
				label: "Normal",
				tooltip: "font-style: normal"
			},
			{
				value: "italic",
				label: "Italic",
				tooltip: "font-style: italic"
			},
			{
				value: "oblique",
				label: "Oblique",
				tooltip: "font-style: oblique"
			}
		],
	};

	//Цвет шрифта
	const objectSubTitleFontColor = {
		label: 'Цвет текста (HEX/RGB/RGBA)',
		type: 'string',
		ref: "objectSubTitleFontColor",
		defaultValue: '',
		expression: "optional",
	};

	//Размер шрифта
	const objectSubTitleFontSize = {
		label: 'Размер шрифта, px',
		type: 'string',
		ref: "objectSubTitleFontSize",
		defaultValue: '',
		expression: "optional",
	};
	/*--------------------------------------------------*/

	/*Сноска виджета*/
	//Цвет фона
	const objectFootTitleBackgroundColor = {
		label: "Фон сноски",
		type: "string",
		ref: "objectFootTitleBackgroundColor",
		defaultValue: '#fff',
		expression: "optional",
	}

	//Отступ слева
	const objectFootTitlePaddingLeft = {
		label: "Отступ слева",
		type: "number",
		component: "slider",
		ref: "objectFootTitlePaddingLeft",
		defaultValue: 0,
		min: 0,
		max: 100,
		step: 0.5,
	}

	//Отступ сверху
	const objectFootTitlePaddingTop = {
		label: "Отступ сверху",
		type: "number",
		component: "slider",
		ref: "objectFootTitlePaddingTop",
		defaultValue: 0,
		min: 0,
		max: 100,
		step: 0.5,
	}

	//Верхняя граница сноски
	const objectFootTitleBorderTop = {
		label: "Верхняя граница",
		component: "text"
	}
	const objectFootTitleBorderTopWidth = {
		label: "Толщина границы",
		type: "number",
		component: "slider",
		ref: "objectFootTitleBorderTopWidth",
		defaultValue: 0,
		min: 0,
		max: 20,
		step: 0.5,
	}
	const objectFootTitleBorderTopType = {
		label: 'Тип границы',
		type: 'string',
		component: "dropdown",
		ref: 'objectFootTitleBorderTopType',
		defaultValue: 'none',
		options: [
			{
				value: "none",
				label: "none",
			},
			{
				value: "hidden",
				label: "hidden",
			},
			{
				value: "dotted",
				label: "dotted",
			},
			{
				value: "dashed",
				label: "dashed",
			},
			{
				value: "solid",
				label: "solid",
			},
			{
				value: "double",
				label: "double",
			},
			{
				value: "groove",
				label: "groove",
			},
			{
				value: "ridge",
				label: "ridge",
			},
			,
			{
				value: "inset",
				label: "inset",
			},
			,
			{
				value: "outset",
				label: "outset",
			},
		],
	}
	const objectFootTitleBorderTopColor = {
		label: "Цвет границы",
		type: "string",
		ref: "objectFootTitleBorderTopColor",
		defaultValue: '#fff',
		expression: "optional",
	}

	//Семейство шрифтов
	const objectFootTitleFontFamily = {
		label: 'Семейство шрифтов',
		type: 'string',
		component: 'dropdown',
		ref: 'objectFootTitleFontFamily',
		defaultValue: 'Source Sans Pro',
		options: [
			{
				value: "Source Sans Pro",
				label: "Source-Sans-Pro"
			},
			{
				value: "RobotoBlack",
				label: "Roboto-Black"
			},
			{
				value: "RobotoBlackItalic",
				label: "Roboto-Black-Italic"
			},
			{
				value: "RobotoBold",
				label: "Roboto-Bold"
			},
			{
				value: "RobotoBoldItalic",
				label: "Roboto-Bold-Italic"
			},
			{
				value: "RobotoItalic",
				label: "Roboto-Italic"
			},
			{
				value: "RobotoLight",
				label: "Roboto-Light"
			},
			{
				value: "RobotoLightItalic",
				label: "Roboto-Light-Italic"
			},
			{
				value: "RobotoMedium",
				label: "Roboto-Medium"
			},
			{
				value: "RobotoMediumItalic",
				label: "Roboto-Medium-Italic"
			},
			{
				value: "RobotoRegular",
				label: "Roboto-Regular"
			},
			{
				value: "RobotoThin",
				label: "Roboto-Thin"
			},
			{
				value: "RobotoThinItalic",
				label: "Roboto-Thin-Italic"
			},
		],
	};

	//Тип шрифта
	const objectFootTitleFontType = {
		label: 'Тип шрифта',
		type: 'string',
		component: "dropdown",
		ref: 'objectFootTitleFontType',
		defaultValue: 'sans-serif',
		options: [
			{
				value: "sans-serif",
				label: "sans-serif",
				tooltip: "обычные шрифты без засечек"
			},
			{
				value: "serif",
				label: "serif",
				tooltip: "обычные шрифты с засечками"
			},
			{
				value: "monospace",
				label: "monospace",
				tooltip: "шрифты фиксированной ширины"
			},
			{
				value: "cursive",
				label: "cursive",
				tooltip: "шрифты, имитирующие почерк"
			},
			{
				value: "fantasy",
				label: "fantasy",
				tooltip: "декоративные шрифты, для названий и т.д.."
			}
		],
	};

	//Толщина шрифта
	const objectFootTitleFontWight = {
		label: 'Начертание шрифта (Тип/значение)',
		type: 'string',
		ref: 'objectFootTitleFontWight',
		defaultValue: '',
		expression: "optional",
	};

	//Стиль шрифта
	const objectFootTitleFontStyle = {
		label: 'Стиль шрифта',
		type: 'string',
		component: "buttongroup",
		ref: 'objectFootTitleFontStyle',
		defaultValue: '',
		options: [
			{
				value: "normal",
				label: "Normal",
				tooltip: "font-style: normal"
			},
			{
				value: "italic",
				label: "Italic",
				tooltip: "font-style: italic"
			},
			{
				value: "oblique",
				label: "Oblique",
				tooltip: "font-style: oblique"
			}
		],
	};

	//Цвет шрифта
	const objectFootTitleFontColor = {
		label: 'Цвет текста (HEX/RGB/RGBA)',
		type: 'string',
		ref: "objectFootTitleFontColor",
		defaultValue: '',
		expression: "optional",
	};

	//Размер шрифта
	const objectFootTitleFontSize = {
		label: 'Размер шрифта, px',
		type: 'string',
		ref: "objectFootTitleFontSize",
		defaultValue: '',
		expression: "optional",
	};

	/*--------------------------------------------------*/

	/*Сборник настроек*/
	//Настройки приложения
	const global = {
		label: "Настройки приложения",
		type: "items",
		component: "expandable-items",
		items: {
			Title: {
				label: "Заголовок листа",
				type: "items",
				items: {
					TitleHide: titleHide,
					TitleBackgroundColor: titleBackgroundColor,
					TitleFontFamily: titleFontFamily,
					TitleFontType: titleFontType,
					TitleFontWight: titleFontWight,
					TitleFontStyle: titleFontStyle,
					TitleSize: titleSize,
					TitleColor: titleColor,
					TitlePosition: titlePosition,
				}
			},
			Sheet: {
				label: "Лист",
				type: "items",
				items: {
					SheetBackgroundColor: sheetBackgroundColor,
					SheetFontFamily: sheetFontFamily,
					SheetFontType: sheetFontType,
					SheetFontWight: sheetFontWight,
					SheetFontStyle: sheetFontStyle,
					SheetFontColor: sheetFontColor,
					SheetObjectGap: sheetObjectGap,
				}
			},
			Objects: {
				label: "Виджеты",
				type: "items",
				component: "expandable-items",
				items: {
					ObjectWrapper: {
						label: 'Оболочка виджета',
						type: 'items',
						items: {
							ObjectWrapperBackgroundColor: objectWrapperBackgroundColor,
							ObjectFilterDropShadowTitle: objectFilterDropShadowTitle,
							ObjectFilterDropShadowOffsetX: objectFilterDropShadowOffsetX,
							ObjectFilterDropShadowOffsetY: objectFilterDropShadowOffsetY,
							ObjectFilterDropShadowBlurRadius: objectFilterDropShadowBlurRadius,
							ObjectFilterDropShadowColor: objectFilterDropShadowColor,
							ObjectWrapperBorderRadius: objectWrapperBorderRadius,
							ObjectWrapperBorder: objectWrapperBorder,
							ObjectWrapperBorderWidth: objectWrapperBorderWidth,
							ObjectWrapperBorderType: objectWrapperBorderType,
							ObjectWrapperBorderColor: objectWrapperBorderColor,
						}
					},
					Object: {
						label: 'Виджет',
						type: 'items',
						items: {
							ObjectBackgroundColor: objectBackgroundColor,
							ObjectBorderRadius: objectBorderRadius,
							ObjectBorder: objectBorder,
							ObjectBorderWidth: objectBorderWidth,
							ObjectBorderType: objectBorderType,
							ObjectBorderColor: objectBorderColor,
						}
					},
					ObjectTitle: {
						label: 'Заголовок виджета',
						type: 'items',
						items: {
							ObjectTitleBackgroundColor: objectTitleBackgroundColor,
							ObjectTitlePaddingLeft: objectTitlePaddingLeft,
							ObjectTitlePaddingTop: objectTitlePaddingTop,
							ObjectTitleFontFamily: objectTitleFontFamily,
							ObjectTitleFontType: objectTitleFontType,
							ObjectTitleFontWight: objectTitleFontWight,
							ObjectTitleFontStyle: objectTitleFontStyle,
							ObjectTitleFontColor: objectTitleFontColor,
							ObjectTitleFontSize: objectTitleFontSize,
						}
					},
					ObjectSubTitle: {
						label: 'Подзаголовок виджета',
						type: 'items',
						items: {
							ObjectSubTitleBackgroundColor: objectSubTitleBackgroundColor,
							ObjectSubTitlePaddingLeft: objectSubTitlePaddingLeft,
							ObjectSubTitlePaddingTop: objectSubTitlePaddingTop,
							ObjectSubTitleFontFamily: objectSubTitleFontFamily,
							ObjectSubTitleFontType: objectSubTitleFontType,
							ObjectSubTitleFontWight: objectSubTitleFontWight,
							ObjectSubTitleFontStyle: objectSubTitleFontStyle,
							ObjectSubTitleFontColor: objectSubTitleFontColor,
							ObjectSubTitleFontSize: objectSubTitleFontSize,
						}
					},
					ObjectFootTitle: {
						label: 'Сноска виджета',
						type: 'items',
						items: {
							ObjectFootTitleBackgroundColor: objectFootTitleBackgroundColor,
							ObjectFootTitlePaddingLeft: objectFootTitlePaddingLeft,
							ObjectFootTitlePaddingTop: objectFootTitlePaddingTop,
							ObjectFootTitleBorderTop: objectFootTitleBorderTop,
							ObjectFootTitleBorderTopWidth: objectFootTitleBorderTopWidth,
							ObjectFootTitleBorderTopType: objectFootTitleBorderTopType,
							ObjectFootTitleBorderTopColor: objectFootTitleBorderTopColor,
							ObjectFootTitleFontFamily: objectFootTitleFontFamily,
							ObjectFootTitleFontType: objectFootTitleFontType,
							ObjectFootTitleFontWight: objectFootTitleFontWight,
							ObjectFootTitleFontStyle: objectFootTitleFontStyle,
							ObjectFootTitleFontColor: objectFootTitleFontColor,
							ObjectFootTitleFontSize: objectFootTitleFontSize,
						}
					}
				}
			},
		}
	};
	/*--------------------------------------------------*/

	return {
		type: "items",
		component: "accordion",
		items: {
			settings: {
				uses: "settings",
			},
			BrandLogo: brandLogo,
			AppSettings: global,
			About: about,
		},
	};
});