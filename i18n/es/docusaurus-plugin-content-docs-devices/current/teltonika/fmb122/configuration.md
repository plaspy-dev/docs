---
slug: /teltonika/fmb122/configuration
id: fmb122-configuration
sidebar_label: Configuration
title: Teltonika - FMB122 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Teltonika FMB122 con Plaspy incluyendo ajustes de servidor y comandos de ejemplo
keywords:
  - Configuración Teltonika FMB122
  - Instalación Teltonika FMB122
  - Configuración FMB122 Plaspy
  - Configuración rastreador GPS
  - Configuración seguimiento vehicular
  - Configuración gestor de flotas
  - Configuración rastreador Teltonika
  - Configuración servidor FMB122
  - Configuración rastreador Plaspy
  - Configuración telemática GPS
---

# Teltonika - FMB122 Configuración

Esta página documenta el contexto de configuración pública para utilizar el rastreador GPS Teltonika FMB122 con Plaspy. Explica los ajustes de servidor compartidos de Plaspy que debe aplicar a un FMB122 y muestra un comando público de ejemplo para establecer parámetros básicos. Use esta guía junto con los manuales oficiales de Teltonika y las prácticas de instalación de su organización.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor que utilice (comandos SMS, Teltonika Configurator u otras utilidades de Teltonika). El comando de configuración pública del FMB122 que se muestra a continuación es un ejemplo práctico para preparar el dispositivo y que reporte a Plaspy.

## Resumen de la configuración

El objetivo de este proceso de configuración es apuntar el FMB122 al servidor de Plaspy, asegurar que el dispositivo tenga acceso celular y GNSS operativos, y validar que Plaspy reciba los datos. El comando de ejemplo incluye marcadores de posición para las credenciales APN para que aplique los valores de red correspondientes a su SIM.

- Configure los parámetros de red del dispositivo, incluyendo APN, usuario APN y contraseña APN.
- Establezca el nombre de host o la IP del servidor y el puerto común de Plaspy para que el dispositivo envíe telemetría a la plataforma.
- Seleccione el transporte (UDP o TCP) si la herramienta del dispositivo requiere una selección explícita.
- Guarde y aplique la configuración, luego confirme que el dispositivo reporte al servidor de Plaspy.
- Valide la telemetría y las entradas de sensores en Plaspy una vez que el dispositivo sea visible.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP (el dispositivo puede configurarse con cualquiera de los dos)
- Plaspy detecta automáticamente el protocolo del rastreador para que la plataforma pueda interpretar los mensajes entrantes

Estos ajustes de servidor son los que Plaspy usa para todos los dispositivos compatibles y son los valores a los que debe apuntar el FMB122 al configurar el reporte.

## Requisitos típicos antes de la configuración

- Un dispositivo FMB122 alimentado y accesible, conectado según las instrucciones de instalación.
- Una tarjeta SIM válida provisionada para datos en una red GSM 2G compatible y los detalles APN necesarios.
- Acceso a los métodos de configuración de Teltonika, como comandos SMS, Teltonika Configurator u otras herramientas de aprovisionamiento del proveedor.
- Recepción GNSS (antena interna o externa) suficiente para obtener las primeras posiciones.
- Conocimiento de requisitos específicos de la instalación, como cableado de accesorios, adaptadores CAN o emparejamiento de sensores BLE.
- Acceso a la cuenta Plaspy o a los pasos de registro de dispositivos para validar el equipo una vez que reporte.

## Cómo se conecta este rastreador a Plaspy

El FMB122 envía posición GNSS, entradas de sensores y mensajes de evento a través de su enlace celular al endpoint y puerto del servidor Plaspy. Plaspy ingiere estos mensajes y detecta automáticamente el protocolo del dispositivo para que la telemetría entrante sea visible en la plataforma sin necesidad de mapear protocolos por dispositivo.

