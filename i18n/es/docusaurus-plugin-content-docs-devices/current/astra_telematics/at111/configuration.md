---
slug: /astra_telematics/at111/configuration
id: at111-configuration
sidebar_label: Configuration
title: Astra Telematics - AT111 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador Astra Telematics AT111 con ajustes de servidor Plaspy y pasos de instalación
keywords:
  - Configuración Astra Telematics AT111
  - Configuración AT111 Plaspy
  - Configuración servidor AT111
  - Configuración rastreador GPS Astra AT111
  - Configuración software seguimiento AT111
  - Configuración plataforma GPS AT111
  - Configuración dispositivo Plaspy
  - Integración rastreador Plaspy
  - Rastreo vehicular AT111
  - Seguimiento de flota AT111
---

# Astra Telematics - Configuración del AT111

Esta página recopila la información pública y práctica necesaria para apuntar un rastreador Astra Telematics AT111 al endpoint de ingestión de Plaspy. Aquí encontrará los ajustes de servidor y los pasos habituales para que el dispositivo reporte posición y telemetría a la plataforma Plaspy.

Plaspy usa ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El AT111 soporta interfaces telemáticas profesionales típicas y puede configurarse mediante los métodos del fabricante que se describen a continuación para comunicarse con Plaspy.

## Visión general de la configuración

Esta guía explica el propósito y los pasos prácticos para configurar un AT111 y que pueda comunicarse con el endpoint de Plaspy para seguimiento y telemetría en tiempo real. Cuando esté disponible, el fabricante proporciona comandos de configuración por SMS que permiten ajustar el APN y los parámetros del servidor.

- Prepare el AT111 para que envíe correcciones GNSS y telemetría a Plaspy configurando su APN de red y los ajustes de servidor.
- Configure el dispositivo para enviar datos GPRS a Plaspy usando el endpoint compartido y el puerto de Plaspy.
- Valide la conectividad y que el rastreador aparezca en los paneles y mapas en vivo de Plaspy.
- Guarde y aplique los ajustes y reinicie el rastreador según sea necesario para que comience el reporte activo.
- Utilice la antena externa del AT111 y el acceso a la Micro SIM para asegurar recepción celular y GNSS confiable durante las pruebas.

## Ajustes del servidor Plaspy

- El dominio del servidor d.plaspy.com es el nombre canónico de Plaspy cuando el dispositivo acepta un hostname.
- La IP del servidor 54.85.159.138 puede emplearse cuando el dispositivo requiere una dirección numérica.
- El puerto 8888 es el puerto de ingestión de Plaspy y se utiliza para todos los dispositivos soportados.
- El transporte puede ser UDP o TCP; el AT111 puede configurarse para usar UDP o TCP en el puerto 8888 según lo requiera el dispositivo.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que los dispositivos apuntados al endpoint compartido serán reconocidos por la plataforma.

## Requisitos habituales antes de la instalación

- Una Micro SIM operativa con un plan de datos y la información correcta del APN del operador móvil.
- Alimentación al rastreador y acceso básico para la instalación, incluyendo conectores de antena externa si el instalador los requiere.
- Acceso al método de configuración de Astra Telematics, ya sea comandos SMS o el software/documentación oficial de configuración.
- Capacidad para enviar SMS al dispositivo si la configuración por SMS es el método soportado para su unidad.
- Los valores de APN, usuario APN y contraseña APN proporcionados por su operador móvil cuando sean necesarios.
- Confirmación de la versión de firmware y de cualquier instrucción específica del proveedor para asegurar que los comandos coincidan con el firmware instalado.

## Cómo se conecta este rastreador a Plaspy

Al configurarse, el AT111 envía posición y telemetría a través de la red celular al endpoint compartido y al puerto de Plaspy. Plaspy ingiere las correcciones GNSS y la telemetría del dispositivo, y pone esos datos a disposición en la plataforma para seguimiento en vivo, alertas e informes.

