---
slug: /thingsys/ts_v9/configuration
id: ts_v9-configuration
sidebar_label: Configuration
title: ThingSys - TS-V9 Configuration
sidebar_class_name: menu_item_tracker
description: Configure el ThingSys TS-V9 para usar con Plaspy con ajustes de servidor públicos y ejemplos de configuración por SMS o GPRS
keywords:
  - Configuración ThingSys TS-V9
  - Configuración TS-V9 para Plaspy
  - Configuración de servidor TS-V9
  - Configuración rastreador GPS TS-V9
  - Configuración rastreador GPS ThingSys
  - Comandos SMS TS-V9
  - Configuración GPRS TS-V9
  - Configuración de rastreador Plaspy
  - Configuración rastreador GPS vehicular
  - Integración ThingSys TS-V9
---

# ThingSys - Configuración del TS-V9

Esta página reúne la información pública necesaria para configurar el rastreador ThingSys TS-V9 con la plataforma Plaspy. Incluye los ajustes de servidor prácticos y ejemplos de comandos SMS y GPRS que se usan habitualmente para apuntar un dispositivo TS-V9 hacia Plaspy y permitir el ingreso de telemetría y posicionamiento en tiempo real. Utilice esta guía como referencia práctica mientras sigue las indicaciones del fabricante sobre herramientas específicas del dispositivo y diferencias de firmware.

Plaspy emplea ajustes de servidor compartidos entre los rastreadores compatibles y detecta automáticamente el protocolo del dispositivo cuando se conecta. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que los comandos aquí mostrados deben considerarse ejemplos públicos que complementan la documentación oficial de ThingSys y sus procedimientos de despliegue.

## Resumen de la configuración

El objetivo del proceso es dejar al TS-V9 listo para que comunique de forma fiable su posición y telemetría a Plaspy y aparezca en su cuenta. Los ajustes públicos que figuran en esta página son todo lo que Plaspy necesita para recibir tráfico del dispositivo; los pasos específicos del fabricante aplican esos ajustes en el equipo.

- Configure los parámetros de reporte por GPRS o SMS para que el rastreador envíe datos al endpoint de Plaspy.
- Establezca el APN, el usuario del APN y la contraseña del APN del operador de la SIM usada por el dispositivo.
- Apunte el equipo al endpoint del servidor Plaspy y al puerto compartido utilizado por la plataforma.
- Seleccione el transporte (UDP o TCP) si el dispositivo exige elegirlo durante la configuración.
- Valide la conectividad y confirme que el dispositivo aparece en Plaspy con posición y telemetría en vivo.
- Use los comandos de verificación del dispositivo para comprobar los ajustes actuales cuando estén disponibles.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador cuando los dispositivos se conectan

Nota: Plaspy usa el mismo puerto para todos los dispositivos compatibles, y la plataforma detectará automáticamente el protocolo del rastreador una vez que el dispositivo alcance el servidor.

## Requisitos típicos antes de la configuración

- Una unidad TS-V9 instalada o accesible para su configuración por SMS o mediante la herramienta del fabricante.
- Una tarjeta SIM activa con plan de datos y capacidad SMS insertada en el rastreador si va a usar GPRS o setup por SMS.
- Acceso al método oficial de configuración de ThingSys o al software correspondiente para la versión de firmware y revisión de hardware de su TS-V9.
- Información básica del dispositivo, como el IMEI y la contraseña por defecto si son requeridos para comandos SMS o herramientas.
- Un procedimiento de prueba o una cuenta Plaspy para validar que el rastreador informa y es visible en la plataforma.
- Un entorno de prueba seguro para reiniciar o hacer ciclos de energía en el equipo durante la configuración si fuera necesario.

## Cómo se conecta este rastreador a Plaspy

El TS-V9 puede configurarse para reportar posición y telemetría a través de GPRS/3G/4G o para aceptar mensajes de control por SMS. Cuando se configura para reportar a la plataforma, el dispositivo envía sus datos al endpoint y puerto de Plaspy indicados más arriba. Plaspy ingiere esos mensajes y los asigna a los dispositivos mediante sus identificadores.

