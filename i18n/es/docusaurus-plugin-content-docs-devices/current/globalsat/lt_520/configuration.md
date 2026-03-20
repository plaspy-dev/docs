---
slug: /globalsat/lt_520/configuration
id: lt_520-configuration
sidebar_label: Configuration
title: GlobalSat - LT-520 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el GlobalSat LT-520 con ajustes de servidor Plaspy y comandos SMS de ejemplo
keywords:
  - Configuración GlobalSat LT-520
  - Configuración LT-520
  - LT-520 Plaspy
  - Configuración rastreador Plaspy
  - Configuración rastreador GPS GlobalSat
  - Configuración seguimiento de activos
  - Configuración rastreador LoRaWAN
  - Configuración plataforma GPS
  - Configuración rastreador para gestión de flotas
  - Configuración SMS LT-520
---

# GlobalSat - LT-520 Configuración

Esta página describe el contexto público de configuración para usar el GlobalSat LT-520 con la plataforma Plaspy. Se centra en los ajustes de servidor y el flujo de configuración prácticos que necesita para apuntar el dispositivo a Plaspy y verificar que reporta correctamente. Cuando están disponibles, se incluyen ejemplos de comandos del fabricante como referencia.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. La documentación del LT-520 y los ejemplos de comandos SMS mostrados más abajo se proporcionan como orientación pública; verifique los detalles con los recursos del fabricante para la versión de firmware o la variante específica que tenga.

## Resumen de configuración

El objetivo de la configuración es preparar el LT-520 para que envíe ubicación y telemetría a Plaspy, de modo que el dispositivo aparezca en la plataforma y pueda monitorearse en tiempo real. Esto normalmente implica establecer el endpoint del servidor, el puerto, el tipo de transporte y cualquier parámetro de red que el dispositivo requiera.

- Apuntar el rastreador al endpoint de servidor de Plaspy para que los uplinks sean recibidos por la plataforma.
- Configurar el transporte y el puerto del dispositivo para que pueda establecer la conexión.
- Proporcionar las credenciales de red necesarias según el método de configuración del dispositivo, por ejemplo valores de APN si se usa uplink IP vía SMS por celular.
- Guardar y aplicar los ajustes, luego reiniciar o reiniciar el dispositivo según sea necesario para activar la nueva configuración.
- Validar la visibilidad y la telemetría del dispositivo en Plaspy una vez que el equipo esté reportando a la plataforma.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos usan el mismo puerto para las conexiones al servidor

Estos valores son el endpoint público de Plaspy y deben usarse al configurar el rastreador para que reporte directamente a Plaspy.

## Requisitos típicos antes de la configuración

- Acceso al método o software oficial de configuración del fabricante para el LT-520.
- El dispositivo con alimentación y accesible para la configuración; siga la guía de instalación proporcionada por GlobalSat.
- Si utiliza configuración por SMS, asegúrese de que el dispositivo tenga una SIM activa y pueda recibir mensajes SMS.
- Tener el IMEI del dispositivo a mano para usarlo en comandos SMS o en la herramienta del proveedor.
- APN y credenciales de red cuando el dispositivo requiera ajustes de datos celulares para uplinks IP (los ejemplos usan marcadores de posición).
- Una forma de recibir registros del dispositivo o respuestas de estado tras la configuración para confirmar el éxito.

## Cómo se conecta este rastreador a Plaspy

Según el firmware y las herramientas del proveedor, el rastreador puede configurarse para reportar a Plaspy usando un uplink IP o a través de un backend de red. En todos los casos, Plaspy recibe los datos del rastreador en el mismo endpoint de servidor y puerto compartidos, y detectará automáticamente el protocolo utilizado por el dispositivo.

- El rastreador se configura para reportar al endpoint compartido de Plaspy d.plaspy.com en el puerto 8888.
- Plaspy acepta transporte UDP o TCP y detectará el protocolo automáticamente.
- Una vez configurado, el dispositivo envía ubicación y telemetría a Plaspy, donde se hace visible en la plataforma.
- La plataforma utiliza la telemetría entrante para monitoreo en tiempo real, alertas e historial.
- Los pasos de validación confirman que el dispositivo está reportando correctamente a Plaspy en el puerto compartido.

## Flujo común de configuración

