---
slug: /suntech/st4410g/configuration
id: st4410g-configuration
sidebar_label: Configuration
title: Suntech - ST4410G Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el Suntech ST4410G a Plaspy usando ajustes de servidor compartidos y comandos SMS
keywords:
  - Configuración Suntech ST4410G
  - Instalación Suntech ST4410G
  - Suntech ST4410G Plaspy
  - Configuración rastreador GPS ST4410G
  - Instalación rastreador GPS Suntech
  - Configuración servidor ST4410G
  - Integración tracker Suntech Plaspy
  - Configuración SMS Suntech ST4410G
  - Configuración telemetría ST4410G
  - Configuración rastreador de activos Suntech
---

# Suntech - Configuración del ST4410G

Esta página documenta el contexto público de configuración para usar el rastreador Suntech ST4410G con Plaspy. Incluye los ajustes compartidos del servidor Plaspy que debe aplicar y los pasos prácticos extraídos de la documentación pública del fabricante, incluyendo los comandos SMS que Suntech publica para este modelo.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando llegan los datos, pero los pasos exactos en el dispositivo pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. La documentación del ST4410G contiene comandos SMS y una regla de ID de dispositivo basada en el IMEI que son útiles para la configuración práctica; utilícelos junto con la documentación del fabricante y los detalles APN del operador.

## Resumen de la configuración

El objetivo es preparar el ST4410G para que envíe de forma fiable posiciones, eventos RF y telemetría de movimiento a Plaspy. Para el ST4410G esto suele implicar aplicar la configuración APN del operador, apuntar el dispositivo al endpoint de Plaspy y confirmar los intervalos de reporte para que el dispositivo aparezca en la plataforma.

- Configure la red del dispositivo y el servidor GPRS para que apunten a Plaspy y la telemetría llegue a la plataforma.
- Establezca un intervalo de reporte que equilibre la precisión de ubicación y la duración de la batería según su implementación.
- Valide la conectividad y la accesibilidad al servidor para que el dispositivo aparezca en los paneles y mapas de Plaspy.
- Use los comandos SMS proporcionados por el fabricante o la herramienta de configuración oficial cuando estén disponibles.
- Confirme que el ID del dispositivo derivado del IMEI es correcto antes de enviar comandos específicos.

## Ajustes del servidor Plaspy

- El dominio del servidor d.plaspy.com debe usarse como el nombre de host del servicio para este rastreador.
- La IP 54.85.159.138 puede usarse cuando el dispositivo o la herramienta requieren una dirección IP.
- El puerto 8888 es el puerto requerido para conexiones a Plaspy para todos los dispositivos compatibles.
- El dispositivo puede configurarse para usar UDP o TCP según las opciones del equipo.
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan los datos y todos los dispositivos usan el mismo puerto en Plaspy.

## Requisitos habituales antes de la configuración

- Una unidad ST4410G cargada y operativa con IMEI legible.
- Una tarjeta SIM activa con plan de datos válido y los detalles APN correctos proporcionados por el operador móvil.
- Acceso a un método para enviar comandos SMS al dispositivo o a la herramienta oficial de configuración de Suntech.
- El IMEI del dispositivo para derivar el ID requerido en los comandos SMS de Suntech.
- Conectividad de red básica que permita al dispositivo alcanzar d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Tiempo para monitorizar el dispositivo tras la configuración y validar el reporte y comportamiento de la batería.

## Cómo se conecta este rastreador a Plaspy

El ST4410G se configura para reportar GNSS, eventos RF y telemetría de movimiento al endpoint y puerto compartidos de Plaspy. Una vez que la red y los ajustes de servidor son correctos, el dispositivo enviará mensajes a Plaspy donde la plataforma decodifica y presenta la ubicación y los eventos.

