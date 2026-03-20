---
slug: /bofan/pt_100/configuration
id: pt_100-configuration
sidebar_label: Configuration
title: Bofan - PT-100 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Bofan PT-100 con ajustes de servidor Plaspy, comandos SMS y pasos prácticos
keywords:
  - configuración Bofan PT-100
  - instalación Bofan PT-100
  - configuración PT-100 Plaspy
  - configuración servidor PT-100
  - configuración rastreador GPS Bofan
  - configuración GPRS PT-100
  - comandos SMS PT-100
  - plataforma seguimiento PT-100
  - seguimiento vehículos Bofan
  - ajustes APN PT-100
---

# Bofan - Configuración PT-100

Esta página documenta el contexto público de configuración para usar el rastreador Bofan PT-100 con Plaspy. Se centra en los pasos prácticos y los comandos SMS de uso común para preparar la unidad y que reporte en vivo a Plaspy. Cuando existan comandos SMS proporcionados por el fabricante, se muestran a continuación; siga la guía oficial del proveedor para cualquier diferencia específica de dispositivo o firmware.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que muchos pasos son idénticos entre modelos. Los pasos exactos en el lado del fabricante pueden variar según el firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; el PT-100 admite tanto la configuración por SMS como el reporte en GPRS, y los comandos a continuación reflejan flujos públicos comunes.

## Resumen de la configuración

Preparar el PT-100 para Plaspy consiste principalmente en asegurar que el rastreador pueda registrarse y enviar actualizaciones de ubicación al endpoint de Plaspy, y que el identificador del dispositivo y los ajustes de red sean correctos. El proceso de configuración habilita el acceso a la red, registra la identidad del equipo utilizada por Plaspy y establece la cadencia de reporte para que el dispositivo aparezca en la plataforma.

- Establecer el identificador del dispositivo que usa Plaspy (normalmente los últimos 14 dígitos del IMEI).
- Configurar el APN del operador para que el rastreador pueda usar GPRS en reportes en vivo.
- Apuntar el dispositivo al endpoint y puerto del servidor Plaspy para que los reportes se entreguen.
- Definir el intervalo de actualización según la frecuencia adecuada para su caso de uso y cumplimiento.
- Opcionalmente realizar un reinicio de fábrica si prepara una unidad para una configuración desde cero.

## Ajustes del servidor Plaspy

Use estos ajustes públicos de servidor Plaspy al configurar el PT-100:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que la plataforma acepta reportes de dispositivos compatibles

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detectará el protocolo del equipo de forma automática una vez que el rastreador envíe datos al endpoint y puerto indicados.

## Requisitos típicos antes de configurar

- Un PT-100 con alimentación, con IMEI conocido y acceso al dispositivo (o a un instalador que pueda enviar comandos SMS).
- Una tarjeta SIM activa con datos (GPRS) y capacidad de SMS, y la información APN correcta del operador móvil.
- La contraseña del dispositivo (el valor predeterminado mostrado más abajo es 000000) necesaria para la configuración por SMS en muchas unidades.
- Acceso al método de comandos SMS del PT-100 o al software del proveedor utilizado para la configuración.
- Un plan sobre el intervalo de reporte y la configuración de eventos apropiado para sus necesidades de monitoreo.

## Cómo se conecta este rastreador a Plaspy

El PT-100 se conecta a Plaspy enviando datos de ubicación y estado a través de la red móvil al endpoint y puerto compartidos de Plaspy. Plaspy recibe esos paquetes, detecta el protocolo automáticamente y muestra el dispositivo en la plataforma.

- El rastreador reporta vía GPRS a la dirección y puerto del servidor Plaspy configurados.
- El SMS se usa para enviar comandos de configuración como APN, servidor, identificador e intervalos.
- El identificador del dispositivo registrado en el rastreador debe coincidir con el identificador que usa Plaspy para enlazar los datos con el registro del equipo.
- Una vez que Plaspy recibe datos en el puerto 8888, la plataforma decodifica el protocolo automáticamente.
- Los reportes exitosos hacen que el dispositivo sea visible en la plataforma Plaspy para monitoreo y alertas.

## Flujo común de configuración

