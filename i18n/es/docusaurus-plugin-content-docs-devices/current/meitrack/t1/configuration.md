---
slug: /meitrack/t1/configuration
id: t1-configuration
sidebar_label: Configuration
title: Meitrack - T1 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Meitrack T1 para conectar con Plaspy usando servidor compartido y comandos SMS
keywords:
  - configuración Meitrack T1
  - instalación Meitrack T1
  - configuración servidor Meitrack T1
  - rastreador GPS T1 Plaspy
  - configuración rastreador Plaspy
  - configuración rastreador vehicular
  - configuración GPS Plaspy
  - rastreo de flotas Meitrack T1
  - configuración software rastreo T1
  - configuración plataforma GPS Meitrack
---

# Meitrack - T1 Configuración

Esta página describe el contexto público de configuración para usar el Meitrack T1 con Plaspy. Se centra en los ajustes de servidor prácticos y en comandos de ejemplo que permiten al rastreador informar posiciones y eventos a la plataforma Plaspy. Cuando los comandos del fabricante están disponibles públicamente, se reproducen aquí para su conveniencia.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que normalmente sólo necesita proporcionar el endpoint del servidor correcto, el transporte y el puerto. Los pasos de configuración por parte del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que siga las instrucciones del dispositivo en paralelo con las indicaciones de esta página.

## Resumen de configuración

El objetivo de la configuración es preparar el T1 para comunicarse de manera confiable con Plaspy, de modo que la unidad aparezca en la plataforma y reporte posición y eventos según lo esperado. Para el T1 esto suele implicar aplicar el método de configuración del fabricante y establecer el endpoint de Plaspy, mantener el transporte correcto y validar el reporte en vivo.

- Configure el rastreador para que apunte al servidor de Plaspy d.plaspy.com o a la IP del servidor
- Asegúrese de que el dispositivo use el puerto 8888 que Plaspy emplea para todos los dispositivos
- Seleccione UDP o TCP en el dispositivo si la herramienta de configuración lo requiere
- Guarde o aplique los ajustes y reinicie el dispositivo si es necesario para empezar a reportar
- Verifique que el dispositivo aparezca y reporte en Plaspy para que la ubicación y los eventos sean visibles

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: soporte para UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos usan el mismo puerto

## Requisitos previos habituales

- Un Meitrack T1 con energía y accesible, con SMS o el método de configuración del fabricante disponible
- Una tarjeta SIM válida y un plan de datos activo si se requiere GPRS para reportes
- La contraseña del dispositivo o credenciales necesarias para enviar comandos SMS de configuración o usar la herramienta del fabricante
- Acceso a las instrucciones de configuración de Meitrack o a la herramienta de instalación para su versión de firmware y revisión de hardware
- Anotar los datos APN de su proveedor celular si el dispositivo los necesita para GPRS
- Un plan básico para validar el reporte en Plaspy después de la configuración

## Cómo se conecta este rastreador a Plaspy

El T1 se configura para enviar ubicación y eventos al endpoint y puerto compartido de Plaspy. Una vez que el dispositivo envía paquetes de posición al servidor Plaspy d.plaspy.com o a la IP del servidor en el puerto 8888, Plaspy detecta el protocolo del dispositivo automáticamente y procesa los datos entrantes para su visualización y monitoreo.

- El rastreador envía actualizaciones de ubicación a d.plaspy.com o 54.85.159.138 en el puerto 8888
- Plaspy acepta transporte UDP o TCP según la configuración del dispositivo
- Los mensajes de posición y eventos son procesados por Plaspy y mostrados en la plataforma
- Los usuarios de la plataforma pueden ver seguimiento en vivo, historial y alertas de eventos para los dispositivos reportantes
- Todos los dispositivos configurados para Plaspy usan el mismo puerto y la detección automática de protocolos simplifica la integración

## Flujo habitual de configuración

