---
slug: /tk_star/tk970/configuration
id: tk970-configuration
sidebar_label: Configuration
title: TK-Star - TK970 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del TK-Star TK970 para Plaspy, con ajustes de servidor, APN y comandos SMS
keywords:
  - Configuración TK-Star TK970
  - Configuración del rastreador GPS TK970
  - Configuración de servidor TK970
  - Configuración TK970 Plaspy
  - Rastreador TK-Star Plaspy
  - Guía de configuración de rastreador GPS
  - Configuración rastreador GPS para vehículo
  - Configuración SMS TK970
  - Configuración de rastreo de flotas
  - Configuración telemática GPS
---

# TK-Star - Configuración TK970

Esta página describe el contexto público de configuración para usar el TK-Star TK970 con la plataforma Plaspy. Se centra en los ajustes prácticos del servidor, el flujo de configuración típico y los comandos SMS públicos proporcionados por el fabricante que se usan comúnmente para apuntar el equipo a Plaspy y habilitar el seguimiento en tiempo real, alertas e historial de posiciones.

Plaspy emplea parámetros de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. No obstante, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El TK970 admite configuración por SMS y reporte por GPRS; los comandos de ejemplo a continuación muestran un flujo SMS habitual que incluye la configuración del APN, la definición del servidor GPRS hacia Plaspy y la activación del intervalo de subida y el modo GPRS.

## Resumen de la configuración

Este proceso deja al TK970 listo para enviar datos de ubicación y eventos a la plataforma Plaspy, de modo que el dispositivo sea visible y reportable en su panel de flota.

- Configure el APN y parámetros celulares del equipo para que pueda conectarse a la red de datos móviles.
- Apunte el rastreador al endpoint y puerto del servidor Plaspy para que la telemetría llegue a la plataforma.
- Establezca un intervalo de subida para controlar la frecuencia de envío de posiciones y eventos a Plaspy.
- Cambie el dispositivo al modo de datos GPRS y verifique que esté en línea y reportando a Plaspy.
- Valide la conectividad desde la interfaz de Plaspy y compruebe que el dispositivo aparezca en su cuenta.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado UDP o TCP según los requerimientos del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos típicos antes de la configuración

- Asegúrese de que el TK970 tenga una tarjeta SIM funcional con un plan de datos activo y capacidad de SMS si va a usar comandos por SMS.
- Alimente correctamente el dispositivo y confirme que dispone de batería suficiente o una fuente externa para la configuración y las pruebas.
- Obtenga el APN del operador móvil y, si corresponde, el nombre de usuario y la contraseña del APN.
- Disponga del método de configuración del fabricante para el TK970, ya sea por comandos SMS o por una herramienta oficial de configuración.
- Tenga una cuenta de Plaspy o acceso a su entorno de servidor Plaspy para verificar que el dispositivo aparece y reporta tras la configuración.

## Cómo se conecta este rastreador a Plaspy

El TK970 envía datos de posición y eventos a través de la red celular hacia el endpoint y puerto del servidor Plaspy. Plaspy recibe las conexiones entrantes, reconoce automáticamente el protocolo del rastreador e ingiere la telemetría de ubicación y eventos para seguimiento en vivo, alertas e informes históricos.

- El rastreador se configura para reportar al endpoint y puerto compartidos de Plaspy 54.85.159.138 8888 (o d.plaspy.com en dispositivos que aceptan nombres de dominio).
- El transporte puede configurarse como UDP o TCP en el puerto 8888, según las opciones del dispositivo y las necesidades de la red.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que el dispositivo será interpretado correctamente una vez que alcance el servidor.
- Una vez conectado, el dispositivo queda visible en Plaspy para mapeo en vivo, alertas de eventos e historial de rutas.
- Los intervalos regulares de subida determinan con qué frecuencia se envían los paquetes de posición y telemetría a Plaspy.

## Flujo de configuración común

1. Acceda al método de configuración oficial de TK-Star, como comandos SMS o el software del fabricante, y confirme la contraseña del dispositivo si es necesario.
2. Introduzca el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Configure el puerto del servidor a 8888 y seleccione UDP o TCP si el rastreador requiere la selección explícita del transporte.
4. Configure los parámetros APN del dispositivo, incluyendo el nombre del APN y, si es necesario, el usuario y la contraseña para que el rastreador pueda abrir una sesión GPRS.
5. Aplique o guarde la configuración y cambie el dispositivo al modo de reporte GPRS/datos si el hardware lo requiere.
6. Reinicie el dispositivo si el fabricante recomienda un reinicio para aplicar los nuevos ajustes de servidor y red.
7. Verifique que el dispositivo reporte a Plaspy comprobando el estado en línea, las actualizaciones de posición entrantes o eventos de prueba en su cuenta Plaspy.

