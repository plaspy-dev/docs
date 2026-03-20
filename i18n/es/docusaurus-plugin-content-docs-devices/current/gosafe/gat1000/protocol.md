---
slug: /gosafe/gat1000/protocol
id: gat1000-protocol
sidebar_label: Protocol
title: Gosafe - GAT1000 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador Gosafe GAT1000 y cómo comunica con Plaspy para seguimiento en tiempo real
keywords:
  - Protocolo Gosafe GAT1000
  - Protocolo GPS Gosafe GAT1000
  - Compatibilidad GAT1000 Plaspy
  - Protocolo de rastreo Gosafe
  - Protocolo de comunicación GAT1000
  - Protocolo del rastreador de activos Gosafe
  - Rastreador GPS GAT1000
  - Protocolo de dispositivo Plaspy
  - Rastreo de flotas Gosafe
  - Protocolo de telemetría GAT1000
---

# Gosafe - Protocolo GAT1000

Esta página ofrece una visión pública y no sensible del contexto del protocolo de comunicación del Gosafe GAT1000 cuando se utiliza con Plaspy. Explica cómo el dispositivo reporta ubicaciones y telemetría a Plaspy y qué aspectos del protocolo del rastreador son relevantes para la integración, el monitoreo y la resolución de problemas. El foco está en el comportamiento observable de la conexión y en la guía práctica de configuración más que en detalles de bajo nivel o información propietaria.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un dispositivo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware, la configuración del operador y la implementación del fabricante, por lo que esta página enfatiza el contexto general del protocolo y los pasos recomendados de validación en lugar de formatos binarios específicos del dispositivo.

## Visión general del protocolo

El protocolo de reporte GAT1000 es el mecanismo que permite al dispositivo identificarse ante la plataforma Plaspy y enviar posiciones GNSS, eventos de E/S, telemetría de sensores y actualizaciones de estado. En la práctica esto significa que el rastreador abre una ruta de red hacia Plaspy y transmite mensajes estructurados de ubicación y telemetría que Plaspy procesa para mapas, reglas e informes.

- Permite la transmisión de fijaciones de posición GNSS y marcas de tiempo a Plaspy para seguimiento en tiempo real e histórico.
- Transporta telemetría del dispositivo, como estado de ignición, lecturas analógicas, entradas digitales y estado de batería, para que Plaspy genere alertas e informes.
- Soporta el reporte de eventos de entradas y datos de sensores BLE para que Plaspy pueda reaccionar ante puertas abiertas, temperaturas o condiciones de alarma.
- Proporciona el canal para flujos de trabajo de configuración remota y control cuando el firmware del fabricante expone esas capacidades a la plataforma.
- Abstracta los detalles de transporte para que Plaspy procese los mensajes entrantes de manera consistente entre dispositivos y variantes de firmware.

## Cómo Plaspy detecta el protocolo

Plaspy centraliza las conexiones entrantes de dispositivos en un endpoint y puerto compartidos y aplica detección automática de protocolo para identificar el tipo de rastreador y parsear los mensajes. En la mayoría de los despliegues no es necesario seleccionar manualmente un protocolo dentro de Plaspy si el dispositivo está configurado correctamente para reportar al endpoint de Plaspy.

- Los dispositivos deben apuntar su dirección de servidor a d.plaspy.com o a la IP del servidor Plaspy 54.85.159.138.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto para que la plataforma pueda escuchar de forma consistente y detectar variantes de protocolo automáticamente.
- Plaspy aceptará sesiones UDP y TCP de los dispositivos según cómo esté configurado el rastreador y su firmware.
- Es necesario tener la APN y la configuración del operador SIM correctas en el dispositivo para que pueda establecer la conexión de datos a Plaspy.
- Si un dispositivo no parece conectarse, verifique la configuración de reporte del dispositivo, la conectividad del operador y que el rastreador esté configurado para usar el endpoint de Plaspy.

## Transporte y contexto de conexión

