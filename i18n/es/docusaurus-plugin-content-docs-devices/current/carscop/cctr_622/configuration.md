---
slug: /carscop/cctr_622/configuration
id: cctr_622-configuration
sidebar_label: Configuration
title: Carscop - CCTR-622 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el Carscop CCTR-622 a Plaspy con ajustes de servidor y ejemplos de SMS
keywords:
  - Configuración Carscop CCTR-622
  - Instalación Carscop CCTR-622
  - Rastreador GPS Carscop Plaspy
  - Configuración servidor CCTR-622
  - Configuración CCTR-622 para Plaspy
  - Configuración SMS rastreador GPS
  - Configuración plataforma seguimiento vehículos
  - APN rastreador y comandos SMS
  - Configuración servidor Plaspy
  - Configuración rastreador personal
---

# Carscop - Configuración del CCTR-622

Esta página documenta el contexto público de configuración para usar el rastreador Carscop CCTR-622 con Plaspy. Reúne pautas prácticas centradas en la plataforma y los comandos SMS públicos que emplea este modelo, para que pueda apuntar el dispositivo al backend de Plaspy y validar la conectividad.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos de configuración en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; cuando procede, esta página incluye los ejemplos de comandos SMS del CCTR-622 que están publicados y notas sobre cómo aplicarlos de forma segura.

## Resumen de la configuración

Este proceso prepara el Carscop CCTR-622 para comunicarse con la plataforma de flotas de Plaspy configurando parámetros de red, el endpoint del servidor y manteniendo el dispositivo en línea para el reporte. Los ejemplos a continuación se basan en el conjunto público de comandos del CCTR-622 y se centran en habilitar el reporte por GPRS hacia el endpoint de Plaspy.

- Configure el APN y las credenciales APN opcionales para que el rastreador tenga acceso a datos móviles y reporte por GPRS.
- Establezca el servidor GPRS en el endpoint de Plaspy para que el dispositivo envíe los datos de ubicación a Plaspy.
- Elija transporte UDP o TCP en el dispositivo si es necesario y use el puerto común de Plaspy.
- Habilite el reporte persistente en línea para que el rastreador mantenga sesión y envíe actualizaciones oportunas.
- Opcionalmente, restaure la configuración de fábrica o ajuste la zona horaria como parte del aprovisionamiento inicial.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos del servidor Plaspy al configurar el rastreador:

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo correcto para cada rastreador.

## Requisitos típicos antes de la configuración

- Un dispositivo CCTR-622 cargado y funcional con acceso a los comandos SMS o a la herramienta de configuración del fabricante.
- Una tarjeta SIM válida con datos habilitados y el APN correcto del operador móvil.
- Conocimiento del nombre del APN y, si aplica, del usuario y contraseña del APN para su operador.
- Acceso a la documentación oficial de configuración de Carscop o soporte del proveedor para instrucciones específicas de firmware.
- Capacidad básica para enviar comandos SMS desde un teléfono móvil al rastreador o acceso al software del fabricante que emita los mismos comandos.

## Cómo se conecta este rastreador a Plaspy

El CCTR-622 puede configurarse para reportar su ubicación a Plaspy mediante GPRS a la dirección compartida de Plaspy. Una vez configurado, el dispositivo enviará actualizaciones de ubicación y estado al servidor y será visible en Plaspy para monitoreo y gestión de eventos.

