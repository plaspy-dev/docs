---
slug: /sentar/rots/protocol
id: rots-protocol
sidebar_label: Protocol
title: Sentar - ROTS Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo Sentar ROTS para usar el rastreador GPS de mascotas con Plaspy
keywords:
  - protocolo Sentar ROTS
  - rastreador GPS Sentar ROTS
  - protocolo de comunicación ROTS
  - protocolo de rastreo ROTS
  - compatibilidad Sentar Plaspy
  - protocolo de dispositivo Plaspy
  - rastreador GPS para mascotas ROTS
  - integración rastreador Sentar
  - telemetría GPS Plaspy
  - rastreador wearable Sentar
---

# Sentar - Protocolo ROTS

Esta página explica el contexto público del protocolo para usar el rastreador GPS para mascotas Sentar ROTS con Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy a un nivel general, qué ajustes de conexión se emplean y qué verificar durante la configuración y solución de problemas. El objetivo es ofrecer orientación pública y no sensible para que propietarios e integradores obtengan resultados de rastreo fiables con Plaspy.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando los equipos reportan a la plataforma. El comportamiento exacto del protocolo ROTS puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por eso esta página se concentra en detalles públicos, agnósticos a la implementación, y en notas prácticas de compatibilidad.

## Resumen del protocolo

El protocolo del rastreador ROTS permite que el dispositivo envíe periódicamente posición y telemetría a un servidor remoto donde Plaspy procesa y almacena la información. A nivel básico, el rastreador reporta posiciones GNSS, marcas de tiempo y estado de conectividad a través de redes celulares para que Plaspy pueda visualizar ubicación, historial y alertas para la supervisión de mascotas.

- El protocolo transmite fijaciones de posición y datos de tiempo que Plaspy convierte en marcadores en el mapa y en registros de historial.
- Los campos de identificación en los reportes permiten a Plaspy asociar los mensajes entrantes con la cuenta de dispositivo correcta.
- Los indicadores de telemetría comunican el estado del dispositivo, como nivel de batería, movimiento y conectividad, que Plaspy muestra como alertas o indicadores de estado.
- El rastreador envía datos en red al endpoint de Plaspy donde se realiza el análisis y almacenamiento para seguimiento en tiempo real y reproducción histórica.
- El comportamiento de transporte (frecuencia, reintentos y conmutación entre 4G, 3G y 2G) lo gestiona el firmware del dispositivo y afecta la periodicidad con la que Plaspy recibe actualizaciones.

## Cómo Plaspy detecta el protocolo

Plaspy recibe mensajes entrantes en un endpoint compartido y puede detectar e interpretar automáticamente el protocolo del rastreador cuando el dispositivo apunta correctamente a la plataforma. En la mayoría de los casos, un equipo configurado para reportar a Plaspy no requiere selección manual del protocolo dentro de la plataforma.

- Plaspy escucha en un único endpoint común d.plaspy.com y en la IP pública 54.85.159.138.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, lo que simplifica la configuración y la incorporación de equipos.
- El rastreador ROTS puede configurarse para reportar a Plaspy usando UDP o TCP en el puerto 8888.
- Cuando el rastreador envía sus primeros reportes al endpoint de Plaspy, la plataforma identifica el dispositivo y asocia automáticamente su flujo de datos entrante.
- Los usuarios normalmente solo deben asegurarse de que el rastreador tenga el hostname o IP de Plaspy correcto y que el transporte (UDP o TCP) coincida con la configuración del dispositivo.

## Transporte y contexto de conexión

El contexto de conexión explica cómo el rastreador ROTS envía datos a Plaspy a través de redes celulares y qué endpoints y métodos de transporte son los más habituales. Comprender estas opciones de conexión ayuda al configurar la provisión de la SIM, los ajustes APN y la dirección del servidor.

- El dispositivo ROTS puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y la preferencia del usuario.
- Los equipos pueden apuntar al host de Plaspy d.plaspy.com o directamente a la IP del servidor 54.85.159.138 al registrar su destino de reporte.
- Plaspy usa el puerto 8888 para todos los dispositivos soportados, por lo que se utiliza el mismo puerto independientemente del modelo al enviar datos a la plataforma.
- La conmutación celular de 4G a 3G a 2G la gestiona el rastreador y condiciona la frecuencia con la que Plaspy recibe actualizaciones.
- Verifique que el APN y los ajustes de la SIM permitan tráfico saliente hacia d.plaspy.com o la IP indicada y que los firewalls de red permitan el tráfico al puerto 8888.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar qué campos aparecen en los reportes o con qué frecuencia se envían los datos; siempre anote la versión de firmware al validar el comportamiento.
- Revisiones de hardware o SKUs regionales pueden introducir diferencias en las bandas soportadas o las opciones de telemetría que afectan la conectividad y el reporte.
- La implementación del fabricante puede variar en elementos de telemetría opcionales; confirme qué elementos de telemetría incluye su modelo de dispositivo.
- Elija UDP o TCP según sus necesidades de despliegue y la configuración del equipo; algunas redes funcionan mejor con un transporte que con otro.
- Confirme la provisión de la SIM, el APN y las políticas de roaming con su operador para evitar datos bloqueados o limitados al reportar a Plaspy.
- Valide la compatibilidad con la documentación actual del fabricante antes de despliegues masivos para tener en cuenta actualizaciones de firmware o cambios de funciones.

## Por qué es importante entender el protocolo

Conocer el comportamiento público del protocolo ROTS ayuda a garantizar una configuración inicial fiable, una solución de problemas más rápida y una operación a largo plazo predecible cuando se integra con Plaspy. Un contexto de protocolo claro reduce conjeturas y acelera el camino hacia el rastreo en vivo.

- El hostname o la IP del servidor correctos y la selección adecuada del transporte reducen fallas comunes de conectividad.
- Estar al tanto de las revisiones de firmware y hardware ayuda a explicar diferencias en la frecuencia de reporte o disponibilidad de telemetría.
- Entender qué envía el rastreador permite diagnosticar más rápido datos faltantes o mal formateados durante la incorporación.
- Una configuración correcta del APN y la SIM evita interrupciones por parte del operador que impidan que los mensajes lleguen a Plaspy.
- Reconocer que Plaspy usa un puerto compartido y detección automática de protocolo elimina la necesidad de escoger manualmente el protocolo en muchos casos.

## Por qué usar Plaspy con este protocolo

El Sentar ROTS es un rastreador compacto y ponible diseñado para escenarios de seguimiento de mascotas donde son importantes actualizaciones de ubicación constantes y larga duración de batería. Al integrarlo con Plaspy, propietarios y operadores obtienen visibilidad centralizada, alertas y reproducción histórica que hacen que la supervisión de mascotas sea práctica y fácil de gestionar a escala. La plataforma de Plaspy procesa la telemetría entrante del rastreador ROTS para que los datos de posición, el historial de movimiento y el estado básico del dispositivo estén disponibles mediante los paneles y sistemas de notificación de Plaspy.

Para obtener más información sobre Plaspy y cómo soporta dispositivos como el Sentar ROTS, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles específicos de implementación del dispositivo pueden cambiar con el tiempo, por lo que verifique la información más reciente sobre protocolo y firmware del fabricante en http://www.sentarsmart.com/.
