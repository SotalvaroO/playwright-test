# Test con Playwright

## Plan de pruebas

1. Se valida que se haya realizado el login

El script comienza desde que se envia directamente a la página de login, luego ingresa los credenciales, y para verificar que se encuentra en estado de login, se ingresa a editar perfil, el cual solo se puede acceder estando logueado.

2. Se valida que se haya agregado un producto al carro de compras

En la página de inicio, se busca un producto (MacBook), luego de esto se entra a ver el detalle, y por último se valida mediante un mensaje verde que dice si el producto fue agregado.

3. se valida que se haya cerrado la sesión

Este caso de prueba se valida luego de haber dado en el boton login, se asegura que esté en la página post logout.
