---
slug: /coban/gps_405/protocol
id: gps_405-protocol
sidebar_label: Protocol
title: Coban - GPS-405 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para usar el Coban GPS-405 con Plaspy, con ajustes de conexión y guías de compatibilidad
keywords:
  - Protocolo Coban GPS-405
  - Protocolo GPS Coban GPS-405
  - Coban GPS-405 Plaspy
  - Protocolo de rastreo GPS-405
  - Protocolo del rastreador vehicular Coban
  - Comunicación del rastreador GPS
  - Compatibilidad Coban GPS-405
  - Rastreo de flotas Coban GPS-405
  - Protocolo de rastreo vehicular Plaspy
  - Documentación del protocolo del rastreador
---

# Coban - Protocolo GPS-405

Esta página describe el contexto público del protocolo para integrar el rastreador Coban GPS-405 con la plataforma Plaspy. Explica cómo se comunica el dispositivo a nivel general, qué ajustes de conexión espera Plaspy y qué comportamientos del equipo son relevantes para una integración fiable y la operación diaria. El objetivo es ofrecer una guía clara y no sensible que ayude a gestores de flota e integradores a conectar unidades GPS-405 a Plaspy.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos soportados y detecta automáticamente el protocolo cuando el dispositivo comienza a reportar al endpoint de Plaspy. El comportamiento exacto de un GPS-405 puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se concentra en el contexto de comunicación a nivel de dispositivo más que en detalles internos de firmware. Para conjuntos de comandos específicos o detalles de paquetes a bajo nivel, consulte la documentación del fabricante.

## Resumen del protocolo

El protocolo del dispositivo define cómo el GPS-405 envía la ubicación y la telemetría a un servidor remoto y cómo ese servidor identifica y procesa esos reportes. En el contexto de Plaspy, el protocolo cubre el intercambio básico de identificación, datos de posición, eventos de estado y solicitudes de control remoto opcionales de forma que la plataforma pueda utilizarlos para seguimiento y alertas.

- Proporciona la identificación del vehículo y la información de sesión para que Plaspy asocie los reportes entrantes con el activo correcto.
- Entrega actualizaciones de ubicación periódicas y basadas en eventos para seguimiento en tiempo real y reproducción histórica.
- Transmite eventos de estado que Plaspy usa para alarmas y notificaciones, como geocercas, exceso de velocidad, desconexión de alimentación y alertas SOS.
- Incluye telemetría básica y estados de entradas/salidas para que funciones de la plataforma como corte remoto o monitoreo de puertas se reflejen en la interfaz.
- Soporta mensajes de latido o keepalive para que la plataforma detecte conectividad y salud del dispositivo a lo largo del tiempo.

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico de dispositivos en un único endpoint compartido y determina automáticamente el manejo del protocolo adecuado para los rastreadores soportados. En la mayoría de los casos, cuando un GPS-405 está configurado para reportar a Plaspy, la plataforma reconoce el dispositivo y mapea los mensajes entrantes al registro de dispositivo correspondiente sin selección manual del protocolo.

- Plaspy escucha en el endpoint público d.plaspy.com y en la IP 54.85.159.138 para conexiones de dispositivos.
- La plataforma usa el puerto 8888 para el tráfico de dispositivos; todos los dispositivos soportados por Plaspy emplean el mismo puerto para simplificar la configuración.
- Los dispositivos pueden conectarse por TCP o UDP para reportar a Plaspy; el servidor acepta ambos transportes en el puerto 8888.
- Cuando un GPS-405 apunta al endpoint de Plaspy y comienza a enviar reportes, normalmente no es necesario elegir el protocolo manualmente dentro de Plaspy.
- Asegúrese de que el rastreador esté configurado para reportar a d.plaspy.com o directamente a 54.85.159.138 usando el transporte correcto y los ajustes APN adecuados para la SIM en uso.

## Transporte y contexto de conexión