- El rastreador se apunta a d.plaspy.com (o a la IP 54.85.159.138) en el puerto 8888 para enviar datos a Plaspy.
- El dispositivo utiliza su conexión celular (dual SIM cuando está configurada) para mantener los flujos de telemetría.
- El transporte puede configurarse como UDP o TCP en el dispositivo; Plaspy acepta ambos.
- Plaspy realiza detección automática de protocolo y parseo para convertir los datos reportados en registros de posición y eventos.
- Una vez validado el reporte, la visibilidad y las alertas para el dispositivo aparecen dentro de Plaspy.

## Flujo de trabajo de configuración habitual

1. Acceda al método de configuración oficial de Teltonika para su dispositivo (comandos SMS, Teltonika Configurator o herramientas de gestión de Teltonika).
2. Ingrese el nombre de host de Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en el parámetro server/host.
3. Configure el puerto en 8888 (Plaspy usa el mismo puerto para todos los dispositivos).
4. Seleccione UDP o TCP si el dispositivo requiere elegir el transporte durante la configuración.
5. Proporcione los ajustes APN y las credenciales necesarias para su SIM usando la herramienta del fabricante o el comando SMS.
6. Aplique o guarde la configuración y reinicie el dispositivo si la herramienta o el firmware lo requieren.
7. Verifique que el dispositivo reporte a Plaspy y que las posiciones y eventos sean visibles en la plataforma.

## Comandos de configuración de ejemplo

El siguiente comando público es un ejemplo común en el estilo Teltonika para establecer parámetros básicos en el FMB122. Incluye marcadores de posición para credenciales APN que debe reemplazar por los valores de su red.

- Ejemplo de comando Teltonika setparam (preserva marcadores de posición):

```text
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

Notas sobre los marcadores de posición:
- [apn] — nombre APN de su tarjeta SIM (reemplace con el APN de su operador).
- [apnu] — nombre de usuario APN si su operador lo requiere (deje en blanco si no se usa).
- [apnp] — contraseña APN si su operador la requiere (deje en blanco si no se usa).

Este comando público establece el host en d.plaspy.com y el puerto en 8888 tal como requiere Plaspy. Los IDs numéricos de los parámetros corresponden a parámetros de dispositivos Teltonika; consulte la documentación de Teltonika para los mapeos exactos si necesita modificar otros ajustes o comprender el significado de un ID numérico específico como 2006.

## Notas de configuración

- Los dispositivos Teltonika suelen configurarse vía comandos SMS o mediante las herramientas Teltonika Configurator; utilice el método apropiado según su instalación y firmware.
- Las versiones de firmware y las revisiones del dispositivo pueden cambiar los IDs de parámetros o el comportamiento; confirme siempre los mapeos de parámetros con la documentación oficial de Teltonika.
- Elija UDP o TCP según las necesidades de la red y la instalación; Plaspy acepta ambos en el puerto 8888.
- El comando setparam de ejemplo contiene marcadores de posición para las credenciales APN; reemplácelos por los valores de su red antes de enviarlo.
- Tras aplicar la configuración, permita tiempo para que el dispositivo adquiera posición GNSS y para que los datos aparezcan en Plaspy.

## Por qué usar Plaspy con esta configuración

Utilizar el Teltonika FMB122 con Plaspy ofrece conectividad directa y sencilla entre dispositivo y plataforma para flotas y seguimiento de activos donde la cobertura 2G y la integración de sensores son suficientes. Con soporte dual SIM, entradas de sensores BLE y 1-Wire, y un formato compacto de instalación, el FMB122 puede reportar posición y telemetría de sensores a Plaspy para monitoreo, alertas y flujos operativos.

Para obtener más información sobre Plaspy y cómo gestiona los datos de los dispositivos, visite https://www.plaspy.com. Para conocer los métodos de configuración específicos, el comportamiento de firmware y los mapeos de parámetros más recientes, verifique los detalles en el sitio del fabricante https://www.teltonika-gps.com/ ya que las funciones y los pasos de configuración pueden cambiar con el tiempo.
