---
slug: /eelink/gpt19_h/configuration
id: gpt19_h-configuration
sidebar_label: Configuration
title: EElink - GPT19‑H Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar EElink GPT19‑H con ajustes de servidor Plaspy y comandos SMS para integración
keywords:
  - Configuración EElink GPT19‑H
  - Instalación GPT19‑H
  - Configuración rastreador EElink
  - Integración Plaspy
  - Configuración rastreador GPS
  - Configuración rastreador de activos
  - Configuración rastreador magnético
  - Configuración servidor Plaspy
  - Configuración comandos SMS
  - Configuración remota del rastreador
---

# EElink - Configuración del GPT19‑H

Esta página describe el contexto de configuración pública para usar el rastreador magnético de activos EElink GPT19‑H con Plaspy. Se centra en los ajustes comunes de servidor y en los pasos prácticos que permiten que el dispositivo envíe datos de ubicación y eventos a la plataforma Plaspy. Si está preparando un GPT19‑H para su despliegue, aquí encontrará los detalles del endpoint de Plaspy y los comandos SMS documentados públicamente por el fabricante.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos del lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El GPT19‑H admite comandos de configuración vía SMS como los que se muestran a continuación, y esos comandos se usan habitualmente para apuntar la unidad a Plaspy usando el mismo puerto que Plaspy espera para todos los dispositivos.

## Resumen de la configuración

Este proceso prepara al GPT19‑H para enviar telemetría de posición y eventos a Plaspy, de modo que el dispositivo aparezca en su cuenta Plaspy y reporte de forma confiable. La configuración pública normalmente incluye establecer el APN celular, apuntar el equipo al servidor de Plaspy, seleccionar el modo de transporte si es necesario y validar el comportamiento de reporte.

- Configure el APN del dispositivo para que establezca datos GPRS y pueda alcanzar Plaspy
- Establezca el nombre de host o la IP del servidor Plaspy y el puerto compartido para enrutar la telemetría a Plaspy
- Seleccione UDP o TCP como transporte si el rastreador requiere elegir expresamente el transporte
- Ajuste los intervalos de reporte y el modo de emergencia según las necesidades operativas y la duración de la batería
- Verifique los parámetros y confirme que el dispositivo es visible en Plaspy después de la configuración

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador
- Todos los dispositivos en Plaspy usan el mismo puerto 8888

## Requisitos típicos antes de configurar

- Un GPT19‑H con energía y batería cargada o reemplazable listo para la configuración
- Una tarjeta SIM funcional con un plan de datos activo y el APN correcto del operador móvil
- Capacidad para enviar comandos SMS al dispositivo o acceso a la herramienta de configuración del fabricante
- Acceso al lugar donde está el dispositivo para observar LEDs o comportamiento de estado mientras configura
- Una cuenta de Plaspy o acceso de administrador para validar la telemetría entrante en la plataforma
- Documentación del fabricante para la revisión de firmware específica de su GPT19‑H

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el GPT19‑H reenvía las ubicaciones GPS y LBS, además de telemetría de movimiento, manipulación y eventos, al endpoint del servidor Plaspy. Plaspy recibe esos mensajes en su puerto compartido y aplica el análisis de protocolo para que el dispositivo sea visible en la plataforma.

- El dispositivo se configura para reportar al endpoint compartido de Plaspy d.plaspy.com o 54.85.159.138 en el puerto 8888
- Las localizaciones y la posicionamiento híbrido GPS/LBS se reenvían a Plaspy para visualización en mapa en tiempo real e historial
- Eventos de movimiento, caídas, vibración y manipulación se reportan como telemetría a Plaspy
- Plaspy detecta automáticamente el protocolo entrante y parsea los mensajes para su visualización y generación de alertas
- El uso del mismo puerto y la detección automática de protocolo permiten que múltiples modelos de dispositivos convivan en Plaspy sin cambiar el puerto por dispositivo

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración de EElink para su equipo: use los comandos SMS documentados o la herramienta del fabricante correspondiente a su firmware.
2. Configure el APN del dispositivo usando el comando APN para que se establezcan datos GPRS.
3. Ingrese la dirección del servidor Plaspy usando d.plaspy.com o 54.85.159.138 y establezca el puerto en 8888.
4. Elija UDP o TCP como transporte si el dispositivo requiere una selección explícita.
5. Defina los intervalos de reporte y temporizadores operativos como el intervalo de carga periódica o la cadencia en modo de emergencia.
6. Aplique o guarde la configuración y reinicie el rastreador si el dispositivo necesita un reboot para aplicar los cambios.
7. Valide que el dispositivo reporte a Plaspy verificando el estado del equipo y la telemetría reciente en su cuenta Plaspy.

