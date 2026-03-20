---
slug: /reachfar/rf_v03_obd/configuration
id: rf_v03_obd-configuration
sidebar_label: Configuration
title: Reachfar - RF-V03-OBD Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para integrar el rastreador Reachfar RF V03 OBD con Plaspy mediante ajustes de servidor compartido y pasos prácticos
keywords:
  - Configuración Reachfar RF V03 OBD
  - Configuración RF V03 OBD
  - RF V03 OBD Plaspy
  - Configuración rastreador Plaspy
  - Configuración rastreador OBDII GPS
  - Configuración rastreador Reachfar OBD
  - Rastreo vehicular Plaspy
  - Rastreador GPS de flotas Reachfar
  - Ajustes servidor RF V03 OBD
  - Integración rastreador Reachfar Plaspy
---

# Reachfar - Configuración RF-V03-OBD

Esta página ofrece información pública sobre la configuración del rastreador GPS Reachfar RF-V03-OBD para su uso con Plaspy. Describe los ajustes de servidor compartidos que Plaspy espera, los pasos prácticos aplicables en las herramientas habituales del fabricante y las comprobaciones clave para validar que el dispositivo está reportando correctamente. La orientación aquí se basa en información pública y tiene por objetivo ayudarle a preparar el equipo para la integración con Plaspy y aclarar qué verificar antes de activar el seguimiento de flotas.

El RF-V03-OBD es un rastreador OBDII plug-and-play que reporta posiciones GPS, estado de ignición (ACC), alarmas y diagnósticos OBD básicos. Plaspy utiliza ajustes de servidor compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos de configuración por parte del fabricante pueden variar según la revisión de firmware, la variante de hardware, el tipo de instalación y las herramientas del proveedor, por lo que siempre confirme los detalles específicos del dispositivo con la documentación oficial de Reachfar cuando sea necesario.

## Resumen de la configuración

Este proceso prepara un RF-V03-OBD para comunicarse de forma fiable con Plaspy usando el endpoint y puerto compartidos de la plataforma. El objetivo es asegurar que el rastreador apunte a Plaspy, emplee el tipo de transporte correcto y que la telemetría —como ubicación, estado de ignición y alarmas— llegue a la plataforma para su visualización y reporte.

- Apunte el dispositivo al endpoint y puerto del servidor de Plaspy para que pueda enviar telemetría.
- Seleccione el modo de transporte correcto (UDP o TCP) si el dispositivo requiere una elección explícita.
- Valide que la ubicación GPS, el estado ACC y los eventos de alarma lleguen a Plaspy.
- Confirme la alimentación del dispositivo y la conectividad celular a través de la interfaz OBDII.
- Verifique el comportamiento del dispositivo tras un reinicio y compruebe la subida de datos en zonas muertas cuando la conectividad se restablezca.

## Ajustes del servidor de Plaspy

Al configurar el RF-V03-OBD para Plaspy, use los siguientes ajustes públicos de servidor:

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detectará automáticamente el protocolo del rastreador una vez que el dispositivo se comunique con el endpoint.

## Requisitos habituales antes de la configuración

- Confirme que el RF-V03-OBD esté alimentado e insertado correctamente en el puerto J1962 OBDII del vehículo.
- Asegúrese de que el rastreador tenga una SIM celular activa y conectividad celular adecuada para la variante del dispositivo.
- Disponga del método de configuración Reachfar o del software utilizado por su proveedor o instalador.
- Sepa si el firmware de su unidad requiere la selección explícita de UDP o TCP para el transporte al servidor.
- Prepárese para guardar o aplicar ajustes y reiniciar el rastreador si la herramienta o el firmware lo recomienda.
- Verifique que la cuenta y los permisos en Plaspy estén listos para aceptar el feed del dispositivo.

## Cómo se conecta este rastreador a Plaspy

El RF-V03-OBD usa su conexión celular para enviar GPS y telemetría básica del vehículo a Plaspy. Usted configura el rastreador para que reporte al endpoint y puerto compartidos de Plaspy; la plataforma maneja la detección del protocolo y el parseo de mensajes para que los datos de ubicación y eventos queden visibles en la plataforma.

