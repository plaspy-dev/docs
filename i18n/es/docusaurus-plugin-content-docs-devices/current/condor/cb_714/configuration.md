---
slug: /condor/cb_714/configuration
id: cb_714-configuration
sidebar_label: Configuration
title: Condor - CB-714 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Condor CB-714 para integración con Plaspy, ajustes de servidor y comandos SMS
keywords:
  - Configuración Condor CB-714
  - Instalación Condor CB-714
  - Condor CB-714 Plaspy
  - Configuración rastreador Condor para bicicleta
  - Configuración servidor CB-714
  - Configuración APN CB-714
  - Comandos SMS CB-714
  - Configuración GPS para rastreador de bicicleta
  - Seguimiento de flotas Condor CB-714
  - Configuración de rastreador Plaspy
---

# Condor - CB-714 Configuración

Esta página documenta el contexto público de configuración para usar el rastreador GPS Condor CB-714 con la plataforma Plaspy. Se enfoca en los ajustes de servidor prácticos, los comandos SMS publicados para el modelo y los pasos necesarios para que el dispositivo reporte a Plaspy. Utilice esta guía como referencia técnica al preparar un CB-714 para su integración con Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Cuando abajo se reproducen comandos SMS públicos, se presentan como plantillas; verifique valores como las credenciales APN, el IMEI y cualquier campo opcional antes de aplicarlos.

## Resumen de la configuración

El proceso de configuración prepara al CB-714 para enviar su telemetría a Plaspy, de modo que trayectos, rutas y métricas de viaje aparezcan en la plataforma. La configuración normalmente incluye establecer el APN celular, el identificador del equipo, la zona horaria, el endpoint GPRS/servidor y el intervalo de actualización para que el rastreador informe de forma fiable a Plaspy.

- Configure el APN del dispositivo y las credenciales GPRS necesarias para que el rastreador use datos móviles.
- Establezca un identificador corto del dispositivo (alias) derivado del IMEI para una identificación sencilla en Plaspy.
- Apunte el rastreador al endpoint del servidor de Plaspy y confirme el transporte (UDP o TCP) en el puerto 8888.
- Defina un intervalo de actualización apropiado para seguimiento de bicicletas, que equilibre visibilidad en tiempo real y duración de batería.
- Verifique la conectividad con un comando de comprobación desde el dispositivo y confirme que el equipo sea visible en Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Transporte: UDP o TCP (el CB-714 puede configurarse para usar cualquiera de los dos)
- Plaspy detecta automáticamente el protocolo del rastreador y utiliza el mismo puerto para todos los dispositivos compatibles

## Requisitos típicos antes de la configuración

- Un rastreador CB-714 con alimentación y batería cargada o fuente de energía instalada.
- Una tarjeta SIM activa con plan de datos y el APN correcto para su operador móvil.
- Acceso al IMEI del dispositivo y conocimiento de la contraseña por defecto del rastreador (el ejemplo público que se muestra a continuación usa 0000).
- Capacidad para enviar comandos SMS al rastreador o acceso al software/herramienta oficial de configuración de Condor.
- Una cuenta en Plaspy y acceso a la plataforma para verificar la visibilidad del dispositivo tras la configuración.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el CB-714 envía su ubicación y telemetría de viaje al endpoint y puerto del servidor Plaspy, de modo que los mapas de rutas, distancias y duraciones de viaje estén disponibles en la plataforma. Plaspy recibe el uplink, reconoce automáticamente el protocolo del rastreador y procesa los mensajes del dispositivo para su visualización e informes.

- El rastreador apunta al endpoint compartido de Plaspy (d.plaspy.com o 54.85.159.138) en el puerto 8888.
- Los uplinks de telemetría se envían por el transporte elegido (UDP o TCP) y son recibidos por Plaspy.
- Plaspy procesa los mensajes entrantes y los asigna al identificador del dispositivo (alias o IMEI).
- Los eventos y los reportes periódicos de posición permiten la visualización de rutas e informes de viaje en Plaspy.
- Los administradores pueden monitorear la conectividad y los viajes históricos desde la interfaz de Plaspy.

## Flujo común de configuración

1. Acceda al método o software oficial de configuración de Condor o asegúrese de poder enviar comandos SMS al dispositivo según el proceso publicado por el fabricante.
2. Configure el APN del dispositivo con los parámetros de su operador para que esté disponible el GPRS.
3. Ingrese el servidor de Plaspy como d.plaspy.com o la IP 54.85.159.138 cuando el equipo solicite una dirección de servidor.
4. Establezca el puerto del servidor en 8888 y elija UDP o TCP si el dispositivo requiere seleccionar el transporte.
5. Aplique o guarde la configuración y, si es necesario, reinicie el equipo para activar los cambios.
6. Use el comando de verificación del dispositivo para confirmar el estado de conexión y validar que el rastreador reporte a Plaspy.
7. Confirme que el dispositivo aparezca en Plaspy y supervise las primeras actualizaciones de posición y los registros de viaje para asegurar que la configuración esté completa.

