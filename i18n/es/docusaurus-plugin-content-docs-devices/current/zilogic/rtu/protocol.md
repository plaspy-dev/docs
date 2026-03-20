---
slug: /zilogic/rtu/protocol
id: rtu-protocol
sidebar_label: Protocol
title: Zilogic - RTU Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para Zilogic RTU y cómo el equipo reporta a Plaspy para telemetría remota e integración en la nube
keywords:
  - Protocolo Zilogic RTU
  - Protocolo GPS Zilogic RTU
  - Zilogic RTU MQTT
  - Zilogic RTU HTTP
  - Zilogic RTU Plaspy
  - Protocolo de comunicación RTU
  - Protocolo de rastreo RTU
  - Integración RTU ModBus
  - Compatibilidad de dispositivos Plaspy
  - Rastreo de flotas RTU
---

# Zilogic - Protocolo RTU

Esta página presenta el contexto público del protocolo para usar el tracker Zilogic RTU con Plaspy. Se enfoca en cómo el equipo puede reportar telemetría y estado a Plaspy mediante las interfaces preparadas para la nube del RTU y el endpoint compartido de Plaspy. El objetivo es explicar el contexto de conexión y las consideraciones de compatibilidad sin exponer detalles sensibles de implementación.

El Zilogic RTU (BlackKite RTU) soporta reportes por HTTP y MQTT, expansión IO opcional por ModBus, intervalos de reporte configurables y GPS opcional para localización. Plaspy utiliza ajustes de conexión compartidos entre dispositivos soportados y detecta automáticamente el protocolo del tracker, aunque el comportamiento exacto puede variar según firmware, revisión de hardware e implementación del fabricante en el RTU.

## Descripción general del protocolo

El protocolo del tracker define cómo el RTU empaqueta y transmite lecturas de sensores, estados de IO, datos GPS y estado del dispositivo hacia un endpoint en la nube. En el caso del RTU, esto normalmente implica usar sus métodos de transporte soportados para alcanzar Plaspy y confiar en la plataforma para interpretar los reportes entrantes y ofrecer visibilidad y monitoreo.

- Permite la identificación y registro del dispositivo en la plataforma para que Plaspy pueda atribuir los datos entrantes al activo correcto.
- Transporta telemetría como valores de entradas digitales y analógicas, eventos de IO, coordenadas GPS cuando están disponibles e indicadores de salud del equipo.
- Soporta intervalos de reporte configurables para balancear la inmediatez de la información y el uso de datos celulares en despliegues remotos.
- Permite el almacenamiento temporal offline en la FLASH interna cuando la conectividad de red no está disponible, preservando los datos hasta la ventana de retención indicada por el dispositivo.
- Funciona junto con interfaces opcionales como ModBus o adaptadores seriales para ampliar la conectividad de sensores y actuadores en campo.

## Cómo Plaspy detecta el protocolo

Plaspy recibe los reportes de los dispositivos en un único endpoint compartido y determina automáticamente cuál de los protocolos soportados está en uso. En la mayoría de los casos, cuando el RTU está configurado para reportar a Plaspy será reconocido sin necesidad de seleccionar el protocolo manualmente en la plataforma.

- Plaspy detecta automáticamente el protocolo del tracker cuando el dispositivo envía datos al endpoint de Plaspy.
- El dominio del servidor de Plaspy es d.plaspy.com, que resuelve al endpoint de la plataforma.
- La IP del servidor de Plaspy es 54.85.159.138 para direccionamiento directo por IP si no se usa DNS.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 dependiendo del firmware y las opciones de configuración del equipo.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración y reduce la necesidad de ajustar cada equipo por separado.
- Si el RTU está correctamente configurado para enviar a d.plaspy.com o a 54.85.159.138 en el puerto de la plataforma, por lo general no será necesario seleccionar el protocolo manualmente en Plaspy.

## Transporte y contexto de conexión

El contexto de conexión explica cómo el RTU alcanza Plaspy más que el contenido preciso de cada mensaje. El RTU soporta los transportes básicos de Internet y puede configurarse para apuntar a Plaspy usando tanto un nombre de dominio como una dirección IP.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según su firmware RTU y los requisitos de red.
- Los equipos pueden apuntar a d.plaspy.com o a 54.85.159.138 si prefiere direccionamiento directo por IP para rutas independientes de DNS.
- Plaspy usa el mismo puerto para todos los dispositivos soportados, lo que reduce la confusión al configurar flotas mixtas.
- Elija UDP para menor sobrecarga y telemetría por ráfagas cuando el RTU y la ruta de red sean confiables, o TCP cuando prefiera entrega ordenada y continuidad de sesión.
- Asegúrese de que el APN y las configuraciones celulares del RTU sean correctas para que el dispositivo pueda alcanzar el endpoint de Plaspy de forma consistente.

## Notas de compatibilidad del protocolo

- Las variaciones de firmware entre lotes de producción pueden cambiar cómo el RTU formatea o transmite datos; siempre revise las notas de la versión de firmware para conocer implicaciones en el reporte a la nube.
- Revisiones de hardware y accesorios opcionales como módulos ModBus o añadidos GPS pueden alterar el conjunto de elementos de telemetría que el dispositivo puede enviar.
- El RTU soporta modos de reporte por HTTP y MQTT; confirme cuál modo de transporte planea usar y valídelo en campo.
- La selección de transporte (UDP vs TCP) se determina por la configuración del equipo y el entorno de red, y puede afectar el comportamiento de entrega.
- Las alertas por SMS y el almacenamiento local son funciones del dispositivo que complementan el reporte a la nube pero no sustituyen la accesibilidad del endpoint de Plaspy.
- Valide la compatibilidad con la documentación de Zilogic para su modelo y firmware exactos para asegurar el comportamiento esperado.

## Por qué importa comprender el protocolo

Entender cómo el RTU se comunica con Plaspy ayuda a garantizar despliegues exitosos, flujos de datos previsibles y una resolución de problemas más eficiente cuando surjan incidencias. Conocer las opciones de transporte, los intervalos de reporte y las interfaces opcionales reduce el tiempo de puesta en marcha y mejora la confiabilidad operativa.

- Facilita el diagnóstico de problemas de conectividad comprobando que el dispositivo apunte a d.plaspy.com o a 54.85.159.138 y utilice el puerto 8888.
- Orienta la elección entre UDP y TCP para ajustar la fiabilidad y la latencia según su caso de uso.
- Aclara cómo las funciones opcionales como ModBus, serial o GPS se reflejan en la telemetría entregada a Plaspy.
- Informa decisiones sobre intervalos de reporte para equilibrar visibilidad en tiempo real y costos de datos GPRS.
- Hace más seguro el plan de actualizaciones de firmware al anticipar cambios de comportamiento del protocolo que podrían afectar integraciones en la nube.

## Por qué usar Plaspy con este protocolo

Usar el Zilogic RTU con Plaspy ofrece a las organizaciones un camino directo desde los datos de campo hasta la visibilidad y control centralizados. El soporte del RTU para reportes listos para la nube por HTTP y MQTT, combinado con la detección automática de protocolos de Plaspy y un endpoint unificado, simplifica despliegues a gran escala y flotas con equipos mixtos.

Si desea obtener más información sobre cómo Plaspy soporta la telemetría remota y la gestión de dispositivos, visite https://www.plaspy.com. Para detalles específicos del protocolo por dispositivo, notas de firmware y guías de implementación del Zilogic RTU, verifique la información en el sitio del fabricante https://zilogic.com/ ya que el comportamiento y las funciones soportadas pueden cambiar con nuevas versiones de firmware y revisiones de hardware.
