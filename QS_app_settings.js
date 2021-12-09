define([
	"qlik",
	"jquery",
	"./src/properties",
	"./src/initialproperties",
	"css!./src/css/index.css",

], function (
	qlik,
	$,
	props,
	initProps,
	useStyle,
) {
	'use strict';
	return {
		definition: props,
		initialProperties: initProps,
		//template: "",
		support: {
			snapshot: true,
			export: false,
			exportData: false
		},
		paint: function ($element, layout) {
			console.log(layout);
			$element.empty();
			let html = '';
			let hideElement = '';
			let cssText = '';

			/*---Заголовок листа---*/
			const sheetTitleContainer = document.querySelector('.sheet-title-container');

			//Скрытие заголовка
			if (!layout.titleHide) {
				sheetTitleContainer.classList.remove('hide');
			} else {
				sheetTitleContainer.classList.add('hide');
			}

			//Фон заголовка
			if (layout.titleBackgroundColor !== '') {
				cssText += `
				.sheet-title-container {
					background-color: ${layout.titleBackgroundColor} !important;
				}
				`;
			} else {
				cssText += `
				.sheet-title-container {
					background-color: "#f2f2f2" !important;
				}
				`;
			}

			//Цвет заголовка
			if (layout.titleColor !== '') {
				cssText += `
				.sheet-title-text {
					color: ${layout.titleColor};
				}
				`;
			} else {
				cssText += `
				.sheet-title-text {
					color: "#b0afae";
				}
				`;
			}

			//Положение заголовка
			if (layout.titlePosition !== '') {
				cssText += `
				.sheet-title-text {
					text-align: ${layout.titlePosition};
				}
				`;
			} else {
				cssText += `
				.sheet-title-text {
					text-align: "left";
				}
				`;
			}

			//Размер шрифта
			if (layout.titleSize !== '') {
				cssText += `
				.sheet-title-text {
					font-size: ${layout.titleSize}px;
				}
				`;
			} else {
				cssText += `
				.sheet-title-text {
					font-size: 23px;
				}
				`;
			}

			//Шрифт заголовка
			if (layout.titleFontFamily !== '') {
				cssText += `
				.sheet-title-text {
					font-family: ${layout.titleFontFamily}, ${layout.titleFontType};
				}
				`;
			} else {
				cssText += `
				.sheet-title-text {
					font-family: 'Source Sans Pro, sans-serif';
				}
				`;
			}

			//Стиль шрифта
			if (layout.titleFontStyle !== '') {
				cssText += `
				.sheet-title-text {
					font-style: ${layout.titleFontStyle};
				}
				`;
			} else {
				cssText += `
				.sheet-title-text {
					font-style: 'normal';
				}
				`;
			}

			//Начертание
			if (layout.titleFontWight !== '') {
				cssText += `
				.sheet-title-text {
					font-weight: ${layout.titleFontWight};
				}
				`;
			} else {
				cssText += `
				.sheet-title-text {
					font-weight: 400;
				}
				`;
			}

			/*------------------------------------------------------------------------------------------------------*/

			/*---Лист---*/
			const sheet = document.querySelector('.qvt-sheet');
			const sheetObjects = document.querySelectorAll('.qv-object *')

			//Цвет фона
			if (layout.sheetBackgroundColor !== '') {
				cssText += `
				.qvt-sheet, .qvt-sheet:not(.sheet-title-container) {
					background-color: ${layout.sheetBackgroundColor} !important;
				}
				`;
			} else {
				cssText += ` 
				.qvt-sheet, .qvt-sheet:not(.sheet-title-container) {
					background-color: #f2f2f2 !important;
				}
				`;
			}

			//Шрифт на листе
			if (layout.sheetFontFamily !== '') {
				cssText += `
				.qv-object * {
					font-family: ${layout.sheetFontFamily}, ${layout.sheetFontType};
				}
				`;
			} else {
				cssText += `
				.qv-object * {
					font-family: 'Source Sans Pro, sans-serif';
				}
				`;
			}

			//Начертание шрифта
			if (layout.sheetFontWight !== '') {
				cssText += `
				.qvt-sheet {
					font-weight: ${layout.sheetFontWight};
				}
				`;
			} else {
				cssText += `
				.qvt-sheet {
					font-weight: 400;
				}
				`;
			}

			//Стиль шрифта
			if (layout.sheetFontStyle !== '') {
				cssText += `
				.qv-object * {
					font-style: ${layout.sheetFontStyle};
				}
				`;
			} else {
				cssText += `
				.qv-object * {
					font-style: 'normal';
				}
				`;
			}

			//Цвет шрифта
			if (layout.sheetFontColor !== '') {
				cssText += `
				.qv-object * {
					color: ${layout.sheetFontColor};
				}
				`;
			} else {
				cssText += `
				.qv-object * {
					color: #595959;
				}
				`;
			}

			//Расстояние между виджетами
			if (layout.sheetObjectGap !== '') {
				cssText += `
				.sheet-grid .qv-gridcell {
					border: ${layout.sheetObjectGap}px solid transparent !important;
				}
				`;
			} else {
				cssText += `
				.sheet-grid .qv-gridcell {
					border: 2px solid transparent !important;
				}
				`;
			}
			/*------------------------------------------------------------------------------------------------------*/

			/*---Виджеты---*/

			//Цвет фона оболочки
			if (layout.objectWrapperBackgroundColor !== '') {
				cssText += `
				#grid .cell-content {
					background-color: ${layout.objectWrapperBackgroundColor}  !important;
				}
				`;
			} else {
				cssText += `
				#grid .cell-content {
					background-color: transparent  !important;
				}
				`;
			}

			//Тень от оболочки виджета
			if (layout.objectFilterDropShadowTitle !== '') {
				cssText += `
				#grid .cell-content {
					filter: drop-shadow(${layout.objectFilterDropShadowOffsetX}px ${layout.objectFilterDropShadowOffsetY}px ${layout.objectFilterDropShadowBlurRadius}px ${layout.objectFilterDropShadowColor});
				}
				`;
			} else {
				cssText += `
				#grid .cell-content {
					filter: none;
				}
				`;
			}

			//Радиус оболочки виджета
			if (layout.objectWrapperBorderRadius !== '') {
				cssText += `
				.qv-client.qv-card #qv-stage-container #grid .qv-object-wrapper .qv-object, 
				.qv-client.qv-card .qv-story-sheet .sheet-container #grid .qv-object-wrapper .qv-object {
					border-radius: ${layout.objectWrapperBorderRadius}px;
				}
				`;
			} else {
				cssText += `
				.qv-client.qv-card #qv-stage-container #grid .qv-object-wrapper .qv-object, 
				.qv-client.qv-card .qv-story-sheet .sheet-container #grid .qv-object-wrapper .qv-object {
					border-radius: 4px;
				}
				`;
			}

			//Обводка оболочки виджета
			if (layout.objectWrapperBorder !== '') {
				cssText += `
				.qv-client.qv-card #qv-stage-container #grid .qv-object-wrapper .qv-object, 
				.qv-client.qv-card .qv-story-sheet .sheet-container #grid .qv-object-wrapper .qv-object {
					border: ${layout.objectWrapperBorderWidth}px ${layout.objectWrapperBorderType} ${layout.objectWrapperBorderColor};
				}
				`;
			} else {
				cssText += `
				.qv-client.qv-card #qv-stage-container #grid .qv-object-wrapper .qv-object, 
				.qv-client.qv-card .qv-story-sheet .sheet-container #grid .qv-object-wrapper .qv-object {
					border: none;
				}
				`;
			}

			//Фон виджета
			if (layout.objectBackgroundColor !== '') {
				cssText += `
				.qv-client.qv-card #qv-stage-container #grid .qv-object-wrapper .qv-inner-object, 
				.qv-client.qv-card .qv-story-sheet .sheet-container #grid .qv-object-wrapper .qv-inner-object {
					background-color: ${layout.objectBackgroundColor} !important;
				}
				`;
			} else {
				cssText += `
				.qv-client.qv-card #qv-stage-container #grid .qv-object-wrapper .qv-inner-object, 
				.qv-client.qv-card .qv-story-sheet .sheet-container #grid .qv-object-wrapper .qv-inner-object {
					background-color: #fff  !important;
				}
				`;
			}

			//Радиус виджета
			if (layout.objectBorderRadius !== '') {
				cssText += `
				.qv-client.qv-card #qv-stage-container #grid .qv-object-wrapper .qv-inner-object, 
				.qv-client.qv-card .qv-story-sheet .sheet-container #grid .qv-object-wrapper .qv-inner-object {
					border-radius: ${layout.objectBorderRadius}px;
				}
				`;
			} else {
				cssText += `
				.qv-client.qv-card #qv-stage-container #grid .qv-object-wrapper .qv-inner-object, 
				.qv-client.qv-card .qv-story-sheet .sheet-container #grid .qv-object-wrapper .qv-inner-object {
					border-radius: 4px;
				}
				`;
			}

			//Обводка виджета
			if (layout.objectBorder !== '') {
				cssText += `
				.qv-client.qv-card #qv-stage-container #grid .qv-object-wrapper .qv-inner-object, 
				.qv-client.qv-card .qv-story-sheet .sheet-container #grid .qv-object-wrapper .qv-inner-object {
					border: ${layout.objectBorderWidth}px ${layout.objectBorderType} ${layout.objectBorderColor};
				}
				`;
			} else {
				cssText += `
				.qv-client.qv-card #qv-stage-container #grid .qv-object-wrapper .qv-inner-object, 
				.qv-client.qv-card .qv-story-sheet .sheet-container #grid .qv-object-wrapper .qv-inner-object{
					border: none;
				}
				`;
			}

			//Фон заголовка виджета
			if (layout.objectTitleBackgroundColor !== '') {
				cssText += `
				.qv-client.qv-card #qv-stage-container #grid .qv-object .qv-object-title, 
				.qv-client.qv-card .qv-story-sheet .sheet-container #grid .qv-object .qv-object-title {
					background-color: ${layout.objectTitleBackgroundColor} !important;
				}
				`;
			} else {
				cssText += `
				.qv-client.qv-card #qv-stage-container #grid .qv-object .qv-object-title, 
				.qv-client.qv-card .qv-story-sheet .sheet-container #grid .qv-object .qv-object-title {
					background-color: #fff !important;
				}
				`;
			}

			//Отступ слева заголовка виджета
			if (layout.objectTitlePaddingLeft !== '') {
				cssText += `
				.qv-client.qv-card #qv-stage-container #grid .qv-object .qv-object-title, 
				.qv-client.qv-card .qv-story-sheet .sheet-container #grid .qv-object .qv-object-title {
					padding-left: ${layout.objectTitlePaddingLeft}px !important;
				}
				`;
			} else {
				cssText += `
				.qv-client.qv-card #qv-stage-container #grid .qv-object .qv-object-title, 
				.qv-client.qv-card .qv-story-sheet .sheet-container #grid .qv-object .qv-object-title {
					padding-left: 0 !important;
				}
				`;
			}

			//Отступ сверху заголовка виджета
			if (layout.objectTitlePaddingTop !== '') {
				cssText += `
				.qv-client.qv-card #qv-stage-container #grid .qv-object .qv-object-title, 
				.qv-client.qv-card .qv-story-sheet .sheet-container #grid .qv-object .qv-object-title {
					padding-top: ${layout.objectTitlePaddingTop}px !important;
				}
				`;
			} else {
				cssText += `
				.qv-client.qv-card #qv-stage-container #grid .qv-object .qv-object-title, 
				.qv-client.qv-card .qv-story-sheet .sheet-container #grid .qv-object .qv-object-title {
					padding-top: 0 !important;
				}
				`;
			}

			//Шрифт заголовка виджета
			if (layout.objectTitleFontFamily !== '') {
				cssText += `
				.qv-object .qv-object-title .qv-object-title-text,
				.qv-inline-edit-value, .qv-object-filterpane .qv-object-listbox .add-content .add-text {
					font-family: ${layout.objectTitleFontFamily}, ${layout.objectTitleFontType} !important;
				}
				`;
			} else {
				cssText += `
				.qv-object .qv-object-title .qv-object-title-text,
				.qv-inline-edit-value, .qv-object-filterpane .qv-object-listbox .add-content .add-text {
					font-family: 'Source Sans Pro, sans-serif' !important;
				}
				`;
			}

			//Начертание шрифта
			if (layout.objectTitleFontWight !== '') {
				cssText += `
				.qv-object .qv-object-title .qv-object-title-text,
				.qv-inline-edit-value, .qv-object-filterpane .qv-object-listbox .add-content .add-text {
					font-weight: ${layout.objectTitleFontWight} !important;
				}
				`;
			} else {
				cssText += `
				.qv-object .qv-object-title .qv-object-title-text,
				.qv-inline-edit-value, .qv-object-filterpane .qv-object-listbox .add-content .add-text {
					font-weight: 400 !important;
				}
				`;
			}

			//Стиль шрифта
			if (layout.objectTitleFontStyle !== '') {
				cssText += `
				.qv-object .qv-object-title .qv-object-title-text,
				.qv-inline-edit-value, .qv-object-filterpane .qv-object-listbox .add-content .add-text {
					font-style: ${layout.objectTitleFontStyle} !important;
				}
				`;
			} else {
				cssText += `
				.qv-object .qv-object-title .qv-object-title-text,
				.qv-inline-edit-value, .qv-object-filterpane .qv-object-listbox .add-content .add-text {
					font-style: 'normal' !important;
				}
				`;
			}

			//Цвет шрифта
			if (layout.objectTitleFontColor !== '') {
				cssText += `
				.qv-object .qv-object-title .qv-object-title-text,
				.qv-inline-edit-value, .qv-object-filterpane .qv-object-listbox .add-content .add-text {
					color: ${layout.objectTitleFontColor} !important;
				}
				`;
			} else {
				cssText += `
				.qv-object .qv-object-title .qv-object-title-text,
				.qv-inline-edit-value, .qv-object-filterpane .qv-object-listbox .add-content .add-text {
					color: #595959 !important;
				}
				`;
			}

			//Размер шрифта
			if (layout.objectTitleFontSize !== '') {
				cssText += `
				.qv-object .qv-object-title .qv-object-title-text,
				.qv-inline-edit-value, .qv-object-filterpane .qv-object-listbox .add-content .add-text {
					font-size: ${layout.objectTitleFontSize}px !important;
				}
				`;
			}

			//Фон подзаголовка виджета
			if (layout.objectSubTitleBackgroundColor !== '') {
				cssText += `
				.qv-object .qvt-visualization-subtitle {
					background-color: ${layout.objectSubTitleBackgroundColor} !important;
				}
				`;
			} else {
				cssText += `
				.qv-object .qvt-visualization-subtitle {
					background-color: #fff !important;
				}
				`;
			}

			//Отступ слева подзаголовка виджета
			if (layout.objectSubTitlePaddingLeft !== '') {
				cssText += `
				.qv-object .qvt-visualization-subtitle {
					padding-left: ${layout.objectSubTitlePaddingLeft}px !important;
				}
				`;
			} else {
				cssText += `
				.qv-object .qvt-visualization-subtitle {
					padding-left: 0 !important;
				}
				`;
			}

			//Отступ сверху подзаголовка виджета
			if (layout.objectSubTitlePaddingTop !== '') {
				cssText += `
				.qv-object .qvt-visualization-subtitle {
					padding-top: ${layout.objectSubTitlePaddingTop}px !important;
				}
				`;
			} else {
				cssText += `
				.qv-object .qvt-visualization-subtitle {
					padding-top: 0 !important;
				}
				`;
			}

			//Шрифт подзаголовка виджета
			if (layout.objectSubTitleFontFamily !== '') {
				cssText += `
				.qv-object .qvt-visualization-subtitle {
					font-family: ${layout.objectSubTitleFontFamily}, ${layout.objectSubTitleFontType} !important;
				}
				`;
			} else {
				cssText += `
				.qv-object .qvt-visualization-subtitle {
					font-family: 'Source Sans Pro, sans-serif' !important;
				}
				`;
			}

			//Начертание шрифта
			if (layout.objectSubTitleFontWight !== '') {
				cssText += `
				.qv-object .qvt-visualization-subtitle {
					font-weight: ${layout.objectSubTitleFontWight} !important;
				}
				`;
			} else {
				cssText += `
				.qv-object .qvt-visualization-subtitle {
					font-weight: 400 !important;
				}
				`;
			}

			//Стиль шрифта
			if (layout.objectSubTitleFontStyle !== '') {
				cssText += `
				.qv-object .qvt-visualization-subtitle {
					font-style: ${layout.objectSubTitleFontStyle} !important;
				}
				`;
			} else {
				cssText += `
				.qv-object .qvt-visualization-subtitle {
					font-style: 'normal' !important;
				}
				`;
			}

			//Цвет шрифта
			if (layout.objectSubTitleFontColor !== '') {
				cssText += `
				.qv-object .qvt-visualization-subtitle {
					color: ${layout.objectSubTitleFontColor} !important;
				}
				`;
			} else {
				cssText += `
				.qv-object .qvt-visualization-subtitle {
					color: #595959 !important;
				}
				`;
			}

			//Размер шрифта
			if (layout.objectSubTitleFontSize !== '') {
				cssText += `
				.qv-object .qvt-visualization-subtitle {
					font-size: ${layout.objectSubTitleFontSize}px !important;
				}
				`;
			}

			//Фон сноски виджета
			if (layout.objectFootTitleBackgroundColor !== '') {
				cssText += `
				.qv-client.qv-card #qv-stage-container #grid .qv-object .qv-footer-wrapper, 
				.qv-client.qv-card .qv-story-sheet .sheet-container #grid .qv-object .qv-footer-wrapper {
					background-color: ${layout.objectFootTitleBackgroundColor} !important;
				}
				`;
			} else {
				cssText += `
				.qv-client.qv-card #qv-stage-container #grid .qv-object .qv-footer-wrapper, 
				.qv-client.qv-card .qv-story-sheet .sheet-container #grid .qv-object .qv-footer-wrapper {
					background-color: #fff !important;
				}
				`;
			}

			//Отступ слева сноски виджета
			if (layout.objectFootTitlePaddingLeft !== '') {
				cssText += `
				.qv-client.qv-card #qv-stage-container #grid .qv-object .qv-footer-wrapper, 
				.qv-client.qv-card .qv-story-sheet .sheet-container #grid .qv-object .qv-footer-wrapper {
					padding-left: ${layout.objectFootTitlePaddingLeft}px !important;
				}
				`;
			} else {
				cssText += `
				.qv-client.qv-card #qv-stage-container #grid .qv-object .qv-footer-wrapper, 
				.qv-client.qv-card .qv-story-sheet .sheet-container #grid .qv-object .qv-footer-wrapper {
					padding-left: 0 !important;
				}
				`;
			}

			//Отступ сверху сноски виджета
			if (layout.objectFootTitlePaddingTop !== '') {
				cssText += `
				.qv-client.qv-card #qv-stage-container #grid .qv-object .qv-footer-wrapper, 
				.qv-client.qv-card .qv-story-sheet .sheet-container #grid .qv-object .qv-footer-wrapper {
					padding-top: ${layout.objectFootTitlePaddingTop}px !important;
				}
				`;
			} else {
				cssText += `
				.qv-client.qv-card #qv-stage-container #grid .qv-object .qv-footer-wrapper, 
				.qv-client.qv-card .qv-story-sheet .sheet-container #grid .qv-object .qv-footer-wrapper {
					padding-top: 0 !important;
				}
				`;
			}

			//Верхняя граница сноски
			if (layout.objectFootTitleBorderTop !== '') {
				cssText += `
				.qv-client.qv-card #qv-stage-container #grid .qv-object .qv-footer-wrapper, 
				.qv-client.qv-card .qv-story-sheet .sheet-container #grid .qv-object .qv-footer-wrapper {
					border-top: ${layout.objectFootTitleBorderTopWidth}px ${layout.objectFootTitleBorderTopType} ${layout.objectFootTitleBorderTopColor};
				}
				`;
			} else {
				cssText += `
				.qv-client.qv-card #qv-stage-container #grid .qv-object .qv-footer-wrapper, 
				.qv-client.qv-card .qv-story-sheet .sheet-container #grid .qv-object .qv-footer-wrapper {
					border-top: none;
				}
				`;
			}

			//Шрифт сноски виджета
			if (layout.objectFootTitleFontFamily !== '') {
				cssText += `
				.qv-object .qv-object-footnote {
					font-family: ${layout.objectFootTitleFontFamily}, ${layout.objectFootTitleFontType} !important;
				}
				`;
			} else {
				cssText += `
				.qv-object .qv-object-footnote {
					font-family: 'Source Sans Pro, sans-serif' !important;
				}
				`;
			}

			//Начертание шрифта
			if (layout.objectFootTitleFontWight !== '') {
				cssText += `
				.qv-object .qv-object-footnote {
					font-weight: ${layout.objectFootTitleFontWight} !important;
				}
				`;
			} else {
				cssText += `
				.qv-object .qv-object-footnote {
					font-weight: 400 !important;
				}
				`;
			}

			//Стиль шрифта
			if (layout.objectFootTitleFontStyle !== '') {
				cssText += `
				.qv-object .qv-object-footnote {
					font-style: ${layout.objectFootTitleFontStyle} !important;
				}
				`;
			} else {
				cssText += `
				.qv-object .qv-object-footnote {
					font-style: 'normal' !important;
				}
				`;
			}

			//Цвет шрифта
			if (layout.objectFootTitleFontColor !== '') {
				cssText += `
				.qv-object .qv-object-footnote {
					color: ${layout.objectFootTitleFontColor} !important;
				}
				`;
			} else {
				cssText += `
				.qv-object .qv-object-footnote {
					color: #595959 !important;
				}
				`;
			}

			//Размер шрифта
			if (layout.objectFootTitleFontSize !== '') {
				cssText += `
				.qv-object .qv-object-footnote {
					font-size: ${layout.objectFootTitleFontSize}px !important;
				}
				`;
			}

			/*------------------------------------------------------------------------------------------------------*/

			const bcgImage = "./jsamurai.png";

			if (layout.brandLogo === "") {
				html += `<div
							id="QS_app_global_settings"
							style="
							display: flex;
							flex-direction: column;
							height: 100%;
							"
						>
						<div 
						id="QS_app_global_settings_plug_text"
						style="
							height: 10%;
							"
						>
						Добавьте лого во вкладке "Логотип"
						</div>
						<div 
							id="QS_app_global_settings_plug_img" 
							style="
							height: 90%;
							background-image: url(${bcgImage});
							background-size: contain;
							background-repeat: no-repeat;
							background-position: center;
							background-origin: inherit;
							background-clip: content-box;
							" 
							>
							</div>
						</div>`
			} else {
				html += `<div 
							id="QS_app_global_settings"
							style="
							display: flex;
							flex-grow: 1;
							height: 100%;
							"
						>
							<div 
							id="QS_app_global_settings_logo" 
							style="
							height: 100%;
							width: 100%;
							background-image: url(${layout.brandLogo});
							background-size: contain;
							background-repeat: no-repeat;
							background-position: center;
							background-origin: inherit;
							background-clip: content-box;
							" 
							>
							</div>
						</div>`
					;
			}

			hideElement += `<div id="hideElementId" style="display: none; visibility: hidden; opacity: 0;"></div>`

			$element.html(html);
			$element.append(hideElement);
			$('#hideElementId').html(`<style>${cssText}</style>`)

			/* Возврат готового промиса */
			return qlik.Promise.resolve();
		}
	}
});