1. Acceda al método oficial de configuración del fabricante o al software del proveedor, o prepárese para enviar comandos SMS según la documentación del vendedor.
2. Ingrese el servidor Plaspy usando d.plaspy.com o 54.85.159.138 como dirección del servidor donde el dispositivo requiere un endpoint.
3. Establezca el puerto en 8888 (Plaspy usa el mismo puerto para todos los dispositivos).
4. Seleccione UDP o TCP en el dispositivo si requiere elección de transporte.
5. Aplique o guarde la configuración en el rastreador, usando SMS o la herramienta del proveedor.
6. Reinicie el dispositivo si el firmware del rastreador lo requiere para aplicar los nuevos ajustes.
7. Valide que el dispositivo reporta a Plaspy verificando la llegada de datos y la visibilidad en la plataforma Plaspy.

Si usa configuración basada en SMS, siga el formato de comandos SMS provisto por el vendedor y envíe cada comando desde un número autorizado si el dispositivo aplica restricciones por número.

## Comandos de ejemplo para la configuración

El PT-100 acepta comúnmente comandos SMS para la configuración básica. Los ejemplos siguientes son comandos públicos de muestra. La contraseña de dispositivo usada en estos ejemplos es la predeterminada de fábrica 000000. Reemplace los marcadores según se indica.

- Reinicio de fábrica (paso inicial opcional)
```text
000000DFT
```
- Establecer el identificador de 14 dígitos usado con Plaspy (normalmente los últimos 14 dígitos del IMEI). Reemplace [imei_last14] por esos dígitos.
```text
000000GID[imei_last14]
```
- Establecer el APN de su operador. Reemplace [apn] por el APN del operador. Si su operador requiere usuario y contraseña, incluya [apnu] y [apnp] separados por comas:
```text
000000APN[apn]
```
o con usuario y contraseña opcionales
```text
000000APN[apn],[apnu],[apnp]
```
- Establecer el servidor GPRS para apuntar el rastreador a Plaspy (este ejemplo utiliza la IP y puerto públicos de Plaspy):
```text
000000SVR54.85.159.138,8888
```
- Establecer el intervalo de actualización a 60 segundos (un minuto):
```text
000000GTI60
```

Notas sobre los marcadores:
- [imei_last14] significa el identificador de 14 dígitos que elija, típicamente los últimos 14 dígitos del IMEI del dispositivo.
- [apn] es la cadena APN del operador. [apnu] y [apnp] son los campos opcionales de usuario y contraseña del APN cuando el operador los requiere.

Si el PT-100 acepta un nombre de host en lugar de IP para el comando SVR, puede usar d.plaspy.com en lugar de 54.85.159.138 donde el firmware lo permita. Use la forma IP anterior si el dispositivo requiere direcciones numéricas.

## Notas sobre la configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos y las opciones soportadas; confirme siempre el formato exacto de los comandos con la documentación del fabricante.
- El PT-100 admite la configuración por SMS como se muestra arriba y el reporte por GPRS al servidor y puerto configurados.
- Elija UDP o TCP según las opciones de su dispositivo; Plaspy acepta reportes por cualquiera de los dos transportes y detecta el protocolo automáticamente.
- Al usar el comando APN, verifique las credenciales del operador e incluya usuario y contraseña solo si son requeridos.
- Si realiza un reinicio de fábrica, vuelva a aplicar las configuraciones de servidor, identificador, APN e intervalo de reporte.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el Bofan PT-100 permite a las organizaciones consolidar la ubicación en vivo y el reporte de eventos de vehículos en una única plataforma, aprovechando ajustes de servidor compartidos y bien conocidos. Las opciones de configuración por SMS y GPRS del PT-100 facilitan apuntar el rastreador a Plaspy y empezar a recibir actualizaciones una vez que el identificador y los ajustes de red estén en su lugar.

Para conocer más sobre Plaspy y las características de la plataforma visite https://www.plaspy.com. Verifique siempre los pasos de configuración específicos del dispositivo, cambios de firmware y la sintaxis oficial de comandos en el sitio del fabricante https://www.bofancloud.com/ ya que la documentación del proveedor puede actualizarse con el tiempo.
