---
slug: /totemtech/at04/protocol
id: at04-protocol
sidebar_label: Protocol
title: Totemtech - AT04 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del tracker Totemtech AT04 y su comunicación con Plaspy para seguimiento y telemetría confiables
keywords:
  - Protocolo Totemtech AT04
  - Protocolo GPS Totemtech AT04
  - Protocolo AT04 Plaspy
  - Protocolo de comunicación Totemtech AT04
  - Protocolo de rastreo AT04
  - Compatibilidad rastreador GPS Totemtech
  - Rastreadores compatibles con Plaspy
  - Rastreo de vehículos AT04
  - Gestión de flotas AT04
  - Protocolo de telemetría AT04
---

# Totemtech - Protocolo AT04

Esta página describe el contexto público del protocolo para usar el tracker Totemtech AT04 con la plataforma Plaspy. Se enfoca en cómo el dispositivo transmite posición y telemetría a Plaspy sin exponer detalles propietarios de los paquetes, y explica los ajustes de conexión y consideraciones operativas necesarios para una integración exitosa.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo cuando el AT04 se configura para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que es importante tener presente la versión del firmware y la documentación del fabricante durante la instalación y solución de problemas.

## Resumen del protocolo

El protocolo de comunicación del AT04 regula cómo el dispositivo se identifica, reporta posiciones GNSS y envía eventos de sensores y entradas/salidas a un servidor de rastreo. En la práctica, el protocolo permite reportes continuos de ubicación, alarmas basadas en eventos y telemetría periódica necesaria para mapas y gestión de flotas.

- Permite al AT04 transmitir fijaciones de posición GNSS y datos de calidad de satélites al servidor para mapeo en tiempo real.
- Transporta el estado de entradas y salidas digitales, eventos del sensor de movimiento y lecturas analógicas como nivel de combustible hacia Plaspy.
- Soporta mensajes basados en eventos para alarmas, violaciones de geocercas, detección de manipulación y cambios en el estado de ignición, de modo que Plaspy pueda generar alertas y acciones.
- Habilita reglas configurables de reporte para que el equipo envíe datos por tiempo, distancia, ángulo, estado del motor o inmediatamente ante una alarma.
- Proporciona la información de identidad y estado que Plaspy necesita para correlacionar los datos entrantes con el registro vehicular correcto.

## Cómo detecta Plaspy el protocolo

Plaspy recibe tráfico entrante en un endpoint público compartido y determina automáticamente el protocolo del tracker utilizado por los dispositivos que reportan. Cuando el AT04 está configurado correctamente para enviar datos a Plaspy, normalmente no es necesario seleccionar el protocolo manualmente en la plataforma.

- Plaspy escucha en un dominio de endpoint común d.plaspy.com y en la IP pública 54.85.159.138 para conexiones de dispositivos.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, lo que simplifica la configuración en flotas mixtas.
- Plaspy detecta automáticamente el protocolo del tracker una vez que el AT04 comienza a reportar al endpoint de Plaspy, reduciendo la necesidad de mapeo manual.
- La configuración correcta del dispositivo para apuntar al endpoint de Plaspy suele ser el requisito principal para la detección automática e ingestión.
- Si un dispositivo no aparece en Plaspy, verifique la dirección de reporte, el modo de transporte y que el dispositivo esté autorizado para enviar datos en la red configurada.

## Transporte y configuración de conexión

El AT04 puede enviar datos por redes celulares a Plaspy usando UDP o TCP según el firmware y las opciones de configuración del equipo. Entender el transporte y los ajustes del endpoint es esencial para garantizar la entrega fiable de posiciones y alarmas.

- El AT04 puede configurarse para reportar a d.plaspy.com o a la dirección numérica 54.85.159.138 según la preferencia del instalador.
- Plaspy acepta conexiones en el puerto 8888 y el AT04 puede usar UDP o TCP en ese mismo puerto.
- Todos los dispositivos soportados por Plaspy utilizan el mismo puerto, lo que facilita la configuración de firewalls y redes para implementaciones de flota.
- Elija UDP o TCP en el equipo según las opciones del firmware y el comportamiento de la red en el sitio de instalación.
- Confirme el APN y los ajustes GPRS o LTE en la SIM y en el dispositivo para que el tracker pueda alcanzar el endpoint de Plaspy a través de la red celular.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar comandos disponibles, intervalos de reporte y opciones de transporte. Siempre anote la versión de firmware al probar compatibilidad.
- Las revisiones de hardware y la selección regional de módulos (por ejemplo variantes 2G frente a 4G) pueden afectar modos de transporte y comportamiento en la red.
- Las rutas de configuración del fabricante, como comandos SMS, ajustes GPRS o herramientas de configuración para Windows, influirán en cómo se apunta el dispositivo a Plaspy.
- La selección entre UDP y TCP puede impactar en las garantías de entrega y debería corresponder a la capacidad del dispositivo y al entorno de red.
- Verifique que las reglas de reporte del AT04 (tiempo, distancia, ángulo, disparadores de alarma) estén configuradas para cumplir sus requisitos operativos antes de desplegar a gran escala.
- En caso de duda, valide el comportamiento del dispositivo con la documentación del fabricante y pruebe un conjunto reducido de unidades antes del despliegue masivo.

## Por qué es importante entender el protocolo

Tener una comprensión práctica del protocolo de comunicación del AT04 facilita la incorporación de dispositivos, la telemetría precisa y la generación fiable de alertas dentro de Plaspy. Conocer el rol del transporte, las reglas de reporte y la configuración del equipo reduce el tiempo de resolución de problemas y mejora la confiabilidad a largo plazo.

- Asegura que el dispositivo esté configurado para reportar al endpoint correcto de Plaspy para que los datos posicionales aparezcan en la cuenta adecuada.
- Ayuda a establecer intervalos de reporte y disparadores de eventos apropiados para equilibrar la vida de la batería y la fidelidad del rastreo.
- Simplifica el diagnóstico de datos faltantes al acotar la investigación a transporte, APN o problemas de firmware en lugar del parseo en la plataforma.
- Evita problemas de red comunes alineando la configuración de firewall y del operador con el transporte del dispositivo y el puerto usado por Plaspy.
- Incrementa la confianza de que funciones críticas como comandos de inmovilizador y eventos de alarma serán entregados y procesados por la plataforma.

## Por qué usar Plaspy con este protocolo

Usar el AT04 con Plaspy brinda a las organizaciones visibilidad práctica de movimientos de vehículos, telemetría y eventos de seguridad. El soporte multi GNSS del AT04, su diseño de bajo consumo y las entradas de sensores complementan las capacidades de mapeo, alerta e informes de Plaspy para ofrecer información accionable sobre la flota.

La detección automática de protocolos y el enfoque de endpoint compartido de Plaspy reducen la complejidad de configuración en flotas mixtas, mientras que las opciones de configuración flexibles del AT04 facilitan apuntar las unidades al endpoint de Plaspy. Para obtener más información sobre Plaspy y cómo funciona con trackers compatibles, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo; verifique la información más reciente y específica del dispositivo con el fabricante en http://www.totemtek.com/