El contexto de conexión incluye las opciones de transporte de red y la dirección del servidor que el GPS-405 debe usar para comunicarse con Plaspy. El GPS-405 soporta múltiples bandas celulares y opciones de transporte comunes, por lo que elegir el transporte y la dirección de servidor correctos es un paso importante para un reporte fiable.

- El GPS-405 puede configurarse para usar TCP o UDP según el soporte del equipo y las preferencias de configuración.
- Plaspy acepta tráfico en el puerto 8888 tanto para TCP como para UDP; ese mismo puerto se usa para todos los dispositivos en la plataforma.
- Los dispositivos pueden enviar reportes al nombre DNS d.plaspy.com o directamente a la IP 54.85.159.138.
- Confirme el APN del equipo, el plan de datos de la SIM y el registro celular antes de investigar problemas a nivel de protocolo.
- Factores de red como NAT del operador, reglas de firewall y restricciones de datos IP pueden afectar la conectividad del dispositivo con el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- El GPS-405 es compatible con Plaspy cuando se configura para reportar al endpoint de la plataforma, pero su comportamiento puede variar entre versiones de firmware y revisiones de hardware.
- Algunas unidades GPS-405 incluyen un selector TCP/UDP que cambia el transporte utilizado; mantenga este ajuste coherente con el transporte elegido en Plaspy.
- Las actualizaciones de firmware del fabricante pueden añadir, modificar o eliminar reportes de eventos, intervalos de reporte o parámetros de puerto, por lo que conviene verificar el firmware si el comportamiento difiere de lo esperado.
- Diferencias en el cableado de accesorios, sensores externos o módulos opcionales (por ejemplo, cámara Wi Fi o sensores de temperatura) pueden cambiar los campos de datos que se reportan.
- Valide siempre un dispositivo en una cuenta de prueba o en un activo de prueba en Plaspy antes de un despliegue masivo para confirmar que alarmas, eventos de geocerca y comandos remotos funcionan como se espera.
- Consulte la documentación de Coban para comandos de inicialización específicos del dispositivo y características soportadas para garantizar compatibilidad.

## Por qué es importante conocer el protocolo

Entender el protocolo de comunicación ayuda a lograr una configuración confiable, una resolución de problemas más rápida y un comportamiento predecible en el seguimiento en producción. Tener claro cómo reporta el GPS-405 y cómo Plaspy recibe esos reportes reduce el tiempo de configuración y aumenta la confianza operativa.

- Permite un aprovisionamiento preciso del dispositivo para que los activos aparezcan correctamente en Plaspy con la identidad y ajustes adecuados.
- Agiliza la resolución de problemas al acotar incidencias a transporte, APN o firmware cuando la conectividad o los eventos no llegan a la plataforma.
- Ayuda a planificar ventanas de mantenimiento y actualizaciones de firmware, ya que cambios en el protocolo o en los eventos pueden afectar los reportes.
- Mejora la afinación de alarmas al conocer qué eventos del dispositivo están disponibles y con qué frecuencia se reportan.
- Favorece una mejor gestión del ciclo de vida de las flotas al alinear las capacidades del dispositivo con las políticas de monitoreo y control.

## Por qué usar Plaspy con este protocolo

Usar Plaspy con el Coban GPS-405 ofrece a las organizaciones una forma sencilla de centralizar la visibilidad de vehículos, las alarmas y la supervisión operativa. La plataforma acepta reportes del GPS-405 en un endpoint compartido y conocido, lo que simplifica la configuración del equipo y reduce la carga de despliegue en flotas mixtas.

Plaspy escucha el tráfico de GPS-405 y otros rastreadores en d.plaspy.com y 54.85.159.138 en el puerto 8888, acepta UDP y TCP, y detecta automáticamente el protocolo del rastreador para que los equipos normalmente comiencen a reportar con mínima selección manual. Para conocer más sobre el funcionamiento de Plaspy y otros dispositivos soportados, visite https://www.plaspy.com. Verifique los detalles actuales del protocolo específico del dispositivo, el comportamiento del firmware y la guía del fabricante en el sitio oficial de Coban en https://www.coban.net/ ya que las implementaciones pueden cambiar con el tiempo.
