---
slug: /castel/idd_213n/protocol
id: idd_213n-protocol
sidebar_label: Protocol
title: Castel - IDD-213N Protocol
sidebar_class_name: menu_item_tracker
description: Notas públicas del protocolo para integrar el Castel IDD-213N con Plaspy, incluyendo transporte y detección
keywords:
  - Protocolo Castel IDD-213N
  - Protocolo GPS Castel IDD-213N
  - Protocolo de rastreo Castel IDD-213N
  - Compatibilidad IDD-213N Plaspy
  - Protocolo rastreador de vehículos Castel
  - Protocolo rastreo OBD II
  - Comunicación rastreador GPS Plaspy
  - Gestión de flotas Castel IDD-213N
  - Protocolo diagnóstico Castel IDD-213N
  - Diagnóstico remoto IDD-213N
---

# Castel - Protocolo IDD-213N

Esta página describe el contexto público del protocolo para usar el rastreador Castel IDD-213N con Plaspy. Se enfoca en cómo el equipo se comunica con un servicio backend, qué papel tiene esa comunicación para el rastreo y el diagnóstico remoto, y qué configuraciones de conexión de alto nivel se emplean para integrar el IDD-213N en Plaspy. El objetivo es ofrecer información útil y no sensible que facilite la configuración y solución de problemas, recomendando siempre contrastar con la documentación del fabricante.

El Castel IDD-213N es una unidad de diagnóstico a bordo con capacidad OBD que lee datos del ECU y envía telemetría de ubicación y diagnóstico a un servidor backend. Plaspy utiliza ajustes de conexión compartidos para dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando la unidad reporta correctamente al endpoint de Plaspy. Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 y Plaspy acepta conexiones en el dominio d.plaspy.com y en la IP 54.85.159.138. Tenga en cuenta que el comportamiento exacto del protocolo y el contenido de los mensajes pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Visión general del protocolo

A alto nivel, el protocolo de comunicación del rastreador es el conjunto de convenciones que el IDD-213N utiliza para reportar posición, datos de diagnóstico del vehículo, alarmas y estado a un servidor. El protocolo permite al equipo identificarse ante un endpoint backend, entregar telemetría periódica y por eventos, y recibir comandos limitados o acuses de recibo cuando el dispositivo y el firmware lo soportan.

- Permite reportes regulares de ubicación GPS y telemetría de diagnóstico del vehículo como velocidad, RPM y lecturas relacionadas con DTC de forma estructurada.
- Transporta notificaciones de eventos para alarmas y monitoreo de conducta al conducir, de modo que los sistemas backend puedan generar alertas o acciones.
- Permite que el dispositivo presente un identificador e información de estado para que el backend pueda asociar los datos entrantes con el vehículo o activo correcto.
- Soporta tanto reportes periódicos como mensajes por eventos para equilibrar la frescura de los datos con el uso de la red.
- Constituye la base para flujos de trabajo de diagnóstico remoto y gestión de flotas cuando se combina con estándares de bus vehicular como OBD II y J1939.

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para aceptar reportes entrantes de muchos modelos comunes de rastreadores usando un endpoint y puerto de servidor consistentes. Cuando un Castel IDD-213N se configura para reportar a Plaspy, la plataforma detecta automáticamente el protocolo del rastreador y mapea los mensajes entrantes al parser y pipeline de procesamiento adecuados.

- Plaspy escucha en un único puerto para todos los dispositivos soportados, por lo que no necesita múltiples puertos por tipo de equipo.
- El endpoint de Plaspy para el reporte de dispositivos es d.plaspy.com con una opción de conexión alternativa a la IP 54.85.159.138.
- Los dispositivos pueden conectarse por UDP o TCP al puerto 8888 según la configuración del equipo y los requisitos de la red.
- Si el IDD-213N apunta al endpoint de Plaspy y reporta correctamente, normalmente no es necesaria la selección manual de protocolo dentro de Plaspy.
- La detección automática ayuda a simplificar el onboarding, pero sigue siendo importante una configuración precisa del dispositivo en el lado del rastreador.

