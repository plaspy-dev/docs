---
slug: /eelink/tk115/protocol
id: tk115-protocol
sidebar_label: Protocol
title: EElink - TK115 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar el rastreador GPS EElink TK115 con la configuración compartida de Plaspy
keywords:
  - protocolo EElink TK115
  - protocolo GPS EElink TK115
  - protocolo de rastreo EElink TK115
  - compatibilidad EElink TK115 Plaspy
  - protocolo rastreador EElink
  - compatibilidad rastreador GPS TK115
  - protocolo de comunicación rastreador GPS
  - integración de dispositivos Plaspy
  - seguimiento de flota TK115
  - protocolo rastreador para scooter
---

# EElink - Protocolo TK115

Esta página ofrece contexto público sobre el protocolo utilizado por el rastreador GPS EElink TK115 para integrarse con Plaspy. Explica a alto nivel cómo se comunica el dispositivo con la plataforma, qué papel juega el protocolo de reporte en la integración y qué ajustes de conexión emplea Plaspy para recibir telemetría y eventos desde el equipo.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy. El comportamiento exacto en el dispositivo y el contenido de los mensajes pueden variar según la versión de firmware, la revisión de hardware o la implementación del fabricante, por lo que esta página se centra en el contexto público y no sensible que ayuda a configurar y solucionar problemas de forma fiable.

## Resumen del protocolo

El protocolo de reporte del TK115 es la capa de dispositivo que permite que datos de ubicación, estado y alarmas fluyan desde el rastreador hacia Plaspy. En la práctica, este protocolo transmite posicionamiento GPS y LBS, estado de ignición e entradas, eventos de alarma y telemetría que Plaspy consume para ofrecer seguimiento en tiempo real, alertas e informes.

- Transmite información de ubicación GPS y AGPS asistido junto con LBS como respaldo para actualizaciones continuas de posición.
- Reporta estado del dispositivo como el estado ACC de ignición, condiciones de alimentación y batería, y alarmas en entradas.
- Envía notificaciones de eventos por desplazamiento, vibración, exceso de velocidad, violaciones de geocerca y otras alarmas de seguridad.
- Entrega la telemetría necesaria para flujos operativos como control de inmovilización mediante comandos a relé opcionales.
- Incluye reportes periódicos de latido (heartbeat) o keepalive para que Plaspy mantenga la presencia y detecte condiciones fuera de línea.

## Cómo Plaspy detecta el protocolo

Plaspy centraliza las conexiones entrantes de rastreadores en un endpoint y puerto compartidos, y la plataforma realiza detección automática del protocolo para los dispositivos que reportan correctamente. Cuando el TK115 está configurado para reportar a Plaspy, por lo general no es necesario que usted seleccione un protocolo dentro de Plaspy para configuraciones típicas.

- El endpoint público de Plaspy para reportes de dispositivos es d.plaspy.com y también se puede alcanzar en 54.85.159.138.
- Todos los dispositivos usan el mismo puerto en Plaspy, que es 8888, lo que simplifica la configuración entre modelos.
- Plaspy detecta automáticamente el protocolo del rastreador una vez que los mensajes llegan a la plataforma, evitando la selección manual en la mayoría de los casos.
- La configuración correcta del dispositivo para apuntar al endpoint de Plaspy es el requisito habitual para habilitar la detección automática y la ingesta.
- Si un dispositivo tiene un comportamiento de reporte personalizado, verifique que esté enviando telemetría y mensajes de evento estándar al endpoint de Plaspy.

## Transporte y contexto de conexión

El transporte y el direccionamiento determinan cómo el TK115 alcanza Plaspy, pero no cambian el rol general del protocolo. El TK115 puede configurarse para usar UDP o TCP al enviar datos al endpoint de Plaspy, y el mismo puerto de Plaspy se usa para todos los rastreadores compatibles.

- El TK115 puede configurarse para reportar por UDP o TCP en el puerto 8888 según las opciones del equipo y el entorno de red.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la dirección numérica 54.85.159.138 para alcanzar los servidores de Plaspy.
- Plaspy utiliza el puerto 8888 para todos los dispositivos para mantener la consistencia de configuración entre modelos y versiones de firmware.
- Características de la red como NAT, reglas de firewall y comportamiento del operador pueden afectar la fiabilidad de UDP frente a TCP; elija el transporte que mejor se adapte a su despliegue y a las restricciones del carrier.
- Asegúrese de que la conectividad saliente del dispositivo hacia d.plaspy.com en el puerto 8888 esté permitida por cualquier firewall intermedio o configuración de APN.

## Notas sobre compatibilidad del protocolo

- Las diferencias en la revisión de firmware del TK115 pueden cambiar qué campos o eventos se reportan y con qué frecuencia se envían los reportes.
- Revisión de hardware o accesorios opcionales como relés externos o sensores pueden añadir o modificar entradas y alarmas reportadas.
- La selección del transporte (UDP vs TCP) puede afectar la semántica de entrega; algunas redes favorecen un transporte por su fiabilidad.
- Las herramientas de configuración del fabricante o los ajustes de parámetros remotos pueden cambiar intervalos de reporte, comportamiento de latido y umbrales de alarma.
- Valide la configuración comprobando que el TK115 esté reportando a d.plaspy.com o 54.85.159.138 en el puerto 8888 y que los mensajes sean visibles en Plaspy tras la configuración inicial.
- Al utilizar funciones de relé o inmovilizador, confirme los comandos de control remoto compatibles y los ajustes necesarios en la documentación del fabricante.

## Por qué es importante comprender el protocolo

Entender el protocolo de comunicación del TK115 ayuda a asegurar una integración fiable con Plaspy, agiliza la solución de problemas y soporta operaciones a largo plazo al clarificar qué datos entregará el rastreador y cómo Plaspy los procesará.

- Permite identificar si la ausencia de datos se debe a la configuración del dispositivo, problemas de transporte o diferencias de firmware.
- Facilita la configuración de red y firewall correcta para que los dispositivos puedan alcanzar d.plaspy.com en el puerto 8888.
- Aclara los tipos de telemetría y eventos esperados para diseñar alertas, geocercas y flujos de inmovilización en Plaspy.
- Ayuda a validar que el estado ACC, alertas de batería y eventos de alarma se entreguen de forma consistente a la plataforma.
- Apoya la planificación de actualizaciones OTA o reemplazos de dispositivos entendiendo las diferencias de comportamiento entre firmwares.

## Por qué usar Plaspy con este protocolo

Usar el TK115 con Plaspy ofrece a operadores de flotas y movilidad acceso sencillo a datos de posición, notificaciones de alarma y telemetría de estado para motocicletas y scooters eléctricos. La combinación de funciones del hardware TK115 como posicionamiento asistido AGPS, detección ACC, control opcional por relé y energía de respaldo, junto con la ingesta centralizada y la detección automática de protocolo de Plaspy, habilita flujos operativos y de seguridad prácticos sin configuraciones complejas por dispositivo.

Para obtener más información sobre Plaspy y cómo sus dispositivos TK115 pueden reportar a la plataforma, visite https://www.plaspy.com. Para detalles más actuales sobre el protocolo específico del dispositivo, notas de firmware e instrucciones de configuración, verifique la información en el sitio del fabricante https://www.eelink.com.cn/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