## Ejemplos de comandos de configuración

El CB-714 admite configuración mediante SMS usando la contraseña del dispositivo. El ejemplo público usa la contraseña por defecto 0000. Conserve los marcadores y reemplácelos por sus valores de operador o de dispositivo al enviar los comandos.

- Configure el APN del operador. Reemplace {{apn}} por el APN de su operador. Opcionalmente incluya {{apnu}} (usuario APN) y {{apnp}} (contraseña APN) si su operador lo requiere.

  ```
  APN,0000,{{apn}}
  ```

  O con usuario y contraseña opcionales:

  ```
  APN,0000,{{apn}},{{apnu}},{{apnp}}
  ```

- Establezca un identificador (alias) de 5 dígitos. Reemplace xxxxx por los últimos 5 dígitos del IMEI del dispositivo. Elija los cinco últimos dígitos del IMEI como alias para facilitar la identificación.

  ```
  ALIAS,0000,xxxxx#
  ```

  Ejemplo: si el IMEI termina en 12345, envíe:
  ```
  ALIAS,0000,12345#
  ```

- Configure la zona horaria a UTC-0 (plantilla tal como publicada):

  ```
  GMT,0000,-0#
  ```

- Configure el servidor GPRS para apuntar a Plaspy. Esta plantilla utiliza la IP del servidor Plaspy, el puerto 8888 y los indicadores de transporte publicados. Si la interfaz de su dispositivo acepta un dominio en lugar de IP, puede usar d.plaspy.com en lugar de la IP donde se permita.

  ```
  SERVIDOR,0000,54.85.159.138,8888,U,A#
  ```

  Nota: El ejemplo anterior usa la IP publicada e incluye los marcadores de transporte tal como aparecen en las plantillas del fabricante. Si su equipo acepta un nombre de dominio puede reemplazar la IP con:
  ```
  SERVIDOR,0000,d.plaspy.com,8888,U,A#
  ```

- Establezca el intervalo de actualización (el ejemplo publicado fija actualizaciones cada 1 minuto):

  ```
  INTERVALO,0000,M,6#
  ```

- Configure el modo GPRS (tal como se publica):

  ```
  GPRS,0000,A#
  ```

- Verifique la configuración de conexión del dispositivo (comando de verificación):

  ```
  CONEXION,0000#
  ```

Importante: la contraseña 0000 mostrada aquí es el ejemplo por defecto de configuraciones públicas. Si su dispositivo tiene otra contraseña o la ha cambiado, reemplace 0000 por la contraseña del equipo. Mantenga los marcadores como {{apn}}, {{apnu}} y {{apnp}} en sus comandos hasta reemplazarlos por valores reales.

## Notas de configuración

- Las versiones de firmware del fabricante o las revisiones de hardware pueden cambiar la sintaxis de los comandos o los campos requeridos; consulte la documentación del fabricante para cualquier diferencia específica de firmware.
- El CB-714 admite la configuración por SMS como se muestra en las plantillas públicas; siga el formato SMS de Condor exactamente e incluya la contraseña correcta del dispositivo.
- Elija UDP o TCP según las necesidades de su despliegue; Plaspy acepta cualquiera de los dos transportes en el puerto 8888 y detecta automáticamente el protocolo del rastreador.
- Use d.plaspy.com o la IP 54.85.159.138 y siempre configure el puerto 8888, ya que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles.
- Después de realizar cambios, reinicie el equipo si es necesario y ejecute el comando CONEXION para confirmar que el dispositivo está reportando.

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el Condor CB-714 ofrece una forma sencilla de mostrar rutas de bicicleta, totales de distancia y duraciones de viaje en una plataforma centralizada. Para flotas de bicicletas, alquileres y análisis de desempeño de ciclistas, la telemetría del CB-714 combinada con las herramientas de mapas e informes de Plaspy facilita el monitoreo, el análisis histórico y la supervisión operativa sin entradas complejas específicas por vehículo.

Para obtener más información sobre Plaspy y cómo se integra con dispositivos como el Condor CB-714 visite https://www.plaspy.com. Para los métodos de configuración más recientes por dispositivo, la sintaxis de comandos y los detalles de firmware confirme la información con el fabricante en https://condorskyseeker.com/ ya que los pasos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