- El dispositivo informa al servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según la configuración del dispositivo; elija el transporte compatible con el equipo y la red.
- Plaspy detecta automáticamente el protocolo del rastreador y asocia los mensajes entrantes con el registro de dispositivo correcto.
- Los intervalos de reporte regulares y los reportes por eventos (movimiento o RF) generan visibilidad en los paneles y alertas de Plaspy.
- La validación del reporte exitoso se realiza confirmando que el dispositivo aparece y se actualiza en la plataforma Plaspy.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración de Suntech o al software correspondiente, o prepárese para enviar comandos SMS según las instrucciones públicas del equipo.
2. Obtenga el ID del dispositivo a partir del IMEI (ver ejemplo abajo) para que los comandos SMS específicos usen el identificador correcto.
3. Introduzca el endpoint del servidor Plaspy como d.plaspy.com o 54.85.159.138 en la configuración de red/GPRS del equipo.
4. Establezca el puerto del servidor en 8888; este es el puerto compartido que Plaspy utiliza para todos los dispositivos.
5. Elija UDP o TCP si el dispositivo requiere selección de transporte y admite ambas opciones.
6. Aplique o guarde la configuración y reinicie el dispositivo si el procedimiento del fabricante lo exige.
7. Valide que el dispositivo reporte a Plaspy confirmando que aparece y se actualiza en la plataforma.

## Ejemplos de comandos de configuración

La configuración pública del ST4410G incluye comandos basados en SMS. A continuación se muestran los comandos relevantes en orden con los marcadores de posición preservados. Reemplace {{device_id}} por el ID de seis dígitos derivado del IMEI como se describe, y reemplace [apn], [apnu] y [apnp] por los valores APN del operador.

- Establecer el APN del operador y el servidor GPRS
  - Propósito: aplicar el APN del operador, indicador opcional de usuario y contraseña APN, y apuntar el dispositivo al endpoint y puerto del servidor Plaspy.
  - Formato del comando:
```text
SA200NTW;{{device_id}};02;{{apn_user_flag}};[apn];[apnu];[apnp];54.85.159.138;8888;;;;
```
  - Notas:
    - {{device_id}} es el ID de seis dígitos derivado del IMEI como se explica más abajo.
    - {{apn_user_flag}} debe ser 1 si suministra [apnu] o [apnp], de lo contrario 0.
    - [apn] es el APN del operador. [apnu] y [apnp] son campos opcionales de usuario y contraseña APN.

- Establecer intervalo de actualización a 60 segundos
  - Propósito: configurar los intervalos de reporte para que el dispositivo envíe posición y telemetría con la frecuencia deseada.
  - Comando:
```text
SA200RPT;{{device_id}};02;60;60;60;3;0;0;0;0;0
```

- Comprobar configuraciones actuales (verificación)
  - Propósito: solicitar detalles de presets para verificar que el dispositivo aceptó las configuraciones.
  - Comando:
```text
SA200CMD;{{device_id}};02;PresetA
```

## ID del dispositivo a partir del IMEI

El ID del dispositivo usado en los comandos corresponde a los seis dígitos finales del IMEI excluyendo el dígito de verificación final. Por ejemplo, si el IMEI es 123456789012345, el ID del dispositivo es 901234. Asegúrese de extraer correctamente la secuencia de seis dígitos antes de enviar comandos.

## Notas de configuración

- La configuración por SMS mostrada aquí forma parte del flujo de trabajo público de Suntech; algunos instaladores prefieren la herramienta oficial de configuración o un servidor de aprovisionamiento cuando está disponible.
- Las revisiones de firmware y hardware pueden cambiar el comportamiento de los comandos o el orden de los parámetros; verifique la sintaxis según la versión de firmware del dispositivo cuando sea posible.
- Elija UDP o TCP según la capacidad del dispositivo y las condiciones de red; Plaspy acepta ambos y detecta el protocolo automáticamente.
- Confirme los ajustes APN con el operador móvil y utilice el usuario y la contraseña APN solo cuando sean necesarios.
- Todos los dispositivos deben apuntar a d.plaspy.com o 54.85.159.138 en el puerto 8888 para alcanzar el endpoint de ingestión de Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el ST4410G con Plaspy proporciona a las organizaciones visibilidad a nivel de caja y de activos, junto con correlación de eventos RF y telemetría de movimiento. Apuntar el dispositivo al endpoint compartido de Plaspy y aplicar intervalos de reporte prácticos le permite monitorizar ubicaciones, estado de batería y actividad de eventos desde una plataforma centralizada para decisiones operativas y alertas.

Para saber más sobre Plaspy visite https://www.plaspy.com. Para los comandos específicos más recientes, comportamiento de firmware y detalles del fabricante, verifique la información en el sitio oficial de Suntech http://www.suntechint.com/ ya que las especificaciones y los métodos de configuración pueden cambiar con el tiempo.
