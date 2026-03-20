---
slug: /queclink/gl33cg/protocol
id: gl33cg-protocol
sidebar_label: Protocol
title: QuecLink - GL33CG Protocol
sidebar_class_name: menu_item_tracker
description: Contexto del protocolo público para usar el QuecLink GL33CG con Plaspy para rastreo de carga
keywords:
  - QuecLink GL33CG
  - protocolo QuecLink
  - rastreador GL33CG
  - GL33CG Plaspy
  - protocolo de rastreo GPS
  - comunicación rastreador de carga
  - RF433 rastreo
  - rastreador LTE CAT1
  - rastreo por LBS
  - compatibilidad de dispositivos Plaspy
---

# QuecLink - Protocolo GL33CG

Esta página describe el contexto del protocolo público para usar el rastreador QuecLink GL33CG con Plaspy. Resume cómo se comunica el dispositivo en términos generales, qué debe configurar en la unidad para reportar a Plaspy y qué aspectos del rastreador verificar para lograr una integración exitosa. El GL33CG es un rastreador compacto para recuperación de carga con LTE CAT1 y respaldo 2G, capacidad RF433, soporte LBS y sensores integrados, lo que lo hace adecuado para supervisar envíos de alto valor.

Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Para Plaspy el endpoint público es d.plaspy.com y la IP del servidor es 54.85.159.138 en el puerto 8888. Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888. Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta correctamente al endpoint.

## Resumen del protocolo

El protocolo de reporte del GL33CG es el mecanismo por el cual el rastreador envía información de ubicación, estado y sensores a un servidor remoto. En la práctica este protocolo permite que la unidad se identifique, reporte ubicación por GPS o LBS cuando el GPS no está disponible, y transmita telemetría adicional como nivel de batería y temperatura para uso en Plaspy y otras plataformas.

- Proporciona identificación del dispositivo e información de sesión para que Plaspy pueda asociar los datos entrantes con un rastreador específico.
- Entrega datos de ubicación desde fuentes GPS y LBS y permite el reporte sobre conexiones celulares.
- Transporta telemetría como nivel de batería y lecturas de temperatura, útiles para monitoreo de carga.
- Funciona a través del enlace de datos móviles del dispositivo (LTE CAT1 con respaldo 2G) para asegurar cobertura en distintos entornos de transporte.
- Opera junto con la función de señalización RF433 de la unidad, usada para detección local durante búsquedas y que es independiente del reporte al servidor.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en su endpoint compartido y determina automáticamente el manejo apropiado para el protocolo del rastreador. En la mayoría de despliegues comunes usted solo necesita configurar el GL33CG para que reporte a Plaspy y la plataforma mapeará y procesará los mensajes del dispositivo sin requerir selección manual de protocolo.

- Configure el servidor de reporte del dispositivo a d.plaspy.com o a la IP del servidor 54.85.159.138 para enrutar los datos a Plaspy.
- Ajuste el rastreador para usar TCP o UDP apuntando al puerto 8888 según el transporte que soporte el equipo.
- Cuando el rastreador se conecte y envíe sus reportes iniciales, Plaspy lee la llegada y autodetecta el protocolo y el identificador del dispositivo.
- Generalmente no es necesario seleccionar un protocolo dentro de Plaspy si el dispositivo está correctamente dirigido al endpoint de Plaspy y usa el transporte soportado.
- Asegúrese de que el IMEI o el ID de dispositivo configurado esté presente en los reportes iniciales para que Plaspy pueda registrar y asignar la unidad a su cuenta.

## Contexto de transporte y conexión

El contexto de conexión abarca cómo el GL33CG se comunica con Plaspy a través de la red móvil y qué verificar en el dispositivo. El GL33CG puede usar LTE CAT1 con respaldo 2G, y Plaspy acepta tanto conexiones UDP como TCP en un puerto estandarizado para simplificar la configuración.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138 según preferencia y aprovisionamiento.
- Plaspy acepta UDP y TCP en el puerto 8888; elija el transporte acorde a lo que soporte el firmware del dispositivo y las condiciones de la red.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica el aprovisionamiento y las reglas de firewall en el lado del servidor.
- Verifique que la configuración APN, la conectividad de la SIM y la conectividad de red básica sean correctas para que el rastreador pueda establecer sesión con el endpoint de Plaspy.
- Tenga en cuenta el comportamiento de NAT del operador y firewalls que pueden afectar la conectividad entrante y saliente y pruebe el reporte tras la configuración.

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware pueden cambiar qué funciones de reporte están disponibles y cómo se formatean los mensajes; siempre verifique la versión de firmware en su GL33CG.
- Las revisiones de hardware o las variantes regionales del GL33CG pueden implementar comportamientos de reporte o sensores disponibles ligeramente diferentes.
- RF433 es una función de señalización local independiente y no reemplaza el protocolo de reporte celular que usa el dispositivo para llegar a Plaspy.
- La selección de transporte (UDP versus TCP) es una elección de configuración que debe coincidir con la capacidad del firmware del rastreador y el entorno de red.
- El reporte por LBS ofrece un respaldo cuando el GPS es débil, pero su precisión y disponibilidad dependen de la cobertura de torres celulares locales y el soporte del operador.
- Valide la compatibilidad y los pasos de configuración recomendados con la documentación oficial de QuecLink para el GL33CG y las notas de lanzamiento del firmware.

## Por qué es importante entender el protocolo

Conocer el protocolo de comunicaciones ayuda a los operadores a configurar correctamente los dispositivos, interpretar los datos entrantes y resolver problemas de conectividad con mayor eficiencia al usar Plaspy. Estar familiarizado con lo que el rastreador reporta y cómo se conecta reduce el tiempo de incorporación y las necesidades de soporte.

- Asegura que el dispositivo esté apuntando al endpoint correcto de Plaspy para que los datos lleguen sin selección manual de protocolo.
- Facilita el diagnóstico de problemas de conectividad como APN incorrecta, dirección de servidor errónea o desajuste de transporte.
- Aclara qué campos de telemetría (batería, temperatura, LBS) se esperan para que las alertas y reglas en Plaspy se configuren correctamente.
- Apoya la planificación de actualizaciones de firmware y la comprensión de cómo los cambios pueden afectar el comportamiento de reporte.
- Ayuda a confirmar que el uso local de RF433 y el reporte celular funcionan según lo esperado para flujos de trabajo de rastreo combinados.

## Por qué usar Plaspy con este protocolo

Usar el QuecLink GL33CG con Plaspy proporciona una forma consistente y gestionada centralmente de monitorear la ubicación de la carga y la telemetría ambiental a lo largo de flotas o envíos. La detección automática de protocolo de Plaspy y el uso de un puerto compartido único reducen la complejidad de configuración, permitiendo que las organizaciones se centren en reglas operativas, alertas y visibilidad en lugar de seleccionar protocolos por cada dispositivo.

Para obtener más información sobre Plaspy y cómo la plataforma maneja los datos de los dispositivos, visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, notas de firmware y revisiones de hardware consulte la documentación oficial de QuecLink en https://www.queclink.com/ ya que el soporte de protocolo y el comportamiento del dispositivo pueden cambiar con el tiempo.
