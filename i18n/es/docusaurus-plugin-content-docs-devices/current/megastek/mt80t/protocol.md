---
slug: /megastek/mt80t/protocol
id: mt80t-protocol
sidebar_label: Protocol
title: Megastek - MT80T Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para el rastreador wearable MT80T y cómo se comunica con Plaspy usando ajustes de transporte compartidos
keywords:
  - Protocolo Megastek MT80T
  - Protocolo GPS Megastek MT80T
  - Compatibilidad MT80T Plaspy
  - Protocolo de rastreo MT80T
  - Protocolo de rastreador GPS Megastek
  - Comunicación MT80T
  - TWIN MASK MT80T
  - Protocolo GPS para wearables
  - Protocolo para rastreadores personales
  - Protocolo de dispositivos Plaspy
---

# Megastek - Protocolo MT80T

Esta página describe el contexto público del protocolo para usar el rastreador GPS wearable MT80T con Plaspy. Se enfoca en la comunicación y en los ajustes de transporte que los administradores e integradores deben conocer al apuntar dispositivos MT80T hacia Plaspy para monitoreo centralizado, alertas e informes históricos. El MT80T, descrito por el fabricante como un wearable de grado médico de TWIN MASK, es compatible con Plaspy para el envío de ubicación y telemetría.

Plaspy utiliza configuraciones de conexión compartidas entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un equipo reporta a la plataforma. El comportamiento exacto del protocolo y el contenido de los mensajes pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por eso esta página se concentra en el contexto público de transporte e integración en lugar de los detalles internos del dispositivo.

## Resumen del protocolo

El MT80T se comunica mediante un protocolo de reporte que transmite posición GNSS, disparadores de eventos y telemetría de sensores hacia un servidor remoto. En la integración con Plaspy, este protocolo permite que el dispositivo se identifique ante la plataforma y entregue datos de ubicación y salud útiles para monitoreo en tiempo real y análisis histórico.

- El protocolo transmite telemetría básica como posición GNSS, marcas de tiempo y eventos para su ingestión por Plaspy.
- Datos de salud y eventos del MT80T, como frecuencia cardíaca, SpO2, alertas por caída y pulsaciones de SOS, se incluyen en los reportes del dispositivo para generar alertas basadas en reglas.
- La información de identificación y sesión en los reportes permite a Plaspy asociar los datos entrantes con la unidad y la cuenta correctas.
- El protocolo opera sobre canales de transporte estándar, de modo que los dispositivos pueden reportar a Plaspy desde diversas redes celulares.
- Las elecciones de firmware y configuración en el dispositivo influyen en la frecuencia de envío de datos y en qué eventos generan cargas inmediatas.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes de dispositivos en un endpoint compartido y detecta automáticamente el protocolo del rastreador, por lo que los usuarios rara vez necesitan seleccionar un protocolo manualmente. Siempre que el MT80T esté configurado para reportar al endpoint de Plaspy y el transporte sea accesible, Plaspy identificará el formato entrante y procesará los mensajes del dispositivo conectado.

- El dominio de Plaspy para reporte de dispositivos es d.plaspy.com y la IP del servidor es 54.85.159.138.
- Plaspy escucha en el puerto 8888 para conexiones e ingestión de dispositivos.
- Plaspy detecta automáticamente el protocolo del rastreador para dispositivos soportados cuando llegan datos al puerto compartido.
- Normalmente solo es necesario configurar el APN y el endpoint de reporte en el dispositivo para comenzar a reenviar datos a Plaspy.
- No se requiere configuración de puerto por dispositivo dentro de Plaspy porque todos los equipos usan el mismo puerto de Plaspy.

## Contexto de transporte y conexión

El MT80T puede configurarse para usar UDP o TCP como protocolo de transporte, según el firmware del equipo y las necesidades de despliegue. Típicamente la configuración del dispositivo apunta al nombre de host de Plaspy o a la IP pública para que el rastreador pueda enrutar la telemetría hacia la plataforma.

- Los dispositivos pueden apuntar a d.plaspy.com o directamente a 54.85.159.138 al configurar el endpoint de reporte.
- El puerto de escucha de Plaspy para todos los dispositivos es 8888; los equipos pueden usar UDP o TCP en ese puerto.
- Elija UDP cuando busque menor sobrecarga y reportes con sensibilidad a la latencia, siempre que la red y el firmware lo soporten.
- Elija TCP para entrega más fiable cuando el firmware del dispositivo y las condiciones de la red celular favorezcan un transporte orientado a sesión.
- Asegúrese de que el APN, el plan de datos de la SIM y las opciones de sincronización horaria estén correctos en el MT80T para que los paquetes salgan del dispositivo según lo esperado.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar campos de mensaje, intervalos de reporte y elementos opcionales de telemetría que el MT80T envía.
- Las revisiones de hardware o diferentes lotes de producción pueden implementar funciones de forma distinta; valide el comportamiento del dispositivo en una unidad de prueba antes de un despliegue amplio.
- Algunas funciones, como voz bidireccional o telemetría médica avanzada, pueden transportarse aparte del reporte básico de ubicación según la configuración del equipo.
- La selección de transporte entre UDP y TCP afecta el comportamiento en condiciones de red deficientes y puede modificar las características de entrega.
- Confirme siempre qué campos de telemetría envía su versión del MT80T en lugar de asumir un comportamiento uniforme en todas las unidades.
- Valide la compatibilidad contra la documentación del fabricante cuando configure funciones no estándar o ajustes específicos del vendedor.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del MT80T ayuda a asegurar una configuración confiable, acelerar la resolución de problemas y obtener una operación predecible a largo plazo con Plaspy. Conocer las limitaciones de transporte y reporte reduce el tiempo de integración y ayuda a los administradores a diseñar reglas de monitoreo y alertas adecuadas.

- Identificación más rápida de APN mal configurados o endpoints de reporte incorrectos en el dispositivo.
- Expectativas claras sobre la frecuencia de llegada de posición y telemetría de salud a Plaspy, según el firmware y la configuración.
- Mejor diagnóstico cuando los mensajes no llegan debido a la elección de transporte UDP versus TCP o limitaciones de la red.
- Decisiones informadas sobre retención de datos, umbrales de alerta y muestreo histórico basadas en el comportamiento de reporte del dispositivo.
- Coordinación más sencilla con los proveedores de dispositivos cuando las actualizaciones de firmware cambian el contenido de los mensajes o el comportamiento de los eventos.

## Por qué usar Plaspy con este protocolo

Usar el MT80T con Plaspy ofrece visibilidad centralizada tanto de la ubicación como de la telemetría médica, de modo que los equipos puedan monitorear a usuarios vulnerables, responder a alertas SOS y por caída, y revisar trayectos históricos. La ingestión de reportes por parte de Plaspy permite combinar datos de posición con eventos y telemetría de sensores en paneles unificados y notificaciones automáticas que apoyan casos de uso de cuidado, seguridad y operación.

Si desea saber más sobre Plaspy y cómo la plataforma maneja el reporte y monitoreo de dispositivos, visite https://www.plaspy.com. El soporte de protocolos, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que verifique la información más reciente del protocolo y del firmware específico del MT80T en el sitio del fabricante https://www.megastek.com/.