El GAT1000 soporta opciones comunes de transporte celular y puede configurarse para enviar reportes por UDP o TCP a Plaspy, sujeto al firmware y la configuración del equipo. Comprender el contexto de transporte ayuda a garantizar la entrega fiable de mensajes y el enrutamiento correcto hacia el endpoint de ingestión de Plaspy.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y la configuración seleccionada.
- Los dispositivos pueden apuntar al dominio de Plaspy d.plaspy.com o a la dirección numérica 54.85.159.138 para enrutamiento directo.
- Plaspy utiliza el puerto 8888 para todos los dispositivos soportados, por lo que el mismo puerto se emplea entre modelos para simplicidad y fiabilidad.
- Elementos de red como NAT del operador, firewalls y restricciones de APN pueden influir en si UDP o TCP es el transporte preferido.
- Para dispositivos que soportan reportes por SMS como fallback, confirme con el fabricante cómo se enruta el SMS hacia la plataforma si es necesario.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware pueden cambiar las cargas útiles de los mensajes, los comportamientos de eventos y los campos de telemetría disponibles entre revisiones del dispositivo.
- Revisiones de hardware o módulos accesorios opcionales pueden modificar el conjunto de E/S y los datos de sensores reportados a Plaspy.
- Algunos fabricantes exponen modos de transporte opcionales o formatos de dirección de servidor que deben configurarse correctamente para alcanzar el endpoint de Plaspy.
- Las configuraciones de operador y SIM, incluidas las APN, pueden afectar si un dispositivo puede establecer sesiones TCP o UDP de forma fiable.
- Valide la configuración del dispositivo y las notas de la versión de firmware frente a la documentación del fabricante al planear despliegues.
- En caso de duda, confirme el comportamiento de reporte del dispositivo monitorizando los registros de conexión del servidor Plaspy e indicadores de estado del equipo.

## Por qué es importante comprender el protocolo

Tener un entendimiento práctico del protocolo de comunicación del GAT1000 y de su contexto de transporte reduce la fricción en la integración y acelera la resolución de problemas cuando los dispositivos no aparecen en Plaspy. Saber qué se espera que reporte el dispositivo y cómo llega a Plaspy facilita aislar problemas de red, configuración y firmware.

- Permite identificar más rápidamente errores de configuración, como dirección de servidor incorrecta o selección de transporte equivocada.
- Ayuda a determinar si los problemas de conectividad provienen del operador, la APN o restricciones de firewall frente al comportamiento del firmware del equipo.
- Informa planes de prueba para validar campos de telemetría como niveles de combustible, detección de ignición e inputs de sensores BLE.
- Facilita la planificación de ciclo de vida ante actualizaciones de firmware y despliegues de hardware para mantener reportes consistentes.
- Mejora la respuesta ante incidentes al clarificar qué eventos y telemetría debe enviar el dispositivo bajo distintas condiciones.

## Por qué usar Plaspy con este protocolo

Usar el GAT1000 con Plaspy ofrece a las organizaciones una forma escalable de ingerir datos GNSS y telemetría robusta desde activos resistentes, semirremolques y maquinaria pesada. Plaspy traduce los reportes entrantes en inteligencia de ubicación, alertas configurables e informes de flota que soportan la visibilidad operativa, flujos de trabajo anti robo y mantenimiento preventivo.

Para planificar y verificar un despliegue, apunte el GAT1000 a la dirección del servidor Plaspy y asegúrese de que el dispositivo use UDP o TCP en el puerto 8888 para alcanzar d.plaspy.com o 54.85.159.138. Plaspy detecta automáticamente el protocolo del rastreador y aplica el parseo y el manejo de datos adecuados para que los equipos puedan concentrarse en reglas, alertas y análisis en lugar de en detalles de conexión de bajo nivel. Para conocer más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com y verifique el comportamiento más reciente del protocolo y del firmware del dispositivo con el fabricante en https://gosafesystem.com/. El soporte de protocolo y la implementación de firmware pueden cambiar con el tiempo, por lo que consultar la documentación oficial del fabricante ayuda a garantizar una integración precisa y vigente.
