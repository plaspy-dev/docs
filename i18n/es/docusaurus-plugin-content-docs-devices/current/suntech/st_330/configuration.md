---
slug: /suntech/st_330/configuration
id: st_330-configuration
sidebar_label: Configuration
title: Suntech - ST 330 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Suntech ST 330 y su compatibilidad con Plaspy usando ajustes de servidor compartidos
keywords:
  - Configuración Suntech ST 330
  - Configurar Suntech ST330
  - Configuración ST 330 Plaspy
  - Ajustes servidor rastreador Suntech
  - Configuración SMS ST 330
  - Configuración rastreador GPS Suntech
  - Ajustes APN ST 330
  - Configuración plataforma rastreo vehicular
  - Configuración rastreador Plaspy
  - Configuración rastreador contenedor
---

# Suntech - Configuración ST 330

Esta página describe el contexto público de configuración para usar el rastreador Suntech ST 330 con la plataforma Plaspy. Reúne ejemplos prácticos de comandos SMS proporcionados por el fabricante y los ajustes de servidor de Plaspy que necesitará para registrar el dispositivo y comenzar a recibir sus reportes en Plaspy. Utilice esta guía para preparar el ST 330 para comunicarse con Plaspy y validar que su dispositivo sea visible en la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y realiza detección automática del protocolo para las conexiones entrantes de los rastreadores. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El ST 330 suele usar configuración por SMS para parámetros de red y reporte; esta página muestra cómo los comandos SMS públicos se corresponden con los ajustes de Plaspy y qué verificar antes y después de aplicarlos.

## Resumen de la configuración

El objetivo de la configuración es asegurar que el ST 330 pueda alcanzar Plaspy de forma fiable y enviar actualizaciones de posición y estado para que activos como contenedores y dry boxes sean visibles y monitoreados. Los pasos públicos se enfocan en ajustar los parámetros de red del dispositivo, el endpoint del servidor Plaspy y la frecuencia de reporte.

- Calcule y use el ID del dispositivo derivado del IMEI al enviar comandos SMS de configuración.
- Configure el APN del dispositivo y la dirección del servidor Plaspy para que el rastreador pueda establecer conexiones de datos GPRS.
- Ajuste el intervalo de reporte del equipo según sus necesidades de monitoreo y la expectativa de duración de batería.
- Verifique que el rastreador esté apuntando al endpoint compartido de Plaspy y que aparezca en la plataforma.
- Aplique comandos por SMS o use la herramienta del fabricante documentada para el ST 330 y confirme los ajustes.

## Ajustes de servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte para UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos usan el mismo puerto

Estos valores son los ajustes públicos de conexión de Plaspy que debe usar al configurar los parámetros de red/servidor del ST 330.

## Requisitos habituales antes de la configuración

- Un ST 330 cargado y operativo con IMEI legible.
- Una tarjeta SIM activa provisionada para datos (GPRS) y que pueda recibir SMS para la configuración vía mensajes.
- Acceso al método de comandos SMS del ST 330 o a la herramienta oficial de Suntech o la documentación del instalador.
- El IMEI del dispositivo para calcular el ID del dispositivo (el ST 330 usa los últimos 9 dígitos del IMEI excluyendo el dígito de control final).
- Conocimiento del APN del operador y, opcionalmente, del nombre de usuario y contraseña del APN si su SIM requiere autenticación.
- Capacidad para recibir mensajes de confirmación desde el dispositivo o para verificar los reportes del dispositivo en Plaspy después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El ST 330 se configura para enviar su ubicación y estado del dispositivo al endpoint y puerto compartidos de Plaspy para que los activos sean visibles en la plataforma. La configuración asegura que el dispositivo abra una conexión de datos hacia el servidor Plaspy y transmita reportes periódicos.

- El equipo se apunta al servidor Plaspy (d.plaspy.com o 54.85.159.138) y al puerto 8888.
- El transporte puede configurarse en UDP o TCP según el firmware del dispositivo o la preferencia del instalador.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta al puerto compartido del servidor.
- Los reportes del rastreador permiten la visibilidad y el monitoreo de la ubicación y el estado operativo básico dentro de Plaspy.
- Tras la configuración, valide la presencia del dispositivo y las posiciones recientes en Plaspy para confirmar la conectividad.

## Flujo común de configuración

