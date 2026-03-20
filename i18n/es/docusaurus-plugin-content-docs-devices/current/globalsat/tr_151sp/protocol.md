---
slug: /globalsat/tr_151sp/protocol
id: tr_151sp-protocol
sidebar_label: Protocol
title: GlobalSat - TR-151SP Protocol
sidebar_class_name: menu_item_tracker
description: Información pública del protocolo del GlobalSat TR-151SP y cómo se comunica con Plaspy para rastreo GPS fiable
keywords:
  - protocolo GlobalSat TR-151SP
  - protocolo GPS GlobalSat TR-151SP
  - protocolo de rastreo TR-151SP
  - rastreador GlobalSat Plaspy
  - compatibilidad TR-151SP
  - protocolo rastreador GPS
  - protocolo rastreo vehicular
  - rastreo de activos GlobalSat
  - protocolo rastreador GSM GPRS
  - compatibilidad de dispositivos Plaspy
---

# GlobalSat - Protocolo TR-151SP

Esta página describe el contexto público del protocolo para usar el rastreador GlobalSat TR-151SP con Plaspy. Se centra en cómo el dispositivo se comunica a través de transportes de red estándar hacia Plaspy, qué papel juega el protocolo de reporte en la integración del equipo y puntos prácticos a considerar al vincular un TR-151SP con una plataforma de monitoreo. El TR-151SP es un rastreador GPS GSM GPRS optimizado para batería y diseñado para operación prolongada. Ofrece una batería de alta capacidad de 15A con tiempos de espera de hasta un mes y puede enviar datos de ubicación mediante redes celulares y SMS como opciones de reporte.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo está configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo y las funciones disponibles en un TR-151SP pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página presenta contexto público a nivel de dispositivo más que detalles internos específicos de firmware.

## Visión general del protocolo

El protocolo de reporte del dispositivo define cómo el TR-151SP empaqueta y transmite la información de posición y estado a un servidor remoto para que plataformas como Plaspy puedan registrar y presentar esos datos. El protocolo actúa como el enlace entre el hardware del rastreador y los servicios de Plaspy, permitiendo que las actualizaciones de ubicación, la identidad del equipo y la telemetría operativa fluyan desde el campo hacia el sistema de monitoreo.

- Permite que el TR-151SP envíe actualizaciones de ubicación identificables y estado básico a través de datos celulares
- Transporta información de identidad del dispositivo que permite a Plaspy asociar los mensajes con el registro correcto
- Proporciona un formato detectable y procesable por Plaspy sin que el usuario tenga que seleccionarlo manualmente
- Puede incluir reportes periódicos de posición, mensajes por eventos e indicadores de estado de energía o batería
- Coexiste con la capacidad de reporte por SMS del dispositivo, que suele ser independiente del reporte al servidor

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes de dispositivos en un endpoint y puerto compartidos y detecta automáticamente el protocolo del rastreador que utiliza el equipo. Cuando un TR-151SP se apunta a Plaspy, la plataforma identificará el formato de reporte entrante y lo mapeará a un perfil interno de dispositivo apropiado para que los datos se muestren correctamente en la interfaz de Plaspy.

- Plaspy escucha en un único puerto estandarizado para todos los dispositivos para simplificar la configuración
- Los dispositivos configurados para reportar a d.plaspy.com o 54.85.159.138 y el puerto común son dirigidos al sistema de ingestión de Plaspy
- La detección automática generalmente evita que los usuarios tengan que seleccionar manualmente un protocolo en Plaspy si el equipo reporta al endpoint de Plaspy
- Es necesario configurar correctamente el rastreador para que los mensajes lleguen a d.plaspy.com en el puerto esperado
- La detección se basa en características públicas de los mensajes e identificadores del equipo, no en exponer internos de firmware

## Contexto de transporte y conexión

El TR-151SP puede configurarse para usar UDP o TCP para el reporte de datos, dependiendo de lo que soporte el firmware y la configuración del equipo. Para la comunicación con Plaspy se utiliza el endpoint y puerto comunes para que la configuración sea coherente entre distintos modelos de rastreadores.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 para reportar a Plaspy
- Los endpoints recomendados de Plaspy para el reporte son el dominio d.plaspy.com o la IP 54.85.159.138
- Plaspy usa el mismo puerto 8888 para todos los dispositivos soportados para simplificar el despliegue y la configuración
- La elección entre UDP y TCP puede afectar las características de entrega y debe coincidir con las capacidades del firmware del TR-151SP
- Asegúrese de que la configuración GPRS y el APN del rastreador estén correctos para que el dispositivo pueda alcanzar d.plaspy.com o la IP indicada

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware en el TR-151SP pueden cambiar las funciones de reporte disponibles y el contenido esperado de los mensajes
- Las revisiones de hardware u accesorios opcionales pueden afectar los perfiles de energía y los intervalos de reporte
- Algunas implementaciones del TR-151SP dependen del reporte por SMS para alertas, mientras que el reporte al servidor utiliza GPRS para llegar a Plaspy
- La selección de UDP o TCP debe coincidir con el soporte del dispositivo y con cualquier restricción de red en su despliegue
- Verifique siempre que el rastreador esté configurado para enviar a d.plaspy.com o 54.85.159.138 en el puerto 8888
- La documentación del fabricante es la fuente autorizada para comportamiento específico de firmware

## Por qué es importante entender el protocolo

Conocer el protocolo de comunicación facilita una correcta configuración del equipo, mantiene la fiabilidad de los reportes y agiliza la resolución de problemas cuando faltan datos de ubicación o telemetría. Estar al tanto de los métodos de transporte, los intervalos de reporte y las diferencias de firmware reduce la incertidumbre durante la integración y ayuda a mantener la confiabilidad a largo plazo en operaciones de rastreo de activos.

- Configuración más rápida cuando conoce qué transporte y endpoint debe usar el dispositivo
- Menos tiempo dedicando a resolver problemas de conectividad entre el rastreador y Plaspy
- Mejores decisiones sobre batería y frecuencia de reporte al alinear intervalos con las necesidades operativas
- Expectativas claras sobre qué campos de datos y eventos el TR-151SP entregará a Plaspy
- Coordinación simplificada con actualizaciones del fabricante y upgrades de firmware

## Por qué usar Plaspy con este protocolo

Usar el GlobalSat TR-151SP con Plaspy incorpora la larga autonomía de batería y la flexibilidad de reporte del rastreador en una plataforma de monitoreo unificada. Las organizaciones que rastrean equipos, carga o activos dispersos obtienen visibilidad continua y acceso a datos históricos de posición, alertas y estado del dispositivo, todo mediante un único endpoint estandarizado de Plaspy para el reporte de dispositivos.

Para aprender más sobre Plaspy y cómo Plaspy maneja la conectividad de dispositivos y la detección de protocolos, visite https://www.plaspy.com. El soporte de protocolos, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que le recomendamos verificar la información más reciente específica del dispositivo con el fabricante en https://www.globalsat.com.tw/.
