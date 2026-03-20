---
slug: /globalsat/kt_520m/configuration
id: kt_520m-configuration
sidebar_label: Configuration
title: GlobalSat - KT-520M Configuration
sidebar_class_name: menu_item_tracker
description: Configure el GlobalSat KT-520M para Plaspy con ajustes de servidor público, ejemplos de SMS y guía práctica
keywords:
  - GlobalSat KT-520M
  - configuración KT-520M
  - configuración rastreador GlobalSat
  - configuración KT-520M Plaspy
  - configuración rastreador GPS
  - configuración rastreador LTE M
  - rastreador satelital Kineis
  - configuración plataforma GPS
  - configuración rastreo vehicular
  - configuración dispositivo rastreo de flota
---

# GlobalSat - KT-520M: Configuración

Esta página documenta el contexto público de configuración para usar el GlobalSat KT-520M con Plaspy. Resume los ajustes compartidos del servidor Plaspy que debe aplicar al dispositivo, explica el concepto de conexión de extremo a extremo y recoge las plantillas públicas de comandos SMS extraídas del contenido del fabricante que se usan comúnmente para apuntar un KT-520M a Plaspy.

El KT-520M soporta conectividad LTE‑M como primario con conmutación a satélite Kineis, configuración local y OTA vía BLE y operación con batería de larga duración. Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos en el lado del fabricante pueden variar según la versión de firmware, el lote de hardware, el tipo de instalación y las herramientas del proveedor, así que use esta página como guía pública práctica y confirme los pasos específicos del dispositivo con la documentación del fabricante.

## Resumen de la configuración

El objetivo del proceso de configuración es preparar el KT-520M para que reporte posición y telemetría a Plaspy y validar que el dispositivo sea visible en su cuenta de Plaspy. La configuración normalmente establece el endpoint y puerto del servidor, los parámetros APN de la SIM si se requiere conectividad celular, y cualquier selección de transporte que solicite el firmware del dispositivo.

- Configure el dispositivo para enviar datos al endpoint del servidor Plaspy para que la ubicación y los eventos lleguen a la plataforma.
- Complete los campos de APN y relacionados con la SIM si el KT-520M operará sobre LTE‑M.
- Seleccione el método de transporte soportado por el firmware del dispositivo y establezca el puerto compartido de Plaspy.
- Valide la conectividad y confirme que el rastreador aparece en Plaspy con el IMEI y la telemetría esperados.
- Opcionalmente reinicie el dispositivo después de aplicar los ajustes para asegurar que la nueva configuración quede activa.

## Valores del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos típicos antes de la configuración

- Dispositivo alimentado e instalado según las instrucciones del fabricante para que pueda aceptar comandos de configuración.
- Una SIM de datos celular válida y los valores APN correctos si se usa LTE‑M como transporte primario.
- Tener a mano el IMEI del KT-520M para usarlo en los comandos y para el registro del dispositivo en Plaspy.
- Acceso al método de configuración soportado por el fabricante, como SMS, configuración local vía BLE o software del proveedor.
- Conocimiento básico de si el firmware del dispositivo espera transporte UDP o TCP al apuntar a un servidor remoto.
- Una cuenta en Plaspy y acceso a la vista de su organización para confirmar que el dispositivo reporta después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El KT-520M se configura para reportar coordenadas GNSS, señales de movimiento y manipulación, y estado de batería al endpoint y puerto compartidos de Plaspy para que la plataforma ingiera la telemetría y muestre el dispositivo en paneles, active alertas e incluya los datos en informes.

- Transporte de datos primario por LTE‑M con conmutación a satélite Kineis cuando corresponda para mayor continuidad.
- El dispositivo se apunta a d.plaspy.com o a la IP 54.85.159.138 y utiliza el puerto 8888 para todos los dispositivos Plaspy.
- El transporte puede ser UDP o TCP según la configuración del firmware; Plaspy soporta ambos y detecta el protocolo correcto.
- Plaspy recibe la telemetría, muestra el dispositivo en la plataforma y utiliza los datos para historial de ubicación, detección de movimiento/manipulación y monitoreo de batería.
- Tras la configuración y el envío de datos, valide la visibilidad en Plaspy buscando por IMEI y comprobando actualizaciones recientes de posición.

## Flujo típico de configuración