- El rastreador usa el APN configurado para conectarse al operador móvil y abrir GPRS.
- Reporta al endpoint del servidor Plaspy ya sea por dominio o por dirección IP.
- Envía datos a Plaspy en el puerto 8888 usando UDP o TCP según la selección.
- Plaspy recibe la conexión entrante y detecta automáticamente el protocolo del dispositivo para su correcto parseo.
- Tras una configuración exitosa, el dispositivo aparecerá en Plaspy y comenzará a enviar actualizaciones periódicas.

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración de Carscop o al software del proveedor, o prepárese para enviar comandos SMS desde un teléfono según la guía pública del CCTR-622.
2. Ingrese la información del servidor de Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138.
3. Establezca el puerto del servidor en 8888, ya que Plaspy usa el mismo puerto para todos los dispositivos.
4. Si el dispositivo requiere seleccionar el transporte, elija UDP o TCP según corresponda.
5. Configure el APN y las credenciales APN opcionales para que el rastreador pueda usar GPRS.
6. Aplique o guarde la configuración y reinicie el rastreador si el equipo recomienda un reinicio.
7. Valide que el dispositivo reporte a Plaspy y aparezca en la plataforma, confirmando la comunicación y la detección correcta del protocolo.

## Comandos de configuración de ejemplo

El Carscop CCTR-622 admite configuración vía SMS. Los siguientes comandos son los comandos SMS publicados y conservan los marcadores de posición y la contraseña por defecto mostrada en los ejemplos del fabricante. Envíe estos comandos por SMS al número del dispositivo. La contraseña por defecto utilizada en estos ejemplos es 123456.

- Reinicio de fábrica opcional (use solo cuando sea necesario)
```text
RESET*123456
```

- Ajustar la zona horaria a UTC 0
```text
TIMEZONE*123456*+00
```

- Establecer el APN del operador
```text
APN*123456*[apn]
```
Explicación: reemplace [apn] por el nombre del APN de su operador móvil.

- Establecer usuario y contraseña del APN (solo si su operador los requiere)
```text
USERNAME*123456*[apnu]*[apnp]
```
Explicación: reemplace [apnu] con el usuario del APN y [apnp] con la contraseña del APN. Incluya este comando únicamente si su operador exige autenticación.

- Apuntar el servidor GPRS a Plaspy usando la IP y el puerto
```text
IP*123456*54.85.159.138,8888
```
Este comando apunta el rastreador directamente a la IP y puerto de Plaspy. Puede usar d.plaspy.com en lugar de la IP si el dispositivo soporta nombres de dominio en el comando IP.

- Mantener el rastreador en línea para reporte continuo
```text
KEEPONLINE*123456
```

Nota: El comando RESET suele usarse como paso inicial o cuando se requiere una restauración completa de fábrica. Confirme antes de utilizarlo en dispositivos en producción.

## Notas de configuración

- La sintaxis exacta de los SMS y su comportamiento pueden variar según la versión de firmware; confirme la versión de firmware de su dispositivo y pruebe los comandos en una unidad antes de desplegar en masa.
- Si el dispositivo soporta nombres de dominio en la configuración del servidor, puede usar d.plaspy.com en lugar de la IP 54.85.159.138.
- Elija UDP o TCP según la preferencia del instalador y la compatibilidad del equipo; Plaspy aceptará cualquiera y detectará el protocolo automáticamente.
- Los campos de usuario y contraseña del APN son opcionales y solo se necesitan en redes que requieran autenticación.
- La configuración por SMS se muestra aquí porque es el método publicado públicamente para este modelo; si dispone de herramientas del fabricante, úselas para aprovisionamiento masivo o remoto.

## Por qué usar Plaspy con esta configuración

Conectar el Carscop CCTR-622 a Plaspy centraliza los datos de rastreo en una única plataforma, lo que facilita el monitoreo de ubicaciones, la recepción de alertas e la integración de los datos de los dispositivos con los flujos operativos. Para uso personal y flotas pequeñas, la combinación de configuración simple por SMS y ajustes de servidor estandarizados de Plaspy reduce la complejidad de la puesta en marcha y acelera el despliegue.

Learn more about Plaspy on the main website https://www.plaspy.com and verify device specific configuration methods, firmware behavior, and the latest manufacturer details at the Carscop site http://www.carscop.com/. Manufacturer specifications and setup methods can change over time so always confirm current instructions with Carscop before large scale deployments.
