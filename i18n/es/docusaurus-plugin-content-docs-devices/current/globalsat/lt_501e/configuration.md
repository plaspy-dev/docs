---
slug: /globalsat/lt_501e/configuration
id: lt_501e-configuration
sidebar_label: Configuration
title: GlobalSat - LT-501E Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del GlobalSat LT-501E con ajustes de servidor Plaspy y pasos prácticos para la integración
keywords:
  - configuración GlobalSat LT-501E
  - instalación GlobalSat LT-501E
  - configuración LT-501E Plaspy
  - configuración de rastreador Plaspy
  - guía de configuración de rastreador GPS
  - ajustes de servidor LT-501E
  - configuración SMS LT-501E
  - configuración de rastreador LoRaWAN
  - configuración de rastreador de activos
  - configuración de rastreo de vehículos
---

# GlobalSat - Configuración del LT-501E

Esta página documenta el contexto público de configuración para usar el GlobalSat LT-501E con Plaspy. Se concentra en los ajustes de servidor prácticos y en el flujo de trabajo necesario para apuntar un LT-501E a Plaspy, de modo que el dispositivo pueda reportar ubicación y telemetría a la plataforma Plaspy.

Plaspy emplea ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Cuando están disponibles, esta página incluye ejemplos de comandos SMS extraídos de contenido público de configuración del dispositivo y explica los marcadores de posición y el comportamiento del checksum requerido por esos comandos.

## Resumen de la configuración

Configurar el LT-501E para su uso con Plaspy implica preparar el dispositivo para que envíe su ubicación y telemetría al endpoint del servidor de Plaspy. Dependiendo de cómo se despliegue el equipo y de la interfaz de configuración que utilice, el objetivo es establecer la dirección y el puerto del servidor, seleccionar el transporte si aplica, guardar los ajustes y confirmar que el rastreador es visible en Plaspy.

- Apuntar el rastreador al endpoint de servidor de Plaspy para que las uplinks lleguen a la plataforma.
- Configurar el puerto compartido de Plaspy para que el dispositivo sea accesible por la plataforma.
- Elegir el transporte (UDP o TCP) si el dispositivo requiere una selección explícita.
- Utilizar el método de configuración del fabricante que aplique a su equipo, por ejemplo comandos SMS o herramientas del proveedor.
- Reiniciar o reiniciar el rastreador cuando sea necesario para aplicar los cambios y validar la conectividad.

## Ajustes del servidor Plaspy

- Dominio de servidor: d.plaspy.com para configuración basada en dominio
- IP del servidor: 54.85.159.138 para configuración por IP directa
- Puerto: 8888, el puerto compartido que usa Plaspy para todos los dispositivos
- Transporte: soporte para UDP o TCP según las opciones de configuración del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador para decodificar los mensajes una vez que el equipo reporte al endpoint compartido

## Requisitos típicos antes de empezar

- Acceso al método oficial de configuración o al software del fabricante para el LT-501E
- El dispositivo alimentado y accesible por el canal de configuración elegido
- Si usa configuración por SMS, un teléfono o un gateway SMS capaz de enviar mensajes al rastreador
- Tener a la mano el IMEI del LT-501E para usarlo en las cadenas de configuración
- Conocimiento de los ajustes APN de su operador si la configuración IP celular lo requiere
- Un método para reiniciar o reiniciar el dispositivo después de aplicar los ajustes

## Cómo se conecta este rastreador a Plaspy

El LT-501E se configura para enviar sus paquetes de reporte al endpoint y puerto compartidos de Plaspy. Una vez que el dispositivo apunte a la dirección de Plaspy, la plataforma detectará el protocolo del rastreador y comenzará a decodificar y mapear la ubicación y la telemetría entrante.

- El dispositivo envía uplinks a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888
- El transporte puede ser UDP o TCP según las opciones de configuración del equipo
- Plaspy detecta y decodifica automáticamente el protocolo del rastreador para su visibilidad en la plataforma
- Tras la configuración, el dispositivo aparece en Plaspy para monitoreo en tiempo real, geocercas y alertas
- La validación de conectividad confirma que las uplinks alcanzan Plaspy y que el rastreador está reportando correctamente

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración de GlobalSat para el LT-501E, como el formato de comandos SMS documentado o la herramienta del proveedor.
2. Ingrese la dirección del servidor Plaspy ya sea como dominio d.plaspy.com o como la IP 54.85.159.138 según la interfaz del rastreador.
3. Establezca el puerto del servidor en 8888, que es el puerto que usa Plaspy para todos los dispositivos.
4. Seleccione UDP o TCP si el rastreador exige una selección explícita de transporte.
5. Aplique o guarde la configuración en el dispositivo usando el método del fabricante.
6. Reinicie o haga un reboot del rastreador si el dispositivo lo requiere para aplicar los cambios.
7. Valide que el dispositivo reporte a Plaspy confirmando que aparece en su cuenta Plaspy y que se reciben uplinks recientes.

