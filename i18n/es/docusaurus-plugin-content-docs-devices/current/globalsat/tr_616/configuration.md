---
slug: /globalsat/tr_616/configuration
id: tr_616-configuration
sidebar_label: Configuration
title: GlobalSat - TR-616 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el GlobalSat TR-616 con Plaspy, incluye ejemplos de SMS y cálculo de checksum
keywords:
  - GlobalSat TR-616
  - Configuración TR-616
  - Configuración TR-616 Plaspy
  - Configuración rastreador GlobalSat
  - Configuración rastreador GPS Plaspy
  - Seguimiento vehicular TR-616
  - Configuración SMS TR-616
  - Configuración servidor rastreador
  - Ajustes servidor Plaspy
  - Configuración plataforma GPS
---

# GlobalSat - Configuración TR-616

Esta página documenta el contexto público de configuración para usar el rastreador GlobalSat TR-616 con Plaspy. Reúne los ajustes de servidor de Plaspy y los pasos prácticos de instalación disponibles públicamente, y muestra los comandos SMS de configuración incluidos en el contenido del fabricante. Use esta página como referencia técnica para preparar un TR-616 que se comunique con Plaspy, y consulte la documentación oficial de GlobalSat para detalles específicos del dispositivo.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, de modo que el mismo endpoint y puerto funcionan para todos los dispositivos en la plataforma. Los pasos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que confirme los detalles con los recursos de GlobalSat cuando sea necesario.

## Resumen de la configuración

Este proceso prepara un TR-616 para enviar datos de ubicación y estado a la plataforma Plaspy. El objetivo es establecer los parámetros de red, apuntar el dispositivo al servidor de Plaspy y verificar que el equipo reporte correctamente para que sea visible en la vista de flota de Plaspy.

- Configure el APN y los parámetros de acceso a la red para que el dispositivo pueda conectarse a Internet.
- Establezca el endpoint y el puerto del servidor hacia el servidor de Plaspy para que el rastreador envíe la telemetría a la plataforma.
- Seleccione el método de transporte (UDP o TCP) si el rastreador requiere una elección explícita.
- Calcule e incluya el checksum requerido en los comandos SMS cuando sea necesario para asegurar que el dispositivo acepte la configuración.
- Aplique los ajustes y reinicie el dispositivo si hace falta; luego valide que el dispositivo esté reportando en Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que la plataforma acepta dispositivos que reporten por UDP o TCP

## Requisitos habituales antes de la configuración

- Una unidad TR-616 con alimentación y una tarjeta SIM funcional que tenga datos y capacidad de SMS
- El número IMEI del dispositivo disponible para usar en comandos SMS o en herramientas del fabricante
- Ajustes APN del proveedor de la SIM para completar los marcadores de posición [apn], [apnu] y [apnp]
- Un teléfono con capacidad de enviar SMS o la herramienta de configuración del fabricante para enviar comandos de configuración por SMS
- Acceso a la documentación oficial de GlobalSat o a herramientas de soporte para orientación específica según firmware
- Conocimientos básicos sobre si la implementación deberá usar transporte UDP o TCP

## Cómo se conecta este rastreador a Plaspy

El TR-616 puede configurarse para enviar datos de posición y del dispositivo al endpoint del servidor de Plaspy para que el equipo aparezca en la plataforma y reporte telemetría para monitoreo e informes.

