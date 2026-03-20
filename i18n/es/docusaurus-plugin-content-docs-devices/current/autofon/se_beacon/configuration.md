---
slug: /autofon/se_beacon/configuration
id: se_beacon-configuration
sidebar_label: Configuration
title: AutoFon - SE+ Beacon Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar AutoFon SE+ Beacon con los ajustes de servidor de Plaspy y pasos prácticos para reportes GPRS fiables
keywords:
  - Configuración AutoFon SE+ Beacon
  - Configuración AutoFon
  - Configuración SE+ Beacon
  - Configuración tracker Plaspy
  - Configuración rastreador GPS
  - Configuración seguimiento vehicular
  - Integración tracker GPRS
  - Compatibilidad SE+ Beacon Plaspy
  - Configuración seguimiento de activos
  - Ajustes servidor del tracker
---

# AutoFon - Configuración del SE+ Beacon

Esta página describe el contexto público de configuración para usar el AutoFon SE+ Beacon con Plaspy. Se concentra en los ajustes prácticos a nivel de plataforma y en el flujo de trabajo típico que usan instaladores y técnicos para preparar el SE+ Beacon y lograr reportes GPRS confiables hacia Plaspy. Utilice esta guía para conocer la información mínima necesaria para integrar el dispositivo en Plaspy y para verificar la conectividad después de la configuración.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que normalmente no es necesario seleccionar el protocolo manualmente en el servidor. Los pasos de configuración del fabricante para el SE+ Beacon pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; consulte el manual del equipo para comandos y opciones específicos del firmware cuando haga falta. El SE+ Beacon reporta por GPRS a Plaspy y dispone de SMS como respaldo para alertas y notificaciones por enlace.

## Resumen de configuración

Preparar el SE+ Beacon para la integración con Plaspy asegura que el dispositivo alcance la plataforma de forma confiable y que los eventos y la telemetría de ubicación se muestren correctamente en los paneles de Plaspy. El proceso de configuración apunta a que el dispositivo reporte a Plaspy, verificar las condiciones de red y alimentación, y confirmar que los mensajes de latido y eventos llegan al servidor.

- Configure el dispositivo para enviar paquetes GPRS al endpoint de Plaspy y así recibir posiciones y eventos en tiempo real.
- Valide la conectividad móvil, la configuración del APN y que la SIM con datos esté activa y provisionada.
- Seleccione el modo de transporte en el dispositivo si es necesario y apunte a los ajustes del servidor de Plaspy.
- Aplique y guarde la configuración, luego verifique que el dispositivo aparezca en línea en Plaspy.
- Opcional: confirme el comportamiento de respaldo por SMS para alertas cuando GPRS esté interrumpido.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com como el nombre principal que debe configurarse en el rastreador.
- IP del servidor 54.85.159.138 puede usarse cuando se prefiera o sea necesario direccionamiento numérico.
- Puerto 8888 es el puerto que Plaspy utiliza para la ingestión de datos de rastreadores.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según la interfaz de configuración del rastreador.
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto para simplificar la integración.

## Requisitos típicos antes de la configuración

- Confirme que el SE+ Beacon tenga batería suficiente o alimentación externa para la configuración y las pruebas.
- Una tarjeta SIM válida con un plan de datos activo y la configuración APN correcta para reportes GPRS.
- Acceso al método oficial de configuración AutoFon para el SE+ Beacon (software, comandos SMS o cable de configuración).
- Conocimiento de los ajustes del servidor de Plaspy: d.plaspy.com o 54.85.159.138 y puerto 8888, además de la preferencia de transporte si aplica.
- Un entorno de prueba donde el dispositivo pueda reiniciarse y enviar mensajes iniciales de latido y posición.
- Opcional: una cuenta de instalador o documentación del proveedor que describa los comandos por SMS o utilidades locales de configuración.

## Cómo se conecta este rastreador a Plaspy

El SE+ Beacon envía posiciones GNSS y telemetría de eventos por GPRS al endpoint y puerto de Plaspy para que la plataforma ofrezca mapas en vivo, alertas y reproducción histórica. El SMS actúa como ruta secundaria para alertas críticas o para configuración cuando GPRS no está disponible.

