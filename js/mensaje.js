myColorPorDefecto = "#de019d";
myTextColorPorDefecto="black";

function creaMensaje(myElColor, myTextoElColor){
 myBody = document.getElementsByTagName("body")[0];

 myModal = document.createElement("div");
	myModal.id="simplemodal";
	myModal.style.display="none";
	myModal.style.top="0px";
	myModal.style.left="0px";
	myModal.style.width="100%";
	myModal.style.height="100%";
	myModal.style.position = "fixed";
	
	myModal.style.background='url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjE0QTc4QkIzNTVGMTExRTI5QTVDQzBFNTVGMzgxOTU4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjE0QTc4QkI0NTVGMTExRTI5QTVDQzBFNTVGMzgxOTU4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTRBNzhCQjE1NUYxMTFFMjlBNUNDMEU1NUYzODE5NTgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MTRBNzhCQjI1NUYxMTFFMjlBNUNDMEU1NUYzODE5NTgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6C8rmZAAAAEElEQVR42mI+c+ZMA0CAAQAHwALoSm55MAAAAABJRU5ErkJggg==")';
	myModal.style.fontFamily="Verdana,Arial,sans-serif";
	myModal.style.fontSize="11px";
	myBody.appendChild(myModal);
  
 myMensaje = document.createElement("div");
	myMensaje.id="simplemensaje";
	myMensaje.style.display="block";
	myMensaje.style.maxWidth="300px";
	myMensaje.style.minHeight="120px";
	myMensaje.style.borderRadius="5px";
	myMensaje.style.backgroundColor="#FFF";
	myMensaje.style.boxShadow="5px 5px 15px gray";
	myMensaje.style.margin="200px auto";
	myMensaje.style.border="1px solid gray";
	myMensaje.style.overflow = "hidden";
	myMensaje.style.zIndex = "999";
	myModal.appendChild(myMensaje);	  
  
 myTitulo = document.createElement("div");
	myTitulo.style.minHeight="12px";
	myTitulo.style.color=myTextoElColor;
	myTitulo.style.margin="2px";
	myTitulo.style.padding="5px 6px";
	myTitulo.style.backgroundColor=myElColor;
	myTitulo.style.borderRadius="5px";
	myTitulo.style.border="1px solid gray";
	myTitulo.style.fontWeight="bold";
	myMensaje.appendChild(myTitulo);	

 myBotonCerrar = document.createElement("div");
	myBotonCerrar.style.height="13px";
	myBotonCerrar.id="simplecerrar";
	myBotonCerrar.onclick=function(){cierra()};
	myBotonCerrar.style.width="13px";
	myBotonCerrar.style.Float="right";
	myBotonCerrar.style.cssFloat="right";
	myBotonCerrar.style.border="1px solid gray";
	myBotonCerrar.style.background='url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkMyRDM0N0MzNTVGMTExRTI5MzAwRTIyMjZCQjI3ODExIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkMyRDM0N0M0NTVGMTExRTI5MzAwRTIyMjZCQjI3ODExIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QzJEMzQ3QzE1NUYxMTFFMjkzMDBFMjIyNkJCMjc4MTEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QzJEMzQ3QzI1NUYxMTFFMjkzMDBFMjIyNkJCMjc4MTEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4tkVPbAAAAQklEQVR42nyPwQ0AMAgCgVHcf0f7qrXWei9DLgFpZo4D0x25cONV6KRH2BIxQzVbUDfqV5FzDUKI+lVM37ETlwADANV5CXeuveDpAAAAAElFTkSuQmCC" ) center center no-repeat';
	myTitulo.appendChild(myBotonCerrar);
	
 myCuerpo = document.createElement("div");
	myCuerpo.id="cuerpo";
	myCuerpo.style.minHeight="60px";
	myCuerpo.style.padding="5px 10px";
	myCuerpo.style.textAlign="justify";
	myMensaje.appendChild(myCuerpo);

 myDivisor = document.createElement("hr");
	myDivisor.style.margin="0 5px";
	myDivisor.style.borderTop='1px solid '+myElColor;
	myDivisor.style.backgroundColor=myElColor;
	myMensaje.appendChild(myDivisor);
  
 myBotonAceptar = document.createElement("Button");
	myBotonAceptar.id="simplebotonaceptar";
	myBotonAceptar.onclick=function(){cierra()};
	myBotonAceptar.style.margin="10px auto";
	myBotonAceptar.style.position="relative";
	myBotonAceptar.style.fontSize="inherit";
	myBotonAceptar.style.clear="both";
	myBotonAceptar.style.padding="5px";
	myBotonAceptar.style.borderRadius="5px";
	myBotonAceptar.style.border="1px solid gray";
	myBotonAceptar.style.backgroundColor="#E6E6E6";
	myBotonAceptar.style.display="block";
	myBotonAceptar.style.cursor="pointer";
	myMensaje.appendChild(myBotonAceptar);
  
 myTextoBoton = document.createTextNode("Aceptar");
		myBotonAceptar.appendChild(myTextoBoton);

		}	
function muestraMensaje(myElTitulo, myTexto, myColor, myTextcolor){
		if (myColor == undefined || myColor ==''){myColor = myColorPorDefecto;}
		if (myTextcolor == undefined || myTextcolor ==''){myTextcolor = myTextColorPorDefecto;}
		creaMensaje(myColor, myTextcolor);
		myTextoCuerpo = document.createTextNode(myTexto);
		myCuerpo.appendChild(myTextoCuerpo);	
		
		myTextoTitulo = document.createTextNode(myElTitulo);
		myTitulo.appendChild(myTextoTitulo);		
		$("#simplemodal").fadeIn("slow");
		$("#simplemensaje").fadeIn("slow");
		$("#simplebotonaceptar").focus();
	}	
	
function cierra(){
		
		$("#simplemodal").fadeOut("slow", function(){
				myModal.parentNode.removeChild(myModal);
				});
		$("#simplemensaje").fadeOut("slow");
	}

	