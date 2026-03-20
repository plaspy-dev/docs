---
slug: /gotop/w10sa/configuration
id: w10sa-configuration
sidebar_label: Configuration
title: GOTOP - W10SA Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador GOTOP W10SA con Plaspy usando ajustes de servidor compartido y pasos prácticos
keywords:
  - Configuración GOTOP W10SA
  - Configuración W10SA
  - Configuración rastreador GOTOP
  - Configuración W10SA Plaspy
  - Ajustes servidor W10SA
  - Integración rastreador Plaspy
  - Configuración rastreador GPS
  - Configuración rastreador personal GPS
  - W10SA GT06 808 Tianqin
  - Solución problemas GOTOP W10SA
---

# GOTOP - Configuración del W10SA

Esta página describe el contexto público de configuración para usar el rastreador personal GOTOP W10SA con la plataforma Plaspy. Se enfoca en los ajustes de servidor compartidos que Plaspy requiere y en los pasos prácticos que normalmente siguen los operadores para apuntar un dispositivo W10SA a Plaspy para rastreo en tiempo real, alarmas y reproducción de rutas. Use esta guía junto con el manual del dispositivo y las herramientas del proveedor para los detalles específicos de configuración.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador en el lado de la plataforma, mientras que los pasos exactos en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la herramienta de configuración que proporcione su proveedor. El W10SA admite protocolos de rastreo comunes y permite configurar la IP y el puerto del servidor, por lo que la integración con Plaspy suele consistir en ingresar el endpoint correcto y el tipo de transporte, y luego validar la conectividad.

## Resumen de la configuración

Este proceso prepara un W10SA para enviar telemetría de ubicación y eventos de alarma a Plaspy para rastreo en vivo y reproducción histórica. El objetivo es apuntar el dispositivo al endpoint de Plaspy, elegir el transporte adecuado y confirmar que el equipo reporta correctamente para que aparezca y pueda gestionarse desde el panel de Plaspy.

- Apunte el W10SA al endpoint del servidor de Plaspy y configure el puerto común de Plaspy.
- Seleccione UDP o TCP como transporte en el dispositivo si su interfaz de configuración lo requiere.
- Guarde y aplique los ajustes en el rastreador usando la herramienta oficial de GOTOP o comandos SMS según la variante del dispositivo.
- Verifique que el equipo se registre en Plaspy y envíe actualizaciones periódicas de posición y eventos de alarma.
- Confirme que tipos de alarma como corte de energía, exceso de velocidad, vibración o geocerca se reenvíen a Plaspy.
- Monitoree el dispositivo en Plaspy para actualizaciones en vivo y reproducción de recorridos una vez que la conectividad esté validada.

## Ajustes de servidor de Plaspy

Al configurar el W10SA para Plaspy, utilice los siguientes ajustes públicos del servidor exactamente como se muestran:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

Estos valores son los ajustes compartidos del endpoint de Plaspy utilizados para recibir telemetría de rastreadores compatibles, incluido el W10SA.

## Requisitos habituales antes de la configuración

- Un dispositivo W10SA cargado y operativo con firmware que permita configurar IP y puerto del servidor.
- Acceso al método oficial de configuración GOTOP para el W10SA (app de configuración, herramienta de escritorio o comandos SMS documentados).
- Servicio celular activo en el dispositivo con datos habilitados y señal suficiente para reportes GPRS o LTE.
- Conocimiento del transporte que requiere el dispositivo para enviar datos (UDP o TCP) si el equipo solicita elegir uno.
- Forma de reiniciar o reiniciar el dispositivo después de aplicar los cambios de configuración.
- Acceso a la cuenta o proyecto de Plaspy donde se validará el dispositivo para poder confirmar la llegada de la telemetría.

## Cómo se conecta este rastreador a Plaspy