- El rastreador se apunta al endpoint compartido de Plaspy d.plaspy.com o a la dirección numérica 54.85.159.138 y al puerto 8888.
- Use UDP o TCP en el puerto 8888 según las opciones de configuración del dispositivo; Plaspy detectará automáticamente el protocolo.
- Las posiciones GNSS, tramas CANBus, entradas digitales y entradas analógicas del AT111 se reenvían a Plaspy para mapeo y análisis.
- Una vez que el reporte inicia, el dispositivo será visible en los paneles de Plaspy para ubicación en vivo, historial de rutas y alertas de eventos.
- Realice pruebas y validaciones periódicas para confirmar que el dispositivo está comunicándose correctamente con el endpoint de Plaspy.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración de Astra Telematics o al software correspondiente, o confirme que su unidad AT111 admite comandos SMS.
2. Configure los valores APN proporcionados por su operador móvil (APN y, si aplica, usuario y contraseña).
3. Configure el servidor GPRS para apuntar a d.plaspy.com o ingrese la dirección numérica 54.85.159.138.
4. Establezca el puerto del servidor en 8888 para Plaspy y seleccione UDP o TCP si el dispositivo requiere elegir el transporte.
5. Aplique o guarde la configuración en el dispositivo usando el método del fabricante que haya utilizado en el paso 1.
6. Reinicie o corte la alimentación del rastreador si el dispositivo o el firmware lo requieren para activar los nuevos ajustes.
7. Valide que el dispositivo reporte a Plaspy comprobando mensajes entrantes en su cuenta Plaspy y confirmando la visibilidad en mapas o listas de dispositivos.

## Ejemplos de comandos de configuración

El AT111 puede configurarse mediante comandos SMS. Los siguientes comandos públicos son proporcionados por Astra Telematics y mantienen marcadores de posición para valores específicos del operador. Envíe estos comandos como mensajes de texto al número del dispositivo en el orden mostrado para ajustar el APN y los detalles del servidor Plaspy.

- Establecer el APN del operador
```text
$APAD,{{apn}}
```
(Reemplace {{apn}} por la cadena APN de su operador móvil.)

- Establecer el usuario del APN del operador (opcional)
```text
$APUN,{{apnu}}
```
(Reemplace {{apnu}} por el usuario APN si su operador lo exige.)

- Establecer la contraseña del APN del operador (opcional)
```text
$APPW,{{apnp}}
```
(Reemplace {{apnp}} por la contraseña APN si su operador lo requiere.)

- Establecer el servidor GPRS al endpoint numérico de Plaspy
```text
$IPAD,54.85.159.138
```

- Establecer el puerto del servidor a Plaspy
```text
$PORT,8888
```

Notas sobre los comandos
- Los comandos APUN y APPW son opcionales y solo necesarios si su operador requiere credenciales APN.
- Los comandos deben enviarse por SMS al dispositivo usando el número asociado a la SIM del equipo.
- Después de enviar los comandos, guarde y reinicie el dispositivo si el equipo lo requiere para aplicar los nuevos ajustes de red y servidor.

## Notas de configuración

- Diferencias de firmware y revisiones de hardware pueden cambiar el conjunto exacto de comandos SMS o la sintaxis requerida; confirme siempre con el manual del dispositivo según su versión de firmware.
- Este equipo soporta configuración por SMS como se muestra en los ejemplos, pero los instaladores también pueden usar herramientas del proveedor o software de configuración si están disponibles.
- Elija UDP o TCP según sus necesidades de instalación; Plaspy soporta ambos y detecta automáticamente el protocolo empleado.
- Todos los dispositivos en Plaspy usan el mismo puerto 8888, por lo que la configuración del puerto es consistente entre tipos de dispositivos.
- Verifique los valores de APN, usuario y contraseña con el operador móvil para asegurar que el dispositivo pueda establecer una sesión GPRS antes de validar la conectividad con Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el Astra Telematics AT111 con Plaspy proporciona integración confiable de ubicación y telemetría en tiempo real para gestión de flotas, procesos anti robo y monitoreo de equipos. Las opciones de antena externa del AT111, su E/S y las capacidades de conectividad lo hacen apropiado para instalaciones profesionales donde se requiere recepción GNSS robusta y captura de telemetría vehicular.

Para obtener más información sobre Plaspy y las integraciones soportadas visite https://www.plaspy.com. Para métodos de configuración específicos del dispositivo, detalles de firmware y comandos oficiales consulte la documentación del fabricante en https://astratelematics.com/ para confirmar las instrucciones de instalación y el comportamiento del firmware.