1. Acceda al método oficial de configuración del fabricante o al software para el KT-520M. Esto puede ser herramientas locales BLE, software de configuración del proveedor o comandos SMS documentados por el fabricante.
2. Ingrese el servidor de Plaspy como el dominio d.plaspy.com o la IP 54.85.159.138 en el campo de servidor o host remoto del dispositivo.
3. Establezca el valor del puerto a 8888. Todos los dispositivos en Plaspy usan el mismo puerto, por lo que debe usar 8888 de forma consistente.
4. Elija UDP o TCP si el firmware del dispositivo requiere seleccionar un protocolo de transporte.
5. Agregue los valores necesarios de APN, usuario y contraseña para su SIM en los campos de configuración del dispositivo si usa datos celulares.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware o el flujo de trabajo requieren un reinicio.
7. Valide que el dispositivo reporta a Plaspy localizándolo por IMEI y confirmando telemetría reciente en su cuenta Plaspy.

## Comandos de configuración de ejemplo

El fabricante proporciona plantillas públicas de comandos SMS que pueden usarse para establecer el APN, los detalles del servidor y para reiniciar el dispositivo. Primero se muestra el ejemplo de framing que usa el contenido del dispositivo. Sustituya los marcadores donde se indique.

- Ejemplo de framing usado en el contenido del dispositivo
```
TSPRXAB27GHKLMnaicz*U!
```

- Plantilla de comando de configuración primaria
```
GSS,{{imei}},3,0,D1=[apn],D2=[apnu],D3=[apnp],E0=54.85.159.138,E1=8888,A1=1*{{checksum}}!
```
Explicación:
- {{imei}} es el número IMEI del dispositivo.
- [apn] es el nombre del APN para su SIM celular.
- [apnu] es el marcador de nombre de usuario del APN si lo requiere el operador.
- [apnp] es el marcador de contraseña del APN si lo requiere el operador.
- E0 establece la IP del servidor a 54.85.159.138 y E1 establece el puerto a 8888 para Plaspy.
- El comando incluye un marcador de checksum {{checksum}} que debe calcularse como se describe a continuación.

- Plantilla de comando de reinicio (reinicio opcional tras la configuración)
```
GSC,{{imei}},3,0,LH*{{checksumreeboot}}!
```
Etiqueta: paso de reinicio opcional para aplicar los ajustes si su flujo de trabajo requiere reiniciar el dispositivo.

Cálculo del checksum (algoritmo público extraído del contenido del fabricante):
- Calcule el checksum haciendo un XOR de los códigos de carácter del texto del comando hasta, pero sin incluir, el carácter asterisco.
- Convierta el valor resultante a una cadena hexadecimal de dos dígitos en mayúsculas y colóquelo en el marcador de checksum.
- El ejemplo JavaScript público del fabricante utiliza este enfoque para generar {{checksum}} y {{checksumreeboot}}.

Notas sobre el uso de los comandos:
- Mantenga exactamente el orden y la puntuación de las plantillas al enviar SMS al dispositivo.
- Sustituya su IMEI y los marcadores de APN antes de calcular el checksum.
- Si utiliza el dominio d.plaspy.com en lugar de la IP, asegúrese de que el firmware del dispositivo soporte nombres de dominio en los campos de servidor; los ejemplos anteriores usan la IP de Plaspy 54.85.159.138 por claridad.

## Notas adicionales de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis exacta de los comandos o los campos soportados; confirme siempre con la documentación del fabricante del KT-520M para su unidad.
- Si el firmware del dispositivo solicita selección de transporte, elija UDP o TCP según corresponda. Plaspy soporta ambos y detectará automáticamente el protocolo del dispositivo.
- La configuración basada en SMS está soportada por las plantillas públicas mostradas arriba; la configuración local vía BLE o las herramientas del proveedor pueden ofrecer flujos alternativos con los mismos valores de servidor y puerto.
- Al calcular checksums, tenga cuidado de incluir exactamente el texto del comando hasta el asterisco y de producir una cadena hex de dos dígitos en mayúsculas.
- Use los valores del servidor Plaspy mostrados en este documento para asegurar resultados consistentes entre dispositivos: d.plaspy.com o 54.85.159.138 y puerto 8888.

## Por qué usar Plaspy con esta configuración

Usar el KT-520M con Plaspy ofrece una forma confiable de combinar hardware de rastreo robusto y de larga duración con un endpoint de servidor compartido para monitoreo centralizado. Plaspy ingiere ubicación GNSS, eventos de movimiento y manipulación, y estado de batería del KT-520M para que los equipos operativos mantengan visibilidad, creen flujos de alertas y analicen movimientos históricos para gestión de flota y activos.

Para más información sobre Plaspy visite https://www.plaspy.com y revise los detalles de configuración más recientes del fabricante en https://www.globalsat.com.tw/ para confirmar instrucciones específicas del dispositivo y comportamiento del firmware. Las especificaciones del fabricante y los métodos de configuración pueden cambiar con el tiempo, por lo que verifique la información actual en el sitio oficial de GlobalSat al realizar la configuración o el despliegue.