El W10SA envía periódicamente coordenadas GPS y señales de alarma a través de la red celular al endpoint de Plaspy. Plaspy ingiere la telemetría, mapea automáticamente los campos del protocolo y muestra posiciones en tiempo real, reproducción de rutas y alertas configuradas en la plataforma.

- El rastreador se configura para reportar al endpoint compartido de Plaspy en d.plaspy.com o directamente a la IP 54.85.159.138.
- Todos los dispositivos reportan en el mismo puerto Plaspy 8888, por lo que el puerto se mantiene consistente entre despliegues.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que la plataforma puede parsear GT06, 808, Tianqin u otros protocolos compatibles desde el W10SA.
- El dispositivo envía actualizaciones de posición y eventos de alarma como corte de energía, exceso de velocidad, vibración y disparos de geocerca a Plaspy.
- Una vez que reporta, el dispositivo queda visible en Plaspy para monitoreo, notificaciones y reproducción histórica de rutas.

## Flujo típico de configuración

1. Acceda al método oficial de configuración GOTOP para el W10SA (app del fabricante, herramienta de escritorio o comandos SMS documentados).
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor Plaspy 54.85.159.138 en el campo de servidor o plataforma del dispositivo.
3. Configure el puerto del dispositivo en 8888, que coincide con el puerto compartido de ingestión de Plaspy.
4. Elija UDP o TCP como transporte si el dispositivo requiere selección en sus ajustes.
5. Aplique o guarde la configuración usando la herramienta del fabricante o la interfaz de comandos.
6. Reinicie o realice un ciclo de energía del dispositivo si el firmware del W10SA lo requiere para activar los nuevos ajustes del servidor.
7. Valide que el dispositivo reporte a Plaspy verificando los mensajes iniciales de latido o posición en su cuenta Plaspy.

## Ejemplos de comandos de configuración

El W10SA admite configuración mediante las herramientas proporcionadas por GOTOP y puede aceptar comandos SMS o de software según la revisión de firmware. La sintaxis exacta y la disponibilidad de comandos varían según el firmware del fabricante y el método de configuración incluido con el equipo, así que consulte la documentación oficial de GOTOP para los formatos precisos. Para la integración con Plaspy normalmente ingresará el dominio o la IP del servidor Plaspy y pondrá el puerto 8888, luego seleccionará UDP o TCP según requiera la interfaz del dispositivo.

## Notas sobre la configuración

- Las revisiones de firmware y hardware pueden afectar las opciones de configuración disponibles y los pasos exactos para establecer el servidor y el transporte. Confirme siempre los comandos y menús con el manual del dispositivo.
- Cuando un equipo ofrece UDP y TCP, evalúe las condiciones de red y el comportamiento del operador; Plaspy acepta cualquiera de los dos transportes y detecta el protocolo automáticamente.
- La conectividad celular debe estar activa y estable para que el W10SA entregue telemetría. Confirme que el dispositivo tenga una SIM activa con acceso a datos y señal adecuada.
- Algunas variantes del W10SA permiten configuración vía SMS, mientras que otras requieren una app de configuración o herramienta de escritorio. Use el método que corresponda a su versión del dispositivo.
- Verifique los tipos de alarma y los intervalos de reporte después de la configuración para asegurar que Plaspy reciba la frecuencia de telemetría y los eventos de alerta esperados.

## Por qué usar Plaspy con esta configuración

Usar el GOTOP W10SA con Plaspy ofrece una forma compacta y sencilla de añadir reportes confiables de ubicación en tiempo real y eventos de alarma a su entorno de rastreo. El soporte del W10SA para protocolos comunes y ajustes configurables del servidor permite apuntar los dispositivos directamente a Plaspy, y Plaspy detectará el protocolo e ingresará la telemetría para monitoreo, notificaciones y reproducción histórica.

Learn more about how Plaspy can manage W10SA devices and other compatible trackers at https://www.plaspy.com. For the most current device specific configuration commands, firmware notes, and manufacturer guidance please verify setup details with the official GOTOP documentation at https://www.gotop.cc/.