- El rastreador se configura para reportar al endpoint compartido de Plaspy d.plaspy.com (o 54.85.159.138) en el puerto 8888.
- Plaspy recibe mensajes de latido y paquetes de posición para mantener el dispositivo visible y operativo en la plataforma.
- Alertas de eventos como inicio/parada de movimiento, inclinación, impacto y SOS se reenvían a Plaspy para el procesamiento de reglas y notificaciones.
- Si está configurado, SMS puede usarse para alertas rápidas o como respaldo de configuración cuando GPRS no esté disponible.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no es necesario seleccionar manualmente el protocolo en el servidor.

## Flujo típico de configuración

1. Acceda al método oficial de configuración AutoFon para el SE+ Beacon (software del dispositivo, comandos SMS o herramienta de configuración por hardware) provisto por el vendedor.
2. En la configuración del dispositivo, ingrese el servidor de Plaspy como d.plaspy.com o 54.85.159.138 según exija la interfaz de configuración.
3. Establezca el puerto de destino en 8888, que Plaspy usa para todos los dispositivos compatibles.
4. Elija UDP o TCP si el dispositivo requiere la selección de transporte; el dispositivo puede configurarse para usar cualquiera de los dos en el puerto 8888.
5. Ingrese o confirme el APN y los ajustes de red móvil para que el dispositivo pueda establecer la conexión GPRS.
6. Aplique o guarde los cambios de configuración en la herramienta del dispositivo o envíe el comando SMS que escribe los nuevos ajustes.
7. Reinicie el dispositivo si el fabricante lo requiere para aplicar los cambios de red y servidor.
8. Valide que el SE+ Beacon reporte a Plaspy confirmando que aparecen mensajes de latido y posición y que el dispositivo muestra estado en línea en la plataforma.

## Ejemplos de comandos de configuración

El método de configuración del SE+ Beacon y los comandos exactos dependen del firmware de AutoFon y de la herramienta del proveedor utilizada. Debido a que los comandos del fabricante pueden variar, consulte el manual de configuración de AutoFon para la sintaxis y ejemplos específicos según su firmware. Los caminos de configuración típicos incluyen la utilidad de configuración del dispositivo, comandos SMS o una herramienta de configuración serial.

Si dispone de comandos SMS proporcionados por el fabricante o de un script de configuración de AutoFon, siga el orden recomendado por el manual: establecer APN, configurar el dominio o IP del servidor, ajustar el puerto 8888, seleccionar el transporte si es necesario, guardar los ajustes y luego reiniciar el dispositivo. Conserve marcadores como [apn] o [apnu] si aparecen en los ejemplos del fabricante y reemplácelos con los valores de su red según las instrucciones de AutoFon.

## Notas de configuración

- Las diferencias de firmware entre revisiones del SE+ Beacon pueden cambiar la sintaxis de los comandos SMS y las opciones disponibles; siempre verifique con la documentación del firmware del dispositivo.
- Elija UDP o TCP según la interfaz del dispositivo; Plaspy soporta ambos transportes en el puerto 8888, aunque algunos instaladores prefieren uno por razones de confiabilidad en la red.
- Mantenga equilibrados los intervalos de latido y la sensibilidad de detección de movimiento para preservar la batería sin sacrificar la oportunidad de reportes oportunos.
- Use el gran buffer offline del dispositivo para tolerar cortes temporales de red; confirme en el manual el comportamiento de latidos y la subida del buffer.
- Si usa configuración por SMS, pruebe las alertas de respaldo y los enlaces SMS a mapa como paso adicional de verificación.

## Por qué usar Plaspy con esta configuración

Usar el AutoFon SE+ Beacon con Plaspy brinda a las organizaciones monitoreo discreto y de larga duración, con la capacidad de recibir posiciones GNSS y telemetría de eventos en una plataforma unificada. El reporte prioritario por GPRS del SE+ Beacon y su respaldo por SMS, combinado con la detección automática de protocolos y el puerto compartido de Plaspy, simplifican la incorporación de flotas y activos, manteniendo visibilidad y alertas confiables.

Para obtener más información sobre Plaspy y cómo funciona con dispositivos como el AutoFon SE+ Beacon visite https://www.plaspy.com. Para los comandos específicos del último modelo, notas de firmware y orientación del fabricante, confirme los datos actuales en el sitio de AutoFon https://www.autofon.ru/. Los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo, por lo que verifique los pasos con la documentación oficial del fabricante antes del despliegue.
