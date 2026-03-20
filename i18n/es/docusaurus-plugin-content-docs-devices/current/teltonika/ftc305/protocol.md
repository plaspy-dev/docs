---
slug: /teltonika/ftc305/protocol
id: ftc305-protocol
sidebar_label: Protocol
title: Teltonika - FTC305 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo Teltonika FTC305 y su compatibilidad con Plaspy, con contexto de conexión y notas prácticas de integración
keywords:
  - protocolo Teltonika FTC305
  - compatibilidad FTC305 Plaspy
  - protocolo GPS FTC305
  - rastreo vehicular FTC305
  - telemetría bus CAN FTC305
  - rastreador e mobility Teltonika
  - rastreador 4G LTE FTC305
  - integración de dispositivos Plaspy
  - seguimiento de flotas FTC305
  - ajustes de conexión FTC305
---

# Teltonika - Protocolo FTC305

Esta página describe el contexto del protocolo público para usar el Teltonika FTC305 con Plaspy. Se enfoca en cómo el dispositivo se comunica a alto nivel, qué esperar al integrar la telemetría y los datos del bus CAN del FTC305 en Plaspy, y en información práctica de conexión que facilita la configuración y la resolución de problemas sin exponer detalles privados de implementación.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando éste reporta al endpoint de Plaspy. El FTC305 es compatible con Plaspy y se despliega habitualmente en soluciones de e mobility y telemática de flotas porque proporciona posiciones GNSS, telemetría derivada del CAN y opciones de alimentación resistentes. El comportamiento exacto del protocolo y los mensajes disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que confirme los detalles del dispositivo en la documentación del fabricante cuando sea necesario.

## Resumen del protocolo

El FTC305 comunica telemetría, posición y datos del vehículo a un servidor remoto usando el protocolo de reporte implementado por Teltonika. En la práctica, el protocolo permite que el rastreador se identifique ante Plaspy, entregue posiciones GNSS y atributos del bus CAN, y mantenga una sesión continua adecuada para el monitoreo de flotas y alertas.

- El protocolo transporta reportes de posición GNSS y marcas de tiempo que Plaspy utiliza para el mapeo en vivo y el histórico de recorridos.
- Se transmiten telemetría del bus CAN y valores de estado del vehículo para que Plaspy alimente paneles y reglas de eventos.
- Los campos de identificación del dispositivo permiten a Plaspy asociar los datos entrantes con el vehículo y la configuración correctos.
- El protocolo soporta reportes periódicos y por eventos para reflejar movimiento, encendido o umbrales de telemetría.
- El comportamiento de transporte puede variar según el firmware o la variante del dispositivo, pero la función del protocolo sigue siendo entregar datos utilizables al servidor.

## Cómo detecta Plaspy el protocolo

Plaspy recibe los reportes de dispositivos en un endpoint compartido y determina automáticamente el protocolo del rastreador utilizado por cada equipo entrante. En la mayoría de los casos, un FTC305 correctamente configurado comenzará a enviar datos a Plaspy sin requerir la selección manual del protocolo dentro de la plataforma.

- Los dispositivos reportan al servidor Plaspy en d.plaspy.com o directamente a la IP del servidor 54.85.159.138.
- Plaspy escucha en el puerto de la plataforma 8888 y usa ese mismo puerto para todos los dispositivos compatibles.
- Plaspy detecta automáticamente el protocolo del rastreador cuando los datos llegan al endpoint compartido.
- Usted normalmente solo necesita configurar el FTC305 para que apunte al endpoint de Plaspy y seleccionar UDP o TCP según lo permita el dispositivo.
- Si no aparecen datos, verifique la IP de reporte, el puerto, el modo de transporte y los ajustes de firmware en el rastreador.

## Transporte y contexto de conexión

El FTC305 soporta transportes de red comunes y puede configurarse para usar UDP o TCP según las necesidades de despliegue y las opciones de firmware. Los ajustes públicos de Plaspy ofrecen un destino consistente para que estos dispositivos reporten.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888.
- El dominio público del servidor de Plaspy es d.plaspy.com y la IP pública del servidor es 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto, 8888, lo que simplifica la configuración en flotas mixtas.
- Elija UDP para menor sobrecarga y TCP cuando se requiera confiabilidad de sesión o beneficios en la travesía de firewalls.
- Confirme la selección del transporte y la accesibilidad de red desde la red del dispositivo antes de finalizar el despliegue.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar qué mensajes o campos de telemetría están disponibles en el FTC305.
- Las variantes de hardware y las opciones de instalación de fábrica pueden afectar conectores disponibles, comportamiento de la antena y canales de telemetría.
- Los perfiles de configuración del fabricante pueden alterar intervalos de reporte, la selección de parámetros CAN y los disparadores de eventos.
- La elección del modo de transporte entre UDP y TCP puede estar restringida por políticas del operador o de la red local.
- Valide la compatibilidad para SKUs y firmware específicos con la documentación oficial de Teltonika antes de realizar despliegues a gran escala.
- La detección automática de protocolos de Plaspy reduce la configuración manual en la plataforma, pero no reemplaza las comprobaciones de configuración a nivel de dispositivo.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a las flotas a lograr reportes confiables, una resolución de problemas más ágil y un comportamiento predecible al gestionar numerosos dispositivos a través de Plaspy. Saber qué enviará el rastreador, cómo se conecta y qué puede cambiar entre versiones de firmware mejora los resultados operativos.

- Identificación más rápida de desconfiguraciones como servidor, puerto o selección de transporte incorrectos.
- Mejor resolución de problemas al analizar brechas en reportes de posición o telemetría CAN faltante.
- Expectativas claras sobre qué campos de telemetría están disponibles según el firmware o la variante de hardware.
- Mejor planificación de la resiliencia de red y energía en función del comportamiento de reporte del dispositivo.
- Validación más sencilla del comportamiento del dispositivo durante la puesta en marcha y después de actualizaciones de firmware.

## Por qué usar Plaspy con este protocolo

Usar el Teltonika FTC305 con Plaspy ofrece a las organizaciones una vía práctica para integrar datos de posición GNSS y telemetría derivada del CAN en los flujos de trabajo de flotas. La conectividad 4G LTE del FTC305, su rango de alimentación robusto y las opciones de antena externa lo hacen adecuado para e mobility, manejo de materiales y otras clases de vehículos donde la ubicación continua y la telemetría operativa son relevantes. Cuando se configura para reportar a Plaspy, el FTC305 puede alimentar ubicación en tiempo real, alertas y telemetría histórica en los paneles y reglas de Plaspy.

Para saber más sobre Plaspy y cómo funciona con dispositivos como el FTC305 visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, notas de firmware y variantes de hardware siempre verifique la información con el fabricante en https://www.teltonika-gps.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
