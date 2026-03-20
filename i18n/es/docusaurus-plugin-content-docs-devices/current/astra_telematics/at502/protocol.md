---
slug: /astra_telematics/at502/protocol
id: at502-protocol
sidebar_label: Protocol
title: Astra Telematics - AT502 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública para integrar el Astra Telematics AT502 con Plaspy para reporte GPS y telemetría de activos
keywords:
  - protocolo Astra Telematics AT502
  - protocolo GPS Astra Telematics AT502
  - compatibilidad AT502 Plaspy
  - protocolo de comunicación AT502
  - protocolo rastreador Astra AT502
  - protocolo de rastreo AT502
  - integración de telemetría AT502
  - compatibilidad AT502 LTE-M NB-IoT
  - protocolo AT502 rastreador de activos
  - integración AT502 Plaspy
---

# Astra Telematics - Protocolo AT502

Esta página le ofrece el contexto público del protocolo para usar el Astra Telematics AT502 con Plaspy. Le explicamos cómo el AT502, un rastreador GNSS compacto alimentado por batería con LTE‑M, NB‑IoT, conmutación a GSM y configuración por BLE, transmite ubicaciones y telemetría a la plataforma Plaspy en términos generales útiles para la configuración y planificación.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta a la plataforma. El comportamiento exacto del protocolo en el AT502 puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en el contexto de conexión e integración más que en tramas específicas de firmware o detalles privados del parser.

## Resumen del protocolo

El protocolo de reporte del rastreador define cómo el AT502 se autentica, se identifica y envía posiciones GNSS y telemetría del dispositivo a la nube. Con Plaspy, la función pública del protocolo es proporcionar fijaciones de ubicación, eventos de movimiento y estado de batería utilizables para que la plataforma ofrezca rastreo en tiempo real, histórico y alertas.

- Permite que los reportes de posición GNSS y la telemetría lleguen desde el AT502 a Plaspy para su mapeo y procesamiento de eventos.
- Transmite la identidad del dispositivo y métricas básicas de estado como nivel de batería y señal celular para gestionar mantenimiento y alertas.
- Soporta reportes periódicos y patrones de activación por movimiento adecuados para el rastreo de activos de larga duración donde la conservación de energía es crítica.
- Emplea la conexión celular y, de forma opcional, BLE para configuración en sitio, mientras que el canal principal de reporte va hacia Plaspy.
- Permite a Plaspy interpretar los datos entrantes como ubicación, eventos de movimiento y estado del dispositivo sin que el usuario deba seleccionar manualmente el protocolo.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones de dispositivos en un endpoint público compartido y realiza la selección del protocolo de forma automática, por lo que la mayoría de las implementaciones no requieren elegir el protocolo explícitamente dentro de la interfaz de Plaspy. Normalmente, bastará con configurar el dispositivo para que apunte al endpoint de Plaspy para que la detección e ingestión sean automáticas.

- El dominio del servidor de Plaspy es d.plaspy.com, al que los dispositivos pueden enviar sus reportes.
- La IP del servidor de Plaspy es 54.85.159.138 y está disponible como endpoint alternativo en la configuración de los dispositivos.
- El puerto es 8888 y Plaspy utiliza ese único puerto para todos los dispositivos soportados.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según capacidades del equipo y preferencia del operador.
- Cuando el AT502 reporta al endpoint de Plaspy, Plaspy detecta automáticamente el protocolo del rastreador y asocia la telemetría entrante con el registro de dispositivo correspondiente.

## Transporte y contexto de conexión

Las opciones de conexión y transporte son un aspecto importante al integrar el AT502. El dispositivo soporta modos celulares de bajo consumo modernos y puede usar UDP o TCP para enviar reportes a Plaspy, mientras que BLE sirve para la configuración local cuando está disponible.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 para enviar reportes a Plaspy.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a la IP 54.85.159.138 al configurar el destino de reporte.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica el aprovisionamiento masivo y las reglas de firewall para flotas.
- Las opciones de bearer celular incluyen LTE‑M, NB‑IoT y conmutación a GSM, lo que impacta cómo y cuándo se transmiten los datos desde el dispositivo.
- BLE se usa para configuración local y diagnóstico, pero no es el canal principal para el reporte a la nube.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la cadencia de reportes del AT502, los campos de telemetría disponibles y el comportamiento de conexión; siempre verifique las notas de lanzamiento del firmware al solucionar problemas.
- Las variantes de hardware o SKUs regionales pueden modificar las bandas celulares soportadas o el comportamiento de conmutación entre radios, lo que afecta la conectividad con las redes móviles.
- La selección de transporte entre UDP y TCP puede verse influida por la confiabilidad de la red, restricciones del operador y los requisitos de confirmación de entrega.
- Los perfiles de configuración proporcionados por Astra Telematics pueden preconfigurar el destino de reporte y el transporte; confirme esos ajustes antes de desplegar.
- La detección automática de Plaspy reduce la necesidad de seleccionar el protocolo manualmente, pero sigue siendo necesario configurar correctamente el destino de reporte y los parámetros APN en el dispositivo.
- Para funciones que no están presentes en el AT502, como detección de encendido de motor o datos CAN, combine el rastreador con otros dispositivos del vehículo si esas señales son necesarias en su despliegue.

## Por qué es importante comprender el protocolo

Comprender el protocolo de comunicación ayuda a planificar el despliegue, resolver problemas de conectividad y asegurar que el AT502 entregue la telemetría esperada a Plaspy durante la vida útil del dispositivo.

- Asegura la correcta configuración de redes y firewalls para que los dispositivos puedan alcanzar d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Ayuda a elegir entre UDP y TCP según las características de la red y los objetivos de fiabilidad en los reportes.
- Mejora la resolución de problemas al enfocar la investigación en firmware, APN, aprovisionamiento de SIM y selección de transporte en lugar de adivinar detalles internos del parser.
- Orienta las expectativas sobre la duración de la batería al alinear intervalos de reporte y comportamiento de activación por movimiento con las políticas de gestión de activos.
- Informa las decisiones sobre actualizaciones de firmware y variantes de hardware que podrían cambiar el comportamiento del protocolo o el contenido de la telemetría.

## Por qué usar Plaspy con este protocolo

Usar el AT502 con Plaspy ofrece a las organizaciones un camino sencillo hacia el rastreo de activos a largo plazo y de bajo mantenimiento. Las capacidades GNSS multiconstelación del dispositivo, sus modos celulares de bajo consumo y la configuración por BLE lo hacen adecuado para instalaciones discretas donde la autonomía es clave, mientras que Plaspy procesa los reportes del dispositivo y los convierte en datos accionables de ubicación, estado y alertas.

Para saber más sobre cómo Plaspy trabaja con dispositivos como el AT502 visite https://www.plaspy.com. Para los detalles más recientes sobre el protocolo específico del dispositivo, el comportamiento del firmware y notas de implementación del fabricante, verifique la información en el sitio de Astra Telematics https://astratelematics.com/ ya que la documentación del proveedor y las actualizaciones de firmware pueden cambiar con el tiempo.
