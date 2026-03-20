---
slug: /navis/ch_5703/protocol
id: ch_5703-protocol
sidebar_label: Protocol
title: Navis - CH -5703 Protocol
sidebar_class_name: menu_item_tracker
description: Información pública del protocolo para integrar el rastreador marino Navis CH -5703 con Plaspy usando ajustes compartidos y detección automática
keywords:
  - Protocolo Navis CH -5703
  - Protocolo GPS Navis CH -5703
  - Navis CH -5703 para Plaspy
  - Protocolo de comunicación Navis CH -5703
  - Protocolo de rastreo Navis CH -5703
  - Protocolo rastreador GNSS marino Navis
  - Compatibilidad de dispositivos Plaspy
  - Protocolo de seguimiento de embarcaciones Plaspy
  - Protocolo de instrumentación marina
  - Integración de rastreador GPS GNSS
---

# Navis - CH -5703 Protocolo

Esta página describe el contexto público del protocolo para usar el rastreador Navis CH -5703 con Plaspy. Se enfoca en cómo el CH -5703, un receptor GNSS y equipo de navegación diseñado para embarcaciones fluviales y marítimas, comunica posición, hora, parámetros de navegación y mensajes cortos de texto a una plataforma de flotas como Plaspy. El objetivo es explicar conceptos de conexión e integración más que reproducir los detalles específicos del protocolo del fabricante.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta el protocolo del rastreador de forma automática. El endpoint de Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138. Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888, y todos los dispositivos en Plaspy usan el mismo puerto. El comportamiento del protocolo puede variar según la versión de firmware, revisión de hardware e implementación del fabricante, por lo que el comportamiento exacto del equipo debe validarse con la documentación del proveedor cuando sea necesario.

## Resumen del protocolo

El contexto del protocolo CH -5703 abarca los métodos de comunicación que el dispositivo emplea para informar información GNSS y de estado a un back end. Para la integración con Plaspy, la función clave del protocolo del rastreador es entregar de forma fiable la identificación, posición, hora, movimiento y mensajes de servicio para que la plataforma pueda mostrar y procesar la telemetría de la embarcación.

- Permite informes periódicos o por eventos de coordenadas, velocidad sobre el fondo y rumbo para la monitorización de embarcaciones.
- Transporta la identidad y el estado del equipo para que Plaspy pueda asociar los datos entrantes al activo correcto.
- Transmite mensajes de texto cortos y mensajes codificados pensados para un centro de control o un supervisor de monitoreo.
- Soporta la integración de parámetros de navegación y datos de sensores conectados a los sistemas de la embarcación dentro del flujo de monitoreo.
- Proporciona los medios para que el centro de control actualice mapas y gestione prioridades de comunicación cuando está soportado.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un único endpoint compartido y detecta automáticamente el protocolo del rastreador, por lo que la mayoría de los dispositivos no requieren selección manual de protocolo en la plataforma si están correctamente apuntados a Plaspy. La configuración adecuada del reporte en el lado del dispositivo es el requisito principal para una detección automática exitosa.

- Plaspy acepta conexiones de dispositivos en d.plaspy.com y en la IP del servidor 54.85.159.138.
- La plataforma escucha en el puerto 8888 para todos los rastreadores soportados y usa ese puerto común para el tráfico entrante de dispositivos.
- Plaspy puede aceptar reportes por UDP y TCP cuando un dispositivo está configurado para usar cualquiera de los dos transportes en el puerto 8888.
- Cuando un CH -5703 correctamente configurado reporta al endpoint de Plaspy, la plataforma intentará detectar automáticamente el protocolo del dispositivo.
- Normalmente usted no necesita elegir un protocolo en Plaspy si el rastreador está enviando datos al endpoint y transporte correctos.

## Transporte y contexto de conexión

Las opciones de conexión para el CH -5703 dependen de la configuración del equipo y de las rutas de red disponibles en la embarcación. El dispositivo puede enviar telemetría y mensajes por UDP o TCP, y los administradores deben elegir el transporte que mejor se ajuste a la fiabilidad de la red y a las restricciones de firewall.

- Los CH -5703 pueden configurarse para usar UDP o TCP en el puerto 8888 según las necesidades de despliegue y las opciones del equipo.
- Apuntar el dispositivo a d.plaspy.com o a 54.85.159.138 entregará los datos a Plaspy.
- Todos los dispositivos en Plaspy utilizan el mismo puerto, lo que simplifica la configuración de red y firewall para los operadores de flota.
- Elija UDP para menor latencia en redes tolerantes y TCP cuando se requiera entrega garantizada, conforme a la arquitectura de la red de la embarcación.
- Asegúrese de que la LAN de la embarcación y los routers a bordo permitan conexiones salientes al endpoint de Plaspy en el transporte y puerto seleccionados.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware entre unidades CH -5703 pueden cambiar los tipos de mensajes disponibles y el comportamiento de reporte; identifique la revisión de firmware al validar compatibilidad.
- Las revisiones de hardware y módulos opcionales (por ejemplo interfaces de sensores externos o integración AIS) pueden alterar el conjunto de datos reportados a la plataforma.
- Los menús de configuración del fabricante pueden permitir seleccionar el transporte (UDP/TCP) y el endpoint objetivo; verifique estos ajustes durante la puesta en marcha.
- Algunas funciones, como ECDIS o integración con controladores de sensores, pueden requerir configuración adicional tanto en el dispositivo como en la plataforma receptora.
- Siempre contraste el comportamiento observado del dispositivo en la red con la documentación oficial de Navis para esa unidad y firmware.
- Si un dispositivo utiliza modos de reporte no estándar o personalizados, coordine con el fabricante o el distribuidor para confirmar ajustes compatibles con Plaspy.

## Por qué es importante comprender el protocolo

Comprender cómo el CH -5703 se comunica con un back end ayuda a instaladores, gestores de flota e integradores a poner el dispositivo en línea más rápido, solucionar problemas de conectividad y asegurar una operación fiable a largo plazo con Plaspy.

- Reduce el tiempo de configuración al asegurar que se seleccione el endpoint, transporte e intervalos de reporte correctos antes del despliegue.
- Ayuda a diagnosticar problemas de conectividad al distinguir entre fallas de transporte o red y errores de configuración del dispositivo.
- Mejora la calidad de los datos al ajustar los modos de reporte a los requisitos operativos, como la frecuencia de actualizaciones y el contenido de los mensajes.
- Facilita la planificación de reglas de red y firewall porque Plaspy usa un puerto común para todos los dispositivos.
- Apoya la gestión del ciclo de vida cuando actualizaciones de firmware o cambios de hardware afectan lo que el dispositivo envía.

## Por qué usar Plaspy con este protocolo

Usar el Navis CH -5703 con Plaspy ofrece a los operadores una forma de centralizar la telemetría de navegación marítima, la integración de sensores y el reporte de mensajes cortos en una única plataforma de monitoreo. Para embarcaciones fluviales y marítimas que requieren datos GNSS diferenciales, integración con sensores de la embarcación e intercambio de mensajes con un centro de control, Plaspy proporciona un endpoint unificado que acepta reportes de dispositivos y presenta los datos para uso operativo.

Para conocer más sobre Plaspy y las capacidades de la plataforma, visite https://www.plaspy.com. Para obtener los detalles específicos más recientes del protocolo del dispositivo, notas de firmware y la guía de configuración oficial, verifique la información actual con el fabricante en http://navis.ru/. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que se recomienda confirmar la documentación más reciente del fabricante al planificar despliegues o actualizaciones.