## Transporte y contexto de conexión

El IDD-213N puede configurarse para enviar su telemetría a un backend por nombre de dominio o dirección IP. Para la integración con Plaspy, los detalles de conexión esenciales están estandarizados para que el dispositivo alcance de forma fiable el endpoint de ingestión de Plaspy.

- Plaspy acepta conexiones en el dominio d.plaspy.com y en la dirección IP 54.85.159.138.
- El dispositivo puede configurarse para usar UDP o TCP para el reporte, según el soporte del equipo y el entorno de red.
- Plaspy usa el puerto 8888 para todos los dispositivos soportados, por lo que la misma configuración de puerto aplica entre modelos.
- Elija UDP para reportes con menor sobrecarga cuando la fiabilidad y latencia de la red lo permitan, o TCP cuando se prefiera un transporte orientado a conexión por parte del dispositivo o la red.
- Asegúrese de que cualquier infraestructura de red intermedia permita conexiones salientes al endpoint de Plaspy en el puerto 8888.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar qué mensajes emite el IDD-213N, qué campos están presentes y cómo se reportan los datos de diagnóstico.
- Las revisiones de hardware y las interfaces opcionales pueden afectar la telemetría disponible, como entradas adicionales, cobertura de bus CAN o tramas de diagnóstico extendidas.
- Las opciones de configuración del fabricante pueden permitir alternar entre reporte por UDP o TCP, o modificar intervalos de reporte y filtros de eventos.
- El entorno de red y el soporte del operador para 3G influyen en la conectividad; el IDD-213N soporta las bandas 3G relevantes para su región, pero la cobertura puede variar.
- Verifique siempre que el dispositivo esté configurado para apuntar a d.plaspy.com o a 54.85.159.138 y que use el puerto 8888 para la integración con Plaspy.
- Contraste la compatibilidad con la documentación oficial del dispositivo Castel al planificar despliegues a gran escala.

## Por qué es importante entender el protocolo

Conocer cómo se comunica el IDD-213N ayuda a garantizar la recolección fiable de datos, diagnósticos precisos y un comportamiento predecible en un entorno de flota. La comprensión del protocolo de comunicación y del contexto de transporte acelera la resolución de problemas y reduce la fricción de integración con Plaspy.

- Ayuda a confirmar que el dispositivo apunta al endpoint y puerto correctos de Plaspy para que la telemetría llegue de forma confiable.
- Facilita la interpretación de datos de diagnóstico y ubicación cuando campos o el comportamiento de reporte cambian tras una actualización de firmware.
- Ayuda a elegir el modo de transporte y el intervalo de reporte adecuados según las limitaciones de red y operativas.
- Favorece una resolución más rápida de problemas de conectividad al acotar si los fallos son de red, configuración del dispositivo o firmware.
- Permite a los planificadores alinear las capacidades del dispositivo con los requisitos de reporte y alerta de la flota.

## Por qué usar Plaspy con este protocolo

Usar el Castel IDD-213N con Plaspy ofrece una vía práctica para combinar datos de diagnóstico del vehículo y rastreo GPS en un flujo de gestión de flotas unificado. La compatibilidad OBD y de bus del IDD-213N, junto con el punto de ingestión unificado de Plaspy, simplifica la recolección de telemetría en flotas mixtas y permite monitoreo en tiempo real, gestión de alarmas y diagnóstico remoto básico.

Si desea saber más sobre cómo Plaspy maneja el reporte de dispositivos, las opciones de configuración y las funciones de flota visite https://www.plaspy.com. Para obtener los detalles más actuales específicos del protocolo del dispositivo, notas de firmware y guía de implementación, verifique la información con el fabricante en http://www.castelecom.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