1. Acceda al método oficial de configuración Suntech para el ST 330 (comandos SMS o una herramienta Suntech aprobada) y confirme el IMEI.
2. Calcule el ID del dispositivo a partir del IMEI: use los últimos 9 dígitos del IMEI excluyendo el dígito de verificación final.
3. Ingrese d.plaspy.com o 54.85.159.138 como dirección del servidor GPRS y configure el puerto 8888 en la configuración del dispositivo.
4. Elija UDP o TCP como transporte si el dispositivo solicita una selección.
5. Configure el APN del operador y cualquier nombre de usuario/contraseña del APN necesarios (o déjelos en blanco si no son requeridos).
6. Aplique o guarde la configuración en el dispositivo y reinicie el rastreador si el fabricante lo recomienda.
7. Valide que el dispositivo reporte a Plaspy comprobando la actividad del dispositivo y los datos de posición recientes en la plataforma Plaspy.

## Comandos de configuración de ejemplo

El ST 330 puede configurarse por SMS. El ID del dispositivo usado en estos comandos son los últimos 9 dígitos del IMEI excluyendo el dígito final. Por ejemplo, si el IMEI es 123456789012345, el ID del dispositivo sería la subcadena que representa los 9 dígitos anteriores al dígito final, según lo descrito arriba.

1) Reinicio de fábrica opcional (usar solamente si necesita restaurar valores por defecto):
```
ST300CMD;[DEVICE_ID];02;Reset
```
Etiqueta: Reiniciar ajustes de fábrica (paso inicial opcional).

2) Establecer APN del operador y servidor GPRS
- Si el proveedor de SIM no requiere usuario o contraseña del APN, establezca la bandera de autenticación en 0:
```
ST300NTW;[DEVICE_ID];02;0;[apn];;;54.85.159.138;8888;;;;
```
- Si el proveedor de SIM requiere usuario o contraseña del APN, establezca la bandera de autenticación en 1 e incluya las credenciales:
```
ST300NTW;[DEVICE_ID];02;1;[apn];[apnu];[apnp];54.85.159.138;8888;;;;
```
Notas:
- [DEVICE_ID] son los últimos 9 dígitos del IMEI excluyendo el dígito final.
- [apn] es el marcador de posición para el APN del operador.
- [apnu] es el marcador de posición para el nombre de usuario del APN.
- [apnp] es el marcador de posición para la contraseña del APN.
- Puede sustituir d.plaspy.com por 54.85.159.138 si el dispositivo acepta nombres de host.

3) Establecer intervalo de actualización/reporte a 60 segundos (ejemplo de frecuencia de reporte):
```
ST300RPT;[DEVICE_ID];02;60;60;60;3;0;0;0;0;0
```
Etiqueta: Configurar intervalos de reporte periódico.

4) Comando de verificación para solicitar las configuraciones o presets actuales:
```
ST300CMD;[DEVICE_ID];02;PresetA
```
Etiqueta: Comprobar ajustes actuales del dispositivo.

Preserve el orden: reinicio (opcional), red/servidor, reporte y luego verificación. Reemplace los marcadores antes de enviar. Siempre confirme el formato exacto del SMS requerido por el firmware de su dispositivo.

## Notas de configuración

- Las versiones de firmware de Suntech y los entornos de los operadores pueden cambiar la forma en que se analizan los comandos SMS; confirme la sintaxis con la documentación actual del fabricante.
- El ST 330 admite configuración vía SMS según los ejemplos públicos anteriores; algunos instaladores pueden preferir una herramienta de configuración Suntech cuando esté disponible.
- Elija UDP o TCP en función de las condiciones de la red o la recomendación del instalador; Plaspy acepta ambos y detecta automáticamente el protocolo.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos compatibles, por lo que el valor del puerto no cambia entre rastreadores.
- Si envía credenciales del APN, asegúrese de establecer la bandera de autenticación a 1 en el comando ST300NTW para que el dispositivo intente la conexión GPRS autenticada.

## Por qué usar Plaspy con esta configuración

Usar el Suntech ST 330 con Plaspy ofrece ajustes de servidor consistentes y detección automática de protocolo, de modo que usted puede concentrarse en la instalación y el monitoreo en lugar de gestionar variaciones por dispositivo. El enfoque de endpoint compartido de Plaspy simplifica la incorporación de múltiples equipos al usar la misma dirección y puerto para los rastreadores compatibles.

Para saber más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para métodos de configuración específicos más recientes, comportamiento de firmware y detalles del fabricante verifique la información actual en el sitio web de Suntech http://www.suntechint.com/
