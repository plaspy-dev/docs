---
slug: /globalsat/tr_606/protocol
id: tr_606-protocol
sidebar_label: Protocol
title: GlobalSat - TR-606 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para usar el rastreador GlobalSat TR-606 con Plaspy y lograr un seguimiento vehicular confiable
keywords:
  - Protocolo GlobalSat TR-606
  - Protocolo GPS GlobalSat TR-606
  - Compatibilidad TR-606 Plaspy
  - Comunicación GlobalSat TR-606
  - Protocolo de rastreo TR-606
  - Protocolo de rastreador GlobalSat
  - Rastreador GPS TR-606
  - Soporte de dispositivos Plaspy
  - Rastreo vehicular TR-606
  - AVL TR-606
---

# GlobalSat - Protocolo TR-606

Esta página describe el contexto público del protocolo para integrar el rastreador GlobalSat TR-606 con Plaspy. Se centra en cómo el TR-606 se comunica con un endpoint de servidor, cómo el protocolo soporta el reporte de ubicación y estado del vehículo, y qué aspectos considerar al integrar este dispositivo con Plaspy. El contenido está pensado para usuarios técnicos que necesitan contexto de protocolo sin exponer detalles privados de implementación.

El GlobalSat TR-606 es un rastreador compacto diseñado para aplicaciones AVL; combina un chipset GPS de alta sensibilidad con conectividad UMTS HSDPA de doble banda y GSM cuatribanda. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que conviene validar el comportamiento del dispositivo con la documentación oficial cuando sea necesario.

## Resumen del protocolo

El protocolo que utiliza el TR-606 regula cómo el rastreador establece conectividad con un servidor remoto, se identifica y transmite datos de ubicación y estado del vehículo para que una plataforma como Plaspy pueda interpretarlos. Esta visión pública explica el papel de la capa de comunicación en habilitar seguimiento confiable y funciones de control remoto.

- Permite que el TR-606 reporte la ubicación GPS y el estado telemático a un servidor remoto para supervisión en tiempo real.
- Transporta información de identificación y estado que permite a Plaspy correlacionar mensajes entrantes con un dispositivo y vehículo específicos.
- Proporciona el mecanismo para actualizaciones periódicas de posición, reportes por eventos y acuses de recibo del servidor dentro de los modos de transporte soportados por el dispositivo.
- Soporta funciones de comando y control remoto ofrecidas por el dispositivo cuando el firmware y la configuración lo permiten.
- Actúa como la capa de integración entre el hardware del dispositivo y los sistemas de ingestión e interpretación de Plaspy.

## Cómo detecta Plaspy el protocolo

Plaspy recibe los reportes de los rastreadores en un endpoint de ingestión compartido y determina automáticamente el protocolo del dispositivo a partir del patrón de conexión y mensajes entrantes. En la mayoría de los casos usted no necesita seleccionar manualmente un protocolo dentro de Plaspy si el TR-606 está configurado para reportar correctamente al endpoint de Plaspy.

- El dominio público de servidor de Plaspy para reportes de dispositivos es d.plaspy.com.
- La IP pública de Plaspy para reportes de dispositivos es 54.85.159.138.
- Plaspy escucha en el puerto 8888 y todos los dispositivos compatibles usan el mismo puerto.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 dependiendo de la configuración del equipo y las condiciones de la red.
- Cuando el TR-606 apunta al endpoint de Plaspy y comienza a reportar, Plaspy detectará automáticamente el protocolo del rastreador, por lo que la selección manual suele ser innecesaria.

## Contexto de transporte y conexión

El contexto de conexión abarca cómo el TR-606 alcanza los servidores de Plaspy y qué opciones de transporte se usan habitualmente. Las radios GSM y UMTS del TR-606 ofrecen conectividad IP flexible, y la elección del transporte influye en la fiabilidad y el comportamiento de la red intermedia.

- El TR-606 puede configurarse para usar UDP o TCP en el puerto 8888 para el envío de reportes.
- Los dispositivos pueden resolver DNS hacia d.plaspy.com o usar la dirección numérica 54.85.159.138 para contactar a los servidores de Plaspy.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos soportados, lo que simplifica la configuración y las reglas de firewall.
- Las condiciones de red, la traducción de direcciones del operador (carrier NAT) y la configuración de firmware del dispositivo pueden influir en si UDP o TCP es más adecuado para una implementación concreta.
- Asegúrese de que las reglas de firewall y la configuración del APN permitan conexiones salientes hacia el dominio o la IP de Plaspy en el puerto 8888.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el formato de los reportes del TR-606 o los eventos que envía; consulte las notas de firmware para identificar comportamientos que afecten la integración.
- Las revisiones de hardware o módulos accesorios pueden modificar características disponibles como salidas de control remoto y entradas de eventos.
- Las configuraciones por parte del fabricante y el comportamiento por defecto del APN pueden impedir que los dispositivos alcancen el endpoint configurado si no se ajustan.
- La elección entre UDP y TCP puede afectar el comportamiento de reintentos y la fiabilidad percibida en enlaces móviles con pérdida de paquetes.
- La detección automática de protocolo de Plaspy reduce la carga de configuración, pero el dispositivo debe apuntar correctamente a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Valide la compatibilidad y las opciones específicas del dispositivo consultando la documentación oficial de GlobalSat y las notas de versión.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del TR-606 ayuda a garantizar implementaciones confiables, agilizar la resolución de problemas y mantener una operación predecible a largo plazo al integrar el dispositivo con Plaspy. Saber qué revisar y dónde buscar ahorra tiempo cuando los dispositivos no aparecen en línea o cuando los datos reportados son incompletos.

- Le ayuda a confirmar que el dispositivo está configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Orienta los pasos de diagnóstico, como validar el modo de transporte, la configuración del APN y las versiones de firmware.
- Informa decisiones entre UDP y TCP según las características de la red y las necesidades de su aplicación.
- Aclara qué funciones del dispositivo generarán eventos en el servidor y cómo esos eventos se mapean a los campos de datos de Plaspy.
- Reduce el riesgo de mala configuración al alinear los ajustes del dispositivo con el modelo de conexión compartida de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el GlobalSat TR-606 con Plaspy brinda a las organizaciones una vía directa para aprovechar la ubicación del vehículo, el reporte de estado y las capacidades de control remoto dentro de una única plataforma. El diseño compacto del TR-606 y su conectividad celular lo hacen apto para una amplia gama de flotas, activos y vehículos de servicio donde la visibilidad continua y la supervisión operativa son importantes.

El modelo de endpoint compartido de Plaspy y la detección automática de protocolo simplifican la incorporación de dispositivos y reducen la necesidad de seleccionar manualmente el protocolo. Para obtener más información sobre Plaspy y cómo soporta la integración de rastreadores, visite https://www.plaspy.com. Para la documentación específica del protocolo del dispositivo, notas de firmware y detalles de implementación más recientes, verifique la información actual en el sitio del fabricante https://www.globalsat.com.tw/. El soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que siempre confirme las especificaciones del dispositivo con GlobalSat antes de un despliegue a gran escala.