- Los reportes del dispositivo se envían al endpoint de Plaspy en d.plaspy.com o a la IP 54.85.159.138.
- Las comunicaciones llegan por el puerto 8888, donde Plaspy recibe la telemetría de los rastreadores compatibles.
- El RF-V03-OBD transmite posiciones GPS, estado de ignición (ACC), eventos por vibración y alarmas de geocerca a Plaspy.
- Cuando se interrumpe la conectividad, el rastreador almacena registros localmente y sube el historial cuando la conexión se restablece.
- Plaspy detecta automáticamente el protocolo del dispositivo, por lo que se usa el mismo puerto y endpoint para múltiples modelos compatibles.

## Flujo de configuración típico

1. Acceda al método oficial de configuración Reachfar, comandos SMS o software del proveedor según se haya suministrado con el RF-V03-OBD.
2. Ingrese la dirección del servidor de Plaspy usando d.plaspy.com o la IP 54.85.159.138 en el campo de servidor.
3. Configure el puerto del servidor en 8888 como lo requiere Plaspy.
4. Elija UDP o TCP como transporte si el dispositivo o la herramienta de configuración exige una selección explícita.
5. Aplique o guarde la configuración en la herramienta del dispositivo o enviando los comandos apropiados.
6. Reinicie el dispositivo si el firmware o la herramienta recomiendan un reboot para activar los nuevos ajustes.
7. Valide que el dispositivo reporte a Plaspy y que la ubicación, ACC y eventos de alarma aparezcan en la plataforma.

Plaspy detectará automáticamente el protocolo del rastreador cuando el dispositivo se conecte al endpoint y puerto configurados.

## Ejemplos de comandos de configuración

Los comandos exactos y el formato para configurar el RF-V03-OBD dependen del firmware de Reachfar y de la herramienta de configuración del proveedor. Algunos instaladores usan cadenas de comandos SMS; otros utilizan utilidades de configuración de escritorio o móvil proporcionadas por Reachfar o sus distribuidores. Dado que los métodos varían, consulte el manual del dispositivo o la documentación del proveedor para la sintaxis precisa requerida por su unidad. Si dispone de comandos SMS o cadenas de configuración concretas del fabricante, aplíquelas según el orden y los ejemplos indicados en la documentación oficial.

## Notas de configuración

- Las variantes de firmware y hardware pueden cambiar los ajustes disponibles y la sintaxis de comandos; verifique la versión de firmware del dispositivo antes de aplicar cambios.
- Si se presenta la opción, UDP suele emplearse para reportes de posición livianos mientras que TCP puede ofrecer entrega más fiable según el soporte del firmware; pruebe ambos si tiene dudas.
- El RF-V03-OBD almacena los datos de zonas sin cobertura (dead-zone) localmente y sube los registros guardados cuando la conectividad celular vuelve; dé tiempo para la subida del historial después de las pruebas.
- La monitorización por voz y otras funciones opcionales varían según la variante celular (por ejemplo soporte de voz CAT4); confirme la disponibilidad de características para su modelo específico.
- Confirme siempre el conjunto actual de comandos SMS o de software con la documentación oficial de Reachfar en lugar de depender de ejemplos de terceros.

## Por qué usar Plaspy con esta configuración

Usar el RF-V03-OBD con Plaspy ofrece a los operadores de flota una manera rápida de añadir seguimiento plug-and-play de vehículos, monitoreo de ignición y telemetría OBD básica a sus procesos. Los ajustes de servidor compartidos de Plaspy simplifican la incorporación de dispositivos porque todos los equipos compatibles usan el mismo puerto y Plaspy detecta automáticamente el protocolo del rastreador, permitiendo que los equipos se enfoquen en el despliegue y la operación en lugar de en detalles de servidor por dispositivo.

Para saber más sobre Plaspy visite https://www.plaspy.com. Para instrucciones de configuración específicas del dispositivo, notas de firmware y los últimos detalles técnicos de Reachfar verifique la documentación oficial del proveedor en https://www.reachfargps.com/ antes del despliegue final.
