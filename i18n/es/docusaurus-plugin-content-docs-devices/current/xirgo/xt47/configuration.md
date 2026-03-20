---
slug: /xirgo/xt47/configuration
id: xt47-configuration
sidebar_label: Configuration
title: Xirgo - XT47 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Xirgo XT47 con Plaspy, incluye ajustes de servidor y ejemplos de comandos SMS
keywords:
- Configuración Xirgo XT47
- Configuración XT47
- Rastreador Xirgo Plaspy
- Configuración servidor XT47
- Configuración rastreador GPS Xirgo
- Configuración plataforma GPS XT47
- Configuración SMS Xirgo XT47
- Integración rastreador Plaspy
- Seguimiento de flotas XT47
- Seguimiento de activos XT47
---

# Xirgo - XT47 Configuración

Esta página explica el contexto de configuración pública para usar el rastreador Xirgo XT47 con Plaspy. Reúne los ajustes de servidor que debe aplicar en Plaspy, pasos prácticos de configuración y ejemplos de comandos SMS publicados públicamente para configurar el equipo y enviar telemetría y datos de ubicación al servicio.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El XT47 es un rastreador resistente pensado para equipos remotos; la orientación aquí se centra en el proceso práctico de apuntar el dispositivo hacia Plaspy y validar la conectividad.

## Resumen de la configuración

Este proceso prepara el XT47 para reportar ubicación y telemetría a Plaspy, de modo que los activos sean visibles en la plataforma, se activen los eventos y pueda aplicar flujos operativos.

- Apunte el XT47 al endpoint del servidor Plaspy y asegúrese de seleccionar el transporte y puerto correctos.
- Configure el APN y los parámetros GPRS del dispositivo si es necesario para que el rastreador use datos celulares.
- Verifique la conectividad del equipo y que los informes lleguen a Plaspy para seguimiento en tiempo real y reproducción histórica.
- Guarde y aplique los ajustes, y realice un reinicio o ciclo de energía si el procedimiento del fabricante lo requiere.
- Use los comandos SMS públicos disponibles cuando el XT47 los soporte para establecer APN y valores de servidor durante la provisión inicial.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: soporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que normalmente no necesita especificar un tipo de protocolo más allá de seleccionar UDP o TCP cuando el dispositivo solicita elegir un transporte

## Requisitos habituales antes de la configuración

- Una unidad XT47 instalada y con alimentación, accesible para su configuración.
- Una SIM celular con plan de datos activo y la información APN correcta del operador móvil.
- Acceso al método de configuración soportado por el fabricante, como configuración por SMS o el software oficial de configuración.
- Conocimientos básicos de los valores APN que requiere su SIM y cualquier campo de usuario o contraseña para autenticación del APN.
- Capacidad para recibir o enviar SMS desde el número telefónico permitido por el dispositivo para la configuración inicial si usa comandos SMS.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el XT47 envía su ubicación y telemetría al endpoint y puerto compartido de Plaspy para que el dispositivo aparezca en la plataforma y pueda procesarse en reglas y eventos.

- El rastreador se apunta a d.plaspy.com o a la IP del servidor Plaspy 54.85.159.138 y usa el puerto 8888 para los reportes salientes.
- El transporte puede configurarse como UDP o TCP según la opción del dispositivo; Plaspy acepta ambos y procesará el flujo entrante.
- Plaspy detecta automáticamente el protocolo del rastreador para interpretar los mensajes entrantes sin necesidad de configurar un protocolo por dispositivo.
- Los eventos y la telemetría de entradas/salidas reportados por el XT47 se ingieren en Plaspy para alertas, procesamiento de geocercas e informes históricos.
- Una vez que comienzan los reportes, los operadores pueden validar la visibilidad del dispositivo, la generación de eventos y la ubicación en tiempo real en los paneles de Plaspy.

## Flujo típico de configuración

1. Acceda al método de configuración oficial del fabricante, como comandos SMS o la herramienta de configuración del proveedor documentada para el XT47.
2. Ingrese el endpoint del servidor Plaspy usando d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Establezca el puerto del servidor en 8888 como puerto de reporte saliente.
4. Elija UDP o TCP si el dispositivo solicita seleccionar un transporte; Plaspy admite ambos.
5. Configure el APN del equipo y cualquier dato de autenticación del APN que la SIM requiera para acceder a los datos móviles.
6. Aplique o guarde la configuración con el método del dispositivo y reinícielo si el procedimiento del fabricante lo indica.
7. Valide que el XT47 reporte a Plaspy comprobando la conectividad del dispositivo y verificando que aparezca en Plaspy con actualizaciones de ubicación recientes.

## Ejemplos de comandos de configuración

El XT47 soporta configuración vía SMS. A continuación se muestran los comandos SMS públicos documentados para la configuración inicial. Envíe estos comandos como mensajes SMS al dispositivo siguiendo las instrucciones del fabricante.

1. Establecer el APN del operador (reemplace los marcadores con los valores de su operador)
```text
+XT:1002,[apnu],[apnp],[apn]
```
- [apnu] es el usuario del APN si su SIM lo requiere
- [apnp] es la contraseña del APN si su SIM lo requiere
- [apn] es el nombre del APN del operador móvil

2. Configurar el servidor GPRS a Plaspy (el puerto y la IP del servidor van explícitos en el comando)
```text
+XT:1001,8888,54.85.159.138,4,0,0
```
- Este comando configura el dispositivo para reportar a la IP del servidor Plaspy 54.85.159.138 usando el puerto 8888
- Las banderas numéricas finales forman parte del formato del comando del dispositivo y pueden tener significados dependientes del firmware; no las cambie salvo que comprenda su propósito para su versión de firmware

Nota: Envíe los comandos en el orden mostrado cuando siga un flujo de provisión por SMS del fabricante. Confirme con la documentación de su proveedor si se requiere alguna confirmación adicional o reinicio tras la configuración por SMS.

## Notas de configuración

- La provisión por SMS está soportada y es de uso común en dispositivos de campo como el XT47; respete los límites del proveedor sobre números remitentes de SMS si aplica.
- Las versiones de firmware y revisiones de hardware pueden alterar el formato de los comandos y las opciones disponibles; confirme la sintaxis exacta con Xirgo para su versión de firmware.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador, por lo que el uso consistente del puerto Plaspy simplifica la incorporación de equipos.
- Elija UDP o TCP según la preferencia del instalador y las condiciones de red; Plaspy acepta ambos pero el comportamiento de la red puede variar según el transporte.
- Mantenga los marcadores como [apn], [apnu] y [apnp] cuando componga los comandos SMS y reemplácelos por los valores específicos de su operador.

## Por qué usar Plaspy con esta configuración

Usar el XT47 con Plaspy ofrece visibilidad centralizada para activos remotos resistentes, habilitando seguimiento en tiempo real, alertas por eventos y decisiones basadas en telemetría. La combinación del diseño de campo del XT47 con las capacidades de la plataforma Plaspy ayuda a reducir tiempos de inactividad, soportar flujos anti robo y proveer a los equipos operativos una fuente única y confiable de ubicación y estado de los activos.

Learn more about Plaspy on the main website https://www.plaspy.com and verify the latest device specific setup details and command syntax with the manufacturer at https://xirgo.com/. Manufacturer specifications, firmware behavior, and setup methods can change over time so checking the official Xirgo documentation ensures the most current instructions.