1. Acceda al método de configuración oficial de GlobalSat o al software para el LT-520, o prepárese para enviar comandos SMS si su firmware lo admite.
2. Ingrese el servidor Plaspy como dominio d.plaspy.com o como la IP 54.85.159.138 en la configuración del dispositivo.
3. Establezca el puerto del servidor en 8888; tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos.
4. Seleccione UDP o TCP como transporte si el dispositivo requiere elegir el tipo de transporte.
5. Configure parámetros de red adicionales como APN, usuario APN y contraseña APN si usa uplinks IP por celular.
6. Aplique o guarde la configuración en la herramienta del proveedor o envíe los comandos SMS de configuración que se muestran más abajo.
7. Reinicie o haga un reinicio del dispositivo si es necesario para aplicar los ajustes.
8. Valide que el dispositivo aparezca y reporte correctamente en Plaspy.

## Comandos de configuración de ejemplo

El material del proveedor para el LT-520 incluye ejemplos de comandos SMS para establecer el servidor y reiniciar el dispositivo. Estos comandos son públicos y se muestran aquí en forma depurada. Mantenga los marcadores de posición al sustituir sus valores.

Nota sobre el formato: la página del fabricante indica un formato general de mensaje como
TSPRXAB27GHKLMnaicz*U!
A continuación están los dos comandos extraídos del contenido del proveedor.

1) Configurar el rastreador para que reporte a Plaspy
- Descripción: reemplace [imei] por el IMEI del dispositivo y [apn], [apnu], [apnp] por el APN, usuario APN y contraseña APN de su operador. El comando requiere un valor de checksum agregado antes del signo de exclamación final. El checksum se calcula aplicando XOR a los valores byte de la cadena del comando antes del asterisco y convirtiendo el resultado a una cadena hexadecimal de dos dígitos en mayúsculas.

Example SMS command:
```text
GSS,[imei],3,0,D1=[apn],D2=[apnu],D3=[apnp],E0=54.85.159.138,E1=8888,A1=1*[checksum]!
```

2) Reiniciar el dispositivo (opcional, usar si se necesita un reinicio para aplicar ajustes)
- Descripción: reemplace [imei] y proporcione el checksum correcto para la cadena del comando de reinicio de la misma manera que se describió arriba.

Example SMS reboot command:
```text
GSC,[imei],3,0,LH*[checksumreeboot]!
```

Resumen de generación del checksum
- El script público del proveedor calcula el checksum aplicando XOR a los códigos de los caracteres del texto del comando hasta, pero sin incluir, el asterisco, y luego convierte el resultado numérico a una cadena hexadecimal de dos caracteres en mayúsculas. Muchas herramientas del proveedor calculan esto automáticamente; si envía SMS manualmente debe calcular y añadir el valor del checksum.

Explicación de los marcadores de posición
- [imei]: número IMEI del dispositivo
- [apn]: nombre del APN para datos celulares
- [apnu]: nombre de usuario del APN si es requerido
- [apnp]: contraseña del APN si es requerida
- [checksum] y [checksumreeboot]: valores de checksum calculados según lo descrito más arriba

## Notas de configuración

- Las diferencias de firmware pueden cambiar qué métodos de configuración están disponibles; consulte la documentación de GlobalSat para el firmware de su dispositivo antes de proceder.
- El método SMS provisto por el vendedor es una vía pública; pueden existir otros métodos como herramienta de configuración, aprovisionamiento por BLE o configuración mediante backend LoRaWAN según la variante del LT-520.
- Elija TCP o UDP según su entorno de red y la opción disponible en el firmware del dispositivo; Plaspy soporta ambos y detectará el protocolo automáticamente.
- Plaspy requiere el puerto compartido 8888 para todos los dispositivos; no lo cambie al apuntar dispositivos a Plaspy.
- Verifique siempre los valores de IMEI y APN antes de enviar comandos de configuración para evitar una mala configuración.

## Por qué usar Plaspy con esta configuración

Usar el LT-520 con Plaspy permite a las organizaciones recibir datos de seguimiento de activos de larga duración y localización híbrida interior/exterior en una plataforma centralizada de gestión de flotas o activos. Con el endpoint de servidor y el puerto de Plaspy configurados correctamente, los dispositivos reportan telemetría y eventos para que los equipos operativos puedan monitorear ubicación, movimiento y estado del dispositivo desde un único panel.

Para obtener más información sobre Plaspy y los flujos de trabajo de dispositivos compatibles visite https://www.plaspy.com. Los métodos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que le recomendamos verificar la información de configuración más reciente con GlobalSat en https://www.globalsat.com.tw/.
