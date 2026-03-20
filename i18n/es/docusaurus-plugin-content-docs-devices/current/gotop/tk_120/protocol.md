---
slug: /gotop/tk_120/protocol
id: tk_120-protocol
sidebar_label: Protocol
title: GOTOP - TK-120 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador GOTOP TK-120 y su compatibilidad con Plaspy
keywords:
  - Protocolo GOTOP TK-120
  - Protocolo GPS GOTOP TK-120
  - Protocolo de comunicación GOTOP TK-120
  - Rastreo GPRS TK-120
  - Rastreo por SMS TK-120
  - Compatibilidad GOTOP Plaspy
  - Protocolo de rastreador TK-120
  - Rastreo de activos GOTOP
  - Rastreo de vehículos TK-120
  - Comunicación de rastreador GPS
---

# GOTOP - Protocolo TK-120

Esta página ofrece una visión pública del protocolo para usar el rastreador GPS GOTOP TK-120 con Plaspy. Describe el contexto general de comunicación y cómo el dispositivo envía ubicación y estado a una plataforma de seguimiento remota. La información se centra en aspectos de alto nivel y no sensibles que ayudan a administradores e integradores a comprender cómo se comunica el equipo con Plaspy.

Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando los equipos reportan a la plataforma. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que considere esta página como una guía práctica de integración y no como una referencia definitiva del dispositivo.

## Visión general del protocolo

El protocolo del TK-120 regula cómo el dispositivo reporta posición, movimiento y datos de estado a un servidor o responde vía SMS. Para el uso con Plaspy, lo importante es que el rastreador puede enviar datos de ubicación útiles por GPRS y que Plaspy puede recibir esos datos y asociarlos a un registro de dispositivo.

- El protocolo permite al TK-120 transmitir coordenadas GPS y el estado básico del equipo a un servidor remoto para seguimiento y visualización.
- El seguimiento por GPRS envía actualizaciones periódicas de posición a un endpoint configurado, lo que posibilita la monitorización casi en tiempo real en Plaspy.
- El reporte por SMS es un modo alterno donde el dispositivo envía coordenadas o un enlace de Google Maps directamente a un número de teléfono.
- El comportamiento del protocolo determina intervalos de reporte, campos de posición y banderas de estado que Plaspy utiliza para mostrar la ubicación y el historial del dispositivo.
- Para un reporte GPRS fiable se requieren en el dispositivo una SIM correcta, un APN funcional y los ajustes de servidor adecuados.

## Cómo detecta Plaspy el protocolo

Plaspy está diseñado para aceptar conexiones entrantes de muchos modelos de rastreadores y para detectar automáticamente el protocolo que usa un equipo cuando se conecta al endpoint de la plataforma. En la mayoría de los casos no necesita seleccionar un protocolo manualmente dentro de Plaspy si el dispositivo está correctamente configurado para reportar a la plataforma.

- Plaspy escucha en un endpoint compartido para los reportes de los dispositivos y usa ese mismo endpoint para aceptar datos de los rastreadores soportados.
- El dominio del servidor de Plaspy para reportes de dispositivos es d.plaspy.com y la IP pública del servidor es 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto para reportes, lo que simplifica la configuración y el alta de equipos.
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan datos a la plataforma, reduciendo la necesidad de selección manual.
- Si un dispositivo está configurado para reportar al endpoint de Plaspy y la conectividad de red es correcta, el flujo habitual es encender el rastreador y verificar que los reportes llegan a Plaspy.

## Transporte y contexto de conexión

El TK-120 puede enviar datos de posición a través de la red de datos móviles usando GPRS y soporta modos de transporte comunes para entregar esos datos a un servidor de seguimiento. Al integrar con Plaspy es importante configurar el dispositivo para usar la dirección de servidor y el transporte correctos.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo.
- Plaspy acepta tráfico de rastreadores en el puerto 8888 y utiliza ese mismo puerto para todos los dispositivos soportados.
- Los dispositivos pueden apuntar al endpoint de Plaspy mediante el nombre de dominio d.plaspy.com o por la IP del servidor 54.85.159.138.
- UDP se emplea comúnmente para reportes de posición ligeros, mientras que TCP puede usarse en dispositivos que prefieren un transporte orientado a conexión.
- Asegúrese de que la SIM del dispositivo tenga un APN operativo y que el rastreador pueda alcanzar el endpoint de Plaspy desde la red móvil.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar qué campos o mensajes envía un TK-120 por GPRS, por lo que debe verificar el comportamiento tras actualizaciones.
- Diferentes revisiones de hardware o lotes de producción pueden presentar pequeñas variaciones en el protocolo o valores por defecto distintos.
- Los menús de configuración del fabricante pueden permitir seleccionar el transporte entre UDP y TCP y el puerto de reporte, por lo que confirme que esos ajustes coinciden con los requisitos de Plaspy.
- El comportamiento por SMS, como los enlaces de Google Maps, es independiente y se gestiona en el dispositivo, separado del reporte por GPRS al servidor que usa Plaspy.
- Valide siempre que los reportes del dispositivo llegan al endpoint de Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888.
- En caso de dudas, consulte la documentación del fabricante para notas específicas de firmware que afecten al comportamiento del protocolo.

## Por qué es importante comprender el protocolo

Entender cómo se comunica el TK-120 ayuda a asegurar una configuración confiable, acelerar la resolución de problemas y garantizar un funcionamiento predecible a largo plazo con Plaspy. Incluso pequeñas diferencias en el transporte, los ajustes de APN o el firmware pueden afectar la llegada de las actualizaciones de posición.

- Confirma que el dispositivo está apuntando al endpoint correcto y usando el transporte esperado.
- Facilita el diagnóstico de problemas de conectividad como puertos bloqueados, APN incorrecto o ajustes de servidor no coincidentes.
- Permite establecer expectativas realistas sobre la frecuencia de reporte, la precisión y la presencia o ausencia de ciertos campos de estado.
- Apoya la provisión consistente de dispositivos documentando los ajustes requeridos antes del despliegue.
- Reduce el tiempo de resolución cuando actualizaciones o cambios de firmware alteran el comportamiento de reporte del dispositivo.

## Por qué usar Plaspy con este protocolo

Usar el GOTOP TK-120 con Plaspy permite a las organizaciones centralizar datos de ubicación, monitorear activos y vehículos, y emplear una única plataforma para alertas y seguimiento histórico. El diseño compacto del TK-120 y sus modos de reporte flexibles lo hacen adecuado para una variedad de aplicaciones donde se requiere un rastreo discreto y fiable.

Para saber más sobre Plaspy y cómo funciona con una amplia gama de rastreadores GPS incluyendo el GOTOP TK-120, visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, notas de firmware y la guía más reciente del fabricante, verifique la información vigente en GOTOP en https://www.gotop.cc/ ya que el comportamiento del equipo puede cambiar con el tiempo.
