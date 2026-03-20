---
slug: /xirgo/xt_4700/configuration
id: xt_4700-configuration
sidebar_label: Configuration
title: Xirgo - XT-4700 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Xirgo XT-4700 y conectarlo a Plaspy con servidor compartido y comandos SMS
keywords:
  - Configuración Xirgo XT-4700
  - Instalación Xirgo XT-4700
  - Configuración XT-4700 Plaspy
  - Configuración GPS Xirgo
  - Configuración servidor XT-4700
  - Configuración rastreador Plaspy
  - Integración plataforma GPS
  - Configuración SMS rastreador
  - Configuración rastreador de activos
  - Instalación rastreo vehicular
---

# Xirgo - XT-4700 Configuración

Esta página describe el contexto público de configuración para usar el rastreador Xirgo XT-4700 con Plaspy. Ofrece pasos prácticos visibles para el fabricante y ejemplos de comandos SMS cuando están disponibles, para preparar el dispositivo y que reporte al endpoint de servidor compartido de Plaspy. Use esta guía como referencia para las tareas comunes necesarias para que el XT-4700 sea visible en Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según firmware, revisión de hardware, tipo de instalación y herramientas del proveedor. El XT-4700 soporta conectividad celular y el fabricante proporciona comandos SMS para configurar servidor GPRS y APN; esos ejemplos públicos se incluyen más abajo.

## Resumen de la configuración

El objetivo es apuntar el XT-4700 al servidor de Plaspy y confirmar que reporte de manera confiable, de modo que el dispositivo aparezca en Plaspy para monitoreo y notificaciones. Para el XT-4700 esto suele implicar establecer el APN del dispositivo y la información del servidor GPRS y verificar el registro en la red y el envío de datos.

- Configure el APN del dispositivo para que la unidad use datos celulares en el reporte
- Establezca la dirección y el puerto del servidor GPRS para dirigir la telemetría a Plaspy
- Seleccione UDP o TCP si el equipo requiere elegir protocolo de transporte
- Guarde y aplique los ajustes y reinicie o corte la energía si el fabricante lo recomienda
- Valide que el dispositivo esté reportando a Plaspy y sea visible en la plataforma

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de servidor Plaspy al configurar el XT-4700. Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support using UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol once the device sends data to the server

## Requisitos típicos antes de la configuración

- Un dispositivo XT-4700 con batería y físicamente instalado o accesible para pruebas
- Una SIM celular activa provisionada para datos en la red donde se usará el equipo
- Acceso al método de configuración que soporte la unidad, como comandos SMS o el software del fabricante
- Conocimiento de los valores APN correctos para la SIM y el operador móvil
- Conectividad de red básica desde la red del dispositivo hacia d.plaspy.com o 54.85.159.138
- Un plan de pruebas para confirmar que el equipo reporte después de la configuración

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el XT-4700 enviará su telemetría al endpoint y puerto del servidor Plaspy para que la plataforma pueda procesar ubicaciones y actualizaciones de estado. Plaspy realiza la detección del protocolo y el enrutamiento una vez que el dispositivo llega al servidor compartido.

- El dispositivo se configura para usar el APN del operador y así establecer sesiones de datos celulares
- El servidor GPRS se apunta a Plaspy usando la IP o dominio compartido y el puerto 8888
- El transporte se establece en UDP o TCP según la opción del dispositivo y la preferencia del instalador
- Cuando el dispositivo transmite datos a d.plaspy.com o 54.85.159.138 en el puerto 8888, Plaspy detecta automáticamente el protocolo
- Plaspy recibe los reportes de ubicación y eventos y los hace visibles en la plataforma para monitoreo y alertas

## Flujo de trabajo de configuración común

1. Acceda al método oficial de configuración Xirgo para el XT-4700, como comandos SMS del fabricante o el software de configuración
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes de servidor del dispositivo
3. Configure el puerto del servidor a 8888 (Plaspy usa el mismo puerto para todos los dispositivos)
4. Seleccione el protocolo de transporte UDP o TCP si el dispositivo requiere elegir uno
5. Configure el APN del dispositivo con los valores de su operador para que el rastreador pueda usar datos celulares
6. Aplique o guarde la configuración y reinicie el equipo si el fabricante lo recomienda
7. Valide que el dispositivo reporte a Plaspy verificando los datos entrantes en la plataforma o comprobando el estado del equipo en Plaspy

## Comandos de configuración de ejemplo

El fabricante del XT-4700 proporciona comandos SMS para la configuración básica. Envíe estos comandos como SMS al equipo en el orden mostrado.

- Establecer el APN del operador
```text
+XT:1002,{{apnu}},{{apnp}},{{apn}}
```
Explicación: Reemplace los marcadores con los valores de su operador. {{apn}} es el nombre del APN, {{apnu}} es el nombre de usuario del APN si se requiere y {{apnp}} es la contraseña del APN si se requiere. Si su operador no solicita usuario o contraseña, deje esos campos vacíos según corresponda.

- Establecer el servidor GPRS a Plaspy
```text
+XT:1001,8888,54.85.159.138,4,0,0
```
Explicación: Este comando configura el dispositivo para reportar a Plaspy en la IP 54.85.159.138 usando el puerto 8888. Los parámetros numéricos restantes son campos del comando del dispositivo según lo proveído por el fabricante y deben enviarse en el orden mostrado. Envíe este SMS después del comando de APN para que el dispositivo pueda abrir una sesión de datos hacia el servidor configurado.

Nota: El fabricante indica que estos comandos se entregan por SMS. Mantenga el orden indicado al aplicar la configuración de APN y servidor.

## Observaciones sobre la configuración

- Las revisiones de firmware y hardware pueden cambiar formatos o comportamiento de los comandos; siempre verifique la sintaxis SMS exacta para el firmware de su dispositivo
- El XT-4700 admite configuración vía SMS como se muestra, pero algunos instaladores prefieren herramientas de fábrica o software de aprovisionamiento proporcionado por Xirgo
- Elija TCP o UDP según las necesidades de la instalación; Plaspy acepta ambos y detectará el protocolo automáticamente después de que el dispositivo envíe datos
- Aplicar los ajustes de APN antes de la configuración del servidor ayuda a garantizar que el dispositivo pueda establecer sesión GPRS cuando se aplique la dirección del servidor
- Confirme la compatibilidad con el operador de red y la configuración del plan de datos antes de un despliegue masivo

## Por qué usar Plaspy con esta configuración

Usar el Xirgo XT-4700 con Plaspy ofrece a las organizaciones una vía sencilla para monitorear activos remotos con un rastreador robusto que puede configurarse para reportar a una plataforma centralizada. Apuntar el dispositivo al servidor compartido de Plaspy y verificar el APN y la conectividad permite visibilidad oportuna de ubicación y estado para activos de alto valor.

Learn more about Plaspy and platform capabilities on the main website https://www.plaspy.com. For the latest device specific configuration details, firmware notes, and manufacturer guidance verify information on the official Xirgo site https://xirgo.com/ since setup methods and command syntax can change over time.
