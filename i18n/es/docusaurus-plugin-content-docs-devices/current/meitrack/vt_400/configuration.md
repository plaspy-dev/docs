---
slug: /meitrack/vt_400/configuration
id: vt_400-configuration
sidebar_label: Configuration
title: Meitrack - VT-400 Configuration
sidebar_class_name: menu_item_tracker
description: Guía para configurar el Meitrack VT-400 y conectarlo a Plaspy mediante servidor compartido, SMS o GPRS
keywords:
  - Configuración Meitrack VT 400
  - Instalación Meitrack VT 400
  - Configuración servidor VT 400
  - Configuración VT 400 Plaspy
  - Configuración rastreador GPS Meitrack
  - Comandos SMS VT 400
  - Configuración GPRS VT 400
  - Rastreador Meitrack Plaspy
  - Rastreo de vehículos VT 400
  - Rastreo de flotas Meitrack VT 400
---

# Meitrack - VT-400 Configuration

Esta página describe el contexto de configuración público para usar el Meitrack VT-400 con Plaspy. Explica los ajustes de servidor compartido que Plaspy espera, los pasos prácticos comúnmente utilizados para apuntar un VT-400 al endpoint de Plaspy y los comandos SMS de ejemplo que el fabricante documenta públicamente. Utilice esta guía para preparar el rastreador para la comunicación con Plaspy y para saber qué validar durante la puesta en marcha.

Plaspy usa ajustes de servidor compartido para los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o las herramientas del proveedor. El VT-400 soporta comunicación por SMS y GPRS (TCP o UDP) y el fabricante facilita formatos de comandos SMS que pueden usarse para configurar el dispositivo para reportar a Plaspy.

## Resumen de la configuración

El objetivo de la configuración es preparar el VT-400 para que reporte de forma confiable la posición y los eventos a Plaspy. Esto incluye establecer los detalles del servidor GPRS, seleccionar el modo de transporte si es necesario y habilitar reportes periódicos para que el dispositivo sea visible en la plataforma.

- Configurar el servidor GPRS del dispositivo hacia Plaspy para que los datos de ubicación se reenvíen a la plataforma
- Ajustar el intervalo de reporte y la configuración básica de eventos para controlar la frecuencia de datos
- Usar comandos SMS o herramientas del fabricante para aplicar los ajustes cuando se requiera acceso local
- Validar la conectividad para que el dispositivo aparezca en Plaspy y comience a enviar telemetría
- Mantener la documentación del fabricante a la mano para matices en comandos según firmware

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Plaspy utiliza el mismo puerto 8888 para todos los dispositivos soportados, y la plataforma detecta automáticamente el protocolo del rastreador, por lo que los dispositivos pueden reportar por UDP o TCP al mismo endpoint.

## Requisitos típicos antes de la configuración

- Un VT-400 alimentado y operativo, con batería de respaldo cargada si está instalada
- Una SIM activa con capacidad de datos o SMS según los requisitos del VT-400
- Acceso al método de configuración del VT-400 documentado por el fabricante, como comandos SMS o software del proveedor
- Conocimiento de la contraseña del dispositivo si fue cambiada respecto al valor de fábrica
- Un plan para aplicar y probar los ajustes en un entorno seguro antes de un despliegue a gran escala

## Cómo se conecta este rastreador a Plaspy

El VT-400 se configura para enviar su telemetría al endpoint y puerto compartido del servidor de Plaspy. Una vez configurado, el dispositivo enviará mensajes de ubicación y eventos a Plaspy, donde podrán visualizarse y procesarse.

- El rastreador envía paquetes GPRS TCP o UDP a d.plaspy.com o 54.85.159.138 en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y procesa los datos entrantes
- La frecuencia de reporte la controla el intervalo de actualización del dispositivo, por lo que la visibilidad en Plaspy refleja esa cadencia
- Los reportes de eventos y alarmas se reenviarán a Plaspy una vez que el servidor GPRS apunte a la plataforma
- Para que la plataforma vea el dispositivo es necesario un registro de red exitoso y parámetros APN correctos para la SIM usada

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración del fabricante o al software para el VT-400. El fabricante documenta los flujos de comandos SMS y las herramientas del proveedor para la configuración.
2. Ingrese el dominio del servidor de Plaspy d.plaspy.com o la IP del servidor de Plaspy 54.85.159.138 en la configuración del servidor del dispositivo.
3. Establezca el puerto en 8888, que es el puerto compartido de Plaspy usado para todos los dispositivos.
4. Elija UDP o TCP si el dispositivo requiere selección de transporte; Plaspy aceptará cualquiera y detectará el protocolo automáticamente.
5. Aplique o guarde la configuración usando el método del dispositivo que haya elegido, por ejemplo enviando comandos SMS o utilizando el software de configuración del proveedor.
6. Reinicie o apague y encienda el dispositivo si el fabricante recomienda un reinicio tras cambiar ajustes de red.
7. Valide que el dispositivo reporte a Plaspy comprobando el estado del dispositivo en la plataforma y los mensajes entrantes recientes.

