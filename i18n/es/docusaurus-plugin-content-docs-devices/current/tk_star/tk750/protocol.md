---
slug: /tk_star/tk750/protocol
id: tk750-protocol
sidebar_label: Protocol
title: TK-Star - TK750 Protocol
sidebar_class_name: menu_item_tracker
description: Notas públicas del protocolo del TK-Star TK750 y su compatibilidad con Plaspy
keywords:
  - protocolo TK-Star TK750
  - protocolo GPS TK750
  - rastreador GPS TK-Star
  - compatibilidad TK750 Plaspy
  - comunicación TK-Star TK750
  - protocolo de rastreo TK750
  - integración rastreador TK-Star
  - protocolo rastreador GPS Plaspy
  - rastreo vehicular TK750
  - gestión de flotas TK750
---

# TK-Star - Protocolo TK750

Esta página resume el contexto público del protocolo para usar el rastreador TK-Star TK750 con Plaspy. Explica, en términos generales, cómo se comunica el dispositivo y cómo Plaspy acepta y procesa los datos del rastreador para seguimiento en vivo, alertas e historial de rutas. La descripción se centra en la conectividad y en aspectos del protocolo que ayudan a los operadores a integrar el TK750 en una implementación de Plaspy.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo apunta al endpoint de Plaspy. Los dispositivos configurados para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888 pueden usar UDP o TCP según el soporte y la configuración del equipo. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que conviene consultar la documentación del fabricante para detalles específicos de cada unidad.

## Descripción general del protocolo

El rastreador TK750 utiliza un protocolo de comunicación para enviar posiciones GNSS, diagnósticos de estado y eventos de alarma a un servidor como Plaspy. El protocolo regula cómo el equipo se identifica, reporta telemetría y notifica eventos para que Plaspy pueda mostrar datos en tiempo real y activar alarmas o comandos configurados.

- Permite transmisiones periódicas y por eventos de ubicación y telemetría desde el TK750 hacia un servidor backend.
- Incluye información de identificación y estado para que Plaspy asocie los informes con el dispositivo correcto.
- Transporta indicadores de alarma y eventos como vibración, geocerca, exceso de velocidad e inmovilización para un manejo oportuno.
- Soporta actualizaciones en tiempo real y reconstrucción histórica de rutas cuando el servidor guarda los mensajes recibidos.
- Opera sobre transporte de red estándar, de modo que el rastreador puede comunicarse con el endpoint compartido de Plaspy.

## Detección automática del protocolo en Plaspy

Plaspy recibe conexiones entrantes en un endpoint centralizado y detecta automáticamente el protocolo del rastreador según los datos entrantes y el comportamiento del dispositivo. Cuando un TK750 está configurado para reportar al servidor de Plaspy, por lo general no se requiere seleccionar el protocolo manualmente dentro de la plataforma, siempre que el equipo envíe datos al endpoint correcto de Plaspy.

- Plaspy acepta conexiones en el dominio d.plaspy.com y en la IP del servidor 54.85.159.138.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto de servidor, que es el 8888.
- Plaspy puede aceptar reportes desde dispositivos que usen UDP o TCP en el puerto 8888, según la configuración del rastreador.
- Cuando está correctamente configurado, usted generalmente solo necesita apuntar el dispositivo al servidor de Plaspy y proporcionar el identificador del equipo a la cuenta de Plaspy.
- La detección automática del protocolo reduce la necesidad de mapear manualmente cada tipo de dispositivo en muchas configuraciones estándar.

## Contexto de transporte y conexión

La configuración de la conexión del TK750 se maneja en la capa de transporte de red y determina cómo el dispositivo llega al servidor de Plaspy. El TK750 soporta varias tecnologías de acceso celular y puede configurarse para reportar por UDP o TCP al puerto compartido de Plaspy. Apuntar el equipo a la dirección de Plaspy es un primer paso habitual para la integración.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o directamente a la IP 54.85.159.138.
- El puerto de transporte usado por Plaspy para todos los dispositivos soportados es el 8888.
- Las unidades TK750 pueden usar UDP o TCP en el puerto 8888 según el firmware y las opciones de configuración.
- Usar la dirección de servidor y el protocolo de transporte correctos es esencial para que el dispositivo alcance Plaspy y para que la detección automática funcione.
- Factores de red como NAT del operador, ajustes de APN y ciclos de energía del dispositivo pueden afectar la conectividad y deben validarse durante la puesta en marcha.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el comportamiento exacto de reporte del TK750 e influir en la compatibilidad con cualquier plataforma en la nube.
- Las variantes de hardware y las SKUs regionales pueden incluir soporte radio diferente o conjuntos de funciones que afectan las opciones de transporte disponibles.
- Los comandos de configuración del fabricante y los ajustes SMS por defecto pueden influir en cómo se apunta una unidad al servidor de Plaspy.
- La elección entre UDP y TCP puede depender de cobertura, latencia y de las capacidades del firmware del dispositivo.
- El puerto compartido de Plaspy y la detección automática del protocolo simplifican la integración, pero usted debe confirmar que el equipo esté configurado para enviar a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Valide el IMEI del dispositivo y los intervalos de reporte al añadir nuevas unidades para evitar flujos de datos duplicados o faltantes.
- Siempre contraste la compatibilidad con la documentación del fabricante para notas específicas por modelo y firmware.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el TK750 ayuda a instaladores y gerentes de flota a configurar los dispositivos de forma fiable, resolver problemas de conectividad y mantener un rendimiento de seguimiento consistente a largo plazo en Plaspy. Un conocimiento claro del transporte y del comportamiento de reporte reduce el tiempo de configuración y mejora la respuesta ante incidentes.

- Asegura que los dispositivos apunten al endpoint correcto de Plaspy y usen el transporte compatible en el puerto 8888.
- Facilita la identificación de problemas de conectividad relacionados con APN, restricciones del operador o ajustes de servidor incorrectos.
- Mejora la configuración de alarmas al correlacionar los reportes de eventos del dispositivo con las reglas y notificaciones de la plataforma.
- Favorece la retención predecible de datos históricos y la reproducción de rutas en el servidor de Plaspy.
- Ayuda a planificar actualizaciones de firmware y despliegues de hardware anticipando variaciones del protocolo.

## Ventajas de usar Plaspy con este protocolo

Usar el TK750 con Plaspy ofrece una vía operativa eficiente para seguimiento en vivo, alertas antirrobo y supervisión de flotas. La capacidad GNSS multiconstelación del dispositivo con asistencia LBS y Wi‑Fi, junto con el sensor de vibración y las funciones de inmovilización, encajan bien con los flujos de trabajo de Plaspy para monitoreo en tiempo real y respuesta a incidentes. Organizaciones que operan motocicletas, vehículos de alquiler, camiones ligeros o flotas mixtas pueden beneficiarse de la visibilidad centralizada y de las alertas configurables.

Para conocer más sobre Plaspy y cómo se integra con dispositivos como el TK750 visite https://www.plaspy.com. Para obtener detalles de protocolo más recientes, notas de firmware y orientación específica del dispositivo, verifique la información con el fabricante en https://www.tk-star.com/ ya que el soporte del protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