1. Acceda al método oficial de configuración de Meitrack para el T1 usando los comandos SMS documentados o el software del fabricante
2. Introduzca el servidor de Plaspy como d.plaspy.com o la IP 54.85.159.138 en los ajustes del dispositivo
3. Configure el puerto del dispositivo en 8888 que Plaspy usa para todos los dispositivos soportados
4. Elija UDP o TCP como transporte si el dispositivo requiere seleccionar uno
5. Aplique o guarde la configuración en el dispositivo
6. Reinicie el dispositivo si lo recomienda el fabricante o después de que los comandos SMS entren en vigor
7. Valide que el dispositivo reporte a Plaspy y aparezca en la plataforma con las actualizaciones esperadas

## Comandos de configuración de ejemplo

El Meitrack T1 puede configurarse vía SMS usando la contraseña del dispositivo seguida de los comandos. Los ejemplos públicos a continuación usan la contraseña por defecto 0000. No cambie la contraseña en estos ejemplos a menos que haya establecido una contraseña diferente en su dispositivo.

- Reinicio de fábrica opcional o restaurar valores por defecto
```
0000,F11
```
- Establecer el servidor GPRS a Plaspy usando la IP del servidor y el puerto. [apn] es el APN de la red móvil. [apnu] y [apnp] son marcadores opcionales para usuario y contraseña de APN y deben incluirse sólo si su operador los requiere.
```
0000,A21,2,54.85.159.138,8888,[apn]
```
- Variante que incluye usuario y contraseña de APN
```
0000,A21,2,54.85.159.138,8888,[apn],[apnu],[apnp]
```
- Ajustar la zona horaria a UTC 0
```
0000,B36,0
```
- Establecer el intervalo de actualización de ubicación a cada 1 minuto
```
0000,A12,6,0
```
- Configurar el reporte de eventos
```
0000,C03,0
```

Notas sobre los marcadores:
- [apn] Reemplácelo con el nombre APN de su proveedor celular necesario para datos GPRS.
- [apnu] Reemplácelo con el usuario de APN si su operador lo requiere.
- [apnp] Reemplácelo con la contraseña de APN si su operador lo requiere.

Mantenga el orden de los comandos al realizar una configuración inicial: reinicio de fábrica opcional, configuración del servidor, zona horaria, intervalo de reporte y ajustes de eventos. Si su flujo de instalación usa una herramienta de configuración en lugar de SMS, los mismos valores de servidor y puerto aplican.

## Notas de configuración

- El T1 soporta configuración vía SMS como se muestra en los comandos de ejemplo; las herramientas del fabricante o la configuración por USB también pueden estar disponibles según el firmware.
- Plaspy acepta tanto UDP como TCP en el puerto 8888. Elija el transporte que soporte o prefiera para su instalación; Plaspy detectará el protocolo automáticamente.
- La contraseña por defecto del dispositivo 0000 se usa en los ejemplos anteriores; cambie la contraseña después de la configuración si su política de seguridad lo requiere.
- Las revisiones de firmware y las herramientas del proveedor pueden cambiar la sintaxis de los comandos y las funciones disponibles. Confirme los formatos de comando para su versión de firmware específica.
- Use la documentación y herramientas oficiales de Meitrack cuando estén disponibles para evitar comportamientos inesperados del dispositivo.

## Por qué usar Plaspy con esta configuración

Usar el Meitrack T1 con Plaspy ofrece a las organizaciones un camino sencillo hacia la visibilidad y el monitoreo operativo al apuntar el dispositivo al endpoint y puerto compartido de Plaspy. La detección automática de protocolos de la plataforma y el uso consistente de puertos simplifican la integración entre flotas y tipos de dispositivos, permitiéndole enfocarse en el despliegue y la validación en lugar de los detalles de protocolo.

Learn more about Plaspy and how the platform supports third party trackers at https://www.plaspy.com. For device specific instructions, firmware details, and the latest command reference for the Meitrack T1, verify current information on the manufacturer site https://www.meitrack.com/