Si planea usar configuración vía SMS, utilice los comandos de ejemplo más abajo según lo documentado por Meitrack y adapte los marcadores de posición a su SIM y ajustes de red.

## Comandos de configuración de ejemplo

El fabricante del VT-400 proporciona comandos SMS para la configuración. Los comandos de ejemplo a continuación usan la contraseña de fábrica por defecto 0000. Si su contraseña fue cambiada, reemplace 0000 por la contraseña actual del dispositivo.

Nota sobre los marcadores de posición
- {{apn}} es el nombre del punto de acceso (APN) de la red móvil necesario para datos GPRS
- {{apnu}} es el usuario del APN cuando lo requiere el operador
- {{apnp}} es la contraseña del APN cuando lo requiere el operador

1. Restablecimiento opcional a configuración de fábrica inicial
```
0000,F11
```
Etiqueta: Restablecimiento opcional a configuración de fábrica inicial. Use este comando solo si pretende restaurar los valores de fábrica o como parte de una configuración inicial si es necesario.

2. Configure el servidor GPRS a Plaspy usando IP y puerto e incluya los marcadores de APN
```
0000,A21,2,54.85.159.138,8888,{{apn}},{{apnu}},{{apnp}}
```
Explicación: Configure el modo de servidor GPRS 2 con la IP del servidor de Plaspy 54.85.159.138 y el puerto 8888. Reemplace {{apn}}, {{apnu}} y {{apnp}} por los valores de su operador. Si prefiere usar el dominio, el servidor equivalente es d.plaspy.com.

3. Establezca la zona horaria en UTC 0
```
0000,B36,0
```
Explicación: Ajusta la zona horaria del dispositivo a UTC 0. Modifique si necesita otro desfase.

4. Establezca el intervalo de reporte a 1 minuto
```
0000,A12,6,0
```
Explicación: Configure el intervalo de actualización. Este ejemplo establece reportes periódicos cada 1 minuto. Modifique según sus necesidades de reporte y su plan de datos.

5. Configure eventos
```
0000,C03,0
```
Explicación: Configure las banderas de reporte de eventos según sea necesario. Este ejemplo es una configuración base de eventos.

Envíe estos comandos como mensajes SMS al VT-400 siguiendo las instrucciones del fabricante para el envío de comandos. Mantenga la contraseña correcta del dispositivo al inicio de cada cadena de comando.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar los formatos de comandos y los parámetros disponibles. Confirme siempre la sintaxis exacta con la documentación del fabricante para su versión de firmware.
- El VT-400 admite configuración por SMS como se muestra arriba y reporte GPRS por TCP o UDP a Plaspy. Use la opción de transporte que mejor se adapte a su red y necesidades operativas.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos y detecta automáticamente el protocolo del rastreador, por lo que puede apuntar el dispositivo al servidor compartido sin necesitar puertos específicos por protocolo.
- Al usar credenciales APN, conserve los marcadores de posición como {{apn}}, {{apnu}} y {{apnp}} hasta reemplazarlos con los datos del operador.
- Pruebe la configuración en un solo dispositivo antes de la provisión masiva para verificar el APN, el transporte y el comportamiento del intervalo de reporte.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con un VT-400 correctamente configurado ofrece un punto centralizado para monitorear la ubicación de su flota o maquinaria y sus eventos. Apuntar el dispositivo al endpoint del servidor de Plaspy asegura que las actualizaciones de ubicación y las alarmas lleguen a la plataforma, donde pueden visualizarse, enrutar o integrarse en flujos operativos.

To learn more about Plaspy and how it handles device connectivity and fleet monitoring visit https://www.plaspy.com. For the latest VT-400 specific commands, firmware notes, and full manufacturer documentation verify current details at https://www.meitrack.com/ as device behavior and setup methods can change over time.
