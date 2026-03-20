---
slug: /noran/nr028/protocol
id: nr028-protocol
sidebar_label: Protocol
title: Noran - NR028 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo del rastreador Noran NR028 y cómo se comunica con Plaspy para monitoreo vehicular confiable
keywords:
  - Protocolo Noran NR028
  - Protocolo rastreador GPS NR028
  - Compatibilidad Noran NR028 con Plaspy
  - Protocolo de comunicación NR028
  - Comunicación rastreador Noran
  - Protocolo de rastreo NR028
  - Compatibilidad rastreador Noran
  - Rastreo vehicular NR028
  - Protocolo de telemetría NR028
  - Protocolo de dispositivo Plaspy
---

# Noran - Protocolo NR028

Esta página describe el contexto público del protocolo para usar el rastreador GPS Noran NR028 con Plaspy. Aquí se explica cómo el dispositivo se comunica con Plaspy para seguimiento en tiempo real, telemetría y alarmas, y se señalan las configuraciones de conexión y consideraciones prácticas necesarias para una integración exitosa, sin exponer detalles sensibles de implementación.

El NR028 es compatible con Plaspy desde fábrica y soporta reporte por GPRS/Internet con fallback por SMS y LBS. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. El comportamiento exacto y las funcionalidades disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; la información aquí se centra en detalles públicos y no sensibles que ayudan en la configuración y solución de problemas.

## Resumen del protocolo

El protocolo del rastreador es el conjunto de comportamientos e intercambios de mensajes que el NR028 utiliza para reportar posición, estado y datos de sensores a un servicio backend. En el contexto de Plaspy, la función del protocolo es asegurar que el dispositivo se identifique, envíe telemetría oportuna y entregue eventos de alarma y sensores que Plaspy pueda presentar a los usuarios.

- Permite reportes de posición periódicos y por eventos para que Plaspy muestre la ubicación en vivo y el historial de trayectos.
- Transmite banderas de alarma y estado como exceso de velocidad, geocerca, SOS, corte de alimentación y eventos de inmovilizador para alertas automatizadas.
- Transporta telemetría de sensores, incluyendo lectura de combustible y temperatura, de modo que Plaspy pueda mostrar telemetría y generar reportes.
- Utiliza paquetes de telemetría compactos para reducir uso de datos y soportar reportes fiables sobre redes móviles.
- Soporta múltiples opciones de transporte (GPRS sobre TCP o UDP, además de fallback por SMS y LBS) para mantener conectividad en condiciones de cobertura variables.

## Detección del protocolo por Plaspy

Plaspy recibe datos entrantes en un endpoint y puerto comunes y realiza selección automática de protocolo, por lo que usted normalmente no necesita elegir el protocolo manualmente una vez que el dispositivo está configurado para reportar a Plaspy. La configuración correcta del dispositivo hacia el endpoint de Plaspy es el paso clave para la detección e ingestión automática.

- Los servidores de Plaspy son accesibles en el dominio d.plaspy.com y en la IP pública 54.85.159.138 para el reporte de dispositivos.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración y centraliza la ingestión.
- Plaspy detecta automáticamente el protocolo del rastreador cuando un dispositivo correctamente configurado reporta al endpoint de Plaspy, evitando la selección manual en la mayoría de los casos.
- Si un dispositivo está configurado para enviar datos al endpoint de Plaspy y el enrutamiento de red es correcto, Plaspy ingerirá datos posicionales y de eventos para tableros y alertas.
- Usted debe confirmar los parámetros de reporte del dispositivo y el acceso de red para asegurar que la conexión inicial llegue a los servidores de Plaspy.

## Transporte y contexto de conexión

El contexto de conexión abarca cómo el NR028 entrega sus mensajes de protocolo a Plaspy a través de redes móviles. El NR028 soporta reporte por Internet basado en paquetes y fallback por SMS para mantener el reporte en distintas condiciones de red.

- El NR028 puede configurarse para usar UDP o TCP en el puerto 8888, según el soporte del dispositivo y la configuración elegida.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la IP del servidor Plaspy 54.85.159.138 como endpoint de reporte.
- El puerto 8888 es el puerto común utilizado por todos los dispositivos en Plaspy, por lo que el mismo ajuste de puerto aplica a los rastreadores soportados.
- Al usar reporte por GPRS/Internet, asegúrese de que el APN y las configuraciones de IP estén correctamente establecidas en el dispositivo para que los datos lleguen al endpoint de Plaspy.
- Las opciones de fallback por SMS y LBS proporcionan continuidad cuando los datos por paquete no están disponibles, permitiendo que actualizaciones básicas de ubicación lleguen a Plaspy.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware pueden cambiar comandos disponibles, umbrales de eventos y comportamiento exacto de reporte; verifique siempre la versión de firmware al solucionar problemas.
- Revisión de hardware u opciones de accesorios (por ejemplo sensores de combustible adicionales o metadatos de captura de cámara) pueden afectar qué características son reportadas a Plaspy.
- La elección del transporte (TCP vs UDP) puede influir en características de entrega como confiabilidad y retransmisión; seleccione el transporte soportado y recomendado para su despliegue.
- La configuración por defecto del fabricante puede no apuntar a Plaspy; verifique que el APN del dispositivo, dominio o IP del servidor y puerto estén establecidos con los valores de Plaspy.
- El reporte por SMS y el fallback por LBS son útiles en áreas con cobertura GPRS intermitente, pero pueden ofrecer menor precisión o telemetría reducida en comparación con reportes completos por GPRS.
- Siempre valide la compatibilidad y los pasos de configuración contra la documentación del dispositivo y la guía vigente del fabricante.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el NR028 hace que la configuración y la operación continua sean más predecibles y reduce el tiempo dedicado a diagnosticar problemas de reporte. Conocer el protocolo y el contexto de conexión ayuda a los operadores a confirmar que los dispositivos están conectados, reportan telemetría correctamente y entregan las alarmas y datos de sensores necesarios para la operación.

- Asegura el apuntado correcto del dispositivo a d.plaspy.com o 54.85.159.138 para que los datos lleguen a los servidores de Plaspy.
- Ayuda a elegir el modo de transporte apropiado (UDP o TCP en el puerto 8888) según la red y los requerimientos de confiabilidad.
- Permite interpretar por qué un dispositivo puede caer en fallback por SMS o LBS y qué datos estarán disponibles en esos modos.
- Facilita la solución efectiva de faltantes de telemetría, errores de configuración o cambios de comportamiento relacionados con firmware.
- Permite planear el uso y la retención de datos al saber que el dispositivo envía telemetría compacta optimizada para bajo ancho de banda.

## Por qué usar Plaspy con este protocolo

El NR028 ofrece funcionalidades consolidadas en vehículo, incluyendo navegación, captura de cámara y múltiples flujos de telemetría. Cuando estos reportes de dispositivo son recibidos por Plaspy, se convierten en información accionable para gestores de flota, equipos de seguridad y despachadores. Plaspy centraliza posición, alarmas, combustible y datos de sensores en tableros, alertas y reportes históricos que apoyan la toma de decisiones operativas.

Para conocer más sobre cómo Plaspy puede ingerir y presentar datos del NR028 y revisar opciones de despliegue, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo; verifique la información de protocolo y firmware específica más reciente en el sitio del fabricante en http://www.norantracker.com/ antes de finalizar configuraciones.
