---
slug: /winrich/tk168/configuration
id: tk168-configuration
sidebar_label: Configuration
title: Winrich - TK168 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Winrich TK168 con ajustes de servidor Plaspy y comandos SMS
keywords:
  - Configuración Winrich TK168
  - Instalación Winrich TK168
  - Configuración TK168 Plaspy
  - Configuración SMS rastreador GPS
  - Configuración servidor TK168
  - Configuración GPRS rastreador
  - Configuración rastreo de vehículos
  - Rastreo de flotas con Plaspy
  - Comandos rastreador Winrich
  - Configuración plataforma de rastreo
---

# Winrich - Configuración del TK168

Esta página documenta el contexto público de configuración para usar el rastreador GPS Winrich TK168 con Plaspy. Se enfoca en los ajustes prácticos del servidor y en los comandos por SMS que se utilizan comúnmente para apuntar un TK168 hacia Plaspy, de modo que el dispositivo pueda reportar su ubicación y estado a la plataforma.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; los pasos exactos en el lado del fabricante pueden variar según firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. El TK168 admite configuración por SMS y GPRS; los ejemplos a continuación muestran los comandos SMS que se usan públicamente para preparar un TK168 para su uso con Plaspy.

## Resumen de la configuración

El TK168 debe configurarse para enviar datos de ubicación y estado al endpoint del servidor de Plaspy para que la unidad sea visible en la plataforma. La configuración suele incluir establecer el APN celular, apuntar el dispositivo a la dirección y puerto de Plaspy y seleccionar el transporte si el dispositivo lo requiere.

- Configurar el APN del equipo para que el rastreador use GPRS hacia Plaspy
- Apuntar el rastreador al dominio o IP del servidor Plaspy para dirigir los reportes correctamente
- Establecer el intervalo de reporte para equilibrar actualidad y uso de datos
- Verificar la configuración y el estado mediante comandos SMS de verificación del equipo
- Confirmar que el dispositivo sea alcanzable y visible dentro de la plataforma Plaspy tras la configuración

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y realiza la detección de protocolo de forma automática, por lo que solo es necesario apuntar el rastreador al dominio o IP y al puerto.

## Requisitos típicos antes de la configuración

- Un equipo TK168 cargado y funcionando con una SIM instalada y con servicio de datos o SMS activo
- Conocimiento de los ajustes APN del operador móvil de la SIM para ingresarlos en el rastreador
- Capacidad para enviar mensajes SMS al equipo para la configuración vía SMS
- Acceso al método de configuración oficial del fabricante o a la documentación del TK168
- Un método para verificar que el rastreador esté en línea en Plaspy después de la configuración, como la vista de la plataforma Plaspy o consultas de estado

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el TK168 utiliza GPRS para enviar mensajes de posición y estado a Plaspy. El dispositivo se configura para reportar al endpoint y puerto del servidor Plaspy para que la plataforma pueda recibir y mostrar la información de rastreo.

- El TK168 se configura para enviar datos a d.plaspy.com o a 54.85.159.138
- Los reportes se envían al puerto 8888, que utiliza Plaspy para todos los dispositivos
- Plaspy detecta automáticamente el protocolo del dispositivo, por lo que no es necesario seleccionar un protocolo en la plataforma
- El dispositivo puede configurarse por SMS para ajustar APN, servidor e intervalos según los comandos de ejemplo
- El estado y la configuración pueden comprobarse desde el equipo con comandos de verificación antes de confirmar la visibilidad en Plaspy

## Flujo de trabajo de configuración habitual

1. Acceda al método de configuración oficial del fabricante para el TK168 o prepárese para enviar los comandos SMS documentados por Winrich.
2. Configure el APN del dispositivo usando el valor del operador correspondiente a la SIM para que el rastreador pueda usar GPRS.
3. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP 54.85.159.138 en la configuración del rastreador.
4. Establezca el puerto en 8888 y elija UDP o TCP si el dispositivo solicita selección de transporte.
5. Aplique o guarde la configuración en el rastreador y efectúe cualquier reinicio o ciclo de energía recomendado.
6. Valide que el dispositivo reporte a Plaspy y confirme su visibilidad en la plataforma Plaspy utilizando los comandos de estado o comprobación del equipo.

Si prefiere la configuración por SMS, siga el conjunto de comandos SMS del fabricante en la sección Comandos de configuración de ejemplo a continuación.

## Comandos de configuración de ejemplo

El TK168 puede configurarse enviando comandos SMS al equipo. Los comandos que siguen se presentan en el orden que se utiliza comúnmente durante la puesta en marcha. Si opta por realizar un reinicio de fábrica primero, ese paso es opcional y solo debe usarse cuando sea necesario.

- Reinicio de fábrica inicial (opcional)
```text
940#
```

- Establecer la zona horaria a UTC 0
```text
801#W0#
```

- Configurar el APN del operador
```text
802#{{apn}}#{{apnu}}#{{apnp}}#
```
Notas sobre los marcadores de APN
- {{apn}} es el nombre del APN del operador requerido para datos GPRS
- {{apnu}} y {{apnp}} son el nombre de usuario y la contraseña del APN, opcionales y deben incluirse solo si su operador los requiere

- Configurar el servidor GPRS con la IP y el puerto de Plaspy
```text
803#54.85.159.138#8888#
```
Puede reemplazar la IP por el dominio si el dispositivo lo soporta:
```text
803#d.plaspy.com#8888#
```

- Establecer el intervalo de actualización a 60 segundos
```text
730#60#
```

- Consultar la configuración actual en el equipo
```text
886#
```

- Consultar el estado del equipo
```text
902#
```

Envíe cada SMS como un único mensaje al número del dispositivo. Mantenga el orden anterior cuando desee realizar un reinicio y luego reconfigurar APN, servidor e intervalo de reportes.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis exacta de los SMS o los comandos soportados por el TK168. Verifique siempre la sintaxis de los comandos con la documentación del equipo.
- El TK168 soporta métodos de configuración por SMS y GPRS como se muestra en los comandos anteriores. Use SMS cuando el acceso local al equipo sea el método preferido.
- Elija UDP o TCP en el equipo solo si este solicita explícitamente un transporte. Plaspy detectará el protocolo automáticamente en su lado.
- Las credenciales APN son específicas del operador. Use {{apn}} e incluya {{apnu}} o {{apnp}} solo si el proveedor móvil lo requiere.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos, por lo que los únicos valores necesarios en el lado del servidor son el dominio o la IP y el puerto mostrados arriba.

## Por qué usar Plaspy con esta configuración

Usar el Winrich TK168 con Plaspy ofrece visibilidad clara de la ubicación y el estado del dispositivo al apuntar el rastreador a un endpoint compartido de Plaspy. Para organizaciones que necesitan supervisión de flotas o monitoreo remoto de activos, la combinación de reportes por GPRS y la visibilidad centralizada en la plataforma simplifica el seguimiento operativo y la gestión de eventos.

Conozca más sobre Plaspy y cómo puede mostrar datos del TK168 en la plataforma en https://www.plaspy.com. Para los comandos específicos de dispositivo más actualizados, notas de firmware y detalles técnicos, verifique la documentación oficial de Winrich en http://www.winrichgroup.com/en/ ya que los métodos de configuración del fabricante y el comportamiento del firmware pueden cambiar con el tiempo.