- El rastreador envía datos GPS y del dispositivo al servidor de Plaspy en 54.85.159.138 puerto 8888
- Plaspy acepta conexiones por UDP o TCP y detecta automáticamente el protocolo del rastreador
- Tras la configuración, el dispositivo será visible en Plaspy y podrá monitorearse para obtener actualizaciones de ubicación y estado
- El control remoto o el reinicio pueden realizarse mediante el flujo de comandos SMS del dispositivo si la instalación lo soporta

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial de GlobalSat, como los comandos SMS del proveedor o la herramienta de configuración suministrada.
2. Ingrese la dirección del servidor de Plaspy, ya sea el dominio o la IP. Use d.plaspy.com o 54.85.159.138 cuando se solicite el endpoint del servidor.
3. Configure el puerto del servidor en 8888 según lo requiere Plaspy.
4. Seleccione UDP o TCP si el dispositivo exige una selección de transporte.
5. Rellene los valores de APN y cualquier autenticación requerida en los marcadores de posición como [apn], [apnu] y [apnp].
6. Envíe o aplique la configuración y guarde los ajustes en el dispositivo.
7. Reinicie el dispositivo si el fabricante lo requiere para aplicar los cambios.
8. Valide que el dispositivo reporte a Plaspy y que aparezca en la lista de dispositivos de la plataforma.

## Comandos de configuración de ejemplo

El contenido del fabricante para el TR-616 incluye una plantilla de comando de configuración por SMS. Las siguientes plantillas se muestran exactamente como aparecen en el contenido público. Preserve los marcadores de posición y calcule el checksum que sigue al asterisco. El checksum es el XOR de todos los caracteres del comando antes del asterisco, representado como una cadena hexadecimal de dos caracteres en mayúsculas.

Setup command template
- Reemplace [imei] por el IMEI del dispositivo
- Reemplace [apn], [apnu] y [apnp] por el APN, el usuario APN y la contraseña APN de su SIM respectivamente
- Esta plantilla establece la IP del servidor a Plaspy y el puerto a 8888

```text
GSS,[imei],3,0,D1=[apn],D2=[apnu],D3=[apnp],E0=54.85.159.138,E1=8888,A1=1*[checksum]!
```

Reboot command template (optional after configuration)
- Use este comando para reiniciar el dispositivo de forma remota después de aplicar la configuración

```text
GSC,[imei],3,0,LH*[checksumreeboot]!
```

Cálculo del checksum
- Calcule el checksum como el XOR de cada carácter en la cadena del comando hasta, pero sin incluir, el carácter '*'
- Convierta el resultado del XOR a una cadena hexadecimal de dos dígitos en mayúsculas y sustitúyalo en [checksum] o [checksumreeboot]

Nota: El contenido público también muestra un ejemplo del formato de encabezado usado por las herramientas del fabricante. Use las plantillas exactas arriba y reemplace los marcadores de posición. No elimine el signo de exclamación final.

## Notas de configuración

- El TR-616 admite configuración por SMS como se muestra en la plantilla pública, pero las herramientas del fabricante o actualizaciones de firmware pueden añadir métodos alternativos de configuración.
- La versión de firmware y la revisión de hardware pueden cambiar los parámetros y la sintaxis de los comandos soportados. Confirme siempre los comandos con la documentación del firmware del dispositivo cuando esté disponible.
- Elija UDP o TCP en función del comportamiento de su red y operador. Plaspy acepta ambos y detectará automáticamente el protocolo del rastreador.
- La configuración de Plaspy utiliza el mismo puerto 8888 para todos los dispositivos en la plataforma; mantenga el puerto consistente entre las configuraciones.
- Asegúrese de que el IMEI usado en los comandos SMS coincida exactamente con el IMEI del dispositivo para evitar fallos de configuración.

## Por qué usar Plaspy con esta configuración

Configurar el GlobalSat TR-616 para reportar a Plaspy ofrece a los operadores de flota una vía sencilla para capturar posiciones GPS en tiempo real y el estado de los dispositivos en una única plataforma. Usar los ajustes de servidor compartidos de Plaspy simplifica el despliegue, ya que el mismo endpoint y puerto se usan para los rastreadores compatibles, y Plaspy se encarga de la detección automática del protocolo del dispositivo.

Learn more about Plaspy and how it can centralize device visibility and operational monitoring at https://www.plaspy.com. For the most current device specific commands, firmware behavior, and manufacturer guidance please verify setup instructions on the GlobalSat website https://www.globalsat.com.tw/ as device procedures and firmware may change over time.