## Comandos de configuración de ejemplo

Los siguientes comandos de ejemplo se extraen de contenido público de configuración del LT-501E. Estos comandos están pensados para enviarse por SMS al rastreador. Conserve los marcadores de posición y calcule el checksum exactamente como lo exige el dispositivo antes de enviar.

Notas sobre los marcadores de posición
- {{imei}} es el IMEI del dispositivo y debe reemplazarse por el IMEI del rastreador
- {{apn}} es el nombre del APN celular, si aplica
- {{apnu}} es el nombre de usuario del APN si su operador lo requiere
- {{apnp}} es la contraseña del APN si su operador lo requiere
- E0 y E1 en el comando se utilizan para establecer la IP y el puerto del servidor Plaspy respectivamente
- El sufijo *{{checksum}} o *{{checksumreeboot}} debe reemplazarse con el checksum calculado por el dispositivo sobre la parte del comando anterior al asterisco, usando el algoritmo de checksum del rastreador

1. Comando de configuración para apuntar el rastreador a Plaspy y establecer parámetros de red

```text
GSS,{{imei}},3,0,D1={{apn}},D2={{apnu}},D3={{apnp}},E0=54.85.159.138,E1=8888,A1=1*{{checksum}}!
```

- Este comando establece los marcadores de APN y la IP y el puerto del servidor Plaspy.
- Mantenga los marcadores {{apn}}, {{apnu}}, {{apnp}} si su operador requiere credenciales APN; de lo contrario pueden dejarse vacíos o eliminarse según las indicaciones del fabricante.
- E0 se establece en la IP del servidor Plaspy 54.85.159.138 y E1 en el puerto 8888, según lo requerido por Plaspy.

2. Comando opcional de reinicio para aplicar los ajustes inmediatamente

```text
GSC,{{imei}},3,0,LH*{{checksumreeboot}}!
```

- Este comando de reinicio se muestra en ejemplos públicos de configuración y puede usarse después de aplicar los ajustes para asegurar que el dispositivo arranque con la nueva configuración.
- Considere este paso como opcional y utilícelo cuando las instrucciones del fabricante indiquen que es necesario reiniciar para aplicar cambios.

Cálculo del checksum
- El checksum del dispositivo se calcula como una XOR de los códigos ASCII de los caracteres en el segmento del comando anterior al asterisco. El resultado se representa como una cadena hexadecimal de dos caracteres en mayúsculas. Reemplace {{checksum}} o {{checksumreeboot}} con ese valor hexadecimal.

## Notas de configuración

- Los ejemplos públicos de configuración del LT-501E muestran comandos basados en SMS como un método válido del fabricante. Use el método apropiado para su dispositivo y su despliegue.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos y detectará automáticamente el protocolo del rastreador una vez que el equipo reporte al servidor.
- Algunos despliegues usan uplinks LoRaWAN que reenvían datos a Plaspy a través de un servidor de red. Si su despliegue utiliza LoRaWAN, siga la configuración del servidor de red LoRa y la guía de integración con Plaspy además de la configuración del dispositivo.
- El comportamiento y los formatos de comando pueden variar según la revisión del firmware y la variante de hardware. Confirme la sintaxis exacta y los campos obligatorios con la documentación más reciente de GlobalSat.
- Al elegir el transporte, seleccione UDP o TCP según las opciones del dispositivo y el entorno de red.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el LT-501E ofrece un endpoint y puerto de servidor consistentes para el reporte de dispositivos, permitiendo a los equipos de operaciones centralizar la visibilidad, las alertas y el monitoreo de geocercas. Apuntar el rastreador a d.plaspy.com o a 54.85.159.138 en el puerto 8888 permite que Plaspy detecte y decodifique automáticamente el protocolo del rastreador y muestre ubicación y telemetría en el panel de Plaspy.

Learn more about Plaspy and how it integrates with devices like the GlobalSat LT-501E at https://www.plaspy.com. For device specific configuration methods, firmware behavior, and the latest manufacturer details verify information on the official GlobalSat website https://www.globalsat.com.tw/ which may be updated over time.
