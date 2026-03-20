---
slug: /gotop/d05/protocol
id: d05-protocol
sidebar_label: Protocol
title: GOTOP - D05 Protocol
sidebar_class_name: menu_item_tracker
description: Visión pública del protocolo GOTOP D05 y su integración con Plaspy para conexión y reporte de ubicación
keywords:
  - protocolo GOTOP D05
  - protocolo GPS GOTOP D05
  - protocolo de rastreo GOTOP D05
  - comunicación GOTOP D05
  - compatibilidad GOTOP D05 Plaspy
  - protocolo rastreador GOTOP
  - protocolo de dispositivo Plaspy
  - rastreo de flotas GOTOP D05
  - seguimiento de activos D05
  - guía de integración D05
---

# GOTOP - D05 Protocolo

Esta página ofrece una visión pública del protocolo del GOTOP D05 y de cómo se comunica con Plaspy. Se centra en el contexto de conexión y reporte a alto nivel necesario para comprender cómo el rastreador envía datos de ubicación y eventos a Plaspy, sin exponer detalles privados de implementación.

El D05 es un rastreador 4G compatible con Plaspy, diseñado para largos periodos en espera y seguimiento continuo. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto puede variar según el firmware, la revisión de hardware y la implementación del fabricante. Revise siempre la documentación del fabricante para detalles específicos del firmware.

## Descripción general del protocolo

El D05 emplea su módem celular y receptor GNSS a bordo para generar telemetría e informes de eventos que se transmiten a un servidor remoto. El protocolo intercambiado entre el dispositivo y Plaspy define cómo el rastreador se identifica, cuándo informa posición o alarmas y qué campos de telemetría incluye cada reporte. Esta página mantiene la discusión a un nivel práctico para que usted pueda planificar la integración y la resolución de problemas con Plaspy.

- El protocolo determina cómo el rastreador comunica su identificador de dispositivo y los detalles de sesión al servidor para que la telemetría se atribuya correctamente.
- Las reglas de reporte en el dispositivo controlan cuándo se envían las fijaciones de posición, alarmas de movimiento y eventos de sensores a Plaspy.
- La transmisión de datos cifrados desde el D05 ayuda a proteger la telemetría en tránsito y permite que Plaspy ingiera y muestre datos en tiempo real.
- El protocolo mapea las mediciones crudas de GNSS y sensores a los campos que Plaspy utiliza para mapas, alertas y reproducción histórica.
- El firmware y la configuración influyen en qué eventos y datos opcionales (por ejemplo, asistencia por Wi‑Fi o telemetría extendida) se incluyen en los informes.

## Cómo Plaspy detecta el protocolo

Plaspy recibe los informes de los dispositivos en un endpoint y puerto compartidos y usa detección automática para identificar el protocolo de reporte. En la mayoría de implementaciones no necesita seleccionar manualmente un protocolo dentro de Plaspy si el D05 está configurado para enviar datos correctamente al endpoint de Plaspy. Esto simplifica la incorporación de flotas mixtas y instalaciones con múltiples modelos.

- El endpoint público de Plaspy es d.plaspy.com, que resuelve a 54.85.159.138 para el enrutamiento de red.
- Plaspy escucha en el puerto 8888 y todos los dispositivos soportados por Plaspy usan ese mismo puerto para reportes.
- El D05 puede configurarse para transmitir a d.plaspy.com o directamente a 54.85.159.138 según la configuración de red y preferencias.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta y comienza a reportar.
- Cuando un D05 está correctamente configurado para reportar al endpoint de Plaspy, normalmente no es necesario seleccionar el protocolo de forma manual en la plataforma.

## Transporte y contexto de conexión

El transporte de conexión y el direccionamiento forman parte de los detalles prácticos de integración. El D05 soporta reportes por datos móviles sobre LTE con retroceso a 2G y puede configurarse para usar UDP o TCP según el soporte del equipo y las opciones de configuración. Entender las opciones de transporte ayuda a asegurar una entrega confiable y ajustes correctos en los firewalls de red.

- El D05 puede configurarse para enviar telemetría usando UDP o TCP en el puerto 8888.
- Plaspy acepta conexiones en el puerto 8888 para todos los dispositivos soportados, por lo que las reglas de firewall solo deben permitir ese puerto.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la dirección IP 54.85.159.138 al configurar el destino del servidor.
- TCP puede ser preferible para la entrega fiable de cargas de telemetría más grandes, mientras que UDP es común en reportes periódicos compactos, según los ajustes del dispositivo.
- Asegúrese de que el plan de la SIM permita tráfico de datos saliente y que los ajustes de APN en el D05 sean correctos para su proveedor celular.

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware entre unidades D05 pueden cambiar qué campos se reportan y con qué frecuencia se emiten los informes.
- Revisión de hardware o funciones opcionales como la asistencia por Wi‑Fi pueden afectar el tiempo hasta la primera fijación y la disponibilidad de telemetría adicional.
- La configuración por parte del fabricante o compilaciones personalizadas pueden alterar la selección predeterminada de transporte entre UDP y TCP.
- Confirme que el D05 esté configurado para reportar a d.plaspy.com o a 54.85.159.138 y que use el puerto 8888 si dispone de herramientas de aprovisionamiento personalizadas.
- Valide los mapeos de alarmas y sensores (alarma de movimiento, alarma de sensor de luz) frente a la documentación actual del fabricante al habilitar alertas basadas en eventos.
- Al integrar a gran escala, pilote un pequeño conjunto de dispositivos primero para confirmar el comportamiento en las revisiones de firmware previstas.

## Por qué es importante entender el protocolo

Comprender de manera práctica el protocolo de comunicación del D05 ayuda a agilizar la configuración, reduce el tiempo de resolución de problemas y mejora la confiabilidad a largo plazo en Plaspy. Saber qué transportes y comportamientos de reporte esperar facilita diagnosticar problemas de conectividad, configuración y mapeo de datos.

- Incorporación más rápida al poder confirmar que el D05 apunta a d.plaspy.com o 54.85.159.138 y usa el puerto 8888.
- Resolución de problemas más ágil cuando la elección de transporte (UDP vs TCP) o las diferencias de firmware afectan los reportes.
- Mejor afinación de alertas al comprender cómo se reportan a Plaspy los eventos de movimiento y de sensores de luz.
- Decisiones informadas sobre batería e intervalos de reporte para equilibrar visibilidad en tiempo real con rendimiento de ultra larga duración en espera.
- Mejora en la planificación de red al asegurar que el operador y las reglas de firewall permitan conexiones salientes al endpoint de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el GOTOP D05 con Plaspy ofrece una solución práctica para organizaciones que necesitan visibilidad persistente, notificaciones de eventos y reproducción histórica en flotas y activos de alto valor. La larga duración de batería del D05 y su sólido desempeño GNSS lo hacen apto para implementaciones de largo plazo con mantenimiento infrecuente, y Plaspy aporta mapas centralizados, alertas e informes para convertir la telemetría del dispositivo en conocimientos operativos.

Si desea saber más sobre Plaspy y cómo maneja la integración de dispositivos, visite https://www.plaspy.com. Para los detalles más recientes sobre protocolos específicos del dispositivo, avisos de firmware y orientación del fabricante para el GOTOP D05, verifique la información en el sitio oficial de GOTOP https://www.gotop.cc/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