- El rastreador se configura para reportar al endpoint compartido de Plaspy d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888.
- Los datos pueden enviarse por UDP o TCP según los ajustes del dispositivo y la preferencia del instalador.
- Plaspy detecta automáticamente el protocolo del rastreador y decodifica los formatos de mensaje compatibles para su visualización en la plataforma.
- Una vez activo el reporte, el dispositivo provee actualizaciones de ubicación y telemetría que aparecen en los paneles y flujos de alertas de Plaspy.
- Donde el dispositivo soporte gestión por SMS, los comandos SMS pueden usarse para configurar y verificar el equipo.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración de ThingSys o al software adecuado para su TS-V9 y versión de firmware. Esto puede ser por comandos SMS o mediante la herramienta del proveedor.
2. Introduzca el endpoint de Plaspy como dominio d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Configure el puerto del servidor en 8888. Todos los dispositivos en Plaspy usan el mismo puerto.
4. Seleccione UDP o TCP si el equipo requiere elegir el transporte durante la configuración.
5. Configure el APN del operador, el usuario APN y la contraseña APN según lo exija el proveedor de la SIM.
6. Aplique o guarde la configuración y reinicie el dispositivo si las instrucciones del fabricante lo requieren.
7. Valide que el dispositivo reporte a Plaspy confirmando que aparece en la plataforma y envía actualizaciones regulares de posición y telemetría.

Si utiliza SMS para la configuración inicial, incluya la contraseña del dispositivo en los comandos SMS cuando sea necesario. El conjunto de comandos SMS de ejemplo más abajo muestra las órdenes públicas típicas usadas con dispositivos TS-V9.

## Comandos de configuración de ejemplo

El TS-V9 admite configuración por SMS usando la contraseña del dispositivo. Los comandos públicos de ejemplo que siguen reflejan el orden y los marcadores de posición que se usan comúnmente. La contraseña por defecto del dispositivo que aparece en el ejemplo público es 123456. Conserve marcadores como {{apn}}, {{apnu}} y {{apnp}} y reemplácelos por los valores del APN de su operador.

1. Opcional: restablecimiento inicial de fábrica (solo cuando sea necesario)
```
FORMAT
```
Etiqueta: configuración inicial opcional o cuando se requiere un restablecimiento completo antes de reconfigurar.

2. Establecer el APN del operador
```
apn123456 {{apn}}
```
Reemplace {{apn}} con la cadena APN de su operador.

3. Establecer el usuario APN
```
apnuser123456 {{apnu}}
```
Reemplace {{apnu}} con el usuario del APN si su operador lo requiere. Deje en blanco u omita si no es necesario.

4. Establecer la contraseña del APN
```
apnpasswd123456 {{apnp}}
```
Reemplace {{apnp}} con la contraseña del APN si el operador la exige.

5. Establecer el servidor GPRS (IP y puerto)
```
ip54.85.159.138 8888
```
Este comando apunta el dispositivo a la IP y puerto del servidor Plaspy. El dominio público d.plaspy.com también puede ser soportado por otras herramientas de configuración; aquí se muestra la IP tal como figura en la lista pública de comandos.

6. Comprobar los ajustes actuales del equipo
```
CXZT
```
Use este comando de verificación para solicitar detalles de configuración actuales al dispositivo cuando esté soportado.

Notas sobre los marcadores: {{apn}} es el APN del operador. {{apnu}} y {{apnp}} son los marcadores para usuario y contraseña del APN. Mantenga el prefijo de contraseña del dispositivo (123456 en el ejemplo público) en el formato del comando si el dispositivo requiere autenticación para la configuración por SMS.

## Notas sobre la configuración

- La configuración por SMS está soportada por el conjunto de comandos públicos del TS-V9 mostrado arriba; las herramientas del fabricante o el software de PC pueden exponer los mismos ajustes en un formulario GUI.
- Las versiones de firmware y las revisiones de hardware pueden cambiar la sintaxis exacta de los comandos y las características disponibles. Confirme siempre la sintaxis con la documentación más reciente de ThingSys.
- Elija UDP o TCP según la estabilidad y el comportamiento de la red del operador en su región de despliegue; Plaspy acepta ambos en el puerto 8888 y detecta el protocolo automáticamente.
- Al usar comandos SMS, preserve el prefijo de contraseña del dispositivo y reemplace únicamente los valores marcados por el operador.
- Tras aplicar los ajustes, puede ser necesario reiniciar el dispositivo para que los cambios surtan efecto; verifique con el comando CXZT o con la herramienta del fabricante.

## Por qué usar Plaspy con esta configuración

Configurar el TS-V9 para reportar a Plaspy ofrece a flotas y operadores un endpoint único y consistente para recopilar posición en tiempo real y telemetría de vehículos. La detección automática de protocolos de Plaspy y el puerto compartido facilitan la incorporación de dispositivos TS-V9 una vez que están apuntando a la plataforma, habilitando mapas, alertas e historial para la supervisión operativa.

Para obtener más información sobre Plaspy y cómo maneja la integración de dispositivos y los flujos de trabajo de flota visite https://www.plaspy.com. Para instrucciones de configuración específicas del dispositivo, archivos de protocolo y detalles de firmware consulte la documentación oficial de ThingSys en https://www.thingsys.com/ y verifique los procedimientos del fabricante y cualquier comportamiento dependiente del firmware.
