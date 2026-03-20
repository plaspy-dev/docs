---
slug: /eelink/tk115/protocol
id: tk115-protocol
sidebar_label: Protocol
title: EElink - TK115 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para la comunicación del EElink TK115 con Plaspy, para rastreo y telemetría de flotas confiables
keywords:
  - protocolo EElink TK115
  - protocolo GPS EElink TK115
  - compatibilidad TK115 Plaspy
  - protocolo de comunicación TK115
  - protocolo de rastreo TK115
  - protocolo rastreador EElink Plaspy
  - integración protocolo rastreador GPS
  - rastreo de vehículos TK115
  - gestión de flotas EElink TK115
  - protocolo telemetría rastreador
---

# EElink - Protocolo TK115

Esta página describe el contexto público del protocolo para usar el rastreador EElink TK115 con Plaspy. Explica de forma general cómo se comunica el dispositivo, qué esperar al integrarlo en Plaspy y cuáles son los ajustes de conexión más comunes para un envío y monitoreo confiables.

Plaspy utiliza ajustes de conexión compartidos entre todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo reporta a la plataforma. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en contexto público no sensible y en orientación práctica de integración, en lugar de detalles internos de firmware.

## Visión general del protocolo

El TK115 emplea un protocolo de reporte para entregar ubicación, estado y eventos de alarma a un servidor central. En la práctica, este protocolo regula cómo el dispositivo se identifica, cuándo envía posiciones y eventos, y cómo Plaspy recibe e interpreta esa información para rastreo y alertas.

- Permite que el rastreador envíe coordenadas GPS y LBS junto con telemetría básica como estado ACC/ignición y batería.
- Transporta eventos de alarma como movimiento no autorizado, vibración, geocerca y exceso de velocidad hacia sistemas posteriores.
- Provee un canal estable para actualizaciones remotas de parámetros y acciones de control remoto opcionales cuando el dispositivo lo soporta.
- Conecta el rastreador con Plaspy para que la telemetría pueda presentarse en paneles, reportes y flujos de automatización.
- Abstracta detalles específicos de reporte por dispositivo para que Plaspy pueda ingerir datos útiles de múltiples modelos de rastreadores.

## Cómo Plaspy detecta el protocolo

Plaspy opera un único endpoint público que recibe los reportes de dispositivos e identifica automáticamente el protocolo del rastreador a partir de los mensajes entrantes. Cuando un TK115 está configurado para reportar a Plaspy, la plataforma examina la conexión entrante y utiliza sus capacidades de detección para asignar el dispositivo a la lógica de procesamiento correcta.

- Los dispositivos deben configurarse para reportar a d.plaspy.com o a la dirección IP del servidor de Plaspy 54.85.159.138.
- Plaspy escucha en el puerto 8888 para conexiones entrantes de rastreadores y usa el mismo puerto para todos los dispositivos soportados.
- El dispositivo puede enviarse por UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo.
- En la mayoría de los casos usted no necesita seleccionar manualmente un protocolo dentro de Plaspy si el rastreador apunta correctamente al endpoint de Plaspy.
- La detección automática reduce pasos de configuración y ayuda a acomodar una variedad de modelos y variaciones de firmware.

## Transporte y contexto de conexión

El TK115 puede configurarse para comunicarse sobre enlaces celulares estándar y normalmente soporta modos de reporte tanto por UDP como por TCP. Elegir el transporte adecuado y asegurarse de que el rastreador apunte al endpoint de Plaspy son pasos clave para lograr conectividad confiable.

- Apunte el dispositivo al dominio de Plaspy d.plaspy.com o, como alternativa, a la IP del servidor 54.85.159.138.
- Configure el rastreador para usar el puerto 8888 para reportes; Plaspy utiliza el mismo puerto para todos los equipos.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el firmware del rastreador y la preferencia del operador.
- Asegúrese de que la conectividad de datos móviles y la configuración APN del equipo sean válidas para que el rastreador pueda alcanzar el endpoint de Plaspy.
- Verifique que los firewalls del operador o de la red APN no bloqueen el tráfico saliente UDP o TCP al puerto 8888.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware pueden modificar la cadencia de mensajes, campos opcionales o alarmas disponibles entre revisiones de dispositivos.
- Las revisiones de hardware o accesorios opcionales como relés y sensores adicionales pueden exponer telemetría extra que no está presente en todas las unidades.
- La selección de transporte entre UDP y TCP puede afectar la confiabilidad y el comportamiento de retransmisión; elija el modo compatible con su flota y firmware del dispositivo.
- Las capacidades de configuración remota del fabricante varían; algunos parámetros pueden ajustarse por aire mientras otros requieren configuración local.
- Valide siempre que el dispositivo esté configurado para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888 para la ingestión en Plaspy.
- Confirme que se sigan las instrucciones de configuración proporcionadas por el fabricante para garantizar el formato correcto del primer reporte y permitir que Plaspy detecte el dispositivo.

## Por qué es importante entender el protocolo

Saber cómo se comunica el TK115 le ayuda a configurar los dispositivos correctamente, solucionar problemas de conectividad o de reporte y planear para variaciones de firmware o hardware en despliegues de producción. Un entendimiento práctico del contexto de reporte reduce el tiempo para obtener valor y mejora la fiabilidad operativa.

- Ayuda a asegurar la entrada de servidor y la selección de transporte correctas para que los dispositivos lleguen a Plaspy de forma confiable.
- Acelera la resolución de problemas al delimitar los fallos a capas de red, transporte o configuración en lugar del parseo de la plataforma.
- Aclara las expectativas sobre qué telemetría y alarmas el dispositivo puede entregar a Plaspy.
- Facilita la planificación de actualizaciones de firmware y revisiones de hardware en despliegues a gran escala.
- Permite automatizaciones y alertas más previsibles al alinear el comportamiento del dispositivo con los flujos de trabajo de la plataforma.

## Por qué usar Plaspy con este protocolo

Usar el TK115 con Plaspy proporciona a operadores de flotas y equipos de seguridad visibilidad centralizada de las ubicaciones de los vehículos, el estado de ignición y los eventos de alarma. La forma compacta del TK115, la detección ACC, el relé opcional y la batería de respaldo lo hacen adecuado para motocicletas y vehículos livianos, mientras que Plaspy ofrece las capacidades de ingestión, visualización y automatización que los operadores necesitan para el rastreo y la respuesta ante incidentes.

Si desea conocer más sobre Plaspy y cómo funciona con dispositivos como el EElink TK115, visite https://www.plaspy.com. Para detalles específicos del protocolo por dispositivo, notas de firmware e instrucciones del fabricante, consulte la documentación oficial de EElink en https://www.eelink.com.cn/ ya que las implementaciones y el comportamiento del firmware pueden cambiar con el tiempo.
