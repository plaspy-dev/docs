---
slug: /xirgo/xt21/protocol
id: xt21-protocol
sidebar_label: Protocol
title: Xirgo - XT21 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del localizador Xirgo XT21 y cómo comunica telemetría y eventos con Plaspy
keywords:
  - protocolo Xirgo XT21
  - protocolo GPS Xirgo XT21
  - protocolo Xirgo XT21 para Plaspy
  - protocolo del rastreador XT21
  - comunicación del rastreador GPS XT21
  - compatibilidad de dispositivos Plaspy
  - gestión de flotas XT21
  - seguimiento de activos XT21
  - protocolo de telemetría Xirgo
  - monitoreo de voltaje de batería XT21
---

# Xirgo - Protocolo XT21

Esta página describe el contexto del protocolo público para usar el localizador Xirgo XT21 con Plaspy. Explica cómo el XT21 envía telemetría y eventos a Plaspy, el papel del protocolo de reporte en esa comunicación y detalles prácticos de conexión que ayudan a los operadores a configurar y validar el envío de datos desde el dispositivo hacia la plataforma.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. El XT21 es un rastreador GPS compacto con conectividad LTE, dos entradas digitales y una entrada analógica interna para la tensión de batería; esas capacidades de hardware determinan la telemetría que Plaspy recibe e interpreta.

## Visión general del protocolo

El protocolo de comunicación del XT21 es el mecanismo que el dispositivo usa para identificarse, reportar posición y telemetría, y transmitir señales de evento como cambios en las entradas digitales y lecturas de voltaje de batería a Plaspy. Esta sección ofrece una visión general de ese papel sin exponer detalles internos de firmware ni del parsing privado.

- Permite al XT21 enviar fijaciones de posición GNSS y telemetría básica (eventos de entradas digitales y voltaje de batería) a la nube.
- Transporta información de identidad del dispositivo que Plaspy utiliza para asociar los mensajes entrantes con una cuenta y un registro de activo.
- Señala cambios de estado de las dos entradas digitales de uso general para que Plaspy los mapee a eventos como puerta abierta, manipulación o encendido por llave.
- Transmite lecturas de la entrada analógica interna para el voltaje de batería, lo que permite a Plaspy generar alertas de batería baja y reportes de uptime.
- Funciona sobre transporte TCP o UDP estándar para que el XT21 pueda reportar de forma confiable bajo distintas condiciones de red.

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones entrantes de dispositivos en un único endpoint compartido y detecta automáticamente el protocolo empleado por cada dispositivo. En la mayoría de los casos, un XT21 configurado correctamente comenzará a reportar a Plaspy sin que sea necesario seleccionar el protocolo manualmente en la plataforma.

- El endpoint público del servidor de Plaspy es accesible en d.plaspy.com y el servicio también está disponible en la IP 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto para el reporte, y Plaspy escucha en el puerto 8888 para datos de dispositivos.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y la preferencia del operador.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta al endpoint compartido, eliminando la necesidad de configuración manual en implementaciones típicas.
- Si un dispositivo no aparece en Plaspy, verifique que apunte a d.plaspy.com o 54.85.159.138 y que el transporte esté establecido en TCP o UDP en el puerto 8888.

## Contexto de transporte y conexión

Comprender el contexto de transporte y direccionamiento ayuda a garantizar que el XT21 alcance a Plaspy de forma confiable. El XT21 usa conectividad celular LTE para reenviar reportes, y desajustes en la red o en la configuración del dispositivo pueden impedir que los mensajes lleguen a la plataforma.

- El XT21 puede configurarse para usar UDP o TCP para el reporte; ambos transportes son compatibles en el puerto 8888.
- Apunte el dispositivo al endpoint de Plaspy usando d.plaspy.com o la dirección IP 54.85.159.138 como host de destino.
- Plaspy escucha en el mismo puerto para todos los dispositivos, por lo que la configuración del puerto es uniforme entre modelos y cuentas.
- Elija UDP para menor sobrecarga y posible entrega más rápida en algunas redes, o TCP cuando la fiabilidad de sesión y la entrega ordenada sean preferibles según el firmware del dispositivo.
- Verifique que las redes de los operadores o los firewalls locales permitan conexiones salientes al host y puerto de Plaspy para evitar bloqueos en el reporte.

## Notas sobre compatibilidad del protocolo

- Las diferencias entre versiones de firmware pueden cambiar cómo el XT21 formatea o programa la telemetría; confirme siempre el comportamiento para el firmware específico del dispositivo.
- Las revisiones de hardware y el cableado de accesorios opcionales (para las entradas) pueden afectar qué eventos y señales reporta el dispositivo a Plaspy.
- La selección de transporte (UDP frente a TCP) debe coincidir con la configuración del dispositivo y las condiciones de la red para una entrega fiable a Plaspy en el puerto 8888.
- Cambios por parte del fabricante en la configuración por defecto del servidor o en el comportamiento de reporte pueden requerir reconfigurar el dispositivo para que apunte a d.plaspy.com o 54.85.159.138.
- Aunque Plaspy detecta automáticamente el protocolo, la configuración correcta de la identidad del dispositivo (IMEI o ID del equipo) es necesaria para que los mensajes entrantes se asignen al activo correcto.
- Valide la compatibilidad y cualquier particularidad del dispositivo contra la documentación oficial de Xirgo antes de implementaciones a gran escala.

## Por qué es importante entender el protocolo

Tener una comprensión clara y práctica del protocolo de comunicación del XT21 ayuda en la configuración inicial, la resolución diaria de problemas y la fiabilidad a largo plazo del reporte de dispositivos hacia Plaspy. Saber qué señales están disponibles y cómo el dispositivo alcanza la plataforma reduce el tiempo empleado en diagnosticar problemas de conectividad y datos.

- Asegura el direccionamiento correcto de los dispositivos para que los mensajes lleguen al endpoint d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Ayuda a decidir si usar UDP o TCP según el comportamiento del firmware y las condiciones de red.
- Facilita la interpretación de qué eventos de entrada digital y lecturas analógicas entregará el XT21 a Plaspy para alertas y reportes.
- Ayuda en la resolución cuando falta telemetría al acotar las revisiones a transporte, firmware y cableado.
- Apoya la planificación de escalado y gestión de energía al desplegar muchos activos de bajo consumo como remolques y equipos portátiles.

## Por qué usar Plaspy con este protocolo

Usar el XT21 con Plaspy ofrece a las organizaciones una vía sencilla para monitorear activos remotos con requerimientos de bajo consumo. El XT21 proporciona las fijaciones de posición esenciales, dos entradas digitales para detección de eventos y una señal de voltaje de batería que Plaspy ingiere para alimentar mapas en vivo, alertas y análisis históricos.

El enfoque de endpoint unificado de Plaspy simplifica la incorporación de dispositivos porque todos los equipos compatibles reportan al mismo puerto y Plaspy detecta automáticamente el protocolo del rastreador. Para más información sobre el uso del XT21 con Plaspy y para revisar las funciones de la plataforma, visite https://www.plaspy.com. Para detalles de comportamiento específico del protocolo y versiones de firmware, verifique la información con el fabricante en https://xirgo.com/ ya que las implementaciones y el firmware pueden cambiar con el tiempo.
