---
slug: /nvs/navitrek_um_02/protocol
id: navitrek_um_02-protocol
sidebar_label: Protocol
title: NVS - Navitrek UM-02 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del NVS Navitrek UM-02 y su comunicación con Plaspy para rastreo de flotas
keywords:
  - Protocolo NVS Navitrek UM 02
  - Protocolo GPS Navitrek UM 02
  - Protocolo de rastreador GPS NVS
  - Protocolo Navitrek Plaspy
  - Protocolo de comunicación Navitrek UM 02
  - Protocolo de rastreo Navitrek UM 02
  - Rastreo de flotas NVS Plaspy
  - Integración rastreador GPS Plaspy
  - GPS GLONASS Navitrek
  - Navitrek UM 02 soporte GPRS SMS
---

# NVS - Protocolo Navitrek UM-02

Esta página describe el contexto público del protocolo para usar el rastreador NVS Navitrek UM-02 con Plaspy. Explica el papel general de comunicación que tiene el dispositivo al reportar posición y eventos a una plataforma de seguimiento remota. El Navitrek UM-02 es un dispositivo de búsqueda autónoma que envía posición vía GPRS y puede emplear también SMS; la posición proviene del receptor GLONASS/GPS NV08C de ZAO KB NAVIS integrado en el equipo.

Plaspy utiliza ajustes de conexión compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador para simplificar el alta. En Plaspy el endpoint conocido es d.plaspy.com y la IP del servidor es 54.85.159.138 usando el puerto 8888. Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888; todos los dispositivos en Plaspy usan el mismo puerto. El comportamiento exacto del protocolo y los comandos disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que usted debe confirmar detalles específicos del equipo con la documentación oficial de NVS cuando sea necesario.

## Visión general del protocolo

El protocolo de reporte es el conjunto de reglas y formatos que usa el Navitrek UM-02 para enviar telemetría, fijaciones de posición y eventos a un servidor remoto. En el contexto de Plaspy, el protocolo determina cómo el rastreador se identifica, cómo se representan la ubicación y el estado, y cómo el servidor reconoce o registra los informes recibidos.

- Permite al Navitrek UM-02 transmitir datos de posición GPS o GLONASS y estado básico del dispositivo a Plaspy mediante datos móviles
- Proporciona un mecanismo para que el dispositivo se identifique y Plaspy pueda asociar los mensajes con el activo correcto
- Transporta tipos de eventos como movimiento, manipulación o batería baja para que la plataforma genere alertas y registros
- Soporta comportamientos de configuración y reporte que pueden variar según firmware y ajustes del fabricante
- Puede recurrir al SMS para alertas o configuración cuando no hay conectividad GPRS, según la configuración del equipo

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para aceptar conexiones entrantes en un único endpoint público y determinar automáticamente qué protocolo de rastreador se usa en cada sesión de dispositivo. Esto elimina la necesidad de que usted seleccione manualmente un protocolo dentro de la plataforma cuando el equipo está configurado para reportar a Plaspy.

- Plaspy recibe tráfico de dispositivos en d.plaspy.com y en la IP pública 54.85.159.138 en el puerto 8888
- Los dispositivos pueden configurarse para usar transporte UDP o TCP hacia Plaspy en el puerto 8888
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración de cortafuegos y redes
- Cuando el Navitrek UM-02 apunta al endpoint de Plaspy y está correctamente configurado, Plaspy detectará el protocolo del rastreador automáticamente
- Normalmente usted solo necesita establecer la dirección del servidor y el APN en el equipo para lograr la detección exitosa

## Contexto de transporte y conexión

El comportamiento de conexión resulta de la combinación entre las capacidades del rastreador, la configuración de la red móvil y el endpoint del servidor utilizado. El Navitrek UM-02 suele usar GPRS para reportes basados en IP y también puede aprovechar canales SMS para alertas específicas o mensajes de reserva si lo soporta.

- El dispositivo puede usar UDP o TCP en el puerto 8888 según su configuración y capacidades de firmware
- La configuración del servidor del rastreador puede apuntar al dominio d.plaspy.com o a la IP 54.85.159.138 para llegar a Plaspy
- Asegúrese de que el APN y los ajustes de datos móviles del equipo permitan conexiones salientes a Internet público para reportes por GPRS
- Las reglas de firewall deben permitir tráfico saliente y entrante en el puerto 8888 para el protocolo de transporte elegido
- El SMS es un canal separado y útil para ciertas alertas, pero la integración normal con Plaspy requiere reporte por IP

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el comportamiento de los mensajes y las funciones soportadas incluso dentro del mismo modelo
- Revisiones de hardware u módulos opcionales pueden afectar entradas, salidas y reporte de eventos disponibles
- Ajustes del fabricante pueden habilitar o deshabilitar transportes o tipos específicos de mensajes
- La selección de transporte entre UDP y TCP puede influir en las características de entrega; use el transporte que soporte el firmware del dispositivo y la red
- Valide siempre APN, dirección del servidor y puerto con la documentación oficial del equipo antes de un despliegue masivo
- Para funciones más allá del reporte básico de ubicación consulte la documentación de NVS para confirmar detalles de implementación

## Por qué importa entender el protocolo

Comprender cómo se comunica el Navitrek UM-02 facilita la configuración inicial, la resolución de problemas de reportes intermitentes y garantiza una operación fiable a largo plazo con Plaspy. Saber qué puede y qué no puede reportar el rastreador también ayuda a diseñar flujos de trabajo y alertas acordes a las necesidades operativas.

- Agiliza la puesta en marcha al aclarar necesidades de servidor, puerto y APN
- Ayuda a diagnosticar problemas de conectividad identificando si la falla es de transporte, APN o comportamiento del firmware
- Mejora la configuración de eventos para que las alertas y reglas en Plaspy coincidan con las capacidades del dispositivo
- Facilita la planificación de actualizaciones de firmware y reemplazos de hardware al anticipar cambios de protocolo
- Apoya la planificación de red como reglas de firewall y NAT para asegurar reportes consistentes

## Por qué usar Plaspy con este protocolo

Usar el Navitrek UM-02 con Plaspy ofrece una vía directa hacia el seguimiento centralizado y la visibilidad de flotas. El enfoque de endpoint único de Plaspy y la detección automática de protocolo reducen la carga de configuración y hacen más sencillo el registro y monitoreo de equipos que reportan por GPRS. Para organizaciones que gestionan activos o vehículos, esta combinación permite que los equipos se concentren en la operación en lugar de en detalles de bajo nivel del protocolo.

Para conocer más sobre Plaspy y cómo soporta rastreadores GPS como el Navitrek UM-02 visite https://www.plaspy.com. Verifique los detalles más recientes del protocolo específico del equipo, comportamiento de firmware y notas de implementación con el fabricante en https://www.nvs-ts.ru/ ya que el soporte de protocolo y las funciones del firmware pueden cambiar con el tiempo.