## Comandos de configuración de ejemplo

El TK970 admite configuración vía SMS. Los siguientes comandos SMS públicos son una secuencia de uso común. La contraseña por defecto del dispositivo en estos ejemplos es 123456. Reemplace los marcadores donde sea necesario.

1. Reinicio opcional a ajustes de fábrica o para restaurar valores por defecto
```text
begin123456
```
Etiqueta: configuración inicial opcional o reinicio de recuperación. Use solo cuando pretenda restaurar los valores de fábrica.

2. Establecer el APN del operador
```text
apn123456 {{apn}}
```
- Reemplace el marcador {{apn}} por la cadena APN de su operador móvil.

3. (Opcional) Establecer el usuario del APN
```text
apnuser123456 {{apnu}}
```
- {{apnu}} es el marcador para el nombre de usuario del APN cuando el operador requiere autenticación.

4. (Opcional) Establecer la contraseña del APN
```text
apnpasswd123456 {{apnp}}
```
- {{apnp}} es el marcador para la contraseña del APN cuando el operador requiere autenticación.

5. Configurar el servidor GPRS hacia Plaspy usando la IP pública y el puerto
```text
adminip123456 54.85.159.138 8888
```
- Este comando apunta el equipo a Plaspy. Si su firmware acepta un nombre de dominio en lugar de la IP, puede ingresar d.plaspy.com donde esté soportado; consulte la documentación de TK-Star para la sintaxis exacta.

6. Establecer el intervalo de subida a 60 segundos
```text
upload123456 60
```
- Ajuste el valor numérico si necesita una frecuencia de reporte diferente. El ejemplo usa actualizaciones cada 60 segundos.

7. Cambiar el dispositivo al modo GPRS para habilitar el reporte de datos
```text
gprs123456
```

Notas sobre marcadores y contraseña
- La contraseña por defecto mostrada en estos comandos es 123456; utilice la contraseña configurada para su unidad.
- Mantenga los marcadores como {{apn}}, {{apnu}} y {{apnp}} tal como aparecen y sustitúyalos por las credenciales de su operador durante la configuración real.

## Observaciones de configuración

- La configuración por SMS es soportada y se usa comúnmente en instalaciones de campo para el TK970; las herramientas del fabricante también pueden ofrecer opciones por USB o por aire.
- Las versiones de firmware y las revisiones de hardware pueden cambiar la sintaxis de los comandos o las funciones disponibles; verifique el conjunto de comandos exacto para su firmware antes de realizar despliegues masivos.
- Elija UDP o TCP en función del comportamiento de su red y operador; Plaspy escucha en el puerto 8888 y aceptará cualquiera de los dos transportes mientras detecta automáticamente el protocolo.
- Todos los dispositivos en Plaspy usan el mismo puerto 8888, lo que simplifica los ajustes de servidor entre diferentes modelos.
- Si prefiere usar un nombre de dominio en lugar de la dirección IP, confirme que el firmware del TK970 acepta nombres de dominio en los ajustes de servidor antes de sustituir por d.plaspy.com.

## Por qué usar Plaspy con esta configuración

Usar el TK-Star TK970 con Plaspy ofrece un camino práctico para obtener visibilidad en tiempo real, alertas por eventos e informes históricos de rutas para flotas, vehículos de renta y activos individuales. El flujo de configuración público mostrado aquí se enfoca en el APN, en apuntar el rastreador a Plaspy y en habilitar el reporte de datos para que las organizaciones reciban telemetría de posición y eventos de forma fiable en los tableros y aplicaciones móviles de Plaspy.

Para obtener más información sobre Plaspy y cómo centralizar la supervisión de dispositivos como el TK970 visite https://www.plaspy.com. Para la sintaxis de comandos específica más reciente, notas de firmware e instrucciones del fabricante, verifique los detalles en el sitio oficial de TK-Star https://www.tk-star.com/ ya que el comportamiento y los métodos de configuración pueden cambiar con revisiones de firmware y hardware.