## Ejemplos de comandos de configuración

El GPT19‑H puede configurarse enviando mensajes SMS con los comandos del fabricante. A continuación se muestran los comandos SMS públicos proporcionados por EElink en su documentación. Conserve los marcadores de posición exactamente como aparecen.

- Reseteo opcional a configuración de fábrica (usar solo si necesita restaurar valores por defecto)
```text
FACTORY#
```

- Establecer la zona horaria a UTC 0
```text
GMT,E,0#
```

- Configurar el APN del operador
```text
APN,[apn]{{,[apnu],[apnp]}}#
```
Explicación: reemplace [apn] por el APN de su operador. Si su operador requiere usuario o contraseña para el APN, incluya los marcadores opcionales [apnu] y [apnp] en el orden mostrado. Mantenga las comas y la almohadilla final.

- Configurar el servidor GPRS usando el dominio de Plaspy (puerto TCP o UDP 8888)
```text
SERVER,1,d.plaspy.com,8888#
```
O configurar el servidor GPRS usando la IP de Plaspy
```text
SERVER,0,54.85.159.138,8888#
```
Explicación: El primer valor después de SERVER selecciona cómo se especifica el servidor. Use la variante de dominio o IP según su preferencia o soporte del firmware.

- Establecer el temporizador de reporte a 60 segundos
```text
TIMER,60#
```

- Verificar parámetros actuales
```text
PARAM#
```
Explicación: Enviar PARAM# solicita al dispositivo que devuelva sus parámetros actuales para confirmar que el APN, el servidor, el temporizador y otros campos se aplicaron correctamente.

## Notas de configuración

- La configuración por SMS está soportada y se usa comúnmente para la configuración en campo del GPT19‑H; siga las indicaciones de EElink para fuentes SMS autorizadas y la sintaxis de comandos.
- Las revisiones de firmware y las versiones de hardware pueden cambiar el soporte o la sintaxis de comandos; verifique el comportamiento de los comandos con la documentación del GPT19‑H correspondiente a su revisión.
- Elija UDP o TCP de acuerdo con las opciones del firmware del equipo; Plaspy acepta telemetría por cualquiera de los dos transportes en el puerto 8888 y detectará el protocolo entrante automáticamente.
- Use el comando PARAM# después de la configuración para confirmar que d.plaspy.com o 54.85.159.138 y el puerto 8888 están correctamente establecidos.
- Mantenga los marcadores de posición [apn], [apnu] y [apnp] intactos al componer los comandos y reemplácelos por los valores del operador según sea necesario.

## Por qué usar Plaspy con esta configuración

Usar el GPT19‑H con Plaspy centraliza los datos de ubicación y eventos para seguimiento de activos a largo plazo, flujos de trabajo antirobo y visibilidad operativa. El endpoint compartido de Plaspy y la detección automática de protocolos simplifican la integración de flotas, de modo que las ubicaciones y la telemetría del GPT19‑H aparecen en los paneles, alertas e informes históricos de Plaspy con una configuración mínima por dispositivo.

Para saber más sobre Plaspy y las funciones de la plataforma, visite https://www.plaspy.com. Dado que los métodos de configuración por dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, verifique las últimas instrucciones y la sintaxis de comandos del GPT19‑H en el sitio oficial de EElink https://www.eelink.com.cn/.